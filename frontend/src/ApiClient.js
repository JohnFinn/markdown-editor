export class Document {
    constructor(id, title, content) {
        this.id = id
        this.title = title
        this.content = content
    }
}

export async function getOne(id) {
    let result = await getAsync(`api/one/${id}`)
    return JSON.parse(result)
}

export async function getRange(from, count) {
    let result = await getAsync(`api/range/${from}/${count}`)
    return JSON.parse(result)
}

export async function createNew() {
    let result = await postAsync(`api/new`, '')
    return JSON.parse(result).id;
}

export function update(id, newVersion) {
    return putAsync(`api/put`, newVersion)
}

function getAsync(url) {
    return makeRequest('GET', url, '')
}

function postAsync(url, payload) {
    return makeRequest('POST', url, payload)
}

function putAsync(url, payload) {
    return makeRequest('PUT', url, payload)
}

function makeRequest(method, url, payload) {
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.setRequestHeader('Content-type', 'application/json')
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.send(payload);
    });
}
