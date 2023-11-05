import React from 'react'
import './allProjects.css';
import Kndt from '../assets/Kndt.PNG'

export const AllProjects = () => {
  return (
    <section className='AllProjects'>
      <div className='recentProject'>
        <div className='project1'>
          <div>
            <img src={Kndt} alt="" className='projectimg1' />
          </div>
          <div className='projectGroupText'>
            <h1 className='imgTitle'>KNDT Arabia</h1>
            <div className='suppText1'>Inventory App </div>
            <div className='desText'>Static, Multi-page Application and SQL driven.</div>
            <div className=''>Tech Used: </div>
            <div></div>
          </div>

        </div>
      </div>

    </section>
  )
}

export default AllProjects;