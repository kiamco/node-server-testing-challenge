const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

// import game route

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

// use game routes

module.exports = server;