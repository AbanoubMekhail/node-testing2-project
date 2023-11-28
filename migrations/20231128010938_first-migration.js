
exports.up = function(knex) {
  return knex.schema
  .createTable("jokes", tbl => {
    tbl.increments("joke_id")
    tbl.text("joke").notNullable()
    tbl.text("punshline").notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("jokes")
};
