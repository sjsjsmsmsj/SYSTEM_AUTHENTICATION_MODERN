import axios from 'axios';
import { useAuthStore } from '@/stores/useAuthStore';

const api = axios.create({
    baseURL: import.meta.env.MODE === 'development' ? "http://localhost:5001/api" : "/api",
    withCredentials: true, // cookie được lưu trên server
})

// gan access token vao req header 
api.interceptors.request.use(config => {
    const { accessToken } = useAuthStore.getState();
    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
})

// tự động gọi refresh api khi acces token hết hạn
api.interceptors.response.use((res) => res, async (error) => {
    const originalRequest = error.config;
    // những api không cần check
    if (originalRequest.url.includes('/auth/signin') ||
        originalRequest.url.includes('/auth/signup') ||
        originalRequest.url.includes('/auth/refresh')) {
        return Promise.reject(error)
    }
    originalRequest._retryCount = originalRequest._retryCount || 0;
    if (error.response.status === 403 && originalRequest._retryCount < 4) {
        originalRequest._retryCount += 1;
        try {
            const res = await api.post('/auth/refresh', { withCredentials: true });
            const accessToken = res.data.accessToken;
            useAuthStore.setState({ accessToken });
            originalRequest.headers.Authorization = `Bearer ${accessToken}`;
            return api(originalRequest);
        } catch (error) {
            useAuthStore.getState().clearState();
            return Promise.reject(error);

        }
    }
    return Promise.reject(error);
})




export default api;