<template>
  <div id="app">
    <entry
      v-for="item in documents"
      v-bind:title="item.title"
      v-bind:id="item.id"
      v-bind:delete_function="createNew"
      v-bind:title_function="createNew"
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
import {getRange} from './ApiClient.js';

export default {
  name: 'app',
  components: {
    entry,
    StickyButton
  },
  methods: {
    createNew: function (id) {
        window.location = '/edit?id=' + id;
    }
  },
  data() { return {
    documents: getRange(0, 100),
    btn: 'New',
  }}
}
</script>
