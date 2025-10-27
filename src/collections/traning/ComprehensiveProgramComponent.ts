import { CollectionConfig } from 'payload'

export const ComprehensiveProgramComponent: CollectionConfig = {
  slug: 'comprehensive-program-component',
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
      defaultValue: 'Comprehensive Program Component',
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
          admin: {
            description: 'CSS color value (e.g., #ffffff, rgba(0,0,0,0.5))',
          },
        },
        {
          name: 'textColor',
          type: 'text',
          label: 'Text Color',
        },
        {
          name: 'containerClass',
          type: 'text',
          label: 'Container Class',
          defaultValue: 'mod_intro container viewport option-1 wide wow fadeInUp',
          admin: {
            description: 'CSS classes for the container',
          },
        },
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
          label: 'Logo Image',
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
          name: 'logoAlt',
          type: 'text',
          label: 'Logo Alt Text',
          defaultValue: 'Goldfingers aesthetic logo',
        },
        {
          name: 'heading',
          type: 'richText',
          label: 'Main Heading',
          required: true,
        },
        {
          name: 'headingColor',
          type: 'text',
          label: 'Heading Color',
        },
      ],
    },
    // Duration & Destinations Section (Column Module 1)
    {
      name: 'durationSection',
      type: 'group',
      label: 'Duration & Destinations Section',
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
          name: 'containerClass',
          type: 'text',
          label: 'Container Class',
          defaultValue: 'mod_column viewport container',
        },
        {
          name: 'durationLabel',
          type: 'text',
          label: 'Duration Label',
          defaultValue: 'Duration',
        },
        {
          name: 'durationValue',
          type: 'text',
          label: 'Duration Value',
          defaultValue: '5 Days',
        },
        {
          name: 'destinationsLabel',
          type: 'text',
          label: 'Destinations Label',
          defaultValue: 'Destinations',
        },
        {
          name: 'destinations',
          type: 'array',
          label: 'Destination Locations',
          admin: {
            description: 'Drag to reorder destinations',
          },
          fields: [
            {
              name: 'location',
              type: 'text',
              label: 'Location Name',
              required: true,
            },
          ],
        },
        {
          name: 'labelColor',
          type: 'text',
          label: 'Label Color (Duration/Destinations)',
        },
        {
          name: 'valueColor',
          type: 'text',
          label: 'Value Color',
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
        },
        {
          name: 'textColor',
          type: 'text',
          label: 'Text Color',
        },
        {
          name: 'containerClass',
          type: 'text',
          label: 'Container Class',
          defaultValue: 'mod_columns_two viewport container',
        },
        {
          name: 'verticalAlign',
          type: 'checkbox',
          label: 'Vertical Align Content',
          defaultValue: true,
        },
        {
          name: 'leftContent',
          type: 'richText',
          label: 'Left Column Content',
          required: true,
        },
        {
          name: 'leftContentColor',
          type: 'text',
          label: 'Left Content Text Color',
        },
        {
          name: 'leftAnimation',
          type: 'text',
          label: 'Left Column Animation',
          defaultValue: 'fadeInLeft',
          admin: {
            description: 'WOW.js animation class',
          },
        },
        {
          name: 'rightImage',
          type: 'group',
          label: 'Right Column Image',
          fields: [
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              label: 'Image',
            },
            {
              name: 'alt',
              type: 'text',
              label: 'Alt Text',
              required: true,
            },
          ],
        },
        {
          name: 'rightAnimation',
          type: 'text',
          label: 'Right Column Animation',
          defaultValue: 'fadeInRight',
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
          name: 'containerClass',
          type: 'text',
          label: 'Container Class',
          defaultValue: 'mod_columns_three viewport container',
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
            },
          ],
        },
        {
          name: 'columns',
          type: 'array',
          label: 'Content Columns',
          admin: {
            description: 'Drag to reorder columns (max 3)',
          },
          maxRows: 3,
          fields: [
            {
              name: 'heading',
              type: 'text',
              label: 'Column Heading',
              required: true,
            },
            {
              name: 'headingColor',
              type: 'text',
              label: 'Heading Color',
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
                  label: 'Bullet Text',
                  required: true,
                },
                {
                  name: 'subBullets',
                  type: 'array',
                  label: 'Sub-Bullets',
                  fields: [
                    {
                      name: 'text',
                      type: 'text',
                      label: 'Sub-Bullet Text',
                      required: true,
                    },
                    {
                      name: 'nestedBullets',
                      type: 'array',
                      label: 'Nested Bullets',
                      fields: [
                        {
                          name: 'text',
                          type: 'text',
                          label: 'Nested Bullet Text',
                          required: true,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              name: 'animation',
              type: 'select',
              label: 'Animation',
              options: [
                { label: 'Fade In Left', value: 'fadeInLeft' },
                { label: 'Fade In Right', value: 'fadeInRight' },
                { label: 'Fade In Up', value: 'fadeInUp' },
                { label: 'Fade In', value: 'fadeIn' },
              ],
              defaultValue: 'fadeInLeft',
            },
          ],
        },
      ],
    },
    // Box Grid Section
    {
      name: 'boxGridSection',
      type: 'group',
      label: 'Box Grid Section',
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
          name: 'containerClass',
          type: 'text',
          label: 'Container Class',
          defaultValue: 'mod_box_grid viewport container option-1 default bkg-image wider',
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
        {
          name: 'mainHeading',
          type: 'text',
          label: 'Main Heading',
          defaultValue: 'This program offers',
        },
        {
          name: 'mainHeadingColor',
          type: 'text',
          label: 'Main Heading Color',
        },
        {
          name: 'boxes',
          type: 'array',
          label: 'Content Boxes',
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
              name: 'bulletPoints',
              type: 'array',
              label: 'Bullet Points',
              admin: {
                description: 'Drag to reorder bullet points',
              },
              fields: [
                {
                  name: 'text',
                  type: 'richText',
                  label: 'Bullet Text',
                  required: true,
                },
                {
                  name: 'subBullets',
                  type: 'array',
                  label: 'Sub-Bullets',
                  fields: [
                    {
                      name: 'text',
                      type: 'richText',
                      label: 'Sub-Bullet Text',
                      required: true,
                    },
                    {
                      name: 'nestedBullets',
                      type: 'array',
                      label: 'Nested Bullets (Level 3)',
                      fields: [
                        {
                          name: 'text',
                          type: 'richText',
                          label: 'Nested Bullet Text',
                          required: true,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              name: 'backgroundColor',
              type: 'text',
              label: 'Box Background Color',
            },
            {
              name: 'textColor',
              type: 'text',
              label: 'Box Text Color',
            },
            {
              name: 'animation',
              type: 'text',
              label: 'Animation Class',
              defaultValue: 'fadeInUp',
            },
          ],
        },
      ],
    },
    // Tuition Section (Column Module 2)
    {
      name: 'tuitionSection',
      type: 'group',
      label: 'Tuition Section',
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
          name: 'containerClass',
          type: 'text',
          label: 'Container Class',
          defaultValue: 'mod_column viewport container',
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Section Heading',
          defaultValue: 'Tuition',
        },
        {
          name: 'headingColor',
          type: 'text',
          label: 'Heading Color',
        },
        {
          name: 'priceText',
          type: 'text',
          label: 'Price Text',
          defaultValue: '$10,000  (or $9,000 with promo)',
        },
        {
          name: 'priceColor',
          type: 'text',
          label: 'Price Text Color',
        },
        {
          name: 'description',
          type: 'richText',
          label: 'Description',
        },
        {
          name: 'descriptionColor',
          type: 'text',
          label: 'Description Color',
        },
        {
          name: 'additionalNotes',
          type: 'array',
          label: 'Additional Notes/Paragraphs',
          admin: {
            description: 'Add multiple paragraphs or notes',
          },
          fields: [
            {
              name: 'text',
              type: 'richText',
              label: 'Note Text',
              required: true,
            },
            {
              name: 'textColor',
              type: 'text',
              label: 'Text Color',
            },
          ],
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
              defaultValue: 'APPLY HERE',
            },
            {
              name: 'url',
              type: 'text',
              label: 'Button URL',
              required: true,
            },
            {
              name: 'openInNewTab',
              type: 'checkbox',
              label: 'Open in New Tab',
              defaultValue: true,
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
            {
              name: 'hoverTextColor',
              type: 'text',
              label: 'Button Hover Text Color',
            },
            {
              name: 'className',
              type: 'text',
              label: 'Button Class Name',
              defaultValue: 'btn',
            },
          ],
        },
        {
          name: 'centerAlign',
          type: 'checkbox',
          label: 'Center Align Content',
          defaultValue: true,
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
            { label: 'Intro Section', value: 'intro' },
            { label: 'Duration & Destinations Section', value: 'duration' },
            { label: 'Two Column Section', value: 'twoColumn' },
            { label: 'Three Column Section', value: 'threeColumn' },
            { label: 'Box Grid Section', value: 'boxGrid' },
            { label: 'Tuition Section', value: 'tuition' },
          ],
        },
      ],
      defaultValue: [
        { section: 'intro' },
        { section: 'duration' },
        { section: 'twoColumn' },
        { section: 'threeColumn' },
        { section: 'boxGrid' },
        { section: 'tuition' },
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
          name: 'defaultTextColor',
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
          name: 'h3FontWeight',
          type: 'text',
          label: 'H3 Font Weight',
        },
        {
          name: 'h4FontSize',
          type: 'text',
          label: 'H4 Font Size',
        },
        {
          name: 'h4Color',
          type: 'text',
          label: 'H4 Color',
        },
        {
          name: 'h4FontWeight',
          type: 'text',
          label: 'H4 Font Weight',
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
          name: 'defaultHoverTextColor',
          type: 'text',
          label: 'Default Button Hover Text Color',
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
          name: 'slideInDuration',
          type: 'text',
          label: 'Slide In Duration',
          admin: {
            description: 'Duration for slide in animations',
          },
          defaultValue: '2s',
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
    // List Styles
    {
      name: 'listStyles',
      type: 'group',
      label: 'List Styles',
      fields: [
        {
          name: 'bulletColor',
          type: 'text',
          label: 'Bullet Point Color',
        },
        {
          name: 'bulletStyle',
          type: 'select',
          label: 'Bullet Style',
          options: [
            { label: 'Disc', value: 'disc' },
            { label: 'Circle', value: 'circle' },
            { label: 'Square', value: 'square' },
            { label: 'None', value: 'none' },
          ],
          defaultValue: 'disc',
        },
        {
          name: 'listMarginLeft',
          type: 'text',
          label: 'List Margin Left',
          admin: {
            description: 'e.g., 20px, 1.5rem',
          },
        },
        {
          name: 'listItemSpacing',
          type: 'text',
          label: 'List Item Spacing',
          admin: {
            description: 'Spacing between list items (e.g., 10px)',
          },
        },
        {
          name: 'nestedListIndent',
          type: 'text',
          label: 'Nested List Indent',
          admin: {
            description: 'Indentation for nested lists (e.g., 20px)',
          },
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
          type: 'select',
          label: 'Image Quality',
          options: [
            { label: 'Low', value: 'low' },
            { label: 'Medium', value: 'medium' },
            { label: 'High', value: 'high' },
            { label: 'Original', value: 'original' },
          ],
          defaultValue: 'high',
        },
        {
          name: 'autoFormat',
          type: 'checkbox',
          label: 'Auto Format Images',
          defaultValue: true,
          admin: {
            description: 'Automatically optimize image format (WebP, etc.)',
          },
        },
        {
          name: 'autoCompress',
          type: 'checkbox',
          label: 'Auto Compress Images',
          defaultValue: true,
        },
        {
          name: 'responsiveImages',
          type: 'checkbox',
          label: 'Enable Responsive Images',
          defaultValue: true,
          admin: {
            description: 'Generate multiple image sizes for different screens',
          },
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
          name: 'additionalCSS',
          type: 'textarea',
          label: 'Additional CSS',
          admin: {
            description: 'Add custom CSS styles for this component',
            rows: 10,
          },
        },
        {
          name: 'cssClasses',
          type: 'array',
          label: 'Additional CSS Classes',
          admin: {
            description: 'Add custom CSS class names to sections',
          },
          fields: [
            {
              name: 'section',
              type: 'select',
              label: 'Apply to Section',
              options: [
                { label: 'Intro Section', value: 'intro' },
                { label: 'Duration Section', value: 'duration' },
                { label: 'Two Column Section', value: 'twoColumn' },
                { label: 'Three Column Section', value: 'threeColumn' },
                { label: 'Box Grid Section', value: 'boxGrid' },
                { label: 'Tuition Section', value: 'tuition' },
              ],
            },
            {
              name: 'className',
              type: 'text',
              label: 'Class Name',
              required: true,
            },
          ],
        },
      ],
    },
    // Link Settings
    {
      name: 'linkSettings',
      type: 'group',
      label: 'Link Settings',
      fields: [
        {
          name: 'defaultLinkTarget',
          type: 'select',
          label: 'Default Link Target',
          options: [
            { label: 'Same Window', value: '_self' },
            { label: 'New Window', value: '_blank' },
          ],
          defaultValue: '_self',
        },
        {
          name: 'linkUnderline',
          type: 'select',
          label: 'Link Underline Style',
          options: [
            { label: 'None', value: 'none' },
            { label: 'Always', value: 'always' },
            { label: 'On Hover', value: 'hover' },
          ],
          defaultValue: 'hover',
        },
        {
          name: 'linkTransition',
          type: 'text',
          label: 'Link Transition',
          admin: {
            description: 'CSS transition for links (e.g., all 0.3s ease)',
          },
          defaultValue: 'all 0.3s ease',
        },
      ],
    },
    // Spacing Settings
    {
      name: 'spacingSettings',
      type: 'group',
      label: 'Spacing Settings',
      fields: [
        {
          name: 'introSectionSpacing',
          type: 'text',
          label: 'Intro Section Spacing',
          admin: {
            description: 'Padding/margin for intro section (e.g., 60px 0)',
          },
        },
        {
          name: 'durationSectionSpacing',
          type: 'text',
          label: 'Duration Section Spacing',
        },
        {
          name: 'twoColumnSectionSpacing',
          type: 'text',
          label: 'Two Column Section Spacing',
        },
        {
          name: 'threeColumnSectionSpacing',
          type: 'text',
          label: 'Three Column Section Spacing',
        },
        {
          name: 'boxGridSectionSpacing',
          type: 'text',
          label: 'Box Grid Section Spacing',
        },
        {
          name: 'tuitionSectionSpacing',
          type: 'text',
          label: 'Tuition Section Spacing',
        },
        {
          name: 'elementSpacing',
          type: 'text',
          label: 'Element Spacing',
          admin: {
            description: 'Spacing between elements within sections (e.g., 20px)',
          },
        },
      ],
    },
    // Border & Shadow Settings
    {
      name: 'borderShadowSettings',
      type: 'group',
      label: 'Border & Shadow Settings',
      fields: [
        {
          name: 'boxBorderRadius',
          type: 'text',
          label: 'Box Border Radius',
          admin: {
            description: 'Border radius for boxes (e.g., 8px)',
          },
        },
        {
          name: 'boxShadow',
          type: 'text',
          label: 'Box Shadow',
          admin: {
            description: 'CSS box-shadow value',
          },
        },
        {
          name: 'boxHoverShadow',
          type: 'text',
          label: 'Box Hover Shadow',
        },
        {
          name: 'imageBorderRadius',
          type: 'text',
          label: 'Image Border Radius',
        },
        {
          name: 'imageShadow',
          type: 'text',
          label: 'Image Shadow',
        },
        {
          name: 'sectionBorder',
          type: 'text',
          label: 'Section Border',
          admin: {
            description: 'Border for sections (e.g., 1px solid #ccc)',
          },
        },
      ],
    },
    // Column Width Settings
    {
      name: 'columnWidthSettings',
      type: 'group',
      label: 'Column Width Settings',
      fields: [
        {
          name: 'twoColumnLeftWidth',
          type: 'text',
          label: 'Two Column Left Width',
          admin: {
            description: 'Width for left column (e.g., 50%, 60%)',
          },
          defaultValue: '50%',
        },
        {
          name: 'twoColumnRightWidth',
          type: 'text',
          label: 'Two Column Right Width',
          defaultValue: '50%',
        },
        {
          name: 'threeColumnWidth',
          type: 'text',
          label: 'Three Column Width (Each)',
          admin: {
            description: 'Width for each of the three columns',
          },
          defaultValue: '33.33%',
        },
        {
          name: 'columnGap',
          type: 'text',
          label: 'Column Gap',
          admin: {
            description: 'Space between columns (e.g., 20px, 2rem)',
          },
          defaultValue: '20px',
        },
      ],
    },
    // Header/Title Settings
    {
      name: 'headerSettings',
      type: 'group',
      label: 'Header/Title Settings',
      fields: [
        {
          name: 'headingTextTransform',
          type: 'select',
          label: 'Heading Text Transform',
          options: [
            { label: 'None', value: 'none' },
            { label: 'Uppercase', value: 'uppercase' },
            { label: 'Lowercase', value: 'lowercase' },
            { label: 'Capitalize', value: 'capitalize' },
          ],
          defaultValue: 'none',
        },
        {
          name: 'headingLetterSpacing',
          type: 'text',
          label: 'Heading Letter Spacing',
          admin: {
            description: 'e.g., 1px, 0.05em',
          },
        },
        {
          name: 'headingMarginBottom',
          type: 'text',
          label: 'Heading Margin Bottom',
          admin: {
            description: 'Space below headings (e.g., 20px)',
          },
        },
        {
          name: 'subheadingFontSize',
          type: 'text',
          label: 'Subheading Font Size',
        },
        {
          name: 'subheadingColor',
          type: 'text',
          label: 'Subheading Color',
        },
      ],
    },
    // Hover Effects
    {
      name: 'hoverEffects',
      type: 'group',
      label: 'Hover Effects',
      fields: [
        {
          name: 'enableBoxHover',
          type: 'checkbox',
          label: 'Enable Box Hover Effects',
          defaultValue: true,
        },
        {
          name: 'boxHoverTransform',
          type: 'text',
          label: 'Box Hover Transform',
          admin: {
            description: 'CSS transform on hover (e.g., translateY(-5px))',
          },
        },
        {
          name: 'boxHoverTransition',
          type: 'text',
          label: 'Box Hover Transition',
          defaultValue: 'all 0.3s ease',
        },
        {
          name: 'imageHoverEffect',
          type: 'select',
          label: 'Image Hover Effect',
          options: [
            { label: 'None', value: 'none' },
            { label: 'Zoom In', value: 'zoom-in' },
            { label: 'Zoom Out', value: 'zoom-out' },
            { label: 'Opacity', value: 'opacity' },
          ],
          defaultValue: 'none',
        },
        {
          name: 'imageHoverOpacity',
          type: 'text',
          label: 'Image Hover Opacity',
          admin: {
            description: 'Opacity value on hover (e.g., 0.8)',
          },
        },
      ],
    },
    // Grid Settings
    {
      name: 'gridSettings',
      type: 'group',
      label: 'Grid Settings',
      fields: [
        {
          name: 'boxGridColumns',
          type: 'number',
          label: 'Box Grid Columns (Desktop)',
          defaultValue: 3,
          admin: {
            description: 'Number of columns in box grid on desktop',
          },
        },
        {
          name: 'boxGridColumnsTablet',
          type: 'number',
          label: 'Box Grid Columns (Tablet)',
          defaultValue: 2,
        },
        {
          name: 'boxGridColumnsMobile',
          type: 'number',
          label: 'Box Grid Columns (Mobile)',
          defaultValue: 1,
        },
        {
          name: 'boxGridGap',
          type: 'text',
          label: 'Box Grid Gap',
          admin: {
            description: 'Space between grid items (e.g., 20px)',
          },
          defaultValue: '20px',
        },
      ],
    },
    // Content Alignment
    {
      name: 'contentAlignment',
      type: 'group',
      label: 'Content Alignment',
      fields: [
        {
          name: 'introContentAlign',
          type: 'select',
          label: 'Intro Content Alignment',
          options: [
            { label: 'Left', value: 'left' },
            { label: 'Center', value: 'center' },
            { label: 'Right', value: 'right' },
          ],
          defaultValue: 'center',
        },
        {
          name: 'durationContentAlign',
          type: 'select',
          label: 'Duration Content Alignment',
          options: [
            { label: 'Left', value: 'left' },
            { label: 'Center', value: 'center' },
            { label: 'Right', value: 'right' },
          ],
          defaultValue: 'center',
        },
        {
          name: 'twoColumnTextAlign',
          type: 'select',
          label: 'Two Column Text Alignment',
          options: [
            { label: 'Left', value: 'left' },
            { label: 'Center', value: 'center' },
            { label: 'Right', value: 'right' },
            { label: 'Justify', value: 'justify' },
          ],
          defaultValue: 'left',
        },
        {
          name: 'threeColumnTextAlign',
          type: 'select',
          label: 'Three Column Text Alignment',
          options: [
            { label: 'Left', value: 'left' },
            { label: 'Center', value: 'center' },
            { label: 'Right', value: 'right' },
          ],
          defaultValue: 'left',
        },
      ],
    },
    // Background Settings
    {
      name: 'backgroundSettings',
      type: 'group',
      label: 'Background Settings',
      fields: [
        {
          name: 'backgroundImageSize',
          type: 'select',
          label: 'Background Image Size',
          options: [
            { label: 'Cover', value: 'cover' },
            { label: 'Contain', value: 'contain' },
            { label: 'Auto', value: 'auto' },
          ],
          defaultValue: 'cover',
        },
        {
          name: 'backgroundImagePosition',
          type: 'select',
          label: 'Background Image Position',
          options: [
            { label: 'Center', value: 'center' },
            { label: 'Top', value: 'top' },
            { label: 'Bottom', value: 'bottom' },
            { label: 'Left', value: 'left' },
            { label: 'Right', value: 'right' },
          ],
          defaultValue: 'center',
        },
        {
          name: 'backgroundImageRepeat',
          type: 'select',
          label: 'Background Image Repeat',
          options: [
            { label: 'No Repeat', value: 'no-repeat' },
            { label: 'Repeat', value: 'repeat' },
            { label: 'Repeat X', value: 'repeat-x' },
            { label: 'Repeat Y', value: 'repeat-y' },
          ],
          defaultValue: 'no-repeat',
        },
        {
          name: 'backgroundOverlay',
          type: 'checkbox',
          label: 'Enable Background Overlay',
          defaultValue: false,
        },
        {
          name: 'backgroundOverlayColor',
          type: 'text',
          label: 'Background Overlay Color',
          admin: {
            description: 'RGBA color value (e.g., rgba(0,0,0,0.5))',
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
