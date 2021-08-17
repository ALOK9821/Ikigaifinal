import React from 'react'
import "./CardPanel.css"
import User from "../../assets/user.png"
import Gov from "../../assets/gov.png"
const CardPanel = () => {
    return (
        <div className="container-fluid mb-5">
   
        <div className="row">
          
            <div className="col-md-4">
                <div className="box">
                    <div className="our-services speedup">
                        <div className="icon"> <img src={User} /> </div>
                        <h4>Individual</h4> <hr />
                        <p> For Students and <br /> Working Professionals</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="box"> 
                    <div className="our-services privacy">
                        <div className="icon"> <img src={Gov}/> </div>
                        <h4>Institute</h4> <hr />
                        <p>  For Institutions </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-4">
                <div className="box"> 
                    <div className="our-services settings">
                        <div className="icon"> <img src={Gov}/> </div>
                        <h4>Industry</h4>  <hr />
                        <p> For Businesses</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="box">
                    <div className="our-services backups">
                        <div className="icon"> <img src={User}/> </div>
                        <h4>Goverment</h4> <hr />
                        <p>  For Government Institutions </p>
                    </div>
                </div>
            </div>
           
        </div>
    </div>
    )
}

export default CardPanel
