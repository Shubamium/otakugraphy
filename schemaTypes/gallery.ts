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
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'highlights',
      title: 'Highlights',
      type: 'object',
      fields: [
        {
          name: 'ht',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'thumbnail',
          title: 'Thumbnail',
          type: 'image',
        },
        {
          name: 'link',
          title: 'Link',
          type: 'url',
        },
      ],
    }),
    defineField({
      name: 'side_images',
      title: 'Heading Side Images',
      type: 'array',
      of: [{type: 'image'}],
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
