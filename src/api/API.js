// import axios from "axios";
// import axiosRetry from "axios-retry";
// import retryCount from "retry";
// // creating axios instance
// const API = axios.create({
//   baseURL: "http://127.0.01:9999", //IF SERVER change then only do change here there is no need to change everywhere
// });

// axiosRetry(API, { retries: 5, retryDelay: () => retryCount * 1000 });

// //request iinterceptors
// API.interceptors.request.use((req) => {
//   //modify request object
//   req.headers.Authorization = "Topper Skills";
//   return req;
// });

// //request interceptors
// API.interceptors.request.use(
//   (response) => {
//     console.log("success response..");
//     return response;
//   },
//   (err) => {
//     console.log("errored response..");
//     return err;
//   }
// );
// export default API;
