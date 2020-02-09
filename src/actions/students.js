import axios from 'axios';
import { SESSION_KEY_TOKEN } from '../constants/constant';
export const STUDENTS_GETTING_START = 'STUDENTS_GETTING_START';
export const STUDENTS_GETTING_SUCCESS = 'STUDENTS_GETTING_SUCCESS';
export const STUDENTS_GETTING_ERROR = 'STUDENTS_GETTING_ERROR';

export const STUDENTS_GETTING_ID_ERROR = 'STUDENTS_GETTING_ID_ERROR';
export const STUDENTS_GETTING_ID_START = 'STUDENTS_GETTING_ID_START';
export const STUDENTS_GETTING_ID_SUCCESS = 'STUDENTS_GETTING_ID_SUCCESS';


export const STUDENTS_ADDING_START = 'STUDENTS_ADDING_START';
export const STUDENTS_ADDING_SUCCESS = 'STUDENTS_ADDING_SUCCESS';
export const STUDENTS_ADDING_ERROR = 'STUDENTS_ADDING_ERROR';

export const STUDENTS_UPDATE_START = 'STUDENTS_UPDATE_START';
export const STUDENTS_UPDATE_SUCCESS = 'STUDENTS_UPDATE_SUCCESS';
export const STUDENTS_UPDATE_ERROR = 'STUDENTS_UPDATE_ERROR';

export const STUDENTS_DELETE_START = 'STUDENTS_DELETE_START';
export const STUDENTS_DELETE_SUCCESS = 'STUDENTS_DELETE_SUCCESS';
export const STUDENTS_DELETE_ERROR = 'STUDENTS_DELETE_ERROR';

const token = JSON.parse(sessionStorage.getItem(SESSION_KEY_TOKEN));
const headers = { authorization: token };

export function getStudents() {
    const token = JSON.parse(sessionStorage.getItem(SESSION_KEY_TOKEN));
    const headers = { authorization: token };
    // console.log('headers>>>>>>>>>>>>>>>>>', headers)
    return (dispatch) => {
        dispatch({type:STUDENTS_GETTING_START});
        axios.get('https://international-school-sw.herokuapp.com/api/students', { headers })
        .then( res => {
            // console.log(res);
            dispatch({type:STUDENTS_GETTING_SUCCESS, payload:res.data});
        })
        .catch(err => {
            dispatch({type:STUDENTS_GETTING_ERROR, payload:err});
        });
   }
}

export function getStudentById(id) {
    const token = JSON.parse(sessionStorage.getItem(SESSION_KEY_TOKEN));
    const headers = { authorization: token };
    // console.log('headers>>>>>>>>>>>>>>>>>', headers)
    return (dispatch) => {
        dispatch({type:STUDENTS_GETTING_ID_START});
        axios.get(`https://international-school-sw.herokuapp.com/api/students/${id}`, { headers })
        .then( res => {
            // console.log(res);
            dispatch({type:STUDENTS_GETTING_ID_SUCCESS, payload:res.data});
        })
        .catch(err => {
            dispatch({type:STUDENTS_GETTING_ID_ERROR, payload:err});
        });
   }
}

export function addStudents(values, props) {
    const token = JSON.parse(sessionStorage.getItem(SESSION_KEY_TOKEN));
    const headers = { authorization: token };
    console.log('adding students actions>>>>>>>>>>>>>', values);
    return (dispatch) => {
        dispatch({type:STUDENTS_ADDING_START})  
        axios.post('https://international-school-sw.herokuapp.com/api/students', values, { headers })
        .then( response =>{
            console.log('post request for students>>>>>>>', response)
            dispatch({type:STUDENTS_ADDING_SUCCESS, payload:response.data});
            props.history.push('/home-page');
           })
           .catch(err => {
            dispatch({type:STUDENTS_ADDING_ERROR, payload:err});
           })
    }
}

export function editStudents(values,props) {
    // console.log('edit students actions>>>>>>>>>>>>>',values);
    const token = JSON.parse(sessionStorage.getItem(SESSION_KEY_TOKEN));
    const headers = { authorization: token };
    return (dispatch) => {
      dispatch({type:STUDENTS_UPDATE_START})  
      axios.put(`https://international-school-sw.herokuapp.com/api/students/${props.match.params.id}`, values, { headers })
           .then( response =>{
            //    console.log('edit request for students>>>>>>>', response)
            //    dispatch({type:STUDENTS_UPDATE_SUCCESS, payload:response.data});
               props.history.push('/home-page');
           })
           .catch(err => {
            dispatch({type:STUDENTS_UPDATE_ERROR, payload:err});
           })
    }
}

export function deleteStudents(id, props) {
    // console.log('deleting students actions>>>>>>>>>>>>>', id);
    return (dispatch) => {
      dispatch({type:STUDENTS_DELETE_START})  
      axios.delete(`https://international-school-sw.herokuapp.com/api/students/${id}`, { headers })
           .then( response =>{
            //    console.log('post request for students>>>>>>>', response)
               dispatch({type:STUDENTS_DELETE_START, payload:response.data})
               props.history.push('/home-page');
           })
           .catch(err => {
            dispatch({type:STUDENTS_DELETE_ERROR, payload:err});
           })
    }
}