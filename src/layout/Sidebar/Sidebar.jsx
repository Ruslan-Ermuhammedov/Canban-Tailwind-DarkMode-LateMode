import React, { useContext } from 'react'

import SaitbarTop from './components/SaitbarTop'
import SidebarContents from './components/SidebarContents'
function Sidebar() {

  return (
    <div className={`w-[300px] flex flex-col  shadow-1xl h-[1024px] bg-white 
     dark:bg-black-700
    `}>
      <SaitbarTop />
      <SidebarContents />
    </div>
  )
}

export default Sidebar
