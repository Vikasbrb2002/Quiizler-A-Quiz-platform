import React from 'react'
import Dashboard from './components/Dashboard'
import Home from './components/Home'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'

const App = () => {
  return (

    <div>
      <BrowserRouter>
      <Routes>
       <Route path='/' element={<Dashboard/>}></Route> 
       <Route path='/home' element={<Home/>}></Route> 
     </Routes>
     </BrowserRouter>
 
    </div>
  )
}

export default App
