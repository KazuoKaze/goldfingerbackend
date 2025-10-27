import { CollectionConfig } from 'payload'

export const TestimonialsComponent: CollectionConfig = {
  slug: 'testimonials-component',
  admin: {
    useAsTitle: 'componentName',
    defaultColumns: ['componentName', 'updatedAt'],
    group: 'Components',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'componentName',
      type: 'text',
      required: true,
      defaultValue: 'Testimonials Component',
    },
    {
      name: 'heroSection',
      type: 'group',
      label: 'Hero Section',
      fields: [
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Background Color',
          admin: {
            description: 'CSS color value (e.g., #ffffff, rgba(0,0,0,0.5))',
          },
        },
        {
          name: 'backgroundImage',
          type: 'group',
          label: 'Background Texture Image',
          fields: [
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
              label: 'Desktop Image (≤1400px)',
            },
            {
              name: 'large',
              type: 'upload',
              relationTo: 'media',
              label: 'Large Desktop Image',
            },
            {
              name: 'alt',
              type: 'text',
              label: 'Alt Text',
              defaultValue: 'Background Texture',
            },
          ],
        },
        {
          name: 'breadcrumbs',
          type: 'array',
          label: 'Breadcrumbs',
          admin: {
            description: 'Drag to reorder breadcrumb items',
          },
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
            },
            {
              name: 'url',
              type: 'text',
              required: true,
            },
            {
              name: 'ariaLabel',
              type: 'text',
              label: 'ARIA Label',
              defaultValue: 'Breadcrumbs to help navigate the user',
            },
          ],
        },
        {
          name: 'title',
          type: 'text',
          required: true,
          defaultValue: 'Testimonials',
        },
        {
          name: 'titleColor',
          type: 'text',
          label: 'Title Color',
          admin: {
            description: 'CSS color value',
          },
        },
        {
          name: 'titleFontSize',
          type: 'text',
          label: 'Title Font Size',
          admin: {
            description: 'CSS font-size value (e.g., 48px, 3rem)',
          },
        },
        {
          name: 'mediaImage',
          type: 'group',
          label: 'Main Hero Image',
          fields: [
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
              label: 'Desktop Image (≤1400px)',
            },
            {
              name: 'large',
              type: 'upload',
              relationTo: 'media',
              label: 'Large Desktop Image',
            },
            {
              name: 'alt',
              type: 'text',
              label: 'Alt Text',
              required: true,
              defaultValue: 'Brunette smiling up at woman holding clipboard',
            },
          ],
        },
      ],
    },
    {
      name: 'ratingBoxSections',
      type: 'array',
      label: 'Rating Box Sections',
      admin: {
        description:
          'Drag to reorder rating box sections (e.g., Main Locations, Salon Lofts Locations)',
      },
      fields: [
        {
          name: 'sectionTitle',
          type: 'text',
          required: true,
          label: 'Section Title',
          admin: {
            description: 'e.g., "Main Locations" or "Salon Lofts Locations"',
          },
        },
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Background Color',
        },
        {
          name: 'textColor',
          type: 'text',
          label: 'Text Color',
        },
        {
          name: 'itemsPerRow',
          type: 'number',
          defaultValue: 3,
          admin: {
            description: 'Number of items to display per row',
          },
        },
        {
          name: 'locations',
          type: 'array',
          label: 'Locations',
          admin: {
            description: 'Drag to reorder location cards',
          },
          fields: [
            {
              name: 'name',
              type: 'text',
              required: true,
              label: 'Location Name',
              admin: {
                description: 'e.g., "Clearwater", "Lake Mary"',
              },
            },
            {
              name: 'platform',
              type: 'text',
              defaultValue: 'Google',
              label: 'Platform Name',
              admin: {
                description: 'e.g., "Google", "Yelp"',
              },
            },
            {
              name: 'displayName',
              type: 'text',
              label: 'Display Name',
              admin: {
                description: 'Optional: Override the display name (e.g., "Google - Clearwater")',
              },
            },
            {
              name: 'rating',
              type: 'number',
              required: true,
              min: 0,
              max: 5,
              admin: {
                step: 0.1,
                description: 'Rating value (0-5)',
              },
            },
            {
              name: 'reviewCount',
              type: 'number',
              required: true,
              label: 'Number of Reviews',
            },
            {
              name: 'url',
              type: 'text',
              required: true,
              label: 'Review URL',
              admin: {
                description: 'Full URL to the reviews page',
              },
            },
            {
              name: 'ariaLabel',
              type: 'text',
              label: 'ARIA Label',
              admin: {
                description: 'e.g., "Google - Clearwater reviews that open in a new tab"',
              },
            },
            {
              name: 'openInNewTab',
              type: 'checkbox',
              label: 'Open in New Tab',
              defaultValue: true,
            },
            {
              name: 'backgroundColor',
              type: 'text',
              label: 'Card Background Color',
              admin: {
                description: 'Override section background color for this card',
              },
            },
            {
              name: 'textColor',
              type: 'text',
              label: 'Card Text Color',
              admin: {
                description: 'Override section text color for this card',
              },
            },
            {
              name: 'starColor',
              type: 'text',
              label: 'Star Color',
              admin: {
                description: 'Custom star icon color for this card',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'reviewsListSection',
      type: 'group',
      label: 'Reviews List Section',
      fields: [
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Background Color',
        },
        {
          name: 'textColor',
          type: 'text',
          label: 'Text Color',
        },
        {
          name: 'displayOption',
          type: 'select',
          label: 'Display Option',
          defaultValue: 'option-1',
          options: [
            { label: 'Option 1', value: 'option-1' },
            { label: 'Option 2', value: 'option-2' },
            { label: 'Option 3', value: 'option-3' },
          ],
          admin: {
            description: 'Choose the layout style for reviews',
          },
        },
        {
          name: 'reviews',
          type: 'array',
          label: 'Customer Reviews',
          admin: {
            description: 'Drag to reorder reviews',
          },
          fields: [
            {
              name: 'content',
              type: 'textarea',
              required: true,
              label: 'Review Content',
            },
            {
              name: 'author',
              type: 'text',
              required: true,
              label: 'Author Name',
            },
            {
              name: 'rating',
              type: 'number',
              required: true,
              defaultValue: 5,
              min: 1,
              max: 5,
              label: 'Star Rating',
            },
            {
              name: 'backgroundColor',
              type: 'text',
              label: 'Review Card Background Color',
              admin: {
                description: 'Override section background for this review card',
              },
            },
            {
              name: 'textColor',
              type: 'text',
              label: 'Review Card Text Color',
              admin: {
                description: 'Override section text color for this review card',
              },
            },
            {
              name: 'starColor',
              type: 'text',
              label: 'Star Color',
              admin: {
                description: 'Custom star icon color for this review',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'globalStyles',
      type: 'group',
      label: 'Global Styles',
      fields: [
        {
          name: 'containerMaxWidth',
          type: 'text',
          label: 'Container Max Width',
          admin: {
            description: 'CSS max-width value (e.g., 1200px, 100%)',
          },
        },
        {
          name: 'containerPadding',
          type: 'text',
          label: 'Container Padding',
          admin: {
            description: 'CSS padding value (e.g., 20px, 1rem 2rem)',
          },
        },
        {
          name: 'sectionSpacing',
          type: 'text',
          label: 'Section Spacing',
          admin: {
            description: 'Spacing between sections (e.g., 60px, 4rem)',
          },
        },
        {
          name: 'fontFamily',
          type: 'text',
          label: 'Font Family',
          admin: {
            description: 'CSS font-family value',
          },
        },
        {
          name: 'primaryColor',
          type: 'text',
          label: 'Primary Color',
          admin: {
            description: 'Primary brand color',
          },
        },
        {
          name: 'secondaryColor',
          type: 'text',
          label: 'Secondary Color',
          admin: {
            description: 'Secondary brand color',
          },
        },
        {
          name: 'defaultStarColor',
          type: 'text',
          label: 'Default Star Color',
          defaultValue: '#FFD700',
          admin: {
            description: 'Default color for star ratings',
          },
        },
      ],
    },
    {
      name: 'seoSettings',
      type: 'group',
      label: 'SEO Settings',
      fields: [
        {
          name: 'metaTitle',
          type: 'text',
          label: 'Meta Title',
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          label: 'Meta Description',
        },
        {
          name: 'metaKeywords',
          type: 'text',
          label: 'Meta Keywords',
        },
        {
          name: 'ogImage',
          type: 'upload',
          relationTo: 'media',
          label: 'OG Image',
        },
      ],
    },
    {
      name: 'isActive',
      type: 'checkbox',
      label: 'Active',
      defaultValue: true,
      admin: {
        description: 'Toggle to enable/disable this component',
      },
    },
  ],
  timestamps: true,
}
