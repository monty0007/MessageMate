import React, { useContext } from 'react'
import { Box, styled, Typography } from '@mui/material'
import { AccountContext } from '../context/AccountProvider'

const ImageConainer=styled(Box)`
    display: flex;
    justify-content: center;
`
const Image=styled('img')({
    widht: 200,
    height: 200,
    borderRadius: '50%',
    padding: '25px 0'
})

const BoxWrapper=styled(Box)`
    background: #FFFFFF;
    padding: 12px 20px 2px;
    box-shadow: 0 1px 3px rgna(0, 0, 0, 0.08);
    & :first-of-type {
        font-size: 13px;
        color: #009688;
        font-weight: 200;
    }
    & :last-child{
        margin: 14px 0;
        color: #4A4A4A;
    }
`
const DesciptionContainer=styled(Box)`
    padding: 15px 20px 28px 30px;
    & > p {
        font-size: 13px;
        color: #8696a0;
    }
`

function Profile() {
    const { account}=useContext(AccountContext);
  return (
    <>
        <ImageConainer> <Image src={account.picture} alt="dp"/></ImageConainer>
        <BoxWrapper>
            <Typography>Your Name</Typography>
            <Typography>{account.name}</Typography>
        </BoxWrapper>
        <DesciptionContainer>
            <Typography>This is not your Username or Pin. This name will be visible to your Whatsapp Contacts</Typography>
        </DesciptionContainer>
        <BoxWrapper>
            <Typography>About</Typography>
            <Typography>Eat Sleep Code! Repeat</Typography>
        </BoxWrapper>
    </>
  )
}

export default Profile