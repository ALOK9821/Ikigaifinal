import React from 'react'
import "./CardPanel.scss"
const CardPanel = () => {
    return (
        <div className="homecardpanel">
            <div className="cholderhome">
                <div className="propcard">
                    <h2> Individuals</h2> 
                    <p>For Students and Working Professionals</p>
                </div>
                <div className="propcard">
                <h2> Academics</h2> 
                <p>For Institutions</p>
                </div>
                <div className="propcard">
                <h2> Industry</h2> 
                <p>For Businesses</p>
                </div>
                <div className="propcard">
                <h2> Government</h2> 
                <p>For Government Institutions</p>
                </div>
            </div>
        </div>
     )
}

export default CardPanel
