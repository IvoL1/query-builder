export default {
  client: 'sqlite3',
  connection: { filename: './src/database/database.db' }, // Define o arquivo do banco
  pool: {
    afterCreate: (connection: any, done: any) => {
      connection.run('PRAGMA  foreign_keys = ON', done);
    },
  },
  useNullAsDefault: true, // Necessário para SQLite
  migrations: {
    extension: 'ts',
    directory: './src/database/migrations',
  },
  seeds: {
    extension: 'ts',
    directory: './src/database/seeds',
  },
};
