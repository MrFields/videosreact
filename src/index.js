import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store';


//const todoChangeHandler = (val) => 
  //store.dispatch(updateCurrent(val)) 



ReactDOM.render(
  <Provider store={store}>
  <App/>
  </Provider>,
document.getElementById('root'));

/*setTimeout(() => {
  store.dispatch({type: 'TODO_ADD', playload: {id:4, name: 'New Todo', isComplete: false}})
},1000)*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
