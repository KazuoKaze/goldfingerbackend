import { CollectionConfig } from 'payload'

export const UpperNav: CollectionConfig = {
  slug: 'upper-nav',
  admin: {
    useAsTitle: 'title',
    description: 'Upper navigation bar configuration',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Upper Navigation',
      admin: {
        description: 'Internal title for reference',
      },
    },
    {
      name: 'styling',
      type: 'group',
      label: 'Styling',
      fields: [
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Background Color',
          defaultValue: '#ffffff',
          admin: {
            description: 'Hex, RGB, or color name',
          },
        },
        {
          name: 'textColor',
          type: 'text',
          label: 'Text Color',
          defaultValue: '#000000',
          admin: {
            description: 'Hex, RGB, or color name',
          },
        },
        {
          name: 'linkHoverColor',
          type: 'text',
          label: 'Link Hover Color',
          defaultValue: '#0066cc',
        },
        {
          name: 'customClasses',
          type: 'text',
          label: 'Custom CSS Classes',
          admin: {
            description: 'Space-separated CSS classes',
          },
        },
      ],
    },
    {
      name: 'items',
      type: 'array',
      label: 'Navigation Items',
      admin: {
        description: 'Drag and drop to reorder items',
        // components: {
        //   RowLabel: ({ data, index }) => {
        //     return data?.label || `Item ${index + 1}`
        //   },
        // },
      },
      fields: [
        {
          name: 'type',
          type: 'select',
          label: 'Item Type',
          required: true,
          defaultValue: 'link',
          options: [
            {
              label: 'Link',
              value: 'link',
            },
            {
              label: 'Phone',
              value: 'phone',
            },
            {
              label: 'Social Links',
              value: 'social',
            },
            {
              label: 'Search',
              value: 'search',
            },
          ],
        },
        {
          name: 'label',
          type: 'text',
          label: 'Label',
          required: true,
          admin: {
            condition: (data, siblingData) => {
              return siblingData?.type !== 'social'
            },
          },
        },
        {
          name: 'href',
          type: 'text',
          label: 'Link URL',
          admin: {
            condition: (data, siblingData) => {
              return siblingData?.type === 'link' || siblingData?.type === 'phone'
            },
          },
        },
        {
          name: 'ariaLabel',
          type: 'text',
          label: 'Aria Label',
          admin: {
            description: 'For accessibility',
          },
        },
        {
          name: 'customClasses',
          type: 'text',
          label: 'Custom CSS Classes',
          admin: {
            description: 'e.g., "desktop-only", "contact"',
          },
        },
        {
          name: 'phoneNumber',
          type: 'text',
          label: 'Phone Number',
          admin: {
            description: 'Display format (e.g., (407) 333-4300)',
            condition: (data, siblingData) => {
              return siblingData?.type === 'phone'
            },
          },
        },
        {
          name: 'phoneLink',
          type: 'text',
          label: 'Phone Link',
          admin: {
            description: 'tel: format (e.g., +14073334300)',
            condition: (data, siblingData) => {
              return siblingData?.type === 'phone'
            },
          },
        },
        {
          name: 'socialLinks',
          type: 'array',
          label: 'Social Media Links',
          admin: {
            condition: (data, siblingData) => {
              return siblingData?.type === 'social'
            },
          },
          fields: [
            {
              name: 'platform',
              type: 'select',
              label: 'Platform',
              required: true,
              options: [
                { label: 'Instagram', value: 'instagram' },
                { label: 'Facebook', value: 'facebook' },
                { label: 'YouTube', value: 'youtube' },
                { label: 'Twitter', value: 'twitter' },
                { label: 'LinkedIn', value: 'linkedin' },
                { label: 'TikTok', value: 'tiktok' },
              ],
            },
            {
              name: 'url',
              type: 'text',
              label: 'URL',
              required: true,
            },
            {
              name: 'title',
              type: 'text',
              label: 'Title',
              admin: {
                description: 'Tooltip text',
              },
            },
            {
              name: 'ariaLabel',
              type: 'text',
              label: 'Aria Label',
            },
            {
              name: 'iconClass',
              type: 'text',
              label: 'Icon CSS Class',
              admin: {
                description: 'e.g., "instagram-icon"',
              },
            },
          ],
        },
        {
          name: 'searchConfig',
          type: 'group',
          label: 'Search Configuration',
          admin: {
            condition: (data, siblingData) => {
              return siblingData?.type === 'search'
            },
          },
          fields: [
            {
              name: 'buttonText',
              type: 'text',
              label: 'Button Text',
              defaultValue: 'Search',
            },
            {
              name: 'buttonAriaLabel',
              type: 'text',
              label: 'Button Aria Label',
              defaultValue: 'Opens search bar',
            },
            {
              name: 'buttonTitle',
              type: 'text',
              label: 'Button Title',
              defaultValue: 'Open search bar',
            },
            {
              name: 'iconClass',
              type: 'text',
              label: 'Icon CSS Class',
            },
          ],
        },
        {
          name: 'visibility',
          type: 'group',
          label: 'Visibility Settings',
          fields: [
            {
              name: 'desktop',
              type: 'checkbox',
              label: 'Show on Desktop',
              defaultValue: true,
            },
            {
              name: 'tablet',
              type: 'checkbox',
              label: 'Show on Tablet',
              defaultValue: true,
            },
            {
              name: 'mobile',
              type: 'checkbox',
              label: 'Show on Mobile',
              defaultValue: true,
            },
          ],
        },
      ],
    },
  ],
}
