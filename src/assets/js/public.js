const fn = {
    isEmail(str){
        let reg = /^[0-9a-zA-Z]+@[0-9a-zA-Z]+(\.[0-9a-zA-Z]+)+$/;
        if(!reg.test(str)) return false;
        else return true;
    },
    isPhone(str){
        let reg = /(^0{0,1}1[3|4|5|6|7|8|9][0-9]{9}$)/;
        if(!reg.test(str)) return false;
        else return true;
    }
}

const ajax = () => {
    return 'ajax';
}
export {fn, ajax};