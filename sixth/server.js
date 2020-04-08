const express = require('express');
const next = require('next');
const routes = require('./routes');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handler = routes.getRequestHandler(app);


app.prepare()
    .then(() => {
        const server = express();

        // server.get('/portfolio/:id', (req, res) => {
        //     const actualPage = '/portfolio';
        //     const queryParams = { id: req.params.id }
        //     console.log("queryParams", queryParams)
        //     app.render(req, res, actualPage, queryParams)
        // });

        server.get('*', (req, res) => {
            console.log("-----running on server side all request------")
            return handler(req, res)
        })

        server.use(handler).listen(3000, (err) => {
            if (err) throw err
            console.log('ready on http//:localhost:3000')
        })
    }).catch((ext) => {
        console.log(ext.stack)
        process.exit(1)
    });