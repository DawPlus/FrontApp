import client from './client';

const basenName = '/auth'
// 로그인
export const login = ({ id, password }) =>{return client.post(`${basenName}/login`, { id, password })};

// 로그인 상태 확인
export const checkTokken = (tokken) => client.post(`${basenName}/check`, {tokken})

// 비밀번호 변경 
export const changePassword = (data)=> {

    return client.post(`${basenName}/password`, data)
}
