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
import Administration from "./components/administration/Administration";


function App() {
  return (
    <div className="App">    
    <Router>
      <div className="main-header">
        <MainNavbar />
      </div>
      <div className="main-container">
          <Switch>
            <Route exact path="/" component={SignUp} />
            <Route exact path="/sign-in" component={SignIn} />
            <Route path="/home-page" component={Home} />
            <Route path="/server-error" component={ServerError} />
            <Route path="/page-not-found" component={PageNotFound} />
            <Route path="/not-authorized" component={NotAuthorized} />
            <Route path="/page-loading" component={Loading} />
            <Route path="/add-students" component={IntakeForm} />            
            <Route path = "/administration" component={Administration} />
            <Route path = "/sign-out" component = {SignIn} />
            <Route component={SignIn} /> 
          </Switch>
      </div>
      </Router>
    </div>
  );
}

export default App;
