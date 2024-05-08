import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'




const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "3d7321bc-f327-4af7-a94c-9b002ec6801f");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };


  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>Let's connect and discuss how my skills in data analysis, full-stack development, and presentation design can add value to your projects. Whether you're looking to harness the power of data, build intuitive web solutions, or create captivating presentations, let's collaborate and bring your ideas to life. Reach out to me via my website to start a conversation and explore potential synergies!

          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" /><p>sumeetbidhanwork@gmail.com</p>
            </div>
            <div className="contact-detail">
            <img src={call_icon}alt="" /> <p>+91-9650139112</p>
            </div>
            <div className="contact-detail">
            <img src={location_icon}  alt="" /><p>New Delhi, India</p>
            </div>

          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder='Enter your name' name='name'/>
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder='Enter your email' name="email"  />
          <label htmlFor="">Write your message here</label>
          <textarea name="message" rows="8" placeholder='Enter your mesage'></textarea>
          <button type='submit' className="contact-submit">Submit now</button>
        </form>
      </div>
      
    </div>
  )
}

export default Contact
