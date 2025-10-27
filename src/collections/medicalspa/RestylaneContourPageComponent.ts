// import { CollectionConfig } from 'payload'

// export const RestylaneContourPageComponent: CollectionConfig = {
//   slug: 'restylane-contour-page-component',
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
//       defaultValue: 'Restylane Contour Page Component',
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
//           defaultValue: 'Restylane® Contour',
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
//               defaultValue: 'Brunette woman face',
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
//     // Banner Section 1 (Experience Restylane Contour)
//     {
//       name: 'bannerSection1',
//       type: 'group',
//       label: 'Banner Section 1 (Experience Restylane Contour)',
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
//           name: 'heading',
//           type: 'text',
//           label: 'Heading',
//           required: true,
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
//           name: 'contentBefore',
//           type: 'richText',
//           label: 'Content Before Bullet Points',
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
//           name: 'contentAfter',
//           type: 'richText',
//           label: 'Content After Bullet Points',
//         },
//       ],
//     },
//     // Box Grid Section (Rediscover Your Confidence)
//     {
//       name: 'boxGridSection',
//       type: 'group',
//       label: 'Box Grid Section (Rediscover Your Confidence)',
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
//         },
//         {
//           name: 'headingColor',
//           type: 'text',
//           label: 'Heading Color',
//         },
//         {
//           name: 'subheading',
//           type: 'richText',
//           label: 'Subheading/Intro Text',
//         },
//         {
//           name: 'boxes',
//           type: 'array',
//           label: 'Content Boxes',
//           admin: {
//             description: 'Drag to reorder boxes',
//           },
//           fields: [
//             {
//               name: 'title',
//               type: 'text',
//               label: 'Box Title',
//               required: true,
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
//             {
//               name: 'textColor',
//               type: 'text',
//               label: 'Box Text Color',
//             },
//             {
//               name: 'titleColor',
//               type: 'text',
//               label: 'Box Title Color',
//             },
//           ],
//         },
//         {
//           name: 'layoutStyle',
//           type: 'select',
//           label: 'Layout Style',
//           options: [
//             { label: 'Default Grid', value: 'default' },
//             { label: 'Wide Grid', value: 'wide' },
//             { label: 'Narrow Grid', value: 'narrow' },
//           ],
//           defaultValue: 'wide',
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
//     // FAQ Section
//     {
//       name: 'faqSection',
//       type: 'group',
//       label: 'FAQ Section',
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
//           name: 'sidebarBackgroundColor',
//           type: 'text',
//           label: 'Sidebar Background Color',
//         },
//         {
//           name: 'heading',
//           type: 'text',
//           label: 'Main Heading',
//           required: true,
//         },
//         {
//           name: 'headingColor',
//           type: 'text',
//           label: 'Heading Color',
//         },
//         {
//           name: 'subheading',
//           type: 'text',
//           label: 'Subheading (small text)',
//         },
//         {
//           name: 'questions',
//           type: 'array',
//           label: 'FAQ Questions',
//           admin: {
//             description: 'Drag to reorder FAQ questions',
//           },
//           fields: [
//             {
//               name: 'question',
//               type: 'text',
//               label: 'Question',
//               required: true,
//             },
//             {
//               name: 'answer',
//               type: 'richText',
//               label: 'Answer',
//               required: true,
//             },
//           ],
//         },
//         {
//           name: 'questionColor',
//           type: 'text',
//           label: 'Question Text Color',
//         },
//         {
//           name: 'answerColor',
//           type: 'text',
//           label: 'Answer Text Color',
//         },
//       ],
//     },
//     // Half Image Section (Rewards & Savings)
//     {
//       name: 'halfImageSection',
//       type: 'group',
//       label: 'Half Image Section (Rewards & Savings)',
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
//             { label: 'Top', value: 'top' },
//             { label: 'Center', value: 'center' },
//             { label: 'Bottom', value: 'bottom' },
//           ],
//           defaultValue: 'top',
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
//               name: 'openInNewTab',
//               type: 'checkbox',
//               label: 'Open in New Tab',
//               defaultValue: false,
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
//         {
//           name: 'paddingStyle',
//           type: 'select',
//           label: 'Content Padding Style',
//           options: [
//             { label: 'Default', value: 'default' },
//             { label: 'Padded', value: 'padded' },
//             { label: 'Extra Padded', value: 'padded2' },
//           ],
//           defaultValue: 'padded2',
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
//             { label: 'Banner Section 1 (Experience Restylane Contour)', value: 'bannerSection1' },
//             { label: 'Box Grid Section (Rediscover Your Confidence)', value: 'boxGridSection' },
//             { label: 'CTA General Section', value: 'ctaGeneralSection' },
//             { label: 'FAQ Section', value: 'faqSection' },
//             { label: 'Half Image Section (Rewards & Savings)', value: 'halfImageSection' },
//           ],
//         },
//       ],
//       defaultValue: [
//         { section: 'hero' },
//         { section: 'intro' },
//         { section: 'bannerSection1' },
//         { section: 'boxGridSection' },
//         { section: 'ctaGeneralSection' },
//         { section: 'faqSection' },
//         { section: 'halfImageSection' },
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
//           name: 'whiteButtonBackgroundColor',
//           type: 'text',
//           label: 'White Button Background',
//         },
//         {
//           name: 'whiteButtonTextColor',
//           type: 'text',
//           label: 'White Button Text Color',
//         },
//         {
//           name: 'whiteButtonHoverBackground',
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
//           name: 'fadeInLeftDuration',
//           type: 'text',
//           label: 'Fade In Left Duration',
//           admin: {
//             description: 'Duration for fade in left animations',
//           },
//           defaultValue: '1s',
//         },
//         {
//           name: 'fadeInRightDuration',
//           type: 'text',
//           label: 'Fade In Right Duration',
//           admin: {
//             description: 'Duration for fade in right animations',
//           },
//           defaultValue: '1s',
//         },
//         {
//           name: 'fadeInUpDuration',
//           type: 'text',
//           label: 'Fade In Up Duration',
//           admin: {
//             description: 'Duration for fade in up animations',
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



