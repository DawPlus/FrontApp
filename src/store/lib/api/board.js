import client from './client';

// 목록조회
export const list = () =>{
        return client.post('/api/board/list');
};
