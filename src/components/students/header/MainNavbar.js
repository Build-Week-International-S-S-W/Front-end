import React, {useState} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Navbar.scss';

function MainNavbar(props) {


    return (
        <Navbar className='header' style={{background: 'rgba(0,0,0,.5)', color: '#FFFFFF'}}>
            <Navbar.Brand href="#home" style={{color: '#FFF'}}>LOGO HERE</Navbar.Brand>
            <Nav className="mr-auto">
                <p className='one-day-a-line'>Educell International School</p>
            </Nav>
            <Nav>
                <Link exact to="/">Home</Link>
            </Nav>
            <Nav>
                <Link to="/add-students">Add Students</Link>
            </Nav>
            <Nav>
                <Link>Modify Students</Link>
            </Nav>
            <Nav>
               <Link>Logout</Link>
            </Nav>
        </Navbar>
    );
}

export default MainNavbar;