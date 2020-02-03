import React from 'react';
import {Alert} from 'reactstrap';
import './Home.scss';
import AboutStudents from '../students/aboutStudents/BioPage'

export default function Home() {


   return(
     <>

        <div className = 'roster-wrapper'>
          <h1>Educell International School</h1>
          <div>
          <Alert color="primary">Current Roster</Alert>
            
          </div>
          <AboutStudents/>
        </div>

        

        
    </>
   );
}