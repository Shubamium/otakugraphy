import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'media',
  title: 'Media',
  type: 'document',

  fields: [
    // Define your fields here
    defineField({
      name: 'name',
      title: 'Identifier',
      type: 'string',
    }),
    defineField({
      name: 'type',
      title: 'Media Type',
      type: 'string',
      options: {
        list: [
          {
            title: 'Image',
            value: 'image',
          },
          {
            title: 'Video',
            value: 'video',
          },
        ],
      },
      initialValue: 'image',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      hidden: ({document}) => document?.type === 'video',
    }),
    defineField({
      name: 'Video',
      title: 'Video File',
      type: 'file',
      hidden: ({document}) => document?.type === 'image',
    }),

    defineField({
      name: 'gd',
      title: 'General Data',
      type: 'object',
      fields: [
        defineField({
          name: 'l',
          title: 'Location',
          type: 'string',
        }),
        defineField({
          name: 'd',
          title: 'Date',
          type: 'string',
        }),
        defineField({
          name: 'e',
          title: 'Event Name',
          type: 'string',
        }),
      ],
    }),

    defineField({
      name: 'ail',
      title: 'Additional Info List',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              type: 'string',
            }),
            defineField({
              name: 'desc',
              title: 'Description',
              type: 'string',
            }),
          ],
        },
      ],
    }),
  ],
})
