import React, {useEffect, useState} from 'react';
import axios from 'axios';


function Administration() {
const [editStudent, setEditStudent] = useState(false);

useEffect(() => {
    axios.put('https://international-school-sw.herokuapp.com/api/students/:id')
    .then((res) => {
        console.log(res)
    })
}, [])


    return (
        <div>
            <h2>Welcome, please choose an administrative task below:</h2>

            <button>Delete Student</button>

            <button>Edit Student</button>
        </div>
    )
}



export default Administration;