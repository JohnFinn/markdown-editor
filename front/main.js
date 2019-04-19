Vue.component( 'entry', {
    props: ['title', 'id'],
    template: '<div style="margin: 1px"> {{title}} </div>'
})

class Document {
    constructor(id, title) {
        this.title = title;
        this.id = id;
    }
}

var app = new Vue({
    el: '#app',
    data: {
        documents: [
            new Document('abcd', "hello world"),
            new Document('abcd', "Very interestign to read"),
            new Document('abcd', "Sonewhat interesting"),
            new Document('abcd', "Save me to bookmarks"),
            new Document('abcd', "Empty document"),
            new Document('abcd', "plz don't change this"),
            new Document('abcd', "Forgot what it's about"),
            new Document('abcd', "Skip me"),
        ]
    }
})
