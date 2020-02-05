import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getStudents } from '../../../actions/students';
import { StudentsDataTable } from './DataTable';
import {Button} from 'reactstrap';

const AboutStudents = () => {
    

    useEffect(() => {
        getStudents();      
        

    }, []);

    console.log('students info from store>>>>>>>>>>>>>>>>');
    return (
        <React.Fragment>
            <StudentsDataTable data={Response}/>
            {/* {props.studentsList.map( (student) => {
                
                return <div>
                    <h1>{props.name}</h1>
                </div>
            })} */}
            <div className="btn">
                <Button color="success" onClick={(touched) => {
                    
                    
                    touched = alert(('Educell International network is being monitor!'));

                    window.location.href = "/add-students"}}>Add Student</Button>
            </div>
        </React.Fragment>          
    )
};

const mapStateToProps = (state) => {
    // console.log(state.students)
    return{
        error:state.students.error,
        isLoading:state.students.isLoading,
        studentsList:state.students.students
    }
}

export default connect( mapStateToProps,{ getStudents })(AboutStudents);