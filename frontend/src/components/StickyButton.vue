<template>
<div
     class="fixed-bottom mx-2 my-2 text-light rounded-circle col-1"
     @mouseenter="hover"
     @mouseleave="leave"
>
    {{ title }}
</div>
</template>

<script>
export default {
    name: 'StickyButton',
    methods:{
        hover(arg) {
            arg.target.style.backgroundColor = '#3c0'
        },
        leave(arg) {
            arg.target.style.backgroundColor = '#380c'
        },
    },
    props: {
        title: String
    }
}
</script>

<style scoped>
    div {
        background-color: #380c;
        display: inline-block;
    }
</style>
