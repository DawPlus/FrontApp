import client from './client';

const baseUrl = "/screenshot"

// 목록조회
export const listAPI = (id) =>{
        return client.post(baseUrl, {team_id : id});
};

// 신규 
export const newAPI = (data) =>{
    return client.post(`${baseUrl}/new`, data);
};

// 삭제 
export const deleteAPI = (data) =>{
    const {file_id, path} = data;
    return client.post(`${baseUrl}/delete`, {file_id, path});
};

