import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'creator-agency',
  title: 'Creator - Agency List',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
      },
    }),
  ],
})
