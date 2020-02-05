import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, Alert } from 'reactstrap';
import './intakestyles.scss'
import '../../assests/css/_schoolConfig.scss';
import moment from 'moment';



function IntakeForm(props) {
    console.log('props =>', props);
    const { name, age, student_grade, student_class, background, insurance, student_needs, expiration, birth_certificate, student_status } = props;
    const [student, setStudent] = useState({

        name: '',
        age: '',
        student_grade: '',
        student_class: '',
        background: '',
        insurance: '',
        special_needs: '',
        expiration: '',
        birth_certificate: '',
        student_status: '',

    });

    const [representative, setRepresentative] = useState({
        name: '',
        phone_number: '',
        email: '',
        relation: '',

    });
    const lastVisit = () => {
        moment().startOf('day').fromNow();
    }

    return (
        <React.Fragment>
            <Formik
                initialValues={{ student, representative }}
                onSubmit={(values, formikBag, lastVisit) => {setStudent(); formikBag.resetForm(); lastVisit.props.push(setStudent)}}
                validate={values => {
                    const errors = {};

                    //We need to handle the checkboxes state inside Boolean
                    //expression. If Y is true, then N cannot be also true,
                    //and if n is true, then y cannot be also true.

                    //essentially we only accept one value for each slice
                    //of state.
                    // else if (values.Y || values.y === true) {
                    //     errors.n = 'Disabled';
                    //     errors.N = false;
                    // }
                    if (!values.email) { errors.email = 'Email is Required' }
                    if (!values.name) { errors.name = 'Student Name is Required' }

                    return errors;
                }}

                render={(props) => {
                    const { isSubmitting } = props;
                    return (
                            <div className="Intake-Form">
                        
                            <Form className="intake">
                                <div className='student-info'>
                                    <Alert color="primary" className='student-info'>Student Information</Alert>
                                    <div className='name-age-grade'>

                                        <label htmlFor="name">Name:</label>

                                        <Field type='name' name='name' placeholder='Required' />

                                        <label htmlFor="age">Age:</label>
                                        <Field type='text' name='age' placeholder='Student age' />
                                        <ErrorMessage name='age' component='div' />

                                        <label htmlFor="student_class">Grade:</label>
                                        <Field as='select' name='student_class'>
                                            {
                                                // TODO: add loop to fill in options for more DRY code


                                            }


                                            <option value="1">1</option>
                                            <option>2</option>
                                            <option>4</option>
                                            <option>3</option>
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
                                        <Field type='textarea' name='background' placeholder='(Student Backstory)' />
                                    </div>
                                    <div className="student-bottom">
                                        <label htmlFor="insurance">Insurance </label>


                                        <label htmlFor="Y">:  Yes</label>
                                        <Field type='checkbox' name='Y' />


                                        <label htmlFor="N"> No</label>
                                        <Field type='checkbox' name='N' />
                                        {/*<ErrorMessage name='N' component='div'/>*/}


                                        <label htmlFor="date">Expiration Date:</label>
                                        <Field type='date' name='date' />
                                        <br>

                                        </br>

                                        <label htmlFor="birth_certificate">Birth Certificate</label>

                                        <label htmlFor="y">: Yes</label>
                                        <Field type='checkbox' name='y' />

                                        <label htmlFor="n">No</label>
                                        <Field type='checkbox' name='n' />
                                        {/*<ErrorMessage name='n' component='div'/>*/}
                                        <br>

                                        </br>


                                        <label htmlFor="special_needs">Special Needs:</label>
                                        <Field type='textarea' name='special_needs' placeholder="Allergies" />
                                    </div>


                                </div>
                                <br />

                                <div className='rep-info'>
                                    <Alert color="warning" className=''>Representative Information</Alert>


                                    <label htmlFor="repName">Name:</label>
                                    <Field type='name' name='repName' placeholder='Name' />


                                    <label htmlFor="phone_number">Phone:</label>
                                    <Field type='phone' name='phone_number' placeholder='optional' />

                                    <label htmlFor="email">Email:</label>
                                    <Field type='email' name='email' placeholder='Required' />
                                    <ErrorMessage name='email' component='div' />


                                    <label htmlFor="relation">Contact:</label>
                                    <Field type='textarea' name='relation' placeholder='Contact' />
                                </div>

                                <Button onChange={(touched) => { touched ? isSubmitting = true : console.log(ErrorMessage) }} color='warning' type="submit" disabled={isSubmitting}>
                                    Submit
                            </Button>
                            </Form>
                        </div>
                    )
                }}
            />    
        </React.Fragment>
    );

};

const mapStateToProps = (state) => {
    return {
        
    }
}
 export default IntakeForm;
    