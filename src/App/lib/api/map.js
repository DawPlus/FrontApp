import client from './client';

const baseUrl = "/map"

// 목록조회
export const list = () =>{
        return client.get(baseUrl);
};
// 신규 
export const newMap = (file) =>{
    const formData = new FormData();
    formData.append('file', file);
    return client.post(`${baseUrl}/upload`, formData);
};

// 삭제 
export const deleteAPI = (data) =>{
    return client.delete(baseUrl, data);
};

