import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import { usersRegister as reducer } from './reducers/usersRegister'
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const middleware = applyMiddleware(thunk,logger);
const store = createStore(reducer, middleware);

ReactDOM.render(
<Provider store={store}>  
  <Router><App /></Router>
</Provider>
, document.getElementById('root'));
