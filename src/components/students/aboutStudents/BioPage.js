import React, {useState, useEffect} from 'react';
import axios from 'axios';


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

            {
                students.map(student => {
                    return <div className="">

                        <h5>Name:</h5>
                        <p>{student.name}</p>




                    </div>
                })
            }


        </div>
    );
}
