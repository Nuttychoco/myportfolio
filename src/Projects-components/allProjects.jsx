import React from 'react'
import './allProjects.css';
import Kndt from '../assets/Kndt.PNG'

export const AllProjects = () => {
  return (
  <section className='AllProjects'>
<div className='recentProject'>
    <div className='project1'>
    <img src={Kndt} alt="" className='projectimg1'/>
    </div>
</div>

  </section>
  )
}

export default AllProjects;