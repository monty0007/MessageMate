import { Box, styled } from '@mui/material'
import React, { useContext, useEffect, useRef, useState } from 'react'
import Footer from './Footer'
import  { AccountContext } from "../../context/AccountProvider"
import { getMessage, newMessage } from '../../service/api'
import Messages from './Messages'

const Wrapper=styled(Box)`
    background-image:url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'});
    background-size: 50%;
`

const Component=styled(Box)`
    height: 80vh;
    overflow-y: scroll;
`
const Container=styled(Box)`
padding: 1px 80px;

`

function Message({person, conversation}) {
  const scrollRef=useRef();
  const { account, socket, newMessageFlag, setNewMessageFlag }=useContext(AccountContext);
  const [value, setValue] = useState('');
  const [messages, setMessages] = useState([])
  const [incomingMessage, setIncomingMessage] = useState(null)

  useEffect(()=>{
    socket.current.on('getMessage',data=>{
      setIncomingMessage({
        ...data,
        createdAt:Date.now()
      })
    })
  },[])

  useEffect(() => {
    const getMessageDetail= async()=>{
      let data=await getMessage(conversation._id);
      setMessages(data)
    }
    conversation._id &&  getMessageDetail();
  }, [person._id, conversation._id, newMessageFlag])

  // For scrollling to bottom
  useEffect(() => {
    scrollRef.current.scrollTop=scrollRef.current.scrollHeight;
  }, [messages])
  
  useEffect(()=>{
    incomingMessage && conversation?.members?.includes(incomingMessage.senderId) && setMessages((prev) =>[...prev, incomingMessage])
  },[incomingMessage, conversation])

  // const receiverId = conversation?.members?.find(member => member !== account.sub);
  
  const sendText= async (e)=>{
      const code= e.keyCode || e.which;
      if(code==13){
        let message={
          senderId: account.sub,
          receiverId: person.sub,
          conversationId: conversation._id,
          type: 'text',
          text : value
        }
        socket.current.emit('sendMessage',message)
        await newMessage(message);
        setValue('')
        setNewMessageFlag(prev => !prev)
      }
  }


  
  return (
    <Wrapper >
        <Component ref={scrollRef}>
          {
            messages && messages.map(message =>(
              <Container>
                <Messages scrollRef={scrollRef}  message={message}/>
              </Container>
            ))
          }
        </Component>
        <Footer sendText={sendText} setValue={setValue} value={value}/>
    </Wrapper>
  )
}

export default Message