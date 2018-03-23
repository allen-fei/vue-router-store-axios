import axios from 'axios'  
import qs from 'qs'
import Vue from 'vue'
import { LoadingPlugins } from 'v-m-layer'
Vue.use(LoadingPlugins)

// 发送请求前的动作
axios.interceptors.request.use(config => { 
    // 可以显示loading 
    Vue.$layer.loading.show(); 
    return config  
}, error => {  
    return Promise.reject(error)  
})

// 接收响应前的动作
axios.interceptors.response.use(response => {  
    // 可以清除loading 
    Vue.$layer.loading.hide(); 
    return response  
}, error => {  
    return Promise.resolve(error)  
})

// 请求成功后的回调方法，此间处理跟后台的约定
function successFn(res){
    let d = JSON.parse(res.data);
    if (d.msg == 1) {  
        return res.data;
    }else if(d.msg == 3){
        // 提示  
    }else{
        // 提示
    }
}

// 请求失败后的回调方法，此间处理是网络问题，还是其他问题，并给出提示
function errorFn(response){
    if(response && (response.status === 200 || response.status === 304 || response.status === 400)){
        return response.data;
    }else{
        // 提示
    }
}

const vueAjax = (opts, data) => {
    let publicOpts = {                  //传给后台的公共参数
        username: '1234567890'
    }

    let defaultOpts = {                                     // 请求的配置
        url: opts.url,                                      // 请求的url
        method: opts.method,                                // 请求的类型
        baseURL: process.env.NODE_ENV == 'development' ?    // 请求的前缀
            'http://cusp.x2x.cn:8500' : 
            'https://app.shenlijin.com',
        timeout: 10000,                                     // 超时的时间
        params:Object.assign(publicOpts, data),             // get请求的参数序列
        data:qs.stringify(Object.assign(publicOpts, data)), // post请求的参数序列
    }

    if(opts.method=='get') delete defaultOpts.data;   
    else delete defaultOpts.params;

    let promise = new Promise((resolve, reject) => {
        // 发起请求
        axios(defaultOpts).then(
            (res) => {
                successFn(res);
                resolve(res);
            }
        ).catch(
            (error) => {
                errorFn(error);
                reject(error);
            }
        )
    })
      
    return promise;
}

export default vueAjax;