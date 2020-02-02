import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import {Button} from 'reactstrap';
import './intakestyles.scss'
import '../../assests/css/_schoolConfig.scss';
// import AboutStudent from '../aboutStudents/BioPage';



export default function IntakeForm() {
    return (
        <>

        <div className="Intake-Form">
            <Formik
                initialValues={{
                    student: {
                        studentFirst: '',
                        studentLast: '',
                        age: Number,
                        grade: Selection,
                        story: '',
                        insurance: Boolean,
                        needs: '',
                        expiration: Date,
                        birthCertificate: Boolean,
                    },
                    representative: {
                        repFirstName: '',
                        repLastName: '',
                        phone: Number,
                        email: '',
                        relation: '',
                    }


                }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        // errors.email = 'Invalid email address';
                    } else if (
                        !values.name
                    )  {
                        errors.name = 'Required';
                        errors.name = 'Name cannot be empty';
                    }
                    return errors;
                }}
                onSubmit={(values, {setSubmitting}) => {
                    // setTimeout(() => {
                    //     alert(JSON.stringify('Submitted',  null, 2));
                    //     setSubmitting(false)
                    // }, 400)
                    console.log(values);

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
                            <Field type='textarea' name='story' placeholder='(Students Backstory)'/>

                            <label htmlFor="insurance">Insurance:</label>
                            <label>Yes</label>
                            <Field type='checkbox' name='Y'/>
                            <label>No</label>
                            <Field type='checkbox' name='N'/>

                            <label htmlFor="expiration">Expiration Date:</label>
                            <Field type='date' name='expiration'/>

                            <label htmlFor="birthCertificate">Birth Certificate:</label>
                            <label>Yes</label>
                            <Field type='checkbox' name='y'/>
                            <label>No</label>
                            <Field type='checkbox' name='n'/>


                            <label htmlFor="needs">Special Needs:</label>
                            <Field type='textarea' name='needs'/>


                        </div>

                        <h1 className='bg-primary'>Representative Information</h1>
                        <div className='rep-info'>


                            <label htmlFor="repFirstName">Name:</label>
                            <Field type='name' name='repName' placeholder=''/>


                            <label htmlFor="phone">Phone:</label>
                            <Field type='phone' name='phone' placeholder='(optional)'/>

                            <label htmlFor="email">Email:</label>
                            <Field type='email' name='email' placeholder='Required'/>
                            <ErrorMessage name='email' component='div' />


                            <label htmlFor="relation">Relationship:</label>
                            <Field type='textarea' name='relation' placeholder='Worker'/>
                        </div>


                        <Button onClick={() => {isSubmitting = true}} color='primary' type="submit" enable={isSubmitting}>
                            Submit
                        </Button>
                    </Form>

                )}

            </Formik>
            
        

        </div>

    </>
    )
}
