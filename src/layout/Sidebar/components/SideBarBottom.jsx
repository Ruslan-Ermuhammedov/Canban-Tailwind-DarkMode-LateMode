import React, { useContext, useState } from 'react'
import kunTun from '../../../assets/images/KunTun.svg'
import koz from '../../../assets/images/eye.svg'
import {BsMoonStarsFill}from 'react-icons/bs'
import {BiSolidSun}from 'react-icons/bi'
import Checkboxinput from './Checkboxinput'
function SideBarBottom() {
  const changeMode = () => {
    setDarkmode(p => !p)
  }
  return (
    <div className={`  mt-[500px]      px-6  `}>
     <div className='w-full bg-white-300 rounded-md flex items-center dark:bg-black-500 justify-center gap-x-5 h-12  '>
      <BiSolidSun className='text-gray-700 text-md' />
    <Checkboxinput/>
      <BsMoonStarsFill className='text-gray-700 text-md'/>
      
     </div>
      <h2 className='flex flex-row gap-3 ml-7 py-6 dark:text-white'> <img src={koz} alt="" />Hide Sidebar</h2>
    </div>
  )
}

export default SideBarBottom
