// import { CollectionConfig } from 'payload'

// export const WeightLossPageComponent: CollectionConfig = {
//   slug: 'weight-loss-page-component',
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
//       defaultValue: 'Weight Loss Page Component',
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
//           defaultValue: [
//             {
//               label: 'Home',
//               url: '/',
//               ariaLabel: 'Breadcrumbs to help navigate the user',
//             },
//             {
//               label: 'Medical Spa',
//               url: '/medical-spa/',
//               ariaLabel: 'Breadcrumbs to help navigate the user',
//             },
//             {
//               label: 'Weightloss',
//               url: '/medical-spa/weightloss/',
//               ariaLabel: 'Breadcrumbs to help navigate the user',
//             },
//           ],
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
//           defaultValue: 'Weight Loss',
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
//           admin: {
//             description: 'Main description text in hero section',
//           },
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
//               defaultValue: 'Call (407) 461 8966',
//             },
//             {
//               name: 'url',
//               type: 'text',
//               label: 'Button URL',
//               defaultValue: 'tel:+14074618966',
//             },
//             {
//               name: 'className',
//               type: 'text',
//               label: 'Button Class',
//               defaultValue: 'btn white',
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
//               defaultValue: 'Blond woman smiling from couch',
//             },
//           ],
//         },
//       ],
//     },
//     // Two Column Section (Special Images)
//     {
//       name: 'twoColumnSection',
//       type: 'group',
//       label: 'Two Column Section (Special Images)',
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
//           name: 'leftColumn',
//           type: 'group',
//           label: 'Left Column',
//           fields: [
//             {
//               name: 'content',
//               type: 'richText',
//               label: 'Content',
//             },
//             {
//               name: 'animation',
//               type: 'select',
//               label: 'Animation',
//               options: [
//                 { label: 'None', value: 'none' },
//                 { label: 'Fade In Left', value: 'fadeInLeft' },
//                 { label: 'Fade In Right', value: 'fadeInRight' },
//                 { label: 'Fade In Up', value: 'fadeInUp' },
//               ],
//               defaultValue: 'fadeInLeft',
//             },
//           ],
//         },
//         {
//           name: 'rightColumn',
//           type: 'group',
//           label: 'Right Column',
//           fields: [
//             {
//               name: 'content',
//               type: 'richText',
//               label: 'Content',
//             },
//             {
//               name: 'animation',
//               type: 'select',
//               label: 'Animation',
//               options: [
//                 { label: 'None', value: 'none' },
//                 { label: 'Fade In Left', value: 'fadeInLeft' },
//                 { label: 'Fade In Right', value: 'fadeInRight' },
//                 { label: 'Fade In Up', value: 'fadeInUp' },
//               ],
//               defaultValue: 'fadeInRight',
//             },
//           ],
//         },
//       ],
//     },
//     // Banner Section 1 (Semaglutide Info)
//     {
//       name: 'bannerSection1',
//       type: 'group',
//       label: 'Banner Section 1 (Semaglutide Info)',
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
//             { label: 'Light', value: 'light' },
//             { label: 'Dark', value: 'dark' },
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
//           name: 'heading',
//           type: 'text',
//           label: 'Heading',
//           required: true,
//           defaultValue: 'Semaglutide Injections - Goldfingers Aesthetics',
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
//             { label: 'Left', value: 'text-left' },
//             { label: 'Center', value: 'text-center' },
//             { label: 'Right', value: 'text-right' },
//           ],
//           defaultValue: 'text-center',
//         },
//         {
//           name: 'content',
//           type: 'richText',
//           label: 'Content',
//         },
//         {
//           name: 'contentLayout',
//           type: 'select',
//           label: 'Content Layout',
//           options: [
//             { label: 'Single Column', value: 'single' },
//             { label: 'Two Columns', value: 'columns-two' },
//           ],
//           defaultValue: 'columns-two',
//         },
//       ],
//     },
//     // Video Section
//     {
//       name: 'videoSection',
//       type: 'group',
//       label: 'Video Section',
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
//           name: 'heading',
//           type: 'text',
//           label: 'Heading',
//           required: true,
//           defaultValue: 'Semaglutide Break Down with Dr. James Young',
//         },
//         {
//           name: 'headingColor',
//           type: 'text',
//           label: 'Heading Color',
//         },
//         {
//           name: 'videoUrl',
//           type: 'text',
//           label: 'Video URL',
//           required: true,
//           defaultValue: 'https://www.youtube.com/watch?v=CFn2tvYQLV0',
//           admin: {
//             description: 'YouTube or Vimeo URL',
//           },
//         },
//         {
//           name: 'thumbnail',
//           type: 'group',
//           label: 'Video Thumbnail',
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
//               defaultValue: 'Video thumbnail',
//             },
//           ],
//         },
//         {
//           name: 'copyAnimation',
//           type: 'select',
//           label: 'Copy Animation',
//           options: [
//             { label: 'None', value: 'none' },
//             { label: 'Fade In Left', value: 'fadeInLeft' },
//             { label: 'Fade In Right', value: 'fadeInRight' },
//           ],
//           defaultValue: 'fadeInLeft',
//         },
//         {
//           name: 'mediaAnimation',
//           type: 'select',
//           label: 'Media Animation',
//           options: [
//             { label: 'None', value: 'none' },
//             { label: 'Fade In Left', value: 'fadeInLeft' },
//             { label: 'Fade In Right', value: 'fadeInRight' },
//           ],
//           defaultValue: 'fadeInRight',
//         },
//       ],
//     },
//     // Half Image Section (Package Details)
//     {
//       name: 'halfImageSection',
//       type: 'group',
//       label: 'Half Image Section (Package Details)',
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
//             { label: 'Top', value: 'top-aligned' },
//             { label: 'Center', value: 'center-aligned' },
//             { label: 'Bottom', value: 'bottom-aligned' },
//           ],
//           defaultValue: 'top-aligned',
//         },
//         {
//           name: 'marginBottom',
//           type: 'text',
//           label: 'Margin Bottom',
//           admin: {
//             description: 'CSS margin value (e.g., 0, 30px)',
//           },
//           defaultValue: '0',
//         },
//         {
//           name: 'heading',
//           type: 'text',
//           label: 'Heading',
//           required: true,
//           defaultValue: 'Our 3-month weight loss package includes:',
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
//               label: 'Bullet Point Text',
//               required: true,
//             },
//           ],
//         },
//         {
//           name: 'listLayout',
//           type: 'select',
//           label: 'List Layout',
//           options: [
//             { label: 'Single Column', value: 'single' },
//             { label: 'Two Columns', value: 'columns' },
//           ],
//           defaultValue: 'columns',
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
//               defaultValue: 'Smiling brunette in white bikini',
//             },
//           ],
//         },
//       ],
//     },
//     // Two Column Section 2 (Medical History)
//     {
//       name: 'twoColumnSection2',
//       type: 'group',
//       label: 'Two Column Section 2 (Medical History)',
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
//             description: 'CSS padding value (e.g., 20px, 2rem)',
//           },
//           defaultValue: '20px',
//         },
//         {
//           name: 'verticalAlign',
//           type: 'checkbox',
//           label: 'Vertical Align Content',
//           defaultValue: true,
//         },
//         {
//           name: 'leftColumn',
//           type: 'group',
//           label: 'Left Column',
//           fields: [
//             {
//               name: 'content',
//               type: 'richText',
//               label: 'Content',
//             },
//             {
//               name: 'animation',
//               type: 'select',
//               label: 'Animation',
//               options: [
//                 { label: 'None', value: 'none' },
//                 { label: 'Fade In Left', value: 'fadeInLeft' },
//                 { label: 'Fade In Right', value: 'fadeInRight' },
//               ],
//               defaultValue: 'fadeInLeft',
//             },
//           ],
//         },
//         {
//           name: 'rightColumn',
//           type: 'group',
//           label: 'Right Column',
//           fields: [
//             {
//               name: 'bulletPoints',
//               type: 'array',
//               label: 'Bullet Points',
//               admin: {
//                 description: 'Drag to reorder bullet points',
//               },
//               fields: [
//                 {
//                   name: 'text',
//                   type: 'text',
//                   label: 'Bullet Point Text',
//                   required: true,
//                 },
//               ],
//             },
//             {
//               name: 'listLayout',
//               type: 'select',
//               label: 'List Layout',
//               options: [
//                 { label: 'Single Column', value: 'single' },
//                 { label: 'Two Columns', value: 'columns' },
//               ],
//               defaultValue: 'columns',
//             },
//             {
//               name: 'animation',
//               type: 'select',
//               label: 'Animation',
//               options: [
//                 { label: 'None', value: 'none' },
//                 { label: 'Fade In Left', value: 'fadeInLeft' },
//                 { label: 'Fade In Right', value: 'fadeInRight' },
//               ],
//               defaultValue: 'fadeInRight',
//             },
//           ],
//         },
//       ],
//     },
//     // Banner Section 2 (Health Benefits)
//     {
//       name: 'bannerSection2',
//       type: 'group',
//       label: 'Banner Section 2 (Health Benefits)',
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
//             { label: 'Light', value: 'light' },
//             { label: 'Dark', value: 'dark' },
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
//           name: 'heading',
//           type: 'text',
//           label: 'Heading',
//           required: true,
//           defaultValue:
//             'Some of the health benefits associated with Semaglutide include the following:',
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
//             { label: 'Left', value: 'text-left' },
//             { label: 'Center', value: 'text-center' },
//             { label: 'Right', value: 'text-right' },
//           ],
//           defaultValue: 'text-center',
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
//               label: 'Bullet Point Text',
//               required: true,
//             },
//           ],
//         },
//         {
//           name: 'listLayout',
//           type: 'select',
//           label: 'List Layout',
//           options: [
//             { label: 'Single Column', value: 'single' },
//             { label: 'Two Columns', value: 'columns' },
//             { label: 'Three Columns', value: 'columns-three' },
//           ],
//           defaultValue: 'columns',
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
//             { label: 'Two Column Section (Special Images)', value: 'twoColumn' },
//             { label: 'Banner Section 1 (Semaglutide Info)', value: 'banner1' },
//             { label: 'Video Section', value: 'video' },
//             { label: 'Half Image Section (Package Details)', value: 'halfImage' },
//             { label: 'Two Column Section 2 (Medical History)', value: 'twoColumn2' },
//             { label: 'Banner Section 2 (Health Benefits)', value: 'banner2' },
//           ],
//         },
//       ],
//       defaultValue: [
//         { section: 'hero' },
//         { section: 'twoColumn' },
//         { section: 'banner1' },
//         { section: 'video' },
//         { section: 'halfImage' },
//         { section: 'twoColumn2' },
//         { section: 'banner2' },
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
//           name: 'h3FontSize',
//           type: 'text',
//           label: 'H3 Font Size',
//         },
//         {
//           name: 'h3Color',
//           type: 'text',
//           label: 'H3 Color',
//         },
//         {
//           name: 'h3FontWeight',
//           type: 'text',
//           label: 'H3 Font Weight',
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
//             description: 'Duration for fade in animations (e.g., 0.5s, 1s)',
//           },
//           defaultValue: '1s',
//         },
//         {
//           name: 'slideInDuration',
//           type: 'text',
//           label: 'Slide In Duration',
//           admin: {
//             description: 'Duration for slide in animations',
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
//           defaultValue: 'Weight Loss - Goldfingers Aesthetics and Plastic Surgery',
//         },
//         {
//           name: 'metaDescription',
//           type: 'textarea',
//           label: 'Meta Description',
//           defaultValue:
//             'Semaglutide Injections are offered at Goldfingers Aesthetics under the care of our top medical professionals. Elevate Your Health, Transform Your Life.',
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
//           defaultValue: 'weight loss, semaglutide, Ozempic, GLP-1, medical weight loss, Orlando',
//         },
//         {
//           name: 'canonicalUrl',
//           type: 'text',
//           label: 'Canonical URL',
//           defaultValue: '/medical-spa/weightloss/',
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

