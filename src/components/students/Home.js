import React from 'react';
import {Badge, Alert} from 'reactstrap';
import './Home.scss';
import AboutStudents from '../students/aboutStudents/BioPage'
import moment from 'moment';
export default function Home(props) {


   return(
     <>

        <div className = 'roster-wrapper'>
          <div>
          <Alert color="primary">Current Roster</Alert>

          </div>
          <Badge color="info">{moment().format('MMMM Do YYYY, h:mm:ss a')}</Badge>
        </div>

        <br>

        </br>
        <AboutStudents data={props}/>
    </>
   );
}