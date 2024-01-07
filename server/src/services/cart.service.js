
import Cart from "../models/cart.model.js"
 async function createCart(user){
    try {
        const cart = new Cart({user})
        const createdCart = await cart.save()
        return createdCart
    } catch (error) {
      return new Error(error.message)   
    }
}
export default createCart