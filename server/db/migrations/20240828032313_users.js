export function up(knex) {
  return knex.schema.createTable(
    'users',
    (table) => (
      table.integer('id').primary(),
      table.string('user_auth'),
      table.string('name'),
      table.string('user_type')
    ),
  )
}

export function down(knex) {
  return knex.schema.dropTable('users')
}
