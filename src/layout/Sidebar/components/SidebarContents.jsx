import React from 'react'
import SidebarContentItems from './SidebarContentItems'
import SideBarBottom from './SideBarBottom'

function SidebarContents() {
    return (
        <div className='   flex flex-col flex-1 justify-between'>
            <SidebarContentItems />
            <SideBarBottom />
        </div>
    )
}

export default SidebarContents
