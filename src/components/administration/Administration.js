import React, {useState} from 'react';
<<<<<<< HEAD
import {Button, Alert} from 'reactstrap';
import { deleteStudents } from '../../actions/students';
=======
// import {Button, Alert} from 'reactstrap';

>>>>>>> master
import StudentCard from './Card';
import { connect } from 'react-redux';



const  Administration = (props) => {
    // const [editStudent, setEditStudent] = useState(false)
    // const [deleteStudent, setDeleteStudent] = useState(false)

<<<<<<< HEAD
    const deleteHandler = (id) => {
        console.log(id);
        props.deleteStudents(id,props);
    }
=======
    // const deleteHandler = () => {
    //     console.log(deleteStudent);
    // }
>>>>>>> master

    // const editHandler = () => {
    //     console.log(editStudent)
    // }

    return (
        <>
         {props.studentsList.map((student,index) => <StudentCard key={index} deleteStudents={deleteHandler} student={student}/>)}                       
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

const mapStateToDispatch = {
    deleteStudents
}

export default connect(mapStateToProps,mapStateToDispatch)(Administration);