import { CollectionConfig } from 'payload'

export const RestylaneContourPageComponent: CollectionConfig = {
  slug: 'restylane-contour-page-component',
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
      defaultValue: 'Restylane Contour Page Component',
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
              label: 'Restylane Contour',
              url: '/medical-spa/restylane-contour/',
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
          defaultValue: 'Restylane® Contour',
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
              defaultValue: 'Brunette woman face',
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
          defaultValue: 'container',
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
          defaultValue: 'Ageless Beauty, Defined by You',
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
    // Banner Section 1
    {
      name: 'bannerSection1',
      type: 'group',
      label: 'Banner Section 1 (Flawless Transformation)',
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
          defaultValue: "Experience Restylane Contour's Flawless Transformation",
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
          name: 'content',
          type: 'richText',
          label: 'Top Content',
        },
        {
          name: 'bulletPoints',
          type: 'array',
          label: 'Bullet Points',
          admin: {
            description: 'Drag to reorder bullet points',
          },
          defaultValue: [
            { text: 'Subtle, natural-looking enhancements for a harmonious appearance' },
            {
              text: 'FDA-approved for cheek augmentation and mid-face contour correction in adults over 21',
            },
            {
              text: 'Long-lasting results, up to one year, reducing the need for frequent touch-ups',
            },
            {
              text: 'Patients can typically return to their daily activities with minimal downtime after the procedure',
            },
            {
              text: 'By enhancing facial contours and symmetry, Restylane Contour can boost self-confidence',
            },
            {
              text: 'A non-surgical option for facial rejuvenation and contouring, avoiding the risks and recovery associated with surgery',
            },
            {
              text: 'Results can be adjusted over time, allowing patients to achieve their ideal look gradually',
            },
            {
              text: 'Contour is well-tolerated by most patients, with a low risk of allergic reactions',
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
          name: 'bottomContent',
          type: 'richText',
          label: 'Bottom Content',
        },
        {
          name: 'columnLayout',
          type: 'checkbox',
          label: 'Use Column Layout for Bullets',
          defaultValue: true,
        },
      ],
    },
    // Box Grid Section
    {
      name: 'boxGridSection',
      type: 'group',
      label: 'Box Grid Section (Confidence)',
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
            { label: 'Wider', value: 'wider' },
            { label: 'Full Width', value: 'full' },
          ],
          defaultValue: 'container',
        },
        {
          name: 'layoutOption',
          type: 'select',
          label: 'Layout Option',
          options: [
            { label: 'Option 1', value: 'option-1' },
            { label: 'Option 2', value: 'option-2' },
          ],
          defaultValue: 'option-1',
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Heading',
          required: true,
          defaultValue: 'Rediscover Your Confidence, One Contour At a Time',
        },
        {
          name: 'headingColor',
          type: 'text',
          label: 'Heading Color',
        },
        {
          name: 'subheading',
          type: 'richText',
          label: 'Subheading/Content Before',
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
              title: 'Premier Facial Contouring Expertise',
              backgroundColor: '',
              textColor: '',
            },
            {
              title: 'Top 1% in the Nation',
              backgroundColor: '',
              textColor: '',
            },
            {
              title: 'Largest Aesthetics Center',
              backgroundColor: '',
              textColor: '',
            },
            {
              title: 'Customized Approach',
              backgroundColor: '',
              textColor: '',
            },
            {
              title: 'Artistry and Precision',
              backgroundColor: '',
              textColor: '',
            },
            {
              title: 'State-of-the-Art Facilities',
              backgroundColor: '',
              textColor: '',
            },
            {
              title: 'Proven Results',
              backgroundColor: '',
              textColor: '',
            },
          ],
          fields: [
            {
              name: 'title',
              type: 'text',
              label: 'Box Title',
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
              name: 'backgroundColor',
              type: 'text',
              label: 'Box Background Color',
            },
            {
              name: 'textColor',
              type: 'text',
              label: 'Box Text Color',
            },
            {
              name: 'borderColor',
              type: 'text',
              label: 'Box Border Color',
            },
            {
              name: 'hoverBackgroundColor',
              type: 'text',
              label: 'Hover Background Color',
            },
          ],
        },
        {
          name: 'layoutStyle',
          type: 'select',
          label: 'Grid Layout Style',
          options: [
            { label: 'Default Grid', value: 'default' },
            { label: 'Seven Boxes', value: 'seven-boxes' },
            { label: 'Wide Grid', value: 'wide' },
            { label: 'Narrow Grid', value: 'narrow' },
          ],
          defaultValue: 'seven-boxes',
        },
        {
          name: 'backgroundStyle',
          type: 'select',
          label: 'Background Style',
          options: [
            { label: 'No Background', value: 'no-bg' },
            { label: 'Light Background', value: 'light-bg' },
            { label: 'Dark Background', value: 'dark-bg' },
          ],
          defaultValue: 'no-bg',
        },
      ],
    },
    // CTA General Section
    {
      name: 'ctaGeneralSection',
      type: 'group',
      label: 'CTA General Section (Schedule Consultation)',
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
          name: 'marginTop',
          type: 'text',
          label: 'Margin Top',
          defaultValue: '0',
          admin: {
            description: 'CSS margin-top value (e.g., 0, 20px, 2rem)',
          },
        },
        {
          name: 'marginBottom',
          type: 'text',
          label: 'Margin Bottom',
          defaultValue: '0',
          admin: {
            description: 'CSS margin-bottom value',
          },
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
    // FAQ Section
    {
      name: 'faqSection',
      type: 'group',
      label: 'FAQ Section',
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
          name: 'mainTitle',
          type: 'text',
          label: 'Main Title',
          defaultValue: 'Restylane Contour',
        },
        {
          name: 'subtitle',
          type: 'text',
          label: 'Subtitle',
          defaultValue: 'FAQ',
        },
        {
          name: 'titleColor',
          type: 'text',
          label: 'Title Color',
        },
        {
          name: 'questions',
          type: 'array',
          label: 'FAQ Questions',
          admin: {
            description: 'Drag to reorder questions',
          },
          defaultValue: [
            {
              question:
                'Can Restylane Contour be combined with other cheek fillers like Restylane Lyft or Juvéderm Voluma?',
            },
            {
              question: 'Do Restylane Contour injections hurt?',
            },
            {
              question: 'What is the difference between Restylane Contour and Juvéderm Voluma?',
            },
            {
              question: 'How long has Restylane Contour been approved?',
            },
          ],
          fields: [
            {
              name: 'question',
              type: 'text',
              label: 'Question',
              required: true,
            },
            {
              name: 'answer',
              type: 'richText',
              label: 'Answer',
              required: true,
            },
            {
              name: 'questionColor',
              type: 'text',
              label: 'Question Color',
            },
            {
              name: 'answerColor',
              type: 'text',
              label: 'Answer Color',
            },
          ],
        },
        {
          name: 'sidebarBackgroundColor',
          type: 'text',
          label: 'Sidebar Background Color',
        },
        {
          name: 'questionListBackgroundColor',
          type: 'text',
          label: 'Question List Background Color',
        },
      ],
    },
    // Half Image Section (Rewards & Savings)
    {
      name: 'halfImageSection',
      type: 'group',
      label: 'Half Image Section (Rewards & Savings)',
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
          defaultValue: 'top-aligned',
        },
        {
          name: 'marginTop',
          type: 'text',
          label: 'Margin Top',
          defaultValue: '0',
          admin: {
            description: 'CSS margin-top value',
          },
        },
        {
          name: 'marginBottom',
          type: 'text',
          label: 'Margin Bottom',
          defaultValue: '0',
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
          defaultValue: 'padded2',
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Heading',
          required: true,
          defaultValue: 'Rewards & Savings',
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
              defaultValue: 'Click here to join',
            },
            {
              name: 'url',
              type: 'text',
              label: 'Button URL',
              defaultValue: 'https://www.restylaneusa.com/rewards',
            },
            {
              name: 'openInNewTab',
              type: 'checkbox',
              label: 'Open in New Tab',
              defaultValue: true,
            },
            {
              name: 'style',
              type: 'select',
              label: 'Button Style',
              options: [
                { label: 'Primary', value: 'primary' },
                { label: 'Secondary', value: 'secondary' },
                { label: 'Outline', value: 'outline' },
              ],
              defaultValue: 'primary',
            },
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
              defaultValue: 'Woman at the beach',
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
            { label: 'Banner Section 1 (Flawless Transformation)', value: 'bannerSection1' },
            { label: 'Box Grid Section (Confidence)', value: 'boxGridSection' },
            { label: 'CTA General Section', value: 'ctaGeneralSection' },
            { label: 'FAQ Section', value: 'faqSection' },
            { label: 'Half Image Section (Rewards)', value: 'halfImageSection' },
          ],
        },
      ],
      defaultValue: [
        { section: 'hero' },
        { section: 'intro' },
        { section: 'bannerSection1' },
        { section: 'boxGridSection' },
        { section: 'ctaGeneralSection' },
        { section: 'faqSection' },
        { section: 'halfImageSection' },
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
          defaultValue: 'Restylane® Contour - Facial Contouring',
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          label: 'Meta Description',
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
        },
        {
          name: 'canonicalUrl',
          type: 'text',
          label: 'Canonical URL',
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
