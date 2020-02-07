import React, {useState} from 'react'
import {Formik, Form, Field} from 'formik';

function EditForm() {
    const [editStudent] = useState({

        studentName: '',
        age: '',
        grade: '',
        story: '',
        insurance: '',
        needs: '',
        expiration: '',
        birthCertificate: '',
    });

    return (
        <div className="edit-form">
            <Formik>
                initialValues={{editStudent}}

                <Form>
                    <div className="edit-student-info">
                        Student Information
                        <label
                            htmlFor="studentName">Name:
                            <Field type="name" name="studentName" placeholder="Student Name">
                            </Field>
                        </label>

                        <label htmlFor="grade">Grade:</label>
                            <Field as="select" name="grade" placeholder="Grade">
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
                    <div className="edit-back-story">
                        <label
                            htmlFor="story">Backstory:
                        </label>
                        <Field type="textarea" name="story" placeholder="Student Backstory"/>
                    </div>
                    <div>
                        <label htmlFor="Y">: Yes</label>
                        <Field type="checkbox" name="Y"/>

                        <label htmlFor="N">: No</label>
                        <Field type="checkbox" name="N"/>

                        <label htmlFor="expiration">Expiration Date:</label>
                        <Field type="date" name="expiration"/>
                        <br/>

                        <label htmlFor>Birth Certificate</label>

                        <label htmlFor="y">: Yes</label>
                        <Field type="checkbox" name="y"/>

                        <label htmlFor="n">: No</label>
                        <Field type="checkbox" name="n"/>

                        <label htmlFor="needs">Special Needs:</label>
                        <Field type="textarea" name="needs" placeholder="Allergies"/>
                    </div>
                    {/* <br/>

                    <div className="edit-rep-info">
                        Representative Information

                    <label htmlFor="repName">Name:</label>
                    <Field type="name" name="repName" placeholder="Name"/>

                    <label htmlFor="phone">Phone:</label>
                    <Field type="phone" name="phone" placeholder="optional"/>

                    <label htmlFor="email">Email:</label>
                    <Field type="email" name="email" placeholder="Required"/>
                    </div>

                    <label htmlFor="relation">Contact:</label>
                    <Field type="textarea" name="relation" placeholder="Contact"/> */}
                </Form>
            </Formik>

        </div>
    )
}


export default EditForm;