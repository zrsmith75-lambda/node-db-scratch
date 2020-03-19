
exports.up = function(knex) {
  return knex.schema
    .createTable('characters', bob =>  {
      bob
        .increments()
      bob
        .string('name', 128)
        .notNullable()
        .unique()
      bob
        .string('gender', 128)
        .notNullable()
      bob
        .string('imageUrl', 256)
        .notNullable()
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('characters')
};
