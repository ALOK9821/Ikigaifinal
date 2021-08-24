import React from 'react'
import "./About.scss"
import Asociate from "../Associations/Asociate"
const About = () => {
    return (
        <>
          <div className="aboutcont">
            <div class="about-section">
  <div class="inner-container">
    <h1>Creating Future Technology Leadership</h1>
    <p class="text">
    The <h1> IKIGAI LAB</h1> is an Emerging Technology and Human Skills Gurukul, with a focus on AI technology training. It is Algo8 AI’s “data-school”. The Ikigai Lab was founded with the vision to empower every individual with the knowledge of    <span>Artificial Intelligence.</span>  
The Ikigai Lab is also a knowledge partner to <span>IIT Kanpur</span>  in collaboration with them, we offer certification courses in Artificial Intelligence to students and professionals and also run Leadership and Management Development Programs in Artificial Intelligence for industry leaders. </p>
   </div>
</div>
        </div>
        <div className="mission">
            <h1>Our Mission</h1>
            <div class="courses-container">
	<div class="course">
		<div class="course-preview">
			
			<h2>Individuals</h2>
		</div>
		<div class="course-info">
			<h2>We Train individuals</h2>
			<h6> to unlock his/her potential to maximize their own performance, we help them to learn Industry case study along with its practical application to be future ready</h6>
		</div>
	</div>
	<div class="course">
		<div class="course-preview">
			
			<h2>Academics</h2>
		</div>
		<div class="course-info">
			<h2>We run B.tech programs</h2>
			<h6>and various academic programs at colleges and universities to augment existing B.Tech CSE with industry relevant subjects in the field of AI</h6>
		</div>
	</div>
	<div class="course">
		<div class="course-preview">
			
			<h2>Industry</h2>
		</div>
		<div class="course-info">
			<h2>We help Industry Leaders</h2>
			<h6>and Managers to adopt AI and digitally transform them to be future ready organization</h6>
		</div>
	</div>
	<div class="course">
		<div class="course-preview">
			
			<h2>Goverment</h2>
		</div>
		<div class="course-info">
			<h2>Gov heading</h2>
			<h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum tenetur inventore dolorem minima fuga sint </h6>
		</div>
	</div>
</div>


        </div>
        <div className="associations">
            <h1>Industry Clients & Knowledge Partners</h1>
        <Asociate />

        </div>
       <div className="leadership">
           <h1>On a Mission to create 5000 Artificial Intelligence <br />
Professionals over the next 5 years</h1>
       </div>
        </>
      
    )
}

export default About
