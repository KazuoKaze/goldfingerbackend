// import { CollectionConfig } from 'payload'

// export const PlasticSurgeryComponent: CollectionConfig = {
//   slug: 'plastic-surgery-component',
//   admin: {
//     useAsTitle: 'componentName',
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
//       defaultValue: 'Plastic Surgery Page',
//     },
//     {
//       name: 'sections',
//       type: 'array',
//       required: true,
//       admin: {
//         description: 'Drag and drop to reorder sections',
//       },
//       fields: [
//         {
//           name: 'sectionType',
//           type: 'select',
//           required: true,
//           options: [
//             { label: 'Hero Banner', value: 'hero' },
//             { label: 'Page Index List', value: 'indexList' },
//             { label: 'Column Content', value: 'column' },
//             { label: 'Page Index Grid', value: 'indexGrid' },
//             { label: 'Box Grid', value: 'boxGrid' },
//           ],
//         },
//         {
//           name: 'isVisible',
//           type: 'checkbox',
//           defaultValue: true,
//           admin: {
//             description: 'Toggle section visibility',
//           },
//         },
//         {
//           name: 'sectionId',
//           type: 'text',
//           admin: {
//             description: 'Custom HTML ID for this section',
//           },
//         },
//         {
//           name: 'sectionClasses',
//           type: 'text',
//           admin: {
//             description: 'Additional CSS classes',
//           },
//         },
//         {
//           name: 'styling',
//           type: 'group',
//           fields: [
//             {
//               name: 'backgroundColor',
//               type: 'text',
//               admin: {
//                 description: 'Background color (hex, rgb, or name)',
//               },
//             },
//             {
//               name: 'textColor',
//               type: 'text',
//               admin: {
//                 description: 'Text color (hex, rgb, or name)',
//               },
//             },
//             {
//               name: 'padding',
//               type: 'group',
//               fields: [
//                 {
//                   name: 'top',
//                   type: 'text',
//                   admin: { description: 'e.g., 20px, 2rem' },
//                 },
//                 {
//                   name: 'bottom',
//                   type: 'text',
//                   admin: { description: 'e.g., 20px, 2rem' },
//                 },
//                 {
//                   name: 'left',
//                   type: 'text',
//                   admin: { description: 'e.g., 20px, 2rem' },
//                 },
//                 {
//                   name: 'right',
//                   type: 'text',
//                   admin: { description: 'e.g., 20px, 2rem' },
//                 },
//               ],
//             },
//             {
//               name: 'margin',
//               type: 'group',
//               fields: [
//                 {
//                   name: 'top',
//                   type: 'text',
//                 },
//                 {
//                   name: 'bottom',
//                   type: 'text',
//                 },
//                 {
//                   name: 'left',
//                   type: 'text',
//                 },
//                 {
//                   name: 'right',
//                   type: 'text',
//                 },
//               ],
//             },
//             {
//               name: 'customCSS',
//               type: 'textarea',
//               admin: {
//                 description: 'Custom CSS properties (JSON format)',
//               },
//             },
//           ],
//         },
//         // Hero Section Fields
//         {
//           name: 'heroContent',
//           type: 'group',
//           admin: {
//             condition: (data, siblingData) => siblingData?.sectionType === 'hero',
//           },
//           fields: [
//             {
//               name: 'backgroundImage',
//               type: 'upload',
//               relationTo: 'media',
//               required: false,
//             },
//             {
//               name: 'backgroundImageUrl',
//               type: 'text',
//               admin: {
//                 description: 'Or provide external URL',
//               },
//             },
//             {
//               name: 'responsiveImages',
//               type: 'array',
//               fields: [
//                 {
//                   name: 'breakpoint',
//                   type: 'text',
//                   admin: {
//                     description: 'e.g., max-width:420px',
//                   },
//                 },
//                 {
//                   name: 'imageUrl',
//                   type: 'text',
//                 },
//                 {
//                   name: 'imageUrl2x',
//                   type: 'text',
//                   admin: {
//                     description: 'Retina version',
//                   },
//                 },
//               ],
//             },
//             {
//               name: 'breadcrumbs',
//               type: 'array',
//               fields: [
//                 {
//                   name: 'label',
//                   type: 'text',
//                   required: true,
//                 },
//                 {
//                   name: 'url',
//                   type: 'text',
//                   required: true,
//                 },
//                 {
//                   name: 'ariaLabel',
//                   type: 'text',
//                 },
//               ],
//             },
//             {
//               name: 'heading',
//               type: 'text',
//               required: true,
//             },
//             {
//               name: 'headingColor',
//               type: 'text',
//               admin: {
//                 description: 'Override heading color',
//               },
//             },
//             {
//               name: 'description',
//               type: 'richText',
//             },
//             {
//               name: 'descriptionColor',
//               type: 'text',
//             },
//             {
//               name: 'mediaImage',
//               type: 'upload',
//               relationTo: 'media',
//               admin: {
//                 description: 'Right side media image',
//               },
//             },
//             {
//               name: 'mediaImageUrl',
//               type: 'text',
//             },
//             {
//               name: 'mediaImageAlt',
//               type: 'text',
//             },
//           ],
//         },
//         // Index List Fields
//         {
//           name: 'indexListContent',
//           type: 'group',
//           admin: {
//             condition: (data, siblingData) => siblingData?.sectionType === 'indexList',
//           },
//           fields: [
//             {
//               name: 'option',
//               type: 'select',
//               options: [
//                 { label: 'Option 1', value: 'option-1' },
//                 { label: 'Option 2', value: 'option-2' },
//               ],
//               defaultValue: 'option-1',
//             },
//             {
//               name: 'links',
//               type: 'array',
//               admin: {
//                 description: 'Drag to reorder links',
//               },
//               fields: [
//                 {
//                   name: 'label',
//                   type: 'text',
//                   required: true,
//                 },
//                 {
//                   name: 'url',
//                   type: 'text',
//                   required: true,
//                 },
//                 {
//                   name: 'title',
//                   type: 'text',
//                   admin: {
//                     description: 'Tooltip text',
//                   },
//                 },
//                 {
//                   name: 'ariaLabel',
//                   type: 'text',
//                 },
//                 {
//                   name: 'textColor',
//                   type: 'text',
//                 },
//                 {
//                   name: 'backgroundColor',
//                   type: 'text',
//                 },
//                 {
//                   name: 'hoverColor',
//                   type: 'text',
//                 },
//               ],
//             },
//           ],
//         },
//         // Column Content Fields
//         {
//           name: 'columnContent',
//           type: 'group',
//           admin: {
//             condition: (data, siblingData) => siblingData?.sectionType === 'column',
//           },
//           fields: [
//             {
//               name: 'columns',
//               type: 'array',
//               fields: [
//                 {
//                   name: 'maxWidth',
//                   type: 'text',
//                   admin: {
//                     description: 'e.g., 80%, 600px',
//                   },
//                 },
//                 {
//                   name: 'textAlign',
//                   type: 'select',
//                   options: [
//                     { label: 'Left', value: 'left' },
//                     { label: 'Center', value: 'center' },
//                     { label: 'Right', value: 'right' },
//                   ],
//                   defaultValue: 'center',
//                 },
//                 {
//                   name: 'logo',
//                   type: 'upload',
//                   relationTo: 'media',
//                 },
//                 {
//                   name: 'logoUrl',
//                   type: 'text',
//                 },
//                 {
//                   name: 'logoWidth',
//                   type: 'number',
//                 },
//                 {
//                   name: 'logoHeight',
//                   type: 'number',
//                 },
//                 {
//                   name: 'heading',
//                   type: 'text',
//                 },
//                 {
//                   name: 'headingColor',
//                   type: 'text',
//                 },
//                 {
//                   name: 'content',
//                   type: 'richText',
//                   required: true,
//                 },
//                 {
//                   name: 'contentColor',
//                   type: 'text',
//                 },
//               ],
//             },
//             {
//               name: 'rowClasses',
//               type: 'text',
//               admin: {
//                 description: 'e.g., pb-0',
//               },
//             },
//           ],
//         },
//         // Index Grid Fields
//         {
//           name: 'indexGridContent',
//           type: 'group',
//           admin: {
//             condition: (data, siblingData) => siblingData?.sectionType === 'indexGrid',
//           },
//           fields: [
//             {
//               name: 'gridItems',
//               type: 'array',
//               admin: {
//                 description: 'Drag to reorder grid items',
//               },
//               fields: [
//                 {
//                   name: 'title',
//                   type: 'text',
//                   required: true,
//                 },
//                 {
//                   name: 'url',
//                   type: 'text',
//                   required: true,
//                 },
//                 {
//                   name: 'ariaLabel',
//                   type: 'text',
//                 },
//                 {
//                   name: 'image',
//                   type: 'upload',
//                   relationTo: 'media',
//                 },
//                 {
//                   name: 'imageUrl',
//                   type: 'text',
//                   admin: {
//                     description: 'Or provide external URL',
//                   },
//                 },
//                 {
//                   name: 'imageAlt',
//                   type: 'text',
//                   required: true,
//                 },
//                 {
//                   name: 'responsiveImages',
//                   type: 'array',
//                   fields: [
//                     {
//                       name: 'breakpoint',
//                       type: 'text',
//                     },
//                     {
//                       name: 'imageUrl',
//                       type: 'text',
//                     },
//                     {
//                       name: 'imageUrl2x',
//                       type: 'text',
//                     },
//                   ],
//                 },
//                 {
//                   name: 'overlayText',
//                   type: 'text',
//                 },
//                 {
//                   name: 'overlayTextColor',
//                   type: 'text',
//                 },
//                 {
//                   name: 'overlayBackgroundColor',
//                   type: 'text',
//                 },
//               ],
//             },
//           ],
//         },
//         // Box Grid Fields
//         {
//           name: 'boxGridContent',
//           type: 'group',
//           admin: {
//             condition: (data, siblingData) => siblingData?.sectionType === 'boxGrid',
//           },
//           fields: [
//             {
//               name: 'heading',
//               type: 'text',
//             },
//             {
//               name: 'headingColor',
//               type: 'text',
//             },
//             {
//               name: 'layout',
//               type: 'select',
//               options: [
//                 { label: 'Two Boxes', value: 'two-boxes' },
//                 { label: 'Three Boxes', value: 'three-boxes' },
//                 { label: 'Four Boxes', value: 'four-boxes' },
//               ],
//               defaultValue: 'three-boxes',
//             },
//             {
//               name: 'option',
//               type: 'select',
//               options: [
//                 { label: 'Option 1', value: 'option-1' },
//                 { label: 'Option 2', value: 'option-2' },
//               ],
//               defaultValue: 'option-1',
//             },
//             {
//               name: 'theme',
//               type: 'select',
//               options: [
//                 { label: 'Light', value: 'light' },
//                 { label: 'Dark', value: 'dark' },
//               ],
//               defaultValue: 'dark',
//             },
//             {
//               name: 'backgroundImage',
//               type: 'upload',
//               relationTo: 'media',
//             },
//             {
//               name: 'backgroundImageUrl',
//               type: 'text',
//             },
//             {
//               name: 'boxes',
//               type: 'array',
//               admin: {
//                 description: 'Drag to reorder boxes',
//               },
//               fields: [
//                 {
//                   name: 'title',
//                   type: 'text',
//                   required: true,
//                 },
//                 {
//                   name: 'titleColor',
//                   type: 'text',
//                 },
//                 {
//                   name: 'items',
//                   type: 'array',
//                   fields: [
//                     {
//                       name: 'text',
//                       type: 'text',
//                       required: true,
//                     },
//                   ],
//                 },
//                 {
//                   name: 'itemsColor',
//                   type: 'text',
//                 },
//                 {
//                   name: 'backgroundColor',
//                   type: 'text',
//                 },
//                 {
//                   name: 'borderColor',
//                   type: 'text',
//                 },
//                 {
//                   name: 'listStyle',
//                   type: 'select',
//                   options: [
//                     { label: 'Bullet Points', value: 'bullet' },
//                     { label: 'Numbered', value: 'numbered' },
//                     { label: 'None', value: 'none' },
//                   ],
//                   defaultValue: 'bullet',
//                 },
//                 {
//                   name: 'columns',
//                   type: 'checkbox',
//                   admin: {
//                     description: 'Display items in columns',
//                   },
//                 },
//               ],
//             },
//           ],
//         },
//       ],
//     },
//     {
//       name: 'globalStyling',
//       type: 'group',
//       label: 'Global Styling',
//       fields: [
//         {
//           name: 'primaryColor',
//           type: 'text',
//           admin: {
//             description: 'Main brand color',
//           },
//         },
//         {
//           name: 'secondaryColor',
//           type: 'text',
//           admin: {
//             description: 'Secondary brand color',
//           },
//         },
//         {
//           name: 'fontFamily',
//           type: 'text',
//           admin: {
//             description: 'e.g., Arial, Helvetica, sans-serif',
//           },
//         },
//         {
//           name: 'headingFontFamily',
//           type: 'text',
//         },
//         {
//           name: 'fontSize',
//           type: 'text',
//           admin: {
//             description: 'Base font size (e.g., 16px)',
//           },
//         },
//         {
//           name: 'lineHeight',
//           type: 'text',
//         },
//         {
//           name: 'containerMaxWidth',
//           type: 'text',
//           admin: {
//             description: 'e.g., 1200px, 100%',
//           },
//         },
//         {
//           name: 'customCSS',
//           type: 'textarea',
//           admin: {
//             description: 'Global custom CSS',
//           },
//         },
//       ],
//     },
//     {
//       name: 'seoSettings',
//       type: 'group',
//       fields: [
//         {
//           name: 'metaTitle',
//           type: 'text',
//         },
//         {
//           name: 'metaDescription',
//           type: 'textarea',
//         },
//         {
//           name: 'metaKeywords',
//           type: 'text',
//         },
//         {
//           name: 'ogImage',
//           type: 'upload',
//           relationTo: 'media',
//         },
//       ],
//     },
//     {
//       name: 'publishedAt',
//       type: 'date',
//       admin: {
//         position: 'sidebar',
//       },
//     },
//     {
//       name: 'status',
//       type: 'select',
//       options: [
//         { label: 'Draft', value: 'draft' },
//         { label: 'Published', value: 'published' },
//         { label: 'Archived', value: 'archived' },
//       ],
//       defaultValue: 'draft',
//       admin: {
//         position: 'sidebar',
//       },
//     },
//   ],
// }

