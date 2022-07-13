import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'

import { AuthProviderWrapper } from './context/auth.context';

import App from './App';


ReactDOM.render(

  <Router>
    <AuthProviderWrapper>


      <App />


    </AuthProviderWrapper>
  </Router>,

  document.getElementById('root')
);
