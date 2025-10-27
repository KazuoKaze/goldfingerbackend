import { CollectionConfig } from 'payload'

export const StPetersburgLocationPageComponent: CollectionConfig = {
  slug: 'st-petersburg-location-page-component',
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
      defaultValue: 'St Petersburg Location Page Component',
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
              label: 'St Petersburg',
              url: '/st-petersburg/',
              ariaLabel: 'Breadcrumbs to help navigate the user',
            },
          ],
        },
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          required: true,
          defaultValue: 'Experience the Difference at Goldfingers Aesthetics',
        },
        {
          name: 'titleCssClass',
          type: 'text',
          label: 'Title CSS Class',
          defaultValue: 'long-title',
        },
        {
          name: 'titleColor',
          type: 'text',
          label: 'Title Color',
        },
        {
          name: 'showDescription',
          type: 'checkbox',
          label: 'Show Description Text',
          defaultValue: true,
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
              label: 'Desktop Image',
            },
            {
              name: 'alt',
              type: 'text',
              label: 'Alt Text',
              required: true,
              defaultValue: 'St. Pete',
            },
          ],
        },
      ],
    },
    // Intro Section
    {
      name: 'introSection',
      type: 'group',
      label: 'Intro Section',
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
          defaultValue: 'mod_intro container viewport option-1 wide wow fadeInUp',
        },
        {
          name: 'rowCssClasses',
          type: 'text',
          label: 'Row CSS Classes',
          defaultValue: 'row pb-0',
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
          defaultValue: 'Expertise and Art',
        },
        {
          name: 'headingSpan',
          type: 'text',
          label: 'Heading Span Text',
          defaultValue: 'United for Crafting Beauty',
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
    // Half Image Section 1
    {
      name: 'halfImageSection1',
      type: 'group',
      label: 'Half Image Section 1 (25 Years Experience)',
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
          name: 'rowCssClasses',
          type: 'text',
          label: 'Row CSS Classes',
          defaultValue: 'row half-image-row',
        },
        {
          name: 'flipped',
          type: 'checkbox',
          label: 'Flipped Layout',
          defaultValue: false,
        },
        {
          name: 'copyPadding',
          type: 'select',
          label: 'Copy Padding Style',
          options: [
            { label: 'None', value: '' },
            { label: 'Padded', value: 'padded' },
            { label: 'Padded 2', value: 'padded2' },
          ],
          defaultValue: 'padded2',
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Heading',
          required: true,
          defaultValue: 'Backed by Over 25 Years Experience.',
        },
        {
          name: 'headingSmall',
          type: 'text',
          label: 'Heading Small Text (before main)',
          defaultValue: 'The Providers we Work with are Committed to Providing Superior Results.',
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
              label: 'Desktop Image',
            },
            {
              name: 'alt',
              type: 'text',
              label: 'Alt Text',
              required: true,
              defaultValue: '',
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
          defaultValue: 'Our Range of services in St. Petersburg',
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
            'Discover an array of transformative treatments at Goldfingers Aesthetics & Plastic Surgery in St. Petersburg:',
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
    // Banner Section 1
    {
      name: 'bannerSection1',
      type: 'group',
      label: 'Banner Section 1 (Dermal Fillers)',
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
          name: 'heading',
          type: 'text',
          label: 'Heading',
          defaultValue: 'Restore and Enhance with Dermal Fillers',
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
    // Banner Section 2 (Plastic Surgery)
    {
      name: 'bannerSection2',
      type: 'group',
      label: 'Banner Section 2 (Plastic Surgery)',
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
    // Final Column Section
    {
      name: 'finalColumnSection',
      type: 'group',
      label: 'Final Column Section (Elevate Your Look)',
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
          defaultValue: 'row',
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Heading',
          required: true,
          defaultValue:
            'Elevate your Look with Custom Aesthetic & Medical Spa Treatments in St. Petersburg',
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
            { label: 'Intro Section', value: 'intro' },
            { label: 'Half Image 1', value: 'halfImage1' },
            { label: 'Services Column', value: 'servicesColumn' },
            { label: 'Banner 1 (Dermal Fillers)', value: 'banner1' },
            { label: 'Divider', value: 'divider' },
            { label: 'Banner 2 (Plastic Surgery)', value: 'banner2' },
            { label: 'Final Column', value: 'finalColumn' },
          ],
        },
      ],
      defaultValue: [
        { section: 'hero' },
        { section: 'intro' },
        { section: 'halfImage1' },
        { section: 'servicesColumn' },
        { section: 'banner1' },
        { section: 'divider' },
        { section: 'banner2' },
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
