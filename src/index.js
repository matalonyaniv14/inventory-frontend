import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux'

import reducer from './Redux/reducer';
import './index.css';
import App from './App';


export const store = createStore( reducer );


ReactDOM.render(
  <Provider store={store}>
     <React.StrictMode>
         <App />
      </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

