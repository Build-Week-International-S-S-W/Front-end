import axios from 'axios';
const SIGN_UP_START = "SIGN_UP_START";
const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
const SIGN_UP_ERROR = "SIGN_UP_ERROR";

export function userRegister(values) {
   return (dispatch) => {
      dispatch({type:SIGN_UP_START});
      axios.post()
           .then(response => {
              console.log(response)
           })
           .catch( err => {

           });
   }
}