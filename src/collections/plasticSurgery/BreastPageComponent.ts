// import { CollectionConfig } from 'payload'

// export const BreastPageComponent: CollectionConfig = {
//   slug: 'breast-page-component',
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
//       defaultValue: 'Breast Page',
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
//             { label: 'Index Static Grid', value: 'indexStatic' },
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
//             description: 'Additional CSS classes (e.g., mod_hero banner mobile-stack)',
//           },
//         },
//         {
//           name: 'dataAttributes',
//           type: 'array',
//           admin: {
//             description: 'Custom data attributes',
//           },
//           fields: [
//             {
//               name: 'attribute',
//               type: 'text',
//               admin: {
//                 description: 'e.g., data-s3-module',
//               },
//             },
//             {
//               name: 'value',
//               type: 'text',
//             },
//           ],
//         },
//         {
//           name: 'styling',
//           type: 'group',
//           label: 'Section Styling',
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
//                 { name: 'top', type: 'text' },
//                 { name: 'bottom', type: 'text' },
//                 { name: 'left', type: 'text' },
//                 { name: 'right', type: 'text' },
//               ],
//             },
//             {
//               name: 'margin',
//               type: 'group',
//               fields: [
//                 { name: 'top', type: 'text' },
//                 { name: 'bottom', type: 'text' },
//                 { name: 'left', type: 'text' },
//                 { name: 'right', type: 'text' },
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
//               name: 'wrapperClasses',
//               type: 'text',
//               defaultValue: 'wrapper',
//               admin: {
//                 description: 'CSS classes for wrapper div',
//               },
//             },
//             {
//               name: 'backgroundImage',
//               type: 'group',
//               label: 'Left Background Image',
//               fields: [
//                 {
//                   name: 'upload',
//                   type: 'upload',
//                   relationTo: 'media',
//                 },
//                 {
//                   name: 'url',
//                   type: 'text',
//                   admin: {
//                     description: 'Or provide external URL',
//                   },
//                 },
//                 {
//                   name: 'alt',
//                   type: 'text',
//                   defaultValue: 'Background Texture',
//                 },
//                 {
//                   name: 'width',
//                   type: 'number',
//                 },
//                 {
//                   name: 'height',
//                   type: 'number',
//                 },
//                 {
//                   name: 'responsiveImages',
//                   type: 'array',
//                   admin: {
//                     description: 'Responsive image sources',
//                   },
//                   fields: [
//                     {
//                       name: 'breakpoint',
//                       type: 'text',
//                       admin: {
//                         description: 'e.g., max-width:420px',
//                       },
//                     },
//                     {
//                       name: 'imageUrl',
//                       type: 'text',
//                       required: true,
//                     },
//                     {
//                       name: 'imageUrl2x',
//                       type: 'text',
//                       admin: {
//                         description: 'Retina version',
//                       },
//                     },
//                   ],
//                 },
//                 {
//                   name: 'lazyLoad',
//                   type: 'checkbox',
//                   defaultValue: true,
//                 },
//               ],
//             },
//             {
//               name: 'contentRow',
//               type: 'group',
//               label: 'Content Row (Left Side)',
//               fields: [
//                 {
//                   name: 'rowClasses',
//                   type: 'text',
//                   defaultValue: 'row',
//                 },
//                 {
//                   name: 'innerClasses',
//                   type: 'text',
//                   defaultValue: 'inner',
//                 },
//                 {
//                   name: 'breadcrumbs',
//                   type: 'array',
//                   admin: {
//                     description: 'Drag to reorder breadcrumbs',
//                   },
//                   fields: [
//                     {
//                       name: 'label',
//                       type: 'text',
//                       required: true,
//                     },
//                     {
//                       name: 'url',
//                       type: 'text',
//                       required: true,
//                     },
//                     {
//                       name: 'role',
//                       type: 'text',
//                       defaultValue: 'link',
//                     },
//                     {
//                       name: 'ariaLabel',
//                       type: 'text',
//                       defaultValue: 'Breadcrumbs to help navigate the user',
//                     },
//                     {
//                       name: 'textColor',
//                       type: 'text',
//                       admin: {
//                         description: 'Individual breadcrumb link color',
//                       },
//                     },
//                   ],
//                 },
//                 {
//                   name: 'breadcrumbClasses',
//                   type: 'text',
//                   defaultValue: 'partial_breadcrumb',
//                 },
//                 {
//                   name: 'breadcrumbDataAttributes',
//                   type: 'text',
//                   admin: {
//                     description: 'e.g., data-s3-partial',
//                   },
//                 },
//                 {
//                   name: 'heading',
//                   type: 'text',
//                   required: true,
//                   defaultValue: 'Breast',
//                 },
//                 {
//                   name: 'headingTag',
//                   type: 'select',
//                   options: [
//                     { label: 'H1', value: 'h1' },
//                     { label: 'H2', value: 'h2' },
//                     { label: 'H3', value: 'h3' },
//                   ],
//                   defaultValue: 'h1',
//                 },
//                 {
//                   name: 'headingColor',
//                   type: 'text',
//                   admin: {
//                     description: 'Override heading color',
//                   },
//                 },
//                 {
//                   name: 'description',
//                   type: 'richText',
//                   admin: {
//                     description: 'Optional description text below heading',
//                   },
//                 },
//                 {
//                   name: 'descriptionColor',
//                   type: 'text',
//                 },
//               ],
//             },
//             {
//               name: 'mediaSection',
//               type: 'group',
//               label: 'Media Section (Right Side)',
//               fields: [
//                 {
//                   name: 'mediaClasses',
//                   type: 'text',
//                   defaultValue: 'media',
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
//                   defaultValue: 'Doctor showing breast implant to patient',
//                 },
//                 {
//                   name: 'imageWidth',
//                   type: 'number',
//                   defaultValue: 1920,
//                 },
//                 {
//                   name: 'imageHeight',
//                   type: 'number',
//                   defaultValue: 1206,
//                 },
//                 {
//                   name: 'responsiveImages',
//                   type: 'array',
//                   admin: {
//                     description: 'Responsive image sources',
//                   },
//                   fields: [
//                     {
//                       name: 'breakpoint',
//                       type: 'text',
//                       admin: {
//                         description: 'e.g., max-width:420px',
//                       },
//                     },
//                     {
//                       name: 'imageUrl',
//                       type: 'text',
//                       required: true,
//                     },
//                     {
//                       name: 'imageUrl2x',
//                       type: 'text',
//                       admin: {
//                         description: 'Retina version',
//                       },
//                     },
//                   ],
//                 },
//                 {
//                   name: 'lazyLoad',
//                   type: 'checkbox',
//                   defaultValue: false,
//                 },
//               ],
//             },
//           ],
//         },
//         // Index Static Section Fields
//         {
//           name: 'indexStaticContent',
//           type: 'group',
//           admin: {
//             condition: (data, siblingData) => siblingData?.sectionType === 'indexStatic',
//           },
//           fields: [
//             {
//               name: 'containerClasses',
//               type: 'text',
//               defaultValue: 'mod_index_static mod_index container',
//               admin: {
//                 description: 'CSS classes for container',
//               },
//             },
//             {
//               name: 'rowClasses',
//               type: 'text',
//               defaultValue: 'row subcontent',
//             },
//             {
//               name: 'innerClasses',
//               type: 'text',
//               defaultValue: 'inner',
//             },
//             {
//               name: 'gridItems',
//               type: 'array',
//               required: true,
//               admin: {
//                 description: 'Drag and drop to reorder grid items',
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
//                   name: 'itemClasses',
//                   type: 'text',
//                   defaultValue: 'item',
//                   admin: {
//                     description: 'CSS classes for this grid item',
//                   },
//                 },
//                 {
//                   name: 'mediaBtnClasses',
//                   type: 'text',
//                   defaultValue: 'media-btn',
//                 },
//                 {
//                   name: 'image',
//                   type: 'group',
//                   fields: [
//                     {
//                       name: 'upload',
//                       type: 'upload',
//                       relationTo: 'media',
//                     },
//                     {
//                       name: 'url',
//                       type: 'text',
//                       admin: {
//                         description: 'Or provide external URL',
//                       },
//                     },
//                     {
//                       name: 'alt',
//                       type: 'text',
//                       required: true,
//                     },
//                     {
//                       name: 'width',
//                       type: 'number',
//                       defaultValue: 1920,
//                     },
//                     {
//                       name: 'height',
//                       type: 'number',
//                       defaultValue: 1206,
//                     },
//                     {
//                       name: 'responsiveImages',
//                       type: 'array',
//                       fields: [
//                         {
//                           name: 'breakpoint',
//                           type: 'text',
//                           admin: {
//                             description: 'e.g., max-width:420px',
//                           },
//                         },
//                         {
//                           name: 'imageUrl',
//                           type: 'text',
//                           required: true,
//                         },
//                         {
//                           name: 'imageUrl2x',
//                           type: 'text',
//                         },
//                       ],
//                     },
//                     {
//                       name: 'lazyLoad',
//                       type: 'checkbox',
//                       defaultValue: true,
//                     },
//                   ],
//                 },
//                 {
//                   name: 'overlay',
//                   type: 'group',
//                   label: 'Image Overlay Content',
//                   fields: [
//                     {
//                       name: 'text',
//                       type: 'text',
//                       required: true,
//                       admin: {
//                         description: 'Text shown on image hover/overlay',
//                       },
//                     },
//                     {
//                       name: 'contentClasses',
//                       type: 'text',
//                       defaultValue: 'content',
//                     },
//                     {
//                       name: 'textColor',
//                       type: 'text',
//                       admin: {
//                         description: 'Overlay text color',
//                       },
//                     },
//                     {
//                       name: 'backgroundColor',
//                       type: 'text',
//                       admin: {
//                         description: 'Overlay background color',
//                       },
//                     },
//                   ],
//                 },
//                 {
//                   name: 'copy',
//                   type: 'group',
//                   label: 'Copy Section (Below Image)',
//                   fields: [
//                     {
//                       name: 'copyClasses',
//                       type: 'text',
//                       defaultValue: 'copy',
//                     },
//                     {
//                       name: 'titleClasses',
//                       type: 'text',
//                       defaultValue: 'title',
//                     },
//                     {
//                       name: 'headingTag',
//                       type: 'select',
//                       options: [
//                         { label: 'H2', value: 'h2' },
//                         { label: 'H3', value: 'h3' },
//                         { label: 'H4', value: 'h4' },
//                       ],
//                       defaultValue: 'h2',
//                     },
//                     {
//                       name: 'headingColor',
//                       type: 'text',
//                       admin: {
//                         description: 'Title heading color',
//                       },
//                     },
//                     {
//                       name: 'backgroundColor',
//                       type: 'text',
//                       admin: {
//                         description: 'Copy section background color',
//                       },
//                     },
//                   ],
//                 },
//                 {
//                   name: 'hoverEffect',
//                   type: 'group',
//                   label: 'Hover Styling',
//                   fields: [
//                     {
//                       name: 'hoverBackgroundColor',
//                       type: 'text',
//                     },
//                     {
//                       name: 'hoverTextColor',
//                       type: 'text',
//                     },
//                     {
//                       name: 'hoverBorderColor',
//                       type: 'text',
//                     },
//                     {
//                       name: 'hoverTransform',
//                       type: 'text',
//                       admin: {
//                         description: 'e.g., scale(1.05)',
//                       },
//                     },
//                   ],
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
//       label: 'Global Page Styling',
//       fields: [
//         {
//           name: 'mainId',
//           type: 'text',
//           defaultValue: 'main',
//           admin: {
//             description: 'Main container ID',
//           },
//         },
//         {
//           name: 'mainClasses',
//           type: 'text',
//           admin: {
//             description: 'Additional classes for main container',
//           },
//         },
//         {
//           name: 'pageBackgroundColor',
//           type: 'text',
//           admin: {
//             description: 'Overall page background color',
//           },
//         },
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
//           name: 'accentColor',
//           type: 'text',
//           admin: {
//             description: 'Accent color for links/buttons',
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
//           admin: {
//             description: 'e.g., 1.6',
//           },
//         },
//         {
//           name: 'containerMaxWidth',
//           type: 'text',
//           admin: {
//             description: 'e.g., 1200px, 100%',
//           },
//         },
//         {
//           name: 'gridGap',
//           type: 'text',
//           admin: {
//             description: 'Gap between grid items (e.g., 20px)',
//           },
//         },
//         {
//           name: 'borderRadius',
//           type: 'text',
//           admin: {
//             description: 'Default border radius (e.g., 8px)',
//           },
//         },
//         {
//           name: 'boxShadow',
//           type: 'text',
//           admin: {
//             description: 'Default box shadow',
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
//       name: 'animationSettings',
//       type: 'group',
//       label: 'Animation & Effects',
//       fields: [
//         {
//           name: 'enableAnimations',
//           type: 'checkbox',
//           defaultValue: true,
//         },
//         {
//           name: 'hoverTransitionDuration',
//           type: 'text',
//           defaultValue: '0.3s',
//           admin: {
//             description: 'Duration for hover transitions',
//           },
//         },
//         {
//           name: 'scrollAnimations',
//           type: 'checkbox',
//           defaultValue: false,
//           admin: {
//             description: 'Enable scroll-based animations',
//           },
//         },
//         {
//           name: 'fadeInOnLoad',
//           type: 'checkbox',
//           defaultValue: false,
//         },
//       ],
//     },
//     {
//       name: 'seoSettings',
//       type: 'group',
//       label: 'SEO Settings',
//       fields: [
//         {
//           name: 'metaTitle',
//           type: 'text',
//           defaultValue: 'Breast Surgery - Goldfingers Aesthetics',
//         },
//         {
//           name: 'metaDescription',
//           type: 'textarea',
//         },
//         {
//           name: 'metaKeywords',
//           type: 'text',
//           admin: {
//             description: 'Comma-separated keywords',
//           },
//         },
//         {
//           name: 'ogTitle',
//           type: 'text',
//           admin: {
//             description: 'Open Graph title',
//           },
//         },
//         {
//           name: 'ogDescription',
//           type: 'textarea',
//         },
//         {
//           name: 'ogImage',
//           type: 'upload',
//           relationTo: 'media',
//         },
//         {
//           name: 'canonicalUrl',
//           type: 'text',
//         },
//       ],
//     },
//     {
//       name: 'accessibilitySettings',
//       type: 'group',
//       label: 'Accessibility',
//       fields: [
//         {
//           name: 'skipToContentLink',
//           type: 'checkbox',
//           defaultValue: true,
//           admin: {
//             description: 'Add skip to main content link',
//           },
//         },
//         {
//           name: 'focusIndicatorColor',
//           type: 'text',
//           admin: {
//             description: 'Color for keyboard focus indicators',
//           },
//         },
//         {
//           name: 'highContrastMode',
//           type: 'checkbox',
//           defaultValue: false,
//         },
//       ],
//     },
//     {
//       name: 'publishedAt',
//       type: 'date',
//       admin: {
//         position: 'sidebar',
//         description: 'Publication date',
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
//     {
//       name: 'version',
//       type: 'text',
//       admin: {
//         position: 'sidebar',
//         readOnly: true,
//       },
//     },
//   ],
//   timestamps: true,
// }

