import React, {useState, useEffect} from 'react';
import './Home.scss';
import {Button} from 'react-bootstrap';
import AboutStudents from '../students/aboutStudents/BioPage'

export default function Home() {


   return(

        <div>
          <h1>Educell International School</h1>
          <div>
          <AboutStudents/>
            <Button onClick={() => window.location.href = "/add-students"}>Add Student</Button>
          </div>
        </div>
   );
}