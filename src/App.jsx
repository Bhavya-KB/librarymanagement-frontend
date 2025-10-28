import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import AdminHome from './Admin/AdminHome'


function App() {
  

  return (
    <>
       <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/adminhome' element={<AdminHome/>}/>

    </Routes>
    </>
  )
}

export default App
