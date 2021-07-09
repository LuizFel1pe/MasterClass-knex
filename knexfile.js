module.exports = {

  development: {
    client: 'postgres',
    connection: {
      database: 'knex_teste',
      user: 'postgres',
      password: '88668876'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './src/database/migrations'
    },
    seeds: {
      directory: './src/database/seeds'
    }
  }
};
