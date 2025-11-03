import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import AdminHome from './Admin/AdminHome'
import AdminAddUser from './Admin/AdminAddUser'
import AdminViewUser from './Admin/AdminViewUser'
import AdminBookAdd from './Admin/AdminBookAdd'
import UserHomePage from './User/UserHomePage'
import UserBookDetails from './User/UserBookDetails'


function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/adminhome' element={<AdminHome />} />
        <Route path='/adduser' element={<AdminAddUser />} />
        <Route path='/adminview' element={<AdminViewUser />} />
        <Route path='/userhome' element={<UserHomePage/>}/>
      <Route path='/adminaddbook' element={<AdminBookAdd/>}/>
      <Route path='/userbookdetails' element={<UserBookDetails/>}/>
      

      </Routes>
    </>
  )
}

export default App
