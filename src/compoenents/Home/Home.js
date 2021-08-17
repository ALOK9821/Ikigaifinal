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
                <h1> Simplified Learnings in New Technologies for</h1> <br />
                <Typed 
                className="typed-text"
                strings={["Individuals","Academics","Industry","Goverment"]}
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
            <br />
          <hr />
          <br />
            <div className="infocards">
                <h1>How Ikigai Lab is helping you <br /> Achieve your goals</h1>
                <div>
                    <hr />
                <Card3
               title="Industrial Case Studies"
               content="All programs are equipped with real case studies to give you a holistic view 
               of the problem and its solution
               "
               />
                 <Card3
               title="Capstone Based Learnings"
               content="Capstone Projects at the end of each program to ensure that you can 
               apply your learnings.
               "
               />
                </div>
             <div>
             <Card3
               title=" Top Associations"
               content="Association with institutions like IIT Kanpur, IIT Patna, GLA University, IIT Ropar, 
               etc.
               "
               />
                 <Card3
               title="Applied Research Ecosystem"
               content="Ecosystem of research labs across seven IITs to bring Industry and 
               Academia Together"
               />
             </div>
              
           </div>
           <br /><hr /><br />
          
            <div className="testi">
                <Testimonial/>
            </div>
         
            <div className="js">
                <Joinus/>
            </div>
            <br /><hr /><br />
          </div> 
        
        </>
    )
}

export default Home
