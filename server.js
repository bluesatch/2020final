// build server
const express = require('express');
// security
const helmet = require('helmet');
const cors = require('cors');
// start server & attach security
const server = express()
    .use(helmet())
    .use(cors())
    .use(express.json());

const router = require('./app/routes/router');
server.use('/api', router);

const PORT = process.env.PORT || 3000;
server.listen(PORT, ()=> {
    console.log(`Server on port: ${PORT}`);
});

// next router.js 