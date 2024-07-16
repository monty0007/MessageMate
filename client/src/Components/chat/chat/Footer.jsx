import { Box, InputBase, styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {EmojiEmotionsOutlined, AttachFile, Mic }from '@mui/icons-material';
// import { uploadFile } from '../../service/api';
import axios from 'axios';

const Component=styled(Box)`
    height: 55px;
    background: #ededed;
    display: flex;
    width: 100%;
    align-items: center;
    padding: 0 15px;
    & > * {
        margin: 5px;
        color: #919191;
    }
`

const Search=styled(Box)`
    background-color: #FFFFFF;
    border-radius: 18px;
    width: calc(94% - 100px);
`

const InputField=styled(InputBase)`
    width: 100%;
    padding: 20px;
    height: 20px;
    padding-left: 25px;
    font-size: 14px;
`

const ClipIcon=styled(AttachFile)`
    transform: rotate(40deg);
`

function Footer({sendText, setValue, value }) {
    const [image, setImage] = useState()

    // useEffect(()=>{
    //     const getImage= async ()=>{
    //         if(file){
    //             const data=new FormData();
    //             data.append("name", file.name)
    //             data.append("file",file)

    //             await uploadFile(data);
    //         }
    //     }
    //     getImage();
    // },[file])

    const submitImage= async (e)=>{
        e.preventDefault();

        const formData= new FormData();
        formData.append("image", image);

        const result= await axios.post(
            "http://localhost:8000/upload-image",
            formData,
        {
            headers: { "Content-Type": "multipart/form-data"},
        }
        );
    }

    const onFileChange=(e)=>{
        setFile(e.target.files[0]);
        setValue(e.target.files[0].name)
    }
    
  return (
    <Component>
        {/* <form onSubmit={submitImage}> */}
        <EmojiEmotionsOutlined/>
        <label htmlFor="fileInput">
            <ClipIcon/>
        </label>
        <input type="file" id="fileInput" style={{display: 'none'}} onChange={(e)=> onFileChange(e)}></input>
        <Search>          
            <InputField placeholder='Type a Message' onChange={(e)=>setValue(e.target.value)} onKeyPress={(e)=> sendText(e)} value={value}/>
        </Search>
        <Mic/>
        {/* </form> */}
    </Component>
  )
}

export default Footer