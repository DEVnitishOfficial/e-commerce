import connectDb from './config/db.js'
import app from './index.js'
const port=process.env.PORT || 4000
app.listen(port,async()=>{
    await connectDb()
    console.log(`Server is listening on port http://localhost:${port}`)
})