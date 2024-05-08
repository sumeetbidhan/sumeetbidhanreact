import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data.js'
import arrow_icon from '../../assets/arrow_icon.svg'


const MyWork = () => {
  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">

      {mywork_data.map((work, index) => (
          <a key={index} href={work.link} target="_blank" rel="noopener noreferrer">
            <img src={work.w_img} alt={work.w_name} />
          </a>
        ))}
      </div>
      <div className="mywork-showmore">
        <p><a href="https://github.com/sumeetbidhan" target="_blank" rel="noopener noreferrer">Show More</a></p>
        <a href="https://github.com/sumeetbidhan" target="_blank" rel="noopener noreferrer"> <img src={arrow_icon} alt="" /></a>
      </div>
      
    </div>
  )
}

export default MyWork
