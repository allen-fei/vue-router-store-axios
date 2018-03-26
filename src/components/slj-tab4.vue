<template>
    <main class="wrapper" id="myPerson">
		<div class="my-data">
			<div class="my-imgs"></div>
			<div class="my-nepe">
				<div class="nickNM">
					<!-- <span class="nepe-name">{{nickName(alldata.nickname,'暂无昵称')}}</span> -->
					<span class="nepe-name">暂无昵称啊</span>
					<div class="mem-mark">普通会员</div>
				</div>
				
				<span class="nepe-tel"></span>
			</div>
			<i class="iconfont slj-more"></i>
		</div>
		<ul class="myinfo">
			<a data-href="my-information.html">
				<li>
					<div class="icon"><i class="iconfont slj-gerenziliao"></i></div>
					<span>个人资料</span>
					<i class="iconfont slj-more"></i>
				</li>				
			</a>

			<li>
				<div class="icon iconorange"><i class="iconfont slj-shimingjiangli"></i></div>
				<span>实名认证</span>
				<!--<i class="iconfont slj-more"></i>-->
				<span class="proves"></span>						
			</li>		
			<li>
				<a data-href="my-banklist.html">
					<div class="icon iconblue"><i class="iconfont slj-kuaijie" style="font-size: 15px;"></i></div>
					<span>银行卡管理</span>
					<i class="iconfont slj-more"></i>						
				</a>
			</li>	
			<li>
				<a data-href="wallet-bill.html">
					<div class="icon iconpurple"><i class="iconfont slj-feishuai" style="font-size: 15px;"></i></div>
					<span>交易汇总</span>
					<i class="iconfont slj-more"></i>						
				</a>
			</li>
			<li>
				<a data-href="my-contact.html">
					<div class="icon icongreen"><i class="iconfont slj-kefu1"></i></div>
					<span>客服中心</span>
					<i class="iconfont slj-more"></i>	
				</a>
			</li>	
			<li>
				<a data-href="my-about.html">
					<div class="icon iconpurple"><i class="iconfont slj-guanyuwomen1"></i></div>
					<span>关于我们</span>
					<i class="iconfont slj-more"></i>
				</a>
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
    .my-data{width: 100%;height: 110px;background: url("@{img}/my-personal.png") no-repeat;background-size: 100%; padding: 0 10px;overflow: hidden;background-position: 0px 0px;
		.my-imgs{height:110px;width: 100px;float: left;padding-left: 20px;padding-top: 22px;}
    }
	.my-imgs img{width: 65px;height: 65px;.border-radius(50%);-moz-box-shadow: 0px 0px 0px 3px #fff;-webkit-box-shadow: 0px 0px 0px 3px #fff;box-shadow: 0px 0px 0px 3px #fff;}
	.my-nepe{width: 196px;height: 100%;float: left;padding-top: 27px;overflow: hidden;
		.nepe-name{color: #fff;font-size:20px;float: left;height: 25px;overflow: hidden;max-width: 60%;}
		.mem-mark {float: left;background: #ff9711;color: #fff;line-height: 10px;font-size: 10px;padding: 4px 2px 3px 2px;.border-radius(3px);margin-left: 15px;margin-top:7px;}
		.nepe-tel {color: #fff;font-size:15px;float: left;margin-top: 5px;}	
	}
	.my-data i{float: right;line-height: 110px;color: #fff;font-size: 24px;}
	ul.myinfo{margin-top: 11px;
		li{width: 100%;height: 55px;padding: 0 10px;line-height: 55px;background: #fff;border-bottom: 1px solid #dfdfdf;font-size: 14px;
			.icon{float: left;background: #f1574b;color: #fff;.border-radius(4px);height: 24px;width: 24px;line-height: 24px;margin-top: 16px;text-align: center;margin-left: 13px;}
			.iconorange{background:#ea8400;}
			.iconblue  {background:#00b2d2;}	
			.icongreen {background:#359aef;}
			.iconpurple{background:#736dc5;}
			i{font-size: 18px;}	
			span{float: left;margin-left: 16px;font-size: 14px;}
			.proves{float: right;color: #9d9d9d;margin-right: 20px;}
			.slj-more{float: right;color: #ccc;}
			a{float: left;width: 100%;height: 55px;}
		}
	}

	.flash{width: 100px;height: 50px;background: red;cursor: pointer;}
	.nickNM{height: 25px;}
</style>