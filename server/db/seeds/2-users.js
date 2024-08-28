export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {
      user_auth: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
      username: 'aimee-and-jay-2024',
      name: 'Aimee',
      user_type: 'personal',
    },
    {
      user_auth: 'c9bf9e57-1685-4c89-bafb-ff5af830be8a',
      username: 'kiwi-weddings-co',
      name: 'Kiwi Weddings Co.',
      user_type: 'business',
    },
    {
      user_auth: 'e58bfc70-2877-4e58-939d-b4d1e1b2c2a0',
      username: 'lucas-and-jess-2025',
      name: 'Lucas',
      user_type: 'personal',
    },
    {
      user_auth: 'dc8f6d90-59cb-47ed-82a8-3b06c0df9d97',
      username: 'blissful-events-nz',
      name: 'Blissful Events',
      user_type: 'business',
    },
    {
      user_auth: '5d82e3b2-5b1e-4c88-88f1-0e564c5d9d48',
      username: 'sophie-and-ben-2024',
      name: 'Sophie',
      user_type: 'personal',
    },
  ])
}
