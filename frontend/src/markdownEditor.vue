<template>
    <div>
    <div class="row mx-0">
        <div class="col-10 bg-secondary">
            <input class="form-control form-control-sm" type="text" placeholder="Large input">
        </div>
        <div
            style="background-color: #787"
            class="col-1"
            @mouseover="saveHover"
            @mouseleave="saveLeave"
        >
            Save
        </div>
        <div
            style="background-color: #568"
            class="col-1"
            @mousedown="back"
            @mouseover="backHover"
            @mouseleave="backLeave"
        >
            Back
        </div>
    </div>
    <div class="row mx-0">
        <div class="col-6 bg-secondary">markdown<br/></div>
        <div class="col-6 bg-dark text-light">html</div>
    </div>
    </div>
</template>

<script>
export default {
    name: "markdownEditor",
    methods: {
        back() {
            window.location = '/'
        },
        backHover(arg) {
            arg.target.style.backgroundColor = '#558'
            arg.target.style.color = '#fff'
        },
        backLeave(arg) {
            arg.target.style.backgroundColor = '#568'
            arg.target.style.color = '#000'
        },
        saveHover(arg) {
            arg.target.style.backgroundColor = '#280'
            arg.target.style.color = '#fff'
        },
        saveLeave(arg) {
            arg.target.style.backgroundColor = '#787'
            arg.target.style.color = '#000'
        }
    }
}

var a = new URLSearchParams(window.location.search).get('id')
console.log(a)

</script>
