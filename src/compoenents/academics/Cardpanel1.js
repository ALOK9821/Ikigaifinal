import React from 'react'
import Card1 from '../../styled compponents/Cards/Card1'
import "./Cardpanel1.scss"
const Cardpanel1 = () => {
    return (
        <div className="cardpnl">
           <Card1 
           title="Best online learning experience"
           content = "Online courses are a great way to grow inyour career by acquiring new skills and handson experience through projects"
           />
           <Card1
            title="Practical Research & Development"
            content = "Online courses are a great way to grow inyour career by acquiring new skills and handson experience through projects"
           />
           <Card1
            title="Skill enhancement & transformation"
            content = "Online courses are a great way to grow inyour career by acquiring new skills and handson experience through projects"
           />
           <Card1
            title="Research project"
            content = "Online courses are a great way to grow inyour career by acquiring new skills and handson experience through projects"
           />
        </div>
    )
}

export default Cardpanel1
