import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, {createRequestActionTypes} from '../../lib/createRequestSaga';
import * as API from '../../lib/api/screenshot';


import config from  "../../../config";

const INITIALIZE = 'screenshot/INITIALIZE';
const INITIALIZE_FORM = 'screenshot/INITIALIZE_FORM';
const CHANGE_FIELD = 'screenshot/CHANGE_FIELD';


const [LIST, LIST_SUCCESS, LIST_FAILURE]              = createRequestActionTypes('screenshot/LIST');
const [DELETE, DELETE_SUCCESS, DELETE_FAILURE]        = createRequestActionTypes('screenshot/DELETE');



export const initialize   = createAction(INITIALIZE);
export const initializeForm   = createAction(INITIALIZE_FORM);
export const chageField   = createAction(CHANGE_FIELD);


export const listAction     = createAction(LIST, id=> id);
export const deleteAction   = createAction(DELETE, data => data);



export function* screenshotSaga() {
  yield takeLatest(LIST, createRequestSaga(LIST, API.listAPI));
  yield takeLatest(DELETE, createRequestSaga(DELETE, API.deleteAPI));

}

const initialState = {
    list : [],
  
    result : null,
    message : null,
    status  : null
};

const screenshot = handleActions(
  {
    [INITIALIZE]: (state) => initialState,
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
    
    }),
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, draft => {
        draft[form][key] = value; // 예: state.register.username을 바꾼다
      }),
  
   // 목록조회 성공
   [LIST_SUCCESS]: (state, {payload : {message, data, result} }) =>{
   

    data.map(it=> it.src = config.baseURL+it.url);
    data.map(it=> it.thumbnail = config.baseURL+it.url);
    data.map(it=> it.thumbnailWidth = config.thumbnailWidth);
    data.map(it=> it.thumbnailHeight = config.thumbnailHeight);
    data.map(it=> it.caption = it.original_name);
    


   return {
  
      ...state,
      result : result, 
      message : message,
      list : data,
      status : "LIST_SUCCESS"
  
   }},

   // 목록조회 실패
   [LIST_FAILURE]: (state, {payload : data}) =>({
        ...state,
        message : data.message,
        status : "LIST_FAILURE"
    }),

 

   
    [DELETE_SUCCESS]: (state, {payload :{ message, result} }) =>({
      ...state,
      message : message,
      result : result ,
      status : "DELETE_SUCCESS"
    }),
   
    [DELETE_FAILURE]: (state, {payload :{ message , result}}) =>({
      ...state,
      message : message,
      result : result, 
      status : "DELETE_FAILURE"
    }),






  },
  initialState
);

export default screenshot;
