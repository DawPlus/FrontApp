import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, {createRequestActionTypes} from '../../lib/createRequestSaga';
import * as API from '../../lib/api/exceptions';



const INITIALIZE = 'exceptions/INITIALIZE';
const INITIALIZE_FORM = 'exceptions/INITIALIZE_FORM';
const CHANGE_FIELD = 'exceptions/CHANGE_FIELD';


const [LIST, LIST_SUCCESS, LIST_FAILURE]       = createRequestActionTypes('exceptions/LIST');
const [SELECT, SELECT_SUCCESS, SELECT_FAILURE]       = createRequestActionTypes('exceptions/SELECT');

const [DELETEALL, DELETEALL_SUCCESS, DELETEALL_FAILURE]       = createRequestActionTypes('exceptions/DELETEALL');


export const initialize   = createAction(INITIALIZE);
export const initializeForm   = createAction(INITIALIZE_FORM);
export const chageField   = createAction(CHANGE_FIELD);
export const listAction   = createAction(LIST);
export const selectAction   = createAction(SELECT);

//임시
export const deleteAllAction   = createAction(DELETEALL);


export function* exceptionsSaga() {
  yield takeLatest(LIST, createRequestSaga(LIST, API.list));
  yield takeLatest(SELECT, createRequestSaga(SELECT, API.select));
 
  yield takeLatest(DELETEALL, createRequestSaga(DELETEALL, API.deleteAll));
 

}

const initialState = {
    list : [],
    message : null,
    result : null, 
    delete : {
        apiId : ""
    },
    view : {
        exceptionId : "",
        title : "",
        exceptions : "",
        deviceId : "",
        saveDate : ""

    },
    status  : null
};

const exceptions = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, draft => {
        draft[form][key] = value; // 예: state.register.username을 바꾼다
      }),
    [INITIALIZE]: (state) => initialState,
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
    
    }),
   // 목록조회 성공
   [LIST_SUCCESS]: (state, {payload : {message, data, result}}) =>{
  
        return {   
          ...state,
            message : message,
            list    : data,
            result : result, 
            status : "LIST_SUCCESS"
        }
    },
    // 목록조회 실패
   [LIST_FAILURE]: (state, {payload : data}) =>({
        ...state,
        status : "LIST_FAILURE"
    }),


      // 상세 성공
   [SELECT_SUCCESS]: (state, {payload : {message, data, result}}) =>{
    console.log(data);
        return {   
          ...state,
            message : message,
            view    : data,
            result : result, 
            status : "SELECT_SUCCESS"
        }
    },
    // 상세 실패
   [SELECT_FAILURE]: (state, {payload : {message, result}}) =>({
        ...state,
        message : message,
        result : result,
        status : "SELECT_FAILURE"
    }),


    
      // 삭제 성공
   [DELETEALL_SUCCESS]: (state, {payload : {message, data, result}}) =>{
  
      return {   
        ...state,
          message : message,          
          result : result, 
          status : "DELETEALL_SUCCESS"
      }
    },
    // 삭제 실패
    [DELETEALL_FAILURE]: (state, {payload : {message, result}}) =>({
        ...state,
        message : message,
        result : result,
        status : "DELETEALL_FAILURE"
    }),

  },
  initialState
);

export default exceptions;
