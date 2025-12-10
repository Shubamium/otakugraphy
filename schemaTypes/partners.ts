import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'partner',
  title: 'Partner',
  type: 'document',

  fields: [
    // Define your fields here
    defineField({
      name: 'name',
      title: 'Category Name',
      description:
        'Name is used for internal reference only, each category represent a row of partnership',
      type: 'string',
    }),

    defineField({
      name: 'partners',
      title: 'Partners',
      type: 'array',
      of: [
        {
          type: 'image',
        },
      ],
    }),
  ],
})
