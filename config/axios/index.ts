import axios from "axios";
import { setCookie } from "cookies-next";

axios.interceptors.response.use(
  function (response) {
    setCookie("accessToken", response.data.accessToken);
    setCookie("refreshToken", response.data.refreshToken);
    return response;
  },
  function (error) {
    console.info(error.response.data.message);
    return error;
  }
);

export { axios };
