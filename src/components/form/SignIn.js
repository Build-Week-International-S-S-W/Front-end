import React, { useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { usersLogin } from '../../actions/usersLogin';
import { connect } from 'react-redux';
import {Alert, Button} from 'reactstrap';
import "./form.scss";

function SignIn(props){
   const {username, password } = props;
   // const defaultUser = {username:'', password:'' };
   const defaultUser = {username,password};
   const [user, setUser] = useState(defaultUser);
   
   const handleSubmit = (values,formikBag) => {
      //  console.log(values);
       props.usersLogin(values,props);
       setUser();
      //  console.log(formikBag);
       formikBag.resetForm();
   }
   const validate = (values) => {
      const errors = {};
      if(!values.username) {errors.username = 'Username Required'};
      if(!values.password) {errors.password = 'Password is required'};
      return errors;
   }

   return(
    <React.Fragment>
    <Formik
       initialValues = {user}
       onSubmit = {handleSubmit}
       validate = { validate }
      render={(props) => {
        const {isSubmitting} = props;
      //   console.log(isSubmitting);
        return(
          <>
          <Alert color="danger">You must be a registered user to access this site.<br/><br/>
             Please login with your credentials.</Alert>
          <Form className="register">
            <Field type="text"
                    name="username"
                    placeholder="Enter your username"
            />
            <ErrorMessage name='username' component='div' className='error-message'/>
            <Field type="password"
                    name="password"
                    placeholder="Password"
            />
            <ErrorMessage name='password' component='div' className='error-message'/>
            { isSubmitting === true ? <Button color="success" type="submit">Submitting...</Button> :
                <Button color="warning" type="submit">Login</Button>}
          </Form>
          </>
        )
      }}
     />
    </React.Fragment>
   );

};

function mapStateToProps(state) {
    return {
       name:state.usersLogin.name,
       password:state.usersLogin.password
    }
}
export default connect(mapStateToProps, {usersLogin})(SignIn);
