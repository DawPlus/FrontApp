import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, {createRequestActionTypes} from '../lib/createRequestSaga';
import * as authAPI from '../lib/api/auth';


const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';
const LOGOUT  = 'auth/LOGOUT';
const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE]       = createRequestActionTypes('auth/LOGIN');
const [CHECK_TOKKEN, CHECK_TOKKEN_SUCCESS, CHECK_TOKKEN_FAILURE ]  = createRequestActionTypes('auth/CHECK_TOKKEN');


export const changeField    = createAction(CHANGE_FIELD,({ form, key, value }) => ({form, key, value}));
export const initializeForm = createAction(INITIALIZE_FORM, form => form);
export const login          = createAction(LOGIN, ({ id, password }) => ({id,password}));
export const logout         = createAction(LOGOUT);
export const checkTokken    = createAction(CHECK_TOKKEN,  (tokken) => (tokken))



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
}

const initialState = {
  loginInfo: {
    id: '',
    password: ''
  },
  userInfo : {

  },
  authrization: null,
  tokken : null,
  authError: null
};

const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, draft => {
        draft[form][key] = value; // 예: state.register.username을 바꾼다
      }),
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
      authError: null // 폼 전환 시 회원 인증 에러 초기화
    }),
  
    // 로그인 성공
    [LOGIN_SUCCESS]: (state, {payload : data}) =>({
        ...state,
        authError: null,
        authrization: data.authrization,
        tokken : data.tokken,
        userInfo : data.userInfo
    }),


    [LOGOUT]: (state) => initialState,
    
    // 로그인 실패
    [LOGIN_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error
    }),

    
    [CHECK_TOKKEN_SUCCESS]: (state, { payload : {authrization, tokken, userInfo} }) =>({
      ...state,
      authError: null,
      authrization: authrization,
      tokken : tokken,
      userInfo : userInfo
     
    }),


    [CHECK_TOKKEN_FAILURE]: (state, { payload : {authrization, tokken, userInfo} }) =>({
      ...state,
      authError: "토큰에러 발생",
      authrization: false,
      tokken :null,
      userInfo :{

      }
     
    }),
    

  },
  initialState
);

export default auth;
