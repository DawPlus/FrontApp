import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, {createRequestActionTypes} from '../../lib/createRequestSaga';
// import * as API from '../lib/api/question';
import * as Util from "../../Util/array";

import{list as mapList} from "../../lib/api/map"
import{list as guideList} from "../../lib/api/guide"


const INITIALIZE        = 'question/INITIALIZE';
const INITIALIZE_FORM   = 'question/INITIALIZE_FORM';
const INITIALIZE_RADIO  = 'question/INITIALIZE_RADIO';
const CHANGE_FIELD      = 'question/CHANGE_FIELD';
const CHANGE_FIELD_FORM = 'question/CHANGE_FIELD_FORM';
const CHANGE_FIELD_LIST = 'question/CHANGE_FIELD_LIST';

//const [LIST, LIST_SUCCESS, LIST_FAILURE]   = createRequestActionTypes('question/LIST');

// 상세보기
//const [VIEW, VIEW_SUCCES, VIEW_FAILURE]  = createRequestActionTypes('question/VIEW');  
//const VIEW = 'question/VIEW';

const [MAP_LIST, MAP_LIST_SUCCESS, MAP_LIST_FAILURE]   = createRequestActionTypes('question/MAP_LIST');

const [GUIDE_LIST, GUIDE_LIST_SUCCESS, GUIDE_LIST_FAILURE]   = createRequestActionTypes('question/GUIDE_LIST');


//export const list             = createAction(LIST);
export const initialize       = createAction(INITIALIZE);
export const initializeForm   = createAction(INITIALIZE_FORM);
export const changeField      = createAction(CHANGE_FIELD);
export const changeFieldForm  = createAction(CHANGE_FIELD_FORM);
export const changeFieldList  = createAction(CHANGE_FIELD_LIST);
export const initializeRadio  = createAction(INITIALIZE_RADIO);

export const mapListAction  = createAction(MAP_LIST);
export const guideListAction  = createAction(GUIDE_LIST);

export function* questionSaga() {
  //yield takeLatest(LIST,        createRequestSaga(LIST, API.list));
  yield takeLatest(MAP_LIST,  createRequestSaga(MAP_LIST, mapList));
  yield takeLatest(GUIDE_LIST,  createRequestSaga(GUIDE_LIST, guideList));
  


}

const initialState = {
    title : "",
    content :"",
    type : true,
    map : null,
    guide : null,
    video: null,
    examples : [
        {content : "" , isAnswer : false},
        {content : "" , isAnswer : false},
        {content : "" , isAnswer : false},
        {content : "" , isAnswer : false},
        {content : "" , isAnswer : false},
    ],
    singleExample : "",



    new : {
        title : "",
        content : "",
        type : null ,
        map : null,
        guide : null,
        video : null ,
        examples : [
          {content : "" , isAnswer : false},
          {content : "" , isAnswer : false},
          {content : "" , isAnswer : false},
          {content : "" , isAnswer : false},
          {content : "" , isAnswer : false},
      ],
      singleExample : ""
    },


    mapList :[],
    guideList :[],
    result : null,
    message : null,
    status : null
};

const question = handleActions(
  {
    [CHANGE_FIELD_FORM]: (state, { payload: { form, key, value } }) =>
      produce(state, draft => {
        draft[form][key] = value; // 예: state.register.username을 바꾼다
      }),
    [CHANGE_FIELD]: (state, { payload: { key, value } }) =>
      produce(state, draft => {
        draft[key] = value; 
    }),
    [CHANGE_FIELD_LIST]: (state,  {payload: value} ) =>{
   
      return ({
        ...state, 
        examples : Util.update(state.examples, value)
      })
    },
    [INITIALIZE_RADIO]: (state) =>{
      
      return ({
        ...state, 
        examples : state.examples.map(item => {return {...item,  isTrue : false}})
      })
    },
    [INITIALIZE]: (state) => initialState,

    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
    
    }),

    // 맵목록 조회 
    [MAP_LIST_SUCCESS]: (state, {payload : {data, message, result}}) =>{
      return {   
        ...state,
          mapList : data,
          mesage :  message,
          result : result,
          status : "MAP_LIST_SUCCESS"
      }
      },
      // 맵목록 조회 실패
      [MAP_LIST_FAILURE]: (state, {payload : {message, result}}) =>({
          ...state,
          message : message,
          result : result,
          status : "MAP_LIST_FAILURE"
      }),
  
      // 가이드 목록 조회 
      [GUIDE_LIST_SUCCESS]: (state, {payload : {data, message, result}}) =>{
        return {   
          ...state,
            guideList : data,
            mesage :  message,
            result : result,
            status : "GUIDE_LIST_SUCCESS"
        }
        },
        // 가이드 목록 조회 실패
        [GUIDE_LIST_FAILURE]: (state, {payload : {message, result}}) =>({
            ...state,
            message : message,
            result : result,
            status : "GUIDE_LIST_FAILURE"
        }),

   

   },
  initialState
);

export default question;
