import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/app/app';
import {Provider} from 'react-redux';
import {store} from './component/redux/index';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

