// import multer from 'multer'
// import { GridFsStorage } from 'multer-gridfs-storage'

// import dotenv from 'dotenv'

// dotenv.config();

// const USERNAME=process.env.DB_USERNAME;
// const PASSWORD=process.env.DB_PASSWORD;

// const storage=new GridFsStorage({
//     url: `mongodb://${USERNAME}:${PASSWORD}@ac-ll8yqa7-shard-00-00.hi3uypy.mongodb.net:27017,ac-ll8yqa7-shard-00-01.hi3uypy.mongodb.net:27017,ac-ll8yqa7-shard-00-02.hi3uypy.mongodb.net:27017/test?ssl=true&replicaSet=atlas-11f7lo-shard-0&authSource=admin&retryWrites=true&w=majority&appName=clone-whatsapp`,
//     options: {useUnifiedTopology: true, useNewUrlParser : true},
//     file: (request, file) =>{
//         const match= ["image/png","image/jpg"];

//         if(match.indexOf(file.mimeType) === -1){
//             return `${Date.now()}-file-${file.originalname}`;
//         }

//         return{
//             bucketName: "photos",
//             filename: `${Date.now()}-file-${file.originalname}`
//         }
//     }
// })

// export default multer({storage})