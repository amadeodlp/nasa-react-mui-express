import React from 'react';
import ReactDOM from 'react-dom';
import './styling/index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './state/store';
import '@fontsource/roboto/300.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
