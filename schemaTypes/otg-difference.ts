import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'otg-diff',
  title: 'The OTG Difference',
  type: 'document',

  fields: [
    // Define your fields here
    defineField({
      name: 'preset',
      title: 'Preset ID',
      type: 'string',
    }),
    defineField({
      name: 'frames',
      title: 'Frame List',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'type',
              title: 'Frame Type',
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
            }),
            defineField({
              name: 'image',
              type: 'image',
            }),
            defineField({
              name: 'ytvid',
              title: 'Youtube Video ID',
              type: 'string',
            }),
            defineField({
              name: 'extraVideos',
              title: 'Extra Videos',
              type: 'array',
              of: [{type: 'string'}],
            }),
          ],
        },
      ],
    }),
  ],
})
