import client from './client';

const baseUrl = "/video"

// 목록조회
export const list = () =>{
    return client.post(baseUrl);
};
