// import { CollectionConfig } from 'payload'

// export const PortOrangeLocationPageComponent: CollectionConfig = {
//   slug: 'port-orange-location-page-component',
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
//       defaultValue: 'Port Orange Location Page Component',
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
//           name: 'cssClasses',
//           type: 'text',
//           label: 'CSS Classes',
//           defaultValue: 'mod_hero banner mobile-stack',
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
//           type: 'richText',
//           label: 'Title (Rich Text)',
//           required: true,
//         },
//         {
//           name: 'titleColor',
//           type: 'text',
//           label: 'Title Color',
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
//               defaultValue: 'boats at sunset',
//             },
//           ],
//         },
//       ],
//     },
//     // Intro Column Section
//     {
//       name: 'introColumnSection',
//       type: 'group',
//       label: 'Intro Column Section',
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
//           name: 'cssClasses',
//           type: 'text',
//           label: 'CSS Classes',
//           defaultValue: 'mod_column viewport container',
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
//           name: 'ctaButton',
//           type: 'group',
//           label: 'CTA Button',
//           fields: [
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
//     // Banner Section 1
//     {
//       name: 'bannerSection1',
//       type: 'group',
//       label: 'Banner Section 1 (Artistry)',
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
//           name: 'cssClasses',
//           type: 'text',
//           label: 'CSS Classes',
//           defaultValue: 'mod_banner dark hide-divider viewport background-1',
//         },
//         {
//           name: 'animationClass',
//           type: 'select',
//           label: 'Animation Class',
//           options: [
//             { label: 'Fade In Up', value: 'fadeInUp' },
//             { label: 'Fade In Left', value: 'fadeInLeft' },
//             { label: 'Fade In Right', value: 'fadeInRight' },
//             { label: 'None', value: '' },
//           ],
//           defaultValue: 'fadeInUp',
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
//           name: 'content',
//           type: 'richText',
//           label: 'Content',
//           required: true,
//         },
//       ],
//     },
//     // Half Image Section 1
//     {
//       name: 'halfImageSection1',
//       type: 'group',
//       label: 'Half Image Section 1 (Top 1%)',
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
//           name: 'cssClasses',
//           type: 'text',
//           label: 'CSS Classes',
//           defaultValue: 'mod_half_image viewport half-image container wow fadeInLeft',
//         },
//         {
//           name: 'flipped',
//           type: 'checkbox',
//           label: 'Flipped Layout',
//           defaultValue: false,
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
//           name: 'listItems',
//           type: 'array',
//           label: 'List Items',
//           admin: {
//             description: 'Drag to reorder list items',
//           },
//           fields: [
//             {
//               name: 'text',
//               type: 'text',
//               label: 'List Item Text',
//               required: true,
//             },
//           ],
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
//               defaultValue: 'boats in harbor at sunset',
//             },
//           ],
//         },
//       ],
//     },
//     // CTA Section 1
//     {
//       name: 'ctaSection1',
//       type: 'group',
//       label: 'CTA Section 1 (Schedule Consultation)',
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
//           name: 'cssClasses',
//           type: 'text',
//           label: 'CSS Classes',
//           defaultValue:
//             'mod_cta_general viewport container cta thin wow fadeInRight mt-0 mb-0 background-1',
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
//     // Column with Media Section 1
//     {
//       name: 'columnMediaSection1',
//       type: 'group',
//       label: 'Column with Media Section 1 (Premier Med Spa)',
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
//           name: 'cssClasses',
//           type: 'text',
//           label: 'CSS Classes',
//           defaultValue: 'mod_column viewport container has-media',
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
//               defaultValue: 'dock on the ocean',
//             },
//           ],
//         },
//       ],
//     },
//     // Column with Media Section 2
//     {
//       name: 'columnMediaSection2',
//       type: 'group',
//       label: 'Column with Media Section 2 (Customized Services)',
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
//           name: 'cssClasses',
//           type: 'text',
//           label: 'CSS Classes',
//           defaultValue: 'mod_column viewport container has-media',
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
//               defaultValue: 'sconce light fixture',
//             },
//           ],
//         },
//       ],
//     },
//     // Services Banner Section
//     {
//       name: 'servicesBannerSection',
//       type: 'group',
//       label: 'Services Banner Section',
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
//           name: 'cssClasses',
//           type: 'text',
//           label: 'CSS Classes',
//           defaultValue: 'mod_banner dark hide-divider viewport background-6',
//         },
//         {
//           name: 'animationClass',
//           type: 'select',
//           label: 'Animation Class',
//           options: [
//             { label: 'Fade In Up', value: 'fadeInUp' },
//             { label: 'Fade In Left', value: 'fadeInLeft' },
//             { label: 'Fade In Right', value: 'fadeInRight' },
//             { label: 'None', value: '' },
//           ],
//           defaultValue: 'fadeInUp',
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
//           name: 'servicesList',
//           type: 'array',
//           label: 'Services List',
//           admin: {
//             description: 'Drag to reorder services',
//           },
//           fields: [
//             {
//               name: 'serviceName',
//               type: 'text',
//               label: 'Service Name',
//               required: true,
//             },
//             {
//               name: 'serviceUrl',
//               type: 'text',
//               label: 'Service URL',
//             },
//             {
//               name: 'description',
//               type: 'richText',
//               label: 'Service Description',
//             },
//           ],
//         },
//       ],
//     },
//     // Plastic Surgery Box Grid Section
//     {
//       name: 'plasticSurgeryBoxGrid',
//       type: 'group',
//       label: 'Plastic Surgery Box Grid Section',
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
//           name: 'cssClasses',
//           type: 'text',
//           label: 'CSS Classes',
//           defaultValue: 'mod_box_grid viewport seven-boxes container option-2 default no-bg wider',
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
//           name: 'boxes',
//           type: 'array',
//           label: 'Service Boxes',
//           admin: {
//             description: 'Drag to reorder service boxes',
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
//               name: 'ctaButton',
//               type: 'group',
//               label: 'CTA Button',
//               fields: [
//                 {
//                   name: 'text',
//                   type: 'text',
//                   label: 'Button Text',
//                 },
//                 {
//                   name: 'url',
//                   type: 'text',
//                   label: 'Button URL',
//                 },
//                 {
//                   name: 'className',
//                   type: 'text',
//                   label: 'Button Class',
//                   defaultValue: 'btn',
//                 },
//               ],
//             },
//             {
//               name: 'animationClass',
//               type: 'select',
//               label: 'Animation Class',
//               options: [
//                 { label: 'Fade In Up', value: 'fadeInUp' },
//                 { label: 'Fade In Left', value: 'fadeInLeft' },
//                 { label: 'Fade In Right', value: 'fadeInRight' },
//                 { label: 'None', value: '' },
//               ],
//               defaultValue: 'fadeInUp',
//             },
//           ],
//         },
//       ],
//     },
//     // Final Banner Section
//     {
//       name: 'finalBannerSection',
//       type: 'group',
//       label: 'Final Banner Section (Experience)',
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
//           name: 'cssClasses',
//           type: 'text',
//           label: 'CSS Classes',
//           defaultValue: 'mod_banner dark hide-divider viewport background-5',
//         },
//         {
//           name: 'animationClass',
//           type: 'select',
//           label: 'Animation Class',
//           options: [
//             { label: 'Fade In Up', value: 'fadeInUp' },
//             { label: 'Fade In Left', value: 'fadeInLeft' },
//             { label: 'Fade In Right', value: 'fadeInRight' },
//             { label: 'None', value: '' },
//           ],
//           defaultValue: 'fadeInUp',
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
//           name: 'content',
//           type: 'richText',
//           label: 'Content',
//           required: true,
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
//             { label: 'Intro Column', value: 'introColumn' },
//             { label: 'Banner 1', value: 'banner1' },
//             { label: 'Half Image 1', value: 'halfImage1' },
//             { label: 'CTA 1', value: 'cta1' },
//             { label: 'Column Media 1', value: 'columnMedia1' },
//             { label: 'Column Media 2', value: 'columnMedia2' },
//             { label: 'Services Banner', value: 'servicesBanner' },
//             { label: 'Plastic Surgery Box Grid', value: 'plasticSurgeryBoxGrid' },
//             { label: 'Final Banner', value: 'finalBanner' },
//           ],
//         },
//       ],
//       defaultValue: [
//         { section: 'hero' },
//         { section: 'introColumn' },
//         { section: 'banner1' },
//         { section: 'halfImage1' },
//         { section: 'cta1' },
//         { section: 'columnMedia1' },
//         { section: 'columnMedia2' },
//         { section: 'servicesBanner' },
//         { section: 'plasticSurgeryBoxGrid' },
//         { section: 'finalBanner' },
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
//           name: 'backgroundColor',
//           type: 'text',
//           label: 'Default Background Color',
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

