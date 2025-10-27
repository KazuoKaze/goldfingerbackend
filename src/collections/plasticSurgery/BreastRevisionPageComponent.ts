// import { CollectionConfig } from 'payload'

// export const BreastRevisionPageComponent: CollectionConfig = {
//   slug: 'breast-revision-page-component',
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
//       defaultValue: 'Breast Revision Page Component',
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
//               label: 'Plastic Surgery',
//               url: '/plastic-surgery/',
//               ariaLabel: 'Breadcrumbs to help navigate the user',
//             },
//             {
//               label: 'Breast Revision',
//               url: '/plastic-surgery/breast-revision/',
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
//           defaultValue: 'Breast Revision',
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
//               name: 'className',
//               type: 'text',
//               label: 'Button Class',
//               defaultValue: 'btn white',
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
//               defaultValue: 'woman walking with nurse',
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
//           name: 'className',
//           type: 'text',
//           label: 'Additional Classes',
//           defaultValue: 'mod_intro container viewport option-1 wide wow fadeInUp',
//         },
//         {
//           name: 'logo',
//           type: 'upload',
//           relationTo: 'media',
//           label: 'Logo Image',
//         },
//         {
//           name: 'logoAlt',
//           type: 'text',
//           label: 'Logo Alt Text',
//           defaultValue: 'Goldfingers aesthetic logo',
//         },
//         {
//           name: 'logoWidth',
//           type: 'number',
//           label: 'Logo Width',
//           defaultValue: 58,
//         },
//         {
//           name: 'logoHeight',
//           type: 'number',
//           label: 'Logo Height',
//           defaultValue: 64,
//         },
//         {
//           name: 'heading',
//           type: 'text',
//           label: 'Heading',
//           defaultValue: 'Personalized Breast Revision',
//         },
//         {
//           name: 'content',
//           type: 'richText',
//           label: 'Content',
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
//           name: 'className',
//           type: 'text',
//           label: 'Additional Classes',
//           defaultValue: 'mod_half_image viewport half-image container wow fadeInLeft',
//         },
//         {
//           name: 'heading',
//           type: 'text',
//           label: 'Heading',
//           defaultValue: 'Breast Revision:',
//         },
//         {
//           name: 'subheading',
//           type: 'text',
//           label: 'Subheading',
//           defaultValue: 'What You Need to Know',
//         },
//         {
//           name: 'content',
//           type: 'richText',
//           label: 'Content',
//         },
//         {
//           name: 'image',
//           type: 'group',
//           label: 'Section Image',
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
//               defaultValue: 'blonde woman in sports bra',
//             },
//           ],
//         },
//       ],
//     },
//     // Banner Section - Should I Undergo
//     {
//       name: 'bannerSection1',
//       type: 'group',
//       label: 'Banner Section - Should I Undergo',
//       fields: [
//         {
//           name: 'show',
//           type: 'checkbox',
//           label: 'Show Section',
//           defaultValue: true,
//         },
//         {
//           name: 'className',
//           type: 'text',
//           label: 'Additional Classes',
//           defaultValue: 'mod_banner dark hide-divider viewport background-4',
//         },
//         {
//           name: 'heading',
//           type: 'text',
//           label: 'Heading',
//           defaultValue: 'Should I Undergo Breast Revision Surgery?',
//         },
//         {
//           name: 'content',
//           type: 'richText',
//           label: 'Content',
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
//     // Column Section 1 - Dr. McClure Is Here
//     {
//       name: 'columnSection1',
//       type: 'group',
//       label: 'Column Section 1 - Dr. McClure Is Here',
//       fields: [
//         {
//           name: 'show',
//           type: 'checkbox',
//           label: 'Show Section',
//           defaultValue: true,
//         },
//         {
//           name: 'className',
//           type: 'text',
//           label: 'Additional Classes',
//           defaultValue: 'mod_column viewport container has-media',
//         },
//         {
//           name: 'rowClassName',
//           type: 'text',
//           label: 'Row Classes',
//           defaultValue: 'row mt-40 mb-40 media-right',
//           admin: {
//             description: 'Classes for positioning (e.g., media-right, media-left)',
//           },
//         },
//         {
//           name: 'heading',
//           type: 'text',
//           label: 'Heading',
//           defaultValue: 'Dr. McClure Is Here to Help',
//         },
//         {
//           name: 'content',
//           type: 'richText',
//           label: 'Content',
//         },
//         {
//           name: 'image',
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
//               defaultValue: 'Goldfingers medspa room',
//             },
//           ],
//         },
//       ],
//     },
//     // Box Grid Section 1 - Surgery Procedures
//     {
//       name: 'boxGridSection1',
//       type: 'group',
//       label: 'Box Grid Section 1 - Surgery Procedures',
//       fields: [
//         {
//           name: 'show',
//           type: 'checkbox',
//           label: 'Show Section',
//           defaultValue: true,
//         },
//         {
//           name: 'className',
//           type: 'text',
//           label: 'Additional Classes',
//           defaultValue:
//             'mod_box_grid viewport five-boxes container option-2 default bkg-image dark wider',
//         },
//         {
//           name: 'heading',
//           type: 'text',
//           label: 'Main Heading',
//           defaultValue: 'What Does The Surgery Entail?',
//         },
//         {
//           name: 'introContent',
//           type: 'richText',
//           label: 'Intro Content',
//           admin: {
//             description: 'Content that appears before the boxes',
//           },
//         },
//         {
//           name: 'boxes',
//           type: 'array',
//           label: 'Content Boxes',
//           admin: {
//             description: 'Drag to reorder boxes',
//           },
//           defaultValue: [
//             {
//               heading: 'Implant Replacement',
//             },
//             {
//               heading: 'Implant Removal',
//             },
//             {
//               heading: 'Implant Repositioning',
//             },
//             {
//               heading: 'Breast Lift (Mastopexy)',
//             },
//             {
//               heading: 'Capsular Contracture Correction',
//             },
//           ],
//           fields: [
//             {
//               name: 'heading',
//               type: 'text',
//               label: 'Box Heading',
//               required: true,
//             },
//             {
//               name: 'content',
//               type: 'richText',
//               label: 'Box Content',
//             },
//           ],
//         },
//         {
//           name: 'afterContent',
//           type: 'richText',
//           label: 'Content After Boxes',
//           admin: {
//             description: 'Content that appears after the boxes',
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
//               defaultValue: 'Background media',
//             },
//           ],
//         },
//       ],
//     },
//     // Column Section 2 - Recovery Time
//     {
//       name: 'columnSection2',
//       type: 'group',
//       label: 'Column Section 2 - Recovery Time',
//       fields: [
//         {
//           name: 'show',
//           type: 'checkbox',
//           label: 'Show Section',
//           defaultValue: true,
//         },
//         {
//           name: 'className',
//           type: 'text',
//           label: 'Additional Classes',
//           defaultValue: 'mod_column viewport container',
//         },
//         {
//           name: 'rowClassName',
//           type: 'text',
//           label: 'Row Classes',
//           defaultValue: 'row mt-30 mb-30',
//           admin: {
//             description: 'Classes for positioning',
//           },
//         },
//         {
//           name: 'heading',
//           type: 'text',
//           label: 'Heading',
//           defaultValue: 'What Is The Recovery Time After Breast Revision Surgery?',
//         },
//         {
//           name: 'content',
//           type: 'richText',
//           label: 'Content',
//         },
//       ],
//     },
//     // Box Grid Section 2 - Why Choose
//     {
//       name: 'boxGridSection2',
//       type: 'group',
//       label: 'Box Grid Section 2 - Why Choose',
//       fields: [
//         {
//           name: 'show',
//           type: 'checkbox',
//           label: 'Show Section',
//           defaultValue: true,
//         },
//         {
//           name: 'className',
//           type: 'text',
//           label: 'Additional Classes',
//           defaultValue: 'mod_box_grid viewport container option-3 default bkg-image dark wider',
//         },
//         {
//           name: 'heading',
//           type: 'text',
//           label: 'Main Heading',
//           defaultValue: 'Why choose Goldfingers Aesthetics & Plastic Surgery?',
//         },
//         {
//           name: 'introContent',
//           type: 'richText',
//           label: 'Intro Content',
//           admin: {
//             description: 'Content that appears before the boxes',
//           },
//         },
//         {
//           name: 'boxes',
//           type: 'array',
//           label: 'Content Boxes',
//           admin: {
//             description: 'Drag to reorder boxes',
//           },
//           defaultValue: [
//             {
//               heading: 'Over 25 years in aesthetics',
//             },
//             {
//               heading: 'Largest Aesthetics Center',
//             },
//             {
//               heading: 'Board-Certified Expertise',
//             },
//             {
//               heading: 'Clinical Excellence',
//             },
//             {
//               heading: 'State-of-the-Art Facility',
//             },
//             {
//               heading: 'Patient-Centric Care',
//             },
//           ],
//           fields: [
//             {
//               name: 'heading',
//               type: 'text',
//               label: 'Box Heading',
//               required: true,
//             },
//             {
//               name: 'content',
//               type: 'richText',
//               label: 'Box Content',
//             },
//           ],
//         },
//         {
//           name: 'afterContent',
//           type: 'richText',
//           label: 'Content After Boxes',
//           admin: {
//             description: 'Content that appears after the boxes',
//           },
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
//             { label: 'Half Image Section', value: 'halfImage' },
//             { label: 'Banner Section - Should I Undergo', value: 'bannerSection1' },
//             { label: 'Column Section 1 - Dr. McClure', value: 'columnSection1' },
//             { label: 'Box Grid Section 1 - Surgery', value: 'boxGridSection1' },
//             { label: 'Column Section 2 - Recovery', value: 'columnSection2' },
//             { label: 'Box Grid Section 2 - Why Choose', value: 'boxGridSection2' },
//           ],
//         },
//       ],
//       defaultValue: [
//         { section: 'hero' },
//         { section: 'intro' },
//         { section: 'halfImage' },
//         { section: 'bannerSection1' },
//         { section: 'columnSection1' },
//         { section: 'boxGridSection1' },
//         { section: 'columnSection2' },
//         { section: 'boxGridSection2' },
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
//           defaultValue: 'Breast Revision - Goldfingers Aesthetics and Plastic Surgery',
//         },
//         {
//           name: 'metaDescription',
//           type: 'textarea',
//           label: 'Meta Description',
//           defaultValue:
//             'Expert breast revision surgery by Dr. Michael McClure at Goldfingers Aesthetics & Plastic Surgery in Orlando, Florida. Refine, refresh, and reclaim your ideal breast shape.',
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
//           defaultValue:
//             'breast revision, breast implant revision, secondary breast augmentation, plastic surgery, Dr. McClure, Orlando, Florida',
//         },
//         {
//           name: 'canonicalUrl',
//           type: 'text',
//           label: 'Canonical URL',
//           defaultValue: '/plastic-surgery/breast-revision/',
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
//       ],
//     },
//     // Performance Settings
//     {
//       name: 'performanceSettings',
//       type: 'group',
//       label: 'Performance Settings',
//       fields: [
//         {
//           name: 'lazyLoadImages',
//           type: 'checkbox',
//           label: 'Lazy Load Images',
//           defaultValue: true,
//           admin: {
//             description: 'Load images only when they come into view',
//           },
//         },
//         {
//           name: 'optimizeImages',
//           type: 'checkbox',
//           label: 'Optimize Images',
//           defaultValue: true,
//           admin: {
//             description: 'Automatically optimize and compress images',
//           },
//         },
//         {
//           name: 'imageQuality',
//           type: 'number',
//           label: 'Image Quality',
//           defaultValue: 85,
//           admin: {
//             description: 'Image compression quality (1-100)',
//           },
//           min: 1,
//           max: 100,
//         },
//       ],
//     },
//     // Advanced Settings
//     {
//       name: 'advancedSettings',
//       type: 'group',
//       label: 'Advanced Settings',
//       fields: [
//         {
//           name: 'customClasses',
//           type: 'text',
//           label: 'Custom CSS Classes',
//           admin: {
//             description: 'Add custom CSS classes to the main container',
//           },
//         },
//         {
//           name: 'dataAttributes',
//           type: 'array',
//           label: 'Data Attributes',
//           admin: {
//             description: 'Add custom data attributes for tracking/analytics',
//           },
//           fields: [
//             {
//               name: 'name',
//               type: 'text',
//               label: 'Data Attribute Name',
//               required: true,
//               admin: {
//                 description: 'Without "data-" prefix (e.g., "s3-module")',
//               },
//             },
//             {
//               name: 'value',
//               type: 'text',
//               label: 'Data Attribute Value',
//             },
//           ],
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
//     {
//       name: 'version',
//       type: 'text',
//       label: 'Version',
//       defaultValue: '1.0.0',
//       admin: {
//         description: 'Component version for tracking changes',
//         readOnly: true,
//       },
//     },
//   ],
//   timestamps: true,
//   versions: {
//     drafts: true,
//     maxPerDoc: 50,
//   },
// }

