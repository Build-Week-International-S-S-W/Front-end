import React from 'react';
import {Formik, Form, Field, ErrorMessage} from "formik";
import {Button } from "reactstrap";


export default function IntakeForm() {
    return (
        <div className="Intake-Form">
            <h1>Student Information</h1>
            <Formik
                initialValues={{
                    student: {
                        studentFirst: '',
                        studentLast: '',
                        age: '',
                        grade: '',
                        story: '',
                        insurance: '',
                        needs: '',
                        expiration: '',
                        birthCertificate: '',
                    },
                    representative: {
                        repFirstName: '',
                        repLastName: '',
                        phone: '',
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
                        errors.email = 'Invalid email address';
                    } else if (
                        !values.studentFirst || !values.studentLast
                    ) {
                        errors.studentFirst = 'Required';
                        errors.studentLast = 'Required';
                    }
                    return errors;
                }}
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        alert(JSON.stringify('Received', null, 2));
                        setSubmitting(false)
                    }, 1400)

                }}
            >
                {({isSubmitting}) => (
                    <Form>
                        <label htmlFor="studentFirst">First Name</label>
                        <Field type='name' name='studentFirst' placeholder='Student First Name'/>


                        <label htmlFor="studentLast">Last Name</label>
                        <Field type='name' name='studentLast' placeholder='Student Last Name'/>


                        <label htmlFor="age">Age</label>
                        <Field type='number' name='age'/>
                        <br/>

                        <label htmlFor="grade">Grade</label>
                        <Field type='number' name='grade'/>

                        <label htmlFor="story">BackStory</label>
                        <Field type='textarea' name='story'/>
                        <br/>


                        <label htmlFor="insurance">Insurance?</label>
                        <Field type='checkbox' name='insurance'/>

                        <br/>


                        <label htmlFor="birthCertificate">Birth Certificate?</label>
                        <Field type='checkbox' name='birthCertificate'/>
                        <br/>

                        <label htmlFor="needs">Special Needs?</label>
                        <Field type='textarea' name='needs'/>
                        <br/>

                        <label htmlFor="expiration">Expiration Date</label>
                        <Field type='date' name='expiration'/>
                        <br/>
                        <br/>
                        <br/>
                        <h1>Representative Information</h1>

                        <label htmlFor="repFirstName">First Name</label>
                        <Field type='name' name='repFirstName' placeholder='Representative Name'/>

                        <label htmlFor="repLastName">Last Name</label>
                        <Field type='name' name='repLastName' placeholder='Representative Name'/>
                        <br/>
                        <br/>

                        <label htmlFor="phone">Phone</label>
                        <Field type='phone' name='phone' placeholder='Phone'/>

                        <label htmlFor="email">Email</label>
                        <Field type='email' name='email' placeholder='Email'/>
                        <br/>
                        <br/>

                        <label htmlFor="relation">Relationship</label>
                        <Field type='textarea' name='relation' placeholder='Worker'/>

                    </Form>
                )}

            </Formik>

            <Button>
                Submit
            </Button>
        </div>

    )
}
