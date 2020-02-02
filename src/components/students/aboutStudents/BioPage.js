import React, {useState, useEffect} from 'react';
import axios from 'axios';

import './App.css';

export default function AboutStudents({students}) {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        axios.get('https://international-school-sw.herokuapp.com/api/students')
            .then(res => {
                setStudents(res.data);
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }, []);

    return (
        <div className="App">

            {
                students.map(student => {
                    return <div>
                        <form action="">
                            <label htmlFor="name">Students Name:</label>
                            <input name="name" type="text" value={student.name}/>
                            <label htmlFor="age">Students Age:</label>
                            <input name="age" type="text" value={student.age}/>
                            <input type="text"/>
                        </form>


                    </div>
                })
            }


        </div>
    );
}
