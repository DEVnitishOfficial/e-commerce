import Cart from "../models/cart.model.js";
import CartItem from "../models/cartItem.model.js";
import Product from "../models/product.model.js";
async function createCart(user) {
  try {
    const cart = new Cart({ user });
    const createdCart = await cart.save();
    console.log("createdCart", createdCart);
    return createdCart;
  } catch (error) {
    return new Error(error.message);
  }
}
async function findUserCart(userId) {
    const cart = await Cart.findOne({ user: userId })

    let cartItems = await CartItem.find({ cart: cart._id }).populate("product");

    cart.cartItems = cartItems;

    let totalPrice = 0;
    let totalDiscountedPrice = 0;
    let totalItem = 0;

    for (let cartItem of cart.cartItems) {
      totalPrice += cartItem.price;
      totalDiscountedPrice += cartItem.discountedPrice;
      totalItem += cartItem.quantity;
    }
    cart.totalPrice = totalPrice;
    cart.totalItem = totalItem;
    cart.totalDiscountedPrice = totalDiscountedPrice;

    return cart;
}
async function addCartItem(userId, req) {
  const cart = await Cart.findOne({ user: userId });
  if(!cart){
    return "cart not found"
  }
  const product = await Product.findById(req.productId)
  if(!product){
    return "product not found"
  }

  const isItemPresentInCart = await CartItem.findOne({
    cart: cart._id,
    product: product._id,
    userId,
  });

  if (!isItemPresentInCart) {
    const cartItem = new CartItem({
      product: product._id,
      cart: cart._id,
      quantity: 1,
      userId,
      price: product.price,
      size: req.size,
      discountedPrice: product.discountedPrice,
    });

    const createdCartItem = await cartItem.save();
    cart.cartItems.push(createdCartItem);
    await cart.save();
  }
  return cart;
}
export { createCart, findUserCart, addCartItem };
