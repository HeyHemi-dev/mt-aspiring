export function up(knex) {
  return knex.schema.createTable(
    'user_saved_tiles',
    (table) => (
      table.integer('id').primary(),
      table.string('saved_by'),
      table.string('tile_id')
    ),
  )
}

export function down(knex) {
  return knex.schema.dropTable('user_saved_tiles')
}
