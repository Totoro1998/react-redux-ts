import { createBrowserHistory } from 'history';
import { message } from 'antd';
import axios from 'axios';
import crypto from 'crypto';
import store from '@/model/store';

const service = axios.create({
  baseURL: process.env.REACT_APP_BASE_API, // url = base url + request url
  timeout: 5000,
  // withCredentials: true // send cookies when cross-domain requests
});

// Request interceptors
service.interceptors.request.use(
  config => {
    const token = 'a817d18a-28e2-11eb-a9a7-b8098a44779f';
    const userInfo = store.getState().user;
    const timestamp = new Date().getTime().toString().substring(0, 10);
    const oriStr = timestamp + token;
    const signature = crypto.createHash('md5').update(oriStr).digest('hex');
    config.headers.timestamp = timestamp;
    config.headers.signature = signature;
    config.headers.appname = 'pub';
    config.headers.username = encodeURIComponent(userInfo.name);
    return config;
  },
  error => {
    Promise.reject(error);
  },
);

// Response interceptors
service.interceptors.response.use(
  response => {
    const res = response.data;
    if (res.success || res.code === 0) {
      return Promise.resolve<any>(res.data);
    }
    const errMsg = res.msg || res.message;
    return Promise.reject<any>(new Error(errMsg));
  },
  error => {
    if (error.response && error.response.status === 401) {
      const history = createBrowserHistory();
      history.push('/login');
    } else {
      message.error({
        content: error.message || 'Error',
        duration: 1,
      });
    }
    return Promise.reject(error);
  },
);

export default service;
