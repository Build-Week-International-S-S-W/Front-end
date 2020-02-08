import React, {useState, useEffect} from 'react'
import {Formik, Form, Field} from 'formik';
import { connect } from 'react-redux';
import { getStudentById, editStudents } from '../../actions/students';
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

    useEffect(() => {
        props.getStudentById(props.match.params.id);        
    },[]);

    useEffect( () => {
        setEditStudent(props.studentsList)
    }, [props.studentsList]);

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
    console.log('edit form>>>>>>>>>>>>>', editStudent);
    console.log('students list>>>>>>>>>>>>', props.studentsList);
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
                        <label htmlFor="name">Name:
                            <Field type="text" name="name" placeholder={editStudent.name}>
                            </Field>
                        </label>
                        <label htmlFor="age">Age:
                            <Field type="text" name="age" placeholder={editStudent.age}>
                            </Field>
                        </label>
                        <label htmlFor="grade">Grade:                         
                            <Field type="text" name="grade" placeholder={editStudent.grade} />
                        </label>
                    </div>
                    <div className="edit-back-story">
                        <label htmlFor="story">Backstory:                        
                          <Field type="textarea" name="story" placeholder={editStudent.background}/>
                        </label> 
                        <label htmlFor="class">Class:                        
                          <Field type="text" name="class" placeholder={editStudent.class}/>
                        </label>
                        <label htmlFor="status">Status:                        
                          <Field type="text" name="status" placeholder={editStudent.status}/>
                        </label>
                    </div>
                    <div>
                    <label htmlFor="insurance">Insurance </label>
                        <Field type='text' name='insurance' placeholder={editStudent.insurance}/>
                        

                        <label htmlFor="birth_certificate">Birth Certificate </label>
                        <Field type='text' name='birth_certificate' placeholder={editStudent.birth_certificate}/>

                        <label htmlFor="special_needs">Special Needs:</label>
                        <Field type="textarea" name="special_needs" placeholder={editStudent.special_needs}/>
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

export default connect( mapStateToProps,{ getStudentById,editStudents })(EditForm);

