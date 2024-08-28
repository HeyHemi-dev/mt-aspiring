export function up(knex) {
  return knex.schema.createTable(
    'users',
    (table) => (
      table.integer('id').primary(),
      table.string('user_auth'), // uuid
      table.string('username'), // a-z, 0-9, "-"
      table.string('name'),
      table.string('user_type') // "personal" | "business"
    ),
  )
}

export function down(knex) {
  return knex.schema.dropTable('users')
}
