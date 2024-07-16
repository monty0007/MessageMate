import axios from 'axios'

const url="http://localhost:8000";

export const addUser= async (data)=> {
    try{
        await axios.post(`${url}/add`, data);
    }catch(error){
        console.log("Error while adding User API", error.message)
    }
}

export const getUsers= async (data)=>{
    try{
        let responce=await axios.get(`${url}/users`);
        return responce.data
    }catch(error){
        console.log("Error while calling getUsers API", error.message)

    }
}
export const setConversation= async (data)=>{
    try{
        await axios.post(`${url}/conversation/add`,data);
    }catch(error){
        console.log("Error while Setting Conversation User API", error.message)

    }
}
export const getConversation= async (data)=>{
    try{
        let responce= await axios.post(`${url}/conversation/get`,data);
        return responce.data;
    }catch(error){
        console.log("Error while Getting Conversation User API", error.message)

    }
}

export const newMessage= async (data)=>{
    try{
        await axios.post(`${url}/message/add`,data);
    }catch(error){
        console.log("Error while calling newMessage API", error.message)
    }
}

export const getMessage= async (id)=>{
    try{
        let responce = await axios.get(`${url}/message/get/${id}`);
        return responce.data;
    }catch(error){
        console.log("Error while calling getMessage API", error.message)
    }
}

// export const uploadFile= async (data)=>{
//     try{
//         return await axios.post(`${url}/file/upload`,data);
//     }catch(error){
//         console.log("Error while calling uploadFile  API", error.message)
//     }
// }


