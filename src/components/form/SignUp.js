import React, { useState, useEffect} from 'react';
import { Formik, Form, Field } from 'formik';
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
      if(!values.phoneNumber) {error.phoneNumber = 'Phone Number is required'};
      if(!values.password) {error.password = 'Password is required'};
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
          <Form>
            <Field type="text" 
                    name="username"
                    placeholder="Enter your name"                
            />
            <Field type="email" 
                    name="email"
                    placeholder="Enter your email"                
            />
            <Field type="text" 
                    name="phoneNumber"
                    placeholder="phone number"                
            />
            <Field type="password" 
                    name="password"
                    placeholder="Password"                
            />
            { isSubmitting ? <button type="submit">Submitting...</button> :
                <input type="submit" />}
          </Form>
        )
      }}
     />
    </React.Fragment>
   );

};
