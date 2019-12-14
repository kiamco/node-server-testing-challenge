const db = require('../database/dbConfig.js');

module.exports = {
    add,
    find,
    findBy,
    findById,
};

function find() {
    return db('games').select('id', 'title');
}

function findBy(filter) {
    return db('games').where(filter);
}

async function add(game) {
    const [id] = await db('games').insert(game);

    return findById(id);
}

function findById(id) {
    return db('games')
        .where({
            id
        })
        .first();
}