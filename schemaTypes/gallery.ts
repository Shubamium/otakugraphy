import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'gallery',
  title: 'Gallery',
  type: 'document',

  fields: [
    // Define your fields here
    defineField({
      name: 't',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 's',
      title: 'Slug',
      type: 'slug',
      description:
        'Match one of the url for each category, e.g /nightlife will need nightlife slug',
      options: {
        source: 't',
      },
    }),

    defineField({
      name: 'pages',
      title: 'Groups',
      type: 'array',
      of: [{type: 'gallery-group'}],
    }),
  ],
})
