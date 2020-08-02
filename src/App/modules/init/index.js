import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, {createRequestActionTypes} from '../../lib/createRequestSaga';
import * as API from '../../lib/api/init';


const INITIALIZE = 'init/INITIALIZE';
const INITIALIZE_FORM = 'init/INITIALIZE_FORM';
const CHANGE_FIELD = 'init/CHANGE_FIELD';


const [LIST, LIST_SUCCESS, LIST_FAILURE]       = createRequestActionTypes('init/LIST');
const [NEW, NEW_SUCCESS, NEW_FAILURE]       = createRequestActionTypes('init/NEW');
const [DELETE, DELETE_SUCCESS, DELETE_FAILURE]       = createRequestActionTypes('init/DELETE');


export const listAction   = createAction(LIST);




export const initialize   = createAction(INITIALIZE);
export const initializeForm   = createAction(INITIALIZE_FORM);
export const chageField   = createAction(CHANGE_FIELD);

export const newAction  = createAction(NEW, data => data);
export const deleteAction  = createAction(DELETE, data => data);



export function* initSaga() {
  yield takeLatest(LIST, createRequestSaga(LIST, API.list));
  yield takeLatest(NEW, createRequestSaga(NEW, API.newAPI));
  yield takeLatest(DELETE, createRequestSaga(DELETE, API.deleteAPI));


}

const initialState = {
    list : [],
    new : {
        name :"",
        url : "",
        description: ""
        
    },
    delete : {
        apiId : ""
    },


    status  : null
};

const init = handleActions(
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
    }),

  },
  initialState
);

export default init;
