import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Home.scss';

export default function Home() {
  const [student, setStudent] = useState([{name: ""}]);

  useEffect(() => {
    axios
      .get('https://international-school-sw.herokuapp.com/api/students')
      .then((res) => {
        setStudent(res.data)})
      .catch((err) => console.log(err))
  }, [])

   return(

     <div className = "roster-wrapper">
      <h1 className = "schoolname">Educell International School</h1>
        <h3 className = "current-roster"><u>Current Roster</u></h3>
      <div className = "student-list">
      {student.map((person) => {
        return (
          <p>{person.name} Grade: {person.class}</p>
        )
      })}
      </div>
     </div>
   );
}