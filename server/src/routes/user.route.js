import { Router } from 'express'
import userControllers from '../controller/user.controller.js'

const router = Router()

router.get("/profile",userControllers.getUserProfile)
router.get("/allusers",userControllers.getAllUsers)

export default router

