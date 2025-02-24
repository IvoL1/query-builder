export default {
  client: 'sqlite3',
  connection: { filename: './src/database/database.db' }, // Define o arquivo do banco
  useNullAsDefault: true, // Necessário para SQLite
  migrations: {
    extensions: 'ts',
    directory: './src/database/migrations',
  },
};
