import client from './client';

const baseUrl = "/exceptions"

// 목록조회
export const list = () =>{
        return client.post(baseUrl);
};


