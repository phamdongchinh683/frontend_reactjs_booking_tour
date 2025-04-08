import { setWithExpiry } from "../utils";

function useToken() {
  const getToken = localStorage.getItem("token");

  const setToken = (newToken) => {
    setWithExpiry("token", newToken, 3600000);
  };

  const deleteToken = () => {
    localStorage.removeItem("token");
  };

  return { getToken, setToken, deleteToken };
}

export default useToken;
