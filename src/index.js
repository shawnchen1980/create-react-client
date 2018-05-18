import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';

import thunk from 'redux-thunk';
import logger from 'redux-logger';
import AuthForm from './component/authForm';
import reducer from './reducer';
//redux-form的reducer在总reducer中的key必须是form


ReactDOM.render(
   <Provider store={createStore(reducer,applyMiddleware(thunk,logger))}>
  <App />
  </Provider>,
  document.getElementById('root')
);
