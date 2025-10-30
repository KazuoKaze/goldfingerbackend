// collections/Pages.ts
import { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    description: 'All searchable pages on the website',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        description: 'Page title shown in search results',
      },
    },
    {
      name: 'url',
      type: 'text',
      required: true,
      admin: {
        description: 'Full URL path (e.g., /medical-spa/botox/)',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      admin: {
        description: 'Brief description shown in search results',
      },
    },
    {
      name: 'category',
      type: 'select',
      options: [
        { label: 'Medical Spa', value: 'medical-spa' },
        { label: 'Plastic Surgery', value: 'plastic-surgery' },
        { label: 'Gallery', value: 'gallery' },
        { label: 'About', value: 'about' },
        { label: 'Other', value: 'other' },
      ],
    },
    {
      name: 'keywords',
      type: 'array',
      label: 'Search Keywords',
      admin: {
        description: 'Additional keywords to help with search',
      },
      fields: [
        {
          name: 'keyword',
          type: 'text',
        },
      ],
    },
  ],
}
