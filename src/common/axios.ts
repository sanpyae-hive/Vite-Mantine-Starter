import axios from 'axios';

export const setupResponseInterceptor = () => {
  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      return Promise.reject(error.response);
    }
  );
};

export const setupRequestInterceptor = () => {
  axios.interceptors.request.use(
    (config: any) => {
      const request = { ...config };
      request.headers = {
        ...request.headers,
        'x-csrf-token': 'MY_TOKEN',
      };
      return request;
    },
    (error) => Promise.reject(error)
  );
};
