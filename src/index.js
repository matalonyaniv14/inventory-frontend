import 'intersection-observer'
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux'

import { qoute, contact } from './Redux/reducers';
import './index.css';
import App from './App';



const rootReducer = combineReducers({
  "qoute": qoute,
  "contact": contact
});

export const store = createStore( rootReducer );


ReactDOM.render(
  <Provider store={store}>
     <React.StrictMode>
         <App />
      </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

