<template>
    <div class="box-content" id="rbsIndex" v-cloak>
				<div id="slider" class="mui-slider custom-slider" >
					<div class="mui-slider-group mui-slider-loop">
						<!-- <template v-for="(item, index) in banner"> -->
						
						<div class="mui-slider-item mui-slider-item-duplicate" >
							<a href="javascript:;">
								<!-- <img :src="item.picurl"> -->
							</a>
						</div>
	
						<div class="mui-slider-item">
							<a href="javascript:;">
								<!-- <img :src="item.picurl"> -->
							</a>
						</div>
	
						<div class="mui-slider-item mui-slider-item-duplicate">
							<a href="javascript:;">
								<!-- <img :src="item.picurl"> -->
							</a>
						</div>
						
						<!-- </template> -->
					</div>
					<div class="mui-slider-indicator">
						<!-- <template v-for="(item, index) in banner"> -->
						<div class="mui-indicator mui-active" ></div>
						<div class="mui-indicator"></div>
						<!-- </template> -->
					</div>
				</div>
				<div class="rbs-list-box" style="position: relative;">
					<div class="no-data" id="no-data">
						<img src="../assets/img/kong.png"/>
						<p>还没有信用卡噢~~</p>
						<input type="button" name="" id="" value="添加信用卡"/>
					</div>
					<!--<div class="bankbin" v-if="bankList == ''" @tap = 'bankbinding'>绑定信用卡</div>-->
					<dl class="rbs-list" v-for="(item, index) in bankList">
						<dt  :class="'gradient' + index % 4" > 
							<!-- <img :src="'img/bankName/' + (item.logo ? item.logo : 'default') + '.png'"> -->
							<span>{{item.bankName}}（<em>{{item.accountNo}}</em>）</span>
							<i class="iconfont slj-more"></i>
						</dt>						
						<dd>
							<h4>额度（元）</h4>
							<span>{{setAmount(item.quota)}}</span>
						</dd>
						<dd>
							<h4>还款日</h4>
							<span>{{item.repaymentData}}日</span>
						</dd>
						<dd @tap.stop="bankLink(item)">
							<input type="button" value="还款进行中" name="" class="" />
							<input type="button" value="查看预览" name="" class="btn01" />
							<input type="button" value="立即还款" name="" class="btn01" />
						</dd>
					</dl>
				</div>
			</div>
</template>
<script>
    export default {
        
    }
</script>
<style scoped lang="less">
@import (reference) '../assets/css/slj.less';
    .custom-slider{ height: 160px; border-bottom: 1px #dcdcdc solid;
		.mui-indicator{ width: 8px; height: 8px; margin: 1px 2px; background: rgba(0,0,0,.25); box-shadow: none; -webkit-box-shadow: none;}
		.mui-active{ background: rgba(255,255,255,.25);}
		.mui-slider-indicator{ right: 20px; text-align: right;}

    }
	.rbs-list-box{ width: 100%; border-top: 1px #dcdcdc solid; margin-top: 10px; padding: 20px 0; background: #FFF;}
	.rbs-list{ width: 90%; margin: 0 auto; display: table; margin-bottom: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 0 10px 1px rgba(11,2,5,.3); -webkit-box-shadow: 0 0 10px 1px rgba(11,2,5,.3);
		dt{ height: 30px; display: table-caption; line-height: 30px; border-radius: 5px 5px 0 0; padding: 0 10px; position: relative;

			.gradient0{
				background: -webkit-gradient(linear, left bottom, right top, from(#cb5747), to(#fb8674));
			    background: -webkit-linear-gradient(45deg, #cb5747 45%, #fb8674 65%);
			    background: -moz-linear-gradient(left, #cb5747 45%, #fb8674 65%);
			    background: -o-linear-gradient(left, #cb5747 45%, #fb8674 65%);
			    background: linear-gradient(left, #cb5747 45%, #fb8674 65%);
			}
			.gradient1{
				background: -webkit-gradient(linear, left bottom, right top, from(#3666d4), to(#5687f3));
			    background: -webkit-linear-gradient(left, #3666d4 45%, #5687f3 65%);
			    background: -moz-linear-gradient(left, #3666d4 45%, #5687f3 65%);
			    background: -o-linear-gradient(left, #3666d4 45%, #5687f3 65%);
			    background: linear-gradient(left, #3666d4 45%, #5687f3 65%);
			}	
			.gradient2{
				background: -webkit-gradient(linear, left bottom, right top, from(#de9740), to(#f7b96f));
			    background: -webkit-linear-gradient(left, #de9740 45%, #f7b96f 65%);
			    background: -moz-linear-gradient(left, #de9740 45%, #f7b96f 65%);
			    background: -o-linear-gradient(left, #de9740 45%, #f7b96f 65%);
			    background: linear-gradient(left, #de9740 45%, #f7b96f 65%);
			}
			.gradient3{
				background: -webkit-gradient(linear, left bottom, right top, from(#9ecb47), to(#caf76f));
			    background: -webkit-linear-gradient(left, #9ecb47 45%, #caf76f);
			    background: -moz-linear-gradient(left, #9ecb47 45%, #caf76f);
			    background: -o-linear-gradient(left, #9ecb47 45%, #caf76f);
			    background: linear-gradient(left, #9ecb47 45%, #caf76f);
			}
			img{ width: 20px; height: 20px; border-radius: 50%; margin-top: -2px;}
			span{ color: #FFF;}
			i{ color: #FFF; position: absolute; top: 0; right: 10px;}

		}

	}
	.rbs-list dd{ display: table-cell; padding: 20px; text-align: center; vertical-align: middle;
		
		input{ height: 26px; line-height: 24px; display: block;
			.btn01{ border: 1px #0079d7 solid; color: #0079d7; border-radius: 13px;}
		}
		input[type="button"]:active{ background: rgba(0,0,0,.05);}
	}
	.rbs-list-box .bankbin{text-align: center;border: 1px solid #47c6ef; padding: 3px 20px;width: 50%; margin-left: 25%; box-shadow: 2px 1px 5px 1px #9be0f6;color: #0a90bc;}
</style>