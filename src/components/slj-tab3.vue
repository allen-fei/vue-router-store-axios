<template>
    <div class="wrapper">
			<div class="content">
				
				<div class="purse-box">
					<div class="purse-balance">
						<p style="font-size: 12px;">当前余额（不包括冻结金额）</p>
						<p class="pursemoney">¥<i id="balance">0</i></p>
						<div class="purse-details">
							<div class="details-frozen">
								<p>总奖励</p>
								<span id="frozen">0</span>
							</div>
							<div class="details-draw">
								<p>已提现</p>
								<span id="draw">0</span>
							</div>
						</div>
					</div>
				</div>
				
				<ul class="my-info">
					<!--<li>
						<a data-href="wallet-recharge-step1.html">
							<div class="icon iconfont slj-tixian1"></div>
							<p>充值</p>
							<i class="iconfont slj-more"></i>
						</a>
					</li>				-->
					<li>
						<a data-href="wallet-cash.html">
							<div class="icon iconfont slj-tixian"></div>
							<p>提现</p>
							<i class="iconfont slj-more"></i>						
						</a>
					</li>	
					<li>
						<a data-href="wallet-reward.html">
							<div class="icon iconfont slj-zhangdan"></div>
							<p>奖励明细</p>
							<i class="iconfont slj-more"></i>
						</a>
					</li>					
				</ul>
				
			</div>
		</div>
</template>
<script>
    export default {
        
    }
</script>
<style scoped lang="less">
@import (reference) '../assets/css/slj.less';
    .purse-box{width: 100%;height: auto;padding: 15px 10px; background: #363c40;}
	.purse-balance{width: 100%; height: 200px;background: url("@{img}/wallet.png") no-repeat;background-size: 100%; background-size: 100% 100%;text-align: center;padding: 35px;box-shadow: 0px 2px 3px 0px rgba(202,201, 201, 0.5);border-radius: 18px;}
	.pursemoney {color: #0079d7;font-size: 35px;font-weight: @fontweight;padding-bottom: 10px;
		i {padding-left: 32px;}
	} 
	.purse-details {width: 100%;height: auto;border-top: 1px solid #dcdcdc;padding-top: 17px;
		span {display: block; font-size: 16px;font-weight: bold;}
		p{color: #333;}
	}
	.details-frozen,.details-draw {float: left;width: 50%;text-align: center;}
	.details-draw {float: right;}
	ul.my-info li a {display: flex;
		p {font-size: 15px;color: #333;-webkit-box-flex: 1;-webkit-flex: 1; -ms-flex: 1;flex: 1;    text-align: right;}
	}
	.icon {display: inline-block;background: #00b2d2; color: #fff;.border-radius(8px);height: 32px;width: 32px;line-height: 35px;font-size: 23px;margin-top: 9px;text-align: center;margin-left: 12px;margin-right: 20px;}
	.slj-tixian {background: #ea8400;}
	.slj-zhangdan {background: #736dc5;}
	.icon i {font-size: 22px;}
	.mui-slider-loop {height: 90px;
		img {height: 90px;}
	}
</style>