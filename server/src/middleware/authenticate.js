import { getUserIdFromToken } from "../config/jwtProvider.js"
import {findUserById} from "../services/user.service.js"

const authenticate = async(req,res,next) =>{
    try{
        const token = req.headers.authorization?.split(" ")[1]
        console.log('token',token)
        if(!token){
            return res.status(404).json({
                success:false,
                message:"token not found"
            })
        }
      const userId = getUserIdFromToken(token)
      const user = await findUserById(userId)
      req.user = user
    }catch(error){
     return res.status(500).json({
        success:false,
        message : "Got error in authenticating user ",
        error:error.message
     })
    }
    next()
}

export default authenticate