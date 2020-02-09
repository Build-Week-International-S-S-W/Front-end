import React, {useState, useEffect} from 'react'
import {Formik, Form, Field} from 'formik';
import { connect } from 'react-redux';
import { getStudentById, editStudents } from '../../actions/students';
import { Button } from 'reactstrap';

function EditForm(props) {    
    const defaultStudent={name:'',
                         age:'',
                         student_grade	:'',
                         student_class:'',
                         background:'',
                         student_status:'',
                         insurance:'',
                         birth_certificate:'',
                         special_needs:''
    }
    const [editStudent,setEditStudent] = useState(defaultStudent);

    useEffect(() => {
        props.getStudentById(props.match.params.id);        
    },[]);

    useEffect( () => {
        setEditStudent(props.studentsList)
    }, [props.studentsList]);

    const handleSubmit = (values, formikBag) => {
        // console.log('edit studetn submit button>>>>',props, values)
        props.editStudents(values,props)
        setEditStudent(values);        
        formikBag.resetForm();        
    }

    const validate = (values) => {
        const errors = {};
        if(!values.name) {errors.name = 'Name Required'};
        if(!values.age) {errors.age = 'Age Required'};
        if(!values.student_grade) {errors.grade = 'Grade is required'};
        if(!values.student_class) {errors.class= 'Class is required'};
        if(!values.background) {errors.background = 'Background is required'};
        if(!values.student_status) {errors.status = 'Status is required'};
        if(!values.special_needs) {errors.special_needs = 'Needs are required'};
        return errors;
     }
    // console.log(props.studentsList)
    return (
        <div className="edit-form">
            <Formik
                initialValues={defaultStudent}
                onSubmit={handleSubmit}
                validate={validate}
                render={(props) => {
                const {isSubmitting} = props;  
                return (
                <>
                <Form>
                    <label htmlFor="name">Name:</label>
                        <Field type="text" name="name" placeholder={defaultStudent.name} />                            
                    
                    <label htmlFor="age">Age:</label>
                        <Field type="number" name="age" placeholder={defaultStudent.age} />                            
                    
                    <label htmlFor="grade">Grade:</label>                        
                        <Field type="text" name="student_grade" placeholder={defaultStudent.grade} />                        
                
                    <label htmlFor="story">Backstory:</label>                       
                        <Field type="textarea" name="background" placeholder={defaultStudent.background}/>
                    
                    <label htmlFor="class">Class:</label>                       
                        <Field type="number" name="student_class" placeholder={defaultStudent.class}/>
                    
                    <label htmlFor="status">Status:</label>                      
                        <Field type="text" name="student_status" placeholder={defaultStudent.status}/>  
                    
                    <label htmlFor="insurance">Insurance </label>
                        <Field type='number' name='insurance' placeholder={defaultStudent.insurance}/>                        

                    <label htmlFor="birth_certificate">Birth Certificate </label>
                    <Field type='number' name='birth_certificate' placeholder={defaultStudent.birth_certificate}/>

                    <label htmlFor="special_needs">Special Needs:</label>
                    <Field type="textarea" name="special_needs" placeholder={defaultStudent.special_needs}/>                    
                    <Button type="submit" disabled={isSubmitting}>Edit</Button>
                </Form>
             </>
            )
            }}
        />

        </div>
    );
};

const mapStateToProps = (state) => {   
    return{
        error:state.students.error,
        isLoading:state.students.isLoading,
        studentsList:state.students.students
    }
}

export default connect( mapStateToProps,{ getStudentById,editStudents })(EditForm);

