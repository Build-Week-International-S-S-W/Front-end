import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function AboutStudent() {
    const [students, setStudents] = useState({});

    useEffect(() => {
        axios.get('https://international-school-sw.herokuapp.com/api/students')
        .then(res => {
            setStudents(res.data);
            console.log(res)
        });
    }, []);

    return (
        <>
        <div>
            <p>{students.name}</p>
        </div>
        </>

    )
}