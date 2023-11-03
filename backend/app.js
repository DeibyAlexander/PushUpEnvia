import express from "express";
import dotenv from 'dotenv';
import morgan from "morgan";
import router from "./routes/routes.js";

dotenv.config()

const app = express()

app.use(morgan('dev'))
app.use(express.json())

const port = process.env.PORT46

app.listen(port, ()=>{
    console.log("DB online");
})

app.use('/envia', router)