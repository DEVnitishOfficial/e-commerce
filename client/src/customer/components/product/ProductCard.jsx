
import './ProductCard.css'
function ProductCard({product}){
    return(
        <div className="productCard w-[15rem] m-3 transition-all cursor-pointer">
            <div className="h-[20rem]">
                <img className="h-full w-full object-cover object-left-top" src={product.imageUrl} alt="" />
            </div>
            <div className="textPart text-gray-500 p-3">
                    <div>
                        <p className="font-bold opacity-60 text-blue-300 mt-1">{product.brand} </p>
                        <p className="text-black">{product.title}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <p className="font-semibold">{product.discountedPrice}</p>
                        <p className="line-through opacity-50">{product.price}</p>
                        <p className="text-green-500 font-semibold">{product.discountPersent}% off</p>
                    </div>
            </div>
        </div>
    )
}
export default ProductCard