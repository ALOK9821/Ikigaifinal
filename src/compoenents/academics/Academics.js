import React from 'react'
import Button1 from '../../styled compponents/Buttons/Button1'
import "./Academics.scss"
const Academics = () => {
    return (
        <>
        <div className="Academics">
           {/* <div className="widecard">
           <img src="https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="mountains pic"/>
          </div> */}
          <div>
            <h1>Skills and Applied Research Ecosystem </h1><br /> <br />
           <p> Unleash the potential of your students and faculty
</p><br />
           <Button1 
           title="Get Started Now"
           />
            </div>
         
        </div>
        {/* <div className="cardholder">
          <Timeline/>
        </div> */}
      
      <div className="programnames">
          <div className="progholder">
          <div className="programcard">
              <h3> Centre of Innovation and Research Translation</h3>
              <p>Skills and Applied Research Ecosystem</p>
          </div>
          <div className="programcard">
          <h3>Augmented B.Tech AI</h3>
          <p> Industry Relevant Subjects augmented with existing B.Tech/B.Tech AI</p>
          </div>
          <div className="programcard">
          <h3>Institute Research Development Program (iRDP)</h3>
          <p>Helping academic researchers to translate their research</p>
          </div>
          <div className="programcard">
          <h3>Bootcamps</h3>
          <p> Short Duration L&D programs in the field of new technologies</p>
          </div>
          <div className="programcard">
          <h3>Faculty Development Program</h3>
          <p>Helping faculties to understand new technologies and how to 
leverage Web 3.0 in their teachings.</p>
          </div>
          <div className="programcard">
          <h3>AI Innovation Platform</h3>
          <p> Industry relevant projects for researchers and faculties</p>
          </div>
   
          </div>
          </div>
     
       <div className="stats">
           <div className="statholder">
               <h1>Statistics Heading</h1>
               <p>some sentence describing stats</p>
           </div>
           <div className="statcontent">
               <div className="statdata">
                   <h1>45%</h1>
                   <hr />
                   <h6>some data</h6>
               </div>
               <div className="statdata">
                   <h1>45%</h1>
                   <hr />
                   <h6>some data</h6>
               </div>
               <div className="statdata">
                   <h1>45%</h1>
                   <hr />
                   <h6>some data</h6>
               </div>
               <div className="statdata">
                   <h1>45%</h1>
                   <hr />
                   <h6>some data</h6>
               </div>
           </div>
        </div>    
          <div className="properties">
           <div className="propertycardholder">
               <div className="propertycard">
                   <h2>Transformative</h2>
                  <hr />
                   <br />
                   <p>Students have the opportunity to work on real-life projects for companies.
</p>
               </div>
               <div className="propertycard">
                   <h2>Accessible</h2>
                   <hr />
                   <br />
                   <p>Students can learn from the best in the industry at their own pace with their college 
education.</p>
               </div>
               <div className="propertycard">
                   <h2>Innovative</h2>
                   <hr />
                   <br />
                   <p> Top Students and their projects have the chance to be featured on our blog, Github, or 
even the Ikigai Lab website.
</p>
               </div>
               <div className="propertycard">
                   <h2> Job Ready</h2>
                   <hr />
                   <br />
                   <p>students are able to enter the market of new technologies with an in-demand skill set 
that will make them stand out from the crowd.</p>
               </div>
           </div>
       </div>
      
      <div className="programdetails">
          <div className="firstprogram">
              <div className="leftside">
                  
              </div>
              <div className="rightside">
                  
                  <h5>case study</h5>
                  <h2> Learning through practice</h2> <br />
                  <p>By combining online lectures and real-life projects students have the 
opportunity to immediately put theoretical knowledge into practice. Students do practice on real 
industrial case studies.</p>
                  <a href="#">View  </a>
              </div>
          </div>
          <div className="firstprogram">
          <div className="rightside">
                  
                  <h5>case study</h5>
                  <h2>Directly from the Data Scientists to your students</h2> <br />
                  <p>With the experience of professionals in the 
field of AI and Deep Learning. Training is available in the form of live instructor-led courses and 1-on1 mentoring.</p>
                  <a href="#">View  </a>
              </div>
              <div className="leftside">
                  
              </div>
              
          </div>
          <div className="firstprogram">
              <div className="leftside">
                  
              </div>
              <div className="rightside">
                  
                  <h5>case study</h5>
                  <h2> Applied Research Ecosystem</h2> <br />
                  <p>Connecting Academia with Industry. Helping academic research in 
translation. Academics should lead industry</p>
                  <a href="#">View </a>
              </div>
          </div>
    
      </div>
       <div className="joinnow">
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

export default Academics
