import { CollectionConfig } from 'payload'

export const ConfidentialityStatementComponent: CollectionConfig = {
  slug: 'confidentiality-statement-component',
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
      defaultValue: 'Confidentiality Statement Component',
    },
    {
      name: 'sections',
      type: 'array',
      label: 'Page Sections',
      admin: {
        description: 'Drag to reorder sections on the page',
        
      },
      fields: [
        {
          name: 'sectionType',
          type: 'select',
          required: true,
          options: [
            { label: 'Hero Section', value: 'hero' },
            { label: 'Intro Section', value: 'intro' },
            { label: 'Banner Section', value: 'banner' },
            { label: 'Column Section', value: 'column' },
          ],
        },
        {
          name: 'sectionId',
          type: 'text',
          label: 'Section ID',
          admin: {
            description: 'Unique identifier for this section (optional)',
          },
        },
        {
          name: 'heroSection',
          type: 'group',
          label: 'Hero Section Settings',
          admin: {
            condition: (data, siblingData) => siblingData?.sectionType === 'hero',
          },
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
              label: 'Background Image',
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
              defaultValue: "Protecting the Privacy of Patients' Health Information",
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
              label: 'Main Media Image',
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
                  defaultValue: 'Beach in Clearwater, FL',
                },
              ],
            },
            {
              name: 'cssClasses',
              type: 'text',
              label: 'Additional CSS Classes',
              admin: {
                description: 'Space-separated CSS classes (e.g., mobile-stack)',
              },
            },
          ],
        },
        {
          name: 'introSection',
          type: 'group',
          label: 'Intro Section Settings',
          admin: {
            condition: (data, siblingData) => siblingData?.sectionType === 'intro',
          },
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
              name: 'containerWidth',
              type: 'select',
              label: 'Container Width',
              options: [
                { label: 'Default', value: 'default' },
                { label: 'Wide', value: 'wide' },
                { label: 'Narrow', value: 'narrow' },
              ],
              defaultValue: 'wide',
            },
            {
              name: 'showLogo',
              type: 'checkbox',
              label: 'Show Logo',
              defaultValue: true,
            },
            {
              name: 'logo',
              type: 'upload',
              relationTo: 'media',
              label: 'Logo Image',
              admin: {
                condition: (data, siblingData) => siblingData?.showLogo,
              },
            },
            {
              name: 'logoAlt',
              type: 'text',
              label: 'Logo Alt Text',
              defaultValue: 'Goldfingers aesthetic logo',
              admin: {
                condition: (data, siblingData) => siblingData?.showLogo,
              },
            },
            {
              name: 'heading',
              type: 'text',
              label: 'Heading',
              required: true,
            },
            {
              name: 'headingColor',
              type: 'text',
              label: 'Heading Color',
            },
            {
              name: 'content',
              type: 'richText',
              label: 'Content',
              required: true,
            },
            {
              name: 'cssClasses',
              type: 'text',
              label: 'Additional CSS Classes',
              admin: {
                description: 'Space-separated CSS classes (e.g., option-1 viewport)',
              },
            },
          ],
        },
        {
          name: 'bannerSection',
          type: 'group',
          label: 'Banner Section Settings',
          admin: {
            condition: (data, siblingData) => siblingData?.sectionType === 'banner',
          },
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
              name: 'theme',
              type: 'select',
              label: 'Theme',
              options: [
                { label: 'Light', value: 'light' },
                { label: 'Dark', value: 'dark' },
              ],
              defaultValue: 'dark',
            },
            {
              name: 'hideDivider',
              type: 'checkbox',
              label: 'Hide Divider',
              defaultValue: true,
            },
            {
              name: 'backgroundImage',
              type: 'group',
              label: 'Background Image',
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
                  defaultValue: 'Banner media',
                },
              ],
            },
            {
              name: 'heading',
              type: 'text',
              label: 'Heading',
              required: true,
            },
            {
              name: 'headingColor',
              type: 'text',
              label: 'Heading Color',
            },
            {
              name: 'content',
              type: 'richText',
              label: 'Content',
              required: true,
            },
            {
              name: 'cssClasses',
              type: 'text',
              label: 'Additional CSS Classes',
              admin: {
                description: 'Space-separated CSS classes (e.g., viewport background-1)',
              },
            },
          ],
        },
        {
          name: 'columnSection',
          type: 'group',
          label: 'Column Section Settings',
          admin: {
            condition: (data, siblingData) => siblingData?.sectionType === 'column',
          },
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
              name: 'containerWidth',
              type: 'select',
              label: 'Container Width',
              options: [
                { label: 'Default', value: 'default' },
                { label: 'Container', value: 'container' },
                { label: 'Wide', value: 'wide' },
              ],
              defaultValue: 'container',
            },
            {
              name: 'columns',
              type: 'array',
              label: 'Columns',
              admin: {
                description: 'Drag to reorder columns',
              },
              fields: [
                {
                  name: 'heading',
                  type: 'text',
                  label: 'Heading',
                  required: true,
                },
                {
                  name: 'headingColor',
                  type: 'text',
                  label: 'Heading Color',
                },
                {
                  name: 'content',
                  type: 'richText',
                  label: 'Content',
                  required: true,
                },
                {
                  name: 'backgroundColor',
                  type: 'text',
                  label: 'Column Background Color',
                  admin: {
                    description: 'Override section background for this column',
                  },
                },
                {
                  name: 'textColor',
                  type: 'text',
                  label: 'Column Text Color',
                  admin: {
                    description: 'Override section text color for this column',
                  },
                },
              ],
            },
            {
              name: 'cssClasses',
              type: 'text',
              label: 'Additional CSS Classes',
              admin: {
                description: 'Space-separated CSS classes (e.g., viewport)',
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
            description: 'Main brand color',
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
          type: 'richText',
          label: 'Meta Description',
        },
        {
          name: 'ogImage',
          type: 'upload',
          relationTo: 'media',
          label: 'OG Image',
        },
        {
          name: 'canonicalUrl',
          type: 'text',
          label: 'Canonical URL',
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
