<template>
    <div>
    <div class="row mx-0 fixed-top">
        <div class="col-10 bg-secondary">
            <input
                id="title"
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
    <div class="row mx-0 mt-4">
        <div class="col-6" contenteditable="true" id="editor"></div>
        <div class="col-6" v-html="compiled"></div>
    </div>
    </div>
</template>

<script>
import marked from 'marked'
import { getOne, update } from "./ApiClient"

export default {
    name: "markdownEditor",
    methods: {
        back() {
            window.location = '/'
        },
        save() {
            update(this.id, {
                title: document.getElementById("title").value,
                content: document.getElementById("editor").innerText
            })
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
        title: '',
        compiled: '',
        id: new URLSearchParams(window.location.search).get('id')
    }},
    async mounted() {
        let doc = await getOne(this.id)
        this.title = doc.title
        this.compiled = marked(doc.content)
        let outerThis = this
        document.getElementById('editor').innerText = doc.content
        document.getElementById("editor").addEventListener("input", function() {
            outerThis.compiled = marked(document.getElementById("editor").innerText)
        }, false);
    }
}

</script>
