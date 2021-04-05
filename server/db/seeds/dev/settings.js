
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('settings').del()
    .then(function () {
      // Inserts seed entries
      return knex('settings').insert([
        {id: 1, key: 'cpt', value: '3'},
        {id: 2, key: 'high_fpi', value: '2'},
        {id: 3, key: 'low_fpi', value: '15'}
      ]);
    });
};
