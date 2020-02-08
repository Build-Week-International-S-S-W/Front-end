import React, {useState} from 'react'
import {Formik, Form, Field} from 'formik';

function EditForm(props) {
    const defaultStudent={name:'', 
                         age:'', 
                         grade:'',
                         class:'', 
                         background:'', 
                         status:'', 
                         insurance:'', 
                         birth_certificate:'',
                         special_needs:''
    }
    const [editStudent,setEditStudent] = useState(defaultStudent);

    const handleSubmit = (values, formikBag) => {
        console.log(values)
        props.editUser(values,props)
        setEditStudent();
        console.log(formikBag)
        formikBag.resetForm();
    }

    const validate = (values) => {
        const errors = {};
        if(!values.name) {errors.name = 'Name Required'};
        if(!values.age) {errors.age = 'Age Required'};
        if(!values.grade) {errors.grade = 'Grade is required'};
        if(!values.class) {errors.class= 'Class is required'};
        if(!values.background) {errors.background = 'Background is required'};
        if(!values.status) {errors.status = 'Status is required'};
        if(!values.special_needs) {errors.special_needs = 'Needs are required'};
        return errors;
     }

    return (
        <div className="edit-form">
            <Formik
                initialValues={{editStudent}}
                onSubmit={handleSubmit}
                validate={validate}
                render={(props) => {

                const {isSubmitting} = props;
                console.log(isSubmitting)
                return (
                <>

                <Form>
                    <div className="edit-student-info">
                        Student Information
                        <label
                            htmlFor="name">Name:
                            <Field type="name" name="name" placeholder="Student Name">
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

                    <button type="submit" name = "edit">Edit</button>
                </Form>
            </>
            )
            }}
        />

        </div>
    );
};


export default EditForm;