import { logIn } from '../../firebase/firebaseConfig';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'
const Login = () => {

  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const loginUser=()=>{
    logIn(email,password)
  } 

  const onLoginSubmits=()=>{
   navigate("/homepage")
  }
  return (
 <>
  {/* Do we really need a form element */}
    <form action=""> 
    <input
          className="lemail"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          name="email"
          type="email"
        />
        <input
          className="lpassword"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          name="password"
          type="password"
        />
          {/* Use Button component for more intutiveness */}
          <input
            className="lsubmit"
            type="submit"
            // Create seperate ClickHandlers
            // use a loading state on button
            onClick={(e) => {
              e.preventDefault();
              loginUser()
              onLoginSubmits()
            }}
          />

    </form>

 </>
  )
}

export default Login
