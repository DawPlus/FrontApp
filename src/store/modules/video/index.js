import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, {createRequestActionTypes} from '../../lib/createRequestSaga';
import * as API from '../../lib/api/video';

const INITIALIZE = 'video/INITIALIZE';
const INITIALIZE_FORM = 'video/INITIALIZE_FORM';
const CHANGE_FIELD = 'video/CHANGE_FIELD';


const [LIST, LIST_SUCCESS, LIST_FAILURE]       = createRequestActionTypes('video/LIST');


export const initialize   = createAction(INITIALIZE);
export const initializeForm   = createAction(INITIALIZE_FORM);
export const chageField   = createAction(CHANGE_FIELD);
export const listAction   = createAction(LIST);



export function* videoSaga() {
  yield takeLatest(LIST, createRequestSaga(LIST, API.list));
}

const initialState = {
    fileList : [],
    message :null,
    result : null,
    status  : null
};

const video = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
    produce(state, draft => {
        draft[form][key] = value; // 예: state.register.username을 바꾼다
      })
    ,
    [INITIALIZE]: (state) => initialState,
  
   // 목록조회 성공
   [LIST_SUCCESS]: (state, {payload : {data, message, result}}) =>{
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
  },
  initialState
);

export default video;
