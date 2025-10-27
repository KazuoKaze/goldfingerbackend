import { CollectionConfig } from 'payload'

export const OurFoundersComponent: CollectionConfig = {
  slug: 'our-founders-component',
  admin: {
    useAsTitle: 'componentTitle',
    defaultColumns: ['componentTitle', 'isActive', 'order'],
    group: 'Components',
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => !!user,
    update: ({ req: { user } }) => !!user,
    delete: ({ req: { user } }) => !!user,
  },
  fields: [
    {
      name: 'componentTitle',
      type: 'text',
      required: true,
      label: 'Component Title (Internal)',
      defaultValue: 'Our Founders Page',
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
      label: 'Active',
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      label: 'Display Order',
    },

    // Hero Banner Section
    {
      name: 'heroSection',
      type: 'group',
      label: 'Hero Banner Section',
      fields: [
        {
          name: 'isActive',
          type: 'checkbox',
          defaultValue: true,
          label: 'Show Hero Section',
        },
        {
          name: 'order',
          type: 'number',
          defaultValue: 0,
          label: 'Section Order',
        },
        {
          name: 'className',
          type: 'text',
          label: 'CSS Class Names',
          defaultValue: 'mod_hero banner mobile-stack',
        },
        {
          name: 'styles',
          type: 'group',
          label: 'Hero Section Styles',
          fields: [
            {
              name: 'backgroundColor',
              type: 'text',
              label: 'Background Color',
              defaultValue: 'transparent',
            },
            {
              name: 'paddingTop',
              type: 'text',
              label: 'Padding Top',
              defaultValue: '0',
            },
            {
              name: 'paddingBottom',
              type: 'text',
              label: 'Padding Bottom',
              defaultValue: '0',
            },
            {
              name: 'marginTop',
              type: 'text',
              label: 'Margin Top',
              defaultValue: '0',
            },
            {
              name: 'marginBottom',
              type: 'text',
              label: 'Margin Bottom',
              defaultValue: '0',
            },
          ],
        },
        {
          name: 'backgroundImage',
          type: 'group',
          label: 'Background Texture Image',
          fields: [
            {
              name: 'show',
              type: 'checkbox',
              defaultValue: true,
              label: 'Show Background Image',
            },
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              label: 'Background Image',
            },
            {
              name: 'imageUrl',
              type: 'text',
              label: 'Background Image URL (fallback)',
              defaultValue:
                'https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg',
            },
            {
              name: 'alt',
              type: 'text',
              label: 'Alt Text',
              defaultValue: 'Background Texture',
            },
            {
              name: 'width',
              type: 'number',
              label: 'Width',
              defaultValue: 1994,
            },
            {
              name: 'height',
              type: 'number',
              label: 'Height',
              defaultValue: 1206,
            },
          ],
        },
        {
          name: 'breadcrumbs',
          type: 'group',
          label: 'Breadcrumbs',
          fields: [
            {
              name: 'show',
              type: 'checkbox',
              defaultValue: true,
              label: 'Show Breadcrumbs',
            },
            {
              name: 'className',
              type: 'text',
              label: 'CSS Class',
              defaultValue: 'partial_breadcrumb',
            },
            {
              name: 'styles',
              type: 'group',
              label: 'Breadcrumb Styles',
              fields: [
                {
                  name: 'textColor',
                  type: 'text',
                  label: 'Text Color',
                  defaultValue: '#000000',
                },
                {
                  name: 'linkColor',
                  type: 'text',
                  label: 'Link Color',
                  defaultValue: '#0066cc',
                },
                {
                  name: 'hoverColor',
                  type: 'text',
                  label: 'Hover Color',
                  defaultValue: '#004999',
                },
                {
                  name: 'fontSize',
                  type: 'text',
                  label: 'Font Size',
                  defaultValue: '0.9rem',
                },
              ],
            },
            {
              name: 'items',
              type: 'array',
              label: 'Breadcrumb Items',
              labels: {
                singular: 'Breadcrumb',
                plural: 'Breadcrumbs',
              },
              admin: {
                // components: {
                //   RowLabel: ({ data, index }) => {
                //     return data?.text || `Breadcrumb ${index + 1}`
                //   },
                // },
              },
              fields: [
                {
                  name: 'order',
                  type: 'number',
                  label: 'Order',
                  defaultValue: 0,
                },
                {
                  name: 'text',
                  type: 'text',
                  required: true,
                  label: 'Breadcrumb Text',
                },
                {
                  name: 'link',
                  type: 'text',
                  label: 'Link URL',
                },
                {
                  name: 'ariaLabel',
                  type: 'text',
                  label: 'ARIA Label',
                  defaultValue: 'Breadcrumbs to help navigate the user',
                },
                {
                  name: 'isActive',
                  type: 'checkbox',
                  defaultValue: true,
                  label: 'Active',
                },
              ],
            },
          ],
        },
        {
          name: 'heading',
          type: 'group',
          label: 'Hero Heading (H1)',
          fields: [
            {
              name: 'text',
              type: 'text',
              required: true,
              label: 'Heading Text',
              defaultValue: 'Our Founders',
            },
            {
              name: 'tag',
              type: 'select',
              label: 'HTML Tag',
              defaultValue: 'h1',
              options: [
                { label: 'H1', value: 'h1' },
                { label: 'H2', value: 'h2' },
                { label: 'H3', value: 'h3' },
              ],
            },
            {
              name: 'styles',
              type: 'group',
              label: 'Heading Styles',
              fields: [
                {
                  name: 'color',
                  type: 'text',
                  label: 'Text Color',
                  defaultValue: '#000000',
                },
                {
                  name: 'fontSize',
                  type: 'text',
                  label: 'Font Size',
                  defaultValue: '3rem',
                },
                {
                  name: 'fontWeight',
                  type: 'text',
                  label: 'Font Weight',
                  defaultValue: '700',
                },
                {
                  name: 'textAlign',
                  type: 'select',
                  label: 'Text Align',
                  defaultValue: 'left',
                  options: [
                    { label: 'Left', value: 'left' },
                    { label: 'Center', value: 'center' },
                    { label: 'Right', value: 'right' },
                  ],
                },
                {
                  name: 'marginTop',
                  type: 'text',
                  label: 'Margin Top',
                  defaultValue: '0',
                },
                {
                  name: 'marginBottom',
                  type: 'text',
                  label: 'Margin Bottom',
                  defaultValue: '0',
                },
              ],
            },
          ],
        },
        {
          name: 'mainImage',
          type: 'group',
          label: 'Hero Main Image',
          fields: [
            {
              name: 'show',
              type: 'checkbox',
              defaultValue: true,
              label: 'Show Main Image',
            },
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              label: 'Hero Image',
            },
            {
              name: 'imageUrl',
              type: 'text',
              label: 'Image URL (fallback)',
              defaultValue:
                'https://www.datocms-assets.com/105497/1694800297-our-founders-banner.jpg',
            },
            {
              name: 'alt',
              type: 'text',
              label: 'Alt Text',
              defaultValue: 'Dr. James Young & woman with long red hair',
            },
            {
              name: 'width',
              type: 'number',
              label: 'Width',
              defaultValue: 1920,
            },
            {
              name: 'height',
              type: 'number',
              label: 'Height',
              defaultValue: 1206,
            },
            {
              name: 'styles',
              type: 'group',
              label: 'Image Styles',
              fields: [
                {
                  name: 'objectFit',
                  type: 'select',
                  label: 'Object Fit',
                  defaultValue: 'cover',
                  options: [
                    { label: 'Cover', value: 'cover' },
                    { label: 'Contain', value: 'contain' },
                    { label: 'Fill', value: 'fill' },
                    { label: 'None', value: 'none' },
                  ],
                },
                {
                  name: 'borderRadius',
                  type: 'text',
                  label: 'Border Radius',
                  defaultValue: '0',
                },
              ],
            },
          ],
        },
      ],
    },

    // Intro Module Section
    {
      name: 'introSection',
      type: 'group',
      label: 'Intro Section',
      fields: [
        {
          name: 'isActive',
          type: 'checkbox',
          defaultValue: true,
          label: 'Show Intro Section',
        },
        {
          name: 'order',
          type: 'number',
          defaultValue: 1,
          label: 'Section Order',
        },
        {
          name: 'className',
          type: 'text',
          label: 'CSS Class Names',
          defaultValue: 'mod_intro container viewport option-1 wide wow fadeInUp',
        },
        {
          name: 'styles',
          type: 'group',
          label: 'Section Styles',
          fields: [
            {
              name: 'backgroundColor',
              type: 'text',
              label: 'Background Color',
              defaultValue: '#ffffff',
            },
            {
              name: 'paddingTop',
              type: 'text',
              label: 'Padding Top',
              defaultValue: '60px',
            },
            {
              name: 'paddingBottom',
              type: 'text',
              label: 'Padding Bottom',
              defaultValue: '60px',
            },
            {
              name: 'marginTop',
              type: 'text',
              label: 'Margin Top',
              defaultValue: '0',
            },
            {
              name: 'marginBottom',
              type: 'text',
              label: 'Margin Bottom',
              defaultValue: '0',
            },
            {
              name: 'textAlign',
              type: 'select',
              label: 'Text Align',
              defaultValue: 'center',
              options: [
                { label: 'Left', value: 'left' },
                { label: 'Center', value: 'center' },
                { label: 'Right', value: 'right' },
              ],
            },
          ],
        },
        {
          name: 'logo',
          type: 'group',
          label: 'Logo',
          fields: [
            {
              name: 'show',
              type: 'checkbox',
              defaultValue: true,
              label: 'Show Logo',
            },
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              label: 'Logo Image',
            },
            {
              name: 'imageUrl',
              type: 'text',
              label: 'Logo URL (fallback)',
              defaultValue: 'https://www.datocms-assets.com/105497/1692813243-logo-module.svg',
            },
            {
              name: 'alt',
              type: 'text',
              label: 'Alt Text',
              defaultValue: 'Goldfingers aesthetic logo',
            },
            {
              name: 'width',
              type: 'number',
              label: 'Width',
              defaultValue: 58,
            },
            {
              name: 'height',
              type: 'number',
              label: 'Height',
              defaultValue: 64,
            },
            {
              name: 'styles',
              type: 'group',
              label: 'Logo Styles',
              fields: [
                {
                  name: 'marginBottom',
                  type: 'text',
                  label: 'Margin Bottom',
                  defaultValue: '20px',
                },
              ],
            },
          ],
        },
        {
          name: 'heading',
          type: 'group',
          label: 'Heading (H2)',
          fields: [
            {
              name: 'text',
              type: 'textarea',
              required: true,
              label: 'Heading Text',
              defaultValue: 'Pioneering Excellence in Aesthetic Care Across Florida',
            },
            {
              name: 'tag',
              type: 'select',
              label: 'HTML Tag',
              defaultValue: 'h2',
              options: [
                { label: 'H1', value: 'h1' },
                { label: 'H2', value: 'h2' },
                { label: 'H3', value: 'h3' },
              ],
            },
            {
              name: 'styles',
              type: 'group',
              label: 'Heading Styles',
              fields: [
                {
                  name: 'color',
                  type: 'text',
                  label: 'Text Color',
                  defaultValue: '#000000',
                },
                {
                  name: 'fontSize',
                  type: 'text',
                  label: 'Font Size',
                  defaultValue: '2.5rem',
                },
                {
                  name: 'fontWeight',
                  type: 'text',
                  label: 'Font Weight',
                  defaultValue: '700',
                },
                {
                  name: 'lineHeight',
                  type: 'text',
                  label: 'Line Height',
                  defaultValue: '1.3',
                },
                {
                  name: 'marginBottom',
                  type: 'text',
                  label: 'Margin Bottom',
                  defaultValue: '20px',
                },
              ],
            },
          ],
        },
        {
          name: 'paragraphs',
          type: 'array',
          label: 'Content Paragraphs',
          labels: {
            singular: 'Paragraph',
            plural: 'Paragraphs',
          },
          admin: {
            // components: {
            //   RowLabel: ({ data, index }) => {
            //     return data?.text?.substring(0, 50) || `Paragraph ${index + 1}`
            //   },
            // },
          },
          fields: [
            {
              name: 'order',
              type: 'number',
              label: 'Order',
              defaultValue: 0,
            },
            {
              name: 'text',
              type: 'textarea',
              required: true,
              label: 'Paragraph Text',
            },
            {
              name: 'isActive',
              type: 'checkbox',
              defaultValue: true,
              label: 'Active',
            },
          ],
        },
        {
          name: 'contentStyles',
          type: 'group',
          label: 'Content Styles',
          fields: [
            {
              name: 'color',
              type: 'text',
              label: 'Text Color',
              defaultValue: '#666666',
            },
            {
              name: 'fontSize',
              type: 'text',
              label: 'Font Size',
              defaultValue: '1.1rem',
            },
            {
              name: 'lineHeight',
              type: 'text',
              label: 'Line Height',
              defaultValue: '1.6',
            },
            {
              name: 'maxWidth',
              type: 'text',
              label: 'Max Width',
              defaultValue: '800px',
            },
            {
              name: 'paragraphSpacing',
              type: 'text',
              label: 'Paragraph Spacing',
              defaultValue: '15px',
            },
          ],
        },
      ],
    },

    // Half Image Module Section
    {
      name: 'halfImageSection',
      type: 'group',
      label: 'Half Image Section',
      fields: [
        {
          name: 'isActive',
          type: 'checkbox',
          defaultValue: true,
          label: 'Show Half Image Section',
        },
        {
          name: 'order',
          type: 'number',
          defaultValue: 2,
          label: 'Section Order',
        },
        {
          name: 'className',
          type: 'text',
          label: 'CSS Class Names',
          defaultValue: 'mod_half_image viewport half-image container wow fadeInLeft',
        },
        {
          name: 'styles',
          type: 'group',
          label: 'Section Styles',
          fields: [
            {
              name: 'backgroundColor',
              type: 'text',
              label: 'Background Color',
              defaultValue: '#f9f9f9',
            },
            {
              name: 'paddingTop',
              type: 'text',
              label: 'Padding Top',
              defaultValue: '80px',
            },
            {
              name: 'paddingBottom',
              type: 'text',
              label: 'Padding Bottom',
              defaultValue: '80px',
            },
            {
              name: 'marginTop',
              type: 'text',
              label: 'Margin Top',
              defaultValue: '0',
            },
            {
              name: 'marginBottom',
              type: 'text',
              label: 'Margin Bottom',
              defaultValue: '0',
            },
          ],
        },
        {
          name: 'layout',
          type: 'select',
          label: 'Layout',
          defaultValue: 'image-left',
          options: [
            { label: 'Image Left, Content Right', value: 'image-left' },
            { label: 'Content Left, Image Right', value: 'image-right' },
          ],
        },
        {
          name: 'imageContainer',
          type: 'group',
          label: 'Image Container',
          fields: [
            {
              name: 'className',
              type: 'text',
              label: 'CSS Class',
              defaultValue: 'media',
            },
            {
              name: 'styles',
              type: 'group',
              label: 'Container Styles',
              fields: [
                {
                  name: 'backgroundColor',
                  type: 'text',
                  label: 'Background Color',
                  defaultValue: 'transparent',
                },
                {
                  name: 'borderRadius',
                  type: 'text',
                  label: 'Border Radius',
                  defaultValue: '0',
                },
                {
                  name: 'padding',
                  type: 'text',
                  label: 'Padding',
                  defaultValue: '0',
                },
              ],
            },
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              label: 'Image',
            },
            {
              name: 'imageUrl',
              type: 'text',
              label: 'Image URL (fallback)',
              defaultValue: 'https://www.datocms-assets.com/105497/1694799633-our-founders.jpg',
            },
            {
              name: 'alt',
              type: 'text',
              label: 'Alt Text',
              defaultValue: '',
            },
            {
              name: 'width',
              type: 'number',
              label: 'Width',
              defaultValue: 1832,
            },
            {
              name: 'height',
              type: 'number',
              label: 'Height',
              defaultValue: 1824,
            },
            {
              name: 'imageStyles',
              type: 'group',
              label: 'Image Styles',
              fields: [
                {
                  name: 'objectFit',
                  type: 'select',
                  label: 'Object Fit',
                  defaultValue: 'cover',
                  options: [
                    { label: 'Cover', value: 'cover' },
                    { label: 'Contain', value: 'contain' },
                    { label: 'Fill', value: 'fill' },
                    { label: 'None', value: 'none' },
                  ],
                },
                {
                  name: 'borderRadius',
                  type: 'text',
                  label: 'Border Radius',
                  defaultValue: '0',
                },
              ],
            },
          ],
        },
        {
          name: 'contentContainer',
          type: 'group',
          label: 'Content Container',
          fields: [
            {
              name: 'className',
              type: 'text',
              label: 'CSS Class',
              defaultValue: 'copy',
            },
            {
              name: 'styles',
              type: 'group',
              label: 'Container Styles',
              fields: [
                {
                  name: 'backgroundColor',
                  type: 'text',
                  label: 'Background Color',
                  defaultValue: 'transparent',
                },
                {
                  name: 'padding',
                  type: 'text',
                  label: 'Padding',
                  defaultValue: '40px',
                },
                {
                  name: 'textAlign',
                  type: 'select',
                  label: 'Text Align',
                  defaultValue: 'left',
                  options: [
                    { label: 'Left', value: 'left' },
                    { label: 'Center', value: 'center' },
                    { label: 'Right', value: 'right' },
                  ],
                },
              ],
            },
            {
              name: 'heading',
              type: 'group',
              label: 'Main Heading (H2)',
              fields: [
                {
                  name: 'smallText',
                  type: 'group',
                  label: 'Small Text (before main heading)',
                  fields: [
                    {
                      name: 'show',
                      type: 'checkbox',
                      defaultValue: true,
                      label: 'Show Small Text',
                    },
                    {
                      name: 'text',
                      type: 'text',
                      label: 'Text',
                      defaultValue: 'Goldfingers Aesthetics –',
                    },
                    {
                      name: 'className',
                      type: 'text',
                      label: 'CSS Class',
                      defaultValue: 'small',
                    },
                    {
                      name: 'styles',
                      type: 'group',
                      label: 'Styles',
                      fields: [
                        {
                          name: 'color',
                          type: 'text',
                          label: 'Text Color',
                          defaultValue: '#999999',
                        },
                        {
                          name: 'fontSize',
                          type: 'text',
                          label: 'Font Size',
                          defaultValue: '0.9rem',
                        },
                        {
                          name: 'fontWeight',
                          type: 'text',
                          label: 'Font Weight',
                          defaultValue: '400',
                        },
                      ],
                    },
                  ],
                },
                {
                  name: 'text',
                  type: 'textarea',
                  required: true,
                  label: 'Heading Text',
                  defaultValue: 'Where Beauty Happens Every Day.',
                },
                {
                  name: 'tag',
                  type: 'select',
                  label: 'HTML Tag',
                  defaultValue: 'h2',
                  options: [
                    { label: 'H1', value: 'h1' },
                    { label: 'H2', value: 'h2' },
                    { label: 'H3', value: 'h3' },
                  ],
                },
                {
                  name: 'styles',
                  type: 'group',
                  label: 'Heading Styles',
                  fields: [
                    {
                      name: 'color',
                      type: 'text',
                      label: 'Text Color',
                      defaultValue: '#000000',
                    },
                    {
                      name: 'fontSize',
                      type: 'text',
                      label: 'Font Size',
                      defaultValue: '2rem',
                    },
                    {
                      name: 'fontWeight',
                      type: 'text',
                      label: 'Font Weight',
                      defaultValue: '700',
                    },
                    {
                      name: 'lineHeight',
                      type: 'text',
                      label: 'Line Height',
                      defaultValue: '1.3',
                    },
                    {
                      name: 'marginBottom',
                      type: 'text',
                      label: 'Margin Bottom',
                      defaultValue: '20px',
                    },
                  ],
                },
              ],
            },
            {
              name: 'paragraphs',
              type: 'array',
              label: 'Content Paragraphs',
              labels: {
                singular: 'Paragraph',
                plural: 'Paragraphs',
              },
              admin: {
                // components: {
                //   RowLabel: ({ data, index }) => {
                //     return data?.text?.substring(0, 50) || `Paragraph ${index + 1}`
                //   },
                // },
              },
              fields: [
                {
                  name: 'order',
                  type: 'number',
                  label: 'Order',
                  defaultValue: 0,
                },
                {
                  name: 'text',
                  type: 'textarea',
                  required: true,
                  label: 'Paragraph Text',
                },
                {
                  name: 'isActive',
                  type: 'checkbox',
                  defaultValue: true,
                  label: 'Active',
                },
              ],
            },
            {
              name: 'contentStyles',
              type: 'group',
              label: 'Content Styles',
              fields: [
                {
                  name: 'color',
                  type: 'text',
                  label: 'Text Color',
                  defaultValue: '#666666',
                },
                {
                  name: 'fontSize',
                  type: 'text',
                  label: 'Font Size',
                  defaultValue: '1rem',
                },
                {
                  name: 'lineHeight',
                  type: 'text',
                  label: 'Line Height',
                  defaultValue: '1.6',
                },
                {
                  name: 'paragraphSpacing',
                  type: 'text',
                  label: 'Paragraph Spacing',
                  defaultValue: '15px',
                },
              ],
            },
          ],
        },
      ],
    },

    // Global Page Settings
    {
      name: 'pageSettings',
      type: 'group',
      label: 'Global Page Settings',
      fields: [
        {
          name: 'containerWidth',
          type: 'text',
          label: 'Container Width',
          defaultValue: '1200px',
        },
        {
          name: 'fontFamily',
          type: 'text',
          label: 'Font Family',
          defaultValue: 'Arial, sans-serif',
        },
        {
          name: 'animations',
          type: 'group',
          label: 'Animation Settings',
          fields: [
            {
              name: 'enableAnimations',
              type: 'checkbox',
              defaultValue: true,
              label: 'Enable Animations',
            },
            {
              name: 'fadeInDuration',
              type: 'text',
              label: 'Fade In Duration',
              defaultValue: '1s',
            },
          ],
        },
      ],
    },

    // SEO Settings
    {
      name: 'seo',
      type: 'group',
      label: 'SEO Settings',
      fields: [
        {
          name: 'metaTitle',
          type: 'text',
          label: 'Meta Title',
          defaultValue: 'Our Founders | Goldfingers Aesthetics',
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
  ],
}

// export default OurFoundersComponent
