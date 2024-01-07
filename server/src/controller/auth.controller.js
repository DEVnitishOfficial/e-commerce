
import userService from '../services/user.service.js'
import jwtProvider from '../config/jwtProvider.js'
import cartService from '../services/cart.service.js'
import bcrypt from 'bcrypt'

export const register = async(req,res) => {
   try {
     const user = await userService.createUser(req.body)
     const jwt = jwtProvider.generatejwtToken(user._id)

     await cartService.createCart(user)

     return res.status(200).send({jwt,message:"registered successfully"})
   } catch (error) {
    return res.status(500).send({error:error.message})
   }
}

 const login = async(req,res) => {
    const {email, password} = req.body
    try{
      const user = await userService.getUserByEmail(email)

      if(!user){
        return res.status(404).send({message:"user not found with email",email})
      }
      const isPasswordValid = await bcrypt.compare(password,user.password)
      if(!isPasswordValid){
        return res.status(401).send({})
      }
        const jwtToken =  jwtProvider.generatejwtToken(user._id)
        return res.status(200).json({jwtToken,message:"loggedIn successfully"})

    }catch(error){
        return res.status(500).send({error:error.message})
    }
}

export default login