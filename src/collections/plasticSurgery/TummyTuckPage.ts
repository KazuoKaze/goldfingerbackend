import { CollectionConfig } from 'payload'

export const TummyTuckPageComponent: CollectionConfig = {
  slug: 'tummy-tuck-page-component',
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
      defaultValue: 'Tummy Tuck Page Component',
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
              label: 'Tummy Tuck',
              url: '/plastic-surgery/tummy-tuck/',
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
          defaultValue: 'Tummy Tuck',
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
              defaultValue: 'woman in white bikini smiling',
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
          defaultValue: 'Sculpting a Flatter, Firmer Abdomen',
        },
        {
          name: 'content',
          type: 'richText',
          label: 'Content',
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
          defaultValue: 'mod_half_image  viewport half-image container wow fadeInLeft',
        },
        {
          name: 'rowClassName',
          type: 'text',
          label: 'Row Classes',
          defaultValue: 'row half-image-row mt-0',
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
              defaultValue: "doctor's hands near woman on chair's stomach",
            },
          ],
        },
      ],
    },
    // Box Grid Section 1 (Three Boxes)
    {
      name: 'boxGridSection1',
      type: 'group',
      label: 'Box Grid Section 1 (Three Boxes)',
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
            'mod_box_grid viewport three-boxes container option-1 default bkg-image dark wider',
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
          maxRows: 3,
          defaultValue: [
            {
              heading: 'Removal of Excess Skin',
            },
            {
              heading: 'Fat Removal',
            },
            {
              heading: 'Tightening of Abdominal Muscles',
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
    // Box Grid Section 2 (Six Boxes - Candidate)
    {
      name: 'boxGridSection2',
      type: 'group',
      label: 'Box Grid Section 2 (Candidate Info)',
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
          defaultValue: 'mod_box_grid viewport container option-1 default no-bg wider',
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
          defaultValue: 'Tummy Tuck',
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
              defaultValue: '/gallery/surgical/tummy-tuck/',
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
    // Banner Section 1
    {
      name: 'bannerSection1',
      type: 'group',
      label: 'Banner Section 1 (Consultation)',
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
          defaultValue: 'Recovery and results',
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
              defaultValue: 'white sand beach',
            },
          ],
        },
      ],
    },
    // Banner Section 2
    {
      name: 'bannerSection2',
      type: 'group',
      label: 'Banner Section 2 (Why Choose)',
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
          admin: {
            description:
              'Use bullet lists for the "Why Choose" points. Content will be rendered with columns class.',
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
            { label: 'Half Image Section', value: 'halfImage' },
            { label: 'Box Grid Section 1', value: 'boxGrid1' },
            { label: 'Box Grid Section 2', value: 'boxGrid2' },
            { label: 'CTA Before & After Section', value: 'ctaBeforeAfter' },
            { label: 'Banner Section 1', value: 'banner1' },
            { label: 'Column with Media Section', value: 'columnMedia' },
            { label: 'Banner Section 2', value: 'banner2' },
          ],
        },
      ],
      defaultValue: [
        { section: 'hero' },
        { section: 'intro' },
        { section: 'halfImage' },
        { section: 'boxGrid1' },
        { section: 'boxGrid2' },
        { section: 'ctaBeforeAfter' },
        { section: 'banner1' },
        { section: 'columnMedia' },
        { section: 'banner2' },
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
          defaultValue: 'Tummy Tuck - Goldfingers Aesthetics and Plastic Surgery',
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          label: 'Meta Description',
          defaultValue:
            'Experience the art of tummy transformation with Goldfingers precision. Sculpt a flatter, firmer abdomen with our expert tummy tuck procedures.',
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
            'tummy tuck, abdominoplasty, plastic surgery, body contouring, Orlando, Florida',
        },
        {
          name: 'canonicalUrl',
          type: 'text',
          label: 'Canonical URL',
          defaultValue: '/plastic-surgery/tummy-tuck/',
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
