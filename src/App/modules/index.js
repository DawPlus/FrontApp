import { combineReducers } from 'redux';
import reducers from "../../store/reducer";
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import question , {questionSaga} from "./question";
import init, {initSaga} from "./init";


const rootReducer = combineReducers({
    reducers,
    auth,
    question,
    init,
   
  
    
  });
  

export function* rootSaga() {
    yield all([
      authSaga(),
      questionSaga(),
      initSaga()
      
        
    ]);
  }
  
export default rootReducer;
  