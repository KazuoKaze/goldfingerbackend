import { CollectionConfig } from 'payload'

export const LiquidFaceliftPageComponent: CollectionConfig = {
  slug: 'liquid-facelift-page-component',
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
      defaultValue: 'Liquid Facelift Page Component',
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
          required: true,
          defaultValue: 'Liquid (Non-Surgical) Facelift',
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
          name: 'description',
          type: 'richText',
          label: 'Description Text',
        },
        {
          name: 'descriptionColor',
          type: 'text',
          label: 'Description Text Color',
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
              defaultValue: 'Dr. Crowley giving consultation',
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
          name: 'headingSmallText',
          type: 'text',
          label: 'Heading Small Text',
          admin: {
            description:
              'Text that appears smaller in the heading (e.g., "Lift, firm, and enhance –")',
          },
        },
        {
          name: 'content',
          type: 'richText',
          label: 'Content',
          required: true,
        },
      ],
    },
    // Half Image Section
    {
      name: 'halfImageSection',
      type: 'group',
      label: 'Half Image Section (Refined Techniques)',
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
          defaultValue: '#navy',
        },
        {
          name: 'textColor',
          type: 'text',
          label: 'Text Color',
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
          name: 'verticalAlignment',
          type: 'select',
          label: 'Vertical Alignment',
          options: [
            { label: 'Top', value: 'top' },
            { label: 'Center', value: 'center' },
            { label: 'Bottom', value: 'bottom' },
          ],
          defaultValue: 'top',
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
          name: 'headingBlockText',
          type: 'text',
          label: 'Heading Block Text',
          admin: {
            description:
              'Text that appears on a new line in the heading (e.g., "Natural-Looking Results")',
          },
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
              defaultValue: 'Brunette woman touching face',
            },
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
    // Column Section (8-Point Non-Surgical Facelift)
    {
      name: 'columnSection',
      type: 'group',
      label: 'Column Section (8-Point Facelift)',
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
          name: 'heading',
          type: 'text',
          label: 'Heading',
          required: true,
          defaultValue: 'What is an 8-point non-surgical facelift?',
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
          name: 'facialAreas',
          type: 'array',
          label: 'Facial Areas',
          admin: {
            description: 'Drag to reorder facial areas',
          },
          fields: [
            {
              name: 'areaNumber',
              type: 'text',
              label: 'Area Number',
              required: true,
              admin: {
                description: 'e.g., "1 and 2", "3", "4", etc.',
              },
            },
            {
              name: 'description',
              type: 'richText',
              label: 'Area Description',
              required: true,
            },
          ],
        },
        {
          name: 'marginTop',
          type: 'text',
          label: 'Margin Top',
          defaultValue: '30',
        },
        {
          name: 'paddingBottom',
          type: 'text',
          label: 'Padding Bottom',
          defaultValue: '0',
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
          name: 'heading',
          type: 'text',
          label: 'Heading',
          required: true,
          defaultValue: 'Before & After',
        },
        {
          name: 'headingColor',
          type: 'text',
          label: 'Heading Color',
        },
        {
          name: 'patients',
          type: 'array',
          label: 'Patient Images',
          admin: {
            description: 'Drag to reorder patient images',
          },
          fields: [
            {
              name: 'url',
              type: 'text',
              label: 'Gallery Item URL',
              required: true,
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
                },
              ],
            },
          ],
        },
        {
          name: 'sliderItemsCount',
          type: 'text',
          label: 'Slider Items Count',
          defaultValue: '3',
          admin: {
            description: 'Number of items to show in the slider',
          },
        },
        {
          name: 'viewGalleryButton',
          type: 'group',
          label: 'View Gallery Button',
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
              defaultValue: 'View Gallery',
            },
            {
              name: 'url',
              type: 'text',
              label: 'Button URL',
            },
            {
              name: 'title',
              type: 'text',
              label: 'Button Title',
              defaultValue: 'View before and after gallery images',
            },
            {
              name: 'ariaLabel',
              type: 'text',
              label: 'Button ARIA Label',
              defaultValue: 'View before and after gallery images',
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
    // CTA General Section (Schedule Consultation)
    {
      name: 'ctaGeneralSection',
      type: 'group',
      label: 'CTA General Section (Schedule)',
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
        {
          name: 'layoutStyle',
          type: 'select',
          label: 'Layout Style',
          options: [
            { label: 'Thin', value: 'thin' },
            { label: 'Regular', value: 'regular' },
            { label: 'Wide', value: 'wide' },
          ],
          defaultValue: 'thin',
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
    // Box Grid Section (Why Choose Us)
    {
      name: 'boxGridSection',
      type: 'group',
      label: 'Box Grid Section (Why Choose Us)',
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
          name: 'headingBlockText',
          type: 'text',
          label: 'Heading Block Text',
          admin: {
            description:
              'Text that appears on a new line in the heading (e.g., "a non-surgical facelift?")',
          },
        },
        {
          name: 'introContent',
          type: 'richText',
          label: 'Intro Content (before boxes)',
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
              name: 'title',
              type: 'text',
              label: 'Box Title',
              required: true,
            },
            {
              name: 'content',
              type: 'richText',
              label: 'Box Content',
              required: true,
            },
          ],
        },
        {
          name: 'gridLayout',
          type: 'select',
          label: 'Grid Layout',
          options: [
            { label: 'Default', value: 'default' },
            { label: 'Wider', value: 'wider' },
          ],
          defaultValue: 'wider',
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
            { label: 'Half Image Section (Refined Techniques)', value: 'halfImageSection' },
            { label: 'Column Section (8-Point Facelift)', value: 'columnSection' },
            { label: 'CTA Before & After Section', value: 'ctaBeforeAfterSection' },
            { label: 'CTA General Section (Schedule)', value: 'ctaGeneralSection' },
            { label: 'Box Grid Section (Why Choose Us)', value: 'boxGridSection' },
          ],
        },
      ],
      defaultValue: [
        { section: 'hero' },
        { section: 'intro' },
        { section: 'halfImageSection' },
        { section: 'columnSection' },
        { section: 'ctaBeforeAfterSection' },
        { section: 'ctaGeneralSection' },
        { section: 'boxGridSection' },
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
        {
          name: 'headingFontSize',
          type: 'text',
          label: 'Default Heading Font Size',
          admin: {
            description: 'Default font size for h2 headings',
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
          name: 'h3FontWeight',
          type: 'text',
          label: 'H3 Font Weight',
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
          name: 'smallTextSize',
          type: 'text',
          label: 'Small Text Size',
          admin: {
            description: 'Font size for small text elements (e.g., within headings)',
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
          defaultValue: 'Liquid Facelift - Non-Surgical Facelift - Goldfingers Aesthetics',
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
          defaultValue: '768px',
        },
        {
          name: 'tabletBreakpoint',
          type: 'text',
          label: 'Tablet Breakpoint',
          admin: {
            description: 'Screen width for tablet (e.g., 1024px)',
          },
          defaultValue: '1024px',
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
