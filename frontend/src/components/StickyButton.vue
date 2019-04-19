<template>
<div class="fixed-bottom mx-2 my-2 text-light rounded-circle col-1">
    {{ title }}
</div>
</template>

<script>
export default {
    name: 'StickyButton',
    props: {
        title: String
    }
}
</script>

<style scoped>
    div {
        background-color: #380e;
        display: inline-block;
    }

</style>