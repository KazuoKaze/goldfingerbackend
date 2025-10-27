import { CollectionConfig } from 'payload'

export const ProgramDetailsComponent: CollectionConfig = {
  slug: 'program-details-component',
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
      defaultValue: 'Program Details Component',
    },
    // Intro Module Section
    {
      name: 'introModule',
      type: 'group',
      label: 'Intro Module Section',
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
          defaultValue: 'mod_intro container viewport option-1',
        },
        {
          name: 'animationClass',
          type: 'text',
          label: 'Animation Class',
          defaultValue: 'wow fadeInUp',
        },
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
          label: 'Logo',
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
          type: 'text',
          label: 'Main Heading (H1)',
          required: true,
          defaultValue: 'Advanced Injector Program Details',
        },
        {
          name: 'headingColor',
          type: 'text',
          label: 'Heading Color',
        },
        {
          name: 'headingFontSize',
          type: 'text',
          label: 'Heading Font Size',
        },
      ],
    },
    // Column Module Section 1 (Image + Subheading)
    {
      name: 'columnSection1',
      type: 'group',
      label: 'Column Section 1 (Image + Subheading)',
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
              label: 'Desktop Image',
            },
            {
              name: 'alt',
              type: 'text',
              label: 'Alt Text',
              required: true,
              defaultValue: 'team photo',
            },
          ],
        },
        {
          name: 'subheading',
          type: 'richText',
          label: 'Subheading (H3)',
          required: true,
        },
        {
          name: 'subheadingColor',
          type: 'text',
          label: 'Subheading Color',
        },
      ],
    },
    // Divider Module Section
    {
      name: 'dividerModule',
      type: 'group',
      label: 'Divider Module Section',
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
          name: 'containerClass',
          type: 'text',
          label: 'Container Class',
          defaultValue: 'mod_divider container',
        },
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
          label: 'Divider Logo',
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
        {
          name: 'logoAlt',
          type: 'text',
          label: 'Logo Alt Text',
          defaultValue: 'Logo media',
        },
      ],
    },
    // Column Module Section 2 (Compare Programs Table)
    {
      name: 'columnSection2',
      type: 'group',
      label: 'Column Section 2 (Compare Programs)',
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
          name: 'heading',
          type: 'text',
          label: 'Heading (H1)',
          required: true,
          defaultValue: 'Compare Training Programs',
        },
        {
          name: 'headingColor',
          type: 'text',
          label: 'Heading Color',
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
          name: 'table',
          type: 'group',
          label: 'Comparison Table',
          fields: [
            {
              name: 'borderColor',
              type: 'text',
              label: 'Table Border Color',
              defaultValue: '#000000',
            },
            {
              name: 'headerBackgroundColor',
              type: 'text',
              label: 'Header Background Color',
            },
            {
              name: 'headerTextColor',
              type: 'text',
              label: 'Header Text Color',
            },
            {
              name: 'rowBackgroundColor',
              type: 'text',
              label: 'Row Background Color',
            },
            {
              name: 'rowTextColor',
              type: 'text',
              label: 'Row Text Color',
            },
            {
              name: 'alternateRowColor',
              type: 'text',
              label: 'Alternate Row Background Color',
            },
            {
              name: 'headers',
              type: 'array',
              label: 'Table Headers',
              admin: {
                description: 'Drag to reorder headers',
              },
              fields: [
                {
                  name: 'label',
                  type: 'text',
                  label: 'Header Label',
                  required: true,
                },
                {
                  name: 'width',
                  type: 'text',
                  label: 'Column Width',
                  admin: {
                    description: 'CSS width value (e.g., 25%, 200px)',
                  },
                },
              ],
              defaultValue: [
                { label: 'PROGRAM' },
                { label: 'DURATION' },
                { label: 'TUITION' },
                { label: "WHAT'S INCLUDED" },
              ],
            },
            {
              name: 'rows',
              type: 'array',
              label: 'Table Rows',
              admin: {
                description: 'Drag to reorder rows',
              },
              fields: [
                {
                  name: 'programName',
                  type: 'text',
                  label: 'Program Name',
                  required: true,
                },
                {
                  name: 'duration',
                  type: 'text',
                  label: 'Duration',
                  required: true,
                },
                {
                  name: 'tuition',
                  type: 'text',
                  label: 'Tuition',
                  required: true,
                },
                {
                  name: 'included',
                  type: 'richText',
                  label: "What's Included",
                  required: true,
                },
              ],
            },
          ],
        },
      ],
    },
    // Column Module Section 3 (Promo Note)
    {
      name: 'columnSection3',
      type: 'group',
      label: 'Column Section 3 (Promo Note)',
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
          name: 'content',
          type: 'richText',
          label: 'Promo Content (H4)',
          required: true,
        },
        {
          name: 'contentColor',
          type: 'text',
          label: 'Content Color',
        },
        {
          name: 'fontSize',
          type: 'text',
          label: 'Font Size',
        },
        {
          name: 'fontWeight',
          type: 'text',
          label: 'Font Weight',
        },
      ],
    },
    // Two Column Section 1 (Program Highlights)
    {
      name: 'twoColumnSection1',
      type: 'group',
      label: 'Two Column Section 1 (Program Highlights)',
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
          defaultValue: 'mod_columns_two viewport container dark',
        },
        {
          name: 'columnLayout',
          type: 'select',
          label: 'Column Layout',
          options: [
            { label: 'Content Left, Image Right', value: 'content-left' },
            { label: 'Image Left, Content Right', value: 'image-left' },
          ],
          defaultValue: 'content-left',
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
          defaultValue: 'center',
        },
        {
          name: 'leftColumn',
          type: 'group',
          label: 'Left Column (Content)',
          fields: [
            {
              name: 'animationClass',
              type: 'text',
              label: 'Animation Class',
              defaultValue: 'wow fadeInLeft',
            },
            {
              name: 'heading',
              type: 'text',
              label: 'Heading (H2)',
              required: true,
              defaultValue: 'Program Highlights',
            },
            {
              name: 'headingColor',
              type: 'text',
              label: 'Heading Color',
            },
            {
              name: 'highlights',
              type: 'array',
              label: 'Highlight Items',
              admin: {
                description: 'Drag to reorder highlights',
              },
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  label: 'Highlight Title',
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
                  label: 'Description',
                  required: true,
                },
                {
                  name: 'descriptionColor',
                  type: 'text',
                  label: 'Description Color',
                },
              ],
            },
            {
              name: 'listStyle',
              type: 'select',
              label: 'List Style',
              options: [
                { label: 'Disc', value: 'disc' },
                { label: 'Circle', value: 'circle' },
                { label: 'Square', value: 'square' },
                { label: 'None', value: 'none' },
              ],
              defaultValue: 'disc',
            },
          ],
        },
        {
          name: 'rightColumn',
          type: 'group',
          label: 'Right Column (Image)',
          fields: [
            {
              name: 'animationClass',
              type: 'text',
              label: 'Animation Class',
              defaultValue: 'wow fadeInRight',
            },
            {
              name: 'image',
              type: 'group',
              label: 'Column Image',
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
                  defaultValue: 'Woman touching her neck',
                },
              ],
            },
          ],
        },
      ],
    },
    // Two Column Section 2 (Tuition & Enrollment)
    {
      name: 'twoColumnSection2',
      type: 'group',
      label: 'Two Column Section 2 (Tuition & Enrollment)',
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
          name: 'columnLayout',
          type: 'select',
          label: 'Column Layout',
          options: [
            { label: 'Content Left, Image Right', value: 'content-left' },
            { label: 'Image Left, Content Right', value: 'image-left' },
          ],
          defaultValue: 'image-left',
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
          defaultValue: 'center',
        },
        {
          name: 'leftColumn',
          type: 'group',
          label: 'Left Column (Image)',
          fields: [
            {
              name: 'animationClass',
              type: 'text',
              label: 'Animation Class',
              defaultValue: 'wow fadeInLeft',
            },
            {
              name: 'image',
              type: 'group',
              label: 'Column Image',
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
                  defaultValue: 'woman looking in hand mirror pointing to her face',
                },
              ],
            },
          ],
        },
        {
          name: 'rightColumn',
          type: 'group',
          label: 'Right Column (Content)',
          fields: [
            {
              name: 'animationClass',
              type: 'text',
              label: 'Animation Class',
              defaultValue: 'wow fadeInRight',
            },
            {
              name: 'heading',
              type: 'text',
              label: 'Main Heading (H1)',
              required: true,
              defaultValue: 'Tuition & Enrollment',
            },
            {
              name: 'headingColor',
              type: 'text',
              label: 'Heading Color',
            },
            {
              name: 'programs',
              type: 'array',
              label: 'Program Details',
              admin: {
                description: 'Drag to reorder programs',
              },
              fields: [
                {
                  name: 'programTitle',
                  type: 'text',
                  label: 'Program Title (H4)',
                  required: true,
                },
                {
                  name: 'programTitleColor',
                  type: 'text',
                  label: 'Program Title Color',
                },
                {
                  name: 'details',
                  type: 'array',
                  label: 'Program Details (Bullet Points)',
                  fields: [
                    {
                      name: 'text',
                      type: 'richText',
                      label: 'Detail Text',
                      required: true,
                    },
                    {
                      name: 'textColor',
                      type: 'text',
                      label: 'Text Color',
                    },
                  ],
                },
              ],
            },
            {
              name: 'additionalInfo',
              type: 'richText',
              label: 'Additional Information',
            },
            {
              name: 'additionalInfoColor',
              type: 'text',
              label: 'Additional Info Color',
            },
          ],
        },
      ],
    },
    // Column Module Section 4 (Apply Now CTA)
    {
      name: 'columnSection4',
      type: 'group',
      label: 'Column Section 4 (Apply Now CTA)',
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
          name: 'headings',
          type: 'array',
          label: 'Headings',
          admin: {
            description: 'Multiple headings for emphasis',
          },
          fields: [
            {
              name: 'text',
              type: 'richText',
              label: 'Heading Text (H1)',
              required: true,
            },
            {
              name: 'textColor',
              type: 'text',
              label: 'Heading Color',
            },
            {
              name: 'fontSize',
              type: 'text',
              label: 'Font Size',
            },
            {
              name: 'fontWeight',
              type: 'text',
              label: 'Font Weight',
            },
            {
              name: 'isItalic',
              type: 'checkbox',
              label: 'Italic Style',
              defaultValue: true,
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
              required: true,
              defaultValue: 'APPLY NOW',
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
              name: 'borderRadius',
              type: 'text',
              label: 'Border Radius',
            },
            {
              name: 'padding',
              type: 'text',
              label: 'Button Padding',
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
            { label: 'Intro Module', value: 'introModule' },
            { label: 'Column Section 1 (Image + Subheading)', value: 'columnSection1' },
            { label: 'Divider Module', value: 'dividerModule' },
            { label: 'Column Section 2 (Compare Programs)', value: 'columnSection2' },
            { label: 'Column Section 3 (Promo Note)', value: 'columnSection3' },
            { label: 'Two Column Section 1 (Program Highlights)', value: 'twoColumnSection1' },
            { label: 'Two Column Section 2 (Tuition & Enrollment)', value: 'twoColumnSection2' },
            { label: 'Column Section 4 (Apply Now CTA)', value: 'columnSection4' },
          ],
        },
      ],
      defaultValue: [
        { section: 'introModule' },
        { section: 'columnSection1' },
        { section: 'dividerModule' },
        { section: 'columnSection2' },
        { section: 'columnSection3' },
        { section: 'twoColumnSection1' },
        { section: 'twoColumnSection2' },
        { section: 'columnSection4' },
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
          name: 'linkHoverColor',
          type: 'text',
          label: 'Link Hover Color',
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
          name: 'h1LineHeight',
          type: 'text',
          label: 'H1 Line Height',
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
        {
          name: 'bodyFontWeight',
          type: 'text',
          label: 'Body Font Weight',
        },
      ],
    },
    // Table Styles
    {
      name: 'tableStyles',
      type: 'group',
      label: 'Table Styles',
      fields: [
        {
          name: 'borderWidth',
          type: 'text',
          label: 'Table Border Width',
          admin: {
            description: 'e.g., 1px, 2px',
          },
          defaultValue: '1px',
        },
        {
          name: 'borderColor',
          type: 'text',
          label: 'Table Border Color',
          defaultValue: '#000000',
        },
        {
          name: 'borderStyle',
          type: 'select',
          label: 'Border Style',
          options: [
            { label: 'Solid', value: 'solid' },
            { label: 'Dashed', value: 'dashed' },
            { label: 'Dotted', value: 'dotted' },
            { label: 'Double', value: 'double' },
          ],
          defaultValue: 'solid',
        },
        {
          name: 'borderCollapse',
          type: 'select',
          label: 'Border Collapse',
          options: [
            { label: 'Collapse', value: 'collapse' },
            { label: 'Separate', value: 'separate' },
          ],
          defaultValue: 'collapse',
        },
        {
          name: 'cellPadding',
          type: 'text',
          label: 'Cell Padding',
          admin: {
            description: 'e.g., 10px, 0.5rem',
          },
          defaultValue: '10px',
        },
        {
          name: 'headerFontWeight',
          type: 'text',
          label: 'Header Font Weight',
          defaultValue: 'bold',
        },
        {
          name: 'headerFontSize',
          type: 'text',
          label: 'Header Font Size',
        },
        {
          name: 'headerTextAlign',
          type: 'select',
          label: 'Header Text Align',
          options: [
            { label: 'Left', value: 'left' },
            { label: 'Center', value: 'center' },
            { label: 'Right', value: 'right' },
          ],
          defaultValue: 'left',
        },
        {
          name: 'cellTextAlign',
          type: 'select',
          label: 'Cell Text Align',
          options: [
            { label: 'Left', value: 'left' },
            { label: 'Center', value: 'center' },
            { label: 'Right', value: 'right' },
          ],
          defaultValue: 'left',
        },
        {
          name: 'rowHoverColor',
          type: 'text',
          label: 'Row Hover Background Color',
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
            description: 'e.g., 4px, 0.5rem, 50px',
          },
        },
        {
          name: 'borderWidth',
          type: 'text',
          label: 'Button Border Width',
        },
        {
          name: 'borderColor',
          type: 'text',
          label: 'Button Border Color',
        },
        {
          name: 'padding',
          type: 'text',
          label: 'Button Padding',
          admin: {
            description: 'e.g., 12px 24px, 0.75rem 1.5rem',
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
          name: 'textTransform',
          type: 'select',
          label: 'Button Text Transform',
          options: [
            { label: 'None', value: 'none' },
            { label: 'Uppercase', value: 'uppercase' },
            { label: 'Lowercase', value: 'lowercase' },
            { label: 'Capitalize', value: 'capitalize' },
          ],
          defaultValue: 'uppercase',
        },
        {
          name: 'letterSpacing',
          type: 'text',
          label: 'Button Letter Spacing',
        },
        {
          name: 'transition',
          type: 'text',
          label: 'Button Transition',
          defaultValue: 'all 0.3s ease',
        },
        {
          name: 'boxShadow',
          type: 'text',
          label: 'Button Box Shadow',
          admin: {
            description: 'e.g., 0 2px 4px rgba(0,0,0,0.1)',
          },
        },
        {
          name: 'hoverBoxShadow',
          type: 'text',
          label: 'Button Hover Box Shadow',
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
          name: 'bulletStyle',
          type: 'select',
          label: 'Bullet Point Style',
          options: [
            { label: 'Disc', value: 'disc' },
            { label: 'Circle', value: 'circle' },
            { label: 'Square', value: 'square' },
            { label: 'None', value: 'none' },
          ],
          defaultValue: 'disc',
        },
        {
          name: 'bulletColor',
          type: 'text',
          label: 'Bullet Point Color',
        },
        {
          name: 'listItemSpacing',
          type: 'text',
          label: 'List Item Spacing',
          admin: {
            description: 'Spacing between list items (e.g., 8px, 0.5rem)',
          },
        },
        {
          name: 'listIndent',
          type: 'text',
          label: 'List Indent',
          admin: {
            description: 'Indentation for list items (e.g., 20px, 1.5rem)',
          },
        },
        {
          name: 'nestedListIndent',
          type: 'text',
          label: 'Nested List Indent',
          admin: {
            description: 'Additional indent for nested lists',
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
          defaultValue: '1s',
        },
        {
          name: 'slideInDuration',
          type: 'text',
          label: 'Slide In Duration',
          defaultValue: '1s',
        },
        {
          name: 'animationEasing',
          type: 'select',
          label: 'Animation Easing',
          options: [
            { label: 'Ease', value: 'ease' },
            { label: 'Ease In', value: 'ease-in' },
            { label: 'Ease Out', value: 'ease-out' },
            { label: 'Ease In Out', value: 'ease-in-out' },
            { label: 'Linear', value: 'linear' },
          ],
          defaultValue: 'ease-in-out',
        },
        {
          name: 'animationDelay',
          type: 'text',
          label: 'Default Animation Delay',
          defaultValue: '0s',
        },
        {
          name: 'customAnimationCSS',
          type: 'textarea',
          label: 'Custom Animation CSS',
          admin: {
            description: 'Add custom CSS animations (optional)',
          },
        },
      ],
    },
    // Responsive Settings
    {
      name: 'responsiveSettings',
      type: 'group',
      label: 'Responsive Settings',
      fields: [
        {
          name: 'mobileBreakpoint',
          type: 'text',
          label: 'Mobile Breakpoint',
          defaultValue: '768px',
        },
        {
          name: 'tabletBreakpoint',
          type: 'text',
          label: 'Tablet Breakpoint',
          defaultValue: '1024px',
        },
        {
          name: 'desktopBreakpoint',
          type: 'text',
          label: 'Desktop Breakpoint',
          defaultValue: '1400px',
        },
        {
          name: 'mobileFontSizeAdjustment',
          type: 'text',
          label: 'Mobile Font Size Adjustment',
          defaultValue: '90%',
        },
        {
          name: 'tabletFontSizeAdjustment',
          type: 'text',
          label: 'Tablet Font Size Adjustment',
          defaultValue: '95%',
        },
        {
          name: 'mobileSpacingAdjustment',
          type: 'text',
          label: 'Mobile Spacing Adjustment',
          defaultValue: '80%',
        },
        {
          name: 'tabletSpacingAdjustment',
          type: 'text',
          label: 'Tablet Spacing Adjustment',
          defaultValue: '90%',
        },
        {
          name: 'mobileContainerPadding',
          type: 'text',
          label: 'Mobile Container Padding',
        },
        {
          name: 'tabletContainerPadding',
          type: 'text',
          label: 'Tablet Container Padding',
        },
        {
          name: 'mobileTableDisplay',
          type: 'select',
          label: 'Mobile Table Display',
          options: [
            { label: 'Scroll Horizontally', value: 'scroll' },
            { label: 'Stack Vertically', value: 'stack' },
            { label: 'Responsive Cards', value: 'cards' },
          ],
          defaultValue: 'scroll',
          admin: {
            description: 'How tables should display on mobile devices',
          },
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
          name: 'ogTitle',
          type: 'text',
          label: 'Open Graph Title',
        },
        {
          name: 'ogDescription',
          type: 'textarea',
          label: 'Open Graph Description',
        },
        {
          name: 'ogImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Open Graph Image',
        },
        {
          name: 'twitterCard',
          type: 'select',
          label: 'Twitter Card Type',
          options: [
            { label: 'Summary', value: 'summary' },
            { label: 'Summary Large Image', value: 'summary_large_image' },
          ],
          defaultValue: 'summary_large_image',
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
            description: 'JSON-LD structured data for rich snippets',
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
          name: 'skipToContentText',
          type: 'text',
          label: 'Skip to Content Text',
          defaultValue: 'Skip to main content',
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
          defaultValue: '#007bff',
        },
        {
          name: 'focusVisibleWidth',
          type: 'text',
          label: 'Focus Visible Width',
          defaultValue: '2px',
        },
        {
          name: 'focusVisibleStyle',
          type: 'select',
          label: 'Focus Visible Style',
          options: [
            { label: 'Solid', value: 'solid' },
            { label: 'Dashed', value: 'dashed' },
            { label: 'Dotted', value: 'dotted' },
          ],
          defaultValue: 'solid',
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
        {
          name: 'reducedMotion',
          type: 'checkbox',
          label: 'Support Reduced Motion Preference',
          defaultValue: true,
        },
        {
          name: 'tableAccessibility',
          type: 'group',
          label: 'Table Accessibility',
          fields: [
            {
              name: 'includeTableCaption',
              type: 'checkbox',
              label: 'Include Table Caption',
              defaultValue: true,
            },
            {
              name: 'tableCaption',
              type: 'text',
              label: 'Table Caption',
              defaultValue: 'Training Program Comparison',
            },
            {
              name: 'tableSummary',
              type: 'textarea',
              label: 'Table Summary (for screen readers)',
            },
          ],
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
            description: 'Add custom CSS that applies to the entire component',
            rows: 10,
          },
        },
        {
          name: 'mobileCSS',
          type: 'textarea',
          label: 'Mobile-Only CSS',
          admin: {
            rows: 5,
          },
        },
        {
          name: 'tabletCSS',
          type: 'textarea',
          label: 'Tablet-Only CSS',
          admin: {
            rows: 5,
          },
        },
        {
          name: 'desktopCSS',
          type: 'textarea',
          label: 'Desktop-Only CSS',
          admin: {
            rows: 5,
          },
        },
        {
          name: 'tableCSS',
          type: 'textarea',
          label: 'Table-Specific CSS',
          admin: {
            description: 'Custom CSS for table styling',
            rows: 5,
          },
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
        },
        {
          name: 'imageLoadingPriority',
          type: 'select',
          label: 'Image Loading Priority',
          options: [
            { label: 'Auto', value: 'auto' },
            { label: 'Lazy', value: 'lazy' },
            { label: 'Eager', value: 'eager' },
          ],
          defaultValue: 'lazy',
        },
        {
          name: 'preloadCriticalAssets',
          type: 'checkbox',
          label: 'Preload Critical Assets',
          defaultValue: false,
        },
        {
          name: 'enableImageOptimization',
          type: 'checkbox',
          label: 'Enable Image Optimization',
          defaultValue: true,
        },
        {
          name: 'enableCSSMinification',
          type: 'checkbox',
          label: 'Enable CSS Minification',
          defaultValue: true,
        },
      ],
    },
    // Divider Settings
    {
      name: 'dividerSettings',
      type: 'group',
      label: 'Divider Settings',
      fields: [
        {
          name: 'dividerHeight',
          type: 'text',
          label: 'Divider Height',
          admin: {
            description: 'Height of divider sections (e.g., 60px, 4rem)',
          },
        },
        {
          name: 'dividerMargin',
          type: 'text',
          label: 'Divider Margin',
          admin: {
            description: 'Top and bottom margin (e.g., 40px 0)',
          },
        },
        {
          name: 'showDividerLine',
          type: 'checkbox',
          label: 'Show Horizontal Line',
          defaultValue: false,
        },
        {
          name: 'dividerLineColor',
          type: 'text',
          label: 'Divider Line Color',
        },
        {
          name: 'dividerLineWidth',
          type: 'text',
          label: 'Divider Line Width',
          admin: {
            description: 'Thickness of the line (e.g., 1px, 2px)',
          },
        },
        {
          name: 'dividerLineStyle',
          type: 'select',
          label: 'Divider Line Style',
          options: [
            { label: 'Solid', value: 'solid' },
            { label: 'Dashed', value: 'dashed' },
            { label: 'Dotted', value: 'dotted' },
          ],
          defaultValue: 'solid',
        },
      ],
    },
    // Active Status
    {
      name: 'isActive',
      type: 'checkbox',
      label: 'Active',
      defaultValue: true,
      admin: {
        description: 'Toggle to enable/disable this component',
      },
    },
    // Version Control
    {
      name: 'version',
      type: 'text',
      label: 'Component Version',
      admin: {
        description: 'Version number for tracking changes (e.g., 1.0.0)',
      },
      defaultValue: '1.0.0',
    },
    {
      name: 'notes',
      type: 'textarea',
      label: 'Version Notes',
      admin: {
        description: 'Notes about this version or recent changes',
        rows: 3,
      },
    },
  ],
  timestamps: true,
}
