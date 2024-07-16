import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config();

const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;

const Connection= async ()=>{
    const URL=`mongodb://${USERNAME}:${PASSWORD}@ac-ll8yqa7-shard-00-00.hi3uypy.mongodb.net:27017,ac-ll8yqa7-shard-00-01.hi3uypy.mongodb.net:27017,ac-ll8yqa7-shard-00-02.hi3uypy.mongodb.net:27017/test?ssl=true&replicaSet=atlas-11f7lo-shard-0&authSource=admin&retryWrites=true&w=majority&appName=clone-whatsapp`
    try{
        await mongoose.connect(URL,{useUnifiedTopology: true})
        console.log("Connected to Database Succesfully")
    }catch(error){
        console.log("Error while connecting to databse", error.message)
    }
}

export default Connection