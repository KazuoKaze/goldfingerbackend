import { CollectionConfig } from 'payload'

export const TampaLocationPageComponent: CollectionConfig = {
  slug: 'tampa-location-page-component',
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
      defaultValue: 'Tampa Location Page Component',
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
          name: 'cssClasses',
          type: 'text',
          label: 'CSS Classes',
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
          defaultValue: [
            {
              label: 'Home',
              url: '/',
              ariaLabel: 'Breadcrumbs to help navigate the user',
            },
            {
              label: 'Tampa',
              url: '/tampa/',
              ariaLabel: 'Breadcrumbs to help navigate the user',
            },
          ],
        },
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          required: true,
          defaultValue: 'Tampa (Northdale)',
        },
        {
          name: 'titleColor',
          type: 'text',
          label: 'Title Color',
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
              defaultValue: 'Tampa skyline',
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
          defaultValue: 'Experience the difference at Goldfingers Aesthetics',
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
              defaultValue: 'Explore Our Medical Spa Services',
            },
            {
              name: 'url',
              type: 'text',
              label: 'Button URL',
              defaultValue: '/tampa/medical-spa/',
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
          defaultValue: 'mod_box_grid viewport container option-2 default bkg-image wider',
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Section Heading',
          defaultValue: 'Over two decades of aesthetic excellence',
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
          defaultValue: [
            {
              heading: "Nation's Top 1% for BOTOX and Juvéderm",
              animationClass: 'fadeInUp',
            },
            {
              heading: "Florida's Premier Aesthetics Center",
              animationClass: 'fadeInUp',
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
    // Divider Section
    {
      name: 'dividerSection',
      type: 'group',
      label: 'Divider Section',
      fields: [
        {
          name: 'show',
          type: 'checkbox',
          label: 'Show Section',
          defaultValue: true,
        },
        {
          name: 'cssClasses',
          type: 'text',
          label: 'CSS Classes',
          defaultValue: 'mod_divider container',
        },
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
          label: 'Divider Logo',
        },
        {
          name: 'logoAlt',
          type: 'text',
          label: 'Logo Alt Text',
          defaultValue: 'Logo media',
        },
      ],
    },
    // Simple Column Section 1
    {
      name: 'simpleColumnSection1',
      type: 'group',
      label: 'Simple Column Section 1 (Expertise)',
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
          defaultValue: 'Crafting beauty: A fusion of expertise and artistry',
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
      label: 'Banner Section 1 (Journey to Beauty)',
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
          defaultValue: 'mod_banner dark hide-divider viewport background-1',
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
          name: 'heading',
          type: 'text',
          label: 'Heading',
          defaultValue: 'Your journey to beauty at Goldfingers Aesthetics in Tampa',
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
          defaultValue: [
            {
              serviceName: 'BOTOX',
              serviceUrl: '/tampa/medical-spa/botox/',
            },
            {
              serviceName: 'Dermal Fillers',
              serviceUrl: '/tampa/medical-spa/facial-fillers/',
            },
            {
              serviceName: 'Hand Rejuvenation',
              serviceUrl: '/medical-spa/hands/',
            },
            {
              serviceName: 'Non-Surgical Facelift',
              serviceUrl: '/medical-spa/face-lift/',
            },
            {
              serviceName: 'Tailored Services for Men',
              serviceUrl: '/medical-spa/mens-services/',
            },
            {
              serviceName: 'Permanent Makeup',
              serviceUrl: '/medical-spa/permanent-makeup/',
            },
            {
              serviceName: 'Micro-Channeling',
              serviceUrl: '/medical-spa/micro-channeling/',
            },
            {
              serviceName: 'Semaglutide Injections',
              serviceUrl: '/tampa/medical-spa/weight-loss/',
            },
            {
              serviceName: 'Advanced Skincare',
              serviceUrl: '/medical-spa/skincare-services/',
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
              defaultValue: 'Banner media',
            },
          ],
        },
      ],
    },
    // Column with Media Section 1
    {
      name: 'columnMediaSection1',
      type: 'group',
      label: 'Column with Media Section 1 (Custom Treatments)',
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
          defaultValue: 'Elevate your look with custom med spa treatments in Tampa',
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
    // Box Grid Section 2
    {
      name: 'boxGridSection2',
      type: 'group',
      label: 'Box Grid Section 2 (Plastic Surgery)',
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
            'mod_box_grid viewport seven-boxes container option-2 default bkg-image dark wider',
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Section Heading',
          defaultValue: 'Plastic surgery and you',
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
          defaultValue: [
            {
              heading: 'Breast Augmentation',
              animationClass: 'fadeInUp',
            },
            {
              heading: 'Breast Lift',
              animationClass: 'fadeInUp',
            },
            {
              heading: 'Breast Reduction',
              animationClass: 'fadeInUp',
            },
            {
              heading: 'Breast Revision',
              animationClass: 'fadeInUp',
            },
            {
              heading: 'Mommy Makeover',
              animationClass: 'fadeInUp',
            },
            {
              heading: 'Liposuction',
              animationClass: 'fadeInUp',
            },
            {
              heading: '8-Point Facelift',
              animationClass: 'fadeInUp',
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
    // Final Column Section
    {
      name: 'finalColumnSection',
      type: 'group',
      label: 'Final Column Section (Superior Care)',
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
          defaultValue: 'Indulge yourself in superior care at Goldfingers Aesthetics in Tampa',
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
            { label: 'Divider', value: 'divider' },
            { label: 'Simple Column 1', value: 'simpleColumn1' },
            { label: 'Banner 1', value: 'banner1' },
            { label: 'Column Media 1', value: 'columnMedia1' },
            { label: 'Box Grid 2', value: 'boxGrid2' },
            { label: 'Final Column', value: 'finalColumn' },
          ],
        },
      ],
      defaultValue: [
        { section: 'hero' },
        { section: 'introColumn' },
        { section: 'boxGrid1' },
        { section: 'divider' },
        { section: 'simpleColumn1' },
        { section: 'banner1' },
        { section: 'columnMedia1' },
        { section: 'boxGrid2' },
        { section: 'finalColumn' },
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
          defaultValue: 'Goldfingers Aesthetics & Plastic Surgery - Tampa',
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          label: 'Meta Description',
          defaultValue:
            'Experience the difference at Goldfingers Aesthetics in Tampa. Over two decades of aesthetic excellence with custom med spa treatments and plastic surgery.',
        },
        {
          name: 'keywords',
          type: 'text',
          label: 'Keywords',
          defaultValue:
            'Tampa med spa, Tampa plastic surgery, BOTOX Tampa, dermal fillers Tampa, aesthetic treatments Tampa',
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
