
import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Home'
import Modal from './Modal'
const AppRouter = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='modal' element={<Modal/>} />

        </Routes>

    </div>
  )
}

export default AppRouter