import React, {useState} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Navbar.scss';

function MainNavbar(props) {


    return (
        <Navbar className='header' style={{background: 'rgba(0,0,0,.5)', color: '#FFFFFF'}}>
            <Navbar.Brand href="#home" style={{color: '#FFF'}}>LOGO HERE</Navbar.Brand>
            <Nav className="mr-auto">
                <p className='one-day-a-line'>International School Social Worker</p>
            </Nav>
            <Link exact to="/">

                <Nav>
                    Home
                </Nav>
            </Link>
            <Link to="/add-students">

                <Nav>
                    Add Students
                </Nav>
            </Link>
            <Link>

                <Nav>
                    Modify Students
                </Nav>
            </Link>
            <Link to="">

                <Nav>
                    Logout
                </Nav>
            </Link>
        </Navbar>
    );
}

export default MainNavbar;