import client from './client';

// 로그인
export const list = () =>{return client.post('/api/auth/login')};


