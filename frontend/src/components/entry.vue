<template>
<div style="background-color: #ccc;" class="row my-1">
    <div class="col-11">
        {{title}}
    </div>
    <div style="background-color: #bbb" class="col-1">
        delete
    </div>
</div>
</template>
<script>
export default {
    name: 'entry',
    props: {
        title: String
        // link: String,
    }
}
</script>
