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
      name: 'date',
      title: 'Date',
      type: 'date',
    }),
    defineField({
      name: 'event',
      title: 'Creator event',
      type: 'reference',
      to: {
        type: 'creator-event',
      },
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
  ],
})
