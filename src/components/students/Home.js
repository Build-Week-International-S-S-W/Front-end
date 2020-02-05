import React from 'react';
import {Badge, Alert} from 'reactstrap';
import './Home.scss';
import AboutStudents from '../students/aboutStudents/BioPage'
<<<<<<< HEAD


=======
import moment from 'moment';
>>>>>>> 473426a5e5a324da19d0e9af6748ed9ea7d282c8
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