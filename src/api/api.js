import axios from "axios";

const api = axios.create( {
    baseURL:"http://localhost:3000"
}
);

api.interceptors.request.use(function (config) {
    // Do something before request is sent
    config.data = {
        ...config.data,
    id:crypto.randomUUID()
    };
    
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

  api.interceptors.response.use(function (response) {
    
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });


  
export{api};