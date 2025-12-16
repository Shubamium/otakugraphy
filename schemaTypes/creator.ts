import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'creator',
  title: 'Creator  - List',
  type: 'document',

  fields: [
    // Define your fields here
    defineField({
      name: 'name',
      title: 'Creator Name',
      type: 'string',
    }),
    defineField({
      name: 'agency',
      title: 'Creator Agency',
      type: 'reference',
      to: {
        type: 'creator-agency',
      },
    }),
    defineField({
      name: 'art',
      title: 'Art',
      type: 'image',
    }),

    defineField({
      name: 'events',
      title: 'Creator Event List',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {
            type: 'creator-event',
          },
        },
      ],
    }),
    defineField({
      name: 'color',
      title: 'Creator Color',
      type: 'string',
      options: {
        // Red, Orange, Yellow, Green, Blue, Purple, Pink, White, Black
        list: [
          {
            title: 'Red',
            value: 'red',
          },
          {
            title: 'Orange',
            value: 'orange',
          },
          {
            title: 'Yellow',
            value: 'yellow',
          },
          {
            title: 'Green',
            value: 'green',
          },
          {
            title: 'Blue',
            value: 'blue',
          },
          {
            title: 'Purple',
            value: 'purple',
          },
          {
            title: 'Pink',
            value: 'pink',
          },
          {
            title: 'Grey',
            value: 'grey',
          },
          {
            title: 'Brown',
            value: 'brown',
          },
          {
            title: 'White',
            value: 'white',
          },
          {
            title: 'Black',
            value: 'black',
          },
        ],
      },
    }),
    defineField({
      name: 'Video',
      title: 'Youtube Video ID',
      type: 'string',
    }),
    defineField({
      name: 'extra_vids',
      title: 'Extra Videos (YT Vid ID)',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'channel_link',
      title: 'Youtube Channel Link',
      description: 'Used if the Youtube Video ID is not provided',
      type: 'string',
    }),

    defineField({
      name: 'date',
      title: 'Date',
      description: 'Used as a backup date if the Youtube API fails',
      type: 'date',
    }),
    defineField({
      name: 'fields',
      title: 'Custom Fields',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              type: 'string',
            },
            {
              name: 'value',
              type: 'text',
            },
          ],
        },
      ],
    }),
  ],
})
