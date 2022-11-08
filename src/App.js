import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import CartScreeen from './protected/CartScreeen';
import Dashboard from './protected/Dashboard';
import LoginScreen from './public/LoginScreen';
import Register from './Component/Register';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginScreen/>} />
          <Route path="/Cart" element={<CartScreeen/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App