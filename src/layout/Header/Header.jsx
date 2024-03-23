import React from 'react'
import HeaderRight from './HeaderRight'
import HeaderLeft from './HeaderLeft'

function Header() {
  return (
    <div className='shadow-2xl dark:bg-black-700 w-full py-7 px-6 h-24 text-lg flex flex-row items-center justify-between '>
      <HeaderRight/>
      <HeaderLeft/>
    </div>
  )
}

export default Header
