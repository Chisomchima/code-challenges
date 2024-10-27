import { useQuery, useMutation, QueryClient } from "react-query";
import { request } from "../utils/request";

// Create instances of QueryClient and Cookies
const queryClient = new QueryClient();

// Hook for login
export const useLogin = () => {
  return useMutation(async (data) => {
    const response = await request("POST", `/auth/login`, {
      data,
    });
    return response;
  });
};

export const useRegister = () => {
  return useMutation(async (data) => {
    const response = await request("POST", `auth/signup`, {
      data,
    });
    return response;
  });
};
