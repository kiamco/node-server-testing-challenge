const Router = require('express').Router();
const GameDb = require('./gamesModel.js');

Router.get('/game', (res, req) => {
    GameDb.find()
        .then(games => {
            res.status(200).json({ games, success: true })
        })
        .catch(err => res.status(500).json({ err, success: false }))
})

module.exports = Router;