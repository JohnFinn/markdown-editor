#!/usr/bin/node
const app = require('express')();
const api = require('./routers');

app.use(function(request, response, next) {
    console.log(`${request.connection.remoteAddress}:${request.connection.remotePort}`);
    next();
});

app.use('/', api)

require('yargs')
    .command('serve [port]',  'start the server',
        (yargs) => { yargs
            .positional('port', {
                describe: 'port to bind on',
                default: 80,
                type: 'number'
            })
        }, (argv) => {
            console.info(`start server on :${argv.port}`)
            app.listen(argv.port);
        }
    ).argv;
