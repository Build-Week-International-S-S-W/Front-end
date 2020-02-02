import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function Home() {
  const [student, setStudent] = useState([{name: ""}]);

  useEffect(() => {
    axios
      .get('https://international-school-sw.herokuapp.com/api/students')
      .then((res) => {
        console.log(res)
        setStudent(res.Results)})
      .catch((err) => console.log(err))
  }, [])

   return(

     <>
      {/* <h1>Educell International School</h1> */}

      {student.map((person) => {
        console.log(person)
        // return (
        //   // <p>{person.name}</p>
        // )
      })}

     </>
   );
}