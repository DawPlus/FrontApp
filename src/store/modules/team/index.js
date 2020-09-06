import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, {createRequestActionTypes} from '../../lib/createRequestSaga';
import * as API from '../../lib/api/team';


const INITIALIZE = 'team/INITIALIZE';
const INITIALIZE_FORM = 'team/INITIALIZE_FORM';
const CHANGE_FIELD = 'team/CHANGE_FIELD';


const [LIST, LIST_SUCCESS, LIST_FAILURE]              = createRequestActionTypes('team/LIST');
const [NEW, NEW_SUCCESS, NEW_FAILURE]                 = createRequestActionTypes('team/NEW');
const [SELECT, SELECT_SUCCESS, SELECT_FAILURE]        = createRequestActionTypes('team/SELECT');
const [DELETE, DELETE_SUCCESS, DELETE_FAILURE]        = createRequestActionTypes('team/DELETE');



export const initialize   = createAction(INITIALIZE);
export const initializeForm   = createAction(INITIALIZE_FORM);
export const chageField   = createAction(CHANGE_FIELD);


export const listAction     = createAction(LIST);
export const selectAction   = createAction(SELECT, id=>id);
export const newAction      = createAction(NEW, data => data);
export const deleteAction   = createAction(DELETE, id => id);



export function* teamSaga() {
  yield takeLatest(LIST, createRequestSaga(LIST, API.listAPI));
  yield takeLatest(NEW, createRequestSaga(NEW, API.newAPI));
  yield takeLatest(DELETE, createRequestSaga(DELETE, API.deleteAPI));
  yield takeLatest(SELECT, createRequestSaga(SELECT, API.selectAPI));

}

const initialState = {
    list : [],
    result : null,
    message : null,
    status  : null
};

const team = handleActions(
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
   [LIST_SUCCESS]: (state, {payload : {message, data, result} }) =>({
  
      ...state,
      result : result, 
      message : message,
      list : data,
      status : "LIST_SUCCESS"
  
   }),
 
 
 
   // 목록조회 실패
   [LIST_FAILURE]: (state, {payload : data}) =>({
        ...state,
        message : data.message,
        status : "LIST_FAILURE"
    }),

    // 
    [NEW_SUCCESS]: (state, {payload : data}) =>({
      ...state,
      message : data.message,
      newApi : initialState.newApi,
      status : "NEW_SUCCESS"
    }),
    // 
    [NEW_FAILURE]: (state, {payload : data}) =>({
      ...state,
      message : data.message,
      status : "NEW_FAILURE"
    }),

    // 
    [DELETE_SUCCESS]: (state, {payload : data}) =>({
      ...state,
      delete : initialState.delete,
      message : data.message,
      status : "DELETE_SUCCESS"
    }),
    // 
    [DELETE_FAILURE]: (state, {payload : data}) =>({
      ...state,
      message : data.message,
      status : "DELETE_FAILURE"
    }),


  // 상세조회 성공
  [SELECT_SUCCESS]: (state, {payload : {message, data, result} }) =>({
    
    ...state,
    result : result, 
    message : message,
    viewApi : data,
    status : "SELECT_SUCCESS"

  }),
  // 상세조회 실패
  [SELECT_FAILURE]: (state, {payload : data}) =>({
      ...state,
      message : data.message,
      status : "SELECT_FAILURE"
  }),




  },
  initialState
);

export default team;
