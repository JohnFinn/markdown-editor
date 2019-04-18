const express = require('express');

router = express.Router()

router.get('/range/:from(\\d+)/:to(\\d+)', function(request, response) {
    response.send('[all, the, documents]')
})

router.get('/one/:id(\\d+)', function(request, response) {
    response.send('### Markdown\ndocument\n')
})

router.put('/update/:id(\\d+)', function(request, response) {
    response.send('doc updated\n')
})

router.post('/new', function(request, response) {
    response.send('doc inserted with id=')
});

module.exports = router;
