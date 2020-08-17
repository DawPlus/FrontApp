import client from './client';

const baseUrl = "/exceptions"

// 목록조회
export const list = () =>{
        return client.post(baseUrl);
};

// 상세조회 
export const select = (id) =>{
        return client.get(`${baseUrl}/${id}`);
};
