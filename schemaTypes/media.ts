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
      description: 'Only used internally for searching purposes',
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
          {
            title: 'Video (Youtube Embed)',
            value: 'video_yt',
          },
        ],
      },
      initialValue: 'image',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        metadata: ['image', 'exif', 'location', 'blurhash'],
      },
      hidden: ({parent}) => parent?.type !== 'image',
    }),
    defineField({
      name: 'video',
      title: 'Video File',
      type: 'file',
      hidden: ({parent}) => parent?.type !== 'video',
    }),
    defineField({
      name: 'video_id',
      title: 'Youtube Video ID',
      hidden: ({parent}) => parent?.type !== 'video_yt',
      type: 'string',
    }),
    defineField({
      name: 'video_aspect',
      title: 'Youtube Video -  Aspect Ratio',
      description: 'Format is Width / Height, default is 16 / 9',
      initialValue: '16 / 9',
      placeholder: '16 / 9',
      hidden: ({parent}) => parent?.type !== 'video_yt' || parent?.video_id === undefined,
      type: 'string',
    }),
    defineField({
      name: 'gd',
      title: 'General Data',
      type: 'object',
      options: {
        collapsed: true,
        collapsible: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Hover Title',
          type: 'string',
        }),
        defineField({
          name: 'otgr',
          title: 'OTG Role',
          type: 'string',
        }),
        defineField({
          name: 'otgn',
          title: 'OTG Name',
          type: 'string',
        }),

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
          title: 'General Name',
          type: 'string',
        }),
        defineField({
          name: 'c',
          title: 'Convention Name',
          type: 'string',
        }),
        defineField({
          name: 'clink',
          title: 'Collection Links (Frame.io)',
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
