import React, { useContext } from "react";
import Logindialog from "./account/Logindialog";
import { AppBar, Toolbar, styled, Box } from "@mui/material";
import { AccountContext } from "./context/AccountProvider";
import ChatDialog from "./chat/ChatDialog";

const Component = styled(Box)`
  height: 100vh;
  width: 100vw;
  background: #dcdcdc;
`;

const LoginHeader = styled(AppBar)`
  height: 220px;
  background-color: #00bfa5;
  box-shadow: none;
`;
const Header = styled(AppBar)`
  height: 125px;
  background-color: #00A884;
  box-shadow: none;
`;

const Messenger = () => {
  const { account } = useContext(AccountContext);
  return (
    <Component>
      {account ? (
        <>
        <Header>
          <Toolbar></Toolbar>
        </Header>
        <ChatDialog />
      </>

      ) : (
        <>
          <LoginHeader>
            <Toolbar></Toolbar>
          </LoginHeader>
          <Logindialog />
        </>
      )}
    </Component>
  );
};

export default Messenger;
