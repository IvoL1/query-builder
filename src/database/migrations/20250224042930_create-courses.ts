import { table } from 'console';
import type { Knex } from 'knex';
import { text } from 'stream/consumers';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('courses', (table) => {
    table.increments('id').primary(), // ID único
      table.text('name').notNullable(), // Nome do curso
      table.timestamp('created_at').defaultTo(knex.fn.now()); //Data de criação automática
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('courses');
}
