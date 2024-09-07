export function up(knex) {
  return knex.schema.alterTable(
    'user_saved_tiles',
    (table) => (
      table.integer('is_saved'), table.integer('updated_at') //UNIX date
    ),
  )
}

export function down(knex) {
  return knex.schema.alterTable(
    'user_saved_tiles',
    (table) => (table.dropColumn('is_saved'), table.dropColumn('updated_at')),
  )
}
