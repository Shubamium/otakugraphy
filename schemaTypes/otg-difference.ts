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
      name: 'gated',
      title: 'Is Under Construction?',
      type: 'boolean',
    }),
    defineField({
      name: 'gated_pass',
      title: 'Access Password',
      type: 'string',
    }),
    defineField({
      name: 'otg_t',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'otg_d',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'otg_b',
      title: 'Background',
      type: 'image',
    }),

    defineField({
      name: 'cs',
      title: 'Center Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'desc',
          title: 'Description',
          type: 'text',
        },
        {
          name: 'image',
          title: 'Image',
          type: 'image',
        },
      ],
    }),
    defineField({
      name: 'frames',
      title: 'Frame List',
      deprecated: {
        reason: 'Use OTG Frames list instead',
      },
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
