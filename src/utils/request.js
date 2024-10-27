import axios from "axios";

// Create an Axios instance
const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Response interceptor to handle responses and errors globally
apiClient.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response) {
      console.error("Error response:", error.response);
    } else {
      console.error("Error:", error.message);
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
    console.log(response,'res')
    return response;
  } catch (error) {
    return error;
  }
};
