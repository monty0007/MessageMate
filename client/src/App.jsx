import { GoogleOAuthProvider } from '@react-oauth/google';
import Messenger from "./Components/Messenger"
import AccountProvider from './Components/context/AccountProvider';

function App() {
  const clientId='805441230480-ck9oi72nsvr12g4f5rmmsa2b9ih2omua.apps.googleusercontent.com'
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
      <Messenger/>
      </AccountProvider>
    </GoogleOAuthProvider>
  )
}

export default App
