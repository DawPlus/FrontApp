import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, {createRequestActionTypes} from '../../lib/createRequestSaga';
import * as API from '../../lib/api/map';



const INITIALIZE = 'map/INITIALIZE';
const INITIALIZE_FORM = 'map/INITIALIZE_FORM';
const CHANGE_FIELD = 'map/CHANGE_FIELD';


const [LIST, LIST_SUCCESS, LIST_FAILURE]       = createRequestActionTypes('map/LIST');
const [NEW, NEW_SUCCESS, NEW_FAILURE] = createRequestActionTypes('map/NEW');


export const initialize   = createAction(INITIALIZE);
export const initializeForm   = createAction(INITIALIZE_FORM);
export const chageField   = createAction(CHANGE_FIELD);
export const listAction   = createAction(LIST);
export const newAction   = createAction(NEW, file => file);



export function* mapSaga() {
  yield takeLatest(LIST, createRequestSaga(LIST, API.list));
  yield takeLatest(NEW, createRequestSaga(NEW, API.newMap));
}

const initialState = {
    fileList : [],
    newInfo:{
        fileInfo : null
    },
    delete : {
        apiId : ""
    },
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
   [LIST_SUCCESS]: (state, {payload : {data}}) =>{
        return {   
          ...state,
          fileList : data,
          status : "LIST_SUCCESS"
        }
    },
    // 목록조회 실패
   [LIST_FAILURE]: (state, {payload : data}) =>({
        ...state,
        status : "LIST_FAILURE"
    }),
     // 목록조회 성공
   [NEW_SUCCESS]: (state, {payload : data}) =>{
  
    return {   
      ...state,
        newInfo : initialState.newInfo,
        status : "NEW_SUCCESS"
    }
    },
    // 목록조회 실패
    [NEW_FAILURE]: (state, {payload : data}) =>({
        ...state,
        status : "NEW_FAILURE"
    }),


  },
  initialState
);

export default map;
