import { CollectionConfig } from 'payload'

export const OrlandoLocationPageComponent: CollectionConfig = {
  slug: 'orlando-location-page-component',
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
      defaultValue: 'Orlando Location Page Component',
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
          type: 'richText',
          label: 'Title (Rich Text)',
          required: true,
        },
        {
          name: 'titleColor',
          type: 'text',
          label: 'Title Color',
        },
        {
          name: 'description',
          type: 'richText',
          label: 'Description Text',
        },
        {
          name: 'descriptionColor',
          type: 'text',
          label: 'Description Color',
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
              defaultValue: 'orlando skyline seen from the water',
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
          name: 'cssClasses',
          type: 'text',
          label: 'CSS Classes',
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
          name: 'ctaButton',
          type: 'group',
          label: 'CTA Button',
          fields: [
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
          ],
        },
      ],
    },
    // Box Grid Section 1
    {
      name: 'boxGridSection1',
      type: 'group',
      label: 'Box Grid Section 1 (Excellence)',
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
          name: 'cssClasses',
          type: 'text',
          label: 'CSS Classes',
          defaultValue: 'mod_box_grid viewport container option-3 single bkg-image',
        },
        {
          name: 'boxes',
          type: 'array',
          label: 'Boxes',
          admin: {
            description: 'Drag to reorder boxes',
          },
          fields: [
            {
              name: 'heading',
              type: 'text',
              label: 'Box Heading',
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
              label: 'Box Content',
            },
            {
              name: 'animationClass',
              type: 'select',
              label: 'Animation Class',
              options: [
                { label: 'Fade In Up', value: 'fadeInUp' },
                { label: 'Fade In Left', value: 'fadeInLeft' },
                { label: 'Fade In Right', value: 'fadeInRight' },
                { label: 'None', value: '' },
              ],
              defaultValue: 'fadeInUp',
            },
          ],
        },
      ],
    },
    // Column with Media Section 1
    {
      name: 'columnMediaSection1',
      type: 'group',
      label: 'Column with Media Section 1 (Top 1%)',
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
          name: 'cssClasses',
          type: 'text',
          label: 'CSS Classes',
          defaultValue: 'mod_column viewport container has-media',
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
              defaultValue: 'sconce light fixture',
            },
          ],
        },
      ],
    },
    // CTA Section 1
    {
      name: 'ctaSection1',
      type: 'group',
      label: 'CTA Section 1 (Schedule Consultation)',
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
          name: 'cssClasses',
          type: 'text',
          label: 'CSS Classes',
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
          ],
        },
      ],
    },
    // Simple Column Section 1
    {
      name: 'simpleColumnSection1',
      type: 'group',
      label: 'Simple Column Section 1 (Premier Center)',
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
          name: 'cssClasses',
          type: 'text',
          label: 'CSS Classes',
          defaultValue: 'mod_column viewport container',
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
      ],
    },
    // Banner Section 1
    {
      name: 'bannerSection1',
      type: 'group',
      label: 'Banner Section 1 (Goldfingers Way)',
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
          name: 'cssClasses',
          type: 'text',
          label: 'CSS Classes',
          defaultValue: 'mod_banner dark hide-divider viewport background-9',
        },
        {
          name: 'animationClass',
          type: 'select',
          label: 'Animation Class',
          options: [
            { label: 'Fade In Up', value: 'fadeInUp' },
            { label: 'Fade In Left', value: 'fadeInLeft' },
            { label: 'Fade In Right', value: 'fadeInRight' },
            { label: 'None', value: '' },
          ],
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
          name: 'columns',
          type: 'array',
          label: 'Content Columns',
          maxRows: 2,
          fields: [
            {
              name: 'content',
              type: 'richText',
              label: 'Column Content',
              required: true,
            },
          ],
        },
      ],
    },
    // Services Column Section
    {
      name: 'servicesSection',
      type: 'group',
      label: 'Services Column Section',
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
          name: 'cssClasses',
          type: 'text',
          label: 'CSS Classes',
          defaultValue: 'mod_column viewport container',
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
    // Half Image Section
    {
      name: 'halfImageSection',
      type: 'group',
      label: 'Half Image Section (Elevating Beauty)',
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
          name: 'cssClasses',
          type: 'text',
          label: 'CSS Classes',
          defaultValue: 'mod_half_image viewport half-image container wow fadeInLeft',
        },
        {
          name: 'flipped',
          type: 'checkbox',
          label: 'Flipped Layout',
          defaultValue: true,
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
              defaultValue: 'nighttime image of building',
            },
          ],
        },
      ],
    },
    // Story Column Section
    {
      name: 'storySection',
      type: 'group',
      label: 'Story Column Section',
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
          name: 'cssClasses',
          type: 'text',
          label: 'CSS Classes',
          defaultValue: 'mod_column viewport container',
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
      ],
    },
    // Box Grid Section 2
    {
      name: 'boxGridSection2',
      type: 'group',
      label: 'Box Grid Section 2 (Look You Love)',
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
          name: 'cssClasses',
          type: 'text',
          label: 'CSS Classes',
          defaultValue: 'mod_box_grid viewport container option-1 single bkg-image',
        },
        {
          name: 'boxes',
          type: 'array',
          label: 'Boxes',
          admin: {
            description: 'Drag to reorder boxes',
          },
          fields: [
            {
              name: 'heading',
              type: 'text',
              label: 'Box Heading',
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
              label: 'Box Content',
            },
            {
              name: 'animationClass',
              type: 'select',
              label: 'Animation Class',
              options: [
                { label: 'Fade In Up', value: 'fadeInUp' },
                { label: 'Fade In Left', value: 'fadeInLeft' },
                { label: 'Fade In Right', value: 'fadeInRight' },
                { label: 'None', value: '' },
              ],
              defaultValue: 'fadeInUp',
            },
          ],
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
    // Plastic Surgery Section
    {
      name: 'plasticSurgerySection',
      type: 'group',
      label: 'Plastic Surgery Section',
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
          name: 'cssClasses',
          type: 'text',
          label: 'CSS Classes',
          defaultValue: 'mod_column viewport container',
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
    // Final Column with Media
    {
      name: 'finalColumnMedia',
      type: 'group',
      label: 'Final Column with Media (Skincare)',
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
          name: 'cssClasses',
          type: 'text',
          label: 'CSS Classes',
          defaultValue: 'mod_column viewport container has-media',
        },
        {
          name: 'mediaPosition',
          type: 'select',
          label: 'Media Position',
          options: [
            { label: 'Left', value: 'left' },
            { label: 'Right', value: 'right' },
          ],
          defaultValue: 'left',
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
              defaultValue: 'Goldfingers medspa room',
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
            { label: 'Intro Column', value: 'introColumn' },
            { label: 'Box Grid 1', value: 'boxGrid1' },
            { label: 'Column Media 1', value: 'columnMedia1' },
            { label: 'CTA 1', value: 'cta1' },
            { label: 'Simple Column 1', value: 'simpleColumn1' },
            { label: 'Banner 1', value: 'banner1' },
            { label: 'Services', value: 'services' },
            { label: 'Half Image', value: 'halfImage' },
            { label: 'Story', value: 'story' },
            { label: 'Box Grid 2', value: 'boxGrid2' },
            { label: 'Plastic Surgery', value: 'plasticSurgery' },
            { label: 'Final Column Media', value: 'finalColumnMedia' },
          ],
        },
      ],
      defaultValue: [
        { section: 'hero' },
        { section: 'introColumn' },
        { section: 'boxGrid1' },
        { section: 'columnMedia1' },
        { section: 'cta1' },
        { section: 'simpleColumn1' },
        { section: 'banner1' },
        { section: 'services' },
        { section: 'halfImage' },
        { section: 'story' },
        { section: 'boxGrid2' },
        { section: 'plasticSurgery' },
        { section: 'finalColumnMedia' },
      ],
    },
    // Global Styles
    {
      name: 'globalStyles',
      type: 'group',
      label: 'Global Styles',
      fields: [
        {
          name: 'primaryColor',
          type: 'text',
          label: 'Primary Color',
        },
        {
          name: 'secondaryColor',
          type: 'text',
          label: 'Secondary Color',
        },
        {
          name: 'textColor',
          type: 'text',
          label: 'Default Text Color',
        },
        {
          name: 'linkColor',
          type: 'text',
          label: 'Link Color',
        },
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Default Background Color',
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
          name: 'ogImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Open Graph Image',
        },
      ],
    },
    {
      name: 'isActive',
      type: 'checkbox',
      label: 'Active',
      defaultValue: true,
    },
  ],
  timestamps: true,
}
