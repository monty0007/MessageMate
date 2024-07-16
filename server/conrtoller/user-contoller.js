import User from "../model/User.js"

export const addUser=async (request, response)=>{
    try{
        let exist=await User.findOne({sub: request.body.sub});
        // console.log(request.body);
        if(exist){
            response.status(200).json({ msg:'user already exist'})
            return
        }

        const newUser=new User(request.body);
        await newUser.save()
        console.log("NewUser=",newUser)
        return response.status(200).json(newUser)
    }catch(error){
        return response.status(500).json(error.message);
    }
}

export const getUsers=async (request, response)=>{
    try{
        const users=await User.find({})
        //console.log("Users",users);
        return response.status(200).json(users)
    }catch(error){
        return response.status(500).json(error.message);
    }
}