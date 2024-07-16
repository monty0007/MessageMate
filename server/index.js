import  express  from "express";
import route from "./routes/route.js";
import Connection from "./database/db.js";
import cors from 'cors';
import bodyParser from "body-parser";

const app=express();

app.use(cors());
app.use(bodyParser.json({ extended:true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/',route);

Connection();

const PORT=8000;

app.listen(PORT, ()=> console.log(`server is running succesfully on ${PORT}`))