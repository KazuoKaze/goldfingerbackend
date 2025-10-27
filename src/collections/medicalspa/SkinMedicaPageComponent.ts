// import { CollectionConfig } from 'payload'

// export const SkinMedicaPageComponent: CollectionConfig = {
//   slug: 'skinmedica-page-component',
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
//       defaultValue: 'SkinMedica Page Component',
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
//           defaultValue: 'SkinMedica',
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
//               defaultValue: 'Woman applying face cream',
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
//           defaultValue: 'Discovering Healthy Skin with SkinMedica',
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
//     // Box Grid Section 1
//     {
//       name: 'boxGridSection1',
//       type: 'group',
//       label: 'Box Grid Section 1 (5 Products)',
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
//               defaultValue: 'Background media',
//             },
//           ],
//         },
//         {
//           name: 'boxes',
//           type: 'array',
//           label: 'Product Boxes',
//           admin: {
//             description: 'Drag to reorder boxes',
//           },
//           fields: [
//             {
//               name: 'heading',
//               type: 'text',
//               label: 'Product Name',
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
//               label: 'Description',
//               required: true,
//             },
//             {
//               name: 'backgroundColor',
//               type: 'text',
//               label: 'Box Background Color',
//             },
//           ],
//         },
//       ],
//     },
//     // Half Image Section (Lytera 2.0)
//     {
//       name: 'halfImageSection',
//       type: 'group',
//       label: 'Half Image Section (Lytera 2.0)',
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
//           label: 'Product List Items',
//           admin: {
//             description: 'Drag to reorder items',
//           },
//           fields: [
//             {
//               name: 'text',
//               type: 'text',
//               label: 'Item Text',
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
//               defaultValue: "Nurse wearing gloves examines female patient's forehead",
//             },
//           ],
//         },
//       ],
//     },
//     // Banner Section 1 (Discover the Power)
//     {
//       name: 'bannerSection1',
//       type: 'group',
//       label: 'Banner Section 1 (Discover Power)',
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
//           name: 'content',
//           type: 'richText',
//           label: 'Content',
//         },
//         {
//           name: 'columnContent',
//           type: 'array',
//           label: 'Column Content',
//           admin: {
//             description: 'Content organized in columns',
//           },
//           maxRows: 2,
//           fields: [
//             {
//               name: 'content',
//               type: 'richText',
//               label: 'Column Content',
//               required: true,
//             },
//           ],
//         },
//         {
//           name: 'bulletList',
//           type: 'array',
//           label: 'Bullet Point List',
//           admin: {
//             description: 'Drag to reorder items',
//           },
//           fields: [
//             {
//               name: 'text',
//               type: 'text',
//               label: 'Item Text',
//               required: true,
//             },
//           ],
//         },
//         {
//           name: 'closingContent',
//           type: 'richText',
//           label: 'Closing Content',
//         },
//       ],
//     },
//     // Box Grid Section 2 (Experience)
//     {
//       name: 'boxGridSection2',
//       type: 'group',
//       label: 'Box Grid Section 2 (Goldfingers Experience)',
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
//           name: 'headingBefore',
//           type: 'text',
//           label: 'Section Heading',
//           required: true,
//           defaultValue: 'The Goldfingers Aesthetics Experience',
//         },
//         {
//           name: 'headingBeforeColor',
//           type: 'text',
//           label: 'Heading Color',
//         },
//         {
//           name: 'contentBefore',
//           type: 'richText',
//           label: 'Intro Content',
//         },
//         {
//           name: 'boxes',
//           type: 'array',
//           label: 'Experience Boxes',
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
//               required: true,
//             },
//             {
//               name: 'backgroundColor',
//               type: 'text',
//               label: 'Box Background Color',
//             },
//           ],
//         },
//         {
//           name: 'contentAfter',
//           type: 'richText',
//           label: 'Closing Content',
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
//             { label: 'Box Grid Section 1 (Products)', value: 'boxGridSection1' },
//             { label: 'Half Image Section (Lytera 2.0)', value: 'halfImageSection' },
//             { label: 'Banner Section 1 (Discover Power)', value: 'bannerSection1' },
//             { label: 'Box Grid Section 2 (Experience)', value: 'boxGridSection2' },
//           ],
//         },
//       ],
//       defaultValue: [
//         { section: 'hero' },
//         { section: 'intro' },
//         { section: 'boxGridSection1' },
//         { section: 'halfImageSection' },
//         { section: 'bannerSection1' },
//         { section: 'boxGridSection2' },
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
//             description: 'Duration for fade in animations (e.g., 1s, 2s)',
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
//           defaultValue: '2s',
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



