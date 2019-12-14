const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const GameRouter = require('../games/gamesRouter.js')
    // import game route

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

// use game routes
server.use('/api', GameRouter)

server.get("/", (req, res) => {
    res.status(200).json({ api: "running" });
});
module.exports = server;