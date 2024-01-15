import express from 'express'
import cors from 'cors'
import {config} from 'dotenv'
import authRouter from './routes/auth.route.js'
import userRouter from './routes/user.route.js'
import productRouter from './routes/customerOrder.route.js'
import adminProductRouter from './routes/adminProduct.route.js'
import cartRouter from './routes/cart.routes.js'
import cartItemRouter from './routes/cartItem.route.js'
import orderRouter from './routes/customerOrder.route.js'
import reviewRouter from './routes/review.route.js'
import ratingRouter from './routes/rating.route.js'
import adminOrderRoutes from './routes/adminOrder.route.js'
config()

const app = express()
app.use(express.json())
app.use(cors())

app.get("/",(req,res) => {
    return res.status(200).send({
        message : "This is the testing home page of e-commerce backend ",
        success : true
    })
})

app.use("/auth",authRouter)
app.use("/user",userRouter)
app.use("/api/products",productRouter);
app.use("/api/admin/products",adminProductRouter);
app.use("/api/cart", cartRouter);
app.use("/api/cart_items",cartItemRouter);
app.use("/api/orders",orderRouter);
app.use("/api/reviews",reviewRouter);
app.use("/api/ratings",ratingRouter);
app.use("/api/admin/orders",adminOrderRoutes);

app.use('*', (req,res) => {
    res.status(404).send('OPPS!! 404 page not found')
})


export default app