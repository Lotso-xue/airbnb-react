import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config";

class YYRequest {
  constructor(baseURL, timeout = 10000) {
    this.instance = axios.create({ baseURL, timeout });

    // 响应拦截
    this.instance.interceptors.response.use(
      (res) => {
        return res.data;
      },
      (err) => {
        return err;
      }
    );
  }

  request(config) {
    return this.instance.request(config);
  }

  // 封装get请求
  get(config) {
    return this.request({ ...config, method: "get" });
  }

  // 封装post请求
  post(config) {
    return this.request({ ...config, method: "post" });
  }
}

export default new YYRequest(BASE_URL, TIMEOUT);
