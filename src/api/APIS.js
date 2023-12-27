import axios from "axios";
// import axiosRetry from "axios-retry";
// import retryCount from "retry";
import endpoints from "./endpoints";
// creating axios instance
const APIS = axios.create({
  baseURL: endpoints?.serverBaseURL, //IF SERVER change then only do change here there is no need to change everywhere
});

export default APIS;
