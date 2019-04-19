<template>
<div style="background-color: #ccc;" class="row my-1 mx-0">
    <div class="col-11" v-on:click="title_function(id)">
        {{title}}
    </div>
    <div style="background-color: #bbb" class="col-1" v-on:click="delete_function(id)">
        delete
    </div>
</div>
</template>
<script>
export default {
    name: 'entry',
    props: {
        title: String,
        id: String,
        delete_function: Function,
        title_function: Function
    }
}
</script>
