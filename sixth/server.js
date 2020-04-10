const express = require('express');
const next = require('next');
const routes = require('./routes');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handler = routes.getRequestHandler(app);


app.prepare()
    .then(() => {
        const server = express();

        server.get('*', (req, res) => {
            console.log("-----running on server side all request------")
            return handler(req, res)
        })

        server.use(handler).listen(3009, (err) => {
            if (err) throw err
            console.log('ready on http//:localhost:3009')
        })
    }).catch((ext) => {
        console.log(ext.stack)
        process.exit(1)
    });