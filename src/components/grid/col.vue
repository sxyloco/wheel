<template>
    <div class="col">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'g-col'
}
</script>
<style lang="scss" scoped>
.col{
   width: 50%;
   background: rgba(0,146,255,.75);
   border: 1px solid pink;

}
</style>