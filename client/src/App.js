import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/HomePage';

import { useSelector } from 'react-redux';


function App() {
  const isAuth = Boolean(useSelector((state) => state.token))
  return (
    <div>
    <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route
              path="/home"
              element={<HomePage />}
            />
          
    </Routes>
    </div>
  )
}

export default App
