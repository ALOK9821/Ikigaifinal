import React from 'react'
import Button2 from '../../styled compponents/Buttons/Button2'
import "./Navbar.scss"
import Logo from "../../assets/logo.png"
const Navbar = () => {
    return (
        <>
            <div className="nbar" >
                <img src={Logo} alt="IGIKAI" />
                <ul className="nbarcontent" >
                    <li>Home </li>
                    <li>Academics</li>
                    <li>programs</li>
                    <li>Institute</li>
                </ul>
            </div>
        </>
    )
}

export default Navbar
