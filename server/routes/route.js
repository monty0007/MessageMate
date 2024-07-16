import express  from "express";

import { addUser, getUsers } from "../conrtoller/user-contoller.js";
import { newConversation, getConversation } from "../conrtoller/conversation-controller.js";
import {newMessage, getMessage} from "../conrtoller/message-controller.js";
import multer from 'multer'
import { GridFsStorage } from 'multer-gridfs-storage'


const route=express.Router();

route.post('/add', addUser)
route.get('/users', getUsers)

route.post('/conversation/add', newConversation)
route.post('/conversation/get', getConversation)

route.post('/message/add', newMessage);
route.get('/message/get/:id', getMessage);

// route.post('/file/upload', upload.single("file"), uploadFile);

//Multer Work

const upload=multer({ dest : 'uploads/' })

route.post("/upload-image", upload.single("image"), async (req, res )=>{
    console.log(req.body)
    res.send("Uploaded !")
})
export default route