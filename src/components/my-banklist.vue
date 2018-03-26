<template>
    <main class="wrapper" id="myBank" v-cloak>
		<div class="box-content">
			<div class="no-data">
				<img src="img/kong.png"/>
				<p>点击下列按钮</p>
				<input type="button" name="" id="" value="重新加载"/>
				<input type="button" name="" id="" class="close" value="关闭"/>
			</div>
			<div class="bank-car" v-if="allData[10]" >
				<div class="bank-type">储蓄卡</div>
				<div class="bank-infor bank-blue" v-for="item in allData[10]"  :class="[item.status == '10' || item.status == '20' ?'bank-grey':'']" @longtap="saving(item.accountNo, item.isDefaultUse, item.id,  '10')">
					<img src="img/advince.png" alt="" class="advince" v-if="item.status == '99' ||  item.status == '98' "/>
					<img src="img/havemoney.png" alt="" class="havemoney" v-if="item.status == '99' ||  item.status == '97' "/>
					<div class="bank-logo"><img :src="bankLogos(item.logo,'default')"/></div>
					<div class="bank-text" >
						
						<div class="bank-cardname">
							<span class="name-left">{{item.bankName}}</span>
							<!--<span class="name-right">{{admitBank(item.isDefaultUse)}}</span>-->
						</div>
						<div class="bank-species">储蓄卡 <span style="float: right; margin-right: 10px; ">{{bankStyle(item.status)}}</span> </div>
						<div class="bank-num">*****  ****  ****  <span>{{item.accountNum}}</span>  <span class="name-right">{{admitBank(item.isDefaultUse)}}</span></div>
					</div>
				</div>
			</div>
			
			<div class="bank-car" style="margin-top: 10px;" v-if="allData[20]">
				<div class="bank-type">信用卡</div>
				<div class="bank-infor bank-red" v-for="item in allData[20]" :class="[item.status == '10' || item.status == '20' ?'bank-grey':'']"  @longtap="saving(item.accountNo, item.isDefaultUse, item.id, '20')">
					<img src="img/advince.png" alt="" class="advince" v-if="item.status == '99' ||  item.status == '98' "/>
					<img src="img/havemoney.png" alt="" class="havemoney" v-if="item.status == '99' ||  item.status == '97' "/>					
					<div class="bank-logo"><img :src="bankLogos(item.logo,'default')" /></div>
					<div class="bank-text" >
						<div class="bank-cardname">
							<span class="name-left">{{item.bankName}}</span>
						</div>
						<div class="bank-species">信用卡 <span style="float: right; margin-right: 10px; ">{{bankStyle(item.status)}}</span> </div>
						<div class="bank-num">*****  ****  ****  {{item.accountNum}}</div>
					</div>
				</div>
			</div>	
		</div>						
	</main>		
</template>
<script>
    export default {
        
    }
</script>
<style scoped lang="less">
@import (reference) '../assets/css/slj.less';
	.bank-car{width: 100%;background: #fff;padding: 0 10px;padding-top: 10px;padding-bottom: 20px;
		.bank-type{width: 100%;height: 20px;border-left: 2px solid #5183ef;padding: 0 10px;line-height: 18px;font-size: 16px;}
		.bank-infor{width: 100%;height: 125px;background: #5587f3;margin-top: 14px;.border-radius( 5px);overflow: hidden;position: relative;}
	}
	.bank-logo{height: 100%;width: 20%;float: left;padding-top: 13px;padding-left: 15px;
		img{width: 38px;height: 38px;.border-radius(50%);}
	}
	.bank-infor{
		.bank-text{height: 100%;width: 80%;float: left;padding-left: 10px;}
		.bank-cardname{width: 100%;height: 50px;line-height: 50px;color: #fff;font-size: 18px;padding-right: 10px;
			.name-left{float: left;}
			.name-right{float: right;font-size: 12px;}
		}
	}
	.bank-num .name-right{float: right;font-size: 12px;}
	.bank-text .bank-species{color: #fff;line-height: 15px;font-size: @fontsize;}
	
	.bank-text .bank-num{color: #fff;line-height:45px;font-size: 18px;padding-right: 10px;}
	.bank-car{
		.bank-blue{background: #5587f3;}
		.bank-red {background: #fa8573;}
		.bank-grey{background: #999 !important;}
	} 
	.bank-infor{
		.advince{width: 34px;position: absolute;top: 0;right: 17px;}
		.havemoney{width: 34px;position: absolute;top: 0;right: 63px;}	
	} 
</style>