import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, {createRequestActionTypes} from '../lib/createRequestSaga';
import * as API from '../lib/api/board';


const INITIALIZE = 'board/INITIALIZE';
const INITIALIZE_FORM = 'board/INITIALIZE_FORM';
const CHANGE_FIELD = 'board/CHANGE_FIELD';
const [LIST, LIST_SUCCESS, LIST_FAILURE]       = createRequestActionTypes('board/LIST');


export const list   = createAction(LIST);




export const initialize   = createAction(INITIALIZE);
export const initializeForm   = createAction(INITIALIZE_FORM);
export const chageField   = createAction(CHANGE_FIELD);




export function* boardSaga() {
  yield takeLatest(LIST, createRequestSaga(LIST, API.list));


}

const initialState = {
    list : [],
    status  : null
};

const board = handleActions(
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
   [LIST_SUCCESS]: (state, {payload : data}) =>({
        ...state,
        list : data.list,
        status : "LIST_SUCCESS"
    }),
  
    // 목록조회 실패
   [LIST_FAILURE]: (state, {payload : data}) =>({
        ...state,
        status : "LIST_FAILURE"
    })
  },
  initialState
);

export default board;
