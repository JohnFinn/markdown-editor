<template>
    <div>
    <div class="row mx-0">
        <div class="col-10 bg-secondary">title name</div>
        <div class="col-1 bg-dark text-light">Save</div>
        <div class="col-1 bg-secondary">Back</div>
    </div>
    <div class="row mx-0">
        <div class="col-6 bg-secondary">markdown<br/></div>
        <div class="col-6 bg-dark text-light">html</div>
    </div>
    </div>
</template>

<script>
export default {
    name: "markdownEditor"
}

var a = new URLSearchParams(window.location.search).get('id')
console.log(a)

</script>
