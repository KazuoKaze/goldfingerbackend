import { CollectionConfig } from 'payload'

export const SarasotaLocationPageComponent: CollectionConfig = {
  slug: 'sarasota-location-page-component',
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
      defaultValue: 'Sarasota Location Page Component',
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
              label: 'Sarasota',
              url: '/sarasota/',
              ariaLabel: 'Breadcrumbs to help navigate the user',
            },
          ],
        },
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          required: true,
          defaultValue: 'Sarasota',
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
              defaultValue: 'sarasota',
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
          name: 'rowCssClasses',
          type: 'text',
          label: 'Row CSS Classes',
          defaultValue: 'row mb-30',
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
          type: 'number',
          label: 'Logo Width',
          defaultValue: 58,
        },
        {
          name: 'logoHeight',
          type: 'number',
          label: 'Logo Height',
          defaultValue: 64,
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Heading',
          required: true,
          defaultValue: 'Where beauty meets innovation',
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
          name: 'maxWidth',
          type: 'text',
          label: 'Content Max Width Class',
          defaultValue: 'mw-80',
        },
        {
          name: 'textAlign',
          type: 'select',
          label: 'Text Alignment',
          options: [
            { label: 'Left', value: 'text-left' },
            { label: 'Center', value: 'text-center' },
            { label: 'Right', value: 'text-right' },
          ],
          defaultValue: 'text-center',
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
              defaultValue: '/daytona-beach/medical-spa/',
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
          label: 'Heading',
          defaultValue: 'Over two decades',
        },
        {
          name: 'headingSpan',
          type: 'text',
          label: 'Heading Span (desktop block)',
          defaultValue: 'of aesthetic excellence',
        },
        {
          name: 'headingColor',
          type: 'text',
          label: 'Heading Color',
        },
        {
          name: 'intro',
          type: 'text',
          label: 'Intro Text',
          defaultValue:
            'With a legacy spanning over 20 years in the aesthetics industry, our foundation is rooted in unparalleled expertise. This wealth of experience ensures that you receive safe, satisfying, and effective treatments. We are proud to be known for:',
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
              type: 'textarea',
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
              content:
                'As a testament to our dedication to excellence, Goldfingers Aesthetics & Plastic Surgery proudly stands among the top 1% of providers nationwide for BOTOX and Juvéderm treatments. This recognition underscores our commitment to delivering exceptional results to our valued patients.',
              animationClass: 'fadeInUp',
            },
            {
              heading: "Florida's Premier Aesthetics Center",
              content:
                "We've blossomed into Florida's premier aesthetics center, offering an expansive network of services across 24 locations and growing. Our extensive reach is a testament to our commitment to providing accessible, top-tier care to individuals seeking beauty and well-being enhancements.",
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
          name: 'backgroundColor',
          type: 'text',
          label: 'Background Color',
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
          label: 'Logo Image',
        },
        {
          name: 'logoAlt',
          type: 'text',
          label: 'Logo Alt Text',
          defaultValue: 'Logo media',
        },
        {
          name: 'logoWidth',
          type: 'number',
          label: 'Logo Width',
          defaultValue: 55,
        },
        {
          name: 'logoHeight',
          type: 'number',
          label: 'Logo Height',
          defaultValue: 61,
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
          defaultValue: 'mod_banner dark hide-divider viewport background-3',
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
          name: 'layoutType',
          type: 'select',
          label: 'Content Layout',
          options: [
            { label: 'Single Column', value: 'single' },
            { label: 'Two Columns', value: 'columns-two' },
          ],
          defaultValue: 'columns-two',
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
      name: 'servicesColumnSection',
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
          name: 'rowCssClasses',
          type: 'text',
          label: 'Row CSS Classes',
          defaultValue: 'row mt-30 mb-30',
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Heading',
          required: true,
          defaultValue: 'Our Range of services in Sarasota',
        },
        {
          name: 'headingColor',
          type: 'text',
          label: 'Heading Color',
        },
        {
          name: 'headingAlign',
          type: 'select',
          label: 'Heading Alignment',
          options: [
            { label: 'Left', value: 'text-left' },
            { label: 'Center', value: 'text-center' },
            { label: 'Right', value: 'text-right' },
          ],
          defaultValue: 'text-center',
        },
        {
          name: 'intro',
          type: 'text',
          label: 'Intro Text',
          defaultValue:
            'Discover an array of transformative treatments at Goldfingers Aesthetics & Plastic Surgery in Sarasota:',
        },
        {
          name: 'introAlign',
          type: 'select',
          label: 'Intro Alignment',
          options: [
            { label: 'Left', value: 'text-left' },
            { label: 'Center', value: 'text-center' },
            { label: 'Right', value: 'text-right' },
          ],
          defaultValue: 'text-center',
        },
        {
          name: 'services',
          type: 'array',
          label: 'Services List',
          admin: {
            description: 'Drag to reorder services',
          },
          fields: [
            {
              name: 'name',
              type: 'text',
              label: 'Service Name',
              required: true,
            },
            {
              name: 'description',
              type: 'textarea',
              label: 'Service Description',
              required: true,
            },
          ],
          defaultValue: [
            {
              name: 'BOTOX',
              description:
                'Turn back the clock with age-defying injections that smooth away lines and wrinkles, resulting in a refreshed and youthful appearance.',
            },
            {
              name: 'Dermal Fillers',
              description:
                'Restore and enhance your natural beauty with dermal fillers that redefine features, smooth lines, and harmonize your facial contours.',
            },
            {
              name: 'Hand Rejuvenation',
              description:
                'Reclaim youthful hands and confidence with our rejuvenation treatments, addressing volume loss and enhancing skin texture.',
            },
            {
              name: 'Non-Surgical Facelift',
              description:
                'Lift, tighten, and refresh your appearance without surgery through our non-surgical facelift, revitalizing your features.',
            },
            {
              name: "Men's Tailored Services",
              description:
                "Tailored treatments address men's specific aesthetic needs, from wrinkle solutions to masculine contouring.",
            },
            {
              name: 'Permanent Makeup',
              description:
                'Enjoy effortless elegance with expertly applied permanent makeup that accentuates your features.',
            },
            {
              name: 'Micro-Channeling',
              description:
                'Stimulate collagen production and reveal radiant skin with our micro-channeling treatment, enhancing your skin texture.',
            },
            {
              name: 'Semaglutide Injections',
              description:
                'Explore innovative weight management with semaglutide injections, a groundbreaking approach to wellness.',
            },
            {
              name: 'Advanced Skincare',
              description:
                'Elevate your skincare routine with our advanced skincare products, maintaining and enhancing your treatment results.',
            },
            {
              name: 'Spa Services',
              description:
                "Discover revitalizing spa services ranging from acne facials to microneedling with ProCell serum, all designed to enhance your skin's health and appearance.",
            },
          ],
        },
        {
          name: 'columnsLayout',
          type: 'checkbox',
          label: 'Use Columns Layout',
          defaultValue: true,
        },
      ],
    },
    // Half Image Section 1
    {
      name: 'halfImageSection1',
      type: 'group',
      label: 'Half Image Section 1 (Rejuvenating Treatments)',
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
            'mod_half_image viewport half-image container wow fadeInLeft background-navy',
        },
        {
          name: 'rowCssClasses',
          type: 'text',
          label: 'Row CSS Classes',
          defaultValue: 'row half-image-row flipped mt-0 mb-0',
        },
        {
          name: 'flipped',
          type: 'checkbox',
          label: 'Flipped Layout',
          defaultValue: true,
        },
        {
          name: 'padded',
          type: 'checkbox',
          label: 'Padded Copy',
          defaultValue: true,
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Heading',
          required: true,
          defaultValue: 'Rejuvenating treatments: Empower your life with our help.',
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
              defaultValue: 'sarasota',
            },
          ],
        },
      ],
    },
    // Simple Column Section 1
    {
      name: 'simpleColumnSection1',
      type: 'group',
      label: 'Simple Column Section 1 (Story)',
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
          name: 'rowCssClasses',
          type: 'text',
          label: 'Row CSS Classes',
          defaultValue: 'row mt-30 mb-30',
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Heading',
          required: true,
          defaultValue: 'The Goldfingers Aesthetics story',
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
    // Banner Section 2
    {
      name: 'bannerSection2',
      type: 'group',
      label: 'Banner Section 2 (Elevate Your Look)',
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
          defaultValue: 'mod_banner dark hide-divider viewport background-3',
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
          name: 'layoutType',
          type: 'select',
          label: 'Content Layout',
          options: [
            { label: 'Single Column', value: 'single' },
            { label: 'Two Columns', value: 'columns-two' },
          ],
          defaultValue: 'columns-two',
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
    // Two Column Section
    {
      name: 'twoColumnSection',
      type: 'group',
      label: 'Two Column Section (Haven of Support)',
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
          defaultValue: 'mod_columns_two viewport container',
        },
        {
          name: 'rowCssClasses',
          type: 'text',
          label: 'Row CSS Classes',
          defaultValue: 'row pb-0',
        },
        {
          name: 'verticalAlign',
          type: 'checkbox',
          label: 'Vertical Align Content',
          defaultValue: true,
        },
        {
          name: 'leftColumn',
          type: 'group',
          label: 'Left Column',
          fields: [
            {
              name: 'heading',
              type: 'text',
              label: 'Heading',
              defaultValue: 'A haven of support:',
            },
            {
              name: 'headingSmall',
              type: 'text',
              label: 'Heading Small Text',
              defaultValue: 'Goldfingers Aesthetics in Sarasota',
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
              name: 'animationClass',
              type: 'select',
              label: 'Animation Class',
              options: [
                { label: 'Fade In Up', value: 'fadeInUp' },
                { label: 'Fade In Left', value: 'fadeInLeft' },
                { label: 'Fade In Right', value: 'fadeInRight' },
                { label: 'None', value: '' },
              ],
              defaultValue: 'fadeInLeft',
            },
          ],
        },
        {
          name: 'rightColumn',
          type: 'group',
          label: 'Right Column',
          fields: [
            {
              name: 'content',
              type: 'richText',
              label: 'Content',
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
              defaultValue: 'fadeInRight',
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
            'mod_cta_general viewport container cta thin wow fadeInRight mt-0 mb-0 background-2',
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Heading',
          required: true,
          defaultValue: 'Schedule a Consultation',
        },
        {
          name: 'headingLink',
          type: 'text',
          label: 'Heading Link URL',
          defaultValue: '/contact/',
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
              defaultValue: 'Book an Appointment',
            },
            {
              name: 'url',
              type: 'text',
              label: 'Button URL',
              required: true,
              defaultValue: '/contact/',
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
          name: 'cssClasses',
          type: 'text',
          label: 'CSS Classes',
          defaultValue: 'mod_column viewport container',
        },
        {
          name: 'rowCssClasses',
          type: 'text',
          label: 'Row CSS Classes',
          defaultValue: 'row mt-30 mb-30',
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Heading',
          required: true,
          defaultValue: 'Plastic surgery – The gold standard in aesthetic rejuvenation',
        },
        {
          name: 'headingColor',
          type: 'text',
          label: 'Heading Color',
        },
        {
          name: 'headingAlign',
          type: 'select',
          label: 'Heading Alignment',
          options: [
            { label: 'Left', value: 'text-left' },
            { label: 'Center', value: 'text-center' },
            { label: 'Right', value: 'text-right' },
          ],
          defaultValue: 'text-center',
        },
        {
          name: 'intro',
          type: 'richText',
          label: 'Intro Content',
        },
        {
          name: 'procedures',
          type: 'array',
          label: 'Procedures List',
          admin: {
            description: 'Drag to reorder procedures',
          },
          fields: [
            {
              name: 'name',
              type: 'text',
              label: 'Procedure Name',
              required: true,
            },
            {
              name: 'description',
              type: 'textarea',
              label: 'Procedure Description',
              required: true,
            },
          ],
          defaultValue: [
            {
              name: 'Breast augmentation',
              description:
                'Replenish your breast shape and size after pregnancy, weight loss, or aging, beautifully restoring a more feminine, youthful silhouette.',
            },
            {
              name: 'Breast lift',
              description:
                'Breast lift surgery corrects sagging skin and nipples that are no longer perky. The surgery is often paired with breast augmentation or breast reduction for superior results.',
            },
            {
              name: 'Breast reduction',
              description:
                "Tired of carrying all the extra weight? We've got you. Breast reduction can reduce discomfort, enhance stamina, and restore a balanced, attractive figure.",
            },
            {
              name: 'Breast revision',
              description:
                'For patients struggling with complications after a primary breast augmentation, our skilled surgeons can restore peace of mind and well-being through expert breast revision surgery.',
            },
            {
              name: 'Mommy makeover',
              description:
                "For moms who wish to rekindle their self-confidence after childbirth and nursing, a mommy makeover can remove excess fat, reshape the body's contours, and firm weakened abdominal muscles.",
            },
            {
              name: 'Liposuction',
              description:
                'Liposuction is a popular and effective body sculpting tool that removes stubborn pockets of fat resistant to exercise and dieting.',
            },
            {
              name: '8-point facelift',
              description:
                'Our innovative 8-point facelift addresses multiple concerns at once, including midface sagging, jowls, and loss of definition in the jawline, restoring a refreshed, inviting countenance.',
            },
          ],
        },
        {
          name: 'columnsLayout',
          type: 'checkbox',
          label: 'Use Columns Layout',
          defaultValue: true,
        },
      ],
    },
    // Banner Section 3
    {
      name: 'bannerSection3',
      type: 'group',
      label: 'Banner Section 3 (Transformative Surgery)',
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
          defaultValue: 'mod_banner dark hide-divider viewport background-14',
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
          name: 'heading',
          type: 'text',
          label: 'Heading',
          defaultValue: 'Transformative plastic surgery in Lake Mary',
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
          name: 'procedures',
          type: 'array',
          label: 'Procedures List with Links',
          admin: {
            description: 'Drag to reorder procedures',
          },
          fields: [
            {
              name: 'name',
              type: 'text',
              label: 'Procedure Name',
              required: true,
            },
            {
              name: 'url',
              type: 'text',
              label: 'Procedure URL',
            },
            {
              name: 'description',
              type: 'textarea',
              label: 'Procedure Description',
              required: true,
            },
          ],
          defaultValue: [
            {
              name: 'Breast Augmentation',
              url: '/plastic-surgery/breast-augmentation/',
              description:
                'Enhance your silhouette with precision-placed implants, achieving your desired size and shape with remarkable artistry.',
            },
            {
              name: 'Breast Lift',
              url: '/plastic-surgery/breast-lift/',
              description:
                'Reclaim youthful contours and confidence through a breast lift, lifting and reshaping sagging breasts for a rejuvenated appearance.',
            },
            {
              name: 'Breast Reduction',
              url: '/plastic-surgery/breast-reduction/',
              description:
                'Find relief from discomfort and achieve balance with a breast reduction, reducing excess tissue for improved aesthetics and comfort.',
            },
            {
              name: 'Breast Revision',
              url: '/plastic-surgery/breast-revision/',
              description:
                'Correct past procedures with breast revision, addressing concerns and achieving your desired outcomes.',
            },
            {
              name: 'Mommy Makeover',
              url: '/plastic-surgery/mommy-makeover/',
              description:
                'Experience a comprehensive transformation with a mommy makeover, combining procedures to restore your confidence.',
            },
            {
              name: 'Liposuction',
              url: '/plastic-surgery/liposuction/',
              description:
                'Sculpt your body by removing stubborn fat deposits with liposuction, achieving smoother and more defined contours.',
            },
            {
              name: '8-Point Facelift',
              url: '',
              description:
                'Rejuvenate your face with the transformative 8-point facelift, addressing multiple areas for a youthful appearance.',
            },
          ],
        },
        {
          name: 'columnsLayout',
          type: 'checkbox',
          label: 'Use Columns Layout',
          defaultValue: true,
        },
      ],
    },
    // Final Column with Media
    {
      name: 'finalColumnMedia',
      type: 'group',
      label: 'Final Column with Media (Experience)',
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
          name: 'rowCssClasses',
          type: 'text',
          label: 'Row CSS Classes',
          defaultValue: 'row media-left',
        },
        {
          name: 'mediaPosition',
          type: 'select',
          label: 'Media Position',
          options: [
            { label: 'Left', value: 'media-left' },
            { label: 'Right', value: 'media-right' },
          ],
          defaultValue: 'media-left',
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Heading',
          required: true,
          defaultValue: 'Enjoy the Goldfingers Experience',
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
            { label: 'Banner 1 (Goldfingers Way)', value: 'banner1' },
            { label: 'Services Column', value: 'servicesColumn' },
            { label: 'Half Image 1', value: 'halfImage1' },
            { label: 'Simple Column 1 (Story)', value: 'simpleColumn1' },
            { label: 'Banner 2 (Elevate)', value: 'banner2' },
            { label: 'Two Column', value: 'twoColumn' },
            { label: 'CTA 1', value: 'cta1' },
            { label: 'Plastic Surgery', value: 'plasticSurgery' },
            { label: 'Banner 3 (Transformative)', value: 'banner3' },
            { label: 'Final Column Media', value: 'finalColumnMedia' },
          ],
        },
      ],
      defaultValue: [
        { section: 'hero' },
        { section: 'introColumn' },
        { section: 'boxGrid1' },
        { section: 'divider' },
        { section: 'banner1' },
        { section: 'servicesColumn' },
        { section: 'halfImage1' },
        { section: 'simpleColumn1' },
        { section: 'banner2' },
        { section: 'twoColumn' },
        { section: 'cta1' },
        { section: 'plasticSurgery' },
        { section: 'banner3' },
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
