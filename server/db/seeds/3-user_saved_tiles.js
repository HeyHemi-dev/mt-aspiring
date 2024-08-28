export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('user_saved_tiles').del()
  await knex('user_saved_tiles').insert([
    {
      saved_by: 1,
      tile_id: 5,
    },
    {
      saved_by: 2,
      tile_id: 12,
    },
    {
      saved_by: 3,
      tile_id: 23,
    },
    {
      saved_by: 4,
      tile_id: 34,
    },
    {
      saved_by: 5,
      tile_id: 9,
    },
    {
      saved_by: 1,
      tile_id: 18,
    },
    {
      saved_by: 2,
      tile_id: 45,
    },
    {
      saved_by: 3,
      tile_id: 27,
    },
    {
      saved_by: 4,
      tile_id: 32,
    },
    {
      saved_by: 5,
      tile_id: 15,
    },
    {
      saved_by: 1,
      tile_id: 6,
    },
    {
      saved_by: 2,
      tile_id: 28,
    },
    {
      saved_by: 3,
      tile_id: 37,
    },
    {
      saved_by: 4,
      tile_id: 42,
    },
    {
      saved_by: 5,
      tile_id: 11,
    },
    {
      saved_by: 1,
      tile_id: 21,
    },
    {
      saved_by: 2,
      tile_id: 33,
    },
    {
      saved_by: 3,
      tile_id: 48,
    },
    {
      saved_by: 4,
      tile_id: 14,
    },
    {
      saved_by: 5,
      tile_id: 26,
    },
    {
      saved_by: 1,
      tile_id: 39,
    },
    {
      saved_by: 2,
      tile_id: 17,
    },
    {
      saved_by: 3,
      tile_id: 3,
    },
    {
      saved_by: 4,
      tile_id: 24,
    },
    {
      saved_by: 5,
      tile_id: 47,
    },
    {
      saved_by: 1,
      tile_id: 36,
    },
    {
      saved_by: 2,
      tile_id: 8,
    },
    {
      saved_by: 3,
      tile_id: 44,
    },
    {
      saved_by: 4,
      tile_id: 20,
    },
    {
      saved_by: 5,
      tile_id: 13,
    },
    {
      saved_by: 1,
      tile_id: 35,
    },
    {
      saved_by: 2,
      tile_id: 4,
    },
    {
      saved_by: 3,
      tile_id: 49,
    },
    {
      saved_by: 4,
      tile_id: 25,
    },
    {
      saved_by: 5,
      tile_id: 10,
    },
    {
      saved_by: 1,
      tile_id: 43,
    },
    {
      saved_by: 2,
      tile_id: 29,
    },
    {
      saved_by: 3,
      tile_id: 19,
    },
    {
      saved_by: 4,
      tile_id: 2,
    },
    {
      saved_by: 5,
      tile_id: 46,
    },
    {
      saved_by: 1,
      tile_id: 7,
    },
    {
      saved_by: 2,
      tile_id: 16,
    },
    {
      saved_by: 3,
      tile_id: 31,
    },
    {
      saved_by: 4,
      tile_id: 40,
    },
    {
      saved_by: 5,
      tile_id: 22,
    },
    {
      saved_by: 1,
      tile_id: 38,
    },
    {
      saved_by: 2,
      tile_id: 50,
    },
    {
      saved_by: 3,
      tile_id: 41,
    },
    {
      saved_by: 4,
      tile_id: 30,
    },
    {
      saved_by: 5,
      tile_id: 1,
    },
    {
      saved_by: 1,
      tile_id: 24,
    },
    {
      saved_by: 2,
      tile_id: 6,
    },
    {
      saved_by: 3,
      tile_id: 18,
    },
    {
      saved_by: 4,
      tile_id: 33,
    },
    {
      saved_by: 5,
      tile_id: 28,
    },
    {
      saved_by: 1,
      tile_id: 47,
    },
    {
      saved_by: 2,
      tile_id: 39,
    },
    {
      saved_by: 3,
      tile_id: 12,
    },
    {
      saved_by: 4,
      tile_id: 9,
    },
    {
      saved_by: 5,
      tile_id: 43,
    },
    {
      saved_by: 1,
      tile_id: 17,
    },
    {
      saved_by: 2,
      tile_id: 25,
    },
    {
      saved_by: 3,
      tile_id: 8,
    },
    {
      saved_by: 4,
      tile_id: 50,
    },
    {
      saved_by: 5,
      tile_id: 36,
    },
    {
      saved_by: 1,
      tile_id: 42,
    },
    {
      saved_by: 2,
      tile_id: 19,
    },
    {
      saved_by: 3,
      tile_id: 4,
    },
    {
      saved_by: 4,
      tile_id: 13,
    },
    {
      saved_by: 5,
      tile_id: 26,
    },
    {
      saved_by: 1,
      tile_id: 32,
    },
    {
      saved_by: 2,
      tile_id: 7,
    },
    {
      saved_by: 3,
      tile_id: 31,
    },
    {
      saved_by: 4,
      tile_id: 20,
    },
    {
      saved_by: 5,
      tile_id: 2,
    },
    {
      saved_by: 1,
      tile_id: 10,
    },
    {
      saved_by: 2,
      tile_id: 49,
    },
    {
      saved_by: 3,
      tile_id: 40,
    },
    {
      saved_by: 4,
      tile_id: 16,
    },
    {
      saved_by: 5,
      tile_id: 14,
    },
    {
      saved_by: 1,
      tile_id: 48,
    },
    {
      saved_by: 2,
      tile_id: 22,
    },
    {
      saved_by: 3,
      tile_id: 15,
    },
    {
      saved_by: 4,
      tile_id: 37,
    },
    {
      saved_by: 5,
      tile_id: 3,
    },
    {
      saved_by: 1,
      tile_id: 11,
    },
    {
      saved_by: 2,
      tile_id: 35,
    },
    {
      saved_by: 3,
      tile_id: 46,
    },
    {
      saved_by: 4,
      tile_id: 21,
    },
    {
      saved_by: 5,
      tile_id: 30,
    },
    {
      saved_by: 1,
      tile_id: 34,
    },
    {
      saved_by: 2,
      tile_id: 23,
    },
    {
      saved_by: 3,
      tile_id: 5,
    },
    {
      saved_by: 4,
      tile_id: 29,
    },
    {
      saved_by: 5,
      tile_id: 38,
    },
    {
      saved_by: 1,
      tile_id: 41,
    },
    {
      saved_by: 2,
      tile_id: 45,
    },
    {
      saved_by: 3,
      tile_id: 44,
    },
    {
      saved_by: 4,
      tile_id: 27,
    },
    {
      saved_by: 5,
      tile_id: 6,
    },
    {
      saved_by: 1,
      tile_id: 50,
    },
    {
      saved_by: 2,
      tile_id: 18,
    },
    {
      saved_by: 3,
      tile_id: 11,
    },
    {
      saved_by: 4,
      tile_id: 39,
    },
    {
      saved_by: 5,
      tile_id: 42,
    },
    {
      saved_by: 1,
      tile_id: 17,
    },
    {
      saved_by: 2,
      tile_id: 10,
    },
    {
      saved_by: 3,
      tile_id: 24,
    },
    {
      saved_by: 4,
      tile_id: 14,
    },
    {
      saved_by: 5,
      tile_id: 19,
    },
    {
      saved_by: 1,
      tile_id: 3,
    },
    {
      saved_by: 2,
      tile_id: 43,
    },
    {
      saved_by: 3,
      tile_id: 32,
    },
    {
      saved_by: 4,
      tile_id: 4,
    },
    {
      saved_by: 5,
      tile_id: 13,
    },
    {
      saved_by: 1,
      tile_id: 21,
    },
    {
      saved_by: 2,
      tile_id: 34,
    },
    {
      saved_by: 3,
      tile_id: 37,
    },
    {
      saved_by: 4,
      tile_id: 29,
    },
    {
      saved_by: 5,
      tile_id: 9,
    },
    {
      saved_by: 1,
      tile_id: 26,
    },
    {
      saved_by: 2,
      tile_id: 6,
    },
    {
      saved_by: 3,
      tile_id: 50,
    },
    {
      saved_by: 4,
      tile_id: 22,
    },
    {
      saved_by: 5,
      tile_id: 20,
    },
    {
      saved_by: 1,
      tile_id: 15,
    },
    {
      saved_by: 2,
      tile_id: 8,
    },
    {
      saved_by: 3,
      tile_id: 12,
    },
    {
      saved_by: 4,
      tile_id: 41,
    },
    {
      saved_by: 5,
      tile_id: 45,
    },
    {
      saved_by: 1,
      tile_id: 48,
    },
    {
      saved_by: 2,
      tile_id: 28,
    },
    {
      saved_by: 3,
      tile_id: 39,
    },
    {
      saved_by: 4,
      tile_id: 7,
    },
    {
      saved_by: 5,
      tile_id: 33,
    },
    {
      saved_by: 1,
      tile_id: 11,
    },
    {
      saved_by: 2,
      tile_id: 31,
    },
    {
      saved_by: 3,
      tile_id: 40,
    },
    {
      saved_by: 4,
      tile_id: 5,
    },
    {
      saved_by: 5,
      tile_id: 18,
    },
    {
      saved_by: 1,
      tile_id: 47,
    },
    {
      saved_by: 2,
      tile_id: 25,
    },
    {
      saved_by: 3,
      tile_id: 14,
    },
    {
      saved_by: 4,
      tile_id: 23,
    },
    {
      saved_by: 5,
      tile_id: 1,
    },
    {
      saved_by: 1,
      tile_id: 2,
    },
    {
      saved_by: 2,
      tile_id: 22,
    },
    {
      saved_by: 3,
      tile_id: 29,
    },
    {
      saved_by: 4,
      tile_id: 13,
    },
    {
      saved_by: 5,
      tile_id: 43,
    },
    {
      saved_by: 1,
      tile_id: 17,
    },
    {
      saved_by: 2,
      tile_id: 9,
    },
    {
      saved_by: 3,
      tile_id: 16,
    },
    {
      saved_by: 4,
      tile_id: 28,
    },
    {
      saved_by: 5,
      tile_id: 19,
    },
    {
      saved_by: 1,
      tile_id: 30,
    },
    {
      saved_by: 2,
      tile_id: 42,
    },
    {
      saved_by: 3,
      tile_id: 33,
    },
    {
      saved_by: 4,
      tile_id: 15,
    },
    {
      saved_by: 5,
      tile_id: 24,
    },
    {
      saved_by: 1,
      tile_id: 38,
    },
    {
      saved_by: 2,
      tile_id: 50,
    },
    {
      saved_by: 3,
      tile_id: 37,
    },
    {
      saved_by: 4,
      tile_id: 6,
    },
    {
      saved_by: 5,
      tile_id: 12,
    },
    {
      saved_by: 1,
      tile_id: 35,
    },
    {
      saved_by: 2,
      tile_id: 21,
    },
    {
      saved_by: 3,
      tile_id: 46,
    },
    {
      saved_by: 4,
      tile_id: 20,
    },
    {
      saved_by: 5,
      tile_id: 26,
    },
    {
      saved_by: 1,
      tile_id: 4,
    },
    {
      saved_by: 2,
      tile_id: 3,
    },
    {
      saved_by: 3,
      tile_id: 40,
    },
    {
      saved_by: 4,
      tile_id: 48,
    },
    {
      saved_by: 5,
      tile_id: 7,
    },
    {
      saved_by: 1,
      tile_id: 19,
    },
    {
      saved_by: 2,
      tile_id: 8,
    },
    {
      saved_by: 3,
      tile_id: 14,
    },
    {
      saved_by: 4,
      tile_id: 34,
    },
    {
      saved_by: 5,
      tile_id: 10,
    },
    {
      saved_by: 1,
      tile_id: 45,
    },
    {
      saved_by: 2,
      tile_id: 16,
    },
    {
      saved_by: 3,
      tile_id: 50,
    },
    {
      saved_by: 4,
      tile_id: 25,
    },
    {
      saved_by: 5,
      tile_id: 31,
    },
  ])
}
