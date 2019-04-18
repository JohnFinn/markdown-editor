const express = require('express')
const Document = require('./db_abstraction')
const Joi = require('joi')

const schema = Joi.object().keys({
    title: Joi.string(),
    content: Joi.string(),
})

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
        response.json(docs)
    })
})

router.put('/update/:id([0-9a-f]{24})',
    // body validator
    function(request, response, next) {
        const result = Joi.validate(request.body, schema)
        if (result.error === null) next()
        else response.sendStatus(409)
    },
    function(request, response) {
        Document.updateOne({_id: request.params.id}, request.body, function(err) {
            if (err) {
                console.error(err)
                response.sendStatus(500)
            } else {
                console.log('successfully updated')
                response.sendStatus(202)
            }
        })
    }
)

router.post('/new', function(request, response) {
    response.send('doc inserted with id=')
})

module.exports = router
