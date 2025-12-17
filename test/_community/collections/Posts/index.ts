import type { CollectionConfig } from 'payload'

import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const postsSlug = 'posts'

export const PostsCollection: CollectionConfig = {
  slug: postsSlug,
  admin: {
    useAsTitle: 'title',
    enableListViewSelectAPI: true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [...defaultFeatures],
      }),
    },
    {
      name: 'cover',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'files',
      type: 'upload',
      relationTo: 'media',
      hasMany: true,
      admin: {
        isSortable: true,
      },
    },
    {
      name: 'coverRelationship',
      type: 'relationship',
      relationTo: 'media',
    },
    {
      name: 'filesRelationship',
      type: 'relationship',
      relationTo: 'media',
      hasMany: true,
      admin: {
        isSortable: true,
      },
    },
  ],
}
