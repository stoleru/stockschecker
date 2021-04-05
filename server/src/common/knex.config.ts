import Knex from 'knex';
const environment: string = process.env.NODE_ENV || 'development';
import configuration = require('../../knexfile');
const database = Knex(configuration.default[environment]);

export default database;