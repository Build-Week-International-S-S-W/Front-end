import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function Home() {
  const [student, setStudent] = useState('');

  useEffect(() => {
    axios
      .get('https://international-school-sw.herokuapp.com/api/students')
      .then((res) => setStudent(res.data.name))
      .catch((err) => console.log(err))
  })

   return(
     <div>
      <h1>Educell International School</h1>
     </div>
   );
}