// export default BreastPageComponent

import { CollectionConfig } from 'payload'

export const BreastPageComponent: CollectionConfig = {
  slug: 'breast-page-component',
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
      defaultValue: 'Breast Page Component',
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
            {
              label: 'Breast',
              url: '/plastic-surgery/breast/',
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
          defaultValue: 'Breast',
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
              defaultValue: 'Doctor showing breast implant to patient',
            },
          ],
        },
      ],
    },
    // Index Static Section
    {
      name: 'indexStaticSection',
      type: 'group',
      label: 'Index Static Section',
      fields: [
        {
          name: 'show',
          type: 'checkbox',
          label: 'Show Section',
          defaultValue: true,
        },
        {
          name: 'items',
          type: 'array',
          label: 'Index Items',
          admin: {
            description: 'Drag to reorder items',
          },
          defaultValue: [
            {
              title: 'Breast Augmentation',
              url: '/plastic-surgery/breast-augmentation/',
              ariaLabel: 'Opens Breast Augmentation page',
            },
            {
              title: 'Breast Lift',
              url: '/plastic-surgery/breast-lift/',
              ariaLabel: 'Opens Breast Lift page',
            },
            {
              title: 'Breast Reduction',
              url: '/plastic-surgery/breast-reduction/',
              ariaLabel: 'Opens Breast Reduction page',
            },
            {
              title: 'Breast Revision',
              url: '/plastic-surgery/breast-revision/',
              ariaLabel: 'Opens Breast Revision page',
            },
          ],
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
                },
              ],
            },
            {
              name: 'overlayText',
              type: 'text',
              label: 'Overlay Text',
              admin: {
                description: 'Text displayed over the image',
              },
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
            { label: 'Index Static Section', value: 'indexStatic' },
          ],
        },
      ],
      defaultValue: [{ section: 'hero' }, { section: 'indexStatic' }],
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
          defaultValue: 'Breast - Goldfingers Aesthetics and Plastic Surgery',
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          label: 'Meta Description',
          defaultValue:
            'Explore breast procedures at Goldfingers Aesthetics & Plastic Surgery in Orlando, Florida.',
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
            'breast augmentation, breast lift, breast reduction, breast revision, Orlando, Florida',
        },
        {
          name: 'canonicalUrl',
          type: 'text',
          label: 'Canonical URL',
          defaultValue: '/plastic-surgery/breast/',
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
                description: 'Without "data-" prefix (e.g., "s3-module")',
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