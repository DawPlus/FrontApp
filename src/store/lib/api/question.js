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
// 문제 상세 조회 
export const selectAPI = (id) => {
    return client.post(`${baseUrl}/${id}`);
}

// 문제 사용여부 변경
export const updateUseYnAPI = (data) => {
    return client.put(`${baseUrl}/use`, data);
}

// 문제 삭제 
export const deleteAPI = (id) => {
    return client.delete(`${baseUrl}/${id}`);
}
// 문제수정
export const updateAPI = (data) => {
return  client.put(`${baseUrl}/`, data);

}