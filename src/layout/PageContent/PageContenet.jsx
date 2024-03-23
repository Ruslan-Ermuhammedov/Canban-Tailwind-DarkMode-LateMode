import React, { useContext } from 'react'

function PageContenet() {
  const AddColumnHanendlear = () => {

  }
  return (
    <div className={`w-full shadow-2xl flex-1  bg-white-300 dark:bg-black-500       `}>
      <div className='flex flex-col items-center gap-5 py-[400px] '>
        <h1 className='text-md text-gray-700 font-bold  '>This board is empty. Create a new column to get started.</h1>
        <button onClick={AddColumnHanendlear} className='bg-blue-500 p-3 px-7 rounded-full text-white text-[15px]'> + Add New Task</button>
      </div>

    </div>
  )
}

export default PageContenet
