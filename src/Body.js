import React from 'react'
import Sidebar from './Sidebar'
import Main from './Main'

const Body = () => {
  return (
    <div className="flex-row body">
        <Sidebar/>
        <Main/>
    </div>
  )
}

export default Body