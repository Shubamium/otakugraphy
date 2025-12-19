import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'general',
  title: 'General',
  type: 'document',
  groups: [
    {
      title: 'Global Settings',
      name: 'global',
    },
    {
      title: 'Navigation ',
      name: 'nav',
    },
    {
      name: 'title',
      title: 'Title',
    },
    {
      name: 'footer',
      title: 'Footer',
    },
    {
      name: 'contact',
      title: 'Contact',
    },
    {
      name: 'our_mission',
      title: 'Our Mission',
    },
    {
      name: 'about_us',
      title: 'Services',
    },
    {
      name: 'testimonials',
      title: 'Testimonials',
    },
    {
      name: 'values',
      title: 'Values',
    },
    {
      name: 'cls',
      title: 'Currently Livestreaming',
    },
    {
      name: 'fc',
      title: 'Featured Creators',
    },
  ],
  fields: [
    // Define your fields here
    defineField({
      name: 'preset',
      title: 'Preset ID',
      description: `set it as 'main' to use this preset`,
      type: 'string',
      group: 'global',
    }),
    defineField({
      name: 'gated',
      title: 'Is Under Construction?',
      group: 'global',
      type: 'boolean',
    }),
    defineField({
      name: 'gated_pass',
      title: 'Website Password',
      group: 'global',
      type: 'string',
    }),
    defineField({
      name: 'hlm',
      title: 'Highlights Media',
      description: 'Highlights on main page (7 media)',
      type: 'array',
      of: [{type: 'reference', to: {type: 'media'}}],
    }),

    defineField({
      name: 'sectord',
      title: 'Section Order',
      type: 'array',
      group: 'global',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'navlist',
      title: 'Navigation ',
      group: 'nav',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              type: 'string',
            },
            {
              name: 'rl',
              title: 'Route Link',
              description: 'Ex: /home, /about, /contact',
              hidden: ({parent}) => parent?.is_dropdown,
              type: 'string',
            },
            {
              name: 'is_dropdown',
              type: 'boolean',
            },
            {
              name: 'dr_list',
              title: 'Dropdown Menu List',
              type: 'array',
              hidden: ({parent}) => !parent?.is_dropdown,
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'name',
                      type: 'string',
                    },
                    {
                      name: 'rl',
                      title: 'Route Link',
                      description: 'Ex: /home, /about, /contact',
                      type: 'string',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'cm',
      title: 'Categories Media',
      description: 'Categories section on main page, match the name with page slug',
      type: 'array',
      group: 'global',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              type: 'string',
            }),
            defineField({
              name: 'route_link',
              type: 'string',
            }),
            defineField({
              name: 'ml',
              title: 'Media List',
              type: 'array',
              of: [{type: 'reference', to: {type: 'media'}}],
            }),
          ],
        },
      ],
    }),

    defineField({
      name: 'ti_ml',
      title: 'Title - Main Logo',
      group: 'title',
      type: 'image',
    }),
    defineField({
      name: 'ti_bg',
      title: 'Title - Background',
      group: 'title',
      type: 'image',
    }),
    defineField({
      name: 'ft_bg',
      title: 'Footer - Background',
      group: 'footer',
      type: 'image',
    }),
    defineField({
      name: 'ft_title',
      title: 'Footer - Title',
      group: 'footer',
      type: 'string',
    }),
    defineField({
      name: 'ft_desc',
      title: 'Footer - Description',
      group: 'footer',
      type: 'text',
    }),
    defineField({
      name: 'ct_bg',
      title: 'Contact - Background',
      group: 'contact',
      type: 'image',
    }),
    defineField({
      name: 'ct_fs',
      title: 'Contact - Form Side',
      group: 'contact',
      type: 'image',
    }),
    defineField({
      name: 'testimonials',
      type: 'array',
      group: 'testimonials',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              type: 'string',
            },
            {
              name: 'pfp',
              title: ' Profile Picture',
              type: 'image',
            },
            {
              name: 'role',
              type: 'string',
            },
            {
              name: 'x',
              type: 'url',
            },
            {
              name: 'twitch',
              type: 'url',
            },
            {
              name: 'youtube',
              type: 'url',
            },
            {
              name: 'website',
              type: 'url',
            },
            {
              name: 'text',
              type: 'text',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'abi',
      title: 'About Us Image',
      group: 'about_us',
      type: 'image',
    }),
    defineField({
      name: 'om',
      title: 'Our Mission Image',
      type: 'image',
      group: 'our_mission',
    }),
    defineField({
      name: 'v1_tb',
      title: 'Values 1  - Title Bold',
      group: 'values',
      type: 'string',
    }),
    defineField({
      name: 'v1_t',
      title: 'Values 1  - Title',
      group: 'values',
      type: 'string',
    }),

    defineField({
      name: 'v1_desc',
      title: 'Values 1  - Description',
      group: 'values',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    }),
    defineField({
      name: 'v1',
      title: 'Values 1',
      type: 'image',
      group: 'values',
    }),
    defineField({
      name: 'v2_tb',
      title: 'Values 2  - Title Bold',
      group: 'values',
      type: 'string',
    }),
    defineField({
      name: 'v2_t',
      title: 'Values 2  - Title',
      group: 'values',
      type: 'string',
    }),

    defineField({
      name: 'v2_desc',
      title: 'Values 2  - Description',
      group: 'values',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    }),
    defineField({
      name: 'v2',
      group: 'values',
      title: 'Values 2',
      type: 'image',
    }),
    defineField({
      name: 'v3_tb',
      group: 'values',
      title: 'Values 3  - Title Bold',
      type: 'string',
    }),
    defineField({
      name: 'v3_t',
      group: 'values',
      title: 'Values 3  - Title',
      type: 'string',
    }),

    defineField({
      name: 'v3_desc',
      title: 'Values 3 - Description',
      group: 'values',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    }),
    defineField({
      name: 'v3',
      group: 'values',
      title: 'Values 3',
      type: 'image',
    }),
    defineField({
      name: 'omtitle',
      title: 'Our Mission Titlle',
      group: 'our_mission',
      type: 'string',
    }),
    defineField({
      name: 'omdesc',
      title: 'Our Mission Text',
      group: 'our_mission',
      type: 'text',
    }),
    defineField({
      name: 'autitle',
      title: 'Serivce Title',
      group: 'about_us',
      type: 'string',
    }),
    defineField({
      name: 'audesc',
      title: 'Services Text',
      group: 'about_us',
      type: 'text',
    }),
    defineField({
      name: 'fc_t',
      title: 'Featured Creators - Title',
      type: 'string',
      group: 'fc',
    }),
    defineField({
      name: 'fc_d',
      title: 'Featured Creators - Description',
      group: 'fc',
      type: 'text',
    }),
    defineField({
      name: 'currentlyLive',
      title: 'Currently Live Streaming',
      group: 'cls',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {type: 'creator'},
        },
      ],
    }),
  ],
})
