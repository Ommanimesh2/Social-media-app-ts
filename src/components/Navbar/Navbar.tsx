import React from 'react'
import { NavProps } from '../../types/navPropTypes'
import Logout from '../Logout/Logout'
import './Navbar.css'
const Navbar:React.FC<NavProps> = ({ name, imgURL, email }) => {
    return (
        <>
            <nav className="navbar">
                <div className="tracking-in-expand textName">{name}</div>
                <div className="profilepic">
                 <img className='catImg' src={imgURL} alt=""  />
                <div className="useremail ">{email}</div>
                </div>
                 
            <Logout/>
            </nav>
       </>
    )
}

export default Navbar
