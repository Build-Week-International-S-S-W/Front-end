import React, {useState, useEffect} from 'react';
import {Button, Alert} from 'reactstrap';
import { getStudents, deleteStudents } from '../../actions/students';
import StudentCard from './Card';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';



const  Administration = (props) => {
    // const [editStudent, setEditStudent] = useState(false)
    // const [deleteStudent, setDeleteStudent] = useState(false)

   useEffect(() => {
     props.getStudents();
   },[]);


    const deleteHandler = (id) => {
        console.log(id);
        props.deleteStudents(id,props);
    }


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
    deleteStudents,getStudents
}

export default connect(mapStateToProps,mapStateToDispatch)(Administration);
