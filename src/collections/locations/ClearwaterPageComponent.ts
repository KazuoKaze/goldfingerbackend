import { CollectionConfig } from 'payload'

export const ClearwaterPageComponent: CollectionConfig = {
  slug: 'clearwater-page-component',
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
      defaultValue: 'Clearwater Location Page Component',
    },
    // Hero Section
    {
      name: 'heroSection',
      type: 'group',
      label: 'Hero Section',
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
          name: 'moduleClass',
          type: 'text',
          label: 'Module CSS Classes',
          defaultValue: 'mod_hero banner mobile-stack',
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
          label: 'Title',
          required: true,
          defaultValue: 'Clearwater',
        },
        {
          name: 'titleColor',
          type: 'text',
          label: 'Title Color',
        },
        {
          name: 'titleFontSize',
          type: 'text',
          label: 'Title Font Size',
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
      ],
    },
    // Intro Column Section
    {
      name: 'introColumnSection',
      type: 'group',
      label: 'Intro Column Section',
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
        },
        {
          name: 'textColor',
          type: 'text',
          label: 'Text Color',
        },
        {
          name: 'moduleClass',
          type: 'text',
          label: 'Module CSS Classes',
          defaultValue: 'mod_column viewport container',
        },
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
          label: 'Logo',
        },
        {
          name: 'logoAlt',
          type: 'text',
          label: 'Logo Alt Text',
          defaultValue: 'Goldfingers aesthetic logo',
        },
        {
          name: 'logoWidth',
          type: 'text',
          label: 'Logo Width',
          defaultValue: '58',
        },
        {
          name: 'logoHeight',
          type: 'text',
          label: 'Logo Height',
          defaultValue: '64',
        },
        {
          name: 'heading',
          type: 'richText',
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
        },
        {
          name: 'contentAlignment',
          type: 'select',
          label: 'Content Alignment',
          options: [
            { label: 'Left', value: 'left' },
            { label: 'Center', value: 'center' },
            { label: 'Right', value: 'right' },
          ],
          defaultValue: 'center',
        },
        {
          name: 'maxWidth',
          type: 'text',
          label: 'Max Width Class',
          defaultValue: 'mw-80',
          admin: {
            description: 'CSS class for max width (e.g., mw-80)',
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
            },
            {
              name: 'url',
              type: 'text',
              label: 'Button URL',
            },
            {
              name: 'className',
              type: 'text',
              label: 'Button Class',
              defaultValue: 'btn',
            },
            {
              name: 'backgroundColor',
              type: 'text',
              label: 'Button Background Color',
            },
            {
              name: 'textColor',
              type: 'text',
              label: 'Button Text Color',
            },
            {
              name: 'hoverBackgroundColor',
              type: 'text',
              label: 'Button Hover Background Color',
            },
          ],
        },
      ],
    },
    // Half Image Section 1 (Journey to Beauty)
    {
      name: 'halfImageSection1',
      type: 'group',
      label: 'Half Image Section 1 (Journey to Beauty)',
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
        },
        {
          name: 'textColor',
          type: 'text',
          label: 'Text Color',
        },
        {
          name: 'moduleClass',
          type: 'text',
          label: 'Module CSS Classes',
          defaultValue: 'mod_half_image viewport half-image container wow fadeInLeft',
        },
        {
          name: 'imagePosition',
          type: 'select',
          label: 'Image Position',
          options: [
            { label: 'Left', value: 'left' },
            { label: 'Right', value: 'right' },
          ],
          defaultValue: 'left',
        },
        {
          name: 'marginTop',
          type: 'text',
          label: 'Margin Top Class',
          defaultValue: 'mt-0',
        },
        {
          name: 'paddingClass',
          type: 'text',
          label: 'Padding Class',
          defaultValue: 'padded',
        },
        {
          name: 'heading',
          type: 'richText',
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
        },
        {
          name: 'bulletPoints',
          type: 'array',
          label: 'Bullet Points',
          admin: {
            description: 'Drag to reorder bullet points',
          },
          fields: [
            {
              name: 'text',
              type: 'text',
              required: true,
            },
          ],
        },
        {
          name: 'image',
          type: 'group',
          label: 'Image',
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
              defaultValue: 'pier on beach at sunset',
            },
          ],
        },
      ],
    },
    // Box Grid Section 1 (Talented Providers)
    {
      name: 'boxGridSection1',
      type: 'group',
      label: 'Box Grid Section 1 (Talented Providers)',
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
        },
        {
          name: 'textColor',
          type: 'text',
          label: 'Text Color',
        },
        {
          name: 'moduleClass',
          type: 'text',
          label: 'Module CSS Classes',
          defaultValue: 'mod_box_grid viewport container option-3 single bkg-image',
        },
        {
          name: 'animationClass',
          type: 'text',
          label: 'Animation Class',
          defaultValue: 'fadeInUp',
        },
        {
          name: 'heading',
          type: 'richText',
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
        },
      ],
    },
    // Goldfingers Way Column Section
    {
      name: 'goldfingersWaySection',
      type: 'group',
      label: 'Goldfingers Way Column Section',
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
        },
        {
          name: 'textColor',
          type: 'text',
          label: 'Text Color',
        },
        {
          name: 'moduleClass',
          type: 'text',
          label: 'Module CSS Classes',
          defaultValue: 'mod_column viewport container',
        },
        {
          name: 'marginTop',
          type: 'text',
          label: 'Margin Top',
          defaultValue: 'mt-30',
        },
        {
          name: 'paddingBottom',
          type: 'text',
          label: 'Padding Bottom',
          defaultValue: 'pb-20',
        },
        {
          name: 'heading',
          type: 'richText',
          label: 'Heading',
          required: true,
        },
        {
          name: 'headingColor',
          type: 'text',
          label: 'Heading Color',
        },
        {
          name: 'headingAlignment',
          type: 'select',
          label: 'Heading Alignment',
          options: [
            { label: 'Left', value: 'left' },
            { label: 'Center', value: 'center' },
            { label: 'Right', value: 'right' },
          ],
          defaultValue: 'center',
        },
        {
          name: 'introContent',
          type: 'richText',
          label: 'Intro Content',
        },
        {
          name: 'servicesList',
          type: 'array',
          label: 'Services List',
          admin: {
            description: 'Drag to reorder services',
          },
          fields: [
            {
              name: 'serviceName',
              type: 'text',
              label: 'Service Name',
              required: true,
            },
            {
              name: 'serviceUrl',
              type: 'text',
              label: 'Service URL',
            },
            {
              name: 'description',
              type: 'textarea',
              label: 'Service Description',
            },
          ],
        },
        {
          name: 'closingContent',
          type: 'richText',
          label: 'Closing Content',
        },
      ],
    },
    // Non-Surgical Enhancements Section
    {
      name: 'nonSurgicalSection',
      type: 'group',
      label: 'Non-Surgical Enhancements Section',
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
        },
        {
          name: 'textColor',
          type: 'text',
          label: 'Text Color',
        },
        {
          name: 'moduleClass',
          type: 'text',
          label: 'Module CSS Classes',
          defaultValue: 'mod_column viewport container has-media',
        },
        {
          name: 'marginBottom',
          type: 'text',
          label: 'Margin Bottom',
          defaultValue: 'mb-30',
        },
        {
          name: 'mediaPosition',
          type: 'select',
          label: 'Media Position',
          options: [
            { label: 'Left', value: 'left' },
            { label: 'Right', value: 'right' },
          ],
          defaultValue: 'right',
        },
        {
          name: 'heading',
          type: 'richText',
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
        },
        {
          name: 'mediaImage',
          type: 'group',
          label: 'Media Image',
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
              label: 'Desktop Image',
            },
            {
              name: 'alt',
              type: 'text',
              label: 'Alt Text',
              required: true,
              defaultValue: 'boardwalk and palm trees on the beach',
            },
          ],
        },
      ],
    },
    // Goldfingers Story Banner Section
    {
      name: 'goldfingersStoryBanner',
      type: 'group',
      label: 'Goldfingers Story Banner Section',
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
        },
        {
          name: 'textColor',
          type: 'text',
          label: 'Text Color',
        },
        {
          name: 'moduleClass',
          type: 'text',
          label: 'Module CSS Classes',
          defaultValue: 'mod_banner dark hide-divider viewport background-1',
        },
        {
          name: 'animationClass',
          type: 'text',
          label: 'Animation Class',
          defaultValue: 'fadeInUp',
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
          name: 'headingAlignment',
          type: 'select',
          label: 'Heading Alignment',
          options: [
            { label: 'Left', value: 'left' },
            { label: 'Center', value: 'center' },
            { label: 'Right', value: 'right' },
          ],
          defaultValue: 'center',
        },
        {
          name: 'columns',
          type: 'array',
          label: 'Content Columns',
          maxRows: 3,
          admin: {
            description: 'Add up to 3 columns',
          },
          fields: [
            {
              name: 'content',
              type: 'richText',
              label: 'Column Content',
              required: true,
            },
          ],
        },
        {
          name: 'columnLayout',
          type: 'select',
          label: 'Column Layout',
          options: [
            { label: '2 Columns', value: 'columns-two' },
            { label: '3 Columns', value: 'columns-three' },
          ],
          defaultValue: 'columns-three',
        },
      ],
    },
    // Two Column Section (Enhance Your Look)
    {
      name: 'twoColumnSection',
      type: 'group',
      label: 'Two Column Section (Enhance Your Look)',
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
        },
        {
          name: 'textColor',
          type: 'text',
          label: 'Text Color',
        },
        {
          name: 'moduleClass',
          type: 'text',
          label: 'Module CSS Classes',
          defaultValue: 'mod_columns_two viewport container',
        },
        {
          name: 'verticalAlign',
          type: 'checkbox',
          label: 'Vertical Align',
          defaultValue: true,
        },
        {
          name: 'columns',
          type: 'array',
          label: 'Content Columns',
          maxRows: 2,
          admin: {
            description: 'Add up to 2 columns',
          },
          fields: [
            {
              name: 'content',
              type: 'richText',
              label: 'Column Content',
              required: true,
            },
            {
              name: 'animationClass',
              type: 'select',
              label: 'Animation Class',
              options: [
                { label: 'Fade In Left', value: 'fadeInLeft' },
                { label: 'Fade In Right', value: 'fadeInRight' },
                { label: 'Fade In Up', value: 'fadeInUp' },
                { label: 'None', value: '' },
              ],
            },
          ],
        },
      ],
    },
    // CTA General Section
    {
      name: 'ctaGeneralSection',
      type: 'group',
      label: 'CTA General Section',
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
        },
        {
          name: 'textColor',
          type: 'text',
          label: 'Text Color',
        },
        {
          name: 'moduleClass',
          type: 'text',
          label: 'Module CSS Classes',
          defaultValue:
            'mod_cta_general viewport container cta thin wow fadeInRight mt-0 mb-0 background-1',
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Heading',
          required: true,
        },
        {
          name: 'headingLink',
          type: 'text',
          label: 'Heading Link URL',
        },
        {
          name: 'headingColor',
          type: 'text',
          label: 'Heading Color',
        },
        {
          name: 'ctaButton',
          type: 'group',
          label: 'CTA Button',
          fields: [
            {
              name: 'text',
              type: 'text',
              label: 'Button Text',
              required: true,
            },
            {
              name: 'url',
              type: 'text',
              label: 'Button URL',
              required: true,
            },
            {
              name: 'className',
              type: 'text',
              label: 'Button Class',
              defaultValue: 'btn white',
            },
            {
              name: 'backgroundColor',
              type: 'text',
              label: 'Button Background Color',
            },
            {
              name: 'textColor',
              type: 'text',
              label: 'Button Text Color',
            },
            {
              name: 'hoverBackgroundColor',
              type: 'text',
              label: 'Button Hover Background Color',
            },
          ],
        },
      ],
    },
    // Plastic Surgery Column Section
    {
      name: 'plasticSurgerySection',
      type: 'group',
      label: 'Plastic Surgery Column Section',
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
        },
        {
          name: 'textColor',
          type: 'text',
          label: 'Text Color',
        },
        {
          name: 'moduleClass',
          type: 'text',
          label: 'Module CSS Classes',
          defaultValue: 'mod_column viewport container',
        },
        {
          name: 'marginTop',
          type: 'text',
          label: 'Margin Top',
          defaultValue: 'mt-30',
        },
        {
          name: 'marginBottom',
          type: 'text',
          label: 'Margin Bottom',
          defaultValue: 'mb-30',
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
          name: 'headingAlignment',
          type: 'select',
          label: 'Heading Alignment',
          options: [
            { label: 'Left', value: 'left' },
            { label: 'Center', value: 'center' },
            { label: 'Right', value: 'right' },
          ],
          defaultValue: 'center',
        },
        {
          name: 'introContent',
          type: 'richText',
          label: 'Intro Content',
        },
        {
          name: 'servicesList',
          type: 'array',
          label: 'Services List',
          admin: {
            description: 'Drag to reorder services',
          },
          fields: [
            {
              name: 'serviceName',
              type: 'text',
              label: 'Service Name',
              required: true,
            },
            {
              name: 'serviceUrl',
              type: 'text',
              label: 'Service URL',
            },
            {
              name: 'description',
              type: 'textarea',
              label: 'Service Description',
            },
          ],
        },
      ],
    },
    // Box Grid Section 2 (Skincare Services)
    {
      name: 'boxGridSection2',
      type: 'group',
      label: 'Box Grid Section 2 (Skincare Services)',
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
        },
        {
          name: 'textColor',
          type: 'text',
          label: 'Text Color',
        },
        {
          name: 'moduleClass',
          type: 'text',
          label: 'Module CSS Classes',
          defaultValue: 'mod_box_grid viewport container option-2 single bkg-image',
        },
        {
          name: 'animationClass',
          type: 'text',
          label: 'Animation Class',
          defaultValue: 'fadeInUp',
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
              defaultValue: 'Background media',
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
            { label: 'Hero Section', value: 'hero' },
            { label: 'Intro Column Section', value: 'introColumn' },
            { label: 'Half Image Section 1 (Journey to Beauty)', value: 'halfImageSection1' },
            { label: 'Box Grid Section 1 (Talented Providers)', value: 'boxGridSection1' },
            { label: 'Goldfingers Way Column Section', value: 'goldfingersWay' },
            { label: 'Non-Surgical Enhancements Section', value: 'nonSurgical' },
            { label: 'Goldfingers Story Banner', value: 'goldfingersStoryBanner' },
            { label: 'Two Column Section (Enhance Your Look)', value: 'twoColumn' },
            { label: 'CTA General Section', value: 'ctaGeneral' },
            { label: 'Plastic Surgery Section', value: 'plasticSurgery' },
            { label: 'Box Grid Section 2 (Skincare Services)', value: 'boxGridSection2' },
          ],
        },
      ],
      defaultValue: [
        { section: 'hero' },
        { section: 'introColumn' },
        { section: 'halfImageSection1' },
        { section: 'boxGridSection1' },
        { section: 'goldfingersWay' },
        { section: 'nonSurgical' },
        { section: 'goldfingersStoryBanner' },
        { section: 'twoColumn' },
        { section: 'ctaGeneral' },
        { section: 'plasticSurgery' },
        { section: 'boxGridSection2' },
      ],
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
          name: 'h3FontSize',
          type: 'text',
          label: 'H3 Font Size',
        },
        {
          name: 'h3Color',
          type: 'text',
          label: 'H3 Color',
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
        {
          name: 'smallFontSize',
          type: 'text',
          label: 'Small Text Font Size',
          admin: {
            description: 'For small text and captions',
          },
        },
      ],
    },
    // Button Styles
    {
      name: 'buttonStyles',
      type: 'group',
      label: 'Button Styles',
      fields: [
        {
          name: 'defaultBackgroundColor',
          type: 'text',
          label: 'Default Button Background',
        },
        {
          name: 'defaultTextColor',
          type: 'text',
          label: 'Default Button Text Color',
        },
        {
          name: 'defaultHoverBackground',
          type: 'text',
          label: 'Default Button Hover Background',
        },
        {
          name: 'whiteButtonBackground',
          type: 'text',
          label: 'White Button Background',
        },
        {
          name: 'whiteButtonTextColor',
          type: 'text',
          label: 'White Button Text Color',
        },
        {
          name: 'whiteButtonHoverBackground',
          type: 'text',
          label: 'White Button Hover Background',
        },
        {
          name: 'borderRadius',
          type: 'text',
          label: 'Button Border Radius',
          admin: {
            description: 'e.g., 4px, 0.5rem',
          },
        },
        {
          name: 'padding',
          type: 'text',
          label: 'Button Padding',
          admin: {
            description: 'e.g., 12px 24px',
          },
        },
        {
          name: 'fontSize',
          type: 'text',
          label: 'Button Font Size',
        },
        {
          name: 'fontWeight',
          type: 'text',
          label: 'Button Font Weight',
        },
        {
          name: 'transition',
          type: 'text',
          label: 'Button Transition',
          admin: {
            description: 'CSS transition value (e.g., all 0.3s ease)',
          },
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
          name: 'fadeInDuration',
          type: 'text',
          label: 'Fade In Duration',
          admin: {
            description: 'Duration for fade in animations (e.g., 1s, 2s)',
          },
          defaultValue: '1s',
        },
        {
          name: 'fadeInUpDuration',
          type: 'text',
          label: 'Fade In Up Duration',
          admin: {
            description: 'Duration for fade in up animations',
          },
          defaultValue: '1s',
        },
        {
          name: 'fadeInLeftDuration',
          type: 'text',
          label: 'Fade In Left Duration',
          admin: {
            description: 'Duration for fade in left animations',
          },
          defaultValue: '1s',
        },
        {
          name: 'fadeInRightDuration',
          type: 'text',
          label: 'Fade In Right Duration',
          admin: {
            description: 'Duration for fade in right animations',
          },
          defaultValue: '1s',
        },
        {
          name: 'animationEasing',
          type: 'text',
          label: 'Animation Easing',
          admin: {
            description: 'CSS easing function',
          },
          defaultValue: 'ease-in-out',
        },
        {
          name: 'animationDelay',
          type: 'text',
          label: 'Animation Delay',
          admin: {
            description: 'Delay before animation starts (e.g., 0.5s)',
          },
          defaultValue: '0s',
        },
      ],
    },
    // Layout Settings
    {
      name: 'layoutSettings',
      type: 'group',
      label: 'Layout Settings',
      fields: [
        {
          name: 'columnGap',
          type: 'text',
          label: 'Column Gap',
          admin: {
            description: 'Gap between columns (e.g., 30px, 2rem)',
          },
        },
        {
          name: 'rowGap',
          type: 'text',
          label: 'Row Gap',
          admin: {
            description: 'Gap between rows (e.g., 20px, 1rem)',
          },
        },
        {
          name: 'maxContentWidth',
          type: 'text',
          label: 'Max Content Width',
          admin: {
            description: 'Maximum width for content sections',
          },
        },
        {
          name: 'verticalAlignmentDefault',
          type: 'select',
          label: 'Default Vertical Alignment',
          options: [
            { label: 'Top', value: 'top' },
            { label: 'Center', value: 'center' },
            { label: 'Bottom', value: 'bottom' },
          ],
          defaultValue: 'center',
        },
      ],
    },
    // Image Settings
    {
      name: 'imageSettings',
      type: 'group',
      label: 'Image Settings',
      fields: [
        {
          name: 'lazyLoading',
          type: 'checkbox',
          label: 'Enable Lazy Loading',
          defaultValue: true,
        },
        {
          name: 'imageQuality',
          type: 'text',
          label: 'Image Quality',
          admin: {
            description: 'Compression quality (e.g., 85, 90)',
          },
          defaultValue: '85',
        },
        {
          name: 'imageSharpness',
          type: 'text',
          label: 'Image Sharpness',
          admin: {
            description: 'Sharpness value (e.g., 5)',
          },
          defaultValue: '5',
        },
        {
          name: 'objectFit',
          type: 'select',
          label: 'Image Object Fit',
          options: [
            { label: 'Cover', value: 'cover' },
            { label: 'Contain', value: 'contain' },
            { label: 'Fill', value: 'fill' },
            { label: 'None', value: 'none' },
            { label: 'Scale Down', value: 'scale-down' },
          ],
          defaultValue: 'cover',
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
          name: 'ogImage',
          type: 'upload',
          relationTo: 'media',
          label: 'OG Image',
        },
        {
          name: 'ogTitle',
          type: 'text',
          label: 'OG Title',
        },
        {
          name: 'ogDescription',
          type: 'textarea',
          label: 'OG Description',
        },
        {
          name: 'keywords',
          type: 'text',
          label: 'Keywords',
          admin: {
            description: 'Comma-separated keywords for SEO',
          },
        },
        {
          name: 'canonicalUrl',
          type: 'text',
          label: 'Canonical URL',
        },
        {
          name: 'robots',
          type: 'select',
          label: 'Robots Meta Tag',
          options: [
            { label: 'Index, Follow', value: 'index,follow' },
            { label: 'No Index, Follow', value: 'noindex,follow' },
            { label: 'Index, No Follow', value: 'index,nofollow' },
            { label: 'No Index, No Follow', value: 'noindex,nofollow' },
          ],
          defaultValue: 'index,follow',
        },
        {
          name: 'structuredData',
          type: 'textarea',
          label: 'Structured Data (JSON-LD)',
          admin: {
            description: 'Add schema.org structured data in JSON-LD format',
          },
        },
      ],
    },
    // Accessibility Settings
    {
      name: 'accessibilitySettings',
      type: 'group',
      label: 'Accessibility Settings',
      fields: [
        {
          name: 'skipToContent',
          type: 'checkbox',
          label: 'Include Skip to Content Link',
          defaultValue: true,
        },
        {
          name: 'ariaLabelsEnabled',
          type: 'checkbox',
          label: 'Enable ARIA Labels',
          defaultValue: true,
        },
        {
          name: 'altTextRequired',
          type: 'checkbox',
          label: 'Require Alt Text for Images',
          defaultValue: true,
        },
        {
          name: 'focusVisibleColor',
          type: 'text',
          label: 'Focus Visible Color',
          admin: {
            description: 'Color for focus outlines (accessibility)',
          },
        },
        {
          name: 'focusVisibleWidth',
          type: 'text',
          label: 'Focus Visible Width',
          admin: {
            description: 'Width of focus outlines (e.g., 2px)',
          },
          defaultValue: '2px',
        },
        {
          name: 'contrastMode',
          type: 'select',
          label: 'Contrast Mode',
          options: [
            { label: 'Normal', value: 'normal' },
            { label: 'High Contrast', value: 'high' },
            { label: 'Very High Contrast', value: 'very-high' },
          ],
          defaultValue: 'normal',
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
          admin: {
            description: 'Screen width for mobile (e.g., 768px)',
          },
          defaultValue: '420px',
        },
        {
          name: 'tabletBreakpoint',
          type: 'text',
          label: 'Tablet Breakpoint',
          admin: {
            description: 'Screen width for tablet (e.g., 800px)',
          },
          defaultValue: '800px',
        },
        {
          name: 'desktopBreakpoint',
          type: 'text',
          label: 'Desktop Breakpoint',
          admin: {
            description: 'Screen width for desktop (e.g., 1400px)',
          },
          defaultValue: '1400px',
        },
        {
          name: 'mobileFontSizeAdjustment',
          type: 'text',
          label: 'Mobile Font Size Adjustment',
          admin: {
            description: 'Percentage adjustment for mobile fonts (e.g., 90%)',
          },
          defaultValue: '100%',
        },
        {
          name: 'mobileSpacingAdjustment',
          type: 'text',
          label: 'Mobile Spacing Adjustment',
          admin: {
            description: 'Percentage adjustment for mobile spacing',
          },
          defaultValue: '100%',
        },
        {
          name: 'mobileStackSections',
          type: 'checkbox',
          label: 'Stack Sections on Mobile',
          defaultValue: true,
        },
        {
          name: 'hideMobileElements',
          type: 'array',
          label: 'Hide Elements on Mobile',
          admin: {
            description: 'Select elements to hide on mobile devices',
          },
          fields: [
            {
              name: 'elementId',
              type: 'text',
              label: 'Element ID or Class',
            },
          ],
        },
      ],
    },
    // Performance Settings
    {
      name: 'performanceSettings',
      type: 'group',
      label: 'Performance Settings',
      fields: [
        {
          name: 'enableCaching',
          type: 'checkbox',
          label: 'Enable Browser Caching',
          defaultValue: true,
        },
        {
          name: 'preloadImages',
          type: 'checkbox',
          label: 'Preload Critical Images',
          defaultValue: false,
        },
        {
          name: 'deferNonCriticalCSS',
          type: 'checkbox',
          label: 'Defer Non-Critical CSS',
          defaultValue: false,
        },
        {
          name: 'minimizeHTTP',
          type: 'checkbox',
          label: 'Minimize HTTP Requests',
          defaultValue: true,
        },
      ],
    },
    // Custom CSS
    {
      name: 'customCSS',
      type: 'group',
      label: 'Custom CSS',
      fields: [
        {
          name: 'globalCSS',
          type: 'textarea',
          label: 'Global Custom CSS',
          admin: {
            description: 'Add custom CSS that applies to the entire page',
            rows: 10,
          },
        },
        {
          name: 'heroSectionCSS',
          type: 'textarea',
          label: 'Hero Section Custom CSS',
          admin: {
            rows: 5,
          },
        },
        {
          name: 'columnSectionCSS',
          type: 'textarea',
          label: 'Column Sections Custom CSS',
          admin: {
            rows: 5,
          },
        },
        {
          name: 'bannerSectionCSS',
          type: 'textarea',
          label: 'Banner Sections Custom CSS',
          admin: {
            rows: 5,
          },
        },
        {
          name: 'boxGridSectionCSS',
          type: 'textarea',
          label: 'Box Grid Sections Custom CSS',
          admin: {
            rows: 5,
          },
        },
        {
          name: 'halfImageSectionCSS',
          type: 'textarea',
          label: 'Half Image Sections Custom CSS',
          admin: {
            rows: 5,
          },
        },
      ],
    },
    // Custom JavaScript
    {
      name: 'customJS',
      type: 'group',
      label: 'Custom JavaScript',
      fields: [
        {
          name: 'headerScripts',
          type: 'textarea',
          label: 'Header Scripts',
          admin: {
            description: 'Scripts to be included in the <head> tag',
            rows: 5,
          },
        },
        {
          name: 'footerScripts',
          type: 'textarea',
          label: 'Footer Scripts',
          admin: {
            description: 'Scripts to be included before </body> tag',
            rows: 5,
          },
        },
        {
          name: 'analyticsCode',
          type: 'textarea',
          label: 'Analytics Code',
          admin: {
            description: 'Google Analytics or other tracking codes',
            rows: 5,
          },
        },
      ],
    },
    // Module-Specific Classes
    {
      name: 'moduleClasses',
      type: 'group',
      label: 'Module CSS Classes',
      fields: [
        {
          name: 'heroModuleClass',
          type: 'text',
          label: 'Hero Module Class',
          defaultValue: 'mod_hero banner mobile-stack',
        },
        {
          name: 'columnModuleClass',
          type: 'text',
          label: 'Column Module Class',
          defaultValue: 'mod_column viewport container',
        },
        {
          name: 'bannerModuleClass',
          type: 'text',
          label: 'Banner Module Class',
          defaultValue: 'mod_banner dark hide-divider viewport',
        },
        {
          name: 'halfImageModuleClass',
          type: 'text',
          label: 'Half Image Module Class',
          defaultValue: 'mod_half_image viewport half-image container',
        },
        {
          name: 'twoColumnModuleClass',
          type: 'text',
          label: 'Two Column Module Class',
          defaultValue: 'mod_columns_two viewport container',
        },
        {
          name: 'boxGridModuleClass',
          type: 'text',
          label: 'Box Grid Module Class',
          defaultValue: 'mod_box_grid viewport container',
        },
        {
          name: 'ctaGeneralModuleClass',
          type: 'text',
          label: 'CTA General Module Class',
          defaultValue: 'mod_cta_general viewport container cta thin',
        },
      ],
    },
    // Spacing Classes
    {
      name: 'spacingClasses',
      type: 'group',
      label: 'Spacing Classes',
      fields: [
        {
          name: 'mt0',
          type: 'text',
          label: 'Margin Top 0',
          defaultValue: 'mt-0',
        },
        {
          name: 'mt30',
          type: 'text',
          label: 'Margin Top 30',
          defaultValue: 'mt-30',
        },
        {
          name: 'mb0',
          type: 'text',
          label: 'Margin Bottom 0',
          defaultValue: 'mb-0',
        },
        {
          name: 'mb30',
          type: 'text',
          label: 'Margin Bottom 30',
          defaultValue: 'mb-30',
        },
        {
          name: 'pb20',
          type: 'text',
          label: 'Padding Bottom 20',
          defaultValue: 'pb-20',
        },
      ],
    },
    // Version Control
    {
      name: 'versionControl',
      type: 'group',
      label: 'Version Control',
      fields: [
        {
          name: 'version',
          type: 'text',
          label: 'Version Number',
          defaultValue: '1.0.0',
        },
        {
          name: 'lastModifiedBy',
          type: 'text',
          label: 'Last Modified By',
        },
        {
          name: 'changeLog',
          type: 'textarea',
          label: 'Change Log',
          admin: {
            description: 'Document changes made to this component',
            rows: 5,
          },
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
