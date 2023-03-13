/* eslint-disable */
import axios from "axios";

//引入进度条
import Nprogress from "nprogress";
//引入进度条样式
import "nprogress/nprogress.css";

//利用axios对象的方法create，去创建一个axios实例
const service = axios.create({
    //请求超时时间   （5s内没响应就失败了）
    timeout: 5000,
});

const errorHandle = (status, other) => {
    // 状态码判断
    switch (status) {
        // 401: 未登录状态，跳转登录页
        case 401:
            toLogin();
            break;
        // 403 token过期
        // 清除token并跳转登录页
        case 403:
            // tip('登录过期，请重新登录');

            break;
        // 404请求不存在
        case 404:
            // tip('请求的资源不存在');
            break;
        default:
            console.log(other);
    }
};

//请求拦截器
//axios实例的拦截器的request请求使用配置对象，返回配置对象
service.interceptors.request.use(
    (config) => {
        //进度条开始
        Nprogress.start();
        let newConfig = config;
        // console.log("请求信息",newConfig);
        if (newConfig.data === undefined || newConfig.data === "undefined") {
            newConfig.data = {};
            // console.log("参数添加默认值");
        }
        return newConfig;
    },
    (error) => {
        //请求失败的返回，后面的then或者catch回调随便写不写
        return Promise.reject(error);
    }
);

//响应拦截器
service.interceptors.response.use(
    (res) => {

        //进度条结束
        Nprogress.done();
        return res.status === 200 && res.data.code === 0
            ? Promise.resolve(res.data.data)
            : Promise.reject(res.data);
        //响应成功的返回
        return response;
    },
    error => {
        Nprogress.done();

        const { response } = error;
        if (response) {
            // 请求已发出，但是不在2xx的范围
            errorHandle(response.status, response.data.message);
            return Promise.reject(response);
        } else {
            console.log("未知错误", error);
        }
    }
);

//导出axios实例
export default service;
