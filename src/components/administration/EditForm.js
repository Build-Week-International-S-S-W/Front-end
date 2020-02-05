import React, {useState, useEffect} from 'react';  
import { useForm } from 'react-hook-form'; 
import {useHistory, useParams} from 'react-router-dom';
import { server } from '../../axios';

export default function EditForm(props) {
    const { studentsList } = props;
    const { handleSubmit, errors} = useForm();
    const history = useHistory();
    const {student_id} = useParams;
    const [students, editStudents] = useState({});

    useEffect(() => {
        const student = studentsList.find((student) => {
            return student._id === student_id;
        });
        editStudents(student)
    },[studentsList, student_id]);

    const onSubmit = (data) => {
        const student = data;
        console.log(student)
        server.put(`/students/${student_id}`, student)
        .then(res => console.log(res))
        .then(history.push('/administration'))
        .catch(err => console.log(err))
    };

    if (!students) { return <h1>Loading...</h1>}

    return (
        <div className="container">
            <h1>Edit Student</h1>
            <form onSubmit={handleSubmit(onSubmit)}>

            </form>
        </div>
    )
}
