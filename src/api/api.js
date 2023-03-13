/* eslint-disable */
import axios from "./axios";
import BASEURL from "./base-url"
import cache from "./cache"
const api = {
    getLoginUserInfo(params) {
        console.log(params);
        return axios.get(`${BASEURL.UBUNTU}/get_user_info`, { params });
    }
};

export default api;
