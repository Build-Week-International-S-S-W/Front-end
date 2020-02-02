import React, { useState, useEffect} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import "./form.scss";
import * as Yup from 'yup';

export default function SignUp(){
   const defaultUser = {username:'', email:'', phoneNumber:'', password:'' };
   const [user, setUser] = useState(defaultUser);
   const handleSubmit = (values,formikBag) => {
       console.log(values);
       console.log(formikBag);
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
