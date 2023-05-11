import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/HomePage';


function App() {
  return (
    <div>
    <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/home' element={<HomePage />} />
    </Routes>
    </div>
  )
}

export default App
