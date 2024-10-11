import axios from "axios";
import Cookies from "js-cookie"

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL

const instance = axios.create({
    baseURL: `${BASE_URL}`,
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
    }
})

instance.interceptors.request.use(
    (config) => {
        const token = Cookies.get("token")

        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config;
    }, (error) => {
        return Promise.reject(error)
    }
)

instance.interceptors.response.use(
    (res) => {
        return res;
    }, (error) => {
        return Promise.reject(error)
    }
)

export default instance