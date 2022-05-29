import { register } from "../../firebase/firebaseConfig";
import React from "react";
import { useState } from "react";
import { getData } from '../../api/axios';
import { useNavigate } from 'react-router-dom';
import './Signup.css'
import uniqarr from "../../utils/uniquearr";
const Signup = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [profile,setProfile]=useState("")
  const [name,setName]=useState("")
  const [interests,setInterests]=useState([]) 

  const fetchData=async()=>{
    try {
      const resp= await getData()
      setProfile(resp.data[0].url)
      console.log(resp.data[0].url);
    } catch (error) {
      
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
   
    // do what you want with your form data
    navigate('/login');
}

  return (
    <>
      <form action="">
        <input className="stext"
        onClick={fetchData}
         onChange={(e:any) => {
          
            setName(e.target.value);
          }} name="name" type="text" />
        <input
          className="semail"
          onChange={(e:any) => {
            setEmail(e.target.value);
          }}
          name="email"
          type="email"
        />
       <span className="pass">password:</span><input
          className="spassword"
          onChange={(e:any) => {
            setPassword(e.target.value);
          }}
          name="password"
          type="password"
        />
        <div className="interests">
           <input type="button" className="Anime"  onClick={(e:any)=>{
             e.preventDefault()
             const interest=e.target.className
             console.log(interest)
             setInterests((interests):any=>[...interests,interest])
           }}/>Anime
           <input type="button"  className="Movies"  onClick={(e:any)=>{
             e.preventDefault()
             const interest=e.target.className
             console.log(interest)
             setInterests((interests):any=>[...interests,interest])
           }}/>Movies
           <input type="button" className="Fashion"  onClick={(e:any)=>{
             e.preventDefault()
             const interest=e.target.className
             console.log(interest)
             setInterests((interests):any=>[...interests,interest])
           }}/>Fashion
           <input type="button" className="Technology"  onClick={(e:any)=>{
             e.preventDefault()
             const interest=e.target.className
             console.log(interest)
             setInterests((interests):any=>[...interests,interest])
           }}/>Technology
           <input type="button" className="Food"  onClick={(e:any)=>{
             e.preventDefault()
             const interest=e.target.className
             console.log(interest)
             setInterests((interests):any=>[...interests,interest])
           }}/>Food
           <input type="button" className="Science"  onClick={(e:any)=>{
             e.preventDefault()
             const interest=e.target.className
             console.log(interest)
             setInterests((interests):any=>[...interests,interest])
           }}/>Science
           <input type="button" className="Space"  onClick={(e:any)=>{
             e.preventDefault()
             const interest=e.target.className
             console.log(interest)
             setInterests((interests):any=>[...interests,interest])
           }}/>Space
           <input type="button" className="Gaming"  onClick={(e:any)=>{
             e.preventDefault()
             const interest=e.target.className
             console.log(interest)
             setInterests((interests):any=>[...interests,interest])
           }}/>Gaming
        </div>
   
       
          <input
            type="submit"
            className="ssubmit"
            onClick={(e:any) => {
              e.preventDefault();
              registers()
              onRegisterSubmits(e)
              // {
              //   createUserWithEmailAndPassword(auth, email, password)
              //     .then((result) => {
              //       console.log(result);
              //     })
              //     .catch((err) => {
              //       console.log(err);
              //     });
              // }
            }}
          />
        
      </form>
    </>
  );
};

export default Signup;
