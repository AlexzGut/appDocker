"use strict";

const http = require('http'),
    httpStatus = require('http-status-codes');

const port = 3000;

const app = http.createServer();

app.on('request', (request, response) => {
    response.writeHead(httpStatus.StatusCodes.OK, {
        'Content-type' : 'text/json'
    });

    let json = '{ "name" : "Alexander", "last_name" : "Gutierrez", "girlfriend" : "Tatiana Marquez", "city" : "Toronto", "country" : "Canada", "profession" : "Software Developer"}';

    response.end(json);
});

 app.listen(port);