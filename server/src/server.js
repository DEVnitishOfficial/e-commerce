import dotenv from 'dotenv'
import connectDb from './config/db.js'
import app from './index.js'
dotenv.config({
    path:'./env'
})
const port=process.env.PORT
app.listen(port,async()=>{
    await connectDb()
    console.log(`Server is listening on port http://localhost:${port}`)
})