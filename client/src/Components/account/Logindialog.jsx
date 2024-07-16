import React, { useContext } from 'react'
import {Dialog, Box, Typography, List, ListItem, styled} from '@mui/material'
import { qrCodeImage } from '../../constants/data'
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode"
import { useState } from 'react';
import { AccountContext } from '../context/AccountProvider';
import { addUser } from '../service/api'

const dialogStyle={
    height: '95%',
    marginTop: '12%',
    width: '60%',
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow: 'none',
    overflow: 'hidden'
}

const Component=styled(Box)`
    display: flex;
`

const Container=styled(Box)`
    padding: 56px  56px 56px;
`

const QRcode=styled('img')({
    height: 264,
    width: 264,
    margin: '50px 0 0 50px'
})

const Title=styled(Typography)`
    font-size: 26px;
    color: #525252;
    font-weight: 300;
    font-family: inherit;
    margin-bottom: 25x
`

const StyledList= styled(List)`
    & > li {
        padding: 0;
        margin-top: 15px;
        font-size: 18px;
        line-height: 28px;
        coor: #4a4a4a;
    }
`

function Logindialog() {
    const { setAccount } =useContext(AccountContext);

    const onLoginSuccess = async (res) => {
        const decoded = jwtDecode(res.credential)
        setAccount(decoded)
        await addUser(decoded)
      }
    
      const onLoginError = () => {
        console.log("login failed")
      }

  return (
     <Dialog open={true} PaperProps={{sx: dialogStyle}} hideBackdrop={true}>
        <Component>
            <Container>
                <Title>To use whatsapp on your computer : </Title>
                <StyledList>
                    <ListItem>1. Open Whatsapp on youor phone </ListItem>
                    <ListItem>2. Tap Menu Setting and Select WhatsApp Web</ListItem>
                    <ListItem>3. Point your phone to screen to capture the code</ListItem>
                </StyledList>
            </Container>
            <Box style={{position: 'relative'}}>
                <QRcode src={qrCodeImage} alt="qr code" />
                <Box style={{position: 'absolute', top: '50%', transform: 'translateX(25%)'}}>
                    <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginError}>

                    </GoogleLogin>
                </Box>
            </Box>
        </Component>
     </Dialog>
  )
}

export default Logindialog