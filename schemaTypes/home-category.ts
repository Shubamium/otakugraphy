import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homeCategory',
  title: 'Home Category',
  type: 'document',

  fields: [
    // Define your fields here
    defineField({
      name: 'name',
      title: 'Category Name',
      type: 'string',
    }),
    defineField({
      name: 'route',
      title: 'Route',
      type: 'string',
    }),
    defineField({
      name: 'imageList',
      title: 'Image List',
      type: 'array',
      of: [{type: 'reference', to: {type: 'media'}}],
    }),
  ],
})
