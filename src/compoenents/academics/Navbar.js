import React from 'react'
import Button2 from '../../styled compponents/Buttons/Button2'
import "./Navbar.scss"
import Logo from "../../assets/logo.png"
import {Link} from "react-router-dom"
const Navbar = () => {
    return (
        <>
            <div className="nbar" >
                <img src={Logo} alt="IGIKAI" />
                <ul className="nbarcontent" >
                  <li> <Link to="/" style={{textDecoration:"none",color:"white"}} >Home </Link></li> 
                    <Link to="/academics" style={{textDecoration:"none",color:"white"}} ><li>Academics </li></Link>
                    <li> <Link to="/industry" style={{textDecoration:"none",color:"white"}} >Industry </Link></li> 
                    <li>Institute</li>
                </ul>
            </div>
        </>
    )
}

export default Navbar
