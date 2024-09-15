export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('tiles').del()
  await knex('tiles').insert([
    {
      image_path:
        'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80',
      title: 'Rustic Barn Wedding Inspiration',
      description:
        'Ideas for a charming rustic wedding in a barn setting with vintage decor and floral arrangements.',
      created_at: '2024-08-28T09:12:34Z',
      created_by: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
      is_private: 0,
      location_id: null,
    },
    {
      image_path:
        'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80',
      title: 'Beach Wedding Venues in NZ',
      description:
        'A curated list of stunning beach wedding locations across New Zealand.',
      created_at: '2024-08-28T10:45:22Z',
      created_by: 'c9bf9e57-1685-4c89-bafb-ff5af830be8a',
      is_private: 0,
      location_id: null,
    },
    {
      image_path:
        'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80',
      title: 'Elegant Floral Wedding Bouquets',
      description:
        'Beautiful floral bouquet ideas for an elegant and sophisticated wedding theme.',
      created_at: '2024-08-28T11:27:59Z',
      created_by: 'e58bfc70-2877-4e58-939d-b4d1e1b2c2a0',
      is_private: 0,
      location_id: null,
    },
    {
      image_path:
        'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80',
      title: 'Top Wedding Planners in Wellington',
      description:
        'A list of the best wedding planners in Wellington to help you organize your big day.',
      created_at: '2024-08-28T12:03:15Z',
      created_by: 'dc8f6d90-59cb-47ed-82a8-3b06c0df9d97',
      is_private: 0,
      location_id: null,
    },
    {
      image_path:
        'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80',
      title: 'DIY Wedding Centerpieces',
      description:
        'Creative and budget-friendly DIY ideas for wedding centerpieces.',
      created_at: '2024-08-28T12:48:07Z',
      created_by: '5d82e3b2-5b1e-4c88-88f1-0e564c5d9d48',
      is_private: 0,
      location_id: null,
    },
    {
      image_path:
        'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80',
      title: 'Modern Wedding Cake Designs',
      description: 'A showcase of sleek and stylish modern wedding cake ideas.',
      created_at: '2024-08-28T13:12:34Z',
      created_by: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
      is_private: 0,
      location_id: null,
    },
    {
      image_path:
        'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80',
      title: 'NZ Vineyard Wedding Inspiration',
      description:
        "Stunning vineyard wedding ideas set among New Zealand's scenic wine regions.",
      created_at: '2024-08-28T13:45:22Z',
      created_by: 'c9bf9e57-1685-4c89-bafb-ff5af830be8a',
      is_private: 0,
      location_id: null,
    },
    {
      image_path:
        'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80',
      title: 'Vintage Wedding Dress Styles',
      description:
        'A collection of beautiful vintage wedding dresses for a classic look.',
      created_at: '2024-08-28T14:27:59Z',
      created_by: 'e58bfc70-2877-4e58-939d-b4d1e1b2c2a0',
      is_private: 0,
      location_id: null,
    },
    {
      image_path:
        'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80',
      title: 'Top Wedding Photographers in NZ',
      description:
        'Find the best wedding photographers in New Zealand for your big day.',
      created_at: '2024-08-28T15:03:15Z',
      created_by: 'dc8f6d90-59cb-47ed-82a8-3b06c0df9d97',
      is_private: 0,
      location_id: null,
    },
    {
      image_path:
        'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80',
      title: 'Outdoor Wedding Lighting Ideas',
      description:
        'Brighten up your outdoor wedding with these creative lighting ideas.',
      created_at: '2024-08-28T15:48:07Z',
      created_by: '5d82e3b2-5b1e-4c88-88f1-0e564c5d9d48',
      is_private: 0,
      location_id: null,
    },
    {
      image_path:
        'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80',
      title: 'Luxury Wedding Venues in Auckland',
      description:
        'Explore the top luxury wedding venues in Auckland for an unforgettable experience.',
      created_at: '2024-08-28T16:12:34Z',
      created_by: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
      is_private: 0,
      location_id: null,
    },
    {
      image_path:
        'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80',
      title: 'Wedding Dress Trends 2025',
      description: 'Discover the latest wedding dress trends for 2025.',
      created_at: '2024-08-28T16:45:22Z',
      created_by: 'c9bf9e57-1685-4c89-bafb-ff5af830be8a',
      is_private: 0,
      location_id: null,
    },
    {
      image_path:
        'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80',
      title: 'NZ Outdoor Wedding Venues',
      description: 'A guide to the best outdoor wedding venues in New Zealand.',
      created_at: '2024-08-28T17:27:59Z',
      created_by: 'e58bfc70-2877-4e58-939d-b4d1e1b2c2a0',
      is_private: 1,
      location_id: null,
    },
    {
      image_path:
        'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80',
      title: 'Eco-Friendly Wedding Ideas',
      description:
        'Green and sustainable wedding ideas for the environmentally conscious couple.',
      created_at: '2024-08-28T18:03:15Z',
      created_by: 'dc8f6d90-59cb-47ed-82a8-3b06c0df9d97',
      is_private: 0,
      location_id: null,
    },
    {
      image_path:
        'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80',
      title: 'Wedding Hair and Makeup Tips',
      description:
        'Expert tips for achieving the perfect wedding hair and makeup look.',
      created_at: '2024-08-28T18:48:07Z',
      created_by: '5d82e3b2-5b1e-4c88-88f1-0e564c5d9d48',
      is_private: 0,
      location_id: null,
    },
    {
      image_path:
        'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80',
      title: 'Boho Chic Wedding Decor',
      description:
        'Inspiration for a boho chic wedding theme with natural and earthy decor.',
      created_at: '2024-08-28T19:12:34Z',
      created_by: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
      is_private: 0,
      location_id: null,
    },
    {
      image_path:
        'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80',
      title: 'Wedding Invitation Design Ideas',
      description:
        'Unique and creative wedding invitation designs to set the tone for your big day.',
      created_at: '2024-08-28T19:45:22Z',
      created_by: 'c9bf9e57-1685-4c89-bafb-ff5af830be8a',
      is_private: 0,
      location_id: null,
    },
    {
      image_path:
        'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80',
      title: 'Elegant Wedding Reception Themes',
      description: 'Ideas for a sophisticated and elegant wedding reception.',
      created_at: '2024-08-28T20:27:59Z',
      created_by: 'e58bfc70-2877-4e58-939d-b4d1e1b2c2a0',
      is_private: 0,
      location_id: null,
    },
    {
      image_path:
        'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80',
      title: 'Best Wedding Caterers in Wellington',
      description: 'Top recommendations for wedding caterers in Wellington.',
      created_at: '2024-08-28T21:03:15Z',
      created_by: 'dc8f6d90-59cb-47ed-82a8-3b06c0df9d97',
      is_private: 0,
      location_id: null,
    },
    {
      image_path:
        'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80',
      title: 'Wedding Favor Ideas',
      description:
        'Thoughtful and memorable wedding favor ideas for your guests.',
      created_at: '2024-08-28T21:48:07Z',
      created_by: '5d82e3b2-5b1e-4c88-88f1-0e564c5d9d48',
      is_private: 1,
      location_id: null,
    },
    {
      image_path:
        'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80',
      title: 'Garden Wedding Inspiration',
      description:
        'Ideas for a beautiful and intimate garden wedding ceremony.',
      created_at: '2024-08-28T22:12:34Z',
      created_by: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
      is_private: 0,
      location_id: null,
    },
    {
      image_path:
        'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80',
      title: 'Bridal Shower Themes',
      description:
        'Fun and creative bridal shower theme ideas for your celebration.',
      created_at: '2024-08-28T22:45:22Z',
      created_by: 'c9bf9e57-1685-4c89-bafb-ff5af830be8a',
      is_private: 0,
      location_id: null,
    },
    {
      image_path:
        'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80',
      title: "Groom's Attire Inspiration",
      description: "Stylish and modern ideas for the groom's wedding attire.",
      created_at: '2024-08-28T23:27:59Z',
      created_by: 'e58bfc70-2877-4e58-939d-b4d1e1b2c2a0',
      is_private: 0,
      location_id: null,
    },
    {
      image_path:
        'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80',
      title: 'Best Wedding Bands in NZ',
      description:
        'A list of the top wedding bands in New Zealand to keep the party going.',
      created_at: '2024-08-28T23:48:07Z',
      created_by: 'dc8f6d90-59cb-47ed-82a8-3b06c0df9d97',
      is_private: 0,
      location_id: null,
    },
    {
      image_path:
        'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80',
      title: 'Top Honeymoon Destinations',
      description: 'Explore the best honeymoon destinations for newlyweds.',
      created_at: '2024-08-29T00:12:34Z',
      created_by: '5d82e3b2-5b1e-4c88-88f1-0e564c5d9d48',
      is_private: 0,
      location_id: null,
    },
    {
      image_path:
        'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80',
      title: 'Winter Wedding Ideas',
      description:
        'Cozy and romantic winter wedding ideas for a magical celebration.',
      created_at: '2024-08-29T00:45:22Z',
      created_by: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
      is_private: 0,
      location_id: null,
    },
    {
      image_path:
        'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80',
      title: 'Unique Wedding Entertainment Ideas',
      description:
        'Creative ideas to entertain your guests on your wedding day.',
      created_at: '2024-08-29T01:27:59Z',
      created_by: 'c9bf9e57-1685-4c89-bafb-ff5af830be8a',
      is_private: 0,
      location_id: null,
    },
    {
      image_path:
        'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80',
      title: 'NZ Wedding Traditions',
      description: 'Explore traditional wedding customs in New Zealand.',
      created_at: '2024-08-29T02:03:15Z',
      created_by: 'e58bfc70-2877-4e58-939d-b4d1e1b2c2a0',
      is_private: 0,
      location_id: null,
    },
    {
      image_path:
        'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80',
      title: 'Wedding Videographer Guide',
      description:
        'How to choose the perfect wedding videographer for your big day.',
      created_at: '2024-08-29T02:48:07Z',
      created_by: 'dc8f6d90-59cb-47ed-82a8-3b06c0df9d97',
      is_private: 0,
      location_id: null,
    },
    {
      image_path:
        'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80',
      title: 'Vegan Wedding Menu Ideas',
      description: 'Delicious vegan menu options for your wedding day.',
      created_at: '2024-08-29T03:12:34Z',
      created_by: '5d82e3b2-5b1e-4c88-88f1-0e564c5d9d48',
      is_private: 0,
      location_id: null,
    },
    {
      image_path:
        'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80',
      title: 'Destination Wedding Planning Tips',
      description:
        'Everything you need to know about planning a destination wedding.',
      created_at: '2024-08-29T03:45:22Z',
      created_by: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
      is_private: 1,
      location_id: null,
    },
    {
      image_path:
        'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80',
      title: 'Best Bridal Shops in NZ',
      description:
        'Find the perfect wedding dress at these top bridal shops in New Zealand.',
      created_at: '2024-08-29T04:27:59Z',
      created_by: 'c9bf9e57-1685-4c89-bafb-ff5af830be8a',
      is_private: 0,
      location_id: null,
    },
    {
      image_path:
        'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80',
      title: 'Romantic Wedding Proposal Ideas',
      description:
        'Creative and romantic wedding proposal ideas to sweep your partner off their feet.',
      created_at: '2024-08-29T05:03:15Z',
      created_by: 'e58bfc70-2877-4e58-939d-b4d1e1b2c2a0',
      is_private: 0,
      location_id: null,
    },
    {
      image_path:
        'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80',
      title: 'Wedding Planning Checklist',
      description:
        'A comprehensive checklist to ensure your wedding day goes smoothly.',
      created_at: '2024-08-29T05:48:07Z',
      created_by: 'dc8f6d90-59cb-47ed-82a8-3b06c0df9d97',
      is_private: 0,
      location_id: null,
    },
    {
      image_path:
        'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80',
      title: 'Wedding Ring Inspiration',
      description:
        'Find the perfect wedding rings with this collection of stunning designs.',
      created_at: '2024-08-29T06:12:34Z',
      created_by: '5d82e3b2-5b1e-4c88-88f1-0e564c5d9d48',
      is_private: 0,
      location_id: null,
    },
    {
      image_path:
        'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80',
      title: 'Small Wedding Ideas',
      description:
        'Tips and ideas for planning an intimate and personal small wedding.',
      created_at: '2024-08-29T06:45:22Z',
      created_by: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
      is_private: 0,
      location_id: null,
    },
    {
      image_path:
        'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80',
      title: 'Destination Wedding Venues',
      description:
        'Explore the best destination wedding venues around the world.',
      created_at: '2024-08-29T07:27:59Z',
      created_by: 'c9bf9e57-1685-4c89-bafb-ff5af830be8a',
      is_private: 1,
      location_id: null,
    },
    {
      image_path:
        'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80',
      title: 'Unique Wedding Cake Flavors',
      description:
        'Creative and delicious wedding cake flavor ideas for your special day.',
      created_at: '2024-08-29T08:03:15Z',
      created_by: 'e58bfc70-2877-4e58-939d-b4d1e1b2c2a0',
      is_private: 0,
      location_id: null,
    },
    {
      image_path:
        'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80',
      title: 'Guide to Wedding Music',
      description:
        'Tips for choosing the perfect music for every part of your wedding day.',
      created_at: '2024-08-29T08:48:07Z',
      created_by: 'dc8f6d90-59cb-47ed-82a8-3b06c0df9d97',
      is_private: 0,
      location_id: null,
    },
    {
      image_path:
        'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80',
      title: 'Backyard Wedding Ideas',
      description:
        'Budget-friendly and intimate ideas for a beautiful backyard wedding.',
      created_at: '2024-08-29T09:12:34Z',
      created_by: '5d82e3b2-5b1e-4c88-88f1-0e564c5d9d48',
      is_private: 0,
      location_id: null,
    },
    {
      image_path:
        'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80',
      title: 'Modern Wedding Invitation Wording',
      description: 'Contemporary wording ideas for your wedding invitations.',
      created_at: '2024-08-29T09:45:22Z',
      created_by: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
      is_private: 0,
      location_id: null,
    },
    {
      image_path:
        'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80',
      title: 'Best Wedding Reception Songs',
      description:
        'A playlist of the best songs to get your wedding reception started.',
      created_at: '2024-08-28T13:15:45Z',
      created_by: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
      is_private: 0,
      location_id: null,
    },
    {
      image_path:
        'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80',
      title: 'Bridal Party Gift Ideas',
      description: 'Thoughtful and unique gifts for your bridal party.',
      created_at: '2024-08-28T14:20:10Z',
      created_by: 'c9bf9e57-1685-4c89-bafb-ff5af830be8a',
      is_private: 0,
      location_id: null,
    },
    {
      image_path:
        'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80',
      title: 'Elegant Wedding Table Settings',
      description:
        'Inspiration for creating stunning and elegant wedding table settings.',
      created_at: '2024-08-28T15:34:22Z',
      created_by: 'e58bfc70-2877-4e58-939d-b4d1e1b2c2a0',
      is_private: 0,
      location_id: null,
    },
    {
      image_path:
        'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80',
      title: 'Wedding Ceremony Reading Ideas',
      description:
        'Beautiful and meaningful readings for your wedding ceremony.',
      created_at: '2024-08-28T16:45:33Z',
      created_by: 'dc8f6d90-59cb-47ed-82a8-3b06c0df9d97',
      is_private: 0,
      location_id: null,
    },
    {
      image_path:
        'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80',
      title: 'Romantic Wedding Photography Poses',
      description:
        'Capture the romance with these wedding photography pose ideas.',
      created_at: '2024-08-28T17:58:44Z',
      created_by: '5d82e3b2-5b1e-4c88-88f1-0e564c5d9d48',
      is_private: 0,
      location_id: null,
    },
    {
      image_path:
        'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80',
      title: 'How to Write Your Own Vows',
      description: 'A guide to crafting personal and heartfelt wedding vows.',
      created_at: '2024-08-28T18:15:55Z',
      created_by: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
      is_private: 0,
      location_id: null,
    },
    {
      image_path:
        'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80',
      title: 'Top Wedding Color Palettes',
      description:
        'Discover the top wedding color palettes for the upcoming season.',
      created_at: '2024-08-28T19:30:05Z',
      created_by: 'c9bf9e57-1685-4c89-bafb-ff5af830be8a',
      is_private: 0,
      location_id: null,
    },
    {
      image_path:
        'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80',
      title: 'DIY Wedding Flower Arrangements',
      description:
        'Learn how to create your own beautiful wedding flower arrangements.',
      created_at: '2024-08-28T20:45:16Z',
      created_by: 'e58bfc70-2877-4e58-939d-b4d1e1b2c2a0',
      is_private: 0,
      location_id: null,
    },
    {
      image_path:
        'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80',
      title: 'How to Choose a Wedding Officiant',
      description:
        'Tips for selecting the perfect officiant for your wedding ceremony.',
      created_at: '2024-08-28T21:55:27Z',
      created_by: 'dc8f6d90-59cb-47ed-82a8-3b06c0df9d97',
      is_private: 0,
      location_id: null,
    },
    {
      image_path:
        'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80',
      title: 'Destination Wedding Planning Checklist',
      description:
        'A comprehensive checklist for planning your dream destination wedding.',
      created_at: '2024-08-28T22:10:38Z',
      created_by: '5d82e3b2-5b1e-4c88-88f1-0e564c5d9d48',
      is_private: 0,
      location_id: null,
    },
    {
      image_path:
        'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80',
      title: 'Winter Wedding Decor Ideas',
      description: 'Cozy and elegant decor ideas for your winter wedding.',
      created_at: '2024-08-28T23:25:49Z',
      created_by: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
      is_private: 0,
      location_id: null,
    },
    {
      image_path:
        'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80',
      title: 'Creative Wedding Dessert Ideas',
      description:
        'Unique and delicious dessert ideas for your wedding reception.',
      created_at: '2024-08-28T23:45:00Z',
      created_by: 'c9bf9e57-1685-4c89-bafb-ff5af830be8a',
      is_private: 0,
      location_id: null,
    },
    {
      image_path:
        'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80',
      title: 'Best Wedding Planning Apps',
      description:
        'Top apps to help you stay organized and stress-free during wedding planning.',
      created_at: '2024-08-29T00:55:11Z',
      created_by: 'e58bfc70-2877-4e58-939d-b4d1e1b2c2a0',
      is_private: 0,
      location_id: null,
    },
    {
      image_path:
        'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80',
      title: 'Wedding Dress Shopping Tips',
      description: 'Essential tips for finding the perfect wedding dress.',
      created_at: '2024-08-29T01:10:22Z',
      created_by: 'dc8f6d90-59cb-47ed-82a8-3b06c0df9d97',
      is_private: 0,
      location_id: null,
    },
    {
      image_path:
        'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80',
      title: 'Best Places for a Honeymoon in NZ',
      description:
        'Explore the most romantic honeymoon destinations across New Zealand.',
      created_at: '2024-08-29T02:25:33Z',
      created_by: '5d82e3b2-5b1e-4c88-88f1-0e564c5d9d48',
      is_private: 0,
      location_id: null,
    },
  ])
}
