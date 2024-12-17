import axios from "axios";

const authAxiosInstance = axios.create({
  baseURL: `${import.meta.env.REACT_APP_API_URL}/api`,
  withCredentials: true,
});

export default authAxiosInstance;
