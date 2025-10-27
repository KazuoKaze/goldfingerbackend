import { CollectionConfig } from 'payload'

export const TrainingPageComponent: CollectionConfig = {
  slug: 'training-page-component',
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
      defaultValue: 'Training Page Component',
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
          admin: {
            description: 'CSS classes for the container',
          },
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
          defaultValue: 'The Gold Standard Aesthetic Training Program',
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
          admin: {
            description: 'CSS font-size value (e.g., 48px, 3rem)',
          },
        },
        {
          name: 'subheading',
          type: 'richText',
          label: 'Subheading',
        },
        {
          name: 'subheadingColor',
          type: 'text',
          label: 'Subheading Color',
        },
        {
          name: 'content',
          type: 'richText',
          label: 'Content',
          required: true,
        },
        {
          name: 'contentColor',
          type: 'text',
          label: 'Content Text Color',
        },
      ],
    },
    // Box Grid Module Section
    {
      name: 'boxGridModule',
      type: 'group',
      label: 'Box Grid Module Section',
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
              defaultValue: 'Background Image',
            },
          ],
        },
        {
          name: 'containerClass',
          type: 'text',
          label: 'Container Class',
          defaultValue:
            'mod_box_grid viewport five-boxes container option-4 default bkg-image wider',
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Section Heading',
          required: true,
          defaultValue: 'Key Program Highlights',
        },
        {
          name: 'headingColor',
          type: 'text',
          label: 'Heading Color',
        },
        {
          name: 'headingAlignment',
          type: 'select',
          label: 'Heading Alignment',
          options: [
            { label: 'Left', value: 'left' },
            { label: 'Center', value: 'center' },
            { label: 'Right', value: 'right' },
          ],
          defaultValue: 'left',
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
              name: 'title',
              type: 'text',
              label: 'Box Title (H2)',
              required: true,
            },
            {
              name: 'titleColor',
              type: 'text',
              label: 'Title Color',
            },
            {
              name: 'content',
              type: 'richText',
              label: 'Box Content',
              required: true,
            },
            {
              name: 'contentColor',
              type: 'text',
              label: 'Content Color',
            },
            {
              name: 'backgroundColor',
              type: 'text',
              label: 'Box Background Color',
            },
            {
              name: 'borderColor',
              type: 'text',
              label: 'Box Border Color',
            },
            {
              name: 'animationClass',
              type: 'text',
              label: 'Animation Class',
              defaultValue: 'wow fadeIn',
            },
            {
              name: 'animationDelay',
              type: 'text',
              label: 'Animation Delay',
              admin: {
                description: 'e.g., 0.2s, 0.4s',
              },
            },
          ],
        },
        {
          name: 'boxesPerRow',
          type: 'select',
          label: 'Boxes Per Row',
          options: [
            { label: '2 Boxes', value: '2' },
            { label: '3 Boxes', value: '3' },
            { label: '4 Boxes', value: '4' },
            { label: '5 Boxes', value: '5' },
          ],
          defaultValue: '5',
        },
        {
          name: 'boxSpacing',
          type: 'text',
          label: 'Box Spacing',
          admin: {
            description: 'Spacing between boxes (e.g., 20px, 2rem)',
          },
        },
      ],
    },
    // Two Column Module Section 1 (Limited Spots)
    {
      name: 'twoColumnSection1',
      type: 'group',
      label: 'Two Column Section 1 (Limited Spots)',
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
          label: 'Left Column',
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
              label: 'Heading',
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
              name: 'contentColor',
              type: 'text',
              label: 'Content Color',
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
                  defaultValue: 'APPLY NOW',
                },
                {
                  name: 'url',
                  type: 'text',
                  label: 'Button URL',
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
              ],
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
                },
              ],
            },
          ],
        },
        {
          name: 'rightColumn',
          type: 'group',
          label: 'Right Column',
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
              label: 'Heading',
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
              name: 'contentColor',
              type: 'text',
              label: 'Content Color',
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
                  defaultValue: false,
                },
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
              ],
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
                },
              ],
            },
          ],
        },
      ],
    },
    // Two Column Module Section 2 (Pioneering)
    {
      name: 'twoColumnSection2',
      type: 'group',
      label: 'Two Column Section 2 (Pioneering)',
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
          defaultValue: 'top',
        },
        {
          name: 'leftColumn',
          type: 'group',
          label: 'Left Column',
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
              label: 'Heading',
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
              name: 'contentColor',
              type: 'text',
              label: 'Content Color',
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
                },
              ],
            },
          ],
        },
        {
          name: 'rightColumn',
          type: 'group',
          label: 'Right Column',
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
              label: 'Heading',
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
              name: 'contentColor',
              type: 'text',
              label: 'Content Color',
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
                },
              ],
            },
          ],
        },
      ],
    },
    // Single Column Module Section (Why Train)
    {
      name: 'singleColumnSection',
      type: 'group',
      label: 'Single Column Section (Why Train)',
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
        {
          name: 'content',
          type: 'richText',
          label: 'Content',
          required: true,
        },
        {
          name: 'contentColor',
          type: 'text',
          label: 'Content Color',
        },
        {
          name: 'quote',
          type: 'group',
          label: 'Quote Section',
          fields: [
            {
              name: 'show',
              type: 'checkbox',
              label: 'Show Quote',
              defaultValue: true,
            },
            {
              name: 'text',
              type: 'richText',
              label: 'Quote Text',
            },
            {
              name: 'textColor',
              type: 'text',
              label: 'Quote Text Color',
            },
            {
              name: 'fontSize',
              type: 'text',
              label: 'Quote Font Size',
            },
            {
              name: 'fontWeight',
              type: 'text',
              label: 'Quote Font Weight',
            },
            {
              name: 'attribution',
              type: 'richText',
              label: 'Quote Attribution',
            },
            {
              name: 'attributionColor',
              type: 'text',
              label: 'Attribution Color',
            },
          ],
        },
        {
          name: 'maxWidth',
          type: 'text',
          label: 'Content Max Width',
          admin: {
            description: 'CSS max-width value (e.g., 800px, 80%)',
          },
        },
      ],
    },
    // Two Column Module Section 3 (Learn More)
    {
      name: 'twoColumnSection3',
      type: 'group',
      label: 'Two Column Section 3 (Learn More)',
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
          defaultValue: 'top',
        },
        {
          name: 'leftColumn',
          type: 'group',
          label: 'Left Column',
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
              label: 'Heading',
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
              name: 'contentColor',
              type: 'text',
              label: 'Content Color',
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
                  defaultValue: 'VIEW COURSE DETAILS',
                },
                {
                  name: 'url',
                  type: 'text',
                  label: 'Button URL',
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
              ],
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
                },
              ],
            },
          ],
        },
        {
          name: 'rightColumn',
          type: 'group',
          label: 'Right Column',
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
              label: 'Heading',
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
              name: 'contentColor',
              type: 'text',
              label: 'Content Color',
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
                },
              ],
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
            { label: 'Box Grid Module', value: 'boxGridModule' },
            { label: 'Two Column Section 1 (Limited Spots)', value: 'twoColumnSection1' },
            { label: 'Two Column Section 2 (Pioneering)', value: 'twoColumnSection2' },
            { label: 'Single Column Section (Why Train)', value: 'singleColumnSection' },
            { label: 'Two Column Section 3 (Learn More)', value: 'twoColumnSection3' },
          ],
        },
      ],
      defaultValue: [
        { section: 'introModule' },
        { section: 'boxGridModule' },
        { section: 'twoColumnSection1' },
        { section: 'twoColumnSection2' },
        { section: 'singleColumnSection' },
        { section: 'twoColumnSection3' },
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
          admin: {
            description: 'e.g., 48px, 3rem',
          },
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
          admin: {
            description: 'e.g., 700, bold',
          },
        },
        {
          name: 'h1LineHeight',
          type: 'text',
          label: 'H1 Line Height',
          admin: {
            description: 'e.g., 1.2, 1.5',
          },
        },
        {
          name: 'h2FontSize',
          type: 'text',
          label: 'H2 Font Size',
          admin: {
            description: 'e.g., 36px, 2.25rem',
          },
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
          admin: {
            description: 'e.g., 600, semi-bold',
          },
        },
        {
          name: 'h2LineHeight',
          type: 'text',
          label: 'H2 Line Height',
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
          admin: {
            description: 'e.g., 16px, 1rem',
          },
        },
        {
          name: 'bodyLineHeight',
          type: 'text',
          label: 'Body Line Height',
          admin: {
            description: 'e.g., 1.6, 1.8',
          },
        },
        {
          name: 'bodyFontWeight',
          type: 'text',
          label: 'Body Font Weight',
          admin: {
            description: 'e.g., 400, normal',
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
          admin: {
            description: 'e.g., #007bff, rgba(0,123,255,1)',
          },
        },
        {
          name: 'defaultTextColor',
          type: 'text',
          label: 'Default Button Text Color',
          admin: {
            description: 'e.g., #ffffff, white',
          },
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
          admin: {
            description: 'e.g., 1px, 2px',
          },
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
          admin: {
            description: 'e.g., 16px, 1rem',
          },
        },
        {
          name: 'fontWeight',
          type: 'text',
          label: 'Button Font Weight',
          admin: {
            description: 'e.g., 600, bold',
          },
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
          admin: {
            description: 'e.g., 1px, 0.05em',
          },
        },
        {
          name: 'transition',
          type: 'text',
          label: 'Button Transition',
          admin: {
            description: 'e.g., all 0.3s ease',
          },
          defaultValue: 'all 0.3s ease',
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
          admin: {
            description: 'Global toggle for all animations',
          },
        },
        {
          name: 'fadeInDuration',
          type: 'text',
          label: 'Fade In Duration',
          admin: {
            description: 'Duration for fade in animations (e.g., 1s, 1000ms)',
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
          admin: {
            description: 'Default delay before animations start (e.g., 0.2s)',
          },
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
          admin: {
            description: 'Screen width for mobile devices (e.g., 768px)',
          },
          defaultValue: '768px',
        },
        {
          name: 'tabletBreakpoint',
          type: 'text',
          label: 'Tablet Breakpoint',
          admin: {
            description: 'Screen width for tablets (e.g., 1024px)',
          },
          defaultValue: '1024px',
        },
        {
          name: 'desktopBreakpoint',
          type: 'text',
          label: 'Desktop Breakpoint',
          admin: {
            description: 'Screen width for desktop (e.g., 1400px)',
          },
          defaultValue: '1400px',
        },
        {
          name: 'mobileFontSizeAdjustment',
          type: 'text',
          label: 'Mobile Font Size Adjustment',
          admin: {
            description: 'Percentage adjustment for mobile fonts (e.g., 90%, 0.9)',
          },
          defaultValue: '100%',
        },
        {
          name: 'tabletFontSizeAdjustment',
          type: 'text',
          label: 'Tablet Font Size Adjustment',
          admin: {
            description: 'Percentage adjustment for tablet fonts',
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
          defaultValue: '80%',
        },
        {
          name: 'tabletSpacingAdjustment',
          type: 'text',
          label: 'Tablet Spacing Adjustment',
          admin: {
            description: 'Percentage adjustment for tablet spacing',
          },
          defaultValue: '90%',
        },
        {
          name: 'mobileContainerPadding',
          type: 'text',
          label: 'Mobile Container Padding',
          admin: {
            description: 'Padding for mobile containers (e.g., 15px)',
          },
        },
        {
          name: 'tabletContainerPadding',
          type: 'text',
          label: 'Tablet Container Padding',
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
          admin: {
            description: 'Page title for SEO (60 characters max recommended)',
          },
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          label: 'Meta Description',
          admin: {
            description: 'Page description for SEO (160 characters max recommended)',
          },
        },
        {
          name: 'ogTitle',
          type: 'text',
          label: 'Open Graph Title',
          admin: {
            description: 'Title for social media sharing',
          },
        },
        {
          name: 'ogDescription',
          type: 'textarea',
          label: 'Open Graph Description',
          admin: {
            description: 'Description for social media sharing',
          },
        },
        {
          name: 'ogImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Open Graph Image',
          admin: {
            description: 'Image for social media sharing (1200x630px recommended)',
          },
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
          admin: {
            description: 'Canonical URL for this page',
          },
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
          admin: {
            description: 'Add skip to main content link for screen readers',
          },
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
          admin: {
            description: 'Enable ARIA labels throughout the component',
          },
        },
        {
          name: 'altTextRequired',
          type: 'checkbox',
          label: 'Require Alt Text for Images',
          defaultValue: true,
          admin: {
            description: 'Enforce alt text requirement for all images',
          },
        },
        {
          name: 'focusVisibleColor',
          type: 'text',
          label: 'Focus Visible Color',
          admin: {
            description: 'Color for focus outlines (accessibility)',
          },
          defaultValue: '#007bff',
        },
        {
          name: 'focusVisibleWidth',
          type: 'text',
          label: 'Focus Visible Width',
          admin: {
            description: 'Width of focus outline (e.g., 2px)',
          },
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
          admin: {
            description: 'Disable animations for users who prefer reduced motion',
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
            description: 'CSS that only applies to mobile devices',
            rows: 5,
          },
        },
        {
          name: 'tabletCSS',
          type: 'textarea',
          label: 'Tablet-Only CSS',
          admin: {
            description: 'CSS that only applies to tablets',
            rows: 5,
          },
        },
        {
          name: 'desktopCSS',
          type: 'textarea',
          label: 'Desktop-Only CSS',
          admin: {
            description: 'CSS that only applies to desktop',
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
          admin: {
            description: 'Enable lazy loading for images',
          },
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
          admin: {
            description: 'Preload above-the-fold images and fonts',
          },
        },
        {
          name: 'enableImageOptimization',
          type: 'checkbox',
          label: 'Enable Image Optimization',
          defaultValue: true,
          admin: {
            description: 'Automatically optimize and compress images',
          },
        },
        {
          name: 'enableCSSMinification',
          type: 'checkbox',
          label: 'Enable CSS Minification',
          defaultValue: true,
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
        readOnly: false,
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
