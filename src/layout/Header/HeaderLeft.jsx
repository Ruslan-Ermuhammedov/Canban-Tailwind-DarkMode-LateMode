import React from 'react'

function HeaderLeft() {
    return (
        <div className='flex flex-row gap-6 items-center'>
            <button className='bg-blue-100 p-3 px-7 rounded-full text-white text-sm'> + Add New Task</button>
            <svg xmlns="http://www.w3.org/2000/svg" width="5" height="20" viewBox="0 0 5 20" fill="none">
                <circle cx="2.30769" cy="2.30769" r="2.30769" fill="#828FA3" />
                <circle cx="2.30769" cy="10" r="2.30769" fill="#828FA3" />
                <circle cx="2.30769" cy="17.6923" r="2.30769" fill="#828FA3" />
            </svg>
        </div>

    )
}

export default HeaderLeft
