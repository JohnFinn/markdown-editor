const app = require('express')();

app.use(function(request, response, next) {
    console.log(`${request.connection.remoteAddress}:${request.connection.remotePort}`);
    next();
});

app.listen(3000);
