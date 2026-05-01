import {defineField, defineType} from 'sanity'

export const FrameBlock = defineType({
  name: 'frameBlock',
  title: 'Frame Block',
  type: 'object',
  preview: {
    select: {
      title: 'type',
    },
  },
  fields: [
    // defineField({
    //   name: 'blockName',
    //   title: 'Block Name',
    //   description: 'Local use only',
    //   type: 'string',
    // }),
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
          {
            title: 'Video List + Total Viewcount',
            value: 'videoList',
          },
          {
            title: 'Rich Text',
            value: 'text',
          },
          {
            title: 'Centered Title',
            value: 'title',
          },
          {
            title: 'Empty Frame (Coming Soon Frame)',
            value: 'empty',
          },
        ],
      },
    }),
    defineField({
      name: 'image',
      type: 'image',
      hidden: ({parent}) => parent?.type !== 'image',
    }),
    defineField({
      name: 'ytvid',
      title: 'Youtube Video ID',
      type: 'string',
      hidden: ({parent}) => parent?.type !== 'video',
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'array',
      of: [{type: 'block'}],
      hidden: ({parent}) => parent?.type !== 'text',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',

      hidden: ({parent}) => parent?.type !== 'title',
    }),
    defineField({
      name: 'videoList',
      title: 'Video Lists',
      hidden: ({parent}) => parent?.type !== 'videoList',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
})
export default defineType({
  name: 'otg-frames',
  title: 'The OTG Difference - Frames List',
  type: 'document',

  fields: [
    // Define your fields here
    defineField({
      name: 'categoryName',
      title: 'Category Name',
      type: 'string',
    }),
    defineField({
      name: 'frame_two',
      title: 'Frame List',
      type: 'array',
      options: {
        modal: {
          type: 'dialog',
        },
      },
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'identifier',
              title: 'Identifier',
              description: 'Local use only',
              type: 'string',
            }),
            defineField({
              name: 'mainBlocks',
              title: 'Main Blocks',
              type: 'array',
              of: [{type: 'frameBlock'}],
            }),
            defineField({
              name: 'secondaryBlocks',
              title: 'Secondary Blocks',
              type: 'array',
              of: [{type: 'frameBlock'}],
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'frames',
      title: 'Old Frame List',
      deprecated: {
        reason: 'Restructure to Modular Blocks',
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
                    title: 'Text',
                    value: 'text',
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
              hidden: ({parent}) => parent?.type !== 'image',
            }),
            defineField({
              name: 'ytvid',
              title: 'Youtube Video ID',
              type: 'string',
              hidden: ({parent}) => parent?.type !== 'video',
            }),
            defineField({
              name: 'text',
              title: 'Text',
              type: 'array',
              of: [{type: 'block'}],
              hidden: ({parent}) => parent?.type !== 'text',
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
