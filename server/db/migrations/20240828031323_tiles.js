export function up(knex) {
  return knex.schema.createTable(
    'tiles',
    (table) => (
      table.integer('id').primary(),
      table.string('image_path'),
      table.string('title'),
      table.string('description'),
      table.string('created_at'), // "YYYY-MM-DD HH:MM:SS.SSS"
      table.string('created_by'),
      table.integer('is_private'), // 1 | 0
      table.integer('location_id')
    ),
  )
}

export function down(knex) {
  return knex.schema.dropTable('tiles')
}
