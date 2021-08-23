import React from 'react'
import "./Footer.scss"
import Logo from "../../../assets/logo.png"
const Footer = () => {
    return (
 <footer>
  <nav className="footer-inner">
    <section className="footer-item">
     <img src={Logo} alt="Logo" />
    </section>
        
    <section className="footer-item">
      <h3>Explore</h3>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Capabilities</a></li>
          <li><a href="#">Careers</a></li>
        </ul>
    </section>
          
    <section className="footer-item">
      <h3>Visit</h3>
        <a href="#">
        <p>mumbai,india</p>
        <p>andheri west</p>
        <p>mobilenumber</p>
        </a>
    </section>
            
    <section className="footer-item">
      <h3>New Business</h3>
        <p><a href="#">Email us</a></p>
        <p><a href="#">949.333.3106</a></p>
    </section>
        
    <section className="footer-item">
      <h3>Follow</h3>
        <ul>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">LinkedIn</a></li>
        </ul>
    </section>
        
    <section className="footer-item">
      <h3>Legal</h3>
        <ul>
          <li><a href="#">Terms</a></li>
          <li><a href="#">Privacy</a></li>
        </ul>
    </section>
            
    <section className="footer-item">
        <a href="#" className="footer-button"> Get started</a>
    </section>
  </nav>
</footer>
    )
}

export default Footer