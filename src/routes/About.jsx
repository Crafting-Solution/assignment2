import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import resume from '../assets/images/AugustusEjikeResume.pdf'
import AboutImage from '../assets/images/about-image.jpeg'

const About = () => {
  return (
    <>
        <Navbar />
        {/* About SECTION */}
        <div className='about'>
            <div className="about-header">
                <h1>About Me</h1>
            </div>
            <div className="about-content">
                {/* About Image */}
                <div className="about-image">
                    <img src={AboutImage} alt="" />
                </div>
                {/* About description */}
                <div className="about-description">
                    <p>
                        My name is <b>Augustus Ejike</b> A Fullstack Software developer with over 4+ years of <br /> experience in producing robust code for high-volume companies. 
                        Coupled with <br />  a proven track record of developing light-weight performant apps and <br /> in previous roles, 
                        recognized for top company-wide quality satisfaction <br /> rating. Also, reduced client wait time by 20% and 
                        increased customer <br /> retention  by 30% among others. Tech-savvy professional with the flexibility <br /> to work in 
                        both fast and slow-paced environments, looking for a full-time role.
                    </p>
                    <div className="about-btn">
                        <a className="btn" href={resume} download="Augustus-Resume.pdf">Resume</a>
                        <Link className="hire-btn" to={'/contact'}>Hire Me</Link>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default About