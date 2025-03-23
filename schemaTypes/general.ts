import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'general',
  title: 'General',
  type: 'document',

  fields: [
    // Define your fields here
    defineField({
      name: 'preset',
      title: 'Preset ID',
      description: `set it as 'main' to use this preset`,
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
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
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
  ],
})
