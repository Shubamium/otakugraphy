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
      name: 'our_mission',
      title: 'Our Mission Section',
    },
    {
      name: 'about_us',
      title: 'About Us Section',
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
      name: 'v1',
      title: 'Values 1',
      type: 'image',
      group: 'values',
    }),
    defineField({
      name: 'v2',
      group: 'values',
      title: 'Values 2',
      type: 'image',
    }),
    defineField({
      name: 'v3',
      group: 'values',
      title: 'Values 3',
      type: 'image',
    }),
    defineField({
      name: 'omdesc',
      title: 'Our Mission Text',
      group: 'our_mission',
      type: 'text',
    }),
    defineField({
      name: 'audesc',
      title: 'About Us Text',
      group: 'about_us',
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
