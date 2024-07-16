import { Box } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { AccountContext } from '../../context/AccountProvider'
import { getConversation } from '../../service/api'
import ChatHeader from './ChatHeader'
import Message from './Message'

function ChatBox() {

  const { person, account }=useContext(AccountContext); 
  const [conversation, setConversation] = useState({})

  useEffect(() => {
    const getConversationDetail= async() =>{
      let data=await getConversation({senderId: account.sub, receiverId: person.sub})
      setConversation(data);
    }
    getConversationDetail()
  },[person.sub]);
  
  return (
    
    <Box sx={{height: "75%"}}>
        <ChatHeader person={person}/>
        <Message person={person} conversation={conversation}/>
    </Box>
  )
}

export default ChatBox