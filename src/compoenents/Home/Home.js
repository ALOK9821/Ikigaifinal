import React from 'react'
import Button1 from "../../styled compponents/Buttons/Button1"
import Typed from "react-typed";
import "./Home.scss"
import CardPanel from '../../styled compponents/Cards/CardPanel';
import Testimonial from './Testimonials/Testimonial';
import Joinus from '../Home/Joinus/Joinus';
import Asociate from '../Associations/Asociate';
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
            <div className="propertiesh">
              <h4>How Ikigai Lab is helping you to achieve your goals</h4>
           <div className="propertycardholderh">
               <div className="propertycardh">
                   <h2>Industrial Case Studies</h2>
                  <hr />
                   <br />
                   <p> All programs are equipped with real case studies to give you a holistic view 
of the problem and its solution</p>
               </div>
               <div className="propertycardh">
                   <h2>Capstone Based Learnings</h2>
                   <hr />
                   <br />
                   <p>Capstone Projects at the end of each program to ensure that you can 
apply your learnings.</p>
               </div>
               <div className="propertycardh">
                   <h2>Top <br /> Associations</h2>
                   <hr />
                   <br />
                   <p> Association with institutions like IIT Kanpur, IIT Patna, GLA University, IIT Ropar, 
etc.</p>
               </div>
               <div className="propertycardh">
                   <h2>Applied Research Ecosystem</h2>
                   <hr />
                   <br />
                   <p> Ecosystem of research labs across seven IITs to bring Industry and 
Academia Together</p>
               </div>
           </div>
       </div>
      
          
            <div className="testi">
                <Testimonial/>
            </div>
            <div className="associations">
                <h1>We collaborate with Top leading Universities and Companies</h1>
                <Asociate/>
            </div>
         
            <div className="js">
                <Joinus/>
            </div>
          </div> 
        
        </>
    )
}

export default Home
