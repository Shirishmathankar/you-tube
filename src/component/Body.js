import React from 'react'
import Slide from "./Slide"

import { Outlet } from 'react-router-dom'
 const Body = () => {
  return (
    <div className='flex relative  top-14 '>
        <Slide/>
        <Outlet/>
    </div>
  )
}
export default Body;