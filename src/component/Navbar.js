import React from 'react';
import { Link } from 'react-router-dom';
import navbar from './styles/navbar.css';

function Navbar() {
  return (
    <>
    <div className='navbar-container'>
        <Link to ='/' className='text-link'><h1>Digital_Vision.com</h1></Link>
    <div className='cart-icon'>   
        <Link to ='cart' className='cart-link'><i className="fas fa-cart-plus"></i></Link>
    </div>
      <Link to ='add-product' ><button className='nav-button'>Add New Item</button></Link>    
    </div>
    </>
  )
}

export default Navbar