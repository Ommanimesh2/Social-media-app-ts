import React from 'react'
import { logout } from '../../firebase/firebaseConfig'
import { useNavigate } from 'react-router-dom'
import './Logout.css'

const Logout = () => {
    const navigate=useNavigate()
  return (
    <div>
    <button className='logout btn-5' 
    onClick={()=>{
    logout()
    navigate("/")
    }}>LOGOUT</button>
    </div>
  )
}

export default Logout