// collections/SkinMedicaPage.ts

import { CollectionConfig } from 'payload'

export const SkinMedicaPage: CollectionConfig = {
  slug: 'skinMedicaPage',
  admin: {
    useAsTitle: 'componentName',
    defaultColumns: ['componentName', 'slug', 'updatedAt'],
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
      label: 'Component Name',
      admin: {
        description: 'Name to identify this component (e.g., SkinMedica)',
      },
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: 'URL Slug',
      admin: {
        description: 'URL-friendly identifier (e.g., skin-medica)',
      },
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
      label: 'Active',
    },

    // Hero Module Section
    {
      name: 'heroModule',
      type: 'group',
      label: 'Hero Module',
      fields: [
        {
          name: 'enabled',
          type: 'checkbox',
          defaultValue: true,
          label: 'Enable Hero Module',
        },
        {
          name: 'className',
          type: 'text',
          label: 'Custom Class Names',
          defaultValue: 'mod_hero banner mobile-stack',
          admin: {
            description: 'CSS classes for the hero module',
          },
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
        // Background Texture Image
        {
          name: 'backgroundTexture',
          type: 'group',
          label: 'Background Texture',
          fields: [
            {
              name: 'desktop',
              type: 'upload',
              relationTo: 'media',
              label: 'Desktop Image',
            },
            {
              name: 'tablet',
              type: 'upload',
              relationTo: 'media',
              label: 'Tablet Image',
            },
            {
              name: 'mobile',
              type: 'upload',
              relationTo: 'media',
              label: 'Mobile Image',
            },
            {
              name: 'smallMobile',
              type: 'upload',
              relationTo: 'media',
              label: 'Small Mobile Image',
            },
            {
              name: 'altText',
              type: 'text',
              label: 'Alt Text',
              defaultValue: 'Background Texture',
            },
          ],
        },
        // Breadcrumbs
        {
          name: 'breadcrumbs',
          type: 'array',
          label: 'Breadcrumbs',
          admin: {
            description: 'Drag to reorder breadcrumb links',
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
              label: 'Skin Medica',
              url: '/medical-spa/skin-medica/',
              ariaLabel: 'Breadcrumbs to help navigate the user',
            },
          ],
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
              label: 'Link Label',
            },
            {
              name: 'url',
              type: 'text',
              required: true,
              label: 'Link URL',
            },
            {
              name: 'ariaLabel',
              type: 'text',
              label: 'Aria Label',
              defaultValue: 'Breadcrumbs to help navigate the user',
            },
          ],
        },
        {
          name: 'breadcrumbLinkColor',
          type: 'text',
          label: 'Breadcrumb Link Color',
        },
        {
          name: 'breadcrumbHoverColor',
          type: 'text',
          label: 'Breadcrumb Hover Color',
        },
        // Hero Content
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Hero Title',
          defaultValue: 'SkinMedica',
        },
        {
          name: 'titleColor',
          type: 'text',
          label: 'Title Color',
        },
        {
          name: 'description',
          type: 'richText',
          label: 'Hero Description',
          admin: {
            description: 'Text content below the title',
          },
        },
        {
          name: 'descriptionColor',
          type: 'text',
          label: 'Description Color',
        },
        // CTA Button
        {
          name: 'ctaButton',
          type: 'group',
          label: 'CTA Button',
          fields: [
            {
              name: 'enabled',
              type: 'checkbox',
              defaultValue: true,
              label: 'Show CTA Button',
            },
            {
              name: 'label',
              type: 'text',
              label: 'Button Label',
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
              label: 'Button Classes',
              defaultValue: 'btn white',
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
        // Hero Media Image
        {
          name: 'mediaImage',
          type: 'group',
          label: 'Media Image',
          fields: [
            {
              name: 'desktop',
              type: 'upload',
              relationTo: 'media',
              label: 'Desktop Image',
            },
            {
              name: 'tablet',
              type: 'upload',
              relationTo: 'media',
              label: 'Tablet Image',
            },
            {
              name: 'mobile',
              type: 'upload',
              relationTo: 'media',
              label: 'Mobile Image',
            },
            {
              name: 'smallMobile',
              type: 'upload',
              relationTo: 'media',
              label: 'Small Mobile Image',
            },
            {
              name: 'altText',
              type: 'text',
              label: 'Alt Text',
              defaultValue: 'Woman applying face cream',
            },
          ],
        },
      ],
    },

    // Intro Module Section
    {
      name: 'introModule',
      type: 'group',
      label: 'Intro Module',
      fields: [
        {
          name: 'enabled',
          type: 'checkbox',
          defaultValue: true,
          label: 'Enable Intro Module',
        },
        {
          name: 'className',
          type: 'text',
          label: 'Custom Class Names',
          defaultValue: 'mod_intro container viewport option-1 wow fadeInUp',
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
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
          label: 'Logo Image',
          admin: {
            description: 'Logo displayed in the intro section',
          },
        },
        {
          name: 'logoAltText',
          type: 'text',
          label: 'Logo Alt Text',
          defaultValue: 'Goldfingers aesthetic logo',
        },
        {
          name: 'title',
          type: 'text',
          label: 'Intro Title',
          defaultValue: 'Discovering Healthy Skin with SkinMedica',
        },
        {
          name: 'titleColor',
          type: 'text',
          label: 'Title Color',
        },
        {
          name: 'content',
          type: 'richText',
          label: 'Intro Content',
        },
        {
          name: 'contentColor',
          type: 'text',
          label: 'Content Color',
        },
      ],
    },

    // Box Grid Module 1 (Five Boxes)
    {
      name: 'boxGridModule1',
      type: 'group',
      label: 'Box Grid Module 1 (Products)',
      fields: [
        {
          name: 'enabled',
          type: 'checkbox',
          defaultValue: true,
          label: 'Enable Box Grid Module 1',
        },
        {
          name: 'className',
          type: 'text',
          label: 'Custom Class Names',
          defaultValue:
            'mod_box_grid viewport five-boxes container option-1 default bkg-image wider',
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
              name: 'desktop',
              type: 'upload',
              relationTo: 'media',
              label: 'Desktop Image',
            },
            {
              name: 'tablet',
              type: 'upload',
              relationTo: 'media',
              label: 'Tablet Image',
            },
            {
              name: 'mobile',
              type: 'upload',
              relationTo: 'media',
              label: 'Mobile Image',
            },
            {
              name: 'smallMobile',
              type: 'upload',
              relationTo: 'media',
              label: 'Small Mobile Image',
            },
            {
              name: 'altText',
              type: 'text',
              label: 'Alt Text',
              defaultValue: 'Background media',
            },
          ],
        },
        {
          name: 'boxes',
          type: 'array',
          label: 'Box Items',
          admin: {
            description: 'Drag to reorder boxes',
          },
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
              label: 'Box Title',
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
              name: 'customClass',
              type: 'text',
              label: 'Custom CSS Class',
            },
          ],
        },
        {
          name: 'boxBackgroundColor',
          type: 'text',
          label: 'Global Box Background Color',
        },
        {
          name: 'boxBorderColor',
          type: 'text',
          label: 'Global Box Border Color',
        },
        {
          name: 'boxHoverEffect',
          type: 'select',
          label: 'Box Hover Effect',
          options: [
            { label: 'None', value: 'none' },
            { label: 'Scale', value: 'scale' },
            { label: 'Shadow', value: 'shadow' },
            { label: 'Lift', value: 'lift' },
          ],
          defaultValue: 'none',
        },
      ],
    },

    // Half Image Module
    {
      name: 'halfImageModule',
      type: 'group',
      label: 'Half Image Module (Lytera 2.0)',
      fields: [
        {
          name: 'enabled',
          type: 'checkbox',
          defaultValue: true,
          label: 'Enable Half Image Module',
        },
        {
          name: 'className',
          type: 'text',
          label: 'Custom Class Names',
          defaultValue: 'mod_half_image viewport half-image container wow fadeInLeft',
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
          name: 'image',
          type: 'group',
          label: 'Image',
          fields: [
            {
              name: 'desktop',
              type: 'upload',
              relationTo: 'media',
              label: 'Desktop Image',
            },
            {
              name: 'tablet',
              type: 'upload',
              relationTo: 'media',
              label: 'Tablet Image',
            },
            {
              name: 'mobile',
              type: 'upload',
              relationTo: 'media',
              label: 'Mobile Image',
            },
            {
              name: 'smallMobile',
              type: 'upload',
              relationTo: 'media',
              label: 'Small Mobile Image',
            },
            {
              name: 'altText',
              type: 'text',
              label: 'Alt Text',
              defaultValue: "Nurse wearing gloves examines female patient's forehead",
            },
          ],
        },
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          defaultValue: 'Lytera 2.0',
        },
        {
          name: 'titleColor',
          type: 'text',
          label: 'Title Color',
        },
        {
          name: 'subtitle',
          type: 'text',
          label: 'Subtitle',
          defaultValue: 'Advanced Pigment Correcting System (8-piece system)',
        },
        {
          name: 'subtitleColor',
          type: 'text',
          label: 'Subtitle Color',
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
          name: 'listItems',
          type: 'array',
          label: 'List Items',
          admin: {
            description: 'Drag to reorder list items',
          },
          fields: [
            {
              name: 'text',
              type: 'text',
              required: true,
              label: 'List Item Text',
            },
            {
              name: 'textColor',
              type: 'text',
              label: 'Text Color',
            },
          ],
        },
        {
          name: 'listStyle',
          type: 'select',
          label: 'List Style',
          options: [
            { label: 'Bullet', value: 'bullet' },
            { label: 'Numbered', value: 'numbered' },
            { label: 'None', value: 'none' },
          ],
          defaultValue: 'bullet',
        },
      ],
    },

    // Banner Module
    {
      name: 'bannerModule',
      type: 'group',
      label: 'Banner Module',
      fields: [
        {
          name: 'enabled',
          type: 'checkbox',
          defaultValue: true,
          label: 'Enable Banner Module',
        },
        {
          name: 'className',
          type: 'text',
          label: 'Custom Class Names',
          defaultValue: 'mod_banner dark hide-divider viewport background-2',
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
              name: 'desktop',
              type: 'upload',
              relationTo: 'media',
              label: 'Desktop Image',
            },
            {
              name: 'tablet',
              type: 'upload',
              relationTo: 'media',
              label: 'Tablet Image',
            },
            {
              name: 'mobile',
              type: 'upload',
              relationTo: 'media',
              label: 'Mobile Image',
            },
            {
              name: 'smallMobile',
              type: 'upload',
              relationTo: 'media',
              label: 'Small Mobile Image',
            },
            {
              name: 'altText',
              type: 'text',
              label: 'Alt Text',
              defaultValue: 'Banner media',
            },
          ],
        },
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          defaultValue: 'Discover the power of SkinMedica: Elevate your skincare routine',
        },
        {
          name: 'titleColor',
          type: 'text',
          label: 'Title Color',
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
          name: 'enableTwoColumns',
          type: 'checkbox',
          defaultValue: true,
          label: 'Enable Two Column Layout',
        },
        {
          name: 'columnOneContent',
          type: 'richText',
          label: 'Column One Content',
        },
        {
          name: 'columnTwoContent',
          type: 'richText',
          label: 'Column Two Content (or List)',
        },
        {
          name: 'listItems',
          type: 'array',
          label: 'List Items (Column 2)',
          admin: {
            description: 'Drag to reorder list items',
          },
          fields: [
            {
              name: 'text',
              type: 'text',
              required: true,
              label: 'List Item Text',
            },
            {
              name: 'textColor',
              type: 'text',
              label: 'Text Color',
            },
          ],
        },
        {
          name: 'listColumns',
          type: 'select',
          label: 'List Columns',
          options: [
            { label: 'Single Column', value: 'single' },
            { label: 'Two Columns', value: 'columns' },
          ],
          defaultValue: 'columns',
        },
        {
          name: 'bottomContent',
          type: 'richText',
          label: 'Bottom Content',
        },
      ],
    },

    // Box Grid Module 2 (Experience)
    {
      name: 'boxGridModule2',
      type: 'group',
      label: 'Box Grid Module 2 (Experience)',
      fields: [
        {
          name: 'enabled',
          type: 'checkbox',
          defaultValue: true,
          label: 'Enable Box Grid Module 2',
        },
        {
          name: 'className',
          type: 'text',
          label: 'Custom Class Names',
          defaultValue:
            'mod_box_grid viewport five-boxes container option-1 default no-bg wider',
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
          name: 'contentBefore',
          type: 'richText',
          label: 'Content Before Boxes',
        },
        {
          name: 'contentBeforeColor',
          type: 'text',
          label: 'Content Before Color',
        },
        {
          name: 'boxes',
          type: 'array',
          label: 'Box Items',
          admin: {
            description: 'Drag to reorder boxes',
          },
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
              label: 'Box Title',
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
              name: 'customClass',
              type: 'text',
              label: 'Custom CSS Class',
            },
          ],
        },
        {
          name: 'contentAfter',
          type: 'richText',
          label: 'Content After Boxes',
        },
        {
          name: 'contentAfterColor',
          type: 'text',
          label: 'Content After Color',
        },
        {
          name: 'boxBackgroundColor',
          type: 'text',
          label: 'Global Box Background Color',
        },
        {
          name: 'boxBorderColor',
          type: 'text',
          label: 'Global Box Border Color',
        },
        {
          name: 'boxHoverEffect',
          type: 'select',
          label: 'Box Hover Effect',
          options: [
            { label: 'None', value: 'none' },
            { label: 'Scale', value: 'scale' },
            { label: 'Shadow', value: 'shadow' },
            { label: 'Lift', value: 'lift' },
          ],
          defaultValue: 'none',
        },
      ],
    },

    // Section Order
    {
      name: 'sectionOrder',
      type: 'array',
      label: 'Section Order',
      admin: {
        description: 'Drag to reorder page sections',
      },
      fields: [
        {
          name: 'sectionType',
          type: 'select',
          required: true,
          label: 'Section Type',
          options: [
            { label: 'Hero Module', value: 'hero' },
            { label: 'Intro Module', value: 'intro' },
            { label: 'Box Grid Module 1', value: 'boxGrid1' },
            { label: 'Half Image Module', value: 'halfImage' },
            { label: 'Banner Module', value: 'banner' },
            { label: 'Box Grid Module 2', value: 'boxGrid2' },
          ],
        },
        {
          name: 'enabled',
          type: 'checkbox',
          label: 'Enabled',
          defaultValue: true,
        },
        {
          name: 'customId',
          type: 'text',
          label: 'Custom ID',
          admin: {
            description: 'Optional HTML ID attribute',
          },
        },
        {
          name: 'customClass',
          type: 'text',
          label: 'Custom CSS Class',
        },
      ],
      defaultValue: [
        { sectionType: 'hero', enabled: true },
        { sectionType: 'intro', enabled: true },
        { sectionType: 'boxGrid1', enabled: true },
        { sectionType: 'halfImage', enabled: true },
        { sectionType: 'banner', enabled: true },
        { sectionType: 'boxGrid2', enabled: true },
      ],
    },

    // Global Styling
    {
      name: 'globalStyling',
      type: 'group',
      label: 'Global Styling',
      fields: [
        {
          name: 'containerBackgroundColor',
          type: 'text',
          label: 'Page Background Color',
        },
        {
          name: 'containerMaxWidth',
          type: 'text',
          label: 'Container Max Width',
          admin: {
            description: 'CSS max-width value (e.g., 1200px)',
          },
        },
        {
          name: 'fontFamily',
          type: 'text',
          label: 'Font Family',
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
          name: 'accentColor',
          type: 'text',
          label: 'Accent Color',
        },
        {
          name: 'linkColor',
          type: 'text',
          label: 'Global Link Color',
        },
        {
          name: 'linkHoverColor',
          type: 'text',
          label: 'Global Link Hover Color',
        },
        {
          name: 'customCss',
          type: 'textarea',
          label: 'Custom CSS',
          admin: {
            description: 'Additional CSS rules to apply globally',
          },
        },
      ],
    },

    // SEO & Meta
    {
      name: 'seo',
      type: 'group',
      label: 'SEO & Meta',
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
          name: 'metaKeywords',
          type: 'text',
          label: 'Meta Keywords',
        },
        {
          name: 'ogImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Open Graph Image',
        },
        {
          name: 'canonicalUrl',
          type: 'text',
          label: 'Canonical URL',
        },
      ],
    },
  ],
  timestamps: true,
}

export default SkinMedicaPage