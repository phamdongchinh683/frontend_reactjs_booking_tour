import axios from "axios";
import useToken from "../jwt/useToken";

export function AuthService() {
  const { getToken } = useToken();

  const configAxios = {
    headers: {
      token: getToken,
    },
  };

  const register = (data) =>
    axios.post(process.env.REACT_APP_API_SIGN_UP, data);

  const login = (data) => axios.post(process.env.REACT_APP_API_SIGN_IN, data);

  const getUsers = () =>
    axios.get(`${process.env.REACT_APP_API_GET_ALL_USERS}`, configAxios);

  const myProfile = () =>
    axios.get(`${process.env.REACT_APP_API_USER_PROFILE}`, configAxios);

  const getTours = (cursor, direction) =>
    axios.get(
      `${process.env.REACT_APP_API_TOURS}?cursor=${cursor}&direction=${direction}`,
      configAxios
    );

  const bookTour = (data, id) =>
    axios.post(`${process.env.REACT_APP_API_BOOKING}/${id}`, data, configAxios);

  const profile = (id) =>
    axios.get(`${process.env.REACT_APP_API_PROFILE}`, configAxios);

  const myBooked = () =>
    axios.get(`${process.env.REACT_APP_API_MY_BOOKED}`, configAxios);

  const getGuides = () =>
    axios.get(`${process.env.REACT_APP_API_GUIDES}`, configAxios);
  const detailTourById = (id) =>
    axios.get(`${process.env.REACT_APP_API_TOUR_DETAIL}/${id}`, configAxios);

  const provinces = () => axios.get(`${process.env.REACT_APP_API_PROVINCES}`);
  return {
    myBooked,
    profile,
    bookTour,
    getTours,
    getGuides,
    detailTourById,
    register,
    provinces,
    myProfile,
    login,
    getUsers,
  };
}
