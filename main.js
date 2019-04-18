#!/usr/bin/node
const app = require('express')();
const api = require('./routers');
const mongoose = require('mongoose');

app.use(function(request, response, next) {
    console.log(`${request.connection.remoteAddress}:${request.connection.remotePort}`);
    next();
});

app.use('/', api)

require('yargs')
    .command('serve [port] [database] [timeout]',  'start the server',
        (yargs) => { yargs
            .positional('port', {
                describe: 'port to bind on',
                default: 80,
                type: 'number'
            })
            .positional('database', {
                describe: 'mongodb uri to use',
                default: 'mongodb://localhost/documents',
                type: 'uri'
            })
            .positional('timeout', {
                describe: 'connection to mongodb timeout',
                default: 500,
                type: 'number'
            })
        }, (argv) => {
            process.stdout.write(`connecting to ${argv.database}\r`)
            mongoose.connect(argv.database, {
                useNewUrlParser: true,
                connectTimeoutMS: argv.timeout,
            });
            var db = mongoose.connection;
            db.on('error', function() {
                console.log(`unable to connect to ${argv.database}`)
            });
            db.once('open', function() {
                console.log(`successfully connected to ${argv.database}`)
                console.log(`start server on port ${argv.port}`)
                app.listen(argv.port);
            });
        }
    ).argv;
