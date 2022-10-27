import React from 'react'
import './navbar.css';
import {RiMenu3Line,RiCloseLin} from 'react-icons/ri';
import logo from '../../assets/logo.png'

const navbar = () => {
  return (
    <div className='rotaract_navbar'>
      <div className='rotaract_navbar-links'>
      <div className='rotaract_navbar-links_logo'>
        <img src={logo} alt='logo'/>
      </div>
      <div className='rotaract_navbar-links_container'>
        <p><a href='#Home'>Home</a></p>
        <p><a href='#rotaract'>What is Rotaract</a></p>
        <p><a href='#branches'>Branches</a></p>
        <p><a href='#contact'>Contact</a></p>
      </div>
      </div>
      <div className='rotaract_navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign Up</button>
      </div>
    </div>
  )
}

export default navbar