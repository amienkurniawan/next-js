const express = require('express');
const next = require('next');
const routes = require('./routes');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = routes.getRequestHandler(app);


app.prepare()
    .then(() => {
        const server = express();


        // server.get('/article/:id', (req, res) => {
        //     console.log("-----runinng on server side in article-----")
        //     const actualPage = '/article';
        //     const queryParams = { id: req.params.id }
        //     app.render(req, res, actualPage, queryParams)
        // });

        server.get('*', (req, res) => {
            console.log("-----running on server side all request------")
            return handle(req, res)
        })

        server.use(handle).listen(3003, (err) => {
            if (err) throw err
            console.log('ready on http//:localhost:3003')
        })
    }).catch((ext) => {
        console.log(ext.stack)
        process.exit(1)
    });