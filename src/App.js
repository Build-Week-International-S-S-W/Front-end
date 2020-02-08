import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from "../src/components/form/SignUp";
import SignIn from "../src/components/form/SignIn";
import Home from "../src/components/students/Home";
import MainNavbar from "./components/students/header/MainNavbar";
import ServerError from "../src/components/errors/ServerError";
import PageNotFound from "../src/components/errors/PageNotFound";
import NotAuthorized from "../src/components/errors/NotAuthorized";
import Loading from "../src/components/Loader/Loading";
import IntakeForm from "./components/students/addStudents/IntakeForm";
import { withRouter } from 'react-router-dom';
import Administration from "./components/administration/Administration";
import PrivateRoute from './components/privateRoute/PrivateRoute';
import { SESSION_KEY_TOKEN, SESSION_KEY_MESSAGE } from './constants/constant';
import EditForm from './components/administration/EditForm';


function App() {
  const token = sessionStorage.getItem(SESSION_KEY_TOKEN);
  const message = sessionStorage.getItem(SESSION_KEY_MESSAGE);
  return (
    <div className="App">
    <Router>
      <div className="main-header">
        <MainNavbar token={token} message={message} />
      </div>
      <div className="main-container">
          <Switch>
            <Route exact path="/" component={SignUp} />
            <Route exact path="/sign-in" component={SignIn} />
            <PrivateRoute path="/home-page" component={Home} />
            <PrivateRoute path="/page-not-found" component={PageNotFound} />
            <PrivateRoute path="/add-students" component={IntakeForm} />
            <PrivateRoute path = "/administration" component={Administration} />
            <PrivateRoute path = "/administration/:id" component={Administration} />
            <PrivateRoute path = "/sign-out" component = {SignIn} />
            <PrivateRoute path = "/edit-form/:id" component = {EditForm}/>
            <Route path="/page-loading" component={Loading} />
            <Route path="/server-error" component={ServerError} />
            <Route path="/not-authorized" component={NotAuthorized} />
            <Route component={SignIn} />
          </Switch>
      </div>
      </Router>
    </div>
  );
}

export default withRouter(App);
