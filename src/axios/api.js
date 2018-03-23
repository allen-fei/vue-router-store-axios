// 所有api地址后缀列表
// url——请求地址后缀
// method——请求类型，get or post
const apis = {
    login: {
        url: '/auth/login/login',
        method: 'post'
    },
    register: {
        url: '/auth/register/register',
        method: 'post'
    }
}

export default apis;