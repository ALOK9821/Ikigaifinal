import React from 'react'
import Button1 from '../../styled compponents/Buttons/Button1'
import Timeline from  "./Timeline"
import Info from '../Info'
import "./Academics.css"
import Features from './Cardpanel/Features'

const Academics = () => {
    return (
        <>
        <div className="Academics">
           <h1>Creating a </h1> <br />
           <h1>Brighter tommorrow</h1> <br />
           <h1>In the world of data science</h1> <br />
           <Button1 
           title="Get Started Now"
           />
        </div>
        <div className="cardholder">
          <Timeline/>
        </div>
        <div className="feature">
            <Features/>
        </div>
        <div className="infoholder">
            <Info/>
        </div>
       
        </>
    )
}

export default Academics
