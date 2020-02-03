import React, {useState, useEffect} from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import {Button} from 'reactstrap';
import axios from 'axios';
import './intakestyles.scss'
import '../../assests/css/_schoolConfig.scss';


export default function IntakeForm({students}) {
    const [student, setStudent] = useState({

                        studentLast: '',
                        age: '',
                        grade: '',
                        story: '',
                        insurance: '',
                        needs: '',
                        expiration: '',
                        birthCertificate: '',
    });

    const [representative, setRepresentative] = useState ({
        repFirstName: '',
        repLastName: '',
        phone: '',
        email: '',
        relation: '',

    });

    const [isSubmitting, setIsSubmitting] = useState(false)


    return (
        <>

        <div className="Intake-Form">
            {
                window.addEventListener('load', ev => {
                    console.log(Date.now())
                })
            }
            <h1>Student Intake Form</h1>
            <Formik
                initialValues={{
                    student: {
              
                        student
                    },
                    representative: {
             
                        representative
                    }


                }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    }
                    return errors;
                }}

                onSubmit={(values, {isSubmitting} ) => {
                    console.log(values)

                }}
            >
                {({isSubmitting}) => (

                    <Form>
                        <h1 className='bg-primary'>Student Information</h1>
                        <div className='student-info'>
                            <div className='name-age-grade'>

                            <label className='label-text' htmlFor="name">Name:</label>
                            <Field type='name' name='name' placeholder='(Student Name)'/>

                            <ErrorMessage name='name' component='span' />

                            <label htmlFor="age">Age:</label>
                            <Field type='number' name='age' placeholder='(Students Age)'/>

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


                            <label htmlFor="story">BackStory:</label>
                            <Field type='textarea' name='story' placeholder=''/>

                            <label htmlFor="insurance">Insurance:</label>

                            <Field type='checkbox' name='Y'/>Yes
                            <Field type='checkbox' name='N'/>No
                            <label>Yes</label>
                            <Field type='checkbox' name='Y'/>
                            <label>No</label>
                            <Field type='checkbox' name='N'/>

                            <label htmlFor="expiration">Expiration Date:</label>
                            <Field type='date' name='expiration'/>

                            <label htmlFor="birthCertificate">Birth Certificate:</label>

                            <Field type='checkbox' name='y'/>Yes
                            <Field type='checkbox' name='n'/>No

                            <label>Yes</label>
                            <Field type='checkbox' name='y'/>
                            <label>No</label>
                            <Field type='checkbox' name='n'/>


                            <label htmlFor="needs">Special Needs:</label>
                            <Field type='textarea' name='needs' placeholder="Enter special needs"/>


                        </div>

                        <h1 className='bg-primary'>Representative Information</h1>
                        <div className='rep-info'>


                            <label htmlFor="repFirstName">Name:</label>
                            <Field type='name' name='repName' placeholder='Rep Name'/>


                            <label htmlFor="phone">Phone:</label>
                            <Field type='phone' name='phone' placeholder='(optional)'/>

                            <label htmlFor="email">Email:</label>
                            <Field type='email' name='email' placeholder='Required'/>
                            <ErrorMessage name='email' component='div' />


                            <label htmlFor="relation">Relationship:</label>
                            <Field type='textarea' name='relation' placeholder='Worker'/>
                        </div>

                        <Button onChange={() => {setIsSubmitting = true}} color='primary' type="submit" enable={isSubmitting}>
                            Submit
                        </Button>

                    </Form>

                )}

            </Formik>

        </div>

    </>
    ) 
    
    
}
