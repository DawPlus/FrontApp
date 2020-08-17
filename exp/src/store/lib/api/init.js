import client from './client';

const baseUrl = "/init"

// 목록조회
export const list = () =>{
        return client.post(baseUrl);
};

// 상세조회
export const selectAPI = (id) =>{
    return client.get(`${baseUrl}/${id}`);
};
// 신규 
export const newAPI = (data) =>{
    return client.post(`${baseUrl}/new`, data);
};

// 삭제 
export const deleteAPI = (id) =>{
    console.log(id);
    return client.delete(`${baseUrl}/${id}`);
};

