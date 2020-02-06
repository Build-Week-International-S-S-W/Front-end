import React, {useState} from 'react';
import {Button, Alert} from 'reactstrap';
import StudentCard from './Card';
import { connect } from 'react-redux';



const  Administration = (props) => {
    const [editStudent, setEditStudent] = useState(false)
    const [deleteStudent, setDeleteStudent] = useState(false)

    const deleteHandler = () => {
        console.log(deleteStudent);
    }

    const editHandler = () => {
        console.log(editStudent)
    }

    return (
        <>
         {props.studentsList.map((student,index) => <StudentCard key={index} student={student}/>)}                       
        </>
    )
}

const mapStateToProps = (state) => {
    console.log(state.students)
    return{
        error:state.students.error,
        isLoading:state.students.isLoading,
        studentsList:state.students.students
    }
}

export default connect(mapStateToProps,null)(Administration);