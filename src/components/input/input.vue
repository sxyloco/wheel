<template>
    <div class="g-input" :class="{error}">
        <input type="text" :value="value" :disabled="disabled" :error="error"
            @input="onInput"
            @change="onChange"
        >
        <template v-if="error">
            <Icon :name="'g-setting'" class="icon-error"></Icon>
            <span class="message-error">{{error}}</span>
        </template>
    </div>
</template>
<script>
import Icon from '../icons/icon'
export default {
    name:'gInput',
    components:{Icon},
    props:{
        value:[String,Number],
        disabled:{
            type:Boolean,
            default:false
        },
        error:{
            type:String
        }
    },
    methods:{
        onInput(e) {
            let val = e.target.value
            this.$emit('input',val)
        },
        onChange(e) {
            let val = e.target.value
            this.$emit('change',e,val)
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../style/var/var.scss';
$boxshow-color:rgba(0,0,0,0.5);
$disabled-color:#333;
$hover-color:#848488;
$red-color:#ef0e0e;
.g-input{
    font-size: $font-size;
    display: inline-flex;
    align-items: center;
    > :not(:last-child){
        margin-right: .5em;
    }
    > input{
        height: 36px;
        padding: 3px 8px;
        background: #FFFFFF;
        border: 1px solid #E5E5EA;
        border-radius: $input-border-radius;
        &:hover{
            border: 1px solid $hover-color;
        }
        &:focus{
            outline: none;
            border-radius: $input-border-radius;
            box-shadow: inset 0 1px 3px $boxshow-color;
        }
        &[disabled]{
            background: #F7F7FA;
            color: $disabled-color;
            cursor: not-allowed;
        }
    }
}
.error{
    > input,> input:focus,>input:hover{
        border-color: $red-color;
    }
    > input:focus{
        box-shadow: inset 0 1px 3px $red-color;
    }
}
.icon-error{
    fill: $red-color;
}
.message-error{
    color: $red-color;
}
</style>