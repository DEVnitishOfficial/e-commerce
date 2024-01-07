import express from 'express'
import cors from 'cors'
import {config} from 'dotenv'
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

export default app