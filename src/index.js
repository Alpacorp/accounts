const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const path = require('path');

//Initializations
const server = express();
server.use(cors());
server.use(bodyparser.json());
server.use('/static', express.static('./static/'));

//Routes
server.use(require('./routes/users'));
server.use(require('./routes/media'));
server.use(require('./routes/mentions'));
server.use(require('./routes/agents'));
server.use(require('./routes/profiles'));
server.use(require('./routes/cities'));

//Middlewares
// const { transformNompropText } = require('./middlewares/middlewares');
// server.use(require('./middlewares/middlewares'));

//Settings
server.set('port', process.env.PORT || 7000);
const signature = "A1p4c0rp";

//Start server
server.listen(server.get('port'), () => {
    console.log("Initialized server in port", server.get('port'));
});