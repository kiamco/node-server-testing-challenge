exports.up = function(knex) {
    return knex.schema.createTable('games', games => {
        games.increments();
        games.string('title').notNullable().unique();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('games');
};