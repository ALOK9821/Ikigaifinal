import React from 'react'
import Button1 from '../../styled compponents/Buttons/Button1'
import Degree from "../../assets/degree.png"
import Job from "../../assets/job.png"
import "./Program1.scss"
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
      <div className="onlinelearn">
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
         
      </div>
       <div className="collabs">
           <h2>We collaborate with Top leading Universities and Companies</h2>
           <div className="collabholder">
               <img src="https://www.theikigailab.com/static/media/p3.fed164de.png" alt="" />
               <img src="https://www.theikigailab.com/static/media/p4.bd9b1015.png" alt="" />
               <img src="https://www.theikigailab.com/static/media/c1.b2b167ee.jpg" alt="" />
               <img src="https://www.theikigailab.com/static/media/c3.81a0a498.png" alt="" />
               <img src="data:image/jpeg;base64,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" alt="" />
               <img src="data:image/jpeg;base64,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" alt="" />
           </div>
       </div>
       <div className="programdetailsp1">
          <div className="firstprogramp1">
              <div className="leftsidep1">
                  {/* <img src="https://www.theikigailab.com/static/media/DataScienceSuper30-ikigai.4c2d25f1.jpg" alt="" /> */}
              </div>
              <div className="rightsidep1">
                  
                  {/* <h3> Custom Made Programs</h3> */}
                  <h2> Data Science Super30</h2> <br />
                  <p> <ul> 
                    <li>Guaranteed Placement Offer of 5.5 Lakhs </li>  
                    <li>6 Months Paid Internship</li>
                   <li>250+ Hours of Live Sessions</li>
                    <li>Capstone Projects</li>
                     <li>Pay 50% Fees at the begining of the course and rest 50% after getting the  Data Scientist Job</li>
                    </ul>
                    </p>
                  
              </div>
          </div>
          <div className="firstprogramp1">
          <div className="leftsidep1">
                  {/* <img src="https://www.theikigailab.com/static/media/DataScience-BootCamp-ikigailab.35ba9f12.jpg" alt="" /> */}
              </div>
          <div className="rightsidep1">
                  
                  {/* <h3>Outcome Based Learning</h3> */}
                  <h2>Data Science BootCamp</h2> <br />
                  <p> <ul><li>  60+ hours of Live Sessions</li>
                  <li>Case Studies</li>
                  <li>Certification on Completion</li>
                  <li>The 6-week program</li>
                  <li>Focused on implementing real data science case studies.</li>
                  </ul>
                  </p>
              </div>
             
              
          </div>
    
      </div>
          <div className="testp1">
              <div className="testcard">
                  <h1>Jaskaran Singh Sandhu</h1>
                  <p> <b>"</b> I am really learning a lot and feel like I am ahead of the curve. The teachers at THEIKIGAILAB are great, explaining everything in an understandable way. I am really getting into coding and feel great about my future in a new way.</p>
              </div>
              <div className="testcard">
                  <h1>Shweta <br /> Dharik</h1>
                  <p> <b>"</b> The course provides good balance of less theory and more practical. Trainers explained each and everything with daily related things.</p>
              </div>
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
