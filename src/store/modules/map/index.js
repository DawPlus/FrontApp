import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, {createRequestActionTypes} from '../../lib/createRequestSaga';
import * as API from '../../lib/api/map';


import config from  "../../../config";

const INITIALIZE = 'map/INITIALIZE';
const INITIALIZE_FORM = 'map/INITIALIZE_FORM';
const CHANGE_FIELD = 'map/CHANGE_FIELD';


const [LIST, LIST_SUCCESS, LIST_FAILURE]       = createRequestActionTypes('map/LIST');
const [NEW, NEW_SUCCESS, NEW_FAILURE] = createRequestActionTypes('map/NEW');
const [DELETE, DELETE_SUCCESS, DELETE_FAILURE] = createRequestActionTypes('map/DELETE');

export const initialize   = createAction(INITIALIZE);
export const initializeForm   = createAction(INITIALIZE_FORM);
export const chageField   = createAction(CHANGE_FIELD);
export const listAction   = createAction(LIST);
export const newAction   = createAction(NEW, file => file);
export const deleteAction   = createAction(DELETE, file => file);



export function* mapSaga() {
  yield takeLatest(LIST, createRequestSaga(LIST, API.list));
  yield takeLatest(NEW, createRequestSaga(NEW, API.newMap));
  yield takeLatest(DELETE, createRequestSaga(DELETE, API.deleteAPI));
}

const initialState = {
    fileList : [],
    newInfo:{
        fileInfo : null
    },
    delete : {
        apiId : ""
    },
    message : "",
    result : null,
    status  : null
};

const map = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
    produce(state, draft => {
        draft[form][key] = value; // 예: state.register.username을 바꾼다
      })
    ,
    [INITIALIZE]: (state) => initialState,
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
    
    }),
   // 목록조회 성공
   [LIST_SUCCESS]: (state, {payload : {data, message, result}}) =>{
      
      data.map(it=> it.src = config.baseURL+it.url);
      data.map(it=> it.thumbnail = config.baseURL+it.url);
      data.map(it=> it.thumbnailWidth = config.thumbnailWidth);
      data.map(it=> it.thumbnailHeight = config.thumbnailHeight);
      data.map(it=> it.caption = it.original_name);
      
        return {   
          ...state,
          fileList : data,
          message : message,
          result : result,
          status : "LIST_SUCCESS"
        }
    },
    // 목록조회 실패
   [LIST_FAILURE]: (state, {payload : {message, result}}) =>({
        ...state,
        message : message,
        result : result, 
        status : "LIST_FAILURE"
    }),

     // 등록성공 성공
   [NEW_SUCCESS]: (state, {payload : {message, result}}) =>{
    return {   
      ...state,
        newInfo : initialState.newInfo,
        mesage :  message,
        result : result,
        status : "NEW_SUCCESS"
    }
    },
    // 등록 실패
    [NEW_FAILURE]: (state, {payload : {message, result}}) =>({
        ...state,
        message : message,
        result : result,
        status : "NEW_FAILURE"
    }),

     // 삭제 성공
   [DELETE_SUCCESS]: (state, {payload : {message, result}}) =>{
    return {   
      ...state,
        message :  message,
        result : result,
        status : "DELETE_SUCCESS"
    }
    },
    // 삭제 실패
    [DELETE_FAILURE]: (state, {payload : {message, result}}) =>({
        ...state,
        message : message,
        result : result,
        status : "DELETE_FAILURE"
    }),

  },
  initialState
);

export default map;
