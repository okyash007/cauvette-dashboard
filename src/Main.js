import React from 'react'
import UpdateCard from './update card/UpdateCard'
import Stats from './stats/Stats'
import Syllabus from './progress/Syllabus'
import Pie from './pie/Pie'
import Graph from './graphs/Graph'

const Main = () => {
  return (
    <div className='main flex-row'>
        <div className='flex-col main-l'>
            <p>skill Test</p>
            <UpdateCard/>
            <Stats/>
            <Graph/>
        </div>
        <div className='main-r'> 
            
        <Syllabus/>
        <Pie/>
        </div>
    </div>
  )
}

export default Main