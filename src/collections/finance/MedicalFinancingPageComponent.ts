import { CollectionConfig } from 'payload'

export const MedicalFinancingPageComponent: CollectionConfig = {
  slug: 'medical-financing-page-component',
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
      defaultValue: 'Medical Financing Page Component',
    },
    // Hero Section (Banner Module)
    {
      name: 'heroSection',
      type: 'group',
      label: 'Hero Section (Banner)',
      fields: [
        {
          name: 'show',
          type: 'checkbox',
          label: 'Show Section',
          defaultValue: true,
        },
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Background Color',
          admin: {
            description: 'CSS color value (e.g., #ffffff, rgba(0,0,0,0.5))',
          },
        },
        {
          name: 'textColor',
          type: 'text',
          label: 'Text Color',
          admin: {
            description: 'CSS color value for all text in this section',
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
              label: 'Breadcrumb Label',
              required: true,
            },
            {
              name: 'url',
              type: 'text',
              label: 'Breadcrumb URL',
              required: true,
            },
            {
              name: 'ariaLabel',
              type: 'text',
              label: 'ARIA Label',
              defaultValue: 'Breadcrumbs to help navigate the user',
            },
          ],
          defaultValue: [
            {
              label: 'Home',
              url: '/',
              ariaLabel: 'Breadcrumbs to help navigate the user',
            },
            {
              label: 'Financing',
              url: '/financing/',
              ariaLabel: 'Breadcrumbs to help navigate the user',
            },
          ],
        },
        {
          name: 'breadcrumbTextColor',
          type: 'text',
          label: 'Breadcrumb Text Color',
          admin: {
            description: 'CSS color value for breadcrumb links',
          },
        },
        {
          name: 'titleFirstLine',
          type: 'text',
          label: 'Title First Line',
          admin: {
            description: 'First line of title (e.g., "Medical Aesthetic")',
          },
          defaultValue: 'Medical Aesthetic',
        },
        {
          name: 'titleSecondLine',
          type: 'text',
          label: 'Title Second Line',
          admin: {
            description: 'Second line of title (e.g., "Treatment Financing")',
          },
          defaultValue: 'Treatment Financing',
        },
        {
          name: 'titleBreakOnDesktop',
          type: 'checkbox',
          label: 'Break Title on Desktop',
          defaultValue: true,
          admin: {
            description: 'Add line break to second line on desktop (block-desktop class)',
          },
        },
        {
          name: 'titleClass',
          type: 'text',
          label: 'Title CSS Class',
          admin: {
            description: 'Additional CSS classes for title (e.g., "long-title")',
          },
          defaultValue: 'long-title',
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
          name: 'titleFontWeight',
          type: 'text',
          label: 'Title Font Weight',
          admin: {
            description: 'CSS font-weight value (e.g., 700, bold)',
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
              defaultValue: 'Person entering their credit card information on their cell phone',
            },
            {
              name: 'width',
              type: 'text',
              label: 'Image Width',
              admin: {
                description: 'Width in pixels (e.g., 1920)',
              },
              defaultValue: '1920',
            },
            {
              name: 'height',
              type: 'text',
              label: 'Image Height',
              admin: {
                description: 'Height in pixels (e.g., 1206)',
              },
              defaultValue: '1206',
            },
          ],
        },
        {
          name: 'layoutStyle',
          type: 'select',
          label: 'Layout Style',
          options: [
            { label: 'Mobile Stack', value: 'mobile-stack' },
            { label: 'Full Width', value: 'full-width' },
            { label: 'Centered', value: 'centered' },
          ],
          defaultValue: 'mobile-stack',
        },
        {
          name: 'moduleClass',
          type: 'text',
          label: 'Module CSS Classes',
          admin: {
            description: 'Additional CSS classes for module (e.g., "banner mobile-stack")',
          },
          defaultValue: 'banner mobile-stack',
        },
      ],
    },
    // Two Column Section
    {
      name: 'twoColumnSection',
      type: 'group',
      label: 'Two Column Section',
      fields: [
        {
          name: 'show',
          type: 'checkbox',
          label: 'Show Section',
          defaultValue: true,
        },
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Background Color',
          admin: {
            description: 'CSS color value (e.g., #f5f5f5, transparent)',
          },
        },
        {
          name: 'textColor',
          type: 'text',
          label: 'Text Color',
          admin: {
            description: 'CSS color value for body text',
          },
        },
        {
          name: 'paddingTop',
          type: 'text',
          label: 'Padding Top',
          admin: {
            description: 'CSS padding value (e.g., 60px, 4rem)',
          },
        },
        {
          name: 'paddingBottom',
          type: 'text',
          label: 'Padding Bottom',
          admin: {
            description: 'CSS padding value (e.g., 60px, 4rem)',
          },
        },
        {
          name: 'containerWidth',
          type: 'select',
          label: 'Container Width',
          options: [
            { label: 'Standard Container', value: 'container' },
            { label: 'Wide', value: 'wide' },
            { label: 'Full Width', value: 'full-width' },
          ],
          defaultValue: 'container',
        },
        {
          name: 'verticalAlign',
          type: 'checkbox',
          label: 'Vertical Align Content',
          defaultValue: true,
          admin: {
            description: 'Vertically center align column content',
          },
        },
        {
          name: 'columnGap',
          type: 'text',
          label: 'Column Gap',
          admin: {
            description: 'Space between columns (e.g., 40px, 2.5rem)',
          },
        },
        {
          name: 'moduleClass',
          type: 'text',
          label: 'Module CSS Classes',
          admin: {
            description: 'Additional CSS classes (e.g., "viewport container")',
          },
          defaultValue: 'viewport container',
        },
        // Left Column
        {
          name: 'leftColumn',
          type: 'group',
          label: 'Left Column',
          fields: [
            {
              name: 'contentType',
              type: 'select',
              label: 'Content Type',
              options: [
                { label: 'Image', value: 'image' },
                { label: 'Rich Text', value: 'richtext' },
                { label: 'Custom HTML', value: 'html' },
              ],
              defaultValue: 'image',
            },
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              label: 'Image',
              admin: {
                condition: (data, siblingData) => siblingData?.contentType === 'image',
              },
            },
            {
              name: 'imageUrl',
              type: 'text',
              label: 'Image URL',
              admin: {
                description: 'Direct URL to image (alternative to upload)',
                condition: (data, siblingData) => siblingData?.contentType === 'image',
              },
            },
            {
              name: 'imageAlt',
              type: 'text',
              label: 'Image Alt Text',
              admin: {
                condition: (data, siblingData) => siblingData?.contentType === 'image',
              },
            },
            {
              name: 'imageWidth',
              type: 'text',
              label: 'Image Width',
              admin: {
                description: 'Max width for image (e.g., 370px, 100%)',
                condition: (data, siblingData) => siblingData?.contentType === 'image',
              },
            },
            {
              name: 'imageHeight',
              type: 'text',
              label: 'Image Height',
              admin: {
                description: 'Max height for image (e.g., 370px, auto)',
                condition: (data, siblingData) => siblingData?.contentType === 'image',
              },
            },
            {
              name: 'content',
              type: 'richText',
              label: 'Rich Text Content',
              admin: {
                condition: (data, siblingData) => siblingData?.contentType === 'richtext',
              },
            },
            {
              name: 'htmlContent',
              type: 'textarea',
              label: 'Custom HTML',
              admin: {
                condition: (data, siblingData) => siblingData?.contentType === 'html',
              },
            },
            {
              name: 'backgroundColor',
              type: 'text',
              label: 'Column Background Color',
              admin: {
                description: 'CSS color value for this column',
              },
            },
            {
              name: 'textColor',
              type: 'text',
              label: 'Column Text Color',
              admin: {
                description: 'CSS color value for text in this column',
              },
            },
            {
              name: 'textAlign',
              type: 'select',
              label: 'Text Alignment',
              options: [
                { label: 'Left', value: 'left' },
                { label: 'Center', value: 'center' },
                { label: 'Right', value: 'right' },
              ],
              defaultValue: 'center',
            },
            {
              name: 'animationClass',
              type: 'text',
              label: 'Animation Class',
              admin: {
                description: 'CSS animation class (e.g., fadeInLeft, fadeInUp)',
              },
              defaultValue: 'fadeInLeft',
            },
            {
              name: 'customClass',
              type: 'text',
              label: 'Custom CSS Classes',
              admin: {
                description: 'Additional CSS classes for this column',
              },
            },
          ],
        },
        // Right Column
        {
          name: 'rightColumn',
          type: 'group',
          label: 'Right Column',
          fields: [
            {
              name: 'contentType',
              type: 'select',
              label: 'Content Type',
              options: [
                { label: 'Rich Text', value: 'richtext' },
                { label: 'Image', value: 'image' },
                { label: 'Custom HTML', value: 'html' },
              ],
              defaultValue: 'richtext',
            },
            {
              name: 'heading',
              type: 'text',
              label: 'Heading (H2)',
              admin: {
                description: 'Main heading for right column',
              },
              defaultValue: 'Get treated now. Pay over time.',
            },
            {
              name: 'headingColor',
              type: 'text',
              label: 'Heading Color',
              admin: {
                description: 'CSS color value',
              },
            },
            {
              name: 'headingFontSize',
              type: 'text',
              label: 'Heading Font Size',
              admin: {
                description: 'CSS font-size value (e.g., 32px, 2rem)',
              },
            },
            {
              name: 'headingFontWeight',
              type: 'text',
              label: 'Heading Font Weight',
              admin: {
                description: 'CSS font-weight value',
              },
            },
            {
              name: 'content',
              type: 'richText',
              label: 'Content',
              required: true,
              admin: {
                condition: (data, siblingData) => siblingData?.contentType === 'richtext',
              },
            },
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              label: 'Image',
              admin: {
                condition: (data, siblingData) => siblingData?.contentType === 'image',
              },
            },
            {
              name: 'imageAlt',
              type: 'text',
              label: 'Image Alt Text',
              admin: {
                condition: (data, siblingData) => siblingData?.contentType === 'image',
              },
            },
            {
              name: 'htmlContent',
              type: 'textarea',
              label: 'Custom HTML',
              admin: {
                condition: (data, siblingData) => siblingData?.contentType === 'html',
              },
            },
            {
              name: 'ctaButton',
              type: 'group',
              label: 'CTA Button',
              fields: [
                {
                  name: 'show',
                  type: 'checkbox',
                  label: 'Show Button',
                  defaultValue: true,
                },
                {
                  name: 'text',
                  type: 'text',
                  label: 'Button Text',
                  defaultValue: 'Try Allē Today',
                },
                {
                  name: 'url',
                  type: 'text',
                  label: 'Button URL',
                  defaultValue: 'https://alle.com/lp/payment-plans',
                },
                {
                  name: 'openInNewTab',
                  type: 'checkbox',
                  label: 'Open in New Tab',
                  defaultValue: true,
                },
                {
                  name: 'rel',
                  type: 'text',
                  label: 'Rel Attribute',
                  admin: {
                    description: 'Link relationship (e.g., noopener, nofollow)',
                  },
                  defaultValue: 'noopener',
                },
                {
                  name: 'backgroundColor',
                  type: 'text',
                  label: 'Button Background Color',
                  admin: {
                    description: 'CSS color value',
                  },
                },
                {
                  name: 'textColor',
                  type: 'text',
                  label: 'Button Text Color',
                  admin: {
                    description: 'CSS color value',
                  },
                },
                {
                  name: 'hoverBackgroundColor',
                  type: 'text',
                  label: 'Button Hover Background Color',
                  admin: {
                    description: 'CSS color value',
                  },
                },
                {
                  name: 'hoverTextColor',
                  type: 'text',
                  label: 'Button Hover Text Color',
                  admin: {
                    description: 'CSS color value',
                  },
                },
                {
                  name: 'borderRadius',
                  type: 'text',
                  label: 'Button Border Radius',
                  admin: {
                    description: 'CSS border-radius value (e.g., 4px, 0.5rem)',
                  },
                },
                {
                  name: 'padding',
                  type: 'text',
                  label: 'Button Padding',
                  admin: {
                    description: 'CSS padding value (e.g., 12px 24px)',
                  },
                },
                {
                  name: 'fontSize',
                  type: 'text',
                  label: 'Button Font Size',
                  admin: {
                    description: 'CSS font-size value',
                  },
                },
                {
                  name: 'fontWeight',
                  type: 'text',
                  label: 'Button Font Weight',
                  admin: {
                    description: 'CSS font-weight value',
                  },
                },
                {
                  name: 'customClass',
                  type: 'text',
                  label: 'Button Custom Classes',
                  admin: {
                    description: 'Additional CSS classes (e.g., "btn btn-primary")',
                  },
                  defaultValue: 'btn',
                },
              ],
            },
            {
              name: 'backgroundColor',
              type: 'text',
              label: 'Column Background Color',
              admin: {
                description: 'CSS color value for this column',
              },
            },
            {
              name: 'textColor',
              type: 'text',
              label: 'Column Text Color',
              admin: {
                description: 'CSS color value for text in this column',
              },
            },
            {
              name: 'textAlign',
              type: 'select',
              label: 'Text Alignment',
              options: [
                { label: 'Left', value: 'left' },
                { label: 'Center', value: 'center' },
                { label: 'Right', value: 'right' },
              ],
              defaultValue: 'left',
            },
            {
              name: 'animationClass',
              type: 'text',
              label: 'Animation Class',
              admin: {
                description: 'CSS animation class (e.g., fadeInRight, fadeInUp)',
              },
              defaultValue: 'fadeInRight',
            },
            {
              name: 'customClass',
              type: 'text',
              label: 'Custom CSS Classes',
              admin: {
                description: 'Additional CSS classes for this column',
              },
            },
          ],
        },
      ],
    },
    // Section Order
    {
      name: 'sectionOrder',
      type: 'array',
      label: 'Section Order',
      admin: {
        description: 'Drag to reorder sections on the page',
      },
      fields: [
        {
          name: 'section',
          type: 'select',
          label: 'Section',
          required: true,
          options: [
            { label: 'Hero Section (Banner)', value: 'hero' },
            { label: 'Two Column Section', value: 'twoColumn' },
          ],
        },
      ],
      defaultValue: [{ section: 'hero' }, { section: 'twoColumn' }],
    },
    // Global Styles
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
          name: 'textColor',
          type: 'text',
          label: 'Default Text Color',
          admin: {
            description: 'Default text color for the page',
          },
        },
        {
          name: 'linkColor',
          type: 'text',
          label: 'Link Color',
          admin: {
            description: 'Default color for links',
          },
        },
        {
          name: 'linkHoverColor',
          type: 'text',
          label: 'Link Hover Color',
          admin: {
            description: 'Color for links on hover',
          },
        },
      ],
    },
    // Typography Settings
    {
      name: 'typographySettings',
      type: 'group',
      label: 'Typography Settings',
      fields: [
        {
          name: 'h1FontSize',
          type: 'text',
          label: 'H1 Font Size',
        },
        {
          name: 'h1Color',
          type: 'text',
          label: 'H1 Color',
        },
        {
          name: 'h1FontWeight',
          type: 'text',
          label: 'H1 Font Weight',
        },
        {
          name: 'h2FontSize',
          type: 'text',
          label: 'H2 Font Size',
        },
        {
          name: 'h2Color',
          type: 'text',
          label: 'H2 Color',
        },
        {
          name: 'h2FontWeight',
          type: 'text',
          label: 'H2 Font Weight',
        },
        {
          name: 'bodyFontSize',
          type: 'text',
          label: 'Body Font Size',
        },
        {
          name: 'bodyLineHeight',
          type: 'text',
          label: 'Body Line Height',
        },
      ],
    },
    // Animation Settings
    {
      name: 'animationSettings',
      type: 'group',
      label: 'Animation Settings',
      fields: [
        {
          name: 'enableAnimations',
          type: 'checkbox',
          label: 'Enable Animations',
          defaultValue: true,
        },
        {
          name: 'enableViewportAnimations',
          type: 'checkbox',
          label: 'Enable Viewport Animations (WOW.js)',
          defaultValue: true,
        },
        {
          name: 'fadeInDuration',
          type: 'text',
          label: 'Fade In Duration',
          defaultValue: '1s',
        },
        {
          name: 'animationEasing',
          type: 'text',
          label: 'Animation Easing',
          defaultValue: 'ease-in-out',
        },
      ],
    },
    // Lazy Loading Settings
    {
      name: 'lazyLoadingSettings',
      type: 'group',
      label: 'Lazy Loading Settings',
      fields: [
        {
          name: 'enableLazyLoading',
          type: 'checkbox',
          label: 'Enable Lazy Loading',
          defaultValue: true,
        },
        {
          name: 'placeholderImage',
          type: 'text',
          label: 'Placeholder Image',
          defaultValue:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=',
        },
      ],
    },
    // SEO Settings
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
          name: 'keywords',
          type: 'text',
          label: 'Keywords',
        },
        {
          name: 'canonicalUrl',
          type: 'text',
          label: 'Canonical URL',
        },
      ],
    },
    // Mobile Settings
    {
      name: 'mobileSettings',
      type: 'group',
      label: 'Mobile Settings',
      fields: [
        {
          name: 'mobileBreakpoint',
          type: 'text',
          label: 'Mobile Breakpoint',
          defaultValue: '420px',
        },
        {
          name: 'tabletBreakpoint',
          type: 'text',
          label: 'Tablet Breakpoint',
          defaultValue: '800px',
        },
        {
          name: 'desktopBreakpoint',
          type: 'text',
          label: 'Desktop Breakpoint',
          defaultValue: '1400px',
        },
      ],
    },
    // Data Attributes
    {
      name: 'dataAttributes',
      type: 'group',
      label: 'Data Attributes',
      fields: [
        {
          name: 'heroDataAttributes',
          type: 'array',
          label: 'Hero Section Data Attributes',
          fields: [
            {
              name: 'attribute',
              type: 'text',
              label: 'Attribute Name',
              required: true,
            },
            {
              name: 'value',
              type: 'text',
              label: 'Attribute Value',
            },
          ],
          defaultValue: [{ attribute: 'data-s3-module', value: '' }],
        },
        {
          name: 'twoColumnDataAttributes',
          type: 'array',
          label: 'Two Column Data Attributes',
          fields: [
            {
              name: 'attribute',
              type: 'text',
              label: 'Attribute Name',
              required: true,
            },
            {
              name: 'value',
              type: 'text',
              label: 'Attribute Value',
            },
          ],
          defaultValue: [{ attribute: 'data-s3-module', value: '' }],
        },
      ],
    },
    // Status
    {
      name: 'isActive',
      type: 'checkbox',
      label: 'Active',
      defaultValue: true,
    },
  ],
  timestamps: true,
  versions: {
    drafts: true,
    maxPerDoc: 50,
  },
}
