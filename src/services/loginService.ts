import axios from "axios";
import Cookies from "js-cookie"; 

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

export const loginUser = async (endpoint: string, payload: any) => {
  try {
    const res: any = await axios.post(`${BASE_URL}${endpoint}`, payload);
    const { token } = res.data; 

    Cookies.set("token", token, { expires: 1, secure: true }); 

    return res.data;
  } catch (error: any) {
    return error.response; 
  }
};
