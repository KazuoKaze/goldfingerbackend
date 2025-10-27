import { CollectionConfig } from 'payload'

export const LiposuctionPageComponent: CollectionConfig = {
  slug: 'liposuction-page-component',
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
      defaultValue: 'Liposuction Page Component',
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
          defaultValue: [
            {
              label: 'Home',
              url: '/',
              ariaLabel: 'Breadcrumbs to help navigate the user',
            },
            {
              label: 'Plastic Surgery',
              url: '/plastic-surgery/',
              ariaLabel: 'Breadcrumbs to help navigate the user',
            },
            {
              label: 'Liposuction',
              url: '/plastic-surgery/liposuction/',
              ariaLabel: 'Breadcrumbs to help navigate the user',
            },
          ],
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
          defaultValue: 'Liposuction',
        },
        {
          name: 'subtitle',
          type: 'text',
          label: 'Subtitle',
          defaultValue: 'Plastic Surgery',
        },
        {
          name: 'description',
          type: 'richText',
          label: 'Description Text',
          admin: {
            description: 'Main description text in hero section',
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
              defaultValue: 'Book an Appointment',
            },
            {
              name: 'url',
              type: 'text',
              label: 'Button URL',
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
              defaultValue: 'female torso',
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
          name: 'className',
          type: 'text',
          label: 'Additional Classes',
          defaultValue: 'mod_intro container viewport option-1 wow fadeInUp',
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
          defaultValue: 'Sculpt your dream body',
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
      label: 'Banner Section 1 - Get the Body',
      fields: [
        {
          name: 'show',
          type: 'checkbox',
          label: 'Show Section',
          defaultValue: true,
        },
        {
          name: 'className',
          type: 'text',
          label: 'Additional Classes',
          defaultValue: 'mod_banner dark hide-divider viewport background-7',
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Heading',
          defaultValue: 'Get the Body You Deserve:',
        },
        {
          name: 'subheading',
          type: 'text',
          label: 'Subheading',
          defaultValue: 'Liposuction for a Healthier, Happier You',
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
              defaultValue: 'Banner media',
            },
          ],
        },
      ],
    },
    // CTA Before & After Section
    {
      name: 'ctaBeforeAfterSection',
      type: 'group',
      label: 'CTA Before & After Section',
      fields: [
        {
          name: 'show',
          type: 'checkbox',
          label: 'Show Section',
          defaultValue: true,
        },
        {
          name: 'className',
          type: 'text',
          label: 'Additional Classes',
          defaultValue: 'mod_cta_ba_feed cta container wow fadeInUp',
        },
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          defaultValue: 'Before & After',
        },
        {
          name: 'subtitle',
          type: 'text',
          label: 'Subtitle',
          defaultValue: 'Liposuction',
        },
        {
          name: 'galleryUrl',
          type: 'text',
          label: 'View Gallery URL',
          defaultValue: '/gallery/surgical/liposuction/',
        },
        {
          name: 'ageRestrictionWarning',
          type: 'group',
          label: 'Age Restriction Warning',
          fields: [
            {
              name: 'show',
              type: 'checkbox',
              label: 'Show Warning',
              defaultValue: true,
            },
            {
              name: 'heading',
              type: 'text',
              label: 'Warning Heading',
              defaultValue: 'Warning:',
            },
            {
              name: 'message',
              type: 'textarea',
              label: 'Warning Message',
              defaultValue:
                'This gallery contains nudity. Please click OK to confirm you are at least 18 years of age and are not offended by this material.',
            },
            {
              name: 'buttonText',
              type: 'text',
              label: 'Button Text',
              defaultValue: 'Ok',
            },
          ],
        },
        {
          name: 'beforeAfterItems',
          type: 'array',
          label: 'Before & After Items',
          admin: {
            description: 'Add before and after image pairs',
          },
          fields: [
            {
              name: 'url',
              type: 'text',
              label: 'Gallery Item URL',
              required: true,
            },
            {
              name: 'beforeImage',
              type: 'group',
              label: 'Before Image',
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
                  name: 'large',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Large Image',
                },
                {
                  name: 'alt',
                  type: 'text',
                  label: 'Alt Text',
                  defaultValue: '',
                },
              ],
            },
            {
              name: 'afterImage',
              type: 'group',
              label: 'After Image',
              fields: [
                {
                  name: 'mobile',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Mobile Image (≤420px)',
                },
                {
                  name: 'large',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Large Image',
                },
                {
                  name: 'alt',
                  type: 'text',
                  label: 'Alt Text',
                  defaultValue: '',
                },
              ],
            },
          ],
        },
      ],
    },
    // Half Image Section
    {
      name: 'halfImageSection',
      type: 'group',
      label: 'Half Image Section - Natural Fat Transfer',
      fields: [
        {
          name: 'show',
          type: 'checkbox',
          label: 'Show Section',
          defaultValue: true,
        },
        {
          name: 'className',
          type: 'text',
          label: 'Additional Classes',
          defaultValue: 'mod_half_image viewport half-image container wow fadeInLeft',
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Heading',
          defaultValue: 'Natural Fat Transfer:',
        },
        {
          name: 'subheading',
          type: 'text',
          label: 'Subheading',
          defaultValue: 'Enhance Your Look with Your Own Body Fat',
        },
        {
          name: 'content',
          type: 'richText',
          label: 'Content',
        },
        {
          name: 'image',
          type: 'group',
          label: 'Section Image',
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
              defaultValue: 'doctor placing hands on womans stomach',
            },
          ],
        },
      ],
    },
    // Banner Section 2
    {
      name: 'bannerSection2',
      type: 'group',
      label: 'Banner Section 2 - How Does Liposuction Work',
      fields: [
        {
          name: 'show',
          type: 'checkbox',
          label: 'Show Section',
          defaultValue: true,
        },
        {
          name: 'className',
          type: 'text',
          label: 'Additional Classes',
          defaultValue: 'mod_banner dark hide-divider viewport background-1',
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Heading',
          defaultValue: 'How Does Liposuction Work?',
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
              defaultValue: 'Banner media',
            },
          ],
        },
      ],
    },
    // Three Column Section
    {
      name: 'threeColumnSection',
      type: 'group',
      label: 'Three Column Section',
      fields: [
        {
          name: 'show',
          type: 'checkbox',
          label: 'Show Section',
          defaultValue: true,
        },
        {
          name: 'className',
          type: 'text',
          label: 'Additional Classes',
          defaultValue: 'mod_columns_three viewport container',
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Heading',
          defaultValue: 'Advanced Liposuction Treatments: The Goldfingers Experience',
        },
        {
          name: 'leftColumn',
          type: 'richText',
          label: 'Left Column Content',
        },
        {
          name: 'centerColumn',
          type: 'richText',
          label: 'Center Column Content',
        },
        {
          name: 'rightColumn',
          type: 'richText',
          label: 'Right Column Content',
        },
      ],
    },
    // Column Section 1
    {
      name: 'columnSection1',
      type: 'group',
      label: 'Column Section 1 - Candidates',
      fields: [
        {
          name: 'show',
          type: 'checkbox',
          label: 'Show Section',
          defaultValue: true,
        },
        {
          name: 'className',
          type: 'text',
          label: 'Additional Classes',
          defaultValue: 'mod_column viewport container has-media',
        },
        {
          name: 'rowClassName',
          type: 'text',
          label: 'Row Classes',
          defaultValue: 'row mb-40 media-right',
          admin: {
            description: 'Classes for positioning (e.g., media-right, media-left)',
          },
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Heading',
          defaultValue: 'Liposuction Candidates',
        },
        {
          name: 'content',
          type: 'richText',
          label: 'Content',
        },
        {
          name: 'image',
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
    // Box Grid Section
    {
      name: 'boxGridSection',
      type: 'group',
      label: 'Box Grid Section - Recovery and Results',
      fields: [
        {
          name: 'show',
          type: 'checkbox',
          label: 'Show Section',
          defaultValue: true,
        },
        {
          name: 'className',
          type: 'text',
          label: 'Additional Classes',
          defaultValue:
            'mod_box_grid viewport five-boxes container option-2 default bkg-image dark wider',
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Main Heading',
          defaultValue: 'Recovery and Results:',
        },
        {
          name: 'subheading',
          type: 'text',
          label: 'Subheading',
          defaultValue: 'What to Expect After Liposuction',
        },
        {
          name: 'introContent',
          type: 'richText',
          label: 'Intro Content',
          admin: {
            description: 'Content that appears before the boxes',
          },
        },
        {
          name: 'boxes',
          type: 'array',
          label: 'Content Boxes',
          admin: {
            description: 'Drag to reorder boxes',
          },
          defaultValue: [
            {
              heading: 'Detailed aftercare instructions',
            },
            {
              heading: 'Gradual improvements',
            },
            {
              heading: 'Resuming light activities',
            },
            {
              heading: 'Avoiding strenuous activities',
            },
            {
              heading: 'Final results',
            },
          ],
          fields: [
            {
              name: 'heading',
              type: 'text',
              label: 'Box Heading',
              required: true,
            },
            {
              name: 'content',
              type: 'richText',
              label: 'Box Content',
            },
          ],
        },
        {
          name: 'afterContent',
          type: 'richText',
          label: 'Content After Boxes',
          admin: {
            description: 'Content that appears after the boxes',
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
              defaultValue: 'Background media',
            },
          ],
        },
      ],
    },
    // Column Section 2
    {
      name: 'columnSection2',
      type: 'group',
      label: 'Column Section 2 - Gold Standard',
      fields: [
        {
          name: 'show',
          type: 'checkbox',
          label: 'Show Section',
          defaultValue: true,
        },
        {
          name: 'className',
          type: 'text',
          label: 'Additional Classes',
          defaultValue: 'mod_column viewport container',
        },
        {
          name: 'rowClassName',
          type: 'text',
          label: 'Row Classes',
          defaultValue: 'row mt-40',
          admin: {
            description: 'Classes for positioning',
          },
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Heading',
          defaultValue: 'Goldfingers: The Gold Standard In Liposuction',
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
            { label: 'Banner Section 1 - Get the Body', value: 'bannerSection1' },
            { label: 'CTA Before & After Section', value: 'ctaBeforeAfter' },
            { label: 'Half Image Section - Fat Transfer', value: 'halfImage' },
            { label: 'Banner Section 2 - How Does It Work', value: 'bannerSection2' },
            { label: 'Three Column Section', value: 'threeColumn' },
            { label: 'Column Section 1 - Candidates', value: 'columnSection1' },
            { label: 'Box Grid Section - Recovery', value: 'boxGrid' },
            { label: 'Column Section 2 - Gold Standard', value: 'columnSection2' },
          ],
        },
      ],
      defaultValue: [
        { section: 'hero' },
        { section: 'intro' },
        { section: 'bannerSection1' },
        { section: 'ctaBeforeAfter' },
        { section: 'halfImage' },
        { section: 'bannerSection2' },
        { section: 'threeColumn' },
        { section: 'columnSection1' },
        { section: 'boxGrid' },
        { section: 'columnSection2' },
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
          defaultValue: 'Liposuction - Goldfingers Aesthetics and Plastic Surgery',
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          label: 'Meta Description',
          defaultValue:
            'Achieve your dream body with expert liposuction by Dr. Michael McClure at Goldfingers Aesthetics & Plastic Surgery in Orlando, Florida.',
        },
        {
          name: 'ogImage',
          type: 'upload',
          relationTo: 'media',
          label: 'OG Image',
        },
        {
          name: 'keywords',
          type: 'text',
          label: 'Keywords',
          admin: {
            description: 'Comma-separated keywords for SEO',
          },
          defaultValue:
            'liposuction, body contouring, fat removal, plastic surgery, Dr. McClure, Orlando, Florida',
        },
        {
          name: 'canonicalUrl',
          type: 'text',
          label: 'Canonical URL',
          defaultValue: '/plastic-surgery/liposuction/',
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
      ],
    },
    // Performance Settings
    {
      name: 'performanceSettings',
      type: 'group',
      label: 'Performance Settings',
      fields: [
        {
          name: 'lazyLoadImages',
          type: 'checkbox',
          label: 'Lazy Load Images',
          defaultValue: true,
          admin: {
            description: 'Load images only when they come into view',
          },
        },
        {
          name: 'optimizeImages',
          type: 'checkbox',
          label: 'Optimize Images',
          defaultValue: true,
          admin: {
            description: 'Automatically optimize and compress images',
          },
        },
        {
          name: 'imageQuality',
          type: 'number',
          label: 'Image Quality',
          defaultValue: 85,
          admin: {
            description: 'Image compression quality (1-100)',
          },
          min: 1,
          max: 100,
        },
      ],
    },
    // Advanced Settings
    {
      name: 'advancedSettings',
      type: 'group',
      label: 'Advanced Settings',
      fields: [
        {
          name: 'customClasses',
          type: 'text',
          label: 'Custom CSS Classes',
          admin: {
            description: 'Add custom CSS classes to the main container',
          },
        },
        {
          name: 'dataAttributes',
          type: 'array',
          label: 'Data Attributes',
          admin: {
            description: 'Add custom data attributes for tracking/analytics',
          },
          fields: [
            {
              name: 'name',
              type: 'text',
              label: 'Data Attribute Name',
              required: true,
              admin: {
                description: 'Without "data-" prefix (e.g., "s3-module")',
              },
            },
            {
              name: 'value',
              type: 'text',
              label: 'Data Attribute Value',
            },
          ],
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
    {
      name: 'version',
      type: 'text',
      label: 'Version',
      defaultValue: '1.0.0',
      admin: {
        description: 'Component version for tracking changes',
        readOnly: true,
      },
    },
  ],
  timestamps: true,
  versions: {
    drafts: true,
    maxPerDoc: 50,
  },
}
