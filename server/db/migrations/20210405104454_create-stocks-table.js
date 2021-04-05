exports.up = function(knex) {
  let createQuery = `CREATE TABLE stocks(
    id SERIAL PRIMARY KEY NOT NULL,
    symbol VARCHAR,
    url VARCHAR,
    created_at TIMESTAMP
  )`
  return knex.raw(createQuery)
};

exports.down = function(knex) {
  let dropQuery = `DROP TABLE stocks`
  return knex.raw(dropQuery)
}
