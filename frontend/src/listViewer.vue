<template>
  <div id="app">
    <entry
      v-for="item in documents"
      v-bind:title="item.title"
      v-bind:id="item.id"
      v-bind:delete_function="sampleFn"
      v-bind:title_function="open"
    />
    <StickyButton
        v-bind:title="btn"
        @click.native="createNewAndOpen"
    />
  </div>
</template>

<script>
import entry from './components/entry.vue';
import StickyButton from './components/StickyButton.vue';
import {getRange, createNew} from './ApiClient.js';

export default {
  name: 'app',
  components: {
    entry,
    StickyButton
  },
  methods: {
    sampleFn: function (id) {
      alert('hello world')
    },
    createNewAndOpen() {
      window.location = '/edit?id=' + createNew()
    },
    open(id) {
      window.location = '/edit?id=' + id
    }
  },
  data() { return {
    documents: getRange(0, 100),
    btn: 'New',
  }}
}
</script>
