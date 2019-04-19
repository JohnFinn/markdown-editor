<template>
<div style="background-color: #ccc;" class="row my-1 mx-0">
    <div
        class="col-11"
        v-on:click="title_function(id)"
        @mouseenter="title_hover"
        @mouseleave="title_leave"
    >
        {{title}}
    </div>
    <div
        style="background-color: #bbb"
        class="col-1 del"
        v-on:click="delete_function(id)"
        @mouseenter="delete_hover"
        @mouseleave="delete_leave"
    >
        delete
    </div>
</div>
</template>
<script>
export default {
    name: 'entry',
    methods:{
        delete_hover(arg) {
            arg.target.style.backgroundColor = '#f00'
            arg.target.style.color = '#fff'
        },
        delete_leave(arg) {
            arg.target.style.backgroundColor = '#bbb'
            arg.target.style.color = '#000'
        },
        title_hover(arg) {
            arg.target.style.backgroundColor = '#565e87'
            arg.target.style.color = '#fff'
        },
        title_leave(arg) {
            arg.target.style.backgroundColor = '#ccc'
            arg.target.style.color = '#000'
        }
    },
    props: {
        title: String,
        id: String,
        delete_function: Function,
        title_function: Function
    }
}
</script>