// export default PlasticSurgeryComponent

import { CollectionConfig } from 'payload'

export const PlasticSurgeryPageComponent: CollectionConfig = {
  slug: 'plastic-surgery-page-component',
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
      defaultValue: 'Plastic Surgery Page Component',
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
              label: 'Plastic Surgery',
              url: '/plastic-surgery/',
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
          defaultValue: 'Plastic Surgery',
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
              defaultValue: 'Doctor Jay giving consultation',
            },
          ],
        },
      ],
    },
    // Page Index List Section
    {
      name: 'pageIndexListSection',
      type: 'group',
      label: 'Page Index List Section',
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
          name: 'option',
          type: 'select',
          label: 'Layout Option',
          options: [
            { label: 'Option 1', value: 'option-1' },
            { label: 'Option 2', value: 'option-2' },
          ],
          defaultValue: 'option-1',
        },
        {
          name: 'links',
          type: 'array',
          label: 'Index Links',
          admin: {
            description: 'Drag to reorder links',
          },
          defaultValue: [
            {
              label: 'Breast',
              url: '/plastic-surgery/breast/',
              title: 'Opens Breast page',
              ariaLabel: 'Opens Breast page',
            },
            {
              label: 'Breast Augmentation',
              url: '/plastic-surgery/breast-augmentation/',
              title: 'Opens Breast Augmentation page',
              ariaLabel: 'Opens Breast Augmentation page',
            },
            {
              label: 'Breast Lift',
              url: '/plastic-surgery/breast-lift/',
              title: 'Opens Breast Lift page',
              ariaLabel: 'Opens Breast Lift page',
            },
            {
              label: 'Breast Reduction',
              url: '/plastic-surgery/breast-reduction/',
              title: 'Opens Breast Reduction page',
              ariaLabel: 'Opens Breast Reduction page',
            },
            {
              label: 'Breast Revision',
              url: '/plastic-surgery/breast-revision/',
              title: 'Opens Breast Revision page',
              ariaLabel: 'Opens Breast Revision page',
            },
            {
              label: 'Body',
              url: '/plastic-surgery/body/',
              title: 'Opens Body page',
              ariaLabel: 'Opens Body page',
            },
            {
              label: 'Liposuction',
              url: '/plastic-surgery/liposuction/',
              title: 'Opens Liposuction page',
              ariaLabel: 'Opens Liposuction page',
            },
            {
              label: 'Mommy Makeover',
              url: '/plastic-surgery/mommy-makeover/',
              title: 'Opens Mommy Makeover page',
              ariaLabel: 'Opens Mommy Makeover page',
            },
            {
              label: 'Tummy Tuck',
              url: '/plastic-surgery/tummy-tuck/',
              title: 'Opens Tummy Tuck page',
              ariaLabel: 'Opens Tummy Tuck page',
            },
          ],
          fields: [
            {
              name: 'label',
              type: 'text',
              label: 'Link Label',
              required: true,
            },
            {
              name: 'url',
              type: 'text',
              label: 'Link URL',
              required: true,
            },
            {
              name: 'title',
              type: 'text',
              label: 'Title Attribute',
            },
            {
              name: 'ariaLabel',
              type: 'text',
              label: 'ARIA Label',
            },
          ],
        },
      ],
    },
    // Column Section (Intro Text)
    {
      name: 'columnSection',
      type: 'group',
      label: 'Column Section (Intro Text)',
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
          defaultValue: 'pb-0',
          admin: {
            description: 'CSS class for padding bottom',
          },
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
        },
        {
          name: 'logoWidth',
          type: 'number',
          label: 'Logo Width',
          defaultValue: 151,
        },
        {
          name: 'logoHeight',
          type: 'number',
          label: 'Logo Height',
          defaultValue: 95,
        },
        {
          name: 'maxWidth',
          type: 'text',
          label: 'Content Max Width Class',
          defaultValue: 'mw-80',
          admin: {
            description: 'CSS class for max width (e.g., mw-80, mw-100)',
          },
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Heading',
          defaultValue: 'Plastic Surgery in Orlando',
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
    // Page Index Section (With Images)
    {
      name: 'pageIndexSection',
      type: 'group',
      label: 'Page Index Section (With Images)',
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
          name: 'items',
          type: 'array',
          label: 'Index Items',
          admin: {
            description: 'Drag to reorder items',
          },
          fields: [
            {
              name: 'title',
              type: 'text',
              label: 'Item Title',
              required: true,
            },
            {
              name: 'url',
              type: 'text',
              label: 'Item URL',
              required: true,
            },
            {
              name: 'linkTitle',
              type: 'text',
              label: 'Link Title Attribute',
            },
            {
              name: 'ariaLabel',
              type: 'text',
              label: 'ARIA Label',
            },
            {
              name: 'image',
              type: 'group',
              label: 'Item Image',
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
                },
              ],
            },
          ],
        },
      ],
    },
    // Box Grid Section (Credentials)
    {
      name: 'boxGridSection',
      type: 'group',
      label: 'Box Grid Section (Credentials)',
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
          name: 'gridLayout',
          type: 'select',
          label: 'Grid Layout',
          options: [
            { label: 'Default', value: 'default' },
            { label: 'Wider', value: 'wider' },
            { label: 'Three Boxes', value: 'three-boxes' },
            { label: 'Option 1', value: 'option-1' },
          ],
          defaultValue: 'three-boxes',
        },
        {
          name: 'hasBackground',
          type: 'checkbox',
          label: 'Has Background Image',
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
              defaultValue: 'Background media',
            },
          ],
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Main Heading',
          defaultValue: 'Credentials / Experience',
        },
        {
          name: 'headingColor',
          type: 'text',
          label: 'Heading Color',
        },
        {
          name: 'boxes',
          type: 'array',
          label: 'Content Boxes',
          admin: {
            description: 'Drag to reorder boxes',
          },
          defaultValue: [
            {
              heading: 'Certifications',
              bulletPoints: [
                { text: 'Board Certified by the American Board of Plastic Surgery' },
                { text: 'Member Florida Society of Plastic Surgery' },
                { text: 'Member A.S.P.S. (American Society of Plastic Surgery)' },
              ],
            },
            {
              heading: 'Experience',
              bulletPoints: [
                { text: 'General Surgery Board Eligible/Board Certified surgeon' },
                {
                  text: 'Surgical hospitalist at Veterans Administration Hospital in Jackson, MS',
                },
                { text: 'Trauma Surgeon Faculty University South Alabama' },
              ],
            },
            {
              heading: 'Training',
              bulletPoints: [
                { text: 'General Surgery Residency' },
                { text: 'Chief Resident General Surgery' },
                { text: 'Fellowship in Breast Oncoplastic Surgery' },
                { text: 'Fellowship in minimally invasive/laparoscopic surgery' },
                { text: 'Residency in Plastic and Reconstructive Surgery' },
                { text: 'Chief Resident in Plastic and Reconstructive Surgery' },
              ],
              bulletPointsLayout: 'columns',
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
              label: 'Box Content (Optional)',
            },
            {
              name: 'bulletPoints',
              type: 'array',
              label: 'Bullet Points',
              admin: {
                description: 'Add bullet points for this box',
              },
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
              defaultValue: 'single',
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
            { label: 'Page Index List Section', value: 'pageIndexList' },
            { label: 'Column Section (Intro Text)', value: 'columnSection' },
            { label: 'Page Index Section (With Images)', value: 'pageIndex' },
            { label: 'Box Grid Section (Credentials)', value: 'boxGrid' },
          ],
        },
      ],
      defaultValue: [
        { section: 'hero' },
        { section: 'pageIndexList' },
        { section: 'columnSection' },
        { section: 'pageIndex' },
        { section: 'boxGrid' },
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
            description: 'Duration for fade in animations (e.g., 0.5s, 1s)',
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
          defaultValue: 'Plastic Surgery - Goldfingers Aesthetics and Plastic Surgery',
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          label: 'Meta Description',
          defaultValue:
            'Contact Goldfingers Aesthetics & Plastic Surgery today for your personal consultation with Dr. McClure in Orlando, Florida.',
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
            'plastic surgery, breast augmentation, liposuction, mommy makeover, Orlando, Florida',
        },
        {
          name: 'canonicalUrl',
          type: 'text',
          label: 'Canonical URL',
          defaultValue: '/plastic-surgery/',
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