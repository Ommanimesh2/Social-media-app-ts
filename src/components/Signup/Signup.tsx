import { register } from "../../services/firebase/firebaseConfig";
import React from "react";
import { useState } from "react";
import { getData } from "../../services/api/apiService";
import userInterests from "../../constants/interestsArray";
import { useNavigate } from 'react-router-dom';
import './Signup.css'
import uniqarr from "../../utils/uniquearr";
const Signup = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [profile,setProfile]=useState("")
  const [name,setName]=useState("")
  const [interests,setInterests]=useState<String[]>([]) 

  const clickHandler=(event:string)=>{
    console.log(interests);
    let events=event
    setInterests((e: any) => [...e, events])
  }

  const fetchData=async()=>{
    try {
      const resp= await getData()
      

    } catch (error) {
      console.log(error)
    }
}
  const registers=()=>{
    if(!name){
      alert("Please enter your name")
    }
    else if(!email){

      alert("Please enter your email")
    }
    else if(interests.length<1){
      alert("Select atleast 2 interests!")
    }
    else{
      
      register(name, email, password,uniqarr(interests),profile)
    }
  }
  const onRegisterSubmits = (e:any) => {
    navigate('/login');
}

  return (
    <>
      
        <input className="signupText"
        onClick={fetchData}
         onChange={(e:any) => {
          
            setName(e.target.value);
          }} name="name" type="text" />
        <input
          className="signupEmail"
          onChange={(e:any) => {
            setEmail(e.target.value);
          }}
          name="email"
          type="email"
        />
       <span className="pass">password:</span><input
          className="signupPassword"
          onChange={(e:any) => {
            setPassword(e.target.value);
          }}
          name="password"
          type="password"
        />
        <div className="interests">
          {userInterests.map((e)=>{
        return (
          <>
          {e}<input type="checkbox" onClick={()=>{
            clickHandler(e)
          }} /> 
          </>
        )
      })}
        </div>
   
       
          <input
            type="submit"
            className="signupSubmit"
            onClick={(e:any) => {
              e.preventDefault();
              registers()
              onRegisterSubmits(e)
            }}
          />
        

    </>
  );
};

export default Signup;
