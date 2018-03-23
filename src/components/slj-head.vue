<template>
    <header>
    	<a :class="[classicon, {'slj-fanhui':classsucc}]"></a>
    	<h1 class="head_title"> {{message}}</h1>
    	<span class="header-right"></span>
    </header>
</template>
<script>
    export default {
    	// name: 'header',
        props: ['message'],
        data(){
        	return {
        		name:'首页1',
        		classicon:'iconfont',
        		classstyle:['slj-fanhui', 'slj-iconfontcha'],
        		classsucc: false
        	}
        }
    }

   	
</script>
<style type="text/css">

</style>