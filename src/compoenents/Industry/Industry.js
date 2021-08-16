import React from 'react'
import Button1 from '../../styled compponents/Buttons/Button1'
import "./Industry.scss"
const Industry = () => {
    return (
        <>
        <div className="Academics">
           {/* <div className="widecard">
           <img src="https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="mountains pic"/>
          </div> */}
          <div>
            <h1>Creating a Brighter Tommorrow </h1><br />
           <p>small sentence </p><br />
           <Button1 
           title="Get Started Now"
           />
            </div>
         
        </div>
        {/* <div className="cardholder">
          <Timeline/>
        </div> */}
      
      <div className="programnames">
          <div className="programcard">
              <h3>PROGRAM 1</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam culpa minus vel unde aperiam amet adipisci eligendi, recusandae dolore reprehenderit  </p>
          </div>
          <div className="programcard">
          <h3>PROGRAM 2</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam culpa minus vel unde aperiam amet adipisci eligendi, recusandae dolore reprehenderit  </p>
          </div>
          <div className="programcard">
          <h3>PROGRAM 3</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam culpa minus vel unde aperiam amet adipisci eligendi, recusandae dolore reprehenderit  </p>
          </div>
          <div className="programcard">
          <h3>PROGRAM 4</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam culpa minus vel unde aperiam amet adipisci eligendi, recusandae dolore reprehenderit  </p>
          </div>
          <div className="programcard">
          <h3>PROGRAM 5</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam culpa minus vel unde aperiam amet adipisci eligendi, recusandae dolore reprehenderit  </p>
          </div>
          <div className="programcard">
          <h3>PROGRAM 6</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam culpa minus vel unde aperiam amet adipisci eligendi, recusandae dolore reprehenderit  </p>
          </div>
      </div>
     
     
      <div className="programdetails">
          <div className="firstprogram">
              <div className="leftside">
                  
              </div>
              <div className="rightside">
                  
                  <h5>case study</h5>
                  <h2>Resiliency</h2> <br />
                  <p>The Northeast Resiliency Consortium worked with Smart Sparrow to create ten highly interactive, adaptive lessons and a keystone project to teach resiliency soft skills.The courseware features a playful AI character, Dot.</p>
                  <a href="#">View case study </a>
              </div>
          </div>
          <div className="firstprogram">
          <div className="rightside">
                  
                  <h5>case study</h5>
                  <h2>Resiliency</h2> <br />
                  <p>The Northeast Resiliency Consortium worked with Smart Sparrow to create ten highly interactive, adaptive lessons and a keystone project to teach resiliency soft skills.The courseware features a playful AI character, Dot.</p>
                  <a href="#">View case study </a>
              </div>
              <div className="leftside">
                  
              </div>
              
          </div>
          <div className="firstprogram">
              <div className="leftside">
                  
              </div>
              <div className="rightside">
                  
                  <h5>case study</h5>
                  <h2>Resiliency</h2> <br />
                  <p>The Northeast Resiliency Consortium worked with Smart Sparrow to create ten highly interactive, adaptive lessons and a keystone project to teach resiliency soft skills.The courseware features a playful AI character, Dot.</p>
                  <a href="#">View case study </a>
              </div>
          </div>
          <div className="joinnow">
           <h1>Join Us</h1>
           <br /><br />
         <button>
             <h2>Get Started</h2>
         </button>
       </div>
    
      </div>
       
        </>
   
    )
}

export default Industry
