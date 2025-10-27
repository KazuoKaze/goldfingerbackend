// import { CollectionConfig } from 'payload'

// export const BreastLiftPageComponent: CollectionConfig = {
//   slug: 'breast-lift-page-component',
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
//       defaultValue: 'Breast Lift Page Component',
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
//               label: 'Breast Lift',
//               url: '/plastic-surgery/breast-lift/',
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
//           defaultValue: 'Breast Lift',
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
//               defaultValue: 'doctor measuring a womans breasts',
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
//           defaultValue: 'Get a lift and love the way you look',
//         },
//         {
//           name: 'content',
//           type: 'richText',
//           label: 'Content',
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
//           name: 'className',
//           type: 'text',
//           label: 'Additional Classes',
//           defaultValue: 'mod_banner dark hide-divider viewport background-4',
//         },
//         {
//           name: 'heading',
//           type: 'text',
//           label: 'Heading',
//           defaultValue: "Dr. Mcclure's Expertise In Breast Lifting Ensures Natural-Looking Results",
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
//           defaultValue: 'Is It Time To Consider A Breast Lift?',
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
//               defaultValue: 'smiling woman holding clipboard',
//             },
//           ],
//         },
//       ],
//     },
//     // Banner Section 2
//     {
//       name: 'bannerSection2',
//       type: 'group',
//       label: 'Banner Section 2',
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
//           defaultValue: 'mod_banner dark hide-divider viewport background-12',
//         },
//         {
//           name: 'heading',
//           type: 'text',
//           label: 'Heading',
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
//     // Box Grid Section - Incisions
//     {
//       name: 'boxGridSection',
//       type: 'group',
//       label: 'Box Grid Section - Incisions',
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
//           defaultValue: 'mod_box_grid viewport container option-1 default no-bg wider',
//         },
//         {
//           name: 'heading',
//           type: 'text',
//           label: 'Main Heading',
//           defaultValue: 'Breast Lift Incisions',
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
//               heading: 'Crescent Lift Incision',
//             },
//             {
//               heading: 'Peri-Areolar or Donut Lift Incision',
//             },
//             {
//               heading: 'Vertical or Lollipop Lift Incision',
//             },
//             {
//               heading: 'Anchor or Inverted-T Lift Incision',
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
//           name: 'className',
//           type: 'text',
//           label: 'Additional Classes',
//           defaultValue: 'mod_columns_two viewport container',
//         },
//         {
//           name: 'heading',
//           type: 'text',
//           label: 'Heading',
//           defaultValue: 'What Is The Recovery After A Breast Lift?',
//         },
//         {
//           name: 'leftContent',
//           type: 'richText',
//           label: 'Left Column Content',
//         },
//         {
//           name: 'rightContent',
//           type: 'richText',
//           label: 'Right Column Content',
//         },
//       ],
//     },
//     // Banner Section 3
//     {
//       name: 'bannerSection3',
//       type: 'group',
//       label: 'Banner Section 3',
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
//           defaultValue: 'mod_banner dark hide-divider viewport background-13',
//         },
//         {
//           name: 'heading',
//           type: 'text',
//           label: 'Heading',
//           defaultValue: 'Why Choose Goldfingers Aesthetics & Plastic Surgery?',
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
//             { label: 'Banner Section 1', value: 'banner1' },
//             { label: 'Half Image Section', value: 'halfImage' },
//             { label: 'Banner Section 2', value: 'banner2' },
//             { label: 'Box Grid Section - Incisions', value: 'boxGrid' },
//             { label: 'Two Column Section', value: 'twoColumn' },
//             { label: 'Banner Section 3', value: 'banner3' },
//           ],
//         },
//       ],
//       defaultValue: [
//         { section: 'hero' },
//         { section: 'intro' },
//         { section: 'banner1' },
//         { section: 'halfImage' },
//         { section: 'banner2' },
//         { section: 'boxGrid' },
//         { section: 'twoColumn' },
//         { section: 'banner3' },
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
//           defaultValue: 'Breast Lift - Goldfingers Aesthetics and Plastic Surgery',
//         },
//         {
//           name: 'metaDescription',
//           type: 'textarea',
//           label: 'Meta Description',
//           defaultValue:
//             'Revive your natural beauty with expert breast lift surgery by Dr. Michael McClure at Goldfingers Aesthetics & Plastic Surgery in Orlando, Florida.',
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
//             'breast lift, mastopexy, breast lifting, plastic surgery, Dr. McClure, Orlando, Florida',
//         },
//         {
//           name: 'canonicalUrl',
//           type: 'text',
//           label: 'Canonical URL',
//           defaultValue: '/plastic-surgery/breast-lift/',
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

