import Conversation from "../model/Convesation.js";

export const newConversation= async(request, responce)=>{
    try{
        const senderId= request.body.senderId;
        const receiverId=request.body.receiverId;

        const exist=await Conversation.findOne({members: {$all:[receiverId,senderId]}})

        if(exist){
            return responce.status(200).json("Conversation already exist");
        }
        
        const newConversation=new Conversation({
            members: [senderId, receiverId]
        })
        await newConversation.save();
        return responce.status(200).json("Conversation is Created");
    }catch(error){
        return responce.status(500).json(error.message);
    }
}


export const getConversation= async (request, responce)=>{
    try{
        const senderId= request.body.senderId;
        const receiverId=request.body.receiverId;
       let conversation= await Conversation.findOne({members: {$all: [receiverId, senderId]}});
       return responce.status(200).json(conversation);
    }catch(error){
        return responce.status(500).json(error.message);
    }
}
