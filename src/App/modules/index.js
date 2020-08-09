import { combineReducers } from 'redux';
import reducers from "../../store/reducer";
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import question , {questionSaga} from "./question";
import init, {initSaga} from "./init";
import exceptions , {exceptionsSaga} from "./exceptions";
import map, {mapSaga} from "./map";
const rootReducer = combineReducers({
    reducers,
    auth,
    question,
    init,
    exceptions,
    map,
   
  
    
  });
  

export function* rootSaga() {
    yield all([
      authSaga(),
      questionSaga(),
      initSaga(),
      exceptionsSaga(),
      mapSaga()
      
        
    ]);
  }
  
export default rootReducer;
  