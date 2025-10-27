// import { CollectionConfig } from 'payload'

// export const LashExtensionsPageComponent: CollectionConfig = {
//   slug: 'lash-extensions-page-component',
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
//       defaultValue: 'Lash Extensions Page Component',
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
//           defaultValue: 'Lash Extensions',
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
//               defaultValue: 'Womans eyelashes being brushed',
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
//           name: 'containerClass',
//           type: 'text',
//           label: 'Container Class',
//           defaultValue: 'container viewport option-1 wide',
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
//     // Banner Section 1
//     {
//       name: 'bannerSection1',
//       type: 'group',
//       label: 'Banner Section 1 (Beautiful Eyes)',
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
//           name: 'darkMode',
//           type: 'checkbox',
//           label: 'Dark Mode',
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
//             { label: 'Single Column', value: 'single' },
//             { label: 'Two Columns', value: 'two' },
//             { label: 'Three Columns', value: 'three' },
//           ],
//           defaultValue: 'two',
//         },
//       ],
//     },
//     // Column Section 1 (Benefits)
//     {
//       name: 'columnSection1',
//       type: 'group',
//       label: 'Column Section 1 (Benefits)',
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
//           name: 'content',
//           type: 'richText',
//           label: 'Content (Above List)',
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
//               name: 'title',
//               type: 'text',
//               label: 'Title (Bold)',
//             },
//             {
//               name: 'content',
//               type: 'richText',
//               label: 'Content',
//               required: true,
//             },
//           ],
//         },
//         {
//           name: 'listStyle',
//           type: 'select',
//           label: 'List Style',
//           options: [
//             { label: 'Single Column', value: 'single' },
//             { label: 'Two Columns', value: 'columns' },
//           ],
//           defaultValue: 'columns',
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
//     // Column Section 2 (Tailored Lash Styles)
//     {
//       name: 'columnSection2',
//       type: 'group',
//       label: 'Column Section 2 (Tailored Lash Styles)',
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
//           name: 'content',
//           type: 'richText',
//           label: 'Content',
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
//         {
//           name: 'thin',
//           type: 'checkbox',
//           label: 'Thin Layout',
//           defaultValue: true,
//         },
//       ],
//     },
//     // Column Section 3 (Why Choose Us)
//     {
//       name: 'columnSection3',
//       type: 'group',
//       label: 'Column Section 3 (Why Choose Us)',
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
//           name: 'introContent',
//           type: 'richText',
//           label: 'Intro Content (Above List)',
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
//               name: 'title',
//               type: 'text',
//               label: 'Title (Bold)',
//             },
//             {
//               name: 'content',
//               type: 'richText',
//               label: 'Content',
//               required: true,
//             },
//           ],
//         },
//         {
//           name: 'closingContent',
//           type: 'richText',
//           label: 'Closing Content (After List)',
//         },
//         {
//           name: 'listStyle',
//           type: 'select',
//           label: 'List Style',
//           options: [
//             { label: 'Single Column', value: 'single' },
//             { label: 'Two Columns', value: 'columns' },
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
//             { label: 'Intro Section', value: 'intro' },
//             { label: 'Banner Section 1 (Beautiful Eyes)', value: 'bannerSection1' },
//             { label: 'Column Section 1 (Benefits)', value: 'columnSection1' },
//             { label: 'Half Image Section', value: 'halfImageSection' },
//             { label: 'Column Section 2 (Tailored Lash Styles)', value: 'columnSection2' },
//             { label: 'CTA General Section', value: 'ctaGeneralSection' },
//             { label: 'Column Section 3 (Why Choose Us)', value: 'columnSection3' },
//           ],
//         },
//       ],
//       defaultValue: [
//         { section: 'hero' },
//         { section: 'intro' },
//         { section: 'bannerSection1' },
//         { section: 'columnSection1' },
//         { section: 'halfImageSection' },
//         { section: 'columnSection2' },
//         { section: 'ctaGeneralSection' },
//         { section: 'columnSection3' },
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
//           name: 'listFontSize',
//           type: 'text',
//           label: 'List Font Size',
//         },
//         {
//           name: 'strongFontWeight',
//           type: 'text',
//           label: 'Strong/Bold Font Weight',
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
//           name: 'whiteButtonBackground',
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
//           name: 'fadeInUpClass',
//           type: 'text',
//           label: 'Fade In Up Animation Class',
//           defaultValue: 'wow fadeInUp',
//         },
//         {
//           name: 'fadeInLeftClass',
//           type: 'text',
//           label: 'Fade In Left Animation Class',
//           defaultValue: 'wow fadeInLeft',
//         },
//         {
//           name: 'fadeInRightClass',
//           type: 'text',
//           label: 'Fade In Right Animation Class',
//           defaultValue: 'wow fadeInRight',
//         },
//         {
//           name: 'animationDuration',
//           type: 'text',
//           label: 'Animation Duration',
//           admin: {
//             description: 'Duration for animations (e.g., 1s, 500ms)',
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
//           name: 'mobileStackClass',
//           type: 'text',
//           label: 'Mobile Stack Class',
//           defaultValue: 'mobile-stack',
//           admin: {
//             description: 'Class to stack elements on mobile',
//           },
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
//     // Spacing Settings
//     {
//       name: 'spacingSettings',
//       type: 'group',
//       label: 'Spacing Settings',
//       fields: [
//         {
//           name: 'mt30Class',
//           type: 'text',
//           label: 'Margin Top 30 Value',
//           admin: {
//             description: 'CSS value for mt-30 class',
//           },
//         },
//         {
//           name: 'mb30Class',
//           type: 'text',
//           label: 'Margin Bottom 30 Value',
//           admin: {
//             description: 'CSS value for mb-30 class',
//           },
//         },
//         {
//           name: 'mt0Class',
//           type: 'text',
//           label: 'Margin Top 0 Value',
//         },
//         {
//           name: 'mb0Class',
//           type: 'text',
//           label: 'Margin Bottom 0 Value',
//         },
//         {
//           name: 'pb0Class',
//           type: 'text',
//           label: 'Padding Bottom 0 Value',
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

