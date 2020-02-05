import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {SESSION_KEY_TOKEN } from '../../constants/constatnt';

export default function PrivateRoute({component:Component, ...rest}) {
   const token = sessionStorage.getItem(SESSION_KEY_TOKEN);
   return <Route {...rest} render={(props) => {
          if(token) {
             return <Component {...props} />
          } else {
             return <Redirect to="/login" />
          }
   }}/>
}