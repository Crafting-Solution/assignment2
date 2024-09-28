import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ProjectFile from '../projects.json'
import { Link } from 'react-router-dom'


const Projects = () => {
  return (
    <>
        <Navbar />
        <div className="project-container">
          <h1 className='projects-heading'>My Project</h1>
          <div className="projects-list">
            {ProjectFile.map((project) => (
              <div key={project.id} className="projects">
                <div className="project-des">
                  <p>{project.description}</p>
                </div>
                <div className="project-img">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-title">
                  <p>{project.title}</p>
                  <Link to={project.link} target="_blank">View Project</Link>
                </div>
              </div>
            ))}
        </div>
        </div>
        <Footer /> 
    </>
  )
}

export default Projects