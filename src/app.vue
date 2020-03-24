<template>
    <div class="example">
        <g-button disabled>默认按钮</g-button>
        <g-button :icon="'g-setting'">默认按钮</g-button>
        <g-button @click="handleLoading" :icon="'g-loading'" :icon-position="'right'" :loading="loading">默认按钮</g-button>
    
        <g-button-group>
            <g-button :icon="'g-left'">上一页</g-button>
            <g-button>更多</g-button>
            <g-button :icon="'g-right'">下一页</g-button>
        </g-button-group>
    </div>
</template>
<script>

export default {
    data() {
        return {
            loading:false
        }
    },
    methods: {
        handleLoading(){
            this.loading = !this.loading
        }
    }
}
</script>