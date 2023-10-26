import React from 'react'
import skillTest from './svg/skill test.svg'
import dashboard from './svg/dashboard.svg'
import internship from './svg/internship.svg'

const Sidebar = () => {
  return (
    <div className='flex-col sidebar'>
        <a> <img src={dashboard} alt="" />  Dashboard</a>
        <a className='select'> <img src={skillTest} alt="" />Skill Test</a>
        <a><img src={internship} alt="" />InternShip</a>
    </div>
  )
}

export default Sidebar