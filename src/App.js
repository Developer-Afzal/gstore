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
          <Route path="/gstore" element={<LoginScreen/>} />
          <Route path="/gstore/Cart" element={<CartScreeen/>} />
          <Route path="/gstore/dashboard" element={<Dashboard/>} />
          <Route path="/gstore/register" element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App