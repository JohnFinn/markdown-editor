import 'bootstrap/dist/css/bootstrap.min.css'
import Vue from 'vue'
import ListViewer from './listViewer.vue'
import MarkdownEditor from './markdownEditor'

Vue.config.productionTip = false

const routes = {
  '/': ListViewer,
  '/edit': MarkdownEditor
}

new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  render (h) { return h(this.ViewComponent) }
})
