import React from 'react'
import './project.css'
import AllProjects from '../components/allProjects';

export const Project = () => {
  return (
    <section className='projectPage'>
      <div className='projectItem'>
          <div className='title2'>
            <h2 className="projectTitle"><span className="yellowText">Recent</span>Project</h2>
          </div>
          <AllProjects />
      </div>
    </section>
  )
}


export default Project;