import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Inserts seed entries
  await knex('courses').insert([
    { name: 'Typescript' },
    { name: 'Node.js' },
    { name: 'Banco de dados' },
    { name: 'React' },
    { name: 'Git' },
    { name: 'Github' },
    { name: 'Express' },
  ]);
}
