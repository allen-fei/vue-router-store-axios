<template>
   <div class="wrapper">
		<div class="box-content">
			<div class="clt-inputbox">
				<div class="clt-inputbox-icon">
					<i class="iconfont slj-qian"></i>
				</div>
				<div class="clt-inputbox-m">
					<span id="dom-value">0</span>
				</div>
			</div>
			<div class="clt-keysbox">
				<table class="keys-table">
					<tr>
						<td data-value="1"><router-link :to="{name: 'HelloWorld', params: {username: '18673798863'}}">1</router-link></td>
						<td data-value="2">2</td>
						<td data-value="3">3</td>
						<td rowspan="2" class="keys-del" data-value="del"><i class="iconfont slj-huishan"></i></td>
					</tr>
					<tr>
						<td data-value="4">4</td>
						<td data-value="5">5</td>
						<td data-value="6">6</td>
					</tr>
					<tr>
						<td data-value="7">7</td>
						<td data-value="8">8</td>
						<td data-value="9">9</td>
						<td rowspan="2" class="keys-submit" data-value="submit">确认<br>收款</td>
					</tr>
					<tr>
						<td data-value="point">.</td>
						<td data-value="0">0</td>
						<td data-value="clear">C</td>
					</tr>
				</table>
			</div>
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
            }, (error) => {
                console.log(error);
            })
        }
    }
</script>
<style scoped lang="less">
@import (reference) '../assets/css/slj.less';

	.clt-inputbox{ background: #017ad7; height: 200px; position: relative;}
	.clt-inputbox-icon{ width: 50px; float: left; position: absolute; bottom: 20px; left: 20px;
		i{ color: #c6e6fd; font-size: 30px; line-height: 80px;}
	}
	.clt-inputbox-m{ position: absolute; bottom: 20px; right: 20px;
		span{ color: #fff; font-size: 48px; line-height: 80px;}
	}
	.clt-keysbox{ position: absolute; bottom: 0; top: 200px; width: 100%;}
	.keys-table{ width: 100%; height: 100%; background: #fff;}
	.keys-table td{ border: 1px #e8e7ec solid; width: 25%; text-align: center; font-size: 24px;}
	.keys-table td.keys-submit{ background: #017ad7; color: #fff; font-size: 18px;}
	.keys-table td.keys-del i{ font-size: 24px;}
	.keys-table td:active{ background: #ddd;}
	.keys-table td.keys-submit:active{ background: #016cbd;}
	header a.point em{ width: 5px; height: 5px; background: red; border-radius: 50%; position: absolute; right: 12px; top: 12px; display: none;}

	.layer-box { position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 999998; overflow: hidden; display: none;}
	.layer-box .layer-bg { width: 100%; height: 100%; background: rgba(0, 0, 0, 0.6);}
	.layer-box .layer-cont { position: absolute; top: 20%; left: 10%; width: 80%; height: 60%; z-index: 999999; background: #fff; border-radius: 5px;}
	.layer-cont .layer-summary{ margin:20px; font-size: 14px; overflow-y: auto;}
	.layer-cont .layer-summary h2{ font-size: 16px; font-weight: bold;}
	.layer-cont .layer-summary p{ font-size: 14px; padding-top: 8px; line-height: 180%;}
	.layer-cont .layer-img img { width: 100%;}
	.layer-cont .layer-txt p { padding: 6px 0; color: #4f2711;}
	.layer-cont .layer-close { width: 20px; height: 20px; position: absolute; bottom: 0; right: 0; z-index: 999999;}
	.layer-cont .layer-close i { font-size: 34px; color: #eee;}
	.layer-cont .layer-btn{ width: 90px; height: 28px; line-height: 28px; text-align: center; border-radius: 5px; border: 1px #016cbd solid; color: #016cbd; margin: 0 auto; margin-top: 20px;}
	.layer-cont .layer-btn:active{ background: #016cbd; color: #fff;}






</style>