// import { CollectionConfig } from 'payload'

// export const LakeMaryPageComponent: CollectionConfig = {
//   slug: 'lake-mary-page-component',
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
//       defaultValue: 'Lake Mary Page Component',
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
//           name: 'titleSmall',
//           type: 'text',
//           label: 'Title Small Text',
//           defaultValue: 'Goldfingers Aesthetics & Plastic Surgery in',
//         },
//         {
//           name: 'titleLarge',
//           type: 'text',
//           label: 'Title Large Text',
//           required: true,
//           defaultValue: 'Lake Mary',
//         },
//         {
//           name: 'titleColor',
//           type: 'text',
//           label: 'Title Color',
//         },
//         {
//           name: 'introText',
//           type: 'richText',
//           label: 'Intro Text',
//         },
//         {
//           name: 'textColor',
//           type: 'text',
//           label: 'Text Color',
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
//               defaultValue: 'sunset over scenic swampland',
//             },
//           ],
//         },
//       ],
//     },
//     // Column Module with Logo
//     {
//       name: 'columnWithLogoSection',
//       type: 'group',
//       label: 'Column with Logo Section',
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
//           name: 'paddingBottom',
//           type: 'checkbox',
//           label: 'Remove Bottom Padding',
//           defaultValue: true,
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
//         },
//         {
//           name: 'maxWidth',
//           type: 'select',
//           label: 'Content Max Width',
//           options: [
//             { label: '80%', value: 'mw-80' },
//             { label: '90%', value: 'mw-90' },
//             { label: '100%', value: 'mw-100' },
//           ],
//           defaultValue: 'mw-80',
//         },
//         {
//           name: 'textAlign',
//           type: 'select',
//           label: 'Text Alignment',
//           options: [
//             { label: 'Left', value: 'text-left' },
//             { label: 'Center', value: 'text-center' },
//             { label: 'Right', value: 'text-right' },
//           ],
//           defaultValue: 'text-center',
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
//             },
//             {
//               name: 'url',
//               type: 'text',
//               label: 'Button URL',
//             },
//             {
//               name: 'className',
//               type: 'text',
//               label: 'Button Class',
//               defaultValue: 'btn',
//             },
//           ],
//         },
//       ],
//     },
//     // Box Grid Section
//     {
//       name: 'boxGridSection',
//       type: 'group',
//       label: 'Box Grid Section',
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
//           name: 'option',
//           type: 'select',
//           label: 'Grid Option',
//           options: [
//             { label: 'Option 1', value: 'option-1' },
//             { label: 'Option 2', value: 'option-2' },
//             { label: 'Option 3', value: 'option-3' },
//           ],
//           defaultValue: 'option-1',
//         },
//         {
//           name: 'wider',
//           type: 'checkbox',
//           label: 'Wider Layout',
//           defaultValue: true,
//         },
//         {
//           name: 'boxes',
//           type: 'array',
//           label: 'Boxes',
//           admin: {
//             description: 'Drag to reorder boxes',
//           },
//           fields: [
//             {
//               name: 'heading',
//               type: 'text',
//               label: 'Box Heading',
//               required: true,
//             },
//             {
//               name: 'headingColor',
//               type: 'text',
//               label: 'Heading Color',
//             },
//             {
//               name: 'content',
//               type: 'richText',
//               label: 'Box Content',
//             },
//             {
//               name: 'textColor',
//               type: 'text',
//               label: 'Content Text Color',
//             },
//           ],
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
//               defaultValue: 'Background media',
//             },
//           ],
//         },
//       ],
//     },
//     // Column with Media Section
//     {
//       name: 'columnWithMediaSection',
//       type: 'group',
//       label: 'Column with Media Section',
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
//           name: 'mediaPosition',
//           type: 'select',
//           label: 'Media Position',
//           options: [
//             { label: 'Left', value: 'media-left' },
//             { label: 'Right', value: 'media-right' },
//           ],
//           defaultValue: 'media-left',
//         },
//         {
//           name: 'paddingTop',
//           type: 'checkbox',
//           label: 'Remove Top Padding',
//           defaultValue: true,
//         },
//         {
//           name: 'marginBottom',
//           type: 'text',
//           label: 'Margin Bottom Class',
//           defaultValue: 'mb-30',
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
//               defaultValue: 'white sand beach',
//             },
//           ],
//         },
//       ],
//     },
//     // Banner Section 1
//     {
//       name: 'bannerSection1',
//       type: 'group',
//       label: 'Banner Section 1',
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
//           name: 'theme',
//           type: 'select',
//           label: 'Theme',
//           options: [
//             { label: 'Dark', value: 'dark' },
//             { label: 'Light', value: 'light' },
//           ],
//           defaultValue: 'dark',
//         },
//         {
//           name: 'hideDivider',
//           type: 'checkbox',
//           label: 'Hide Divider',
//           defaultValue: true,
//         },
//         {
//           name: 'backgroundClass',
//           type: 'text',
//           label: 'Background Class',
//           admin: {
//             description: 'CSS class for background styling (e.g., background-2)',
//           },
//         },
//         {
//           name: 'content',
//           type: 'richText',
//           label: 'Content',
//           required: true,
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
//       ],
//     },
//     // Two Column Section
//     {
//       name: 'twoColumnSection',
//       type: 'group',
//       label: 'Two Column Section',
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
//           name: 'paddingBottom',
//           type: 'text',
//           label: 'Padding Bottom Class',
//           defaultValue: 'pb-20',
//         },
//         {
//           name: 'verticalAlign',
//           type: 'checkbox',
//           label: 'Vertical Align',
//           defaultValue: true,
//         },
//         {
//           name: 'columns',
//           type: 'array',
//           label: 'Content Columns',
//           maxRows: 2,
//           fields: [
//             {
//               name: 'content',
//               type: 'richText',
//               label: 'Column Content',
//               required: true,
//             },
//             {
//               name: 'animationClass',
//               type: 'select',
//               label: 'Animation Class',
//               options: [
//                 { label: 'Fade In Left', value: 'fadeInLeft' },
//                 { label: 'Fade In Right', value: 'fadeInRight' },
//                 { label: 'None', value: '' },
//               ],
//             },
//           ],
//         },
//       ],
//     },
//     // Half Image Section
//     {
//       name: 'halfImageSection',
//       type: 'group',
//       label: 'Half Image Section',
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
//           name: 'animationClass',
//           type: 'select',
//           label: 'Animation',
//           options: [
//             { label: 'Fade In Left', value: 'fadeInLeft' },
//             { label: 'Fade In Right', value: 'fadeInRight' },
//             { label: 'Fade In Up', value: 'fadeInUp' },
//             { label: 'None', value: '' },
//           ],
//           defaultValue: 'fadeInLeft',
//         },
//         {
//           name: 'marginTop',
//           type: 'text',
//           label: 'Margin Top Class',
//           defaultValue: 'mt-0',
//         },
//         {
//           name: 'marginBottom',
//           type: 'text',
//           label: 'Margin Bottom Class',
//           defaultValue: 'mb-0',
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
//           name: 'copyPadding',
//           type: 'select',
//           label: 'Copy Padding',
//           options: [
//             { label: 'Padded', value: 'padded' },
//             { label: 'Padded 2', value: 'padded2' },
//             { label: 'None', value: '' },
//           ],
//           defaultValue: 'padded2',
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
//               defaultValue: 'Geese over swampland at sunset',
//             },
//           ],
//         },
//       ],
//     },
//     // Simple Column Section
//     {
//       name: 'simpleColumnSection',
//       type: 'group',
//       label: 'Simple Column Section',
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
//           name: 'marginBottom',
//           type: 'text',
//           label: 'Margin Bottom Class',
//           defaultValue: 'mb-30',
//         },
//         {
//           name: 'marginTop',
//           type: 'text',
//           label: 'Margin Top Class',
//         },
//         {
//           name: 'layoutType',
//           type: 'select',
//           label: 'Layout Type',
//           options: [
//             { label: 'Single Column', value: 'single' },
//             { label: 'Two Columns', value: 'two-columns' },
//           ],
//           defaultValue: 'single',
//         },
//         {
//           name: 'verticalAlign',
//           type: 'checkbox',
//           label: 'Vertical Align (Two Columns)',
//           defaultValue: false,
//         },
//         {
//           name: 'heading',
//           type: 'text',
//           label: 'Heading',
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
//     // Banner Section 2 (with Lists)
//     {
//       name: 'bannerSection2',
//       type: 'group',
//       label: 'Banner Section 2 (Services/Lists)',
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
//           name: 'theme',
//           type: 'select',
//           label: 'Theme',
//           options: [
//             { label: 'Dark', value: 'dark' },
//             { label: 'Light', value: 'light' },
//           ],
//           defaultValue: 'dark',
//         },
//         {
//           name: 'hideDivider',
//           type: 'checkbox',
//           label: 'Hide Divider',
//           defaultValue: true,
//         },
//         {
//           name: 'backgroundClass',
//           type: 'text',
//           label: 'Background Class',
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
//           name: 'introContent',
//           type: 'richText',
//           label: 'Intro Content',
//         },
//         {
//           name: 'listType',
//           type: 'select',
//           label: 'List Display Type',
//           options: [
//             { label: 'Columns', value: 'columns' },
//             { label: 'Standard', value: 'standard' },
//           ],
//           defaultValue: 'columns',
//         },
//         {
//           name: 'servicesList',
//           type: 'array',
//           label: 'Services/Items List',
//           admin: {
//             description: 'Drag to reorder items',
//           },
//           fields: [
//             {
//               name: 'title',
//               type: 'text',
//               label: 'Item Title',
//               required: true,
//             },
//             {
//               name: 'titleLink',
//               type: 'text',
//               label: 'Title Link URL',
//             },
//             {
//               name: 'isBold',
//               type: 'checkbox',
//               label: 'Bold Title',
//               defaultValue: true,
//             },
//             {
//               name: 'description',
//               type: 'textarea',
//               label: 'Description',
//             },
//           ],
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
//       ],
//     },
//     // CTA Section
//     {
//       name: 'ctaSection',
//       type: 'group',
//       label: 'CTA Section',
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
//           name: 'backgroundClass',
//           type: 'text',
//           label: 'Background Class',
//           defaultValue: 'background-3',
//         },
//         {
//           name: 'textColor',
//           type: 'text',
//           label: 'Text Color',
//         },
//         {
//           name: 'theme',
//           type: 'select',
//           label: 'Theme',
//           options: [
//             { label: 'Dark', value: 'dark' },
//             { label: 'Light', value: 'light' },
//           ],
//         },
//         {
//           name: 'thin',
//           type: 'checkbox',
//           label: 'Thin Layout',
//           defaultValue: true,
//         },
//         {
//           name: 'marginTop',
//           type: 'text',
//           label: 'Margin Top Class',
//           defaultValue: 'mt-0',
//         },
//         {
//           name: 'marginBottom',
//           type: 'text',
//           label: 'Margin Bottom Class',
//           defaultValue: 'mb-0',
//         },
//         {
//           name: 'animationClass',
//           type: 'select',
//           label: 'Animation',
//           options: [
//             { label: 'Fade In Right', value: 'fadeInRight' },
//             { label: 'Fade In Left', value: 'fadeInLeft' },
//             { label: 'Fade In Up', value: 'fadeInUp' },
//             { label: 'None', value: '' },
//           ],
//           defaultValue: 'fadeInRight',
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
//               name: 'className',
//               type: 'text',
//               label: 'Button Class',
//               defaultValue: 'btn white',
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
//             { label: 'Column with Logo', value: 'columnWithLogo' },
//             { label: 'Box Grid', value: 'boxGrid' },
//             { label: 'Column with Media', value: 'columnWithMedia' },
//             { label: 'Banner 1', value: 'banner1' },
//             { label: 'Two Column', value: 'twoColumn' },
//             { label: 'Half Image', value: 'halfImage' },
//             { label: 'Simple Column', value: 'simpleColumn' },
//             { label: 'Banner 2 (Services)', value: 'banner2' },
//             { label: 'CTA', value: 'cta' },
//           ],
//         },
//       ],
//       defaultValue: [
//         { section: 'hero' },
//         { section: 'columnWithLogo' },
//         { section: 'boxGrid' },
//         { section: 'columnWithMedia' },
//         { section: 'banner1' },
//         { section: 'twoColumn' },
//         { section: 'halfImage' },
//         { section: 'simpleColumn' },
//         { section: 'banner2' },
//         { section: 'cta' },
//       ],
//     },
//     // Global Styles
//     {
//       name: 'globalStyles',
//       type: 'group',
//       label: 'Global Styles',
//       fields: [
//         {
//           name: 'primaryColor',
//           type: 'text',
//           label: 'Primary Color',
//         },
//         {
//           name: 'secondaryColor',
//           type: 'text',
//           label: 'Secondary Color',
//         },
//         {
//           name: 'textColor',
//           type: 'text',
//           label: 'Default Text Color',
//         },
//         {
//           name: 'linkColor',
//           type: 'text',
//           label: 'Link Color',
//         },
//         {
//           name: 'headingColor',
//           type: 'text',
//           label: 'Default Heading Color',
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
//           name: 'keywords',
//           type: 'text',
//           label: 'Keywords',
//         },
//         {
//           name: 'ogImage',
//           type: 'upload',
//           relationTo: 'media',
//           label: 'Open Graph Image',
//         },
//       ],
//     },
//     // Page Settings
//     {
//       name: 'pageSettings',
//       type: 'group',
//       label: 'Page Settings',
//       fields: [
//         {
//           name: 'containerClass',
//           type: 'text',
//           label: 'Main Container Class',
//           defaultValue: 'container',
//         },
//         {
//           name: 'viewportClass',
//           type: 'text',
//           label: 'Viewport Class',
//           defaultValue: 'viewport',
//         },
//         {
//           name: 'enableAnimations',
//           type: 'checkbox',
//           label: 'Enable WOW Animations',
//           defaultValue: true,
//         },
//       ],
//     },
//     {
//       name: 'isActive',
//       type: 'checkbox',
//       label: 'Active',
//       defaultValue: true,
//     },
//   ],
//   timestamps: true,
// }

