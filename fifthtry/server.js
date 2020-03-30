const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev })
const handle = app.getRequestHandler();


app.prepare()
    .then(() => {
        const server = express();


        server.get('/article/:id', (req, res) => {
            const actualPage = '/article';
            const queryParams = { id: req.params.id }
            app.render(req, res, actualPage, queryParams)
        });

        server.get('*', (req, res) => {
            return handle(req, res)
        })

        server.listen(3003, (err) => {
            if (err) throw err
            console.log('ready on http//:localhost:3003')
        })
    }).catch((ext) => {
        console.log(ext.stack)
        process.exit(1)
    });