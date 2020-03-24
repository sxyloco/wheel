<template>
    <button :disabled="disabled" class="g-button" :class="{[`icon-${iconPosition}`]:true,size:true}" @click="$emit('click')">
        <GIcon v-if="icon && !loading" :name="icon" class="icon"></GIcon>
        <GIcon v-if="loading" :name="icon" class="icon loading"></GIcon>
        <div class="content">
            <!-- slot 不能单独加上class -->
            <slot></slot>
        </div>
    </button>
</template>
<script>
import GIcon from '../icons/icon'
export default {
    props:{
        icon:String,
        iconPosition:{
            type:String,
            default: 'left',
            // 属性检查器
            validator:(val)=>{
                return val === 'left' || val === 'right' ? true : false
            }
        },
        loading:{
            type:Boolean,
            default:false
        },
        disabled:{
            type:Boolean,
            default:false
        }
    },
    components:{GIcon}
}
</script>
<style lang="scss" scoped>
@import '../../style/var/var.scss';
@keyframes spin {
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
}
.g-button{
    display:inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;//让按钮和外面的元素水平对齐
    border-radius: $button-border-radius;
    line-height: $button-line-height;
    padding: 0 .7em;
    background-color: #fff;
    border: 1px solid #999;
    cursor: pointer;
    & .loading{
        animation: spin 2s linear infinite;
    }
    &:hover{
        border: 1px solid #666;
    }
    &:focus{
        outline: none;
        border: 1px solid #333;
    }
    &:active{
        background: #F7F7FA;
    }
    &.icon-left {
        > .icon{ order: 1;margin-right: .3em;}
        > .content{order: 2;}
    };
    &.icon-right > {
        .icon{order: 2;margin-left: .3em; margin-right: 0;}
        .content{order: 1;}
    }
}
</style>