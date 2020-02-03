import React from 'react';
import './Home.scss';
import AboutStudents from '../students/aboutStudents/BioPage'

export default function Home() {


   return(

        <div className = 'roster-wrapper'>
          <h1>Educell International School</h1>
          <div>
          <h3>Current Roster</h3>
          <AboutStudents/>
            
          </div>
        </div>
   );
}