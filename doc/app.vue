<template>
    <div class="example">
        <!-- <g-button disabled>默认按钮</g-button>
        <g-button :icon="'g-setting'">默认按钮</g-button>
        <g-button @click="handleLoading" :icon="'g-loading'" :icon-position="'right'" :loading="loading">默认按钮</g-button>
    
        <g-button-group>
            <g-button :icon="'g-left'">上一页</g-button>
            <g-button>更多</g-button>
            <g-button :icon="'g-right'">下一页</g-button>
        </g-button-group>
        <br>
        <g-input v-model="inputText"></g-input>
        <g-input v-model="inputText" disabled></g-input>
        <g-input v-model="inputText" @change="inputChange"></g-input>
        <g-input v-model="text" :error="'错误'"></g-input> -->

        <Doc-header>
       </Doc-header>
       <div class="doc-content">
           <Doc-Nav />
              <router-view>
             </router-view>
       </div>
     
       <Doc-footer />
    </div>
</template>
<script>
import DocHeader from './doc-header'
import DocFooter from './doc-footer'
import DocNav from './doc-nav'
export default {
    components:{DocHeader,DocFooter,DocNav},
    data() {
        return {
            loading:false,
            inputText:'法外狂徒',
            text:'1'
        }
    },
    methods: {
        handleLoading(){
            this.loading = !this.loading
        },
        inputChange(e,val){
            console.log(e)
            console.log(val)
        }
    }
}
</script>
<style lang="scss" scoped>
.doc-content{
    padding-top:68px;
    padding-left:200px;
    padding:68px 10px 0 200px;
}
.example{
    
    .gridDemo{
         background: #c3c5c7;  
    }
    .gridDem{
        height:50px;
        line-height: 50px;
        box-sizing: border-box;
        text-align: center;
        background: #2d89f3;  
        border:1px solid #f12222;
    }
}
</style>