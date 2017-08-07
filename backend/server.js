const express = require('express');
const bodyParser = require('body-parser');
// const path = require('path');
const morgan = require('morgan');
const app = express();
const router = express.Router();
const favicon = require('serve-favicon');
const port = 2020;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(favicon(path.join(__dirname, 'favicon.ico')));

require('./routes/index')(router);
app.use('/api', router);

app.use((request, response, next) => {
    response.sendStatus(404);
});

app.use((error, request, response, next) => {
    console.log(`Error while handling ${request.method} on ${request.originalUrl}: `);
    console.log(error.stack);
    if (!response.statusCode) {
        response.status(error.status || 500);
    }
    response.send();
});

app.listen(port, () => {
    console.log('Server is started on localhost:2020');
});

module.exports = app;
