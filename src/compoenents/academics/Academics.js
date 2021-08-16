import React from 'react'
import Button1 from '../../styled compponents/Buttons/Button1'
import Timeline from  "./Timeline"
import Info from '../Info'
import "./Academics.scss"
import Features from './Cardpanel/Features'
import Card3 from "../../styled compponents/Cards/Card3"
const Academics = () => {
    return (
        <>
        <div className="Academics">
           <div className="widecard">
           <img src="https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="mountains pic"/>
          </div>
          <div>
            <h1>Creating a Brighter Tommorrow </h1><br />
           <p>small sentence </p><br />
           <Button1 
           title="Get Started Now"
           />
            </div>
         
        </div>
        <div className="cardholder">
          <Timeline/>
        </div>
        <div className="feature">
            <Features/>
        </div>
        <div className="card3holder">
            <Card3/>
            <Card3/>
            <Card3/>
        </div>
        <div className="infoholder">
            <Info/>
        </div>
       
       
        </>
    )
}

export default Academics