import { CollectionConfig } from 'payload'

export const BreastRevisionPageComponent: CollectionConfig = {
  slug: 'breast-revision-page-component',
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
      defaultValue: 'Breast Revision Page Component',
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
              label: 'Breast Revision',
              url: '/plastic-surgery/breast-revision/',
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
          defaultValue: 'Breast Revision',
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
              name: 'className',
              type: 'text',
              label: 'Button Class',
              defaultValue: 'btn white',
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
              defaultValue: 'woman walking with nurse',
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
          name: 'className',
          type: 'text',
          label: 'Additional Classes',
          defaultValue: 'mod_intro container viewport option-1 wide wow fadeInUp',
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
          defaultValue: 'Personalized Breast Revision',
        },
        {
          name: 'content',
          type: 'richText',
          label: 'Content',
        },
      ],
    },
    // Half Image Section
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
          name: 'className',
          type: 'text',
          label: 'Additional Classes',
          defaultValue: 'mod_half_image viewport half-image container wow fadeInLeft',
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Heading',
          defaultValue: 'Breast Revision:',
        },
        {
          name: 'subheading',
          type: 'text',
          label: 'Subheading',
          defaultValue: 'What You Need to Know',
        },
        {
          name: 'content',
          type: 'richText',
          label: 'Content',
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
              defaultValue: 'blonde woman in sports bra',
            },
          ],
        },
      ],
    },
    // Banner Section - Should I Undergo
    {
      name: 'bannerSection1',
      type: 'group',
      label: 'Banner Section - Should I Undergo',
      fields: [
        {
          name: 'show',
          type: 'checkbox',
          label: 'Show Section',
          defaultValue: true,
        },
        {
          name: 'className',
          type: 'text',
          label: 'Additional Classes',
          defaultValue: 'mod_banner dark hide-divider viewport background-4',
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Heading',
          defaultValue: 'Should I Undergo Breast Revision Surgery?',
        },
        {
          name: 'introContent',
          type: 'richText',
          label: 'Intro Content',
          admin: {
            description: 'Content that appears before the columns',
          },
        },
        {
          name: 'leftColumn',
          type: 'array',
          label: 'Left Column Items',
          admin: {
            description: 'List items for the left column',
          },
          fields: [
            {
              name: 'title',
              type: 'text',
              label: 'Item Title',
              required: true,
            },
            {
              name: 'description',
              type: 'textarea',
              label: 'Item Description',
            },
          ],
        },
        {
          name: 'rightColumn',
          type: 'array',
          label: 'Right Column Items',
          admin: {
            description: 'List items for the right column',
          },
          fields: [
            {
              name: 'title',
              type: 'text',
              label: 'Item Title',
              required: true,
            },
            {
              name: 'description',
              type: 'textarea',
              label: 'Item Description',
            },
          ],
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
      ],
    },
    // Column Section 1 - Dr. McClure Is Here
    {
      name: 'columnSection1',
      type: 'group',
      label: 'Column Section 1 - Dr. McClure Is Here',
      fields: [
        {
          name: 'show',
          type: 'checkbox',
          label: 'Show Section',
          defaultValue: true,
        },
        {
          name: 'className',
          type: 'text',
          label: 'Additional Classes',
          defaultValue: 'mod_column viewport container has-media',
        },
        {
          name: 'rowClassName',
          type: 'text',
          label: 'Row Classes',
          defaultValue: 'row mt-40 mb-40 media-right',
          admin: {
            description: 'Classes for positioning (e.g., media-right, media-left)',
          },
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Heading',
          defaultValue: 'Dr. McClure Is Here to Help',
        },
        {
          name: 'content',
          type: 'richText',
          label: 'Content',
        },
        {
          name: 'image',
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
              defaultValue: 'Goldfingers medspa room',
            },
          ],
        },
      ],
    },
    // Box Grid Section 1 - Surgery Procedures
    {
      name: 'boxGridSection1',
      type: 'group',
      label: 'Box Grid Section 1 - Surgery Procedures',
      fields: [
        {
          name: 'show',
          type: 'checkbox',
          label: 'Show Section',
          defaultValue: true,
        },
        {
          name: 'className',
          type: 'text',
          label: 'Additional Classes',
          defaultValue:
            'mod_box_grid viewport five-boxes container option-2 default bkg-image dark wider',
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Main Heading',
          defaultValue: 'What Does The Surgery Entail?',
        },
        {
          name: 'introContent',
          type: 'richText',
          label: 'Intro Content',
          admin: {
            description: 'Content that appears before the boxes',
          },
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
              heading: 'Implant Replacement',
            },
            {
              heading: 'Implant Removal',
            },
            {
              heading: 'Implant Repositioning',
            },
            {
              heading: 'Breast Lift (Mastopexy)',
            },
            {
              heading: 'Capsular Contracture Correction',
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
              label: 'Box Content',
            },
          ],
        },
        {
          name: 'afterContent',
          type: 'richText',
          label: 'Content After Boxes',
          admin: {
            description: 'Content that appears after the boxes',
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
              defaultValue: 'Background media',
            },
          ],
        },
      ],
    },
    // Column Section 2 - Recovery Time
    {
      name: 'columnSection2',
      type: 'group',
      label: 'Column Section 2 - Recovery Time',
      fields: [
        {
          name: 'show',
          type: 'checkbox',
          label: 'Show Section',
          defaultValue: true,
        },
        {
          name: 'className',
          type: 'text',
          label: 'Additional Classes',
          defaultValue: 'mod_column viewport container',
        },
        {
          name: 'rowClassName',
          type: 'text',
          label: 'Row Classes',
          defaultValue: 'row mt-30 mb-30',
          admin: {
            description: 'Classes for positioning',
          },
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Heading',
          defaultValue: 'What Is The Recovery Time After Breast Revision Surgery?',
        },
        {
          name: 'mainIntro',
          type: 'richText',
          label: 'Main intro Content',
        },
        {
          name: 'leftColumn',
          type: 'richText',
          label: 'Left Column Content',
        },
        {
          name: 'rightColumn',
          type: 'richText',
          label: 'Right Column Content',
        },
      ],
    },
    // Box Grid Section 2 - Why Choose
    {
      name: 'boxGridSection2',
      type: 'group',
      label: 'Box Grid Section 2 - Why Choose',
      fields: [
        {
          name: 'show',
          type: 'checkbox',
          label: 'Show Section',
          defaultValue: true,
        },
        {
          name: 'className',
          type: 'text',
          label: 'Additional Classes',
          defaultValue: 'mod_box_grid viewport container option-3 default bkg-image dark wider',
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Main Heading',
          defaultValue: 'Why choose Goldfingers Aesthetics & Plastic Surgery?',
        },
        {
          name: 'introContent',
          type: 'richText',
          label: 'Intro Content',
          admin: {
            description: 'Content that appears before the boxes',
          },
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
              heading: 'Over 25 years in aesthetics',
            },
            {
              heading: 'Largest Aesthetics Center',
            },
            {
              heading: 'Board-Certified Expertise',
            },
            {
              heading: 'Clinical Excellence',
            },
            {
              heading: 'State-of-the-Art Facility',
            },
            {
              heading: 'Patient-Centric Care',
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
              label: 'Box Content',
            },
          ],
        },
        {
          name: 'afterContent',
          type: 'richText',
          label: 'Content After Boxes',
          admin: {
            description: 'Content that appears after the boxes',
          },
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
            { label: 'Half Image Section', value: 'halfImage' },
            { label: 'Banner Section - Should I Undergo', value: 'bannerSection1' },
            { label: 'Column Section 1 - Dr. McClure', value: 'columnSection1' },
            { label: 'Box Grid Section 1 - Surgery', value: 'boxGridSection1' },
            { label: 'Column Section 2 - Recovery', value: 'columnSection2' },
            { label: 'Box Grid Section 2 - Why Choose', value: 'boxGridSection2' },
          ],
        },
      ],
      defaultValue: [
        { section: 'hero' },
        { section: 'intro' },
        { section: 'halfImage' },
        { section: 'bannerSection1' },
        { section: 'columnSection1' },
        { section: 'boxGridSection1' },
        { section: 'columnSection2' },
        { section: 'boxGridSection2' },
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
          defaultValue: 'Breast Revision - Goldfingers Aesthetics and Plastic Surgery',
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          label: 'Meta Description',
          defaultValue:
            'Expert breast revision surgery by Dr. Michael McClure at Goldfingers Aesthetics & Plastic Surgery in Orlando, Florida. Refine, refresh, and reclaim your ideal breast shape.',
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
            'breast revision, breast implant revision, secondary breast augmentation, plastic surgery, Dr. McClure, Orlando, Florida',
        },
        {
          name: 'canonicalUrl',
          type: 'text',
          label: 'Canonical URL',
          defaultValue: '/plastic-surgery/breast-revision/',
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