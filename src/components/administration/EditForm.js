import React, {useState} from 'react'
import {Formik, Form, Field} from 'formik';
import { connect } from 'react-redux';
import { editStudents } from '../../actions/students';
import {Button} from 'reactstrap';

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
        console.log(props, values)
        props.editStudents(values,props)
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
    console.log('edit form>>>>>>>>>>', props);
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
                    <label htmlFor="insurance">Insurance </label>
                        <Field type='text' name='insurance' placeholder='yes or no'/>

                        <label htmlFor="expiration">Expiration Date:</label>
                        <Field type="date" name="expiration"/>
                        <br/>

                        <label htmlFor="birth_certificate">Birth Certificate </label>
                        <Field type='text' name='birth_certificate' placeholder='yes or no'/>

                        <label htmlFor="special_needs">Special Needs:</label>
                        <Field type="textarea" name="special_needs" placeholder="Allergies"/>
                    </div>

                    <Button color='warning' type="submit" enabled={props.isSubmitting}>
                        {props.isSubmitting ? 'Adding..' : 'Add'}</Button>
                </Form>
            </>
            )
            }}
        />

        </div>
    );
};

const mapStateToProps = (state) => {
    console.log(state.students)
    return{
        error:state.students.error,
        isLoading:state.students.isLoading,
        studentsList:state.students.students
    }
}

export default connect( mapStateToProps,{ editStudents })(EditForm);

