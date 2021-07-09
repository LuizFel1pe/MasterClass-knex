
exports.seed = knex => {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(() => {
      // Inserts seed entries
      return knex('projects').insert([
        {
          user_id: 1,
          title: 'Knex Project'
        }
      ]);
    });
};
