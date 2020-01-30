import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from "../src/components/form/SignUp";
import SignIn from "../src/components/form/SignIn";
import Home from "../src/components/students/Home";
import MainNavbar from "../src/components/students/Navbar/MainNavbar";
import ServerError from "../src/components/errors/ServerError";
import PageNotFound from "../src/components/errors/PageNotFound";
import NotAuthorized from "../src/components/errors/NotAuthorized";
import Loading from "../src/components/Loader/Loading";


function App() {
  return (
    <div className="App">
      <div className="main-header">
        <MainNavbar />  
      </div>
      <div className="main-container">
       <Router>
          <Switch>
            <Route exact path="/" component={SignIn} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/home-page" component={Home} />
            <Route path="/server-error-500" component={ServerError} />
            <Route path="/page-not-found-error-404" component={PageNotFound} />
            <Route path="/not-authorized-error-401" component={NotAuthorized} />
            <Route path="/page-loading" component={Loading} />
            <Route component={SignIn} />
          </Switch>
       </Router>        
      </div>
    </div>
  );
}

export default App;
