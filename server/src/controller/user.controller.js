
import { getUserProfileByToken,getAllUser } from '../services/user.service.js';
 const getUserProfile = async(req,res)=>{
    try {
        const jwtToken = req.headers.authorization?.split(" ")[1];
        if(!jwtToken){
            return res.status(404).send({message:"Token not found",success:"false"})
        }
        const user = await getUserProfileByToken(jwtToken)
        return res.status(200).send(user)
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

 const getAllUsers = async(req,res) => {
    try {
        const users = await getAllUser()
        return res.status(200).send(users)
    } catch (error) {
        return res.status(5000).send({error:error.message})
    }
}

export{
    getAllUsers,
    getUserProfile
}