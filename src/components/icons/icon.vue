<template>
    <svg class="g-icon" aria-hidden="true">
        <use :xlink:href="`#icon${name}`"></use>
    </svg>
</template>
<script>
export default {
    props:{
        name:String
    }
}
</script>
<style lang="scss" scoped>
.g-icon{
    width: 1.1em;
    height: 1.1em;
    vertical-align: -0.15em;
}
</style>