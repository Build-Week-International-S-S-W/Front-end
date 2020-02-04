import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import { SESSION_KEY_INFO } from '../../../constants/constatnt'
import {Link} from 'react-router-dom';
import './Navbar.scss';

function MainNavbar(props) {

    const message = JSON.parse(sessionStorage.getItem(SESSION_KEY_INFO)).message;
    const token = JSON.parse(sessionStorage.getItem(SESSION_KEY_INFO)).token;
    console.log(message,token);
    return (
        <Navbar className='header' style={{background: 'rgb(68,69,69)', color: '#FFFFFF'}}>
            <Navbar.Brand href="#home" style={{color: '#FFF'}}>LOGO HERE</Navbar.Brand>
            <Nav className="mr-auto">
                <p className='one-day-a-line'>Educell International School</p>
            </Nav>
            <div className="only-links">
            { !token && !message && <Nav>
                <Link to="/sign-in">Login</Link>
            </Nav>
            }

            { token && message && <Nav>
                <Link to="/home-page">Home</Link>
            </Nav> 
            }           
            {token && message && <Nav>
                <Link to="/administration">Administration</Link>
            </Nav>
            }
            {token && message && <Nav>
               <Link to="/sign-out">Logout</Link>
            </Nav>
            }
            </div>
        </Navbar>
    );
}

export default MainNavbar;