import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import linkedin from '../../assets/linkedin.svg'
import github from '../../assets/github.svg'
import resume_pdf from '../../assets/Resume.pdf'; // Import the PDF file


const Hero = () => {
  const openLinkedInProfile = () => {
    window.open('https://linkedin.com/in/sumeetbidhanwork/', '_blank');
  };

  const openGithubProfile = () => {
    window.open('https://github.com/sumeetbidhan/', '_blank');
  };
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>I'm Sumeet Bidhan,</span> Data Analyst + Full Stack Developer.</h1>
      <p>Welcome to my website! I’m a passionate Data Analyst and Full Stack Developer with over 1 year of hands-on experience. I thrive on transforming complex data into actionable insights and crafting robust, user-friendly web solutions. Explore my portfolio and discover how I merge analytical skills with development expertise to drive innovation and deliver impactful results.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link'  offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume"><a href={resume_pdf} target="_blank" rel="noopener noreferrer">My resume</a></div>


      </div>
      <div className="hero-action2">
        <div className="hero-icon">
            <img
              src={linkedin}
              alt="My LinkedIn profile"
              className="icon"
              onClick={openLinkedInProfile}
            />
          </div>
          <div className="hero-icon">
            <img
              src={github}
              alt="My Github profile"
              className="icon"
              onClick={openGithubProfile}
            />
          </div>
      </div>
    </div>
  )
}

export default Hero
