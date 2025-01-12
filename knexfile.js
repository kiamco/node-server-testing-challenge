// Update with your config settings.

module.exports = {
    development: {
        client: "sqlite3",
        useNullAsDefault: true,
        connection: {
            filename: "./database/games.db3"
        },
        pool: {
            afterCreate: (conn, done) => {
                conn.run("PRAGMA foreign_keys = ON", done);
            }
        },
        migrations: {
            directory: "./database/migrations"
        },
        seeds: {
            directory: "./database/seeds"
        }
    },

    staging: {
        client: "postgresql",
        connection: {
            database: "my_db",
            user: "username",
            password: "password"
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: "knex_migrations"
        }
    },
    testing: {
        client: "sqlite3",
        connection: {
            filename: "./database/test.db3"
        },
        useNullAsDefault: true,
        migrations: {
            directory: "./database/migrations"
        },
        seeds: {
            directory: "./database/seeds"
        }
    },
    production: {
        client: "postgresql",
        connection: {
            database: "my_db",
            user: "username",
            password: "password"
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: "knex_migrations"
        }
    }
};