import React, {useState} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import './Navbar.scss';

function MainNavbar(props) {


   return(
    <Navbar className='header' style={{background: 'rgba(0,0,0,.5)', color: '#FFFFFF'}}>     
         <Navbar.Brand href="#home" style={{color:'#FFF'}}>Home</Navbar.Brand>
      
      <Nav className="mr-auto">
        <p className='one-day-a-line'>International School Social Worker</p>       
      </Nav> 
      <Nav>         
         <button className='logout-button' >Add Students</button>
      </Nav>
      <Nav>         
         <button className='logout-button' >Modify Students</button>
      </Nav>
      <Nav>         
         <button className='logout-button' >Logout</button>
      </Nav>
    
    </Navbar>
   )
}

export default MainNavbar;