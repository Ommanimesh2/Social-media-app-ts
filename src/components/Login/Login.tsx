import { logIn } from '../../services/firebase/firebaseConfig';
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

    <form action="">
    <input
          className="loginEmail"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          name="email"
          type="email"
        />
        <input
          className="loginPassword"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          name="password"
          type="password"
        />
    
          <input
            className="loginSubmit"
            type="submit"
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
