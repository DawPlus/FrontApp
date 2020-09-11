import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, {createRequestActionTypes} from '../../lib/createRequestSaga';
import * as authAPI from '../../lib/api/auth';


const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const CHANGE_FIELD_ONE = 'auth/CHANGE_FIELD_ONE';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';
const INITIALIZE = 'auth/INITIALIZE';
const LOGOUT  = 'auth/LOGOUT';
const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE]       = createRequestActionTypes('auth/LOGIN');
const [CHECK_TOKKEN, CHECK_TOKKEN_SUCCESS, CHECK_TOKKEN_FAILURE ]  = createRequestActionTypes('auth/CHECK_TOKKEN');
const [CHANGE, CHANGE_SUCCESS, CHANGE_FAILURE]       = createRequestActionTypes('auth/CHANGE');

export const changeField      = createAction(CHANGE_FIELD,({ form, key, value }) => ({form, key, value}));
export const changeFieldOne   = createAction(CHANGE_FIELD_ONE,({ key, value }) => ({key, value}));
export const initializeForm   = createAction(INITIALIZE_FORM, form => form);
export const login            = createAction(LOGIN, ({ id, password }) => ({id,password}));
export const logout           = createAction(LOGOUT);
export const checkTokken      = createAction(CHECK_TOKKEN,  (tokken) => (tokken))
export const changeAction     = createAction(CHANGE,  (data) => (data))
export const initialize       = createAction(INITIALIZE);

// saga 생성
const loginSaga             = createRequestSaga(LOGIN,          authAPI.login);
const checkSaga             = createRequestSaga(CHECK_TOKKEN,   authAPI.checkTokken);


const checkFailureSaga = () => {
  try {
    sessionStorage.clear(); 
  } catch (e) {
    console.log('localStorage is not working');
  }
}


export function* authSaga() {
  yield takeLatest(LOGIN, loginSaga);
  yield takeLatest(CHECK_TOKKEN, checkSaga);
  yield takeLatest(CHECK_TOKKEN_FAILURE, checkFailureSaga);
  yield takeLatest(CHANGE, createRequestSaga(CHANGE,   authAPI.changePassword));
  
  
}

const initialState = {
  loginInfo: {
    id: '',
    password: ''
  },
  userInfo : {
      admin_id : ""
  },
  authrization: false,
  tokken : null,
  authError: null,
  status : null,
  result : null,
  message : null,
  changePw : {    
      newPassword : "",
      oldPassword : "",
      confirmPassword : "",
  }
};

const auth = handleActions(
  {
    [INITIALIZE] : state => initialState,
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, draft => {
        draft[form][key] = value; // 예: state.register.username을 바꾼다
      }),
    [CHANGE_FIELD_ONE]: (state, { payload: {  key, value } }) =>
    produce(state, draft => {
      draft[key] = value; // 예: state.register.username을 바꾼다
    }),
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
      authError: null // 폼 전환 시 회원 인증 에러 초기화
    }),
  
    // 로그인 성공
    [LOGIN_SUCCESS]: (state, {payload : {data, result, message}}) =>({
        ...state,
        authError: null,
        authrization: data.authrization,
        tokken : data.tokken,
        userInfo : data.userInfo,
        result : result ,
        message : message,
        status : "LOGIN_SUCCESS"
    }),


    [LOGOUT]: (state) => initialState,
    
    // 로그인 실패
    [LOGIN_FAILURE]: (state, { payload: {message} }) => ({
      ...state,
      message : "아이디와 비밀번호를 확인해 주십시오",
      status : "LOGIN_FAILURE"
    }),

    
    [CHECK_TOKKEN_SUCCESS]: (state, { payload : result }) =>({
      ...state,
      authError: null,
      authrization: result.data.authrization,
      tokken : result.data.tokken,
      userInfo : result.data.userInfo,
   
     
    }),


    [CHECK_TOKKEN_FAILURE]: (state, { payload : {result, message, data} }) =>({
      ...state,
      authError: message,
      authrization: data.authrization,
      tokken :data.tokken,
      userInfo :data.userInfo
     
    }),
    [CHANGE_SUCCESS]: (state, { payload : {message, result} }) =>({
      ...state,
      message : message, 
      result : result,
      status : "CHANGE_SUCCESS"
    }),


    [CHANGE_FAILURE]: (state, { payload : {result, message, data} }) =>({
      ...state,
      message : "비밀번호 변경중 오류가 발생하였습니다" , 
      result : result,
      status : "CHANGE_FAILURE"
    }),

  },
  initialState
);

export default auth;
