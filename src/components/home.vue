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
import SLJHead from './slj-head';
import SLJTab1 from './slj-tab1';
import SLJTab2 from './slj-tab2';
import SLJTab3 from './slj-tab3';
import SLJTab4 from './slj-tab4';
export default {
    name: 'home',
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

    *{ margin: 0; padding: 0; }
    .foot{ list-style: none; position: absolute; bottom: 0; left: 0; right: 0; height: 50px; }
    .foot li{ width: 25%; float: left; height: 50px; line-height: 50px; }
</style>
