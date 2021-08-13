import React from 'react'
import Button1 from '../../styled compponents/Buttons/Button1'
import Info from '../Info'
import "./Academics.css"
import Cardpanel1 from './Cardpanel1'

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
            <Cardpanel1/>
        </div>
        <div className="infoholder">
            <Info/>
        </div>
        </>
    )
}

export default Academics