export const LashExtensionsPageComponent: CollectionConfig = {
  slug: 'lash-extensions-page-component',
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
      defaultValue: 'Lash Extensions Page Component',
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
              label: 'Lash Extensions',
              url: '/medical-spa/lash-extensions/',
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
          defaultValue: 'Lash Extensions',
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
              defaultValue: 'Womans eyelashes being brushed',
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
          defaultValue: 'Enhance your look with lush, natural-looking lash extensions',
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
    // Banner Section (Beautiful Eyes)
    {
      name: 'bannerSection1',
      type: 'group',
      label: 'Banner Section 1 (Beautiful Eyes)',
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
          defaultValue: 'Beautiful Eyes Framed By Lush Lashes',
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
          name: 'columnLayout',
          type: 'checkbox',
          label: 'Use Two Column Layout for Content',
          defaultValue: true,
        },
        {
          name: 'bottomContent',
          type: 'richText',
          label: 'Bottom Content',
        },
      ],
    },
    // Column Module (Benefits)
    {
      name: 'benefitsSection',
      type: 'group',
      label: 'Benefits Section',
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
          defaultValue: 'pb-0',
          admin: {
            description: 'CSS class for margin/padding bottom',
          },
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Heading',
          required: true,
          defaultValue: 'The Benefits Of Lash Extensions',
        },
        {
          name: 'headingColor',
          type: 'text',
          label: 'Heading Color',
        },
        {
          name: 'introText',
          type: 'richText',
          label: 'Intro Text',
        },
        {
          name: 'benefits',
          type: 'array',
          label: 'Benefits List',
          admin: {
            description: 'Drag to reorder benefits',
          },
          defaultValue: [
            {
              title: 'Enhanced Appearance',
              description:
                'Lash extensions instantly add length, volume, and definition to your lashes, making your eyes appear larger and more attractive.',
            },
            {
              title: 'Natural-Looking',
              description:
                'When applied by trained professionals, lash extensions can look incredibly natural, enhancing your features, whether subtly or with a dramatic look.',
            },
            {
              title: 'Time-Saving',
              description:
                'Lash extensions reduce the need to apply mascara or curl your lashes, saving you time in your daily beauty routine.',
            },
            {
              title: 'Customizable',
              description:
                'With different lengths, thicknesses, and curls available, lash extensions can be tailored to your preferences, whether you desire a subtle enhancement or a bold and glamorous look.',
            },
            {
              title: 'Long-Lasting',
              description:
                'Properly applied lash extensions can last several weeks, maintaining their appearance through various activities, including swimming and exercising.',
            },
          ],
          fields: [
            {
              name: 'title',
              type: 'text',
              label: 'Benefit Title',
              required: true,
            },
            {
              name: 'description',
              type: 'textarea',
              label: 'Benefit Description',
              required: true,
            },
            {
              name: 'titleColor',
              type: 'text',
              label: 'Title Color',
            },
            {
              name: 'descriptionColor',
              type: 'text',
              label: 'Description Color',
            },
          ],
        },
        {
          name: 'useColumnLayout',
          type: 'checkbox',
          label: 'Use Column Layout for Benefits',
          defaultValue: true,
        },
      ],
    },
    // Half Image Section (Let Us Find)
    {
      name: 'halfImageSection1',
      type: 'group',
      label: 'Half Image Section 1 (Let Us Find)',
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
          defaultValue: 'Let Us Find The Ideal Lash Extensions For You',
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
              defaultValue: false,
            },
            {
              name: 'text',
              type: 'text',
              label: 'Button Text',
              defaultValue: 'Learn More',
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
                { label: 'Secondary', value: 'secondary' },
                { label: 'White', value: 'white' },
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
              defaultValue: 'Woman with long eyelashes',
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
    // Column Section (Tailored Lash Styles)
    {
      name: 'tailoredStylesSection',
      type: 'group',
      label: 'Tailored Styles Section',
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
          defaultValue: 'Tailored Lash Styles',
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
          name: 'backgroundStyle',
          type: 'select',
          label: 'Background Style',
          options: [
            { label: 'None', value: '' },
            { label: 'Background 1', value: 'background-1' },
            { label: 'Background 2', value: 'background-2' },
            { label: 'Background Navy', value: 'background-navy' },
          ],
          defaultValue: 'background-1',
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
    // Final Column Section (Elevate Your Look)
    {
      name: 'finalSection',
      type: 'group',
      label: 'Final Section (Elevate Your Look)',
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
          name: 'heading',
          type: 'text',
          label: 'Heading',
          required: true,
          defaultValue:
            'Elevate Your Look With Luxurious Lash Extensions At Goldfingers Aesthetics',
        },
        {
          name: 'headingColor',
          type: 'text',
          label: 'Heading Color',
        },
        {
          name: 'introText',
          type: 'richText',
          label: 'Intro Text',
        },
        {
          name: 'reasons',
          type: 'array',
          label: 'Reasons List',
          admin: {
            description: 'Drag to reorder reasons',
          },
          defaultValue: [
            {
              text: 'Expertise: Our lash technicians have extensive experience and training in lash extension application, ensuring you receive stunning and safe results for your natural lashes.',
            },
            {
              text: 'Personalization: We work closely with you to understand your desired lash style, considering your eye shape, natural lashes, and overall aesthetic goals.',
            },
            {
              text: 'Quality Products: We exclusively use high-quality lash extension products to ensure longevity, comfort, and a beautiful finish.',
            },
            {
              text: 'Attention to Detail: Every lash is meticulously applied to create a seamless, flawless look that enhances natural beauty.',
            },
            {
              text: 'Comfortable Environment: Our clinic provides a comfortable and relaxing setting where you can enjoy your lash extension experience.',
            },
          ],
          fields: [
            {
              name: 'text',
              type: 'textarea',
              label: 'Reason Text',
              required: true,
            },
            {
              name: 'textColor',
              type: 'text',
              label: 'Text Color',
            },
          ],
        },
        {
          name: 'useColumnLayout',
          type: 'checkbox',
          label: 'Use Column Layout for Reasons',
          defaultValue: true,
        },
        {
          name: 'closingText',
          type: 'richText',
          label: 'Closing Text',
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
            { label: 'Banner Section 1 (Beautiful Eyes)', value: 'bannerSection1' },
            { label: 'Benefits Section', value: 'benefitsSection' },
            { label: 'Half Image Section 1 (Let Us Find)', value: 'halfImageSection1' },
            { label: 'Tailored Styles Section', value: 'tailoredStylesSection' },
            { label: 'CTA General Section', value: 'ctaGeneralSection' },
            { label: 'Final Section (Elevate Your Look)', value: 'finalSection' },
          ],
        },
      ],
      defaultValue: [
        { section: 'hero' },
        { section: 'intro' },
        { section: 'bannerSection1' },
        { section: 'benefitsSection' },
        { section: 'halfImageSection1' },
        { section: 'tailoredStylesSection' },
        { section: 'ctaGeneralSection' },
        { section: 'finalSection' },
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
          defaultValue: 'Lash Extensions - Goldfingers Aesthetics',
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          label: 'Meta Description',
          defaultValue:
            'Enhance your look with lush, natural-looking lash extensions. Expert application, customized styles, and long-lasting results at Goldfingers Aesthetics.',
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
            'lash extensions, eyelash extensions, volume lashes, natural lashes, lash enhancement',
        },
        {
          name: 'canonicalUrl',
          type: 'text',
          label: 'Canonical URL',
          defaultValue: '/medical-spa/lash-extensions/',
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
