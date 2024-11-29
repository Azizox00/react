import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './ex1/Slicetodos';
import App1 from './ex1/App1';
import { legacy_createStore } from 'redux';
import Reducer from './mon_projet/Reducer';
import reducer2 from './ex2/reducer';
import reducer3 from './ex3/reducer';
import reducer4 from './ex4/reducer';
import reducer5 from './ex5/reducer';
import reducer6 from './ex6/reducer';
import App22 from './mon_projet/App';
import App2 from './ex2/App2';
import App3 from './ex3/App3';
import App4 from './ex4/App4';
import App5 from './ex5/App5';
import App6 from './ex6/App6';
const store22=legacy_createStore(Reducer);
const store2 = legacy_createStore(reducer2);
const store3 = legacy_createStore(reducer3);
const store4 = legacy_createStore(reducer4);
const store5 = legacy_createStore(reducer5);
const store6 = legacy_createStore(reducer6);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Provider store={store22}>
            <App22/>
  </Provider>
{/* <Provider store={store}>
            <App1/>
  </Provider>
    <Provider store={store2}>
      <App2/>
    </Provider>
  <Provider store={store3}>
    <App3/>
    </Provider>
    <Provider store={store4}>
    <App4/>
    </Provider>
    <Provider store={store5}>
    <App5/>
    </Provider>
    <Provider store={store6}>
    <App6/>
    </Provider> */}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
