export default {
  client: 'sqlite3',
  connection: { filename: './src/database/database.db' }, // Define o arquivo do banco
  useNullAsDefault: true, // Necessário para SQLite
  migrations: {
    extension: 'ts',
    directory: './src/database/migrations',
  },
};
