import axios from 'axios';
export const SIGN_IN_START = "SIGN_IN_START";
export const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS";
export const SIGN_IN_ERROR = "SIGN_IN_ERROR";

export function userRegister(values,props) {
   console.log('action values', values);
   console.log('action props', props);
   
   return (dispatch) => {
      dispatch({type:SIGN_IN_START});
      axios.post('https://international-school-sw.herokuapp.com/api/users/login', values)
           .then(response => {
              console.log(response);              
              // dispatch({SIGN_IN_SUCCESS, payload:response.data})
              props.history.push('/page-loading');
              setTimeout( () => {
                props.history.push('/sign-in');
              },1000)
           })
           .catch( error => {
              console.log(error);
              if(error.response) {                
                if(error.response.status === 500) {
                  props.history.push('/server-error');
                }
              }
              dispatch({type:SIGN_IN_ERROR,payload:error});
              
           });
   }
}