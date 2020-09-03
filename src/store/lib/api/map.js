import client from './client';

const baseUrl = "/map"

// 목록조회
export const list = () =>{
    return client.post(baseUrl);
};
// 신규 
export const newMap = (file) =>{
    const formData = new FormData();
    formData.append('file', file);
    return client.post(`${baseUrl}/new`, formData);
};

// 삭제 
export const deleteAPI = (data) =>{
    const {file_id, path} = data;
    return client.post(`${baseUrl}/delete`, {file_id, path});
};

