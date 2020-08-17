import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, {createRequestActionTypes} from '../../lib/createRequestSaga';
// import * as API from '../lib/api/question';
import * as FILE from "../../lib/api/file";
import * as Util from "../../Util/array";
const INITIALIZE = 'question/INITIALIZE';
const INITIALIZE_FORM = 'question/INITIALIZE_FORM';
const INITIALIZE_RADIO = 'question/INITIALIZE_RADIO';
const CHANGE_FIELD = 'question/CHANGE_FIELD';
const CHANGE_FIELD_FORM = 'question/CHANGE_FIELD_FORM';
const CHANGE_FIELD_LIST = 'question/CHANGE_FIELD_LIST';
// 맵파일 업로드 
const [MAP_UPLOAD, MAP_UPLOAD_SUCCESS, MAP_UPLOAD_FAILURE] = createRequestActionTypes('question/MAP_UPLOAD');

// 힌트파일 업로드 
const [HINT_UPLOAD, HINT_UPLOAD_SUCCESS, HINT_UPLOAD_FAILURE] = createRequestActionTypes('question/HINT_UPLOAD');

//const [LIST, LIST_SUCCESS, LIST_FAILURE]   = createRequestActionTypes('question/LIST');

// 상세보기
//const [VIEW, VIEW_SUCCES, VIEW_FAILURE]  = createRequestActionTypes('question/VIEW');  
const VIEW = 'question/VIEW';

//export const list             = createAction(LIST);
export const initialize       = createAction(INITIALIZE);
export const initializeForm   = createAction(INITIALIZE_FORM);
export const changeField      = createAction(CHANGE_FIELD);
export const changeFieldForm  = createAction(CHANGE_FIELD_FORM);
export const changeFieldList  = createAction(CHANGE_FIELD_LIST);
export const initializeRadio  = createAction(INITIALIZE_RADIO);


export const mapFileUpload    = createAction(MAP_UPLOAD ,  (file) => (file));
export const hintFileUpload   = createAction(HINT_UPLOAD ,  (file) => (file));

export const view   = createAction(VIEW, id=> {console.log(id)});


export function* questionSaga() {
  //yield takeLatest(LIST,        createRequestSaga(LIST, API.list));
  yield takeLatest(MAP_UPLOAD,  createRequestSaga(MAP_UPLOAD, FILE.upload));
  yield takeLatest(HINT_UPLOAD,  createRequestSaga(HINT_UPLOAD, FILE.upload));


}

const initialState = {
    title : "",
    content :"",
    type : false,
    mapFile : null,
    hintFile : null,
    mapImage : null,
    hintImage : null,
    examples : [
        {content : "" , isTrue : false},
        {content : "" , isTrue : false},
        {content : "" , isTrue : false},
        {content : "" , isTrue : false},
        {content : "" , isTrue : false},
    ],
    singleExample : "",
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
    [MAP_UPLOAD_SUCCESS] : (state , {payload : data}) =>({
        ...state,
        mapImage : data.filePath,
        status : "MAP_UPLOAD_SUCCESS"
    }),

    [MAP_UPLOAD_FAILURE] : (state , {payload : data}) =>({
        ...state,
        status : "MAP_UPLOAD_FAILURE"
    }),
    [HINT_UPLOAD_SUCCESS] : (state , {payload : data}) =>({
      ...state,
      hintImage : data.filePath,
      status : "HINT_UPLOAD_SUCCESS"
    }),

    [HINT_UPLOAD_FAILURE] : (state , {payload : data}) =>({
        ...state,
        status : "HINT_UPLOAD_FAILURE"
    }),
   
    [HINT_UPLOAD_FAILURE] : (state , {payload : data}) =>({
      ...state,
      status : "HINT_UPLOAD_FAILURE"
    }),
    [VIEW]  :(state ) =>({
      ...state,
      title : "테스트 데이터입니다.",
      content :"테스트 콘텐츠 입니다. ",
      type : true,
      status : "HINT_UPLOAD_FAILURE"
    }),

   },
  initialState
);

export default question;