// export default WeightLossPageComponent

import { CollectionConfig } from 'payload'

export const WeightLossPageComponent: CollectionConfig = {
  slug: 'weightloss-page-component',
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
      defaultValue: 'Weight Loss Page Component',
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
              label: 'Weightloss',
              url: '/medical-spa/weightloss/',
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
          defaultValue: 'Weight Loss',
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
          admin: {
            description: 'Main description text in hero section',
          },
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
              defaultValue: 'Call (407) 461 8966',
            },
            {
              name: 'url',
              type: 'text',
              label: 'Button URL',
              defaultValue: 'tel:+14074618966',
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
              name: 'buttonClass',
              type: 'text',
              label: 'Button CSS Class',
              defaultValue: 'btn white',
              admin: {
                description: 'Additional CSS classes for styling',
              },
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
              defaultValue: 'Blond woman smiling from couch',
            },
          ],
        },
      ],
    },
    // Two Column Image Section 1
    {
      name: 'twoColumnImageSection1',
      type: 'group',
      label: 'Two Column Image Section 1',
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
          label: 'Container CSS Class',
          defaultValue: 'viewport container',
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
          name: 'leftColumnImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Left Column Image',
        },
        {
          name: 'leftColumnImageAlt',
          type: 'text',
          label: 'Left Column Image Alt Text',
        },
        {
          name: 'rightColumnImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Right Column Image',
        },
        {
          name: 'rightColumnImageAlt',
          type: 'text',
          label: 'Right Column Image Alt Text',
        },
        {
          name: 'animationClass',
          type: 'text',
          label: 'Animation Class',
          admin: {
            description: 'e.g., wow fadeInLeft, wow fadeInRight',
          },
        },
      ],
    },
    // Banner Section 1 (Semaglutide Info)
    {
      name: 'bannerSection1',
      type: 'group',
      label: 'Banner Section 1 (Semaglutide Info)',
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
          defaultValue: 'Semaglutide Injections - Goldfingers Aesthetics',
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
          name: 'content',
          type: 'richText',
          label: 'Content',
        },
        {
          name: 'contentLayout',
          type: 'select',
          label: 'Content Layout',
          options: [
            { label: 'Single Column', value: 'single' },
            { label: 'Two Columns', value: 'columns-two' },
          ],
          defaultValue: 'columns-two',
        },
      ],
    },
    // Video Section
    {
      name: 'videoSection',
      type: 'group',
      label: 'Video Section',
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
          label: 'Container CSS Class',
          defaultValue: 'container',
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Heading',
          required: true,
          defaultValue: 'Semaglutide Break Down with Dr. James Young',
        },
        {
          name: 'headingColor',
          type: 'text',
          label: 'Heading Color',
        },
        {
          name: 'videoUrl',
          type: 'text',
          label: 'Video URL',
          required: true,
          defaultValue: 'https://www.youtube.com/watch?v=CFn2tvYQLV0',
          admin: {
            description: 'YouTube or video URL',
          },
        },
        {
          name: 'videoThumbnail',
          type: 'group',
          label: 'Video Thumbnail',
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
              defaultValue: 'Video thumbnail',
            },
          ],
        },
        {
          name: 'ariaLabel',
          type: 'text',
          label: 'ARIA Label',
          defaultValue: 'Click to view video',
        },
        {
          name: 'animationClass',
          type: 'text',
          label: 'Animation Class',
          defaultValue: 'wow fadeInRight',
        },
      ],
    },
    // Half Image Section 1 (3-month package)
    {
      name: 'halfImageSection1',
      type: 'group',
      label: 'Half Image Section 1 (3-month Package)',
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
          defaultValue: 'top-aligned',
        },
        {
          name: 'marginBottom',
          type: 'text',
          label: 'Margin Bottom',
          defaultValue: 'mb-0',
          admin: {
            description: 'CSS class for margin bottom',
          },
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Heading',
          required: true,
          defaultValue: 'Our 3-month weight loss package includes:',
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
          name: 'bulletPoints',
          type: 'array',
          label: 'Bullet Points',
          admin: {
            description: 'Drag to reorder bullet points',
          },
          defaultValue: [
            { text: 'Complimentary Consult' },
            { text: 'Blood Work Review with our Medical Physician' },
            { text: 'Weekly Pre-Filled Injections' },
            { text: '3 Month Review' },
          ],
          fields: [
            {
              name: 'text',
              type: 'text',
              label: 'Bullet Point Text',
              required: true,
            },
          ],
        },
        {
          name: 'bulletPointsLayout',
          type: 'select',
          label: 'Bullet Points Layout',
          options: [
            { label: 'Single Column', value: 'single' },
            { label: 'Two Columns', value: 'columns' },
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
              defaultValue: 'Smiling brunette in white bikini',
            },
          ],
        },
        {
          name: 'animationClass',
          type: 'text',
          label: 'Animation Class',
          defaultValue: 'wow fadeInLeft',
        },
      ],
    },
    // Two Column Section (Medical History)
    {
      name: 'twoColumnSection',
      type: 'group',
      label: 'Two Column Section (Medical History)',
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
          label: 'Container CSS Class',
          defaultValue: 'viewport container',
        },
        {
          name: 'paddingTop',
          type: 'text',
          label: 'Padding Top',
          defaultValue: 'pt-20',
          admin: {
            description: 'CSS class for padding top',
          },
        },
        {
          name: 'verticalAlign',
          type: 'checkbox',
          label: 'Vertical Align Content',
          defaultValue: true,
        },
        {
          name: 'leftColumnContent',
          type: 'richText',
          label: 'Left Column Content',
        },
        {
          name: 'rightColumnContent',
          type: 'richText',
          label: 'Right Column Content',
        },
        {
          name: 'bulletPoints',
          type: 'array',
          label: 'Bullet Points (Right Column)',
          admin: {
            description: 'Drag to reorder bullet points',
          },
          defaultValue: [
            { text: 'Medullary thyroid carcinoma (a type of thyroid tumor)' },
            { text: 'Pancreatitis' },
            { text: 'Gallbladder disease' },
            { text: 'Low blood sugar (hypoglycemia)' },
            { text: 'Kidney failure' },
            { text: 'Diabetic retinopathy' },
          ],
          fields: [
            {
              name: 'text',
              type: 'text',
              label: 'Bullet Point Text',
              required: true,
            },
          ],
        },
        {
          name: 'bulletPointsLayout',
          type: 'select',
          label: 'Bullet Points Layout',
          options: [
            { label: 'Single Column', value: 'single' },
            { label: 'Two Columns', value: 'columns' },
          ],
          defaultValue: 'columns',
        },
      ],
    },
    // Banner Section 2 (Health Benefits)
    {
      name: 'bannerSection2',
      type: 'group',
      label: 'Banner Section 2 (Health Benefits)',
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
          defaultValue:
            'Some of the health benefits associated with Semaglutide include the following:',
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
          name: 'bulletPoints',
          type: 'array',
          label: 'Bullet Points',
          admin: {
            description: 'Drag to reorder bullet points',
          },
          defaultValue: [
            { text: 'Lower blood sugar without any increase in hypoglycemia' },
            {
              text: 'Reduced body weight, lipids, blood pressure, inflammatory markers, and oxidative stress',
            },
            { text: 'Suppressed appetite' },
            { text: 'Enhanced insulin synthesis and secretion' },
            { text: 'Reduced glucagon levels in fasting and after eating' },
            { text: 'A promoted sensation of fullness in the brain' },
            {
              text: 'Slowed gastric emptying in the intestines to help you feel fuller for longer',
            },
            { text: 'Weight loss' },
            {
              text: 'More significant improvement in cardiovascular risk factors associated with obesity',
            },
          ],
          fields: [
            {
              name: 'text',
              type: 'text',
              label: 'Bullet Point Text',
              required: true,
            },
          ],
        },
        {
          name: 'bulletPointsLayout',
          type: 'select',
          label: 'Bullet Points Layout',
          options: [
            { label: 'Single Column', value: 'single' },
            { label: 'Two Columns', value: 'columns' },
          ],
          defaultValue: 'columns',
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
            { label: 'Two Column Image Section 1', value: 'twoColumnImage1' },
            { label: 'Banner Section 1 (Semaglutide Info)', value: 'banner1' },
            { label: 'Video Section', value: 'video' },
            { label: 'Half Image Section 1 (Package)', value: 'halfImage1' },
            { label: 'Two Column Section (Medical History)', value: 'twoColumn' },
            { label: 'Banner Section 2 (Health Benefits)', value: 'banner2' },
          ],
        },
      ],
      defaultValue: [
        { section: 'hero' },
        { section: 'twoColumnImage1' },
        { section: 'banner1' },
        { section: 'video' },
        { section: 'halfImage1' },
        { section: 'twoColumn' },
        { section: 'banner2' },
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
        {
          name: 'paragraphSpacing',
          type: 'text',
          label: 'Paragraph Spacing',
          admin: {
            description: 'Spacing between paragraphs',
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
        {
          name: 'letterSpacing',
          type: 'text',
          label: 'Button Letter Spacing',
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
            description: 'Duration for fade in animations (e.g., 0.5s, 1s)',
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
          name: 'fadeInUpDuration',
          type: 'text',
          label: 'Fade In Up Duration',
          defaultValue: '1s',
        },
        {
          name: 'fadeInLeftDuration',
          type: 'text',
          label: 'Fade In Left Duration',
          defaultValue: '1s',
        },
        {
          name: 'fadeInRightDuration',
          type: 'text',
          label: 'Fade In Right Duration',
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
        {
          name: 'animationDelay',
          type: 'text',
          label: 'Animation Delay',
          admin: {
            description: 'Delay before animation starts',
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
          defaultValue: 'Weight Loss - Goldfingers Aesthetics and Plastic Surgery',
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          label: 'Meta Description',
          defaultValue:
            'Elevate Your Health, Transform Your Life with Semaglutide weight loss injections at Goldfingers Aesthetics. Professional weight management care in Orlando.',
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
            'weight loss, Semaglutide, Ozempic, weight management, Orlando, medical spa, injections',
        },
        {
          name: 'canonicalUrl',
          type: 'text',
          label: 'Canonical URL',
          defaultValue: '/medical-spa/weightloss/',
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
            description: 'Add custom structured data in JSON-LD format',
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
          name: 'highContrastMode',
          type: 'checkbox',
          label: 'Enable High Contrast Mode',
          defaultValue: false,
        },
        {
          name: 'keyboardNavigationEnabled',
          type: 'checkbox',
          label: 'Enable Keyboard Navigation',
          defaultValue: true,
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
          name: 'mobileStackSections',
          type: 'checkbox',
          label: 'Stack Sections on Mobile',
          defaultValue: true,
          admin: {
            description: 'Stack side-by-side sections vertically on mobile',
          },
        },
        {
          name: 'hideElementsOnMobile',
          type: 'array',
          label: 'Hide Elements on Mobile',
          admin: {
            description: 'Select sections to hide on mobile devices',
          },
          fields: [
            {
              name: 'section',
              type: 'select',
              label: 'Section',
              options: [
                { label: 'Logo', value: 'logo' },
                { label: 'Background Images', value: 'backgroundImages' },
                { label: 'Animations', value: 'animations' },
              ],
            },
          ],
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
        {
          name: 'preloadCriticalAssets',
          type: 'checkbox',
          label: 'Preload Critical Assets',
          defaultValue: true,
        },
        {
          name: 'minifyCSS',
          type: 'checkbox',
          label: 'Minify CSS',
          defaultValue: true,
        },
        {
          name: 'minifyJS',
          type: 'checkbox',
          label: 'Minify JavaScript',
          defaultValue: true,
        },
      ],
    },
    // Video Settings
    {
      name: 'videoSettings',
      type: 'group',
      label: 'Video Settings',
      fields: [
        {
          name: 'autoplay',
          type: 'checkbox',
          label: 'Autoplay Videos',
          defaultValue: false,
        },
        {
          name: 'showControls',
          type: 'checkbox',
          label: 'Show Video Controls',
          defaultValue: true,
        },
        {
          name: 'muted',
          type: 'checkbox',
          label: 'Mute Videos by Default',
          defaultValue: false,
        },
        {
          name: 'loop',
          type: 'checkbox',
          label: 'Loop Videos',
          defaultValue: false,
        },
        {
          name: 'videoPlayerTheme',
          type: 'select',
          label: 'Video Player Theme',
          options: [
            { label: 'Default', value: 'default' },
            { label: 'Light', value: 'light' },
            { label: 'Dark', value: 'dark' },
          ],
          defaultValue: 'default',
        },
      ],
    },
    // Layout Settings
    {
      name: 'layoutSettings',
      type: 'group',
      label: 'Layout Settings',
      fields: [
        {
          name: 'containerWidth',
          type: 'select',
          label: 'Container Width',
          options: [
            { label: 'Default', value: 'default' },
            { label: 'Wide', value: 'wide' },
            { label: 'Full Width', value: 'full' },
            { label: 'Narrow', value: 'narrow' },
          ],
          defaultValue: 'default',
        },
        {
          name: 'sectionPadding',
          type: 'text',
          label: 'Section Padding',
          admin: {
            description: 'Padding for sections (e.g., 40px 0, 3rem 0)',
          },
        },
        {
          name: 'contentAlignment',
          type: 'select',
          label: 'Default Content Alignment',
          options: [
            { label: 'Left', value: 'left' },
            { label: 'Center', value: 'center' },
            { label: 'Right', value: 'right' },
          ],
          defaultValue: 'left',
        },
        {
          name: 'gridGap',
          type: 'text',
          label: 'Grid Gap',
          admin: {
            description: 'Gap between grid items (e.g., 20px, 1.5rem)',
          },
          defaultValue: '20px',
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
          name: 'enabled',
          type: 'checkbox',
          label: 'Enable Custom CSS',
          defaultValue: false,
        },
        {
          name: 'css',
          type: 'textarea',
          label: 'Custom CSS Code',
          admin: {
            description: 'Add custom CSS styles',
            rows: 10,
          },
        },
      ],
    },
    // Custom JavaScript
    {
      name: 'customJS',
      type: 'group',
      label: 'Custom JavaScript',
      fields: [
        {
          name: 'enabled',
          type: 'checkbox',
          label: 'Enable Custom JavaScript',
          defaultValue: false,
        },
        {
          name: 'js',
          type: 'textarea',
          label: 'Custom JavaScript Code',
          admin: {
            description: 'Add custom JavaScript code',
            rows: 10,
          },
        },
        {
          name: 'loadPosition',
          type: 'select',
          label: 'Load Position',
          options: [
            { label: 'Header', value: 'header' },
            { label: 'Footer', value: 'footer' },
          ],
          defaultValue: 'footer',
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
          name: 'customAttributes',
          type: 'array',
          label: 'Custom HTML Attributes',
          fields: [
            {
              name: 'attribute',
              type: 'text',
              label: 'Attribute Name',
              required: true,
            },
            {
              name: 'value',
              type: 'text',
              label: 'Attribute Value',
              required: true,
            },
          ],
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
                description: 'Without "data-" prefix (e.g., "module", "s3-module")',
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
    // Tracking & Analytics
    {
      name: 'trackingSettings',
      type: 'group',
      label: 'Tracking & Analytics',
      fields: [
        {
          name: 'enableTracking',
          type: 'checkbox',
          label: 'Enable Tracking',
          defaultValue: false,
        },
        {
          name: 'googleAnalyticsId',
          type: 'text',
          label: 'Google Analytics ID',
          admin: {
            description: 'e.g., UA-XXXXXXXXX-X or G-XXXXXXXXXX',
          },
        },
        {
          name: 'facebookPixelId',
          type: 'text',
          label: 'Facebook Pixel ID',
        },
        {
          name: 'customTrackingCode',
          type: 'textarea',
          label: 'Custom Tracking Code',
          admin: {
            description: 'Add custom tracking scripts',
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