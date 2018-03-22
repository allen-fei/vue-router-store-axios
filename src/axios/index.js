import axios from 'axios'  
import qs from 'qs'

// 发送请求前的动作
axios.interceptors.request.use(config => {  
  // 可以显示loading  
  return config  
}, error => {  
  return Promise.reject(error)  
})

// 接收响应前的动作
axios.interceptors.response.use(response => {  
  // 可以清除loading  
  return response  
}, error => {  
  return Promise.resolve(error)  
})

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

function errorFn(response){
    if(response && (response.status === 200 || response.status === 304 || response.status === 400)){
        return response.data;
    }else{
        // 提示
    }
}

const vueAjax = (opts, data) => {
    let publicOpts = {                  //公共参数
        username: '1234567890'
    }

    let defaultOpts = {
        url: opts.url,
        method: opts.method,
        baseURL: process.env.NODE_ENV == 'development' ? 
            'http://cusp.x2x.cn:8500' : 
            'https://app.shenlijin.com',
        timeout: 10000,
        params:Object.assign(publicOpts, data),
        data:qs.stringify(Object.assign(publicOpts, data)), 
    }

    if(opts.method=='get') delete defaultOpts.data;   
    else delete defaultOpts.params;

    let promise = new Promise((resolve, reject) => {
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