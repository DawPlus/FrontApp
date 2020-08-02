import client from './client';

const baseUrl = "/init"

// 목록조회
export const list = () =>{
        return client.post(baseUrl);
};
// 신규 
export const newAPI = (data) =>{
    return client.post(`${baseUrl}/new`, data);
};

// 삭제 
export const deleteAPI = (data) =>{
    return client.delete(baseUrl, data);
};

