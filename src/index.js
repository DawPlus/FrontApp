import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import App from './App/index';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import config from './config';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { SnackbarProvider } from 'notistack';

import rootReducer, { rootSaga } from './store/modules';
import {checkTokken} from './store/modules/auth';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'animate.css';
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);



sagaMiddleware.run(rootSaga);
loadUser();


function loadUser() {
    try {
      const tokken = sessionStorage.getItem('tokken'); 
      // 로그인 상태가 아니라면 아무것도 안함
      if (!tokken) {return}; 
      console.log("새로고침");
      // 새로고침 할경우  체크해줌 
      store.dispatch(checkTokken(tokken));
   
    } catch (e) {
      console.log('sessionStorage is not working');
    }
  }
  

const app = (
    <Provider store={store}>
        <BrowserRouter basename={config.basename}>
            <SnackbarProvider maxSnack={3}>
              <App />
            </SnackbarProvider>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
