import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';

import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from './reducer';
//redux-form的reducer在总reducer中的key必须是form

const exportedApp=(<Provider store={createStore(reducer,applyMiddleware(thunk,logger))}>
<App />
</Provider>)
ReactDOM.render(
  exportedApp,
  document.getElementById('root')
);

