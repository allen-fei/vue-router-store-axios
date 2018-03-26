<template>
   <main class="wrapper" id="myinfo" v-cloak>
			<div class="portrait" id="portrait" > 
				<!-- <img class="hp" :src="info.headPortraitUrl || 'img/logo.png'"> -->
				<i class="iconfont slj-bianji"></i>
			</div>
			<ul class="my-info" >
				<li>
					<a data-href="set-nickname.html" >
						<span>昵称</span>
						<div class="info-right">
							<span id="nickname">{{info.nickname}}</span>
							<i class="iconfont slj-more" ></i>
						</div>
						
					</a>
				</li>
				<li>
					
					<span>手机号</span>
					<div class="info-right">
						<span class="phone" id="phone">{{phones(info.username)}}</span>
					</div>
				</li>
				<li>
					<span>实名认证</span>
					<div class="info-right">
						<span>{{realName(info.auditStatus)}}</span>
					</div>
						
				</li>
			
			</ul>
		</main>
</template>
<script>
    export default {
        
    }
</script>
<style scoped lang="less">
@import (reference) '../assets/css/slj.less';
	.info-right .phone{margin-right: 15px;}
	.portrait {width: 95%;height: 150px;margin: 10px;text-align: center;background: url(img/my-personal.png)no-repeat;background-size: 100% 100%;position: relative;}
	.portrait .slj-bianji {width: 30px;height: 30px;.border-radius(50%);background: #017ad7;position: absolute;top: 58%;right: 35%;color: #fff;font-size: 17px;padding: 3px 8px;}
	.portrait .hp {width: 100px;height: 100px;.border-radius(50%);margin-top: 27px;border: 3px solid #fff;}
</style>