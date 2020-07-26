import client from './client';

// 로그인
export const login = ({ id, password }) =>{return client.post('/api/auth/login', { id, password })};

// 로그인 상태 확인
export const checkTokken = (tokken) => client.post('/api/auth/check', {tokken})

