import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../../assests/css/_schoolConfig.scss';

export default function AboutStudents() {
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
            <h5>Current Students</h5>
            {
                students.map(student => {
                    return <div className="add-student">

                        <p>{student.name}</p>


                    </div>
                })
            }


        </div>
    );
}
