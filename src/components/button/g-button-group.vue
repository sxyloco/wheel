<template>
    <div class="g-button-group">
        <slot></slot>
    </div>
</template>
<script>
export default {
    mounted(){
        let childrens = this.$el.children
        for (let el of childrens) {
            let nodeName = el.nodeName.toLowerCase()
            if(nodeName !== 'button') {
                console.warn(`g-button-group 的子标签必须是 g-button，你当前输入的是${nodeName}`)
            }
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../../style/var/var.scss';
.g-button-group{
    display: flex;
    vertical-align: middle;
    > .g-button{
            border-radius: 0;
        &:first-child{
            border-top-left-radius: $button-border-radius;
            border-bottom-left-radius: $button-border-radius;
        }
        &:last-child{
            border-top-right-radius: $button-border-radius;
            border-bottom-right-radius: $button-border-radius;
        }
        &:not(:first-child){
            margin-left:-1px; //去除边框重叠，第一个按钮不需要左移,否则按钮间距会影响
        }
        &:hover{
            cursor: pointer;
            z-index: 1;// 显示出元素有边框被遮挡的层级
        }
       
    }
    

}
</style>