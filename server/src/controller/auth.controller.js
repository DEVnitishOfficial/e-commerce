
import { generatejwtToken } from '../config/jwtProvider.js'
import createCart from '../services/cart.service.js'
import {createUser,getUserByEmail } from '../services/user.service.js'
import bcrypt from "bcrypt";

 const register = async(req,res) => {
   try {
     const user = await createUser(req.body)
     const jwt = generatejwtToken(user._id)

     await createCart(user)

     return res.status(200).json(
      {
        success:"true",
        message:"registered successfully",
        jwt
      }
      )
   } catch (error) {
    return res.status(500).json(
      {
        success:"false",
        error:error.message
      })
   }
}

 const login = async(req,res) => {
    try{
      const {email, password} = req.body
      const user = await getUserByEmail(email)
      console.log('user',user)

      if(!user){
        return res.status(404).send({message:"user not found with email",email})
      }
      const isPasswordValid = await bcrypt.compare(password,user.password)
      if(!isPasswordValid){
        return res.status(401).send({
          message:"user password not matched"
        })
      }
        const jwtToken =  generatejwtToken(user._id)
        user.password = undefined
        return res.status(200).send(
          {
            message:"loggedIn successfully",
            jwtToken
          }
          )

    }catch(error){
        return res.status(500).send(
          {
            success:"false",
            error:error.message
          }
          )
    }
}

export{
  register,
  login
}