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
  },
  onUpdateTrigger: table => `
  CREATE TRIGGER ${table}_updated_at
  BEFORE UPDATE ON ${table}
  FOR EACH ROW
  EXECUTE PROCEDURE on_update_timestamp();
  `
};
