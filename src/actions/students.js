import axios from 'axios';
export const STUDENTS_GETTING_START = 'STUDENTS_GETTING_START';
export const STUDENTS_GETTING_SUCCESS = 'STUDENTS_GETTING_START';
export const STUDENTS_GETTING_ERROR = 'STUDENTS_GETTING_START';

export const STUDENTS_ADDING_START = 'STUDENTS_ADDING__START';
export const STUDENTS_ADDING__SUCCESS = 'STUDENTS_ADDING__START';
export const STUDENTS_ADDING__ERROR = 'STUDENTS_ADDING__START';

export const STUDENTS_UPDATE_START = 'STUDENTS_UPDATE_START';
export const STUDENTS_UPDATE_SUCCESS = 'STUDENTS_UPDATE_START';
export const STUDENTS_UPDATE_ERROR = 'STUDENTS_UPDATE_START';

export const STUDENTS_DELETE_START = 'STUDENTS_DELETE_START';
export const STUDENTS_DELETE_SUCCESS = 'STUDENTS_DELETE_START';
export const STUDENTS_DELETE_ERROR = 'STUDENTS_DELETE_START';

export function getStudents() {
   return (dispatch) => {
      dispatch({type:STUDENTS_GETTING_START});
      axios.get('https://international-school-sw.herokuapp.com/api/students')
           .then( res => {
               console.log(res);
           })
           .catch(err => {

           });
   }
}