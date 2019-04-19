<template>
  <div id="app">
    <entry
      v-for="item in documents"
      v-bind:title="item.title"
      v-bind:id="item.id"
    />
    <StickyButton
        v-bind:title="btn"
        @click.native="createNew"
    />
  </div>
</template>

<script>
import entry from './components/entry.vue';
import StickyButton from './components/StickyButton.vue';

class Document {
  constructor(id, title) {
    this.title = title;
    this.id = id;
  }
}

export default {
  name: 'app',
  components: {
    entry,
    StickyButton
  },
  methods: {
    createNew: function () {
      alert('hello world')
    }
  },
  data() { return {
    documents: [
      new Document('abcd', "hello world"),
      new Document('abcd', "Very interestign to read"),
      new Document('abcd', "Sonewhat interesting"),
      new Document('abcd', "Save me to bookmarks"),
      new Document('abcd', "Empty document"),
      new Document('abcd', "plz don't change this"),
      new Document('abcd', "Forgot what it's about"),
      new Document('abcd', "Skip me"),
    ],
    btn: '+',
  }}
}
</script>
