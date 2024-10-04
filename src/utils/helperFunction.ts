import Cookies from "js-cookie"

export const getToken = () => {
    const token = Cookies.get("token");
    return token;
  };