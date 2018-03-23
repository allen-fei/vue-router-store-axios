<template>
    <div id="app">
        <SLJHead :message='curView'></SLJHead>
        <component :is="curView"></component>
        <ul class="footer">
            <li v-for="(item, index) in tabs" @click="toggleView(index, item.view)">
                <i :class="item.clasSty"></i>
                <span class="tab-label">{{item.text}}</span>
            </li> 
        </ul>
    </div>
</template>

<script>
import SLJHead from './components/slj-head';
import SLJTab1 from './components/slj-tab1';
import SLJTab2 from './components/slj-tab2';
import SLJTab3 from './components/slj-tab3';
import SLJTab4 from './components/slj-tab4';
export default {
    name: 'App',
    data(){
        return {
            active: 0,
            curView: 'SLJTab1',
            tabs: [{
                clasSty: 'iconfont slj-shoukuan',
                text: '收款',
                view: 'SLJTab1'
            },{
                clasSty: 'iconfont slj-tuiguang',
                text: '预约还款',
                view: 'SLJTab2'
            },{
                clasSty: 'iconfont slj-qianbao',
                text: '口袋',
                view: 'SLJTab3'
            },{
                clasSty: 'iconfont slj-wode1',
                text: '我的',
                view: 'SLJTab4'
            }]
        }
    },
    methods: {
        toggleView(i, v){
            this.$store.commit('increment');
            console.log(this.$store.state.count);
            this.active = i;
            this.curView = v;
        },
        headertitle(){

        }
    },
    components: {
        SLJHead,SLJTab1,SLJTab2,SLJTab3,SLJTab4
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
