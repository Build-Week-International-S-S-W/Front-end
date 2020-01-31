import React from 'react';
import {Link} from 'react-router-dom';
import './errors.scss';


export default function NotAuthorized(props) {
   return(
      <div className='server-error'>
        <h1>401: Unauthorized Error</h1>
        <p>Access denied due to invalid credentials.</p>
        <Link to='/sign-in'>
           <div className='server-error-div'> {'<<<'} Login Page</div>
        </Link>
      </div>
   );
}