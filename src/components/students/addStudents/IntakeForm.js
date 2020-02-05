import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, Alert } from 'reactstrap';
import './intakestyles.scss'
import '../../assests/css/_schoolConfig.scss';



export default function IntakeForm(props) {
    const [student, setStudent] = useState({

        studentName: '',
        age: '',
        grade: '',
        story: '',
        insurance: '',
        needs: '',
        expiration: '',
        birthCertificate: '',

    });

    const [representative, setRepresentative] = useState({
        repFirstName: '',
        repLastName: '',
        phone: '',
        email: '',
        relation: '',

    });

    return (
        <>

            <div className="Intake-Form">
                {
                    window.addEventListener('load', ev => {
                        console.log(Date.now())
                    })
                }

                <Formik
                    initialValues={{ student, representative }}
                    validate={values => {
                        const errors = {};
                        if (!values.email) {
                            errors.email = 'Required';
                        } else if (!values.studentName) {
                            errors.studentName = 'Required';

                        } else if (values.age > 16 || !values.age ) {
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

                    onSubmit={(values, { isSubmitting }) => {
                        console.log(values)

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
                                        {

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

                            <Button onChange={(touched) => { touched ? isSubmitting = true : console.log(ErrorMessage) }} color='warning' type="submit" enabled={isSubmitting}>
                                Submit
                        </Button>

                        </Form>

                    )}

                </Formik>

            </div>

        </>
    )


}
