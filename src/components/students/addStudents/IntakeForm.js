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
        student_class: '',
        student_grade: '',
        background: '',
        student_status:'',
        insurance: '',
        special_needs: '',       
<<<<<<< HEAD
        birth_certificate: ''
<<<<<<< HEAD
    });
    
    
        // props.userRegister(values,props);
        // setStudent();
        // formikBag.resetForm();
    

=======
=======
        birth_certificate: '',
        student_contact:'',
        social_worker:''
>>>>>>> 1e572dc7318dd080423d127a3c42c9cb65734063
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
        if(!values.student_class) {errors.student_class = 'Class is required'};
        if(!values.student_grade) {errors.student_grade = 'Grade is required'};
        if(!values.background) {errors.background = 'Background is required'};
        if(!values.student_status) {errors.student_status = 'Status is required'};
        if(!values.insurance) {errors.insurance = 'Insurance is required'};
        if(!values.special_needs) {errors.special_needs = 'Special needs is required'};
        if(!values.birth_certificate) {errors.birth_certificate = 'Birth certificate is required'};
        if(!values.student_contact) {errors.student_contact = 'Contact information is required'};
        if(!values.social_worker) {errors.social_worker = 'Social worker is required'};
        return errors;
     }
>>>>>>> ea312180e84310663943ae5945fa8186e0e73a4c


    return (
        <React.Fragment>
            <div className="Intake-Form">              
                <Formik
<<<<<<< HEAD
                    initialValues={{ ...student }}
                    validate={values => {
                        const errors = {};
                        if (!values.name) {
                            errors.name = 'Required';
                        } else if (values.age > 17 || !values.age ) {
                            errors.age = 'Not Allowed';
                        }                       

                        return errors;
                    }}

                    onSubmit={(data, {setSubmitting}) => {
                        setSubmitting(true)
                        console.log("submit", data)
                        setSubmitting(false)

                    }}
                >
                    {({ values, isSubmitting }) => (

                        <Form>
                            <div className='student-info'>
                                <Alert color="primary" className='student-info'>Student Information</Alert>
                                <div className='name-age-grade'>

                                    <label htmlFor="studentName">Name:</label>
                                    <Field type='text' name='studentName' placeholder='Required' />
                                    <ErrorMessage name='name' component='div'/>

                                    <label htmlFor="age">Age:</label>
                                    <Field type='text' name='age' placeholder='Student age' />
                                    <ErrorMessage name='age' component='div'/>

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
                                    <label htmlFor="story">BackStory:</label>
                                    <Field type='textarea' name='story' placeholder='(Student Backstory)' />
                                </div>
                                <div className="student-bottom">
                                    <label htmlFor="insurance">Insurance </label>


                                    <label htmlFor="Y">:  Yes</label>
                                    <Field type='checkbox' name='Y' />


                                    <label htmlFor="N"> No</label>
                                    {/*<ErrorMessage name='N' component='div'/>*/}
                                    <Field type='checkbox' name='N' />


                                    <label htmlFor="date">Expiration Date:</label>
                                    <Field type='date' name='date' />
                                    <br>

                                    </br>

                                    <label htmlFor="birthCertificate">Birth Certificate</label>

                                    <label htmlFor="y">: Yes</label>
                                    <Field type='checkbox' name='y' />

                                    <label htmlFor="n">No</label>
                                    {/*<ErrorMessage name='n' component='div'/>*/}
                                    <Field type='checkbox' name='n' />
                                    <br>

                                    </br>


                                    <label htmlFor="needs">Special Needs:</label>
                                    <Field type='textarea' name='needs' placeholder="Allergies" />
                                </div>


                            </div>
                            <br/>

                            {/* <div className='rep-info'>
                                <Alert color="warning" className=''>Representative Information</Alert>


                                <label htmlFor="repName">Name:</label>
                                <Field type='name' name='repName' placeholder='Name' />


                                <label htmlFor="phone">Phone:</label>
                                <Field type='phone' name='phone' placeholder='optional' />

                                <label htmlFor="email">Email:</label>
                                <Field type='email' name='email' placeholder='Required' />
                                <ErrorMessage name='email' component='div' />


                                <label htmlFor="relation">Contact:</label>
                                <Field type='textarea' name='relation' placeholder='Contact' />
                            </div> */}

                            <Button disabled={isSubmitting} type='submit'> Submit </Button>

                        </Form>

                    )}

                </Formik>

=======
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
                                        <Field type='number' name='age' placeholder='Student age' />
                                        <ErrorMessage name='age' component='div'/>

                                        <label htmlFor="class">Class:</label>
                                        <Field type='number' name='student_class' placeholder='Student Class' />
                                        <ErrorMessage name='student_class' component='div'/>

                                        <label htmlFor="grade">Grade:</label>                                    
                                        <Field type='text' name='student_grade' placeholder='Student grade' />
                                        <ErrorMessage name='student_grade' component='div'/>
                                    </div>
                                    <div className="back-story">
                                        <label htmlFor="background">BackStory:</label>
                                        <Field type='textarea' name='background' placeholder='Background' />
                                        <ErrorMessage name='background' component='div'/>
                                    </div>

                                    <label htmlFor="status">Status:</label>
                                    <Field type='text' name='student_status' placeholder='Student Status' />
                                    <ErrorMessage name='student_status' component='div'/>

                                    <div className="student-bottom">
                                        <label htmlFor="insurance">Insurance </label>
                                        <Field type='number' name='insurance' placeholder='yes or no'/>
                                        <ErrorMessage name='insurance' component='div'/>  
                                        
                                        {/* <label htmlFor="date">Expiration Date:</label>
                                        <Field type='date' name='date' />   
                                        <br />  */}

                                        <label htmlFor="birth_certificate">Birth Certificate</label>
                                        <Field type='number' name='birth_certificate' placeholder='yes or no'/>
                                        <ErrorMessage name='birth_certificate' component='div'/> 

                                        <label htmlFor="student_contact">Student Contact</label>
                                        <Field type='textarea' name='student_contact' placeholder='contact information'/>
                                        <ErrorMessage name='student_contact' component='div'/>                                  

                                        <label htmlFor="social_worker">Social worker</label>
                                        <Field type='textarea' name='social_worker' placeholder='contact information'/>
                                        <ErrorMessage name='social_worker' component='div'/>                                  
                                        
                                        <br />
                                        <label htmlFor="special_needs">Special Needs:</label>
                                        <Field type='textarea' name='special_needs' placeholder="accommodations" />
                                    </div>
                                </div>
                                <br/>                            
                                <Button color='warning' type="submit" disabled={props.isSubmitting}>
                                {props.isSubmitting ? 'Adding..' : 'Add'}</Button>
                        </Form>)
                    }} 
                />
>>>>>>> ea312180e84310663943ae5945fa8186e0e73a4c
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

