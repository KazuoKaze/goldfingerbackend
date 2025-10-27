// import { CollectionConfig } from 'payload'

// export const MicroChannelingPageComponent: CollectionConfig = {
//   slug: 'micro-channeling-page-component',
//   admin: {
//     useAsTitle: 'componentName',
//     defaultColumns: ['componentName', 'updatedAt'],
//     group: 'Components',
//   },
//   access: {
//     read: () => true,
//   },
//   fields: [
//     {
//       name: 'componentName',
//       type: 'text',
//       required: true,
//       defaultValue: 'Micro-Channeling Page Component',
//     },
//     // Hero Section
//     {
//       name: 'heroSection',
//       type: 'group',
//       label: 'Hero Section',
//       fields: [
//         {
//           name: 'show',
//           type: 'checkbox',
//           label: 'Show Section',
//           defaultValue: true,
//         },
//         {
//           name: 'backgroundColor',
//           type: 'text',
//           label: 'Background Color',
//           admin: {
//             description: 'CSS color value (e.g., #ffffff, rgba(0,0,0,0.5))',
//           },
//         },
//         {
//           name: 'backgroundImage',
//           type: 'group',
//           label: 'Background Image',
//           fields: [
//             {
//               name: 'mobile',
//               type: 'upload',
//               relationTo: 'media',
//               label: 'Mobile Image (≤420px)',
//             },
//             {
//               name: 'tablet',
//               type: 'upload',
//               relationTo: 'media',
//               label: 'Tablet Image (≤800px)',
//             },
//             {
//               name: 'desktop',
//               type: 'upload',
//               relationTo: 'media',
//               label: 'Desktop Image (≤1400px)',
//             },
//             {
//               name: 'large',
//               type: 'upload',
//               relationTo: 'media',
//               label: 'Large Desktop Image',
//             },
//             {
//               name: 'alt',
//               type: 'text',
//               label: 'Alt Text',
//               defaultValue: 'Background Texture',
//             },
//           ],
//         },
//         {
//           name: 'breadcrumbs',
//           type: 'array',
//           label: 'Breadcrumbs',
//           admin: {
//             description: 'Drag to reorder breadcrumb items',
//           },
//           fields: [
//             {
//               name: 'label',
//               type: 'text',
//               required: true,
//             },
//             {
//               name: 'url',
//               type: 'text',
//               required: true,
//             },
//             {
//               name: 'ariaLabel',
//               type: 'text',
//               label: 'ARIA Label',
//               defaultValue: 'Breadcrumbs to help navigate the user',
//             },
//           ],
//         },
//         {
//           name: 'title',
//           type: 'text',
//           required: true,
//           defaultValue: 'Micro-Channeling',
//         },
//         {
//           name: 'titleColor',
//           type: 'text',
//           label: 'Title Color',
//           admin: {
//             description: 'CSS color value',
//           },
//         },
//         {
//           name: 'titleFontSize',
//           type: 'text',
//           label: 'Title Font Size',
//           admin: {
//             description: 'CSS font-size value (e.g., 48px, 3rem)',
//           },
//         },
//         {
//           name: 'description',
//           type: 'richText',
//           label: 'Description Text',
//         },
//         {
//           name: 'descriptionColor',
//           type: 'text',
//           label: 'Description Text Color',
//         },
//         {
//           name: 'ctaButton',
//           type: 'group',
//           label: 'CTA Button',
//           fields: [
//             {
//               name: 'show',
//               type: 'checkbox',
//               label: 'Show Button',
//               defaultValue: true,
//             },
//             {
//               name: 'text',
//               type: 'text',
//               label: 'Button Text',
//               defaultValue: 'Book an Appointment',
//             },
//             {
//               name: 'url',
//               type: 'text',
//               label: 'Button URL',
//               defaultValue: '/contact/',
//             },
//             {
//               name: 'buttonClass',
//               type: 'select',
//               label: 'Button Style',
//               options: [
//                 { label: 'White', value: 'white' },
//                 { label: 'Primary', value: 'primary' },
//                 { label: 'Secondary', value: 'secondary' },
//               ],
//               defaultValue: 'white',
//             },
//             {
//               name: 'backgroundColor',
//               type: 'text',
//               label: 'Button Background Color',
//             },
//             {
//               name: 'textColor',
//               type: 'text',
//               label: 'Button Text Color',
//             },
//             {
//               name: 'hoverBackgroundColor',
//               type: 'text',
//               label: 'Button Hover Background Color',
//             },
//           ],
//         },
//         {
//           name: 'mediaImage',
//           type: 'group',
//           label: 'Main Media Image',
//           fields: [
//             {
//               name: 'mobile',
//               type: 'upload',
//               relationTo: 'media',
//               label: 'Mobile Image (≤420px)',
//             },
//             {
//               name: 'tablet',
//               type: 'upload',
//               relationTo: 'media',
//               label: 'Tablet Image (≤800px)',
//             },
//             {
//               name: 'desktop',
//               type: 'upload',
//               relationTo: 'media',
//               label: 'Desktop Image (≤1400px)',
//             },
//             {
//               name: 'large',
//               type: 'upload',
//               relationTo: 'media',
//               label: 'Large Desktop Image',
//             },
//             {
//               name: 'alt',
//               type: 'text',
//               label: 'Alt Text',
//               required: true,
//               defaultValue: 'Woman getting facial services',
//             },
//           ],
//         },
//       ],
//     },
//     // Intro Section
//     {
//       name: 'introSection',
//       type: 'group',
//       label: 'Intro Section',
//       fields: [
//         {
//           name: 'show',
//           type: 'checkbox',
//           label: 'Show Section',
//           defaultValue: true,
//         },
//         {
//           name: 'backgroundColor',
//           type: 'text',
//           label: 'Background Color',
//         },
//         {
//           name: 'textColor',
//           type: 'text',
//           label: 'Text Color',
//         },
//         {
//           name: 'className',
//           type: 'text',
//           label: 'Additional CSS Classes',
//           admin: {
//             description: 'e.g., option-1, wide, etc.',
//           },
//         },
//         {
//           name: 'logo',
//           type: 'upload',
//           relationTo: 'media',
//           label: 'Logo',
//         },
//         {
//           name: 'logoAlt',
//           type: 'text',
//           label: 'Logo Alt Text',
//           defaultValue: 'Goldfingers aesthetic logo',
//         },
//         {
//           name: 'heading',
//           type: 'text',
//           label: 'Heading',
//           required: true,
//         },
//         {
//           name: 'headingColor',
//           type: 'text',
//           label: 'Heading Color',
//         },
//         {
//           name: 'content',
//           type: 'richText',
//           label: 'Content',
//           required: true,
//         },
//       ],
//     },
//     // Banner Section 1 (Transform Your Skin)
//     {
//       name: 'bannerSection1',
//       type: 'group',
//       label: 'Banner Section 1 (Transform Your Skin)',
//       fields: [
//         {
//           name: 'show',
//           type: 'checkbox',
//           label: 'Show Section',
//           defaultValue: true,
//         },
//         {
//           name: 'backgroundColor',
//           type: 'text',
//           label: 'Background Color',
//         },
//         {
//           name: 'textColor',
//           type: 'text',
//           label: 'Text Color',
//         },
//         {
//           name: 'backgroundImage',
//           type: 'group',
//           label: 'Background Image',
//           fields: [
//             {
//               name: 'mobile',
//               type: 'upload',
//               relationTo: 'media',
//               label: 'Mobile Image (≤420px)',
//             },
//             {
//               name: 'tablet',
//               type: 'upload',
//               relationTo: 'media',
//               label: 'Tablet Image (≤800px)',
//             },
//             {
//               name: 'desktop',
//               type: 'upload',
//               relationTo: 'media',
//               label: 'Desktop Image (≤1400px)',
//             },
//             {
//               name: 'large',
//               type: 'upload',
//               relationTo: 'media',
//               label: 'Large Desktop Image',
//             },
//             {
//               name: 'alt',
//               type: 'text',
//               label: 'Alt Text',
//               defaultValue: 'Banner media',
//             },
//           ],
//         },
//         {
//           name: 'isDark',
//           type: 'checkbox',
//           label: 'Dark Theme',
//           defaultValue: true,
//         },
//         {
//           name: 'heading',
//           type: 'text',
//           label: 'Heading',
//           required: true,
//         },
//         {
//           name: 'headingColor',
//           type: 'text',
//           label: 'Heading Color',
//         },
//         {
//           name: 'headingAlignment',
//           type: 'select',
//           label: 'Heading Alignment',
//           options: [
//             { label: 'Left', value: 'left' },
//             { label: 'Center', value: 'center' },
//             { label: 'Right', value: 'right' },
//           ],
//           defaultValue: 'center',
//         },
//         {
//           name: 'headingBreakDesktop',
//           type: 'text',
//           label: 'Desktop Line Break Text',
//           admin: {
//             description: 'Text that appears on a new line on desktop',
//           },
//         },
//         {
//           name: 'content',
//           type: 'richText',
//           label: 'Content',
//         },
//         {
//           name: 'useColumnLayout',
//           type: 'checkbox',
//           label: 'Use Two Column Layout',
//           defaultValue: true,
//         },
//         {
//           name: 'bulletPoints',
//           type: 'array',
//           label: 'Bullet Points',
//           admin: {
//             description: 'Drag to reorder bullet points',
//           },
//           fields: [
//             {
//               name: 'text',
//               type: 'text',
//               label: 'Bullet Text',
//               required: true,
//             },
//           ],
//         },
//         {
//           name: 'bulletColumns',
//           type: 'checkbox',
//           label: 'Display Bullets in Columns',
//           defaultValue: true,
//         },
//       ],
//     },
//     // Column Section 1 (Experience This Groundbreaking)
//     {
//       name: 'columnSection1',
//       type: 'group',
//       label: 'Column Section 1 (Experience This Groundbreaking)',
//       fields: [
//         {
//           name: 'show',
//           type: 'checkbox',
//           label: 'Show Section',
//           defaultValue: true,
//         },
//         {
//           name: 'backgroundColor',
//           type: 'text',
//           label: 'Background Color',
//         },
//         {
//           name: 'textColor',
//           type: 'text',
//           label: 'Text Color',
//         },
//         {
//           name: 'paddingTop',
//           type: 'text',
//           label: 'Padding Top',
//           admin: {
//             description: 'CSS padding value (e.g., 30px, 2rem)',
//           },
//         },
//         {
//           name: 'paddingBottom',
//           type: 'text',
//           label: 'Padding Bottom',
//           admin: {
//             description: 'CSS padding value (e.g., 30px, 2rem)',
//           },
//         },
//         {
//           name: 'heading',
//           type: 'text',
//           label: 'Heading',
//           required: true,
//         },
//         {
//           name: 'headingColor',
//           type: 'text',
//           label: 'Heading Color',
//         },
//         {
//           name: 'headingAlignment',
//           type: 'select',
//           label: 'Heading Alignment',
//           options: [
//             { label: 'Left', value: 'left' },
//             { label: 'Center', value: 'center' },
//             { label: 'Right', value: 'right' },
//           ],
//           defaultValue: 'center',
//         },
//         {
//           name: 'headingBreakDesktop',
//           type: 'text',
//           label: 'Desktop Line Break Text',
//           admin: {
//             description: 'Text that appears on a new line on desktop',
//           },
//         },
//         {
//           name: 'content',
//           type: 'richText',
//           label: 'Content',
//         },
//         {
//           name: 'useColumnLayout',
//           type: 'checkbox',
//           label: 'Use Two Column Layout',
//           defaultValue: true,
//         },
//       ],
//     },
//     // CTA General Section
//     {
//       name: 'ctaGeneralSection',
//       type: 'group',
//       label: 'CTA General Section',
//       fields: [
//         {
//           name: 'show',
//           type: 'checkbox',
//           label: 'Show Section',
//           defaultValue: true,
//         },
//         {
//           name: 'backgroundColor',
//           type: 'text',
//           label: 'Background Color',
//         },
//         {
//           name: 'textColor',
//           type: 'text',
//           label: 'Text Color',
//         },
//         {
//           name: 'className',
//           type: 'text',
//           label: 'Additional CSS Classes',
//           admin: {
//             description: 'e.g., thin, cta, etc.',
//           },
//         },
//         {
//           name: 'paddingTop',
//           type: 'text',
//           label: 'Padding Top',
//           defaultValue: '0',
//         },
//         {
//           name: 'paddingBottom',
//           type: 'text',
//           label: 'Padding Bottom',
//           defaultValue: '0',
//         },
//         {
//           name: 'heading',
//           type: 'text',
//           label: 'Heading',
//           required: true,
//         },
//         {
//           name: 'headingLink',
//           type: 'text',
//           label: 'Heading Link URL',
//         },
//         {
//           name: 'headingColor',
//           type: 'text',
//           label: 'Heading Color',
//         },
//         {
//           name: 'ctaButton',
//           type: 'group',
//           label: 'CTA Button',
//           fields: [
//             {
//               name: 'text',
//               type: 'text',
//               label: 'Button Text',
//               required: true,
//             },
//             {
//               name: 'url',
//               type: 'text',
//               label: 'Button URL',
//               required: true,
//             },
//             {
//               name: 'buttonClass',
//               type: 'select',
//               label: 'Button Style',
//               options: [
//                 { label: 'White', value: 'white' },
//                 { label: 'Primary', value: 'primary' },
//                 { label: 'Secondary', value: 'secondary' },
//               ],
//               defaultValue: 'white',
//             },
//             {
//               name: 'backgroundColor',
//               type: 'text',
//               label: 'Button Background Color',
//             },
//             {
//               name: 'textColor',
//               type: 'text',
//               label: 'Button Text Color',
//             },
//             {
//               name: 'hoverBackgroundColor',
//               type: 'text',
//               label: 'Button Hover Background Color',
//             },
//           ],
//         },
//       ],
//     },
//     // Column Section 2 (How Is Micro-Channeling Different)
//     {
//       name: 'columnSection2',
//       type: 'group',
//       label: 'Column Section 2 (How Different)',
//       fields: [
//         {
//           name: 'show',
//           type: 'checkbox',
//           label: 'Show Section',
//           defaultValue: true,
//         },
//         {
//           name: 'backgroundColor',
//           type: 'text',
//           label: 'Background Color',
//         },
//         {
//           name: 'textColor',
//           type: 'text',
//           label: 'Text Color',
//         },
//         {
//           name: 'hasMedia',
//           type: 'checkbox',
//           label: 'Has Media',
//           defaultValue: true,
//         },
//         {
//           name: 'mediaPosition',
//           type: 'select',
//           label: 'Media Position',
//           options: [
//             { label: 'Left', value: 'left' },
//             { label: 'Right', value: 'right' },
//           ],
//           defaultValue: 'right',
//         },
//         {
//           name: 'paddingTop',
//           type: 'text',
//           label: 'Padding Top',
//           admin: {
//             description: 'CSS padding value (e.g., 30px, 2rem)',
//           },
//         },
//         {
//           name: 'paddingBottom',
//           type: 'text',
//           label: 'Padding Bottom',
//           admin: {
//             description: 'CSS padding value (e.g., 30px, 2rem)',
//           },
//         },
//         {
//           name: 'heading',
//           type: 'text',
//           label: 'Heading',
//           required: true,
//         },
//         {
//           name: 'headingColor',
//           type: 'text',
//           label: 'Heading Color',
//         },
//         {
//           name: 'content',
//           type: 'richText',
//           label: 'Content',
//         },
//         {
//           name: 'mediaImage',
//           type: 'group',
//           label: 'Media Image',
//           fields: [
//             {
//               name: 'mobile',
//               type: 'upload',
//               relationTo: 'media',
//               label: 'Mobile Image (≤420px)',
//             },
//             {
//               name: 'tablet',
//               type: 'upload',
//               relationTo: 'media',
//               label: 'Tablet Image (≤800px)',
//             },
//             {
//               name: 'desktop',
//               type: 'upload',
//               relationTo: 'media',
//               label: 'Desktop Image',
//             },
//             {
//               name: 'alt',
//               type: 'text',
//               label: 'Alt Text',
//               required: true,
//             },
//           ],
//         },
//       ],
//     },
//     // Half Image Section (Micro-Channeling Benefits)
//     {
//       name: 'halfImageSection',
//       type: 'group',
//       label: 'Half Image Section (Benefits)',
//       fields: [
//         {
//           name: 'show',
//           type: 'checkbox',
//           label: 'Show Section',
//           defaultValue: true,
//         },
//         {
//           name: 'backgroundColor',
//           type: 'text',
//           label: 'Background Color',
//           admin: {
//             description: 'CSS color value (e.g., #003366 for navy)',
//           },
//         },
//         {
//           name: 'textColor',
//           type: 'text',
//           label: 'Text Color',
//         },
//         {
//           name: 'imagePosition',
//           type: 'select',
//           label: 'Image Position',
//           options: [
//             { label: 'Left', value: 'left' },
//             { label: 'Right', value: 'right' },
//           ],
//           defaultValue: 'left',
//         },
//         {
//           name: 'verticalAlignment',
//           type: 'select',
//           label: 'Vertical Alignment',
//           options: [
//             { label: 'Top', value: 'top' },
//             { label: 'Center', value: 'center' },
//             { label: 'Bottom', value: 'bottom' },
//           ],
//           defaultValue: 'center',
//         },
//         {
//           name: 'paddingTop',
//           type: 'text',
//           label: 'Padding Top',
//           defaultValue: '0',
//         },
//         {
//           name: 'paddingBottom',
//           type: 'text',
//           label: 'Padding Bottom',
//           defaultValue: '0',
//         },
//         {
//           name: 'heading',
//           type: 'text',
//           label: 'Heading',
//           required: true,
//         },
//         {
//           name: 'headingColor',
//           type: 'text',
//           label: 'Heading Color',
//         },
//         {
//           name: 'content',
//           type: 'richText',
//           label: 'Content',
//         },
//         {
//           name: 'bulletPoints',
//           type: 'array',
//           label: 'Bullet Points',
//           admin: {
//             description: 'Drag to reorder bullet points',
//           },
//           fields: [
//             {
//               name: 'text',
//               type: 'text',
//               label: 'Bullet Text',
//               required: true,
//             },
//           ],
//         },
//         {
//           name: 'bulletColumns',
//           type: 'checkbox',
//           label: 'Display Bullets in Columns',
//           defaultValue: true,
//         },
//         {
//           name: 'contentPadded',
//           type: 'checkbox',
//           label: 'Add Padding to Content Area',
//           defaultValue: true,
//         },
//         {
//           name: 'image',
//           type: 'group',
//           label: 'Image',
//           fields: [
//             {
//               name: 'mobile',
//               type: 'upload',
//               relationTo: 'media',
//               label: 'Mobile Image (≤420px)',
//             },
//             {
//               name: 'tablet',
//               type: 'upload',
//               relationTo: 'media',
//               label: 'Tablet Image (≤800px)',
//             },
//             {
//               name: 'desktop',
//               type: 'upload',
//               relationTo: 'media',
//               label: 'Desktop Image (≤1400px)',
//             },
//             {
//               name: 'large',
//               type: 'upload',
//               relationTo: 'media',
//               label: 'Large Desktop Image',
//             },
//             {
//               name: 'alt',
//               type: 'text',
//               label: 'Alt Text',
//               required: true,
//             },
//           ],
//         },
//       ],
//     },
//     // Column Section 3 (Rejuvenate Your Skin)
//     {
//       name: 'columnSection3',
//       type: 'group',
//       label: 'Column Section 3 (Rejuvenate Your Skin)',
//       fields: [
//         {
//           name: 'show',
//           type: 'checkbox',
//           label: 'Show Section',
//           defaultValue: true,
//         },
//         {
//           name: 'backgroundColor',
//           type: 'text',
//           label: 'Background Color',
//         },
//         {
//           name: 'textColor',
//           type: 'text',
//           label: 'Text Color',
//         },
//         {
//           name: 'paddingTop',
//           type: 'text',
//           label: 'Padding Top',
//           admin: {
//             description: 'CSS padding value (e.g., 30px, 2rem)',
//           },
//         },
//         {
//           name: 'paddingBottom',
//           type: 'text',
//           label: 'Padding Bottom',
//           admin: {
//             description: 'CSS padding value (e.g., 30px, 2rem)',
//           },
//         },
//         {
//           name: 'heading',
//           type: 'text',
//           label: 'Heading',
//           required: true,
//         },
//         {
//           name: 'headingColor',
//           type: 'text',
//           label: 'Heading Color',
//         },
//         {
//           name: 'content',
//           type: 'richText',
//           label: 'Content',
//         },
//       ],
//     },
//     // Banner Section 2 (Your Journey To Fresh)
//     {
//       name: 'bannerSection2',
//       type: 'group',
//       label: 'Banner Section 2 (Journey To Fresh)',
//       fields: [
//         {
//           name: 'show',
//           type: 'checkbox',
//           label: 'Show Section',
//           defaultValue: true,
//         },
//         {
//           name: 'backgroundColor',
//           type: 'text',
//           label: 'Background Color',
//         },
//         {
//           name: 'textColor',
//           type: 'text',
//           label: 'Text Color',
//         },
//         {
//           name: 'backgroundImage',
//           type: 'group',
//           label: 'Background Image',
//           fields: [
//             {
//               name: 'mobile',
//               type: 'upload',
//               relationTo: 'media',
//               label: 'Mobile Image (≤420px)',
//             },
//             {
//               name: 'tablet',
//               type: 'upload',
//               relationTo: 'media',
//               label: 'Tablet Image (≤800px)',
//             },
//             {
//               name: 'desktop',
//               type: 'upload',
//               relationTo: 'media',
//               label: 'Desktop Image (≤1400px)',
//             },
//             {
//               name: 'large',
//               type: 'upload',
//               relationTo: 'media',
//               label: 'Large Desktop Image',
//             },
//             {
//               name: 'alt',
//               type: 'text',
//               label: 'Alt Text',
//               defaultValue: 'Banner media',
//             },
//           ],
//         },
//         {
//           name: 'isDark',
//           type: 'checkbox',
//           label: 'Dark Theme',
//           defaultValue: true,
//         },
//         {
//           name: 'heading',
//           type: 'text',
//           label: 'Heading',
//           required: true,
//         },
//         {
//           name: 'headingColor',
//           type: 'text',
//           label: 'Heading Color',
//         },
//         {
//           name: 'headingAlignment',
//           type: 'select',
//           label: 'Heading Alignment',
//           options: [
//             { label: 'Left', value: 'left' },
//             { label: 'Center', value: 'center' },
//             { label: 'Right', value: 'right' },
//           ],
//           defaultValue: 'center',
//         },
//         {
//           name: 'content',
//           type: 'richText',
//           label: 'Content',
//         },
//         {
//           name: 'columnLayout',
//           type: 'select',
//           label: 'Column Layout',
//           options: [
//             { label: 'Single Column', value: 'one' },
//             { label: 'Two Columns', value: 'two' },
//             { label: 'Three Columns', value: 'three' },
//           ],
//           defaultValue: 'three',
//         },
//       ],
//     },
//     // Column Section 4 (Achieve a Youthful)
//     {
//       name: 'columnSection4',
//       type: 'group',
//       label: 'Column Section 4 (Achieve Youthful)',
//       fields: [
//         {
//           name: 'show',
//           type: 'checkbox',
//           label: 'Show Section',
//           defaultValue: true,
//         },
//         {
//           name: 'backgroundColor',
//           type: 'text',
//           label: 'Background Color',
//         },
//         {
//           name: 'textColor',
//           type: 'text',
//           label: 'Text Color',
//         },
//         {
//           name: 'hasMedia',
//           type: 'checkbox',
//           label: 'Has Media',
//           defaultValue: true,
//         },
//         {
//           name: 'mediaPosition',
//           type: 'select',
//           label: 'Media Position',
//           options: [
//             { label: 'Left', value: 'left' },
//             { label: 'Right', value: 'right' },
//           ],
//           defaultValue: 'left',
//         },
//         {
//           name: 'paddingTop',
//           type: 'text',
//           label: 'Padding Top',
//           admin: {
//             description: 'CSS padding value (e.g., 30px, 2rem)',
//           },
//         },
//         {
//           name: 'paddingBottom',
//           type: 'text',
//           label: 'Padding Bottom (if not specified, default applies)',
//         },
//         {
//           name: 'heading',
//           type: 'text',
//           label: 'Heading',
//           required: true,
//         },
//         {
//           name: 'headingColor',
//           type: 'text',
//           label: 'Heading Color',
//         },
//         {
//           name: 'content',
//           type: 'richText',
//           label: 'Content',
//         },
//         {
//           name: 'mediaImage',
//           type: 'group',
//           label: 'Media Image',
//           fields: [
//             {
//               name: 'mobile',
//               type: 'upload',
//               relationTo: 'media',
//               label: 'Mobile Image (≤420px)',
//             },
//             {
//               name: 'tablet',
//               type: 'upload',
//               relationTo: 'media',
//               label: 'Tablet Image (≤800px)',
//             },
//             {
//               name: 'desktop',
//               type: 'upload',
//               relationTo: 'media',
//               label: 'Desktop Image',
//             },
//             {
//               name: 'alt',
//               type: 'text',
//               label: 'Alt Text',
//               required: true,
//             },
//           ],
//         },
//       ],
//     },
//     // Section Order
//     {
//       name: 'sectionOrder',
//       type: 'array',
//       label: 'Section Order',
//       admin: {
//         description: 'Drag to reorder sections on the page',
//       },
//       fields: [
//         {
//           name: 'section',
//           type: 'select',
//           label: 'Section',
//           required: true,
//           options: [
//             { label: 'Hero Section', value: 'hero' },
//             { label: 'Intro Section', value: 'intro' },
//             { label: 'Banner Section 1 (Transform Your Skin)', value: 'bannerSection1' },
//             { label: 'Column Section 1 (Experience This)', value: 'columnSection1' },
//             { label: 'CTA General Section', value: 'ctaGeneralSection' },
//             { label: 'Column Section 2 (How Different)', value: 'columnSection2' },
//             { label: 'Half Image Section (Benefits)', value: 'halfImageSection' },
//             { label: 'Column Section 3 (Rejuvenate)', value: 'columnSection3' },
//             { label: 'Banner Section 2 (Journey)', value: 'bannerSection2' },
//             { label: 'Column Section 4 (Achieve Youthful)', value: 'columnSection4' },
//           ],
//         },
//       ],
//       defaultValue: [
//         { section: 'hero' },
//         { section: 'intro' },
//         { section: 'bannerSection1' },
//         { section: 'columnSection1' },
//         { section: 'ctaGeneralSection' },
//         { section: 'columnSection2' },
//         { section: 'halfImageSection' },
//         { section: 'columnSection3' },
//         { section: 'bannerSection2' },
//         { section: 'columnSection4' },
//       ],
//     },
//     // Global Styles
//     {
//       name: 'globalStyles',
//       type: 'group',
//       label: 'Global Styles',
//       fields: [
//         {
//           name: 'containerMaxWidth',
//           type: 'text',
//           label: 'Container Max Width',
//           admin: {
//             description: 'CSS max-width value (e.g., 1200px, 100%)',
//           },
//         },
//         {
//           name: 'containerPadding',
//           type: 'text',
//           label: 'Container Padding',
//           admin: {
//             description: 'CSS padding value (e.g., 20px, 1rem 2rem)',
//           },
//         },
//         {
//           name: 'sectionSpacing',
//           type: 'text',
//           label: 'Section Spacing',
//           admin: {
//             description: 'Spacing between sections (e.g., 60px, 4rem)',
//           },
//         },
//         {
//           name: 'fontFamily',
//           type: 'text',
//           label: 'Font Family',
//           admin: {
//             description: 'CSS font-family value',
//           },
//         },
//         {
//           name: 'primaryColor',
//           type: 'text',
//           label: 'Primary Color',
//           admin: {
//             description: 'Primary brand color',
//           },
//         },
//         {
//           name: 'secondaryColor',
//           type: 'text',
//           label: 'Secondary Color',
//           admin: {
//             description: 'Secondary brand color',
//           },
//         },
//         {
//           name: 'navyColor',
//           type: 'text',
//           label: 'Navy Color',
//           admin: {
//             description: 'Navy background color',
//           },
//           defaultValue: '#003366',
//         },
//         {
//           name: 'textColor',
//           type: 'text',
//           label: 'Default Text Color',
//           admin: {
//             description: 'Default text color for the page',
//           },
//         },
//         {
//           name: 'linkColor',
//           type: 'text',
//           label: 'Link Color',
//           admin: {
//             description: 'Default color for links',
//           },
//         },
//         {
//           name: 'linkHoverColor',
//           type: 'text',
//           label: 'Link Hover Color',
//           admin: {
//             description: 'Color for links on hover',
//           },
//         },
//         {
//           name: 'headingFontSize',
//           type: 'text',
//           label: 'Default Heading Font Size',
//           admin: {
//             description: 'Default font size for h2 headings',
//           },
//         },
//       ],
//     },
//     // Typography Settings
//     {
//       name: 'typographySettings',
//       type: 'group',
//       label: 'Typography Settings',
//       fields: [
//         {
//           name: 'h1FontSize',
//           type: 'text',
//           label: 'H1 Font Size',
//         },
//         {
//           name: 'h1Color',
//           type: 'text',
//           label: 'H1 Color',
//         },
//         {
//           name: 'h1FontWeight',
//           type: 'text',
//           label: 'H1 Font Weight',
//         },
//         {
//           name: 'h2FontSize',
//           type: 'text',
//           label: 'H2 Font Size',
//         },
//         {
//           name: 'h2Color',
//           type: 'text',
//           label: 'H2 Color',
//         },
//         {
//           name: 'h2FontWeight',
//           type: 'text',
//           label: 'H2 Font Weight',
//         },
//         {
//           name: 'bodyFontSize',
//           type: 'text',
//           label: 'Body Font Size',
//         },
//         {
//           name: 'bodyLineHeight',
//           type: 'text',
//           label: 'Body Line Height',
//         },
//         {
//           name: 'textCenterClass',
//           type: 'text',
//           label: 'Text Center Class Name',
//           defaultValue: 'text-center',
//         },
//         {
//           name: 'blockDesktopClass',
//           type: 'text',
//           label: 'Block Desktop Class Name',
//           defaultValue: 'block-desktop',
//           admin: {
//             description: 'Class for line breaks on desktop',
//           },
//         },
//       ],
//     },
//     // Button Styles
//     {
//       name: 'buttonStyles',
//       type: 'group',
//       label: 'Button Styles',
//       fields: [
//         {
//           name: 'defaultBackgroundColor',
//           type: 'text',
//           label: 'Default Button Background',
//         },
//         {
//           name: 'defaultTextColor',
//           type: 'text',
//           label: 'Default Button Text Color',
//         },
//         {
//           name: 'defaultHoverBackground',
//           type: 'text',
//           label: 'Default Button Hover Background',
//         },
//         {
//           name: 'whiteBackgroundColor',
//           type: 'text',
//           label: 'White Button Background',
//           defaultValue: '#ffffff',
//         },
//         {
//           name: 'whiteTextColor',
//           type: 'text',
//           label: 'White Button Text Color',
//         },
//         {
//           name: 'whiteHoverBackground',
//           type: 'text',
//           label: 'White Button Hover Background',
//         },
//         {
//           name: 'borderRadius',
//           type: 'text',
//           label: 'Button Border Radius',
//           admin: {
//             description: 'e.g., 4px, 0.5rem',
//           },
//         },
//         {
//           name: 'padding',
//           type: 'text',
//           label: 'Button Padding',
//           admin: {
//             description: 'e.g., 12px 24px',
//           },
//         },
//         {
//           name: 'fontSize',
//           type: 'text',
//           label: 'Button Font Size',
//         },
//         {
//           name: 'fontWeight',
//           type: 'text',
//           label: 'Button Font Weight',
//         },
//       ],
//     },
//     // List Styles
//     {
//       name: 'listStyles',
//       type: 'group',
//       label: 'List Styles',
//       fields: [
//         {
//           name: 'bulletColor',
//           type: 'text',
//           label: 'Bullet Point Color',
//         },
//         {
//           name: 'bulletStyle',
//           type: 'select',
//           label: 'Bullet Style',
//           options: [
//             { label: 'Disc', value: 'disc' },
//             { label: 'Circle', value: 'circle' },
//             { label: 'Square', value: 'square' },
//             { label: 'None', value: 'none' },
//           ],
//           defaultValue: 'disc',
//         },
//         {
//           name: 'columnsBulletClass',
//           type: 'text',
//           label: 'Columns Bullet Class Name',
//           defaultValue: 'columns',
//           admin: {
//             description: 'Class name for multi-column bullet lists',
//           },
//         },
//       ],
//     },
//     // Column Layout Settings
//     {
//       name: 'columnLayoutSettings',
//       type: 'group',
//       label: 'Column Layout Settings',
//       fields: [
//         {
//           name: 'twoColumnClass',
//           type: 'text',
//           label: 'Two Column Class Name',
//           defaultValue: 'columns-two',
//         },
//         {
//           name: 'threeColumnClass',
//           type: 'text',
//           label: 'Three Column Class Name',
//           defaultValue: 'columns-three',
//         },
//         {
//           name: 'columnGap',
//           type: 'text',
//           label: 'Column Gap',
//           admin: {
//             description: 'Space between columns (e.g., 20px, 2rem)',
//           },
//         },
//       ],
//     },
//     // Animation Settings
//     {
//       name: 'animationSettings',
//       type: 'group',
//       label: 'Animation Settings',
//       fields: [
//         {
//           name: 'enableAnimations',
//           type: 'checkbox',
//           label: 'Enable Animations',
//           defaultValue: true,
//         },
//         {
//           name: 'fadeInDuration',
//           type: 'text',
//           label: 'Fade In Duration',
//           admin: {
//             description: 'Duration for fade in animations (e.g., 1s, 2s)',
//           },
//           defaultValue: '1s',
//         },
//         {
//           name: 'animationEasing',
//           type: 'text',
//           label: 'Animation Easing',
//           admin: {
//             description: 'CSS easing function',
//           },
//           defaultValue: 'ease-in-out',
//         },
//         {
//           name: 'viewportAnimations',
//           type: 'array',
//           label: 'Viewport Animations by Section',
//           fields: [
//             {
//               name: 'section',
//               type: 'select',
//               label: 'Section',
//               options: [
//                 { label: 'Intro Section', value: 'intro' },
//                 { label: 'Banner Section 1', value: 'bannerSection1' },
//                 { label: 'CTA General Section', value: 'ctaGeneralSection' },
//                 { label: 'Half Image Section', value: 'halfImageSection' },
//                 { label: 'Banner Section 2', value: 'bannerSection2' },
//               ],
//             },
//             {
//               name: 'animationType',
//               type: 'select',
//               label: 'Animation Type',
//               options: [
//                 { label: 'Fade In Up', value: 'fadeInUp' },
//                 { label: 'Fade In Left', value: 'fadeInLeft' },
//                 { label: 'Fade In Right', value: 'fadeInRight' },
//                 { label: 'Fade In', value: 'fadeIn' },
//                 { label: 'None', value: 'none' },
//               ],
//               defaultValue: 'fadeInUp',
//             },
//           ],
//         },
//       ],
//     },
//     // SEO Settings
//     {
//       name: 'seoSettings',
//       type: 'group',
//       label: 'SEO Settings',
//       fields: [
//         {
//           name: 'metaTitle',
//           type: 'text',
//           label: 'Meta Title',
//         },
//         {
//           name: 'metaDescription',
//           type: 'textarea',
//           label: 'Meta Description',
//         },
//         {
//           name: 'ogImage',
//           type: 'upload',
//           relationTo: 'media',
//           label: 'OG Image',
//         },
//         {
//           name: 'keywords',
//           type: 'text',
//           label: 'Keywords',
//           admin: {
//             description: 'Comma-separated keywords for SEO',
//           },
//         },
//         {
//           name: 'canonicalUrl',
//           type: 'text',
//           label: 'Canonical URL',
//         },
//         {
//           name: 'robots',
//           type: 'select',
//           label: 'Robots Meta Tag',
//           options: [
//             { label: 'Index, Follow', value: 'index,follow' },
//             { label: 'No Index, Follow', value: 'noindex,follow' },
//             { label: 'Index, No Follow', value: 'index,nofollow' },
//             { label: 'No Index, No Follow', value: 'noindex,nofollow' },
//           ],
//           defaultValue: 'index,follow',
//         },
//       ],
//     },
//     // Accessibility Settings
//     {
//       name: 'accessibilitySettings',
//       type: 'group',
//       label: 'Accessibility Settings',
//       fields: [
//         {
//           name: 'skipToContent',
//           type: 'checkbox',
//           label: 'Include Skip to Content Link',
//           defaultValue: true,
//         },
//         {
//           name: 'ariaLabelsEnabled',
//           type: 'checkbox',
//           label: 'Enable ARIA Labels',
//           defaultValue: true,
//         },
//         {
//           name: 'altTextRequired',
//           type: 'checkbox',
//           label: 'Require Alt Text for Images',
//           defaultValue: true,
//         },
//         {
//           name: 'focusVisibleColor',
//           type: 'text',
//           label: 'Focus Visible Color',
//           admin: {
//             description: 'Color for focus outlines (accessibility)',
//           },
//         },
//         {
//           name: 'contrastMode',
//           type: 'select',
//           label: 'Contrast Mode',
//           options: [
//             { label: 'Normal', value: 'normal' },
//             { label: 'High Contrast', value: 'high' },
//             { label: 'Very High Contrast', value: 'very-high' },
//           ],
//           defaultValue: 'normal',
//         },
//       ],
//     },
//     // Mobile Settings
//     {
//       name: 'mobileSettings',
//       type: 'group',
//       label: 'Mobile Settings',
//       fields: [
//         {
//           name: 'mobileBreakpoint',
//           type: 'text',
//           label: 'Mobile Breakpoint',
//           admin: {
//             description: 'Screen width for mobile (e.g., 768px)',
//           },
//           defaultValue: '768px',
//         },
//         {
//           name: 'tabletBreakpoint',
//           type: 'text',
//           label: 'Tablet Breakpoint',
//           admin: {
//             description: 'Screen width for tablet (e.g., 1024px)',
//           },
//           defaultValue: '1024px',
//         },
//         {
//           name: 'mobileFontSizeAdjustment',
//           type: 'text',
//           label: 'Mobile Font Size Adjustment',
//           admin: {
//             description: 'Percentage adjustment for mobile fonts (e.g., 90%)',
//           },
//           defaultValue: '100%',
//         },
//         {
//           name: 'mobileSpacingAdjustment',
//           type: 'text',
//           label: 'Mobile Spacing Adjustment',
//           admin: {
//             description: 'Percentage adjustment for mobile spacing',
//           },
//           defaultValue: '100%',
//         },
//         {
//           name: 'mobileStackBehavior',
//           type: 'checkbox',
//           label: 'Enable Mobile Stack Behavior',
//           defaultValue: true,
//           admin: {
//             description: 'Stack elements vertically on mobile devices',
//           },
//         },
//       ],
//     },
//     // CSS Class Names (for customization)
//     {
//       name: 'cssClassNames',
//       type: 'group',
//       label: 'CSS Class Names',
//       admin: {
//         description: 'Customize CSS class names used throughout the component',
//       },
//       fields: [
//         {
//           name: 'heroModuleClass',
//           type: 'text',
//           label: 'Hero Module Class',
//           defaultValue: 'mod_hero banner mobile-stack',
//         },
//         {
//           name: 'introModuleClass',
//           type: 'text',
//           label: 'Intro Module Class',
//           defaultValue: 'mod_intro container viewport option-1 wide wow fadeInUp',
//         },
//         {
//           name: 'bannerModuleClass',
//           type: 'text',
//           label: 'Banner Module Class',
//           defaultValue: 'mod_banner dark hide-divider viewport',
//         },
//         {
//           name: 'columnModuleClass',
//           type: 'text',
//           label: 'Column Module Class',
//           defaultValue: 'mod_column viewport container',
//         },
//         {
//           name: 'ctaGeneralModuleClass',
//           type: 'text',
//           label: 'CTA General Module Class',
//           defaultValue: 'mod_cta_general viewport container cta thin wow fadeInRight',
//         },
//         {
//           name: 'halfImageModuleClass',
//           type: 'text',
//           label: 'Half Image Module Class',
//           defaultValue: 'mod_half_image viewport half-image container wow fadeInLeft',
//         },
//       ],
//     },
//     {
//       name: 'isActive',
//       type: 'checkbox',
//       label: 'Active',
//       defaultValue: true,
//       admin: {
//         description: 'Toggle to enable/disable this component',
//       },
//     },
//   ],
//   timestamps: true,
// }


