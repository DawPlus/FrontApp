import client from './client';

const baseUrl = "/team"

// 목록조회
export const listAPI = () =>{
        return client.post(baseUrl);
};
// 상세조회
export const selectAPI = (id) =>{
    return client.post(`${baseUrl}/${id}`);
};
// 신규 
export const newAPI = (data) =>{
    return client.post(`${baseUrl}/new`, data);
};
// 수정 
export const updateAPI = (data) =>{
    return client.put(`${baseUrl}`, data);
};
// 삭제 
export const deleteAPI = (id) =>{
    
    return client.delete(`${baseUrl}/${id}`);
};


