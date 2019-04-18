const express = require('express');
const Document = require('./db_abstraction');

router = express.Router()

router.get('/range/:from(\\d+)/:amount(\\d+)', function(request, response) {
    Document.find({}, {_id:1, title:1})
    .sort( '_id' )
    .skip(parseInt(request.params.from))
    .limit(parseInt(request.params.amount))
    .then(function(docs) {
        response.json(docs)
    })
})

router.get('/one/:id([0-9a-f]{24})', function(request, response) {
    Document.findById(request.params.id)
    .then(function(docs){
        response.json(docs);
    });
})

router.put('/update/:id(\\d+)', function(request, response) {
    response.send('doc updated\n')
})

router.post('/new', function(request, response) {
    response.send('doc inserted with id=')
});

module.exports = router;
