import {
        STUDENTS_GETTING_START, 
        STUDENTS_GETTING_SUCCESS, 
        STUDENTS_GETTING_ERROR,
        STUDENTS_GETTING_ID_START, 
        STUDENTS_GETTING_ID_SUCCESS, 
        STUDENTS_GETTING_ID_ERROR,
        STUDENTS_ADDING_START,
        STUDENTS_ADDING_SUCCESS,
        STUDENTS_ADDING_ERROR,
        STUDENTS_UPDATE_START,
        STUDENTS_UPDATE_SUCCESS,
        STUDENTS_UPDATE_ERROR,
        STUDENTS_DELETE_START,
        STUDENTS_DELETE_SUCCESS,
        STUDENTS_DELETE_ERROR } from '../actions/students';

const initialState = {
        isLoading:false,
        isLoaded:false,
        error:null,
        students:[
              {
                name:'',
                id:'',
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
  //  console.log('action in reducers>>>>>>>>>>>', action.payload)
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
          students:action.payload.reverse()
        }
      case STUDENTS_GETTING_ERROR:
        return {
          ...state,
          isLoading:false,
          error:action.payload
        }
        
      case STUDENTS_ADDING_START:
        return {
          ...state,
          isLoading:true
        }
      case STUDENTS_ADDING_SUCCESS:
        return {
          ...state,
          isLoading:false,
          students:[action.payload, ...state.students]
        }
      case STUDENTS_GETTING_ID_START:
        return {
          ...state,
          isLoading:true,
          isLoaded:false
        }
      case STUDENTS_GETTING_ID_SUCCESS:
        return {
          ...state,
          isLoading:false,
          isLoaded:true,
          students:action.payload
        }

        case STUDENTS_GETTING_ID_ERROR:
          return {
            ...state,
            isLoading:false,
            isLoaded:false,
            error:action.payload
          } 
      
      
        
      case STUDENTS_ADDING_ERROR:
        return {
          ...state,
          isLoading:false,
          error:action.payload
        }   
      
        case STUDENTS_UPDATE_START:
          return {
            ...state,
            isLoading:true
          }
        case STUDENTS_UPDATE_SUCCESS:
          return {
            ...state,
            isLoading:false,
            students: action.payload
          }
        case STUDENTS_UPDATE_ERROR:
          return {
            ...state,
            isLoading:false,
            error:action.payload
          } 
        case STUDENTS_DELETE_START:
          return {
            ...state,
            isLoading:true
          }
        case STUDENTS_DELETE_SUCCESS:
          return {
            ...state,
            isLoading:false,
            students:[...state.students, action.payload]
          }
        case STUDENTS_DELETE_ERROR:
          return {
            ...state,
            isLoading:false,
            error:action.payload
          }   
              

      default:
        return state;   
   }
}