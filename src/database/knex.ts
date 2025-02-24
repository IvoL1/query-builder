import { knex as k } from 'knex';
import config from '../../knexfile';

export const knex = k(config);
