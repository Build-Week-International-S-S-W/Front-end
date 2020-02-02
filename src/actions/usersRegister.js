import axios from 'axios';
export const SIGN_UP_START = "SIGN_UP_START";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_ERROR = "SIGN_UP_ERROR";

export function userRegister(values,props) {
   console.log('action values', values)
   console.log('action props', props);
   return (dispatch) => {
      dispatch({type:SIGN_UP_START});
      axios.post('https://international-school-sw.herokuapp.com/api/users/register', values)
           .then(response => {
              console.log(response)
              props.history.push('/sign-in');
           })
           .catch( error => {
              console.log(error);
              console.log('error type', error.response.status);
              if(error.response.status === 500) {
                props.history.push('/server-error');
              }
           });
   }
}