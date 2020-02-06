import axios from 'axios';
import { SESSION_KEY_TOKEN, SESSION_KEY_MESSAGE } from '../constants/constant';
export const SIGN_IN_START = "SIGN_IN_START";
export const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS";
export const SIGN_IN_ERROR = "SIGN_IN_ERROR";

export function usersLogin(values,props) {
   console.log('action values', values);
   console.log('action props', props);
   
   return (dispatch) => {
      dispatch({type:SIGN_IN_START});
      axios.post('https://international-school-sw.herokuapp.com/api/users/login', values)
           .then(response => {
              console.log(response);              
              // dispatch({SIGN_IN_SUCCESS, payload:response.data})
              if(response) {
                sessionStorage.setItem(SESSION_KEY_TOKEN, JSON.stringify(response.data.token));
                sessionStorage.setItem(SESSION_KEY_MESSAGE, JSON.stringify(response.data.message));
              }
              props.history.push('/page-loading');
              setTimeout( () => {
                props.history.push('/home-page');
              },1000)
           })
           .catch( error => {
              console.log(error);
              if(error.response) {                
                if(error.response.status === 500) {
                  props.history.push('/server-error');
                }
                if(error.response.status === 401) {
                  props.history.push('/not-authorized');
                }
              }
              dispatch({type:SIGN_IN_ERROR,payload:error});
              
           });
   }
}