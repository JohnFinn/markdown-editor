export class Document {
    constructor(id, title, content) {
        this.id = id
        this.title = title
        this.content = content
    }
}

export class DocumentDescriptor {
    constructor(id, title) {
        this.id = id
        this.title = title
    }
}

export function getOne(id) {
    // return new Document('abcd', )
}

export function getRange(from, count) {
    return [
        new DocumentDescriptor('abcd', "hello world"),
        new DocumentDescriptor('abcd', "Very interestign to read"),
        new DocumentDescriptor('abcd', "Sonewhat interesting"),
        new DocumentDescriptor('abcd', "Save me to bookmarks"),
        new DocumentDescriptor('abcd', "Empty document"),
        new DocumentDescriptor('abcd', "plz don't change this"),
        new DocumentDescriptor('abcd', "Forgot what it's about"),
        new DocumentDescriptor('abcd', "Skip me")
    ]
}

export function createNew() {
    return '123456789012345678901234'
}

export function update(id, newVersion) {
}