export const PortOrangeLocationPageComponent: CollectionConfig = {
  slug: 'port-orange-location-page-component',
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
      defaultValue: 'Port Orange Location Page Component',
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
          name: 'cssClasses',
          type: 'text',
          label: 'CSS Classes',
          defaultValue: 'mod_hero banner mobile-stack',
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
          defaultValue: [
            {
              label: 'Home',
              url: '/',
              ariaLabel: 'Breadcrumbs to help navigate the user',
            },
            {
              label: 'Port Orange',
              url: '/port-orange/',
              ariaLabel: 'Breadcrumbs to help navigate the user',
            },
          ],
        },
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          required: true,
          defaultValue: 'Goldfingers Aesthetics & Plastic Surgery',
        },
        {
          name: 'titleSmall',
          type: 'text',
          label: 'Title Small Text',
          defaultValue: 'in Port Orange',
        },
        {
          name: 'titleColor',
          type: 'text',
          label: 'Title Color',
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
              defaultValue: 'boats at sunset',
            },
          ],
        },
      ],
    },
    // Intro Column Section
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
          name: 'cssClasses',
          type: 'text',
          label: 'CSS Classes',
          defaultValue: 'mod_column viewport container',
        },
        {
          name: 'rowCssClasses',
          type: 'text',
          label: 'Row CSS Classes',
          defaultValue: 'row mb-30',
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
          name: 'heading',
          type: 'text',
          label: 'Heading',
          required: true,
          defaultValue: 'Experience the difference',
        },
        {
          name: 'headingSpan',
          type: 'text',
          label: 'Heading Span Text',
          defaultValue: 'at Goldfingers Aesthetics',
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
          name: 'maxWidth',
          type: 'text',
          label: 'Content Max Width Class',
          defaultValue: 'mw-80',
        },
        {
          name: 'textAlign',
          type: 'select',
          label: 'Text Alignment',
          options: [
            { label: 'Left', value: 'text-left' },
            { label: 'Center', value: 'text-center' },
            { label: 'Right', value: 'text-right' },
          ],
          defaultValue: 'text-center',
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
              defaultValue: 'Explore Our Medical Spa Services',
            },
            {
              name: 'url',
              type: 'text',
              label: 'Button URL',
              defaultValue: '/port-orange/medical-spa/',
            },
            {
              name: 'className',
              type: 'text',
              label: 'Button Class',
              defaultValue: 'btn',
            },
          ],
        },
      ],
    },
    // Banner Section 1
    {
      name: 'bannerSection1',
      type: 'group',
      label: 'Banner Section 1 (Artistry in Aesthetics)',
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
          name: 'cssClasses',
          type: 'text',
          label: 'CSS Classes',
          defaultValue: 'mod_banner dark hide-divider viewport background-1',
        },
        {
          name: 'animationClass',
          type: 'select',
          label: 'Animation Class',
          options: [
            { label: 'Fade In Up', value: 'fadeInUp' },
            { label: 'Fade In Left', value: 'fadeInLeft' },
            { label: 'Fade In Right', value: 'fadeInRight' },
            { label: 'None', value: '' },
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
          defaultValue: 'Artistry in aesthetics',
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
    // Half Image Section 1
    {
      name: 'halfImageSection1',
      type: 'group',
      label: 'Half Image Section 1 (Top 1% Nationwide)',
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
          name: 'cssClasses',
          type: 'text',
          label: 'CSS Classes',
          defaultValue: 'mod_half_image viewport half-image container wow fadeInLeft',
        },
        {
          name: 'flipped',
          type: 'checkbox',
          label: 'Flipped Layout',
          defaultValue: false,
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Heading',
          required: true,
          defaultValue: 'Ranked in the Top 1% Nationwide',
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
          fields: [
            {
              name: 'text',
              type: 'text',
              label: 'Bullet Text',
              required: true,
            },
          ],
          defaultValue: [
            { text: 'Over 25 years in Aesthetics' },
            { text: 'Top 1% in the Nation for BOTOX and Juvéderm' },
            { text: 'Largest Aesthetics Center in Florida' },
            { text: 'Over 24 Locations & Growing' },
          ],
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
              defaultValue: 'boats in harbor at sunset',
            },
          ],
        },
      ],
    },
    // CTA Section 1
    {
      name: 'ctaSection1',
      type: 'group',
      label: 'CTA Section 1 (Schedule Consultation)',
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
          name: 'cssClasses',
          type: 'text',
          label: 'CSS Classes',
          defaultValue:
            'mod_cta_general viewport container cta thin wow fadeInRight mt-0 mb-0 background-1',
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
          defaultValue: '/contact/?location=165422621',
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
              defaultValue: '/contact/?location=165422621',
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
    // Column with Media Section 1
    {
      name: 'columnMediaSection1',
      type: 'group',
      label: 'Column with Media Section 1 (Premier Med Spa)',
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
          name: 'cssClasses',
          type: 'text',
          label: 'CSS Classes',
          defaultValue: 'mod_column viewport container has-media',
        },
        {
          name: 'rowCssClasses',
          type: 'text',
          label: 'Row CSS Classes',
          defaultValue: 'row mt-30 mb-30 media-right',
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
          name: 'heading',
          type: 'text',
          label: 'Heading',
          required: true,
          defaultValue: "Central Florida's premier med spa:",
        },
        {
          name: 'headingSmall',
          type: 'text',
          label: 'Heading Small Text (before main)',
        },
        {
          name: 'headingSpan',
          type: 'text',
          label: 'Heading Span Text',
          defaultValue: 'Goldfingers Aesthetics',
        },
        {
          name: 'headingBlockDesktop',
          type: 'text',
          label: 'Heading Block Desktop Text',
          defaultValue: 'in Port Orange',
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
              defaultValue: 'dock on the ocean',
            },
          ],
        },
      ],
    },
    // Column with Media Section 2
    {
      name: 'columnMediaSection2',
      type: 'group',
      label: 'Column with Media Section 2 (Customized Services)',
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
          name: 'cssClasses',
          type: 'text',
          label: 'CSS Classes',
          defaultValue: 'mod_column viewport container has-media',
        },
        {
          name: 'rowCssClasses',
          type: 'text',
          label: 'Row CSS Classes',
          defaultValue: 'row mt-30 mb-30 media-right',
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
          name: 'heading',
          type: 'text',
          label: 'Heading',
          required: true,
          defaultValue: 'Customized aesthetic and',
        },
        {
          name: 'headingBlockDesktop',
          type: 'text',
          label: 'Heading Block Desktop Text',
          defaultValue: 'med spa services in Port Orange',
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
              defaultValue: 'sconce light fixture',
            },
          ],
        },
      ],
    },
    // Banner Section 2
    {
      name: 'bannerSection2',
      type: 'group',
      label: 'Banner Section 2 (Our Services)',
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
          name: 'cssClasses',
          type: 'text',
          label: 'CSS Classes',
          defaultValue: 'mod_banner dark hide-divider viewport background-6',
        },
        {
          name: 'animationClass',
          type: 'select',
          label: 'Animation Class',
          options: [
            { label: 'Fade In Up', value: 'fadeInUp' },
            { label: 'Fade In Left', value: 'fadeInLeft' },
            { label: 'Fade In Right', value: 'fadeInRight' },
            { label: 'None', value: '' },
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
          defaultValue: 'Our services',
        },
        {
          name: 'headingColor',
          type: 'text',
          label: 'Heading Color',
        },
        {
          name: 'headingAlign',
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
          name: 'intro',
          type: 'text',
          label: 'Intro Text',
          defaultValue:
            'Explore an array of transformative treatments awaiting you at Goldfingers Aesthetics & Plastic Surgery in Port Orange:',
        },
        {
          name: 'introAlign',
          type: 'select',
          label: 'Intro Alignment',
          options: [
            { label: 'Left', value: 'text-left' },
            { label: 'Center', value: 'text-center' },
            { label: 'Right', value: 'text-right' },
          ],
          defaultValue: 'text-center',
        },
        {
          name: 'services',
          type: 'array',
          label: 'Services List',
          admin: {
            description: 'Drag to reorder services',
          },
          fields: [
            {
              name: 'name',
              type: 'text',
              label: 'Service Name',
              required: true,
            },
            {
              name: 'url',
              type: 'text',
              label: 'Service URL',
            },
            {
              name: 'description',
              type: 'textarea',
              label: 'Service Description',
              required: true,
            },
          ],
          defaultValue: [
            {
              name: 'BOTOX',
              url: '/port-orange/medical-spa/botox/',
              description:
                'Turn back the clock with age-defying injections that effortlessly erase lines and wrinkles, revealing a revitalized and youthful appearance.',
            },
            {
              name: 'Dermal Fillers',
              url: '/port-orange/medical-spa/facial-fillers/',
              description:
                'Restore and enhance your innate beauty with dermal fillers, achieving a balance between features, softening lines, and refining facial contours.',
            },
            {
              name: 'Hand Rejuvenation',
              url: '/medical-spa/hands/',
              description:
                'Reclaim youthful vibrancy in your hands with our rejuvenation treatments, addressing volume loss and improving skin texture.',
            },
            {
              name: 'Non-Surgical Facelift',
              url: '/medical-spa/face-lift/',
              description:
                'Elevate, tighten, and refresh your appearance without surgery through our transformative non-surgical facelift, rejuvenating your features.',
            },
            {
              name: 'Tailored Services for Men',
              url: '/medical-spa/mens-services/',
              description:
                'Discover bespoke treatments catering to the unique aesthetic needs of men, addressing wrinkles, volume loss, and masculine contouring.',
            },
            {
              name: 'Permanent Makeup',
              url: '/medical-spa/permanent-makeup/',
              description:
                'Embrace effortless elegance with expertly applied permanent makeup, accentuating your features with natural-looking enhancement.',
            },
            {
              name: 'Micro-Channeling',
              url: '/medical-spa/micro-channeling/',
              description:
                'Stimulate collagen production and unveil radiant skin with our micro-channeling treatment, enhancing skin texture and tone.',
            },
            {
              name: 'Semaglutide Injections',
              url: '/port-orange/medical-spa/weight-loss/',
              description:
                'Embark on the innovative path to weight management with semaglutide injections, a groundbreaking approach to overall wellness.',
            },
            {
              name: 'Advanced Skincare',
              url: '/medical-spa/skincare-services/',
              description:
                'Elevate your skincare routine with our range of advanced skincare products, designed to maintain and amplify the outcomes of your treatments.',
            },
            {
              name: 'Spa Services',
              url: '/port-orange/medical-spa/spa-services/',
              description:
                'We offers a diverse array of spa services, including acne facials, dermaplaning facials, microneedling with ProCell serum, medical-grade chemical peels, and permanent makeup.',
            },
          ],
        },
        {
          name: 'columnsLayout',
          type: 'checkbox',
          label: 'Use Columns Layout',
          defaultValue: true,
        },
      ],
    },
    // Box Grid Section
    {
      name: 'boxGridSection',
      type: 'group',
      label: 'Box Grid Section (Plastic Surgery)',
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
          name: 'cssClasses',
          type: 'text',
          label: 'CSS Classes',
          defaultValue: 'mod_box_grid viewport seven-boxes container option-2 default no-bg wider',
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Heading',
          defaultValue: 'Plastic surgery – is it time?',
        },
        {
          name: 'headingColor',
          type: 'text',
          label: 'Heading Color',
        },
        {
          name: 'intro',
          type: 'richText',
          label: 'Intro Content',
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
              type: 'textarea',
              label: 'Box Content',
            },
            {
              name: 'ctaText',
              type: 'text',
              label: 'CTA Button Text',
            },
            {
              name: 'ctaUrl',
              type: 'text',
              label: 'CTA Button URL',
            },
            {
              name: 'ctaClassName',
              type: 'text',
              label: 'CTA Button Class',
              defaultValue: 'btn',
            },
            {
              name: 'animationClass',
              type: 'select',
              label: 'Animation Class',
              options: [
                { label: 'Fade In Up', value: 'fadeInUp' },
                { label: 'Fade In Left', value: 'fadeInLeft' },
                { label: 'Fade In Right', value: 'fadeInRight' },
                { label: 'None', value: '' },
              ],
              defaultValue: 'fadeInUp',
            },
          ],
          defaultValue: [
            {
              heading: 'Breast Augmentation',
              content:
                'Enhance your silhouette with precision-placed implants, achieving your desired size and shape with remarkable artistry.',
              ctaText: 'Learn more about breast augmentation',
              ctaUrl: '/plastic-surgery/breast-augmentation/',
              ctaClassName: 'btn',
              animationClass: 'fadeInUp',
            },
            {
              heading: 'Breast Lift',
              content:
                'Reclaim youthful contours and confidence through a breast lift, lifting and reshaping sagging breasts for a rejuvenated appearance.',
              ctaText: 'Learn more about breast lifts',
              ctaUrl: '/plastic-surgery/breast-lift/',
              ctaClassName: 'btn',
              animationClass: 'fadeInUp',
            },
            {
              heading: 'Breast Reduction',
              content:
                'Find relief from discomfort and achieve balance with a breast reduction, reducing excess tissue for improved aesthetics and comfort.',
              ctaText: 'Learn more about breast reduction',
              ctaUrl: '/plastic-surgery/breast-reduction/',
              ctaClassName: 'btn',
              animationClass: 'fadeInUp',
            },
            {
              heading: 'Breast Revision',
              content:
                'Correct past procedures with breast revision, addressing concerns and achieving your desired outcomes.',
              ctaText: 'Learn more about breast revision',
              ctaUrl: '/plastic-surgery/breast-revision/',
              ctaClassName: 'btn',
              animationClass: 'fadeInUp',
            },
            {
              heading: 'Mommy Makeover',
              content:
                'Experience a comprehensive transformation with a mommy makeover, combining procedures to restore your confidence.',
              ctaText: 'Learn more about mommy makeovers',
              ctaUrl: '/plastic-surgery/mommy-makeover/',
              ctaClassName: 'btn',
              animationClass: 'fadeInUp',
            },
            {
              heading: 'Liposuction',
              content:
                'Sculpt your body by removing stubborn fat deposits with liposuction, achieving smoother and more defined contours.',
              ctaText: 'Learn more about liposuction',
              ctaUrl: '/plastic-surgery/liposuction/',
              ctaClassName: 'btn',
              animationClass: 'fadeInUp',
            },
            {
              heading: '8-Point Facelift',
              content:
                'Rejuvenate your face with the transformative 8-point facelift, addressing multiple areas to restore a younger-looking you in the most natural way.',
              ctaText: '',
              ctaUrl: '',
              ctaClassName: 'btn',
              animationClass: 'fadeInUp',
            },
          ],
        },
      ],
    },
    // Banner Section 3
    {
      name: 'bannerSection3',
      type: 'group',
      label: 'Banner Section 3 (Elevated Experience)',
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
          name: 'cssClasses',
          type: 'text',
          label: 'CSS Classes',
          defaultValue: 'mod_banner dark hide-divider viewport background-5',
        },
        {
          name: 'animationClass',
          type: 'select',
          label: 'Animation Class',
          options: [
            { label: 'Fade In Up', value: 'fadeInUp' },
            { label: 'Fade In Left', value: 'fadeInLeft' },
            { label: 'Fade In Right', value: 'fadeInRight' },
            { label: 'None', value: '' },
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
          defaultValue: 'You are invited to experience',
        },
        {
          name: 'headingSpan',
          type: 'text',
          label: 'Heading Span Text (desktop block)',
          defaultValue: 'an elevated med spa experience.',
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
            { label: 'Banner 1 (Artistry)', value: 'banner1' },
            { label: 'Half Image 1 (Top 1%)', value: 'halfImage1' },
            { label: 'CTA 1', value: 'cta1' },
            { label: 'Column Media 1 (Premier)', value: 'columnMedia1' },
            { label: 'Column Media 2 (Customized)', value: 'columnMedia2' },
            { label: 'Banner 2 (Services)', value: 'banner2' },
            { label: 'Box Grid (Plastic Surgery)', value: 'boxGrid' },
            { label: 'Banner 3 (Elevated)', value: 'banner3' },
          ],
        },
      ],
      defaultValue: [
        { section: 'hero' },
        { section: 'introColumn' },
        { section: 'banner1' },
        { section: 'halfImage1' },
        { section: 'cta1' },
        { section: 'columnMedia1' },
        { section: 'columnMedia2' },
        { section: 'banner2' },
        { section: 'boxGrid' },
        { section: 'banner3' },
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
          name: 'backgroundColor',
          type: 'text',
          label: 'Default Background Color',
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
    {
      name: 'isActive',
      type: 'checkbox',
      label: 'Active',
      defaultValue: true,
    },
  ],
  timestamps: true,
}
