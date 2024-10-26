import axios from 'axios';

export const baseUrl = 'code-challenge-backend-q3qw.onrender.com/api/';

// Create an Axios instance
const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL || baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to handle authentication
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle responses and errors globally
apiClient.interceptors.response.use(
  (response) => {
    return response.data; 
  },
  (error) => {

    if (error.response) {

      console.error('Error response:', error.response);
    } else {
      console.error('Error:', error.message);
    }
    return Promise.reject(error);
  }
);

// Create a function for making requests
export const request = async (method, url, options = {}) => {
  try {
    const response = await apiClient({
      method,
      url,
      ...options,
    });
    return response;
  } catch (error) {
    throw error;
  }
};
