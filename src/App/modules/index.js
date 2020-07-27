import { combineReducers } from 'redux';
import reducers from "../../store/reducer";
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import question , {questionSaga} from "./question";



const rootReducer = combineReducers({
    reducers,
    auth,
    question
  
   
  
    
  });
  

export function* rootSaga() {
    yield all([
      authSaga(),
      questionSaga()
      
        
    ]);
  }
  
export default rootReducer;
  