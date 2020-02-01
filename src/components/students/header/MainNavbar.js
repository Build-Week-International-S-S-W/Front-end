import React, {useState} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Navbar.scss';

function MainNavbar(props) {


    return (
        <Navbar className='header' style={{background: 'rgb(68,69,69)', color: '#FFFFFF'}}>
            <Navbar.Brand href="#home" style={{color: '#FFF'}}>LOGO HERE</Navbar.Brand>
            <Nav className="mr-auto">
                <p className='one-day-a-line'>Educell International School</p>
            </Nav>
            <Nav>

                <Link exact to="/sign-in">Home</Link>
            </Nav>
            <Nav>
                <Link to="/add-students">Add Students</Link>
            </Nav>
            <Nav>
                <Link to="/modify-students">Modify Students</Link>
            </Nav>
            <Nav>
               <Link to="sign-out">Logout</Link>
            </Nav>
        </Navbar>
    );
}

export default MainNavbar;