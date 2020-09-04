import client from './client';

const baseUrl = "/question"


// 신규 
export const newQuestion = (data) =>{
    return client.post(`${baseUrl}/new`, data);
};
// 목록조회 
export const list    = () => {
    return client.post(`${baseUrl}`);
}

