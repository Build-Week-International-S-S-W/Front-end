import { combineReducers } from 'redux';
import { usersRegister } from './usersRegister';
import { usersLogin } from './usersLogin';

export const reducer = combineReducers({usersRegister, 
                                           usersLogin});