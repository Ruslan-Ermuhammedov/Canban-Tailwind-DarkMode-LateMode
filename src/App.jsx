import { createContext, useState } from 'react'
import Sidebar from './layout/Sidebar/Sidebar'
import Header from './layout/Header/Header'
import PageContenet from './layout/PageContent/PageContenet'
 import {StateContext} from './context/Context.js'

function App() {
  const [darkmode,setDarkmode] = useState(false)
 console.log(darkmode)
  return (
    <StateContext.Provider value={{darkmode,setDarkmode}}>
    <div className={ `flex h-[1024px] ${darkmode ?"dark" :""} items-center flex-row`}>
      <Sidebar/>
      <div className='h-[1024px] w-fit flex-1 flex flex-col items-start'>
        <Header/>
        <PageContenet/>
      </div>
     
    </div>
    </StateContext.Provider>
  )
}

export default App
