import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {SESSION_KEY_TOKEN } from '../../'

export default function PrivateRoute({component:Component, {...rest}}) {
   return <Route {...rest} render={(props) => {
          if()
   }}/>
}