export const BreastLiftPageComponent: CollectionConfig = {
  slug: 'breast-lift-page-component',
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
      defaultValue: 'Breast Lift Page Component',
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
              label: 'Breast Lift',
              url: '/plastic-surgery/breast-lift/',
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
          defaultValue: 'Breast Lift',
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
              defaultValue: 'doctor measuring a womans breasts',
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
          defaultValue: 'Get a lift and love the way you look',
        },
        {
          name: 'content',
          type: 'richText',
          label: 'Content',
        },
      ],
    },
    // Banner Section 1
    {
      name: 'bannerSection1',
      type: 'group',
      label: 'Banner Section 1',
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
          defaultValue: "Dr. Mcclure's Expertise In Breast Lifting Ensures Natural-Looking Results",
        },
        {
          name: 'leftContent',
          type: 'richText',
          label: 'Left Column Content',
        },
        {
          name: 'rightContent',
          type: 'richText',
          label: 'Right Column Content',
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
          defaultValue: 'Is It Time To Consider A Breast Lift?',
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
              defaultValue: 'smiling woman holding clipboard',
            },
          ],
        },
      ],
    },
    // Banner Section 2
    {
      name: 'bannerSection2',
      type: 'group',
      label: 'Banner Section 2',
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
          defaultValue: 'mod_banner dark hide-divider viewport background-12',
        },
        {
          name: 'leftHeading',
          type: 'text',
          label: 'Left Column Heading',
          defaultValue: 'How Is A Breast Lift Performed?',
        },
        {
          name: 'leftContent',
          type: 'richText',
          label: 'Left Column Content',
        },
        {
          name: 'rightHeading',
          type: 'text',
          label: 'Right Column Heading',
          defaultValue: 'Breast Lift Benefits',
        },
        {
          name: 'rightContent',
          type: 'richText',
          label: 'Right Column Content',
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
    // Box Grid Section - Incisions
    {
      name: 'boxGridSection',
      type: 'group',
      label: 'Box Grid Section - Incisions',
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
          defaultValue: 'mod_box_grid viewport container option-1 default no-bg wider',
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Main Heading',
          defaultValue: 'Breast Lift Incisions',
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
              heading: 'Crescent Lift Incision',
            },
            {
              heading: 'Peri-Areolar or Donut Lift Incision',
            },
            {
              heading: 'Vertical or Lollipop Lift Incision',
            },
            {
              heading: 'Anchor or Inverted-T Lift Incision',
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
          name: 'className',
          type: 'text',
          label: 'Additional Classes',
          defaultValue: 'mod_columns_two viewport container',
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Heading',
          defaultValue: 'What Is The Recovery After A Breast Lift?',
        },
        {
          name: 'leftContent',
          type: 'richText',
          label: 'Left Column Content',
        },
        {
          name: 'rightContent',
          type: 'richText',
          label: 'Right Column Content',
        },
      ],
    },
    // Banner Section 3
    {
      name: 'bannerSection3',
      type: 'group',
      label: 'Banner Section 3',
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
          defaultValue: 'mod_banner dark hide-divider viewport background-13',
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Heading',
          defaultValue: 'Why Choose Goldfingers Aesthetics & Plastic Surgery?',
        },
        {
          name: 'content',
          type: 'richText',
          label: 'Content',
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
            { label: 'Banner Section 1', value: 'banner1' },
            { label: 'Half Image Section', value: 'halfImage' },
            { label: 'Banner Section 2', value: 'banner2' },
            { label: 'Box Grid Section - Incisions', value: 'boxGrid' },
            { label: 'Two Column Section', value: 'twoColumn' },
            { label: 'Banner Section 3', value: 'banner3' },
          ],
        },
      ],
      defaultValue: [
        { section: 'hero' },
        { section: 'intro' },
        { section: 'banner1' },
        { section: 'halfImage' },
        { section: 'banner2' },
        { section: 'boxGrid' },
        { section: 'twoColumn' },
        { section: 'banner3' },
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
          defaultValue: 'Breast Lift - Goldfingers Aesthetics and Plastic Surgery',
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          label: 'Meta Description',
          defaultValue:
            'Revive your natural beauty with expert breast lift surgery by Dr. Michael McClure at Goldfingers Aesthetics & Plastic Surgery in Orlando, Florida.',
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
            'breast lift, mastopexy, breast lifting, plastic surgery, Dr. McClure, Orlando, Florida',
        },
        {
          name: 'canonicalUrl',
          type: 'text',
          label: 'Canonical URL',
          defaultValue: '/plastic-surgery/breast-lift/',
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