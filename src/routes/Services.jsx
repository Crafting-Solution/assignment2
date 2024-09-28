import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Illustrator from '../assets/images/illustrator.jpg'
import Laravel from '../assets/images/laravel.png'
import Reactt from '../assets/images/react.jpg'
import Wordpresss from '../assets/images/wordpress.jpg'
import Responsive from '../assets/images/responsive.jpg'

const Services = () => {
  return (
    <>
      <Navbar />
      <div className="skills reveal">
            <div className="skill-header">
                <h2>What I do</h2>
            </div>
            <div className="mySkill">
                <div className="skill">
                    <ion-icon className="skillPic" name="code-outline"></ion-icon>
                    <h2>Web Development</h2>
                    <div className="skillContent">
                        From Web Components and UI/UX animations to Vue Js, React.JS, and Laravel. Check out my web software development portfolio projects.
                    </div>
                </div>
                <div className="skill">
                    <img className="skillPic" src={Illustrator} alt="" />
                    <h2>Adobe Illustrator</h2>
                    <div className="skillContent">
                        I use AI to design flexible and free-flowing web elements. It includes vector
                        images,
                        responsive
                        media icons, scalable components, CSS generations, SVG export,
                        and
                        reusable symbols-
                        everything needed to make a clean and clear web layout.

                    </div>
                </div>
                <div className="skill">
                    <img className="skillPic res" src={Responsive} alt="" />
                    <h2>Responsive website</h2>
                    <div className="skillContent">
                    Responsive Web Design (RWD) through Cascading Style Sheets (CSS) to serve different style properties depending on the screen size, orientation, resolution, color capability, and other characteristics of the user's device and screen sizes by automatically adapting to the screen, from Desktop view to Tablet view and Smartphone, or even a Smart TV!
                    </div>
                </div>
                <div className="skill">
                    <img className="skillPic" src={Wordpresss} alt="" />
                    <h2>WordPress</h2>
                    <div className="skillContent">
                        Custom WordPress theme and plugin development. Easily update content, customizing web pages, without
                        knowing how to
                        code.
                    </div>
                </div>
                <div className="skill">
                    <img className="skillPic" src={Reactt} alt="" />
                    <h2>React.js</h2>
                    <div className="skillContent">
                        An open-source javascript framework managed by facebook. I use React to
                        build user-interface
                        specifically for single-page applications. Reusable UI component can also be
                        achieved with
                        react.
                    </div>
                </div>
                <div className="skill">
                    <img className="skillPic" src={Laravel} alt="" />
                    <h2>LARAVEL</h2>
                    <div className="skillContent">
                        To develop and construct web apps, services, sites, and tools, I utilize the Laravel web framework. <br /> Laravel is a PHP-based MVC framework for building websites, databases, forums, and caches that uses OOP. The framework's tools and libraries enable me to easily create scalable and resilient software.
                    </div>
                </div>
            </div>
        </div>


      <Footer /> 
    </>
  )
}

export default Services