const db = require('../database/dbConfig.js');

// the data access file we are testing
const GamesDb = require('./gamesModel');

beforeEach(async() => {
    // this function executes and clears out the table before each test
    await db('games').truncate();
});

describe('game model', () => {
    describe('insert()', () => {
        it('should insert the provided games into the db', async() => {
            // this code expects that the table is empty, we'll handle that below
            // add data to the test database using the data access file
            await GamesDb.add({
                title: 'Call of duty'
            });
            await GamesDb.add({
                title: 'lord of the rings'
            });

            // read data from the table
            const games = await db('games');

            // verify that there are now two records inserted
            expect(games).toHaveLength(2);
        });
    })
})