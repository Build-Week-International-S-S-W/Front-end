import React, { useState, useEffect} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { connect } from 'react-redux';
import { userRegister } from '../../actions/usersRegister';
import { Link } from 'react-router-dom';
import "./form.scss";
import * as Yup from 'yup';

function SignUp(props){
        console.log('accessing the all the props',props);
   const { username, name, email, phone_number, password} = props;
   const defaultUser = { username, name, email, phone_number, password };
   const [user, setUser]  = useState(defaultUser);
   const handleSubmit = (values,formikBag) => {       
       props.userRegister(values,props);      
       setUser();
       formikBag.resetForm();
   }
   const validate = (values) => {
      const errors = {};
      if(!values.username) {errors.username = 'Username Required'};
      if(!values.email) {errors.email = 'Email is required'};
      if(!values.phoneNumber) {errors.phoneNumber = 'Phone Number is required'};
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
        console.log(isSubmitting);
        return(
          <>
          <h1>Register Form</h1>  
          <p> Already Registered<Link to="/sign-in">login here.</Link></p>    
          <Form className="register">
            <Field type="text" 
                    name="username"
                    placeholder="Enter your name"                
            />
            <ErrorMessage name='username' component='div' className='error-message'/>
            <Field type="email" 
                    name="email"
                    placeholder="Enter your email"                
            />
            <ErrorMessage name='email' component='div' className='error-message'/>
            <Field type="text" 
                    name="phoneNumber"
                    placeholder="phone number"                
            />
            <ErrorMessage name='phoneNumber' component='div' className='error-message'/>
            <Field type="password" 
                    name="password"
                    placeholder="Password"                
            />
            <ErrorMessage name='password' component='div' className='error-message'/>
            { isSubmitting ? <button type="submit">Submitting...</button> :
                <input type="submit" />}
          </Form>
          </>
        )
      }}
     />
     
    </React.Fragment>
   );

};

const mapStateToProps = (state) => {        
        return {
           username: state.usersRegister.username,
           name:state.usersRegister.name,
           email:state.usersRegister.email,
           phone_number: state.usersRegister.phone_number,
           password: state.usersRegister.password
        }
}
export default connect(mapStateToProps, { userRegister })(SignUp);