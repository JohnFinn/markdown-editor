<template>
  <div id="app">
    <entry
      v-for="item in documents"
      v-bind:title="item.title"
      v-bind:id="item._id"
      v-bind:delete_function="deleteOneAndRefresh"
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
import {getRange, createNew, deleteOne} from './ApiClient.js';

export default {
  name: 'app',
  components: {
    entry,
    StickyButton
  },
  methods: {
    async deleteOneAndRefresh(id) {
      if (confirm('do you really want to delete this document?')){
        await deleteOne(id)
        this.documents = await getRange(0, 100)
      }
    },
    async createNewAndOpen() {
      window.location = '/edit?id=' + await createNew()
    },
    open(id) {
      window.location = '/edit?id=' + id
    }
  },
  data() { return {
    documents: [],
    btn: 'New',
  }},
  async mounted() {
    this.documents = await getRange(0, 100)
  }
}
</script>