import { CollectionConfig } from 'payload'

export const MicroChannelingPageComponent: CollectionConfig = {
  slug: 'micro-channeling-page-component',
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
      defaultValue: 'Micro Channeling Page Component',
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
          defaultValue: [
            {
              label: 'Home',
              url: '/',
              ariaLabel: 'Breadcrumbs to help navigate the user',
            },
            {
              label: 'Medical Spa',
              url: '/medical-spa/',
              ariaLabel: 'Breadcrumbs to help navigate the user',
            },
            {
              label: 'Micro Channeling',
              url: '/medical-spa/micro-channeling/',
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
          defaultValue: 'Micro-Channeling',
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
              defaultValue: 'Woman getting facial services',
            },
            {
              name: 'width',
              type: 'text',
              label: 'Image Width',
              defaultValue: '1920',
            },
            {
              name: 'height',
              type: 'text',
              label: 'Image Height',
              defaultValue: '1206',
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
          name: 'containerWidth',
          type: 'select',
          label: 'Container Width',
          options: [
            { label: 'Container', value: 'container' },
            { label: 'Wide', value: 'wide' },
            { label: 'Full Width', value: 'full' },
          ],
          defaultValue: 'wide',
        },
        {
          name: 'layout',
          type: 'select',
          label: 'Layout Option',
          options: [
            { label: 'Option 1', value: 'option-1' },
            { label: 'Option 2', value: 'option-2' },
            { label: 'Option 3', value: 'option-3' },
          ],
          defaultValue: 'option-1',
        },
        {
          name: 'showViewport',
          type: 'checkbox',
          label: 'Enable Viewport Animation',
          defaultValue: true,
        },
        {
          name: 'animationType',
          type: 'select',
          label: 'Animation Type',
          options: [
            { label: 'Fade In Up', value: 'fadeInUp' },
            { label: 'Fade In', value: 'fadeIn' },
            { label: 'Fade In Left', value: 'fadeInLeft' },
            { label: 'Fade In Right', value: 'fadeInRight' },
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
          type: 'text',
          label: 'Logo Width',
          defaultValue: '58',
        },
        {
          name: 'logoHeight',
          type: 'text',
          label: 'Logo Height',
          defaultValue: '64',
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Heading',
          required: true,
          defaultValue: 'Revitalize your complexion and reveal your inner glow',
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
          required: true,
        },
      ],
    },
    // Banner Section 1 (Transform Your Skin)
    {
      name: 'bannerSection1',
      type: 'group',
      label: 'Banner Section 1 (Transform Your Skin)',
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
          name: 'theme',
          type: 'select',
          label: 'Theme',
          options: [
            { label: 'Light', value: 'light' },
            { label: 'Dark', value: 'dark' },
          ],
          defaultValue: 'dark',
        },
        {
          name: 'hideDivider',
          type: 'checkbox',
          label: 'Hide Divider',
          defaultValue: true,
        },
        {
          name: 'backgroundStyle',
          type: 'select',
          label: 'Background Style',
          options: [
            { label: 'Background 1', value: 'background-1' },
            { label: 'Background 2', value: 'background-2' },
            { label: 'Background 3', value: 'background-3' },
            { label: 'Background 6', value: 'background-6' },
            { label: 'Background 8', value: 'background-8' },
            { label: 'Background Navy', value: 'background-navy' },
          ],
          defaultValue: 'background-6',
        },
        {
          name: 'showViewport',
          type: 'checkbox',
          label: 'Enable Viewport Animation',
          defaultValue: true,
        },
        {
          name: 'animationType',
          type: 'select',
          label: 'Animation Type',
          options: [
            { label: 'Fade In Up', value: 'fadeInUp' },
            { label: 'Fade In', value: 'fadeIn' },
            { label: 'Fade In Left', value: 'fadeInLeft' },
            { label: 'Fade In Right', value: 'fadeInRight' },
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
          required: true,
          defaultValue: 'Transform Your Skin From The Inside Out With Micro-Channeling',
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
          defaultValue: 'center',
        },
        {
          name: 'headingColor',
          type: 'text',
          label: 'Heading Color',
        },
        {
          name: 'columnLayout',
          type: 'select',
          label: 'Column Layout',
          options: [
            { label: 'Single Column', value: 'single' },
            { label: 'Two Columns', value: 'columns-two' },
            { label: 'Three Columns', value: 'columns-three' },
          ],
          defaultValue: 'columns-two',
        },
        {
          name: 'columns',
          type: 'array',
          label: 'Content Columns',
          admin: {
            description: 'Drag to reorder columns',
          },
          defaultValue: [{}, {}],
          fields: [
            {
              name: 'content',
              type: 'richText',
              label: 'Column Content',
            },
            {
              name: 'listItems',
              type: 'array',
              label: 'List Items',
              admin: {
                description: 'Drag to reorder list items',
              },
              fields: [
                {
                  name: 'item',
                  type: 'text',
                  label: 'Item Text',
                },
              ],
            },
            {
              name: 'listStyle',
              type: 'select',
              label: 'List Style',
              options: [
                { label: 'Regular List', value: 'regular' },
                { label: 'Column List', value: 'columns' },
              ],
              defaultValue: 'regular',
            },
          ],
        },
      ],
    },
    // Column Section 1 (Experience This Groundbreaking)
    {
      name: 'columnSection1',
      type: 'group',
      label: 'Column Section 1 (Experience This Groundbreaking)',
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
          name: 'containerWidth',
          type: 'select',
          label: 'Container Width',
          options: [
            { label: 'Container', value: 'container' },
            { label: 'Wide', value: 'wide' },
          ],
          defaultValue: 'container',
        },
        {
          name: 'showViewport',
          type: 'checkbox',
          label: 'Enable Viewport Animation',
          defaultValue: true,
        },
        {
          name: 'marginTop',
          type: 'text',
          label: 'Margin Top',
          defaultValue: 'mt-30',
          admin: {
            description: 'CSS class for margin top (e.g., mt-30, mt-0)',
          },
        },
        {
          name: 'marginBottom',
          type: 'text',
          label: 'Margin Bottom',
          defaultValue: 'mb-30',
          admin: {
            description: 'CSS class for margin/padding bottom',
          },
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Heading',
          required: true,
          defaultValue: 'Experience This Groundbreaking Skin Treatment At Goldfingers Aesthetics',
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
            { label: 'Left', value: 'text-left' },
            { label: 'Center', value: 'text-center' },
            { label: 'Right', value: 'text-right' },
          ],
          defaultValue: 'text-center',
        },
        {
          name: 'columnLayout',
          type: 'select',
          label: 'Column Layout',
          options: [
            { label: 'Single Column', value: 'single' },
            { label: 'Two Columns', value: 'columns-two' },
            { label: 'Three Columns', value: 'columns-three' },
          ],
          defaultValue: 'columns-two',
        },
        {
          name: 'columns',
          type: 'array',
          label: 'Content Columns',
          admin: {
            description: 'Drag to reorder columns',
          },
          defaultValue: [{}, {}],
          fields: [
            {
              name: 'content',
              type: 'richText',
              label: 'Column Content',
            },
          ],
        },
      ],
    },
    // CTA General Section 1
    {
      name: 'ctaGeneralSection1',
      type: 'group',
      label: 'CTA General Section 1 (Schedule Consultation)',
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
          name: 'containerWidth',
          type: 'select',
          label: 'Container Width',
          options: [
            { label: 'Container', value: 'container' },
            { label: 'Thin', value: 'thin' },
            { label: 'Wide', value: 'wide' },
          ],
          defaultValue: 'thin',
        },
        {
          name: 'backgroundStyle',
          type: 'select',
          label: 'Background Style',
          options: [
            { label: 'None', value: '' },
            { label: 'Background 1', value: 'background-1' },
            { label: 'Background 2', value: 'background-2' },
            { label: 'Background Navy', value: 'background-navy' },
          ],
          defaultValue: 'background-2',
        },
        {
          name: 'showViewport',
          type: 'checkbox',
          label: 'Enable Viewport Animation',
          defaultValue: true,
        },
        {
          name: 'animationType',
          type: 'select',
          label: 'Animation Type',
          options: [
            { label: 'Fade In Up', value: 'fadeInUp' },
            { label: 'Fade In', value: 'fadeIn' },
            { label: 'Fade In Left', value: 'fadeInLeft' },
            { label: 'Fade In Right', value: 'fadeInRight' },
          ],
          defaultValue: 'fadeInRight',
        },
        {
          name: 'marginTop',
          type: 'text',
          label: 'Margin Top',
          defaultValue: 'mt-0',
        },
        {
          name: 'marginBottom',
          type: 'text',
          label: 'Margin Bottom',
          defaultValue: 'mb-0',
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Heading',
          required: true,
          defaultValue: 'Schedule a Consultation',
        },
        {
          name: 'headingUrl',
          type: 'text',
          label: 'Heading URL',
          defaultValue: '/contact/',
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
              name: 'style',
              type: 'select',
              label: 'Button Style',
              options: [
                { label: 'Primary', value: 'primary' },
                { label: 'White', value: 'white' },
                { label: 'Outline', value: 'outline' },
              ],
              defaultValue: 'white',
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
          name: 'mediaImage',
          type: 'group',
          label: 'Media Image (Optional)',
          fields: [
            {
              name: 'show',
              type: 'checkbox',
              label: 'Show Media',
              defaultValue: false,
            },
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
    // Column with Media Section 1 (How Is Micro-Channeling Different)
    {
      name: 'columnMediaSection1',
      type: 'group',
      label: 'Column Media Section 1 (How Is Micro-Channeling Different)',
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
          name: 'containerWidth',
          type: 'select',
          label: 'Container Width',
          options: [
            { label: 'Container', value: 'container' },
            { label: 'Wide', value: 'wide' },
          ],
          defaultValue: 'container',
        },
        {
          name: 'showViewport',
          type: 'checkbox',
          label: 'Enable Viewport Animation',
          defaultValue: true,
        },
        {
          name: 'marginTop',
          type: 'text',
          label: 'Margin Top',
          defaultValue: 'mt-30',
        },
        {
          name: 'marginBottom',
          type: 'text',
          label: 'Margin Bottom',
          defaultValue: 'mb-30',
        },
        {
          name: 'imagePosition',
          type: 'select',
          label: 'Image Position',
          options: [
            { label: 'Left', value: 'media-left' },
            { label: 'Right', value: 'media-right' },
          ],
          defaultValue: 'media-right',
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Heading',
          required: true,
          defaultValue: 'How Is Micro-Channeling Different From Microneedling?',
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
              defaultValue: 'photo of Florida keys taken from the sky',
            },
            {
              name: 'width',
              type: 'text',
              label: 'Image Width',
              defaultValue: '904',
            },
            {
              name: 'height',
              type: 'text',
              label: 'Image Height',
              defaultValue: '1062',
            },
          ],
        },
      ],
    },
    // Half Image Section 1 (Micro-Channeling Benefits)
    {
      name: 'halfImageSection1',
      type: 'group',
      label: 'Half Image Section 1 (Micro-Channeling Benefits)',
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
          name: 'containerWidth',
          type: 'select',
          label: 'Container Width',
          options: [
            { label: 'Container', value: 'container' },
            { label: 'Wide', value: 'wide' },
          ],
          defaultValue: 'container',
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
            { label: 'Top', value: 'top-aligned' },
            { label: 'Center', value: 'center-aligned' },
            { label: 'Bottom', value: 'bottom-aligned' },
          ],
          defaultValue: 'center-aligned',
        },
        {
          name: 'showViewport',
          type: 'checkbox',
          label: 'Enable Viewport Animation',
          defaultValue: true,
        },
        {
          name: 'animationType',
          type: 'select',
          label: 'Animation Type',
          options: [
            { label: 'Fade In Up', value: 'fadeInUp' },
            { label: 'Fade In', value: 'fadeIn' },
            { label: 'Fade In Left', value: 'fadeInLeft' },
            { label: 'Fade In Right', value: 'fadeInRight' },
          ],
          defaultValue: 'fadeInLeft',
        },
        {
          name: 'backgroundStyle',
          type: 'select',
          label: 'Background Style',
          options: [
            { label: 'None', value: '' },
            { label: 'Background Navy', value: 'background-navy' },
            { label: 'Background 1', value: 'background-1' },
            { label: 'Background 2', value: 'background-2' },
          ],
          defaultValue: 'background-navy',
        },
        {
          name: 'marginTop',
          type: 'text',
          label: 'Margin Top',
          defaultValue: 'mt-0',
        },
        {
          name: 'marginBottom',
          type: 'text',
          label: 'Margin Bottom',
          defaultValue: 'mb-0',
        },
        {
          name: 'contentPadding',
          type: 'select',
          label: 'Content Padding',
          options: [
            { label: 'Default', value: 'default' },
            { label: 'Padded', value: 'padded' },
            { label: 'Padded 2', value: 'padded2' },
          ],
          defaultValue: 'padded',
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Heading',
          required: true,
          defaultValue: 'Micro-Channeling Benefits',
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
          name: 'listItems',
          type: 'array',
          label: 'Benefits List',
          admin: {
            description: 'Drag to reorder benefits',
          },
          defaultValue: [
            { item: 'Wrinkles' },
            { item: 'Fine lines' },
            { item: 'Uneven skin tone & texture' },
            { item: 'Reduces and minimizes acne scarring' },
            { item: 'Hyperpigmentation' },
            { item: 'Skin tightening' },
            { item: 'Acne Scars/Surgical Scars' },
            { item: 'Nourishes hair follicles' },
            { item: 'Stretch marks' },
          ],
          fields: [
            {
              name: 'item',
              type: 'text',
              label: 'Item Text',
              required: true,
            },
          ],
        },
        {
          name: 'listStyle',
          type: 'select',
          label: 'List Style',
          options: [
            { label: 'Regular List', value: 'regular' },
            { label: 'Column List', value: 'columns' },
          ],
          defaultValue: 'columns',
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
              defaultValue: 'Specialist working with patient',
            },
            {
              name: 'width',
              type: 'text',
              label: 'Image Width',
              defaultValue: '1832',
            },
            {
              name: 'height',
              type: 'text',
              label: 'Image Height',
              defaultValue: '1824',
            },
          ],
        },
      ],
    },
    // Column Section 2 (Rejuvenate Your Skin)
    {
      name: 'columnSection2',
      type: 'group',
      label: 'Column Section 2 (Rejuvenate Your Skin)',
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
          name: 'containerWidth',
          type: 'select',
          label: 'Container Width',
          options: [
            { label: 'Container', value: 'container' },
            { label: 'Wide', value: 'wide' },
          ],
          defaultValue: 'container',
        },
        {
          name: 'showViewport',
          type: 'checkbox',
          label: 'Enable Viewport Animation',
          defaultValue: true,
        },
        {
          name: 'marginTop',
          type: 'text',
          label: 'Margin Top',
          defaultValue: 'mt-30',
        },
        {
          name: 'marginBottom',
          type: 'text',
          label: 'Margin Bottom',
          defaultValue: 'mb-30',
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Heading',
          required: true,
          defaultValue: 'Rejuvenate Your Skin With Precision',
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
    // Banner Section 2 (Your Journey To Fresh)
    {
      name: 'bannerSection2',
      type: 'group',
      label: 'Banner Section 2 (Your Journey To Fresh)',
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
          name: 'theme',
          type: 'select',
          label: 'Theme',
          options: [
            { label: 'Light', value: 'light' },
            { label: 'Dark', value: 'dark' },
          ],
          defaultValue: 'dark',
        },
        {
          name: 'hideDivider',
          type: 'checkbox',
          label: 'Hide Divider',
          defaultValue: true,
        },
        {
          name: 'backgroundStyle',
          type: 'select',
          label: 'Background Style',
          options: [
            { label: 'Background 1', value: 'background-1' },
            { label: 'Background 2', value: 'background-2' },
            { label: 'Background 3', value: 'background-3' },
            { label: 'Background 6', value: 'background-6' },
            { label: 'Background 8', value: 'background-8' },
            { label: 'Background Navy', value: 'background-navy' },
          ],
          defaultValue: 'background-8',
        },
        {
          name: 'showViewport',
          type: 'checkbox',
          label: 'Enable Viewport Animation',
          defaultValue: true,
        },
        {
          name: 'animationType',
          type: 'select',
          label: 'Animation Type',
          options: [
            { label: 'Fade In Up', value: 'fadeInUp' },
            { label: 'Fade In', value: 'fadeIn' },
            { label: 'Fade In Left', value: 'fadeInLeft' },
            { label: 'Fade In Right', value: 'fadeInRight' },
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
          required: true,
          defaultValue: 'Your Journey To Fresh, Healthy Skin: Aftercare',
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
          defaultValue: 'center',
        },
        {
          name: 'headingColor',
          type: 'text',
          label: 'Heading Color',
        },
        {
          name: 'columnLayout',
          type: 'select',
          label: 'Column Layout',
          options: [
            { label: 'Single Column', value: 'single' },
            { label: 'Two Columns', value: 'columns-two' },
            { label: 'Three Columns', value: 'columns-three' },
          ],
          defaultValue: 'columns-three',
        },
        {
          name: 'columns',
          type: 'array',
          label: 'Content Columns',
          admin: {
            description: 'Drag to reorder columns',
          },
          defaultValue: [{}, {}, {}],
          fields: [
            {
              name: 'content',
              type: 'richText',
              label: 'Column Content',
            },
          ],
        },
      ],
    },
    // Column with Media Section 2 (Achieve a Youthful)
    {
      name: 'columnMediaSection2',
      type: 'group',
      label: 'Column Media Section 2 (Achieve a Youthful)',
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
          name: 'containerWidth',
          type: 'select',
          label: 'Container Width',
          options: [
            { label: 'Container', value: 'container' },
            { label: 'Wide', value: 'wide' },
          ],
          defaultValue: 'container',
        },
        {
          name: 'showViewport',
          type: 'checkbox',
          label: 'Enable Viewport Animation',
          defaultValue: true,
        },
        {
          name: 'marginTop',
          type: 'text',
          label: 'Margin Top',
          defaultValue: 'mt-30',
        },
        {
          name: 'marginBottom',
          type: 'text',
          label: 'Margin Bottom',
          defaultValue: 'mb-0',
        },
        {
          name: 'imagePosition',
          type: 'select',
          label: 'Image Position',
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
          defaultValue: 'Achieve a Youthful and Radiant Complexion with Micro-Channeling',
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
              defaultValue: 'white sand beach',
            },
            {
              name: 'width',
              type: 'text',
              label: 'Image Width',
              defaultValue: '904',
            },
            {
              name: 'height',
              type: 'text',
              label: 'Image Height',
              defaultValue: '1062',
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
            { label: 'Banner Section 1 (Transform Your Skin)', value: 'bannerSection1' },
            { label: 'Column Section 1 (Experience This Groundbreaking)', value: 'columnSection1' },
            { label: 'CTA General Section 1', value: 'ctaGeneralSection1' },
            { label: 'Column Media Section 1 (How Is Different)', value: 'columnMediaSection1' },
            { label: 'Half Image Section 1 (Benefits)', value: 'halfImageSection1' },
            { label: 'Column Section 2 (Rejuvenate Your Skin)', value: 'columnSection2' },
            { label: 'Banner Section 2 (Your Journey)', value: 'bannerSection2' },
            { label: 'Column Media Section 2 (Achieve Youthful)', value: 'columnMediaSection2' },
          ],
        },
      ],
      defaultValue: [
        { section: 'hero' },
        { section: 'intro' },
        { section: 'bannerSection1' },
        { section: 'columnSection1' },
        { section: 'ctaGeneralSection1' },
        { section: 'columnMediaSection1' },
        { section: 'halfImageSection1' },
        { section: 'columnSection2' },
        { section: 'bannerSection2' },
        { section: 'columnMediaSection2' },
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
        {
          name: 'wowEnabled',
          type: 'checkbox',
          label: 'Enable WOW.js Animations',
          defaultValue: true,
          admin: {
            description: 'Enable scroll-based animations using WOW.js',
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
          defaultValue: 'Micro-Channeling - Goldfingers Aesthetics',
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          label: 'Meta Description',
          defaultValue:
            'Unlock the Secret to Glowing Skin at Goldfingers With Micro-Channeling. Stimulate collagen production for remarkable skin regeneration and a youthful complexion.',
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
            'micro-channeling, collagen induction therapy, skin rejuvenation, microneedling, skin treatment, anti-aging',
        },
        {
          name: 'canonicalUrl',
          type: 'text',
          label: 'Canonical URL',
          defaultValue: '/medical-spa/micro-channeling/',
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
        {
          name: 'mobileStackEnabled',
          type: 'checkbox',
          label: 'Enable Mobile Stack Layout',
          defaultValue: true,
          admin: {
            description: 'Stack sections vertically on mobile devices',
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

export default MicroChannelingPageComponent
