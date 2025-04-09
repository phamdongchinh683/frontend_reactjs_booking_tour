import axios from "axios";
import { configAxios } from "../configs/configAxios";

export function AuthService() {
  const register = (data) =>
    axios.post(process.env.REACT_APP_API_SIGN_UP, data);

  const login = (data) => axios.post(process.env.REACT_APP_API_SIGN_IN, data);

  const getUsers = () =>
    axios.get(`${process.env.REACT_APP_API_GET_ALL_USERS}`, configAxios);

  const myProfile = () =>
    axios.get(`${process.env.REACT_APP_API_USER_PROFILE}`, configAxios);

  const provinces = () => axios.get(`${process.env.REACT_APP_API_PROVINCES}`);
  return {
    register,
    provinces,
    myProfile,
    login,
    getUsers,
  };
}
