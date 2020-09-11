import { combineReducers } from 'redux';

import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import question , {questionSaga} from "./question";
import init, {initSaga} from "./init";
import exceptions , {exceptionsSaga} from "./exceptions";
import map, {mapSaga} from "./map";
import guide ,{guideSaga} from "./guide";
import video, {videoSaga} from "./video"
import team , {teamSaga} from "./team";
import screenshot, {screenshotSaga} from "./screenshot";
import loading from "./loading";


const rootReducer = combineReducers({
    auth,
    loading,
    question,
    init,
    exceptions,
    map,
    guide,
    video,
    team ,
    screenshot
  });
  

export function* rootSaga() {
    yield all([
      authSaga(),
      questionSaga(),
      initSaga(),
      exceptionsSaga(),
      mapSaga(),
      guideSaga(),
      videoSaga(),
      teamSaga(),
      screenshotSaga()
    ]);
  }
  
export default rootReducer;
  