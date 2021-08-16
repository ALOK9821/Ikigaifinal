import React from 'react'
import Button1 from "../../styled compponents/Buttons/Button1"
import Typed from "react-typed";
import "./Home.scss"
import CardPanel from '../../styled compponents/Cards/CardPanel';
import Testimonial from './Testimonials/Testimonial';
import Joinus from '../Home/Joinus/Joinus';
import Card3 from '../../styled compponents/Cards/Card3';
const Home = () => {
    return (
        <>
            <div className="header-wrapper">
           <div className="main-info">
                <h1>Digital Whole Learning of AI for</h1> <br />
                <Typed 
                className="typed-text"
                strings={["Industry and Academia","Create Technology Leaders For Tomorrow"]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
                <br />
                <Button1
                title="Get Started" 
                />
                
            </div>
            <div className="cardp">
            <CardPanel/>
            </div>
            <div className="js">
                <Joinus/>
            </div>
            <div className="infocards">
               <Card3/>
               <Card3/>
               <Card3/>
           </div>
            <div className="testi">
                <Testimonial/>
            </div>
         
            
          </div> 
        
        </>
    )
}

export default Home
