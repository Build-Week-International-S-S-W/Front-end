import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { addStudents } from '../../../actions/students';
import { Button, Alert } from 'reactstrap';
import { connect }from 'react-redux';
import './intakestyles.scss'
import '../../assests/css/_schoolConfig.scss';



function IntakeForm(props) {
    const defaultStudent = {
        name: '',
        age: '',
        class: '',
        grade: '',
        background: '',
        status:'',
        insurance: '',
        special_needs: '',       
        birth_certificate: ''
    }
    const [student, setStudent] = useState(defaultStudent);    
    const handleSubmit = (values,formikBag) => {  
        console.log(values);
        props.addStudents(values,props);
        setStudent();
        formikBag.resetForm();
    }    
    const validate = (values) => {
        const errors = {};        
        if(!values.name) {errors.name = 'Name Required'};
        if(!values.age) {errors.age = 'Age field Required'};
        if(values.age > 18) { errors.age = 'Age should be below 18'};
        if(!values.class) {errors.class = 'Class is required'};
        if(!values.grade) {errors.grade = 'Grade is required'};
        if(!values.background) {errors.background = 'Background is required'};
        if(!values.status) {errors.status = 'Status is required'};
        if(!values.insurance) {errors.insurance = 'Insurance is required'};
        if(!values.special_needs) {errors.special_needs = 'Special needs is required'};
        if(!values.birth_certificate) {errors.birth_certificate = 'Birth certificate is required'};
        return errors;
     }


    return (
        <React.Fragment>
            <div className="Intake-Form">              
                <Formik
                    initialValues={student}
                    validate={validate}
                    onSubmit={handleSubmit}                
                    render={(props) => {
                        return(<Form>
                                <div className='student-info'>
                                    <Alert color="primary" className='student-info'>Student Information</Alert>
                                    <div className='name-age-grade'>
                                        <label htmlFor="name">Name:</label>
                                        <Field type='text' name='name' placeholder='Required' />
                                        <ErrorMessage name='name' component='div'/>

                                        <label htmlFor="age">Age:</label>
                                        <Field type='text' name='age' placeholder='Student age' />
                                        <ErrorMessage name='age' component='div'/>

                                        <label htmlFor="class">Class:</label>
                                        <Field type='text' name='class' placeholder='Student Class' />
                                        <ErrorMessage name='class' component='div'/>

                                        <label htmlFor="grade">Grade:</label>
                                        <Field as='select' name='grade'>                                        
                                                <option value="1">1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                    <option>6</option>
                                                    <option>7</option>
                                                    <option>8</option>
                                                    <option>9</option>
                                                    <option>10</option>
                                                    <option>11</option>
                                                    <option>12</option>
                                        </Field>
                                    </div>
                                    <div className="back-story">
                                        <label htmlFor="background">BackStory:</label>
                                        <Field type='textarea' name='background' placeholder='Background' />
                                        <ErrorMessage name='background' component='div'/>
                                    </div>

                                    <label htmlFor="status">Status:</label>
                                    <Field type='text' name='status' placeholder='Student Status' />
                                    <ErrorMessage name='status' component='div'/>

                                    <div className="student-bottom">
                                        <label htmlFor="insurance">Insurance </label>
                                        <Field type='text' name='insurance' placeholder='yes or no'/>
                                        <ErrorMessage name='insurance' component='div'/>  
                                        
                                        {/* <label htmlFor="date">Expiration Date:</label>
                                        <Field type='date' name='date' />   
                                        <br />  */}

                                        <label htmlFor="birth_certificate">Birth Certificate</label>
                                        <Field type='text' name='birth_certificate' placeholder='yes or no'/>
                                        <ErrorMessage name='insurance' component='div'/>                                  

                                        
                                        <br />
                                        <label htmlFor="special_needs">Special Needs:</label>
                                        <Field type='textarea' name='special_needs' placeholder="accommodations" />
                                    </div>
                                </div>
                                <br/>                            
                                <Button color='warning' type="submit" enabled={props.isSubmitting}>
                                {props.isSubmitting ? 'Adding..' : 'Add'}</Button>
                        </Form>)
                    }} 
                />
            </div>
        </React.Fragment>
    );
}

const mapStateToProps = (state) => {
    console.log(state.students)
    return{
        error:state.students.error,
        isLoading:state.students.isLoading,
        studentsList:state.students.students
    }
}

export default connect( mapStateToProps,{ addStudents })(IntakeForm);

