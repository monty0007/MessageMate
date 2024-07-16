import { Box, Divider, styled } from "@mui/material";
import React, { useEffect, useState, useContext } from "react";
import { getUsers } from "../../service/api";
import { AccountContext } from "../../context/AccountProvider";
import Conversatio from "./Conversatio";

const Component = styled(Box)`
  height: 81vh;
  overflow: overlay;
`;

const StyledDivider = styled(Divider)`
  margin: 0 0 0 71px;
  opacity: 0.6;
`;

function Conversation({ text }) {
  const [users, setUsers] = useState([]);
  const { account, socket, setActiveUsers } = useContext(AccountContext);

  useEffect(() => {
    const fetchData = async () => {
      let responce = await getUsers();
      const filteredData = responce.filter((user) =>
        user.name.toLowerCase().includes(text.toLowerCase())
      );
      setUsers(filteredData);
    };
    fetchData();
  }, [text]);

  useEffect(()=>{
    socket.current.emit('joinRoom',account)
    // socket.current.on('getUsers',users=>{
    //   setActiveUsers(users)
    // })

  },[account])

  return (
    <Component>
      {users.map(
        (user) =>
          user.sub !== account.sub && (
            <React.Fragment key={user.sub}>
              <Conversatio user={user} />
              <StyledDivider />
            </React.Fragment>
          )
      )}
    </Component>
  );
}

export default Conversation;
