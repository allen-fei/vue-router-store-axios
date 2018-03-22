<template>
    <div>
        <div class="hello">
            <h2>tab1的内容{{text}}</h2>
        </div>
    </div>
</template>
<script>
    import {fn, ajax} from '../assets/js/public'
    import vueAjax from '../axios'
    import apis from '../axios/api'
    export default {
        data(){
            return {
                text: ajax(123)
            }
        },
        created(){
            let obj = {"username":"18607318081","password":"e10adc3949ba59abbe56e057f20f883e","sign":"HSoEeFMggcSolDCGmCSQCK1NCgn8dI2N4qhX0R5NltB/3NIf4p3Vgom5u08EI/D6b8rPfXm47CelX4/C49DikrxEtxn3yI07EFnKhThEHHvUlHuTcWLyQnII4o/ebDWkx+CXnLHlEsUh9onhHeLYS5VQn0QqkTOl57NiYWDyOr7v7XIn846iripMQsGZxvUHhhy5hRx7FfzDNzLCn5U6/WFR3H7JB57QmxzIN10tSKX0/vKvmyZNRtA6iynLikjgRYZm6p2w6ExqprabNqaGSq1FVCr0fjgsZKCdGlMdPWs5htcNdnq4HNKibUmv9qCfZtXNeRO2VlY88Pd2Th1waA==","phoneModel":"MI MAX 2","phoneUuid":"865902032595267,865902032595275","getuicid":"1db874edab328772229ee8e1eb6088aa"}
            vueAjax(apis.login, obj).then((res) => {
                console.log(res);
                this.$layer.alert('sssss',function(){
                    console.log('你点击了确定')
                })
            }, (error) => {
                console.log(error);
            })
        }
    }
</script>
<style scoped lang="less">
@import (less) '../assets/css/test.less';
</style>