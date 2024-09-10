// api.js
import axios from 'axios';

const api = axios.create({
    // baseURL: 'http://127.0.0.1:8000/',
    baseURL: 'http://192.168.1.29:8000/',

    headers: { 
        'Content-Type': 'application/json',
    },
});

// export const handleResponse = (response) => response.data.data;
export const handleError = (error) => {
    console.error('API call failed:');
    throw error;
};

export default api;
