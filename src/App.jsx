import { useState } from 'react'
import './App.css'
import LoginPage from './pages/login_page'
import AdminPage from './pages/adminPage'
import Home from './pages/home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'



function App() {


  return (


    <> 
    <BrowserRouter>
    <Routes  path="/*">    
    <Route path='/' element={<Home/>} />
    <Route path='/login' element={<LoginPage />} />
    <Route path='/admin/*' element={<AdminPage/>} />
    <Route path='/*' element={<h1>404 not found</h1>} />
    </Routes>
    </BrowserRouter>
   
    
       
    </>
  )
}

export default App
