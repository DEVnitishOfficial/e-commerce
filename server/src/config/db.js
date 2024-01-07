import mongoose from 'mongoose'
const mongoDbUrl='mongodb+srv://nitishOfficial:nitish123@cluster0.hxbp9yn.mongodb.net/e-commerce?retryWrites=true&w=majority'
const connectDb=async()=>{
    try {
        const{connection} =  await mongoose.connect(mongoDbUrl)
    if(connection){
        console.log(`Connected to MongodDB at : ${connection.host}`)
      }
    } catch (error) {
        console.log(error)
    process.exit(1)
    }
    
}

export default connectDb