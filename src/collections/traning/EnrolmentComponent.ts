// import { CollectionConfig } from 'payload'

// export const EnrolmentComponent: CollectionConfig = {
//   slug: 'enrolmentComponent',
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
//       defaultValue: 'Training Application Component',
//     },
//     // Two Column Section (Hero)
//     {
//       name: 'heroSection',
//       type: 'group',
//       label: 'Hero Two Column Section',
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
//           name: 'textColor',
//           type: 'text',
//           label: 'Text Color',
//         },
//         {
//           name: 'containerClass',
//           type: 'text',
//           label: 'Container Class',
//           defaultValue: 'mod_columns_two viewport container',
//           admin: {
//             description: 'CSS classes for the container',
//           },
//         },
//         {
//           name: 'verticalAlign',
//           type: 'checkbox',
//           label: 'Vertical Align Content',
//           defaultValue: true,
//         },
//         {
//           name: 'leftContent',
//           type: 'richText',
//           label: 'Left Column Content',
//           required: true,
//         },
//         {
//           name: 'leftContentColor',
//           type: 'text',
//           label: 'Left Content Text Color',
//         },
//         {
//           name: 'leftAnimation',
//           type: 'text',
//           label: 'Left Column Animation',
//           defaultValue: 'fadeInLeft',
//           admin: {
//             description: 'WOW.js animation class',
//           },
//         },
//         {
//           name: 'rightImage',
//           type: 'group',
//           label: 'Right Column Image',
//           fields: [
//             {
//               name: 'image',
//               type: 'upload',
//               relationTo: 'media',
//               label: 'Image',
//             },
//             {
//               name: 'imageUrl',
//               type: 'text',
//               label: 'Image URL (if not uploading)',
//               defaultValue: 'https://www.datocms-assets.com/105497/1694722251-gallery-banner.jpg',
//             },
//             {
//               name: 'alt',
//               type: 'text',
//               label: 'Alt Text',
//               required: true,
//               defaultValue: 'woman handing clipboard back to nurse',
//             },
//             {
//               name: 'width',
//               type: 'number',
//               label: 'Image Width',
//             },
//             {
//               name: 'height',
//               type: 'number',
//               label: 'Image Height',
//             },
//           ],
//         },
//         {
//           name: 'rightAnimation',
//           type: 'text',
//           label: 'Right Column Animation',
//           defaultValue: 'fadeInRight',
//         },
//       ],
//     },
//     // How to Enroll Section
//     {
//       name: 'enrollSection',
//       type: 'group',
//       label: 'How to Enroll Section',
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
//           defaultValue: 'mod_column viewport container',
//         },
//         {
//           name: 'heading',
//           type: 'text',
//           label: 'Section Heading',
//           defaultValue: 'How to Enroll',
//         },
//         {
//           name: 'headingColor',
//           type: 'text',
//           label: 'Heading Color',
//         },
//         {
//           name: 'headingTag',
//           type: 'select',
//           label: 'Heading Tag',
//           options: [
//             { label: 'H1', value: 'h1' },
//             { label: 'H2', value: 'h2' },
//             { label: 'H3', value: 'h3' },
//             { label: 'H4', value: 'h4' },
//           ],
//           defaultValue: 'h1',
//         },
//         {
//           name: 'steps',
//           type: 'array',
//           label: 'Enrollment Steps',
//           admin: {
//             description: 'Drag to reorder steps',
//           },
//           fields: [
//             {
//               name: 'stepTitle',
//               type: 'text',
//               label: 'Step Title',
//               required: true,
//             },
//             {
//               name: 'stepTitleBold',
//               type: 'checkbox',
//               label: 'Bold Title',
//               defaultValue: true,
//             },
//             {
//               name: 'stepDescription',
//               type: 'textarea',
//               label: 'Step Description',
//             },
//             {
//               name: 'textColor',
//               type: 'text',
//               label: 'Text Color',
//             },
//           ],
//           defaultValue: [
//             {
//               stepTitle: 'Fill Out the Initial Application below',
//               stepTitleBold: true,
//               stepDescription: '',
//             },
//             {
//               stepTitle: 'Receive Confirmation & Payment Instructions:',
//               stepTitleBold: true,
//               stepDescription:
//                 "Once accepted, you'll receive next steps to finalize your enrollment.",
//             },
//             {
//               stepTitle: 'Start Your Online Training & Get Ready for Hands-On Experience:',
//               stepTitleBold: true,
//               stepDescription:
//                 'Dive into our online modules and prepare for in-person training at one of our clinic locations.',
//             },
//           ],
//         },
//         {
//           name: 'listStyle',
//           type: 'select',
//           label: 'List Style',
//           options: [
//             { label: 'Bullet Points', value: 'ul' },
//             { label: 'Numbered List', value: 'ol' },
//             { label: 'No Markers', value: 'none' },
//           ],
//           defaultValue: 'ul',
//         },
//       ],
//     },
//     // Contact Form Section
//     {
//       name: 'contactFormSection',
//       type: 'group',
//       label: 'Contact Form Section',
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
//           defaultValue: 'mod_contact_form viewport container',
//         },
//         {
//           name: 'formHeading',
//           type: 'text',
//           label: 'Form Heading',
//           defaultValue: 'Application Form',
//         },
//         {
//           name: 'formDescription',
//           type: 'textarea',
//           label: 'Form Description',
//         },
//         {
//           name: 'formAction',
//           type: 'text',
//           label: 'Form Action URL',
//           admin: {
//             description: 'URL where form data should be submitted',
//           },
//         },
//         {
//           name: 'formMethod',
//           type: 'select',
//           label: 'Form Method',
//           options: [
//             { label: 'POST', value: 'post' },
//             { label: 'GET', value: 'get' },
//           ],
//           defaultValue: 'post',
//         },
//         {
//           name: 'embedCode',
//           type: 'textarea',
//           label: 'Embed Code (Optional)',
//           admin: {
//             description: 'If using an external form, paste the embed code here',
//             rows: 5,
//           },
//         },
//       ],
//     },
//     // FAQ Section (Box Grid)
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
//           name: 'containerClass',
//           type: 'text',
//           label: 'Container Class',
//           defaultValue: 'mod_box_grid viewport container option-3 single bkg-image wider',
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
//           name: 'mainHeading',
//           type: 'text',
//           label: 'Main Heading',
//           defaultValue: 'FAQs',
//         },
//         {
//           name: 'mainHeadingColor',
//           type: 'text',
//           label: 'Main Heading Color',
//         },
//         {
//           name: 'mainHeadingTag',
//           type: 'select',
//           label: 'Main Heading Tag',
//           options: [
//             { label: 'H1', value: 'h1' },
//             { label: 'H2', value: 'h2' },
//             { label: 'H3', value: 'h3' },
//           ],
//           defaultValue: 'h1',
//         },
//         {
//           name: 'faqs',
//           type: 'array',
//           label: 'FAQ Items',
//           admin: {
//             description: 'Drag to reorder FAQs',
//           },
//           fields: [
//             {
//               name: 'question',
//               type: 'text',
//               label: 'Question',
//               required: true,
//             },
//             {
//               name: 'questionBold',
//               type: 'checkbox',
//               label: 'Bold Question',
//               defaultValue: true,
//             },
//             {
//               name: 'questionColor',
//               type: 'text',
//               label: 'Question Color',
//             },
//             {
//               name: 'answer',
//               type: 'richText',
//               label: 'Answer',
//               required: true,
//             },
//             {
//               name: 'answerColor',
//               type: 'text',
//               label: 'Answer Color',
//             },
//             {
//               name: 'backgroundColor',
//               type: 'text',
//               label: 'Box Background Color',
//             },
//             {
//               name: 'animation',
//               type: 'text',
//               label: 'Animation Class',
//               defaultValue: 'fadeInLeft',
//             },
//           ],
//           defaultValue: [
//             {
//               question: 'Who is eligible for this training?',
//               questionBold: true,
//               answer: '',
//             },
//             {
//               question: 'What certification will I receive?',
//               questionBold: true,
//               answer: '',
//             },
//             {
//               question: 'Do I need prior experience?',
//               questionBold: true,
//               answer: '',
//             },
//             {
//               question: 'Where are the trainings held?',
//               questionBold: true,
//               answer: '',
//             },
//             {
//               question: 'What is included in the tuition?',
//               questionBold: true,
//               answer: '',
//             },
//             {
//               question: 'Are payment plans available?',
//               questionBold: true,
//               answer: '',
//             },
//           ],
//         },
//         {
//           name: 'boxWidth',
//           type: 'select',
//           label: 'Box Width',
//           options: [
//             { label: 'Normal', value: 'normal' },
//             { label: 'Wide', value: 'wide' },
//             { label: 'Wider', value: 'wider' },
//           ],
//           defaultValue: 'wider',
//         },
//       ],
//     },
//     // CTA Section (Bottom)
//     {
//       name: 'ctaSection',
//       type: 'group',
//       label: 'Call-to-Action Section',
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
//           defaultValue: 'mod_column viewport container',
//         },
//         {
//           name: 'contentAlignment',
//           type: 'select',
//           label: 'Content Alignment',
//           options: [
//             { label: 'Left', value: 'left' },
//             { label: 'Center', value: 'center' },
//             { label: 'Right', value: 'right' },
//           ],
//           defaultValue: 'center',
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
//           name: 'description',
//           type: 'richText',
//           label: 'Description',
//         },
//         {
//           name: 'descriptionColor',
//           type: 'text',
//           label: 'Description Color',
//         },
//         {
//           name: 'buttons',
//           type: 'array',
//           label: 'CTA Buttons',
//           admin: {
//             description: 'Drag to reorder buttons',
//           },
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
//             {
//               name: 'hoverTextColor',
//               type: 'text',
//               label: 'Button Hover Text Color',
//             },
//             {
//               name: 'className',
//               type: 'text',
//               label: 'Button Class Name',
//               defaultValue: 'btn',
//             },
//             {
//               name: 'size',
//               type: 'select',
//               label: 'Button Size',
//               options: [
//                 { label: 'Small', value: 'small' },
//                 { label: 'Medium', value: 'medium' },
//                 { label: 'Large', value: 'large' },
//               ],
//               defaultValue: 'medium',
//             },
//           ],
//           defaultValue: [
//             {
//               text: 'Apply Now & Secure Your Spot',
//               url: 'https://www.goldfingersaesthetics.com/the-gold-standard-aesthetics-training-program/apply-for-your-training-spot-today/',
//               openInNewTab: true,
//               className: 'btn',
//               size: 'medium',
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
//             { label: 'Hero Two Column Section', value: 'hero' },
//             { label: 'How to Enroll Section', value: 'enroll' },
//             { label: 'Contact Form Section', value: 'contactForm' },
//             { label: 'FAQ Section', value: 'faq' },
//             { label: 'Call-to-Action Section', value: 'cta' },
//           ],
//         },
//       ],
//       defaultValue: [
//         { section: 'hero' },
//         { section: 'enroll' },
//         { section: 'contactForm' },
//         { section: 'faq' },
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
//           name: 'defaultTextColor',
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
//           name: 'h4FontSize',
//           type: 'text',
//           label: 'H4 Font Size',
//         },
//         {
//           name: 'h4Color',
//           type: 'text',
//           label: 'H4 Color',
//         },
//         {
//           name: 'h4FontWeight',
//           type: 'text',
//           label: 'H4 Font Weight',
//         },
//         {
//           name: 'h5FontSize',
//           type: 'text',
//           label: 'H5 Font Size',
//         },
//         {
//           name: 'h5Color',
//           type: 'text',
//           label: 'H5 Color',
//         },
//         {
//           name: 'h5FontWeight',
//           type: 'text',
//           label: 'H5 Font Weight',
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
//           name: 'defaultHoverTextColor',
//           type: 'text',
//           label: 'Default Button Hover Text Color',
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
//         {
//           name: 'textTransform',
//           type: 'select',
//           label: 'Button Text Transform',
//           options: [
//             { label: 'None', value: 'none' },
//             { label: 'Uppercase', value: 'uppercase' },
//             { label: 'Lowercase', value: 'lowercase' },
//             { label: 'Capitalize', value: 'capitalize' },
//           ],
//           defaultValue: 'none',
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
//           defaultValue: 'Apply for Your Training Spot Today | Goldfingers Aesthetics',
//         },
//         {
//           name: 'metaDescription',
//           type: 'textarea',
//           label: 'Meta Description',
//           defaultValue:
//             'Launch your career in aesthetics with Goldfingers Aesthetics Training Program. AMI-certified, hands-on training for future injectors.',
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
//             'aesthetics training, botox training, injector certification, medical aesthetics, AMI certification',
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
//         {
//           name: 'stackColumnsOnMobile',
//           type: 'checkbox',
//           label: 'Stack Columns on Mobile',
//           defaultValue: true,
//         },
//       ],
//     },
//     // List Styles
//     {
//       name: 'listStyles',
//       type: 'group',
//       label: 'List Styles',
//       fields: [
//         {
//           name: 'bulletColor',
//           type: 'text',
//           label: 'Bullet Point Color',
//         },
//         {
//           name: 'bulletStyle',
//           type: 'select',
//           label: 'Bullet Style',
//           options: [
//             { label: 'Disc', value: 'disc' },
//             { label: 'Circle', value: 'circle' },
//             { label: 'Square', value: 'square' },
//             { label: 'None', value: 'none' },
//           ],
//           defaultValue: 'disc',
//         },
//         {
//           name: 'listMarginLeft',
//           type: 'text',
//           label: 'List Margin Left',
//           admin: {
//             description: 'e.g., 20px, 1.5rem',
//           },
//         },
//         {
//           name: 'listItemSpacing',
//           type: 'text',
//           label: 'List Item Spacing',
//           admin: {
//             description: 'Spacing between list items (e.g., 10px)',
//           },
//         },
//       ],
//     },
//     // Image Settings
//     {
//       name: 'imageSettings',
//       type: 'group',
//       label: 'Image Settings',
//       fields: [
//         {
//           name: 'lazyLoading',
//           type: 'checkbox',
//           label: 'Enable Lazy Loading',
//           defaultValue: true,
//         },
//         {
//           name: 'imageQuality',
//           type: 'select',
//           label: 'Image Quality',
//           options: [
//             { label: 'Low', value: 'low' },
//             { label: 'Medium', value: 'medium' },
//             { label: 'High', value: 'high' },
//             { label: 'Original', value: 'original' },
//           ],
//           defaultValue: 'high',
//         },
//         {
//           name: 'autoFormat',
//           type: 'checkbox',
//           label: 'Auto Format Images',
//           defaultValue: true,
//           admin: {
//             description: 'Automatically optimize image format (WebP, etc.)',
//           },
//         },
//         {
//           name: 'autoCompress',
//           type: 'checkbox',
//           label: 'Auto Compress Images',
//           defaultValue: true,
//         },
//         {
//           name: 'responsiveImages',
//           type: 'checkbox',
//           label: 'Enable Responsive Images',
//           defaultValue: true,
//           admin: {
//             description: 'Generate multiple image sizes for different screens',
//           },
//         },
//       ],
//     },
//     // Custom CSS
//     {
//       name: 'customCSS',
//       type: 'group',
//       label: 'Custom CSS',
//       fields: [
//         {
//           name: 'additionalCSS',
//           type: 'textarea',
//           label: 'Additional CSS',
//           admin: {
//             description: 'Add custom CSS styles for this component',
//             rows: 10,
//           },
//         },
//         {
//           name: 'cssClasses',
//           type: 'array',
//           label: 'Additional CSS Classes',
//           admin: {
//             description: 'Add custom CSS class names to sections',
//           },
//           fields: [
//             {
//               name: 'section',
//               type: 'select',
//               label: 'Apply to Section',
//               options: [
//                 { label: 'Hero Section', value: 'hero' },
//                 { label: 'Enroll Section', value: 'enroll' },
//                 { label: 'Contact Form Section', value: 'contactForm' },
//                 { label: 'FAQ Section', value: 'faq' },
//                 { label: 'CTA Section', value: 'cta' },
//               ],
//             },
//             {
//               name: 'className',
//               type: 'text',
//               label: 'Class Name',
//               required: true,
//             },
//           ],
//         },
//       ],
//     },
//     // Link Settings
//     {
//       name: 'linkSettings',
//       type: 'group',
//       label: 'Link Settings',
//       fields: [
//         {
//           name: 'defaultLinkTarget',
//           type: 'select',
//           label: 'Default Link Target',
//           options: [
//             { label: 'Same Window', value: '_self' },
//             { label: 'New Window', value: '_blank' },
//           ],
//           defaultValue: '_self',
//         },
//         {
//           name: 'linkUnderline',
//           type: 'select',
//           label: 'Link Underline Style',
//           options: [
//             { label: 'None', value: 'none' },
//             { label: 'Always', value: 'always' },
//             { label: 'On Hover', value: 'hover' },
//           ],
//           defaultValue: 'hover',
//         },
//         {
//           name: 'linkTransition',
//           type: 'text',
//           label: 'Link Transition',
//           admin: {
//             description: 'CSS transition for links (e.g., all 0.3s ease)',
//           },
//           defaultValue: 'all 0.3s ease',
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
//           name: 'heroSectionSpacing',
//           type: 'text',
//           label: 'Hero Section Spacing',
//           admin: {
//             description: 'Padding/margin for hero section (e.g., 60px 0)',
//           },
//         },
//         {
//           name: 'enrollSectionSpacing',
//           type: 'text',
//           label: 'Enroll Section Spacing',
//         },
//         {
//           name: 'contactFormSectionSpacing',
//           type: 'text',
//           label: 'Contact Form Section Spacing',
//         },
//         {
//           name: 'faqSectionSpacing',
//           type: 'text',
//           label: 'FAQ Section Spacing',
//         },
//         {
//           name: 'ctaSectionSpacing',
//           type: 'text',
//           label: 'CTA Section Spacing',
//         },
//         {
//           name: 'elementSpacing',
//           type: 'text',
//           label: 'Element Spacing',
//           admin: {
//             description: 'Spacing between elements within sections (e.g., 20px)',
//           },
//         },
//       ],
//     },
//     // Border & Shadow Settings
//     {
//       name: 'borderShadowSettings',
//       type: 'group',
//       label: 'Border & Shadow Settings',
//       fields: [
//         {
//           name: 'boxBorderRadius',
//           type: 'text',
//           label: 'Box Border Radius',
//           admin: {
//             description: 'Border radius for boxes (e.g., 8px)',
//           },
//         },
//         {
//           name: 'boxShadow',
//           type: 'text',
//           label: 'Box Shadow',
//           admin: {
//             description: 'CSS box-shadow value',
//           },
//         },
//         {
//           name: 'boxHoverShadow',
//           type: 'text',
//           label: 'Box Hover Shadow',
//         },
//         {
//           name: 'imageBorderRadius',
//           type: 'text',
//           label: 'Image Border Radius',
//         },
//         {
//           name: 'imageShadow',
//           type: 'text',
//           label: 'Image Shadow',
//         },
//         {
//           name: 'sectionBorder',
//           type: 'text',
//           label: 'Section Border',
//           admin: {
//             description: 'Border for sections (e.g., 1px solid #ccc)',
//           },
//         },
//       ],
//     },
//     // Column Width Settings
//     {
//       name: 'columnWidthSettings',
//       type: 'group',
//       label: 'Column Width Settings',
//       fields: [
//         {
//           name: 'twoColumnLeftWidth',
//           type: 'text',
//           label: 'Two Column Left Width',
//           admin: {
//             description: 'Width for left column (e.g., 50%, 60%)',
//           },
//           defaultValue: '50%',
//         },
//         {
//           name: 'twoColumnRightWidth',
//           type: 'text',
//           label: 'Two Column Right Width',
//           defaultValue: '50%',
//         },
//         {
//           name: 'columnGap',
//           type: 'text',
//           label: 'Column Gap',
//           admin: {
//             description: 'Space between columns (e.g., 20px, 2rem)',
//           },
//           defaultValue: '20px',
//         },
//       ],
//     },
//     // Hover Effects
//     {
//       name: 'hoverEffects',
//       type: 'group',
//       label: 'Hover Effects',
//       fields: [
//         {
//           name: 'enableBoxHover',
//           type: 'checkbox',
//           label: 'Enable Box Hover Effects',
//           defaultValue: true,
//         },
//         {
//           name: 'boxHoverTransform',
//           type: 'text',
//           label: 'Box Hover Transform',
//           admin: {
//             description: 'CSS transform on hover (e.g., translateY(-5px))',
//           },
//         },
//         {
//           name: 'boxHoverTransition',
//           type: 'text',
//           label: 'Box Hover Transition',
//           defaultValue: 'all 0.3s ease',
//         },
//         {
//           name: 'imageHoverEffect',
//           type: 'select',
//           label: 'Image Hover Effect',
//           options: [
//             { label: 'None', value: 'none' },
//             { label: 'Zoom In', value: 'zoom-in' },
//             { label: 'Zoom Out', value: 'zoom-out' },
//             { label: 'Opacity', value: 'opacity' },
//           ],
//           defaultValue: 'none',
//         },
//         {
//           name: 'imageHoverOpacity',
//           type: 'text',
//           label: 'Image Hover Opacity',
//           admin: {
//             description: 'Opacity value on hover (e.g., 0.8)',
//           },
//         },
//       ],
//     },
//     // Grid Settings
//     {
//       name: 'gridSettings',
//       type: 'group',
//       label: 'Grid Settings',
//       fields: [
//         {
//           name: 'faqGridColumns',
//           type: 'number',
//           label: 'FAQ Grid Columns (Desktop)',
//           defaultValue: 3,
//           admin: {
//             description: 'Number of columns in FAQ grid on desktop',
//           },
//         },
//         {
//           name: 'faqGridColumnsTablet',
//           type: 'number',
//           label: 'FAQ Grid Columns (Tablet)',
//           defaultValue: 2,
//         },
//         {
//           name: 'faqGridColumnsMobile',
//           type: 'number',
//           label: 'FAQ Grid Columns (Mobile)',
//           defaultValue: 1,
//         },
//         {
//           name: 'faqGridGap',
//           type: 'text',
//           label: 'FAQ Grid Gap',
//           admin: {
//             description: 'Space between grid items (e.g., 20px)',
//           },
//           defaultValue: '20px',
//         },
//       ],
//     },
//     // Background Settings
//     {
//       name: 'backgroundSettings',
//       type: 'group',
//       label: 'Background Settings',
//       fields: [
//         {
//           name: 'backgroundImageSize',
//           type: 'select',
//           label: 'Background Image Size',
//           options: [
//             { label: 'Cover', value: 'cover' },
//             { label: 'Contain', value: 'contain' },
//             { label: 'Auto', value: 'auto' },
//           ],
//           defaultValue: 'cover',
//         },
//         {
//           name: 'backgroundImagePosition',
//           type: 'select',
//           label: 'Background Image Position',
//           options: [
//             { label: 'Center', value: 'center' },
//             { label: 'Top', value: 'top' },
//             { label: 'Bottom', value: 'bottom' },
//             { label: 'Left', value: 'left' },
//             { label: 'Right', value: 'right' },
//           ],
//           defaultValue: 'center',
//         },
//         {
//           name: 'backgroundImageRepeat',
//           type: 'select',
//           label: 'Background Image Repeat',
//           options: [
//             { label: 'No Repeat', value: 'no-repeat' },
//             { label: 'Repeat', value: 'repeat' },
//             { label: 'Repeat X', value: 'repeat-x' },
//             { label: 'Repeat Y', value: 'repeat-y' },
//           ],
//           defaultValue: 'no-repeat',
//         },
//         {
//           name: 'backgroundOverlay',
//           type: 'checkbox',
//           label: 'Enable Background Overlay',
//           defaultValue: false,
//         },
//         {
//           name: 'backgroundOverlayColor',
//           type: 'text',
//           label: 'Background Overlay Color',
//           admin: {
//             description: 'RGBA color value (e.g., rgba(0,0,0,0.5))',
//           },
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

