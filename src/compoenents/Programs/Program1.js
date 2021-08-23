import React from 'react'
import Button1 from '../../styled compponents/Buttons/Button1'
import Degree from "../../assets/degree.png"
import Job from "../../assets/job.png"
import "./Program1.scss"
import Asociate from '../Associations/Asociate'
import Testimonials from "../Home/Testimonials/Testimonial"
import Onlinelearn from './Onlinelearn'
const Program1 = () => {
    return (
      <>
      <div className="prog1head">
          <div className="lefthead">
              <h1>The Challenges of Adopting <br />
Data and Analytics</h1>
<h3>Meet your digital tranformation goals today</h3>
<Button1 title="Apply Now"/>
          </div>
          <div className="righthead">
              
          </div>
      </div>
      {/* <div className="onlinelearn">
          <h2>Best Online Learning Eperience</h2>
          <div className="online">
          <div className="learnholder">
              <img src={Degree} alt="" />
              <h3>Earn A Degree</h3>
          </div>
          <div className="learnholder">
          <img src="https://image.flaticon.com/icons/png/512/3048/3048358.png" alt="degree" />
          <h3>Live Online Classes</h3>
              </div>
              <div className="learnholder">
              <img src="https://image.flaticon.com/icons/png/512/1584/1584942.png" alt="degree" />
              <h3>Limited Number Of Seats</h3>
              </div>
              <div className="learnholder">
              <img src={Job} alt="degree" />
              <h3>100% Job Assitance</h3>
              </div>
          </div>
         
      </div> */}
           <div className="programdetailsp1">
          <div className="firstprogramp1">
              <div className="leftsidep1">
                  {/* <img src="https://www.theikigailab.com/static/media/DataScienceSuper30-ikigai.4c2d25f1.jpg" alt="" /> */}
              </div>
              <div className="rightsidep1">
                  
                  {/* <h3> Custom Made Programs</h3> */}
                  <h2> Data Science Super30</h2> <br />
                  <p>-  Guaranteed Placement Offer of 5.5 Lakhs <br />
                    - 6 Months Paid Internship <br />
                     - 250+ Hours of Live Sessions <br />
                      - Capstone Projects <br />
                    - Pay 50% Fees at the begining of the course and rest 50% after getting the &nbsp;Data Scientist Job <br />
                    <a href="#"><button>Know More</button>  </a> </p>
                  
              </div>
          </div>
          <div className="firstprogramp1">
          <div className="leftsidep1">
                  {/* <img src="https://www.theikigailab.com/static/media/DataScience-BootCamp-ikigailab.35ba9f12.jpg" alt="" /> */}
              </div>
          <div className="rightsidep1">
                  
                  {/* <h3>Outcome Based Learning</h3> */}
                  <h2>Data Science BootCamp</h2> <br />
                  <p>60+ hours of Live Sessions <br />
- Case Studies <br />
- Certification on Completion <br />
- The 6-week program <br />
- Focused on implementing real data science case studies. <br />
<a href="#"><button>Know More</button>  </a>
 </p>
                  
              </div>
             
              
          </div>
          </div>
         {/* <div className="testp1">
              <div className="testcard">
                  <h1>Jaskaran Singh Sandhu</h1>
                  <p> <b>"</b> I am really learning a lot and feel like I am ahead of the curve. The teachers at THEIKIGAILAB are great, explaining everything in an understandable way. I am really getting into coding and feel great about my future in a new way.</p>
              </div>
              <div className="testcard">
                  <h1>Shweta <br /> Dharik</h1>
                  <p> <b>"</b> The course provides good balance of less theory and more practical. Trainers explained each and everything with daily related things.</p>
              </div>
          </div> */}
            <Onlinelearn />

          <Testimonials />
          <div className="associationsp1">
                <h1>We collaborate with Top leading <br /> Universities and Companies</h1>
                <Asociate/>
            </div>
      
          <div className="joinnowp1">
           <h1>Find out how Ikigai Lab can help you <br /> in creating skill and applied research ecosystem <br /> at your 
institution.</h1>
           <br /><br />
         <button>
             <h2>Schedule a Meeting</h2>
         </button>
       </div>
      </>
    )
}

export default Program1
