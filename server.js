//this si the copy that works
const express = require('express');
const configureMiddleware = require('./config/middleware');
const configureUserRoutes = require('./config/userRoutes');
const configureAdventuresRoutes = require('./config/adventuresRoutes');

// const configureRoutes = require('./config/routes');


const server = express();

//middleware 
configureMiddleware(server);
configureUserRoutes(server);
configureAdventuresRoutes(server);

// configureRoutes(server);


module.exports = server 
