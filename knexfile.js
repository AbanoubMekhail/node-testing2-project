// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './dev.sqlite3'
    },
    migrations: {
      directory: './migrations'
    },

    seeds: {
      directory: "./seeds"
    }
  },
  testing: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './test.db3'
    },
    migrations: {
      directory: './migrations'
    },

    seeds: {
      directory: "./seeds"
    }
  }
};
