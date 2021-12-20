import React from 'react'
import { NavLink } from 'react-router-dom';
import {Navbar, NavItem} from 'reactstrap'


function Navbars() {
      return (
            <>
           
            <div className='bg-nav navbar navbar-expand-md'>
                  <NavLink to='/'><img src='./img/Auto logo 1.png' /></NavLink>
                  <Navbar >
                        <NavItem ><NavLink to='/' className='nav-link'>HOME</NavLink></NavItem>
                        <NavItem ><NavLink to='/about' className='nav-link'>ABOUT</NavLink></NavItem>
                        <NavItem ><NavLink to='/galireya' className='nav-link'>GALIREYA</NavLink></NavItem>
                  </Navbar>
                  <button type='button' className='btn'>
                        <NavLink to='/contact' className='nav-link'>CONTACT US</NavLink>
                  </button>
            </div>
            </>
      )
}

export default Navbars
