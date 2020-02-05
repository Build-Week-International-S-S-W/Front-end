import {
        STUDENTS_GETTING_START, 
        STUDENTS_GETTING_SUCCESS, 
        STUDENTS_GETTING_ERROR,
        STUDENTS_ADDING_START,
        STUDENTS_ADDING__SUCCESS,
        STUDENTS_ADDING__ERROR,
        STUDENTS_UPDATE_START,
        STUDENTS_UPDATE_SUCCESS,
        STUDENTS_UPDATE_ERROR,
        STUDENTS_DELETE_START,
        STUDENTS_DELETE_SUCCESS,
        STUDENTS_DELETE_ERROR } from '../actions/students';

const initialState = {
        isLoading:false,
        error:null,
        students:[
              {
                name:'',
                student_grade:'',
                student_class:'',
                background:'',
                student_status:'',
                age:'',
                special_needs:'',
                insurance:false,
                birth_certificate:false
              }
            ]
};

export function students(state=initialState, action) {
   console.log('action in reducers>>>>>>>>>>>', action.payload)
   switch(action.type) {
      case STUDENTS_GETTING_START:
        return {
          ...state,
          isLoading:true
        }
      case STUDENTS_GETTING_SUCCESS:
        return {
          ...state,
          isLoading:false,
          students:action.payload
        }
      case STUDENTS_GETTING_ERROR:
        return {
          ...state,
          isLoading:false,
          error:action.payload
        } 
      default:
        return state;   
   }
}