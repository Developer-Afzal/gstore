import React from 'react'
import {NavLink} from 'react-router-dom';
import Dashboard from '../protected/Dashboard';

const Header = () => {

  return (
    <>
    
       <nav className='public-nav'>
          <p>G-STORE</p>
          <strong><NavLink className="Link" to="/">Login /</NavLink><NavLink className="Link" to="/register"> Register</NavLink></strong>
      </nav>
    
    </>
  );


}

export default Header;
