import React from 'react'
import { Link } from 'react-router-dom'
import heropicture from '../assets/images/digital-photo.jpg'
import resume from '../assets/images/AugustusEjikeResume.pdf'


const Slider = () => {
  return (
    <div className="slider">
        <div className="content1">
            <p className="get-every-single-solution">GET EVERY SINGLE SOLUTIONS</p> 
            <h2>I'm a  Software Devel0per  <br /> Augustus C. Ejike</h2>
            <p className="slider-description">Hello, I'm Augustus Ejike, a dynamic Software Developer and Project Manager located in Canada. <br /> I specialize in crafting web pages, IT solutions and efficiently overseeing project lifecycles.
            </p>
            <div className="learn-more">
                <a className="learn-more-btn" href={resume} download="Augustus-Resume.pdf">Resume</a>
                <Link className="hire-me-btn" to={'/contact'}>Hire Me</Link>
            </div>
        </div>
        <div className="content2">
            <img src={heropicture} alt="" />
        </div>
    </div>
  )
}

export default Slider