import { Router } from 'express'
import { getUserProfile,getAllUsers } from '../controller/user.controller.js'

const router = Router()

router.get("/profile", getUserProfile)
router.get("/allusers", getAllUsers)

export default router

