import React, {useState} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import './Navbar.scss';

function MainNavbar(props) {


   return(
    <Navbar className='header' style={{background: 'rgba(0,0,0,.5)', color: '#FFFFFF'}}>     
      <Navbar.Brand href="#home" style={{color:'#FFF'}}>LOGO HERE</Navbar.Brand>      
      <Nav className="mr-auto">
        <p className='one-day-a-line'>International School Social Worker</p>       
      </Nav> 
      <Nav>         
        Home
      </Nav>
      <Nav>         
        About us
      </Nav>
      <Nav>         
        Add Students
      </Nav>
      <Nav>         
         Modify Students
      </Nav>
      <Nav>         
        Contact us
      </Nav>
      <Nav>         
         Logout
      </Nav>    
    </Navbar>
   );
}

export default MainNavbar;