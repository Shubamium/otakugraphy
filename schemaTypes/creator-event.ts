import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'creator-event',
  title: 'Creator - Event List',
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
