import axios from 'axios';
import { SESSION_KEY_TOKEN } from '../constants/constant';
export const STUDENTS_GETTING_START = 'STUDENTS_GETTING_START';
export const STUDENTS_GETTING_SUCCESS = 'STUDENTS_GETTING_SUCCESS';
export const STUDENTS_GETTING_ERROR = 'STUDENTS_GETTING_ERROR';

export const STUDENTS_ADDING_START = 'STUDENTS_ADDING_START';
export const STUDENTS_ADDING__SUCCESS = 'STUDENTS_ADDING_SUCCESS';
export const STUDENTS_ADDING__ERROR = 'STUDENTS_ADDING_ERROR';

export const STUDENTS_UPDATE_START = 'STUDENTS_UPDATE_START';
export const STUDENTS_UPDATE_SUCCESS = 'STUDENTS_UPDATE_SUCCESS';
export const STUDENTS_UPDATE_ERROR = 'STUDENTS_UPDATE_ERROR';

export const STUDENTS_DELETE_START = 'STUDENTS_DELETE_START';
export const STUDENTS_DELETE_SUCCESS = 'STUDENTS_DELETE_SUCCESS';
export const STUDENTS_DELETE_ERROR = 'STUDENTS_DELETE_ERROR';

const token = sessionStorage.getItem(SESSION_KEY_TOKEN);
const headers = { authorization: token };

export function getStudents() {
   return (dispatch) => {
      dispatch({type:STUDENTS_GETTING_START});
      axios.get('https://international-school-sw.herokuapp.com/api/students', { headers })
           .then( res => {
               console.log(res);
               dispatch({type:STUDENTS_GETTING_SUCCESS, payload:res.data});
           })
           .catch(err => {
               dispatch({type:STUDENTS_GETTING_ERROR, payload:err});
           });
   }
}