import { CollectionConfig } from 'payload'

export const LakeMaryPageComponent: CollectionConfig = {
  slug: 'lake-mary-page-component',
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
      defaultValue: 'Lake Mary Page Component',
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
          type: 'group',
          label: 'Title',
          fields: [
            {
              name: 'smallText',
              type: 'text',
              label: 'Small Text',
              defaultValue: 'Goldfingers Aesthetics & Plastic Surgery in',
            },
            {
              name: 'mainText',
              type: 'text',
              label: 'Main Text',
              required: true,
              defaultValue: 'Lake Mary',
            },
            {
              name: 'color',
              type: 'text',
              label: 'Title Color',
            },
          ],
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Description',
          defaultValue:
            'Welcome to Goldfingers Aesthetics & Plastic Surgery in Lake Mary, where natural beauty is our passion.',
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
              defaultValue: 'sunset over scenic swampland',
            },
          ],
        },
      ],
    },
    // Intro Column Section (Discover Our Aesthetic Services)
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
          name: 'paddingBottom',
          type: 'checkbox',
          label: 'No Padding Bottom',
          defaultValue: true,
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
          defaultValue: 'Discover Our Aesthetic Services',
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
              defaultValue: 'Explore Our Medical Spa Services',
            },
            {
              name: 'url',
              type: 'text',
              label: 'Button URL',
              defaultValue: '/lake-mary/medical-spa/',
            },
            {
              name: 'className',
              type: 'text',
              label: 'Button Class',
              defaultValue: 'btn',
            },
          ],
        },
        {
          name: 'maxWidth',
          type: 'text',
          label: 'Max Width Class',
          defaultValue: 'mw-80',
        },
        {
          name: 'textAlign',
          type: 'text',
          label: 'Text Align',
          defaultValue: 'text-center',
        },
      ],
    },
    // Box Grid Section (Excellence)
    {
      name: 'boxGridSection',
      type: 'group',
      label: 'Box Grid Section (Excellence)',
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
          name: 'layoutOption',
          type: 'select',
          label: 'Layout Option',
          options: [
            { label: 'Option 1', value: 'option-1' },
            { label: 'Option 2', value: 'option-2' },
            { label: 'Default', value: 'default' },
          ],
          defaultValue: 'option-1',
        },
        {
          name: 'noBg',
          type: 'checkbox',
          label: 'No Background',
          defaultValue: true,
        },
        {
          name: 'wider',
          type: 'checkbox',
          label: 'Wider Layout',
          defaultValue: true,
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
              type: 'richText',
              label: 'Box Content',
            },
            {
              name: 'contentColor',
              type: 'text',
              label: 'Content Color',
            },
            {
              name: 'animationClass',
              type: 'text',
              label: 'Animation Class',
              defaultValue: 'fadeInUp',
            },
          ],
        },
      ],
    },
    // Column with Media Section (Top 1% Provider)
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
          name: 'paddingTop',
          type: 'checkbox',
          label: 'No Padding Top',
          defaultValue: true,
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
              defaultValue: 'white sand beach',
            },
          ],
        },
      ],
    },
    // Banner Section 1 (Florida's Premier)
    {
      name: 'bannerSection1',
      type: 'group',
      label: 'Banner Section 1 (Premier)',
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
          name: 'darkMode',
          type: 'checkbox',
          label: 'Dark Mode',
          defaultValue: true,
        },
        {
          name: 'hideDivider',
          type: 'checkbox',
          label: 'Hide Divider',
          defaultValue: true,
        },
        {
          name: 'backgroundClass',
          type: 'text',
          label: 'Background Class',
          defaultValue: 'background-2',
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
          type: 'text',
          label: 'Animation Class',
          defaultValue: 'fadeInUp',
        },
      ],
    },
    // Two Column Section (Meet Dr. James Young)
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
          name: 'paddingBottom',
          type: 'text',
          label: 'Padding Bottom',
          defaultValue: 'pb-20',
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
          maxRows: 2,
          fields: [
            {
              name: 'content',
              type: 'richText',
              label: 'Column Content',
              required: true,
            },
            {
              name: 'animationClass',
              type: 'select',
              label: 'Animation Class',
              options: [
                { label: 'Fade In Left', value: 'fadeInLeft' },
                { label: 'Fade In Right', value: 'fadeInRight' },
                { label: 'Fade In Up', value: 'fadeInUp' },
                { label: 'None', value: '' },
              ],
            },
          ],
        },
      ],
    },
    // Half Image Section (Our Talented Team)
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
          name: 'flipped',
          type: 'checkbox',
          label: 'Flipped Layout (Image on Right)',
          defaultValue: false,
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
          name: 'animationClass',
          type: 'text',
          label: 'Animation Class',
          defaultValue: 'fadeInLeft',
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
          name: 'content',
          type: 'richText',
          label: 'Content',
        },
        {
          name: 'paddedContent',
          type: 'checkbox',
          label: 'Padded Content',
          defaultValue: true,
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
              defaultValue: 'Geese over swampland at sunset',
            },
          ],
        },
      ],
    },
    // Story Column Section (Your Transformation)
    {
      name: 'storyColumnSection',
      type: 'group',
      label: 'Story Column Section',
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
          name: 'marginBottom',
          type: 'text',
          label: 'Margin Bottom',
          defaultValue: 'mb-30',
        },
        {
          name: 'twoColumns',
          type: 'checkbox',
          label: 'Two Column Layout',
          defaultValue: true,
        },
        {
          name: 'verticalAlign',
          type: 'checkbox',
          label: 'Vertical Align',
          defaultValue: true,
        },
        {
          name: 'heading',
          type: 'richText',
          label: 'Heading',
          required: true,
        },
        {
          name: 'content',
          type: 'richText',
          label: 'Content',
        },
      ],
    },
    // Banner Section 2 (Expert Services)
    {
      name: 'bannerSection2',
      type: 'group',
      label: 'Banner Section 2 (Expert Services)',
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
          name: 'darkMode',
          type: 'checkbox',
          label: 'Dark Mode',
          defaultValue: true,
        },
        {
          name: 'hideDivider',
          type: 'checkbox',
          label: 'Hide Divider',
          defaultValue: true,
        },
        {
          name: 'backgroundClass',
          type: 'text',
          label: 'Background Class',
          defaultValue: 'background-4',
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
          name: 'servicesList',
          type: 'array',
          label: 'Services List',
          admin: {
            description: 'Drag to reorder services',
          },
          fields: [
            {
              name: 'serviceName',
              type: 'text',
              label: 'Service Name',
              required: true,
            },
            {
              name: 'serviceUrl',
              type: 'text',
              label: 'Service URL',
            },
            {
              name: 'description',
              type: 'textarea',
              label: 'Service Description',
            },
            {
              name: 'isBold',
              type: 'checkbox',
              label: 'Bold Service Name',
              defaultValue: true,
            },
          ],
        },
        {
          name: 'listColumns',
          type: 'checkbox',
          label: 'Display as Columns',
          defaultValue: true,
        },
        {
          name: 'animationClass',
          type: 'text',
          label: 'Animation Class',
          defaultValue: 'fadeInUp',
        },
      ],
    },
    // Column with Media Section 2 (Enhancing Beauty)
    {
      name: 'columnMediaSection2',
      type: 'group',
      label: 'Column with Media Section 2',
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
          name: 'mediaPosition',
          type: 'select',
          label: 'Media Position',
          options: [
            { label: 'Left', value: 'media-left' },
            { label: 'Right', value: 'media-right' },
          ],
          defaultValue: 'media-right',
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
          type: 'richText',
          label: 'Heading',
          required: true,
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
    // CTA Section
    {
      name: 'ctaSection',
      type: 'group',
      label: 'CTA Section',
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
          name: 'backgroundClass',
          type: 'text',
          label: 'Background Class',
          defaultValue: 'background-3',
        },
        {
          name: 'thin',
          type: 'checkbox',
          label: 'Thin Layout',
          defaultValue: true,
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
          name: 'animationClass',
          type: 'text',
          label: 'Animation Class',
          defaultValue: 'fadeInRight',
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
          defaultValue: '/contact/?location=165421400',
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
              defaultValue: '/contact/?location=165421400',
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
    // Story Column Section 2 (Dr. James Young Legacy)
    {
      name: 'storyColumnSection2',
      type: 'group',
      label: 'Story Column Section 2',
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
    // Banner Section 3 (Plastic Surgery)
    {
      name: 'bannerSection3',
      type: 'group',
      label: 'Banner Section 3 (Plastic Surgery)',
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
          name: 'darkMode',
          type: 'checkbox',
          label: 'Dark Mode',
          defaultValue: true,
        },
        {
          name: 'hideDivider',
          type: 'checkbox',
          label: 'Hide Divider',
          defaultValue: true,
        },
        {
          name: 'backgroundClass',
          type: 'text',
          label: 'Background Class',
          defaultValue: 'background-14',
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
          name: 'servicesList',
          type: 'array',
          label: 'Services List',
          admin: {
            description: 'Drag to reorder services',
          },
          fields: [
            {
              name: 'serviceName',
              type: 'text',
              label: 'Service Name',
              required: true,
            },
            {
              name: 'serviceUrl',
              type: 'text',
              label: 'Service URL',
            },
            {
              name: 'description',
              type: 'textarea',
              label: 'Service Description',
            },
            {
              name: 'isBold',
              type: 'checkbox',
              label: 'Bold Service Name',
              defaultValue: true,
            },
          ],
        },
        {
          name: 'listColumns',
          type: 'checkbox',
          label: 'Display as Columns',
          defaultValue: true,
        },
        {
          name: 'animationClass',
          type: 'text',
          label: 'Animation Class',
          defaultValue: 'fadeInUp',
        },
      ],
    },
    // Final Story Column Section (Embrace True Beauty)
    {
      name: 'finalStorySection',
      type: 'group',
      label: 'Final Story Column Section',
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
          name: 'marginTop',
          type: 'text',
          label: 'Margin Top',
          defaultValue: 'mt-30',
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
            { label: 'Intro Column', value: 'introColumn' },
            { label: 'Box Grid Section', value: 'boxGrid' },
            { label: 'Column with Media 1', value: 'columnMedia1' },
            { label: 'Banner 1 (Premier)', value: 'banner1' },
            { label: 'Two Column (Dr. Young)', value: 'twoColumn' },
            { label: 'Half Image (Talented Team)', value: 'halfImage' },
            { label: 'Story Column 1', value: 'story1' },
            { label: 'Banner 2 (Expert Services)', value: 'banner2' },
            { label: 'Column with Media 2', value: 'columnMedia2' },
            { label: 'CTA Section', value: 'cta' },
            { label: 'Story Column 2 (Legacy)', value: 'story2' },
            { label: 'Banner 3 (Plastic Surgery)', value: 'banner3' },
            { label: 'Final Story Section', value: 'finalStory' },
          ],
        },
      ],
      defaultValue: [
        { section: 'hero' },
        { section: 'introColumn' },
        { section: 'boxGrid' },
        { section: 'columnMedia1' },
        { section: 'banner1' },
        { section: 'twoColumn' },
        { section: 'halfImage' },
        { section: 'story1' },
        { section: 'banner2' },
        { section: 'columnMedia2' },
        { section: 'cta' },
        { section: 'story2' },
        { section: 'banner3' },
        { section: 'finalStory' },
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
          name: 'headingColor',
          type: 'text',
          label: 'Default Heading Color',
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
    // Advanced Settings
    {
      name: 'advancedSettings',
      type: 'group',
      label: 'Advanced Settings',
      fields: [
        {
          name: 'customCSS',
          type: 'textarea',
          label: 'Custom CSS',
          admin: {
            description: 'Add custom CSS styles for this page',
          },
        },
        {
          name: 'customClasses',
          type: 'text',
          label: 'Custom Body Classes',
          admin: {
            description: 'Add custom classes to the body element',
          },
        },
        {
          name: 'scripts',
          type: 'array',
          label: 'Custom Scripts',
          admin: {
            description: 'Add custom JavaScript for this page',
          },
          fields: [
            {
              name: 'scriptContent',
              type: 'textarea',
              label: 'Script Content',
            },
            {
              name: 'position',
              type: 'select',
              label: 'Script Position',
              options: [
                { label: 'Head', value: 'head' },
                { label: 'Body End', value: 'bodyEnd' },
              ],
              defaultValue: 'bodyEnd',
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
        description: 'Enable/disable this page component',
      },
    },
  ],
  timestamps: true,
}