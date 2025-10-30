import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import AdminHome from './Admin/AdminHome'
import AdminAddUser from './Admin/AdminAddUser'
import AdminViewUser from './Admin/AdminViewUser'
import AdminBookAdd from './Admin/AdminBookAdd'


function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/adminhome' element={<AdminHome />} />
        <Route path='/adduser' element={<AdminAddUser />} />
        <Route path='/adminview' element={<AdminViewUser />} />

      <Route path='/adminaddbook' element={<AdminBookAdd/>}/>

      </Routes>
    </>
  )
}

export default App
