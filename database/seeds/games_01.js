exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('games').del()
        .then(function() {
            // Inserts seed entries
            return knex('games').insert([
                { title: 'Star Wars' },
                { title: 'God of War' },
                { title: 'Pokemon' }
            ]);
        });
};