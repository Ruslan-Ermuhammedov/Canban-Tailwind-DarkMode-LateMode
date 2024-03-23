import React, { useContext } from 'react'
import { MdOutlineSpaceDashboard } from "react-icons/md"
import { NavLink } from 'react-router-dom'

const sidebarItems = [
  { title: "Platform Launch",color:'text-gray-700', id: 1 },
  { title: "Marketing Plan",color:'text-gray-700', id: 2 },
  { title: "Roadmap",color:'text-gray-700', id: 3 },
  { title: "+ Create New Board", color:'text-blue-500',id: 4 },
]
function SidebarContentItems() {

  return (
    <div className={ `   pt-6 flex flex-col w-full items-start justify-between `}>
      <h1 className='ml-8 mb-5 text-xs font-bold  text-gray-700 uppercase tracking-[2.4px] '>ALL BOARDS (3)</h1>
      <div className='w-full pr-6'>
        {sidebarItems.map((item) => (
          <button className={`px-8 w-full duration-300 py-4  flex gap-x-4  ${item.color} items-center hover:bg-blue-500 rounded-r-full hover:text-white  `} key={item.id}>
            <MdOutlineSpaceDashboard className='text-[21px]' />
            <span className={`text-sm font-bold `}>{item.title}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default SidebarContentItems
