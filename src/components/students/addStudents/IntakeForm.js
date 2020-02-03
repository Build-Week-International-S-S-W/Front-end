import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button } from 'reactstrap';

import './intakestyles.scss'
import '../../assests/css/_schoolConfig.scss';



export default function IntakeForm({ students }) {
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
                        }
                        return errors;
                    }}

                    onSubmit={(values, { isSubmitting }) => {
                        console.log(values)

                    }}
                >
                    {({ isSubmitting }) => (

                        <Form>
                            <div className='student-info'>
                                <h1 className='bg-secondary'>Student Information</h1>
                                <div className='name-age-grade'>

                                    <label htmlFor="studentName">Name:</label>
                                    <Field type='name' name='studentName' placeholder='(Student Name)' />


                                    <label htmlFor="age">Age:</label>
                                    <Field type='text' name='age' placeholder='(Students Age)' />

                                    <label htmlFor="grade">Grade:</label>
                                    <Field as='select' name='grade' placeholder='(Grade)'>
                                        {
                                            // TODO: add loop to fill in options for more DRY code

                                        }
                                        <option>1</option>
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
                                    <Field type='textarea' name='story' placeholder='' />
                                </div>
                                <div className="student-bottom">
                                    <label htmlFor="insurance">Insurance:</label>
                                    <br></br>

                                    <label htmlFor="Y">Yes</label>
                                    <Field type='checkbox' name='Y' />

                                    <label htmlFor="N">No</label>
                                    <Field type='checkbox' name='N' />


                                    <label htmlFor="expiration">Expiration Date:</label>
                                    <Field type='date' name='expiration' />
                                    <br></br>

                                    <label htmlFor="birthCertificate">Birth Certificate:</label>
                                    <br></br>
                                    <label htmlFor="y">Yes</label>
                                    <Field type='checkbox' name='y' />

                                    <label htmlFor="n">No</label>
                                    <Field type='checkbox' name='n' />


                                    <label htmlFor="needs">Special Needs:</label>
                                    <Field type='textarea' name='needs' placeholder="Alergies" />
                                </div>


                            </div>
                            <br></br>

                            <div className='rep-info'>
                                <h1 className='bg-secondary'>Representative Information</h1>


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

                            <Button onChange={() => { isSubmitting = true }} color='warning' type="submit" enabled={isSubmitting}>
                                Submit
                        </Button>

                        </Form>

                    )}

                </Formik>

            </div>

        </>
    )


}
