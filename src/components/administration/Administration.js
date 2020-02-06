import React, {useState} from 'react';
import {Button, Alert} from 'reactstrap';
import Card from './Card';
import { connect } from 'react-redux';



const  Administration = () => {
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
         {props.studentsList.map( (student) => {
              return <Card student={student}/>;
         });
         }               
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