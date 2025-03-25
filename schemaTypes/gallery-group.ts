import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'gallery-group',
  title: 'Gallery Group',
  type: 'object',

  fields: [
    // Define your fields here
    defineField({
      name: 'identifier',
      title: 'Group ID',
      type: 'string',
    }),

    defineField({
      name: 'lt',
      title: 'Layout Preset',
      type: 'string',
      options: {
        list: [
          {
            title: 'Vertical',
            value: 'vertical',
          },
          {
            title: 'Horizontal',
            value: 'horizontal',
          },
          {
            title: 'Two Columns',
            value: 'twoColumns',
          },
          {
            title: 'Expanding Columns',
            value: 'exCols',
          },
          {
            title: 'Fixed A (5 Images)',
            value: 'fixedA',
          },
          {
            title: 'Fixed B (6 Images)',
            value: 'fixedB',
          },
          {
            title: 'Fixed C (4 Images)',
            value: 'fixedC',
          },
          {
            title: 'Fixed D (6 Images)',
            value: 'fixedD',
          },
        ],
      },
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'ml',
      title: 'Media List',
      type: 'array',
      of: [{type: 'reference', to: {type: 'media'}}],
    }),
  ],
})
