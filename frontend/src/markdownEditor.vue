<template>
    <div>
    <div class="row mx-0">
        <div class="col-10 bg-secondary">
            <input
                class="form-control form-control-sm"
                type="text"
                placeholder="Large input"
                v-bind:value="title"
            >
        </div>
        <div
            style="background-color: #787"
            class="col-1"
            @mouseover="saveHover"
            @mouseleave="saveLeave"
            @mousedown="save"
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
        <div class="col-6 bg-secondary" contenteditable="true">
            {{ markdown }}
        </div>
        <div class="col-6 bg-dark text-light" id="compiled">
        </div>
    </div>
    </div>
</template>

<script>
import marked from 'marked'
import { getOne } from "./ApiClient"

export default {
    name: "markdownEditor",
    methods: {
        back() {
            window.location = '/'
        },
        save() {
            alert('TODO implement save')
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
    },
    data() { return {
        markdown: '',
        title: '',
    }},
    async mounted() {
        let id = new URLSearchParams(window.location.search).get('id')
        let doc = await getOne(id)
        this.markdown = doc.content
        this.title = doc.title
        document.getElementById("compiled").innerHTML = marked(this.markdown)
    }
}

</script>
