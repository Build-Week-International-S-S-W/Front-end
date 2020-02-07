import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { addStudents } from '../../../actions/students';
import { Button, Alert } from 'reactstrap';
import { connect } from 'react-redux';
import './intakestyles.scss'
import '../../assests/css/_schoolConfig.scss';



function IntakeForm(props) {
    const [student, setStudent] = useState({
        studentName: '',
        age: '',
        student_class: '',
        student_grade: '',
        background: '',
        insurance: '',
        special_needs: '',
        // expiration: '',
        birth_certificate: '',
        // student_contact: '',

    });

    // const [representative, setRepresentative] = useState({
    //     repFirstName: '',
    //     repLastName: '',
    //     phone: '',
    //     email: '',
    //     relation: '',

    // });

    return (
        <>
            <div className="Intake-Form">               
                <Formik
                    initialValues={{ ...student }}
                    validate={values => {
                        const errors = {};
                        if (!values.name) {
                            errors.name = 'Required';
                        } else if (values.age > 17 || !values.age ) {
                            errors.age = 'Not Allowed';
                        }
                        //We need to handle the checkboxes state inside Boolean
                        //expression. If Y is true, then N cannot be also true,
                        //and if n is true, then y cannot be also true.

                        //essentially we only accept one value for each slice
                        //of state.
                        // else if (values.Y || values.y === true) {
                        //     errors.n = 'Disabled';
                        //     errors.N = false;
                        // }

                        return errors;
                    }}

                    onSubmit={(values, { isSubmitting, resetForm }) => {
                        console.log('students adding now', values);
                        props.addStudents(values,props);
                        resetForm();
                    }}
                >
                    {({ isSubmitting }) => (

                        <Form>
                            <div className='student-info'>
                                <Alert color="primary" className='student-info'>Student Information</Alert>
                                <div className='name-age-grade'>

                                    <label htmlFor="studentName">Name:</label>

                                    <Field type='name' name='studentName' placeholder='Required' />

                                    <label htmlFor="age">Age:</label>
                                    <Field type='text' name='age' placeholder='Student age' />
                                    <ErrorMessage name='age' component='div'/>

                                    <label htmlFor="grade">Grade:</label>
                                    <Field as='select' name='grade'>
                                        {
                                            // TODO: add loop to fill in options for more DRY code


                                        }
                                    

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

                            <div className='rep-info'>
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
                            </div>

                            <Button onChange={addStudents ? console.log(student) : console.log('error')} color='warning' type="submit" enabled={isSubmitting}>
                                Submit
                        </Button>

                        </Form>

                    )}

                </Formik>

            </div>

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

export default connect( mapStateToProps,{ addStudents })(IntakeForm);

