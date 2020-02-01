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
   return(
    <React.Fragment>  
    <Formik       
       initialValues = {user}
       onSubmit = {handleSubmit}    
      render={(props) => {
        const {isSubmitting} = props;
        console.log(isSubmitting);
        return(
          <Form>
            <Field type="text" 
                    name="username"
                    placeholder="Enter your name"                
            />
            <Field type="text" 
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
