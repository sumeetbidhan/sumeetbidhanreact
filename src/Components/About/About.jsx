import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
    
      <div className="about-sections">
          <div className="about-left">
          </div>
          <div className="about-right">
            <div className="about-para">
              <p>My journey began with a curiosity-driven exploration of data and a passion for building interactive digital experiences. Over time, I've cultivated a unique skill set that combines analytical thinking with creative problem-solving to deliver comprehensive solutions.</p>
              <p>In my role as a Data Analyst, I specialize in extracting insights from complex datasets, using tools like Python, SQL, and data visualization libraries. Whether it's performing in-depth statistical analysis, creating predictive models, or developing automated reporting systems, I thrive on turning raw data into actionable intelligence that drives strategic decision-making.</p>
              <p>On the development front, my experience as a Full Stack Developer equips me with the ability to bring ideas to life across the entire web development stack. From designing intuitive user interfaces and crafting responsive front-end experiences using HTML, CSS, and JavaScript, to architecting scalable back-end solutions with Node.js, Express, and MongoDB, I take pride in delivering robust, user-centric applications.</p>

              <p>What sets me apart is my holistic approach to projects. I don't just crunch numbers or write code; I immerse myself in understanding the underlying challenges and goals to deliver solutions that are not only technically sound but also aligned with business objectives. Collaboration, innovation, and continuous learning are at the core of my work ethic, ensuring that I stay ahead of industry trends and deliver cutting-edge solutions.

              Feel free to explore my portfolio to see examples of my work and the impact I've made. Whether you're looking to unlock the potential of your data or create a seamless digital experience, I'm here to partner with you on your journey towards success.

              </p>
            </div>
            <div className="about-skills">
              <div className="about-skill"><p>Python & R</p><hr style={{width: "100%"}} /></div>
              <div className="about-skill"><p>JavaScript</p><hr style={{width: "60%"}} /></div>
              <div className="about-skill"><p>SQL</p><hr style={{width: "50%"}} /></div>
              <div className="about-skill"><p>HTML & CSS</p><hr style={{width: "100%"}} /></div>
              <div className="about-skill"><p>React,Node</p><hr style={{width: "60%"}} /></div>
              <div className="about-skill"><p>Angular,Next</p><hr style={{width: "60%"}} /></div>
              <div className="about-skill"><p>Matplotlib</p><hr style={{width: "50%"}} /></div>
              <div className="about-skill"><p>Tableau</p><hr style={{width: "60%"}} /></div>





            </div>
          </div>
          
        </div>
       

      
      
    </div>
  )
}

export default About
