import Category from "../models/category.model.js";
import Product from "../models/product.model.js";

// creating a new product
async function createProduct(reqData) {
  let topLevel = await Category.findOne({ name: reqData.topLavelCategory });
  console.log('toplevel',topLevel)

  if (!topLevel) {
   const topLavelCategory = new Category({
      name: reqData.topLavelCategory,
      level: 1,
    });
    topLevel = await topLavelCategory.save();
  }

  let secondLevel = await Category.findOne({
    name: reqData.secondLavelCategory,
    parentCategory: topLevel._id,
  });

  if (!secondLevel) {
    const secondLavelCategory = new Category({
      name: reqData.secondLavelCategory,
      parentCategory: topLevel._id,
      level: 2,
    });
    secondLevel = await secondLavelCategory.save();
  }

  let thirdLevel = await Category.findOne({
    name: reqData.thirdLavelCategory,
    parentCategory: secondLevel._id,
  });

  if (!thirdLevel) {
   const  thirdLavelCategory = new Category({
      name: reqData.thirdLavelCategory,
      parentCategory: secondLevel._id,
      level: 3,
    });
    thirdLevel = await thirdLavelCategory.save();
  }

  const product = new Product({
    title: reqData.title,
    color: reqData.color,
    description: reqData.description,
    discountedPrice: reqData.discountedPrice,
    discountPersent: reqData.discountPersent,
    imageUrl: reqData.imageUrl,
    brand: reqData.brand,
    price: reqData.price,
    sizes: reqData.size,
    quantity: reqData.quantity,
    category: thirdLevel._id,
  });
  return await product.save();
}

// deleting a product by id
async function deleteProduct(productId) {
  const product = await findProductById(productId);

  if (!product) {
    throw new Error("product not found with id - : ", productId);
  }

  await Product.findByIdAndDelete(productId);
  return "product deleted successfully";
}

//updating product by id
async function updateProduct(productId, reqData) {
  return await Product.findByIdAndUpdate(productId, reqData);
}

// finding product by id
async function findProductById(id) {
  console.log('id',id)
  const product = await Product.findById(id).populate("category").exec();
  if (!product) {
    throw new Error("product not found with id", id);
  }
  return product;
}

// Get all products with filtering and pagination
async function getAllProducts(reqQuery) {
  let {
    category,
    sizes,
    color,
    minPrice,
    maxPrice,
    minDiscount,
    sort,
    stock,
    pageNumber,
    pageSize,
  } = reqQuery;

  (pageSize = pageSize || 10), (pageNumber = pageNumber || 1);
  let query = Product.find().populate("category");

  if (category) {
    const existCategory = await Category.findOne({ name: category });
    if (existCategory) {
      query = query.where("category").equals(existCategory._id);
    } else {
      return { content: [], currentPage: 1, totalPage: 0 };
    }
  }

  if (color) {
    console.log('color',color)
    const colorSet = new Set(color.split(",").map(color => color.trim().toLowerCase()));
    const colorRegex = colorSet.size > 0 ? new RegExp([...colorSet].join("|"), "i") : null;
    // The | (pipe) character in the regular expression acts as an OR operator, allowing the regex to match any of the specified colors.
    // "i": This is a flag indicating a case-insensitive match.

    query = query.where("color").regex(colorRegex);
  }

  if (sizes) {
    const sizeSet = new Set(sizes);
    query = query.where("sizes.name").in([...sizeSet]);
    // query.where("size.name"): Specifies the field on which the condition is applied. In this case, it's the "size.name" field.
    // .in([...sizeSet]): Specifies the condition that the "size.name" field should match any of the values in the array [...sizeSet].
  }

  if (minPrice && maxPrice) {
    console.log('minPrice & maxPrice',minPrice, maxPrice)
    query = query.where("discountedPrice").gte(minPrice).lte(maxPrice);
    // .where('discountedPrice'): Specifies that the subsequent conditions will be applied to the "discountedPrice" field.

    // .gte(minPrice): Adds a condition that the "discountedPrice" should be greater than or equal to (gte) the value of minPrice.

    // .lte(maxPrice): Adds another condition that the "discountedPrice" should be less than or equal to (lte) the value of maxPrice.
  }
  if (minDiscount) {
    query = query.where("discountPresent").gt(minDiscount);
    // .where("discountPresent"): Specifies that the subsequent condition will be applied to the "discountPresent" field.

    // .gt(minDiscount): Adds a condition that the "discountPresent" should be greater than (gt) the value of minDiscount.
  }
  if (stock) {
    if (stock == "in_stock") {
      query = query.where("quantity").gt(0);
    } else if (stock == "out_of_stock") {
      query = query.where("quantity").lte(0);
    }
  }

  if (sort) {
    const sortDirection = sort === "price_high" ? -1 : 1;
    query = query.sort({ discountedPrice: sortDirection });
  }
  // Applying pagination
  const totalProducts = await Product.countDocuments(query);
  const skip = (pageNumber - 1) * pageSize;
  query = query.skip(skip).limit(pageSize);

  const products = await query.exec();
  const totalPages = Math.ceil(totalProducts / pageSize);
  return { content: products, currentPage: pageNumber, totalPages: totalPages };
}
// for admin to adding the product for first time in the database
async function createMultipleProduct(products) {
  for (let product of products) {
    await createProduct(product);
  }
}

export {
  createProduct,
  deleteProduct,
  updateProduct,
  findProductById,
  getAllProducts,
  createMultipleProduct,
};
