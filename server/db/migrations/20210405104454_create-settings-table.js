exports.up = function(knex) {
  let createQuery = `CREATE TABLE settings(
    id SERIAL PRIMARY KEY NOT NULL,
    key VARCHAR,
    value VARCHAR,
    created_at TIMESTAMP
  )`
  return knex.raw(createQuery)
};

exports.down = function(knex) {
  let dropQuery = `DROP TABLE settings`
  return knex.raw(dropQuery)
}
