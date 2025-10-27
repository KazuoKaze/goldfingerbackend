import { CollectionConfig } from 'payload'
import { formatSlug } from '../utilities/formatSlug'

export const Blog: CollectionConfig = {
  slug: 'blog',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'publishedDate', 'status', 'updatedAt'],
    group: 'Content',
  },
  access: {
    read: ({ req: { user } }) => {
      // Published posts are publicly accessible
      if (!user) {
        return {
          status: {
            equals: 'published',
          },
        }
      }
      // Admins can read all
      return true
    },
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Blog Title',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: 'URL Slug',
      admin: {
        description: 'This will be the URL path (e.g., "botox-101" becomes /blog/botox-101/)',
        position: 'sidebar',
      },
      hooks: {
        beforeValidate: [formatSlug('title')],
      },
      index: true,
    },
    {
      name: 'excerpt',
      type: 'textarea',
      label: 'Short Excerpt',
      admin: {
        description: 'Brief summary shown in blog listing (150-200 characters recommended)',
      },
      maxLength: 300,
    },
    {
      name: 'featuredImage',
      type: 'group',
      label: 'Featured Image',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Main Image',
        },
        {
          name: 'mobile',
          type: 'upload',
          relationTo: 'media',
          label: 'Mobile Image (≤420px)',
        },
        {
          name: 'tablet',
          type: 'upload',
          relationTo: 'media',
          label: 'Tablet Image (≤800px)',
        },
        {
          name: 'desktop',
          type: 'upload',
          relationTo: 'media',
          label: 'Desktop Image',
        },
        {
          name: 'alt',
          type: 'text',
          label: 'Alt Text',
        },
      ],
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      label: 'Blog Content',
    },
    {
      name: 'publishedDate',
      type: 'date',
      required: true,
      label: 'Published Date',
      defaultValue: () => new Date().toISOString(),
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
        position: 'sidebar',
      },
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'draft',
      options: [
        {
          label: 'Draft',
          value: 'draft',
        },
        {
          label: 'Published',
          value: 'published',
        },
        {
          label: 'Archived',
          value: 'archived',
        },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Featured Post',
      defaultValue: false,
      admin: {
        position: 'sidebar',
        description: 'Feature this post on the homepage',
      },
    },
    // SEO Fields
    {
      name: 'seo',
      type: 'group',
      label: 'SEO Settings',
      fields: [
        {
          name: 'metaTitle',
          type: 'text',
          label: 'Meta Title',
          admin: {
            description: 'Override default title for SEO (60 characters recommended)',
          },
          maxLength: 100,
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          label: 'Meta Description',
          admin: {
            description: 'Brief description for search engines (155-160 characters recommended)',
          },
          maxLength: 200,
        },
        {
          name: 'ogImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Social Share Image',
          admin: {
            description: 'Image for social media sharing (1200x630px recommended)',
          },
        },
        {
          name: 'keywords',
          type: 'text',
          label: 'Focus Keywords',
          admin: {
            description: 'Comma-separated keywords for SEO',
          },
        },
      ],
    },
  ],
  hooks: {
    beforeChange: [
      ({ data }) => {
        // Auto-generate excerpt from content if not provided
        if (!data.excerpt && data.content) {
          const plainText = JSON.stringify(data.content)
            .replace(/<[^>]*>/g, '')
            .replace(/[{}"]/g, '')
          data.excerpt = plainText.substring(0, 200) + '...'
        }
        return data
      },
    ],
  },
  timestamps: true,
  versions: {
    drafts: {
      autosave: {
        interval: 375,
      },
    },
    maxPerDoc: 50,
  },
}