export const EnrolmentComponent: CollectionConfig = {
  slug: 'enrolmentComponent',
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
      defaultValue: 'Training Application Component',
    },
    // Two Column Section (Hero)
    {
      name: 'heroSection',
      type: 'group',
      label: 'Hero Two Column Section',
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
          name: 'textColor',
          type: 'text',
          label: 'Text Color',
        },
        {
          name: 'containerClass',
          type: 'text',
          label: 'Container Class',
          defaultValue: 'mod_columns_two viewport container',
          admin: {
            description: 'CSS classes for the container',
          },
        },
        {
          name: 'verticalAlign',
          type: 'checkbox',
          label: 'Vertical Align Content',
          defaultValue: true,
        },
        {
          name: 'leftContent',
          type: 'richText',
          label: 'Left Column Content',
          required: true,
        },
        {
          name: 'leftContentColor',
          type: 'text',
          label: 'Left Content Text Color',
        },
        {
          name: 'leftAnimation',
          type: 'text',
          label: 'Left Column Animation',
          defaultValue: 'fadeInLeft',
          admin: {
            description: 'WOW.js animation class',
          },
        },
        {
          name: 'rightImage',
          type: 'group',
          label: 'Right Column Image',
          fields: [
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              label: 'Image',
            },
            {
              name: 'imageUrl',
              type: 'text',
              label: 'Image URL (if not uploading)',
              defaultValue: 'https://www.datocms-assets.com/105497/1694722251-gallery-banner.jpg',
            },
            {
              name: 'alt',
              type: 'text',
              label: 'Alt Text',
              required: true,
              defaultValue: 'woman handing clipboard back to nurse',
            },
            {
              name: 'width',
              type: 'number',
              label: 'Image Width',
            },
            {
              name: 'height',
              type: 'number',
              label: 'Image Height',
            },
          ],
        },
        {
          name: 'rightAnimation',
          type: 'text',
          label: 'Right Column Animation',
          defaultValue: 'fadeInRight',
        },
      ],
    },
    // How to Enroll Section
    {
      name: 'enrollSection',
      type: 'group',
      label: 'How to Enroll Section',
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
          label: 'Container Class',
          defaultValue: 'mod_column viewport container',
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Section Heading',
          defaultValue: 'How to Enroll',
        },
        {
          name: 'headingColor',
          type: 'text',
          label: 'Heading Color',
        },
        {
          name: 'headingTag',
          type: 'select',
          label: 'Heading Tag',
          options: [
            { label: 'H1', value: 'h1' },
            { label: 'H2', value: 'h2' },
            { label: 'H3', value: 'h3' },
            { label: 'H4', value: 'h4' },
          ],
          defaultValue: 'h1',
        },
        {
          name: 'steps',
          type: 'array',
          label: 'Enrollment Steps',
          admin: {
            description: 'Drag to reorder steps',
          },
          fields: [
            {
              name: 'stepTitle',
              type: 'text',
              label: 'Step Title',
              required: true,
            },
            {
              name: 'stepTitleBold',
              type: 'checkbox',
              label: 'Bold Title',
              defaultValue: true,
            },
            {
              name: 'stepDescription',
              type: 'textarea',
              label: 'Step Description',
            },
            {
              name: 'textColor',
              type: 'text',
              label: 'Text Color',
            },
          ],
          defaultValue: [
            {
              stepTitle: 'Fill Out the Initial Application below',
              stepTitleBold: true,
              stepDescription: '',
            },
            {
              stepTitle: 'Receive Confirmation & Payment Instructions:',
              stepTitleBold: true,
              stepDescription:
                "Once accepted, you'll receive next steps to finalize your enrollment.",
            },
            {
              stepTitle: 'Start Your Online Training & Get Ready for Hands-On Experience:',
              stepTitleBold: true,
              stepDescription:
                'Dive into our online modules and prepare for in-person training at one of our clinic locations.',
            },
          ],
        },
        {
          name: 'listStyle',
          type: 'select',
          label: 'List Style',
          options: [
            { label: 'Bullet Points', value: 'ul' },
            { label: 'Numbered List', value: 'ol' },
            { label: 'No Markers', value: 'none' },
          ],
          defaultValue: 'ul',
        },
      ],
    },
    // Contact Form Section
    {
      name: 'contactFormSection',
      type: 'group',
      label: 'Contact Form Section',
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
          label: 'Container Class',
          defaultValue: 'mod_contact_form viewport container',
        },
        {
          name: 'formHeading',
          type: 'text',
          label: 'Form Heading',
          defaultValue: 'Application Form',
        },
        {
          name: 'formDescription',
          type: 'textarea',
          label: 'Form Description',
        },
        {
          name: 'formAction',
          type: 'text',
          label: 'Form Action URL',
          admin: {
            description: 'URL where form data should be submitted',
          },
        },
        {
          name: 'formMethod',
          type: 'select',
          label: 'Form Method',
          options: [
            { label: 'POST', value: 'post' },
            { label: 'GET', value: 'get' },
          ],
          defaultValue: 'post',
        },
        {
          name: 'embedCode',
          type: 'textarea',
          label: 'Embed Code (Optional)',
          admin: {
            description: 'If using an external form, paste the embed code here',
            rows: 5,
          },
        },
      ],
    },
    // FAQ Section (Box Grid)
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
          name: 'containerClass',
          type: 'text',
          label: 'Container Class',
          defaultValue: 'mod_box_grid viewport container option-3 single bkg-image wider',
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
          name: 'mainHeading',
          type: 'text',
          label: 'Main Heading',
          defaultValue: 'FAQs',
        },
        {
          name: 'mainHeadingColor',
          type: 'text',
          label: 'Main Heading Color',
        },
        {
          name: 'mainHeadingTag',
          type: 'select',
          label: 'Main Heading Tag',
          options: [
            { label: 'H1', value: 'h1' },
            { label: 'H2', value: 'h2' },
            { label: 'H3', value: 'h3' },
          ],
          defaultValue: 'h1',
        },
        {
          name: 'faqs',
          type: 'array',
          label: 'FAQ Items',
          admin: {
            description: 'Drag to reorder FAQs',
          },
          fields: [
            {
              name: 'question',
              type: 'text',
              label: 'Question',
              required: true,
            },
            {
              name: 'questionBold',
              type: 'checkbox',
              label: 'Bold Question',
              defaultValue: true,
            },
            {
              name: 'questionColor',
              type: 'text',
              label: 'Question Color',
            },
            {
              name: 'answer',
              type: 'richText',
              label: 'Answer',
              required: true,
            },
            {
              name: 'answerColor',
              type: 'text',
              label: 'Answer Color',
            },
            {
              name: 'backgroundColor',
              type: 'text',
              label: 'Box Background Color',
            },
            {
              name: 'animation',
              type: 'text',
              label: 'Animation Class',
              defaultValue: 'fadeInLeft',
            },
          ],
          defaultValue: [
            {
              question: 'Who is eligible for this training?',
              questionBold: true,
            },
            {
              question: 'What certification will I receive?',
              questionBold: true,
            },
            {
              question: 'Do I need prior experience?',
              questionBold: true,
            },
            {
              question: 'Where are the trainings held?',
              questionBold: true,
            },
            {
              question: 'What is included in the tuition?',
              questionBold: true,
            },
            {
              question: 'Are payment plans available?',
              questionBold: true,
            },
          ],
        },
        {
          name: 'boxWidth',
          type: 'select',
          label: 'Box Width',
          options: [
            { label: 'Normal', value: 'normal' },
            { label: 'Wide', value: 'wide' },
            { label: 'Wider', value: 'wider' },
          ],
          defaultValue: 'wider',
        },
      ],
    },
    // CTA Section (Bottom)
    {
      name: 'ctaSection',
      type: 'group',
      label: 'Call-to-Action Section',
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
          label: 'Container Class',
          defaultValue: 'mod_column viewport container',
        },
        {
          name: 'contentAlignment',
          type: 'select',
          label: 'Content Alignment',
          options: [
            { label: 'Left', value: 'left' },
            { label: 'Center', value: 'center' },
            { label: 'Right', value: 'right' },
          ],
          defaultValue: 'center',
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Heading',
        },
        {
          name: 'headingColor',
          type: 'text',
          label: 'Heading Color',
        },
        {
          name: 'description',
          type: 'richText',
          label: 'Description',
        },
        {
          name: 'descriptionColor',
          type: 'text',
          label: 'Description Color',
        },
        {
          name: 'buttons',
          type: 'array',
          label: 'CTA Buttons',
          admin: {
            description: 'Drag to reorder buttons',
          },
          fields: [
            {
              name: 'text',
              type: 'text',
              label: 'Button Text',
              required: true,
            },
            {
              name: 'url',
              type: 'text',
              label: 'Button URL',
              required: true,
            },
            {
              name: 'openInNewTab',
              type: 'checkbox',
              label: 'Open in New Tab',
              defaultValue: false,
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
              name: 'hoverTextColor',
              type: 'text',
              label: 'Button Hover Text Color',
            },
            {
              name: 'className',
              type: 'text',
              label: 'Button Class Name',
              defaultValue: 'btn',
            },
            {
              name: 'size',
              type: 'select',
              label: 'Button Size',
              options: [
                { label: 'Small', value: 'small' },
                { label: 'Medium', value: 'medium' },
                { label: 'Large', value: 'large' },
              ],
              defaultValue: 'medium',
            },
          ],
          defaultValue: [
            {
              text: 'Apply Now & Secure Your Spot',
              url: 'https://www.goldfingersaesthetics.com/the-gold-standard-aesthetics-training-program/apply-for-your-training-spot-today/',
              openInNewTab: true,
              className: 'btn',
              size: 'medium',
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
            { label: 'Hero Two Column Section', value: 'hero' },
            { label: 'How to Enroll Section', value: 'enroll' },
            { label: 'Contact Form Section', value: 'contactForm' },
            { label: 'FAQ Section', value: 'faq' },
            { label: 'Call-to-Action Section', value: 'cta' },
          ],
        },
      ],
      defaultValue: [
        { section: 'hero' },
        { section: 'enroll' },
        { section: 'contactForm' },
        { section: 'faq' },
        { section: 'cta' },
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
          name: 'defaultTextColor',
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
          name: 'h4FontSize',
          type: 'text',
          label: 'H4 Font Size',
        },
        {
          name: 'h4Color',
          type: 'text',
          label: 'H4 Color',
        },
        {
          name: 'h4FontWeight',
          type: 'text',
          label: 'H4 Font Weight',
        },
        {
          name: 'h5FontSize',
          type: 'text',
          label: 'H5 Font Size',
        },
        {
          name: 'h5Color',
          type: 'text',
          label: 'H5 Color',
        },
        {
          name: 'h5FontWeight',
          type: 'text',
          label: 'H5 Font Weight',
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
          name: 'defaultHoverTextColor',
          type: 'text',
          label: 'Default Button Hover Text Color',
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
          name: 'textTransform',
          type: 'select',
          label: 'Button Text Transform',
          options: [
            { label: 'None', value: 'none' },
            { label: 'Uppercase', value: 'uppercase' },
            { label: 'Lowercase', value: 'lowercase' },
            { label: 'Capitalize', value: 'capitalize' },
          ],
          defaultValue: 'none',
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
          defaultValue: 'Apply for Your Training Spot Today | Goldfingers Aesthetics',
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          label: 'Meta Description',
          defaultValue:
            'Launch your career in aesthetics with Goldfingers Aesthetics Training Program. AMI-certified, hands-on training for future injectors.',
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
            'aesthetics training, botox training, injector certification, medical aesthetics, AMI certification',
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
          name: 'stackColumnsOnMobile',
          type: 'checkbox',
          label: 'Stack Columns on Mobile',
          defaultValue: true,
        },
      ],
    },
    // List Styles
    {
      name: 'listStyles',
      type: 'group',
      label: 'List Styles',
      fields: [
        {
          name: 'bulletColor',
          type: 'text',
          label: 'Bullet Point Color',
        },
        {
          name: 'bulletStyle',
          type: 'select',
          label: 'Bullet Style',
          options: [
            { label: 'Disc', value: 'disc' },
            { label: 'Circle', value: 'circle' },
            { label: 'Square', value: 'square' },
            { label: 'None', value: 'none' },
          ],
          defaultValue: 'disc',
        },
        {
          name: 'listMarginLeft',
          type: 'text',
          label: 'List Margin Left',
          admin: {
            description: 'e.g., 20px, 1.5rem',
          },
        },
        {
          name: 'listItemSpacing',
          type: 'text',
          label: 'List Item Spacing',
          admin: {
            description: 'Spacing between list items (e.g., 10px)',
          },
        },
      ],
    },
    // Image Settings
    {
      name: 'imageSettings',
      type: 'group',
      label: 'Image Settings',
      fields: [
        {
          name: 'lazyLoading',
          type: 'checkbox',
          label: 'Enable Lazy Loading',
          defaultValue: true,
        },
        {
          name: 'imageQuality',
          type: 'select',
          label: 'Image Quality',
          options: [
            { label: 'Low', value: 'low' },
            { label: 'Medium', value: 'medium' },
            { label: 'High', value: 'high' },
            { label: 'Original', value: 'original' },
          ],
          defaultValue: 'high',
        },
        {
          name: 'autoFormat',
          type: 'checkbox',
          label: 'Auto Format Images',
          defaultValue: true,
          admin: {
            description: 'Automatically optimize image format (WebP, etc.)',
          },
        },
        {
          name: 'autoCompress',
          type: 'checkbox',
          label: 'Auto Compress Images',
          defaultValue: true,
        },
        {
          name: 'responsiveImages',
          type: 'checkbox',
          label: 'Enable Responsive Images',
          defaultValue: true,
          admin: {
            description: 'Generate multiple image sizes for different screens',
          },
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
          name: 'additionalCSS',
          type: 'textarea',
          label: 'Additional CSS',
          admin: {
            description: 'Add custom CSS styles for this component',
            rows: 10,
          },
        },
        {
          name: 'cssClasses',
          type: 'array',
          label: 'Additional CSS Classes',
          admin: {
            description: 'Add custom CSS class names to sections',
          },
          fields: [
            {
              name: 'section',
              type: 'select',
              label: 'Apply to Section',
              options: [
                { label: 'Hero Section', value: 'hero' },
                { label: 'Enroll Section', value: 'enroll' },
                { label: 'Contact Form Section', value: 'contactForm' },
                { label: 'FAQ Section', value: 'faq' },
                { label: 'CTA Section', value: 'cta' },
              ],
            },
            {
              name: 'className',
              type: 'text',
              label: 'Class Name',
              required: true,
            },
          ],
        },
      ],
    },
    // Link Settings
    {
      name: 'linkSettings',
      type: 'group',
      label: 'Link Settings',
      fields: [
        {
          name: 'defaultLinkTarget',
          type: 'select',
          label: 'Default Link Target',
          options: [
            { label: 'Same Window', value: '_self' },
            { label: 'New Window', value: '_blank' },
          ],
          defaultValue: '_self',
        },
        {
          name: 'linkUnderline',
          type: 'select',
          label: 'Link Underline Style',
          options: [
            { label: 'None', value: 'none' },
            { label: 'Always', value: 'always' },
            { label: 'On Hover', value: 'hover' },
          ],
          defaultValue: 'hover',
        },
        {
          name: 'linkTransition',
          type: 'text',
          label: 'Link Transition',
          admin: {
            description: 'CSS transition for links (e.g., all 0.3s ease)',
          },
          defaultValue: 'all 0.3s ease',
        },
      ],
    },
    // Spacing Settings
    {
      name: 'spacingSettings',
      type: 'group',
      label: 'Spacing Settings',
      fields: [
        {
          name: 'heroSectionSpacing',
          type: 'text',
          label: 'Hero Section Spacing',
          admin: {
            description: 'Padding/margin for hero section (e.g., 60px 0)',
          },
        },
        {
          name: 'enrollSectionSpacing',
          type: 'text',
          label: 'Enroll Section Spacing',
        },
        {
          name: 'contactFormSectionSpacing',
          type: 'text',
          label: 'Contact Form Section Spacing',
        },
        {
          name: 'faqSectionSpacing',
          type: 'text',
          label: 'FAQ Section Spacing',
        },
        {
          name: 'ctaSectionSpacing',
          type: 'text',
          label: 'CTA Section Spacing',
        },
        {
          name: 'elementSpacing',
          type: 'text',
          label: 'Element Spacing',
          admin: {
            description: 'Spacing between elements within sections (e.g., 20px)',
          },
        },
      ],
    },
    // Border & Shadow Settings
    {
      name: 'borderShadowSettings',
      type: 'group',
      label: 'Border & Shadow Settings',
      fields: [
        {
          name: 'boxBorderRadius',
          type: 'text',
          label: 'Box Border Radius',
          admin: {
            description: 'Border radius for boxes (e.g., 8px)',
          },
        },
        {
          name: 'boxShadow',
          type: 'text',
          label: 'Box Shadow',
          admin: {
            description: 'CSS box-shadow value',
          },
        },
        {
          name: 'boxHoverShadow',
          type: 'text',
          label: 'Box Hover Shadow',
        },
        {
          name: 'imageBorderRadius',
          type: 'text',
          label: 'Image Border Radius',
        },
        {
          name: 'imageShadow',
          type: 'text',
          label: 'Image Shadow',
        },
        {
          name: 'sectionBorder',
          type: 'text',
          label: 'Section Border',
          admin: {
            description: 'Border for sections (e.g., 1px solid #ccc)',
          },
        },
      ],
    },
    // Column Width Settings
    {
      name: 'columnWidthSettings',
      type: 'group',
      label: 'Column Width Settings',
      fields: [
        {
          name: 'twoColumnLeftWidth',
          type: 'text',
          label: 'Two Column Left Width',
          admin: {
            description: 'Width for left column (e.g., 50%, 60%)',
          },
          defaultValue: '50%',
        },
        {
          name: 'twoColumnRightWidth',
          type: 'text',
          label: 'Two Column Right Width',
          defaultValue: '50%',
        },
        {
          name: 'columnGap',
          type: 'text',
          label: 'Column Gap',
          admin: {
            description: 'Space between columns (e.g., 20px, 2rem)',
          },
          defaultValue: '20px',
        },
      ],
    },
    // Hover Effects
    {
      name: 'hoverEffects',
      type: 'group',
      label: 'Hover Effects',
      fields: [
        {
          name: 'enableBoxHover',
          type: 'checkbox',
          label: 'Enable Box Hover Effects',
          defaultValue: true,
        },
        {
          name: 'boxHoverTransform',
          type: 'text',
          label: 'Box Hover Transform',
          admin: {
            description: 'CSS transform on hover (e.g., translateY(-5px))',
          },
        },
        {
          name: 'boxHoverTransition',
          type: 'text',
          label: 'Box Hover Transition',
          defaultValue: 'all 0.3s ease',
        },
        {
          name: 'imageHoverEffect',
          type: 'select',
          label: 'Image Hover Effect',
          options: [
            { label: 'None', value: 'none' },
            { label: 'Zoom In', value: 'zoom-in' },
            { label: 'Zoom Out', value: 'zoom-out' },
            { label: 'Opacity', value: 'opacity' },
          ],
          defaultValue: 'none',
        },
        {
          name: 'imageHoverOpacity',
          type: 'text',
          label: 'Image Hover Opacity',
          admin: {
            description: 'Opacity value on hover (e.g., 0.8)',
          },
        },
      ],
    },
    // Grid Settings
    {
      name: 'gridSettings',
      type: 'group',
      label: 'Grid Settings',
      fields: [
        {
          name: 'faqGridColumns',
          type: 'number',
          label: 'FAQ Grid Columns (Desktop)',
          defaultValue: 3,
          admin: {
            description: 'Number of columns in FAQ grid on desktop',
          },
        },
        {
          name: 'faqGridColumnsTablet',
          type: 'number',
          label: 'FAQ Grid Columns (Tablet)',
          defaultValue: 2,
        },
        {
          name: 'faqGridColumnsMobile',
          type: 'number',
          label: 'FAQ Grid Columns (Mobile)',
          defaultValue: 1,
        },
        {
          name: 'faqGridGap',
          type: 'text',
          label: 'FAQ Grid Gap',
          admin: {
            description: 'Space between grid items (e.g., 20px)',
          },
          defaultValue: '20px',
        },
      ],
    },
    // Background Settings
    {
      name: 'backgroundSettings',
      type: 'group',
      label: 'Background Settings',
      fields: [
        {
          name: 'backgroundImageSize',
          type: 'select',
          label: 'Background Image Size',
          options: [
            { label: 'Cover', value: 'cover' },
            { label: 'Contain', value: 'contain' },
            { label: 'Auto', value: 'auto' },
          ],
          defaultValue: 'cover',
        },
        {
          name: 'backgroundImagePosition',
          type: 'select',
          label: 'Background Image Position',
          options: [
            { label: 'Center', value: 'center' },
            { label: 'Top', value: 'top' },
            { label: 'Bottom', value: 'bottom' },
            { label: 'Left', value: 'left' },
            { label: 'Right', value: 'right' },
          ],
          defaultValue: 'center',
        },
        {
          name: 'backgroundImageRepeat',
          type: 'select',
          label: 'Background Image Repeat',
          options: [
            { label: 'No Repeat', value: 'no-repeat' },
            { label: 'Repeat', value: 'repeat' },
            { label: 'Repeat X', value: 'repeat-x' },
            { label: 'Repeat Y', value: 'repeat-y' },
          ],
          defaultValue: 'no-repeat',
        },
        {
          name: 'backgroundOverlay',
          type: 'checkbox',
          label: 'Enable Background Overlay',
          defaultValue: false,
        },
        {
          name: 'backgroundOverlayColor',
          type: 'text',
          label: 'Background Overlay Color',
          admin: {
            description: 'RGBA color value (e.g., rgba(0,0,0,0.5))',
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