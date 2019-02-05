
exports.up = function(knex, Promise) {
  return knex.schema.createTable('adventures', tbl => {
    tbl.increments();
    // foreign key
    tbl
      .integer('user_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users');
    tbl.string('adventure_type', 128).notNullable();
    tbl.string('title', 128);
    tbl.string('location', 128).notNullable();
    tbl.string('duration', 128);
    tbl.text('description');
    tbl.boolean('professional').defaultTo(false);
    tbl.string('date', 128);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('adventures');
};
