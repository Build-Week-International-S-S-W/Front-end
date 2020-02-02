import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';

const store = createStore(reducer);

ReactDOM.render(
<Provider store={store}>  
  <Router><App /></Router>
</Provider>
, document.getElementById('root'));
