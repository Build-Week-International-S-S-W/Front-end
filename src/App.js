import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from "../src/components/form/SignUp";
import SignIn from "../src/components/form/SignIn";
import Home from "../src/components/students/Home";
<<<<<<< HEAD
import MainNavbar from "./components/students/header/MainNavbar";
=======
import MainNavbar from "./components/students/Navbar/MainNavbar";
>>>>>>> dajuan-mcdonald
import ServerError from "../src/components/errors/ServerError";
import PageNotFound from "../src/components/errors/PageNotFound";
import NotAuthorized from "../src/components/errors/NotAuthorized";
import Loading from "../src/components/Loader/Loading";
import IntakeForm from "./components/students/addStudents/IntakeForm";


function App() {
  return (
    <div className="App">
    <Router>
      <div className="main-header">
        <MainNavbar />  
      </div>
      <div className="main-container">       
          <Switch>
            <Route exact path="/" component={SignIn} />
            <Route exact path="/sign-up" component={SignUp} />
            <Route path="/home-page" component={Home} />
            <Route path="/server-error" component={ServerError} />
            <Route path="/page-not-found" component={PageNotFound} />
            <Route path="/not-authorized" component={NotAuthorized} />
            <Route path="/page-loading" component={Loading} />
            <Route path="/add-students/" component={IntakeForm} />
            <Route component={SignIn} />
          </Switch>             
      </div>
      </Router>
    </div>
  );
}

export default App;
