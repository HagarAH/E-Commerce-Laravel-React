import axios from 'axios';

const axiosClient = axios.create({
    baseURL: `${process.env.REACT_APP_API_BASE_URL}/api` // Use REACT_APP_API_BASE_URL for CRA
});

axiosClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('ACCESS_TOKEN');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

axiosClient.interceptors.response.use((response) => {
    return response;
}, (error) => {
    if (error.response && error.response.status === 401) {
        localStorage.removeItem('ACCESS_TOKEN');
    }
    throw error;
});

export default axiosClient;
