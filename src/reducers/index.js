import { combineReducers } from 'redux';
import { usersRegister } from './usersRegister';
import { usersLogin } from './usersLogin';
import { students } from './students';

export const reducer = combineReducers({usersRegister,
                                          students, 
                                           usersLogin});