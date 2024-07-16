import conversation from "../model/Convesation.js";
import Message from "../model/Message.js"

export const newMessage =async (request, response)=> {
    try{
        const newMessage=new Message(request.body);
        await newMessage.save();
        await conversation.findByIdAndUpdate(request.body.conversationId, {message: request.body.text})
        return response.status(200).json('Message has been send Succesfully')
    }catch(error){
        return response.status(500).json(error.message)
    }
}


export const getMessage= async (request, response)=>{
    try{
        const message= await Message.find({ conversationId: request.params.id});
        return response.status(200).json(message); 
    }catch(error){  
        return response.status(500).json(error.message);
    }
}

export default newMessage