import React from 'react';
import {Button} from 'react-bootstrap';
import AboutStudent from './aboutStudents/BioPage'

export default function Home() {
   return(
     <div>
      <h1>Educell International School</h1>
      <div>
      <AboutStudent/>
        <Button onClick={(e) => console.log('2', 2 + e)}>Add Student</Button>
      </div>
     </div>
   );
}