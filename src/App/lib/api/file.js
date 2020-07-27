import client from './client';

export const upload = (file) =>{
        const formData = new FormData();
        console.log(file)
        formData.append('file', file);
        return client.post('/api/file/upload', formData);
};
