import { CollectionConfig } from 'payload'

export const MommyMakeoverPageComponent: CollectionConfig = {
  slug: 'mommy-makeover-page-component',
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
      defaultValue: 'Mommy Makeover Page Component',
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
              label: 'Mommy Makeover',
              url: '/plastic-surgery/mommy-makeover/',
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
          defaultValue: 'Mommy Makeover Surgery',
        },
        {
          name: 'titleSmall',
          type: 'text',
          label: 'Small Title Text',
          defaultValue: 'in Orlando',
        },
        {
          name: 'description',
          type: 'richText',
          label: 'Description Text',
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
              defaultValue: 'woman wearing white bikini sitting down',
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
          defaultValue: 'mod_intro container viewport option-1 wide wow fadeInUp',
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
          defaultValue: 'Rediscovering Your Confidence',
        },
        {
          name: 'content',
          type: 'richText',
          label: 'Content',
        },
      ],
    },
    // Box Grid Section 1
    {
      name: 'boxGridSection1',
      type: 'group',
      label: 'Box Grid Section 1 (What is Mommy Makeover)',
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
          defaultValue: 'mod_box_grid viewport container option-3 default bkg-image dark wider',
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Main Heading',
        },
        {
          name: 'introContent',
          type: 'richText',
          label: 'Intro Content',
        },
        {
          name: 'boxes',
          type: 'array',
          label: 'Content Boxes',
          defaultValue: [
            {
              heading: 'Breast Enhancement',
            },
            {
              heading: 'Tummy Tuck',
            },
            {
              heading: 'Liposuction',
            },
            {
              heading: 'Skin Rejuvenation',
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
      ],
    },
    // Half Image Section
    {
      name: 'halfImageSection',
      type: 'group',
      label: 'Half Image Section',
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
            'mod_half_image viewport half-image container wow fadeInLeft background-navy',
        },
        {
          name: 'rowClassName',
          type: 'text',
          label: 'Row Classes',
          defaultValue: 'row half-image-row mt-0 mb-0',
        },
        {
          name: 'copyClassName',
          type: 'text',
          label: 'Copy Container Classes',
          defaultValue: 'copy padded',
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Heading',
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
              defaultValue: "doctor touching woman's hip",
            },
          ],
        },
      ],
    },
    // Column with Media Section
    {
      name: 'columnMediaSection',
      type: 'group',
      label: 'Column with Media Section',
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
          defaultValue: 'row mt-40 mb-40 media-right',
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Heading',
          defaultValue: 'What is the recovery time?',
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
    // Box Grid Section 2
    {
      name: 'boxGridSection2',
      type: 'group',
      label: 'Box Grid Section 2 (Why Choose)',
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
          defaultValue: 'mod_box_grid viewport container option-2 default bkg-image dark wider',
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Main Heading',
          defaultValue: 'Why choose Goldfingers Aesthetics & Plastic Surgery?',
        },
        {
          name: 'boxes',
          type: 'array',
          label: 'Content Boxes',
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
          name: 'contentAfter',
          type: 'richText',
          label: 'Content After Boxes',
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
          name: 'titleSmall',
          type: 'text',
          label: 'Small Title Text',
          defaultValue: 'Mommy Makeover',
        },
        {
          name: 'patients',
          type: 'array',
          label: 'Patient Before/After Images',
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
                  label: 'Mobile Image',
                },
                {
                  name: 'tablet',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Tablet Image',
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
                  label: 'Mobile Image',
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
                },
              ],
            },
          ],
        },
        {
          name: 'ageRestricted',
          type: 'group',
          label: 'Age Restriction Settings',
          fields: [
            {
              name: 'enabled',
              type: 'checkbox',
              label: 'Enable Age Restriction',
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
          name: 'viewGalleryButton',
          type: 'group',
          label: 'View Gallery Button',
          fields: [
            {
              name: 'text',
              type: 'text',
              label: 'Button Text',
              defaultValue: 'View Gallery',
            },
            {
              name: 'url',
              type: 'text',
              label: 'Button URL',
              defaultValue: '/gallery/surgical/mommy-makeover/',
            },
            {
              name: 'title',
              type: 'text',
              label: 'Title Attribute',
              defaultValue: 'View before and after gallery images',
            },
            {
              name: 'ariaLabel',
              type: 'text',
              label: 'ARIA Label',
              defaultValue: 'View before and after gallery images',
            },
          ],
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
          name: 'className',
          type: 'text',
          label: 'Additional Classes',
          defaultValue: 'mod_columns_two viewport container',
        },
        {
          name: 'rowClassName',
          type: 'text',
          label: 'Row Classes',
          defaultValue: 'row',
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Heading',
          defaultValue: 'Why undergo a Mommy Makeover?',
        },
        {
          name: 'leftColumn',
          type: 'richText',
          label: 'Left Column Content',
        },
        {
          name: 'rightColumn',
          type: 'richText',
          label: 'Right Column Content',
        },
      ],
    },
    // Banner Section (Pricing)
    {
      name: 'bannerSection',
      type: 'group',
      label: 'Banner Section (Pricing)',
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
          defaultValue: 'mod_banner dark hide-divider viewport background-2',
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Heading',
        },
        {
          name: 'headingSmall',
          type: 'text',
          label: 'Small Heading Text',
        },
        {
          name: 'headingAlignment',
          type: 'text',
          label: 'Heading Alignment Class',
          defaultValue: 'text-center',
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
            { label: 'Box Grid Section 1', value: 'boxGrid1' },
            { label: 'Half Image Section', value: 'halfImage' },
            { label: 'Column with Media Section', value: 'columnMedia' },
            { label: 'Box Grid Section 2', value: 'boxGrid2' },
            { label: 'CTA Before & After Section', value: 'ctaBeforeAfter' },
            { label: 'Two Column Section', value: 'twoColumn' },
            { label: 'Banner Section (Pricing)', value: 'banner' },
          ],
        },
      ],
      defaultValue: [
        { section: 'hero' },
        { section: 'intro' },
        { section: 'boxGrid1' },
        { section: 'halfImage' },
        { section: 'columnMedia' },
        { section: 'boxGrid2' },
        { section: 'ctaBeforeAfter' },
        { section: 'twoColumn' },
        { section: 'banner' },
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
          defaultValue: 'Mommy Makeover - Goldfingers Aesthetics and Plastic Surgery',
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          label: 'Meta Description',
          defaultValue:
            'Embrace your inner and outer glow with Goldfingers Mommy Makeover in Orlando, Florida. Restore your confidence after motherhood.',
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
          defaultValue:
            'mommy makeover, breast enhancement, tummy tuck, liposuction, Orlando, Florida',
        },
        {
          name: 'canonicalUrl',
          type: 'text',
          label: 'Canonical URL',
          defaultValue: '/plastic-surgery/mommy-makeover/',
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
    {
      name: 'isActive',
      type: 'checkbox',
      label: 'Active',
      defaultValue: true,
    },
    {
      name: 'version',
      type: 'text',
      label: 'Version',
      defaultValue: '1.0.0',
      admin: {
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
