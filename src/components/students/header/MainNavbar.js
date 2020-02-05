import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import { SESSION_KEY_TOKEN } from '../../../constants/constatnt';
import {Link} from 'react-router-dom';
import './Navbar.scss';

function MainNavbar(props) {

    // const [ token, setToken ] = useState(null);
    // const [ message, setMessage] = useState(null);
    // const [flag, setFlag] = useState(false);
    // useEffect(() => {
    //     setToken(props.token);
    //     setMessage(props.message);
    // },[props.token, props.message])

    return (
        <Navbar className='header' style={{background: 'rgb(68,69,69)', color: '#FFFFFF'}}>
            <Navbar.Brand href="#home" style={{color: '#FFF'}}>LOGO HERE</Navbar.Brand>
            <Nav className="mr-auto">
                <p className='one-day-a-line'>Educell International School</p>
            </Nav>
            <div className="only-links">
            {/* {<Nav>
                <Link to="/sign-in">Login</Link>
            </Nav>
            } */}

            {<Nav>
                <Link to="/home-page">Home</Link>
            </Nav> 
            }           
            {<Nav>
                <Link to="/administration">Administration</Link>
            </Nav>
            }
            {<Nav>
               <Link to="/sign-out"><span onClick={() =>{sessionStorage.removeItem(SESSION_KEY_TOKEN)}}>Logout</span></Link>
            </Nav>}
            </div>
        </Navbar>
    );
}

export default MainNavbar;