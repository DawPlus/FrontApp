import { combineReducers } from 'redux';

import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import question , {questionSaga} from "./question";
import init, {initSaga} from "./init";
import exceptions , {exceptionsSaga} from "./exceptions";
import map, {mapSaga} from "./map";
import guide ,{guideSaga} from "./guide";
import video, {videoSaga} from "./video"

const rootReducer = combineReducers({

    auth,
    question,
    init,
    exceptions,
    map,
    guide,
    video,
  });
  

export function* rootSaga() {
    yield all([
      authSaga(),
      questionSaga(),
      initSaga(),
      exceptionsSaga(),
      mapSaga(),
      guideSaga(),
      videoSaga()
    ]);
  }
  
export default rootReducer;
  