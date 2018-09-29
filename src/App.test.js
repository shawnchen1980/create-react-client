/* global it */

import React from 'react';
import ReactDOM from 'react-dom';
import "web-audio-test-api";
import 'raf/polyfill';
import App from './AppForTest.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
