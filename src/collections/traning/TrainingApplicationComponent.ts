// // import { CollectionConfig } from 'payload'

// // export const TrainingApplicationComponent: CollectionConfig = {
// //   slug: 'training-application-component',
// //   admin: {
// //     useAsTitle: 'componentName',
// //     defaultColumns: ['componentName', 'updatedAt'],
// //     group: 'Components',
// //   },
// //   access: {
// //     read: () => true,
// //   },
// //   fields: [
// //     {
// //       name: 'componentName',
// //       type: 'text',
// //       required: true,
// //       defaultValue: 'Training Application Component',
// //     },
// //     // Hero Two Column Section
// //     {
// //       name: 'heroSection',
// //       type: 'group',
// //       label: 'Hero Two Column Section',
// //       fields: [
// //         {
// //           name: 'show',
// //           type: 'checkbox',
// //           label: 'Show Section',
// //           defaultValue: true,
// //         },
// //         {
// //           name: 'backgroundColor',
// //           type: 'text',
// //           label: 'Background Color',
// //           admin: {
// //             description: 'CSS color value (e.g., #ffffff, rgba(0,0,0,0.5))',
// //           },
// //         },
// //         {
// //           name: 'textColor',
// //           type: 'text',
// //           label: 'Text Color',
// //         },
// //         {
// //           name: 'containerClass',
// //           type: 'text',
// //           label: 'Container Class',
// //           defaultValue: 'mod_columns_two viewport container',
// //         },
// //         {
// //           name: 'verticalAlign',
// //           type: 'checkbox',
// //           label: 'Vertical Align Content',
// //           defaultValue: true,
// //         },
// //         {
// //           name: 'leftContent',
// //           type: 'group',
// //           label: 'Left Column Content',
// //           fields: [
// //             {
// //               name: 'heading',
// //               type: 'text',
// //               label: 'Main Heading',
// //               defaultValue: 'Apply for Your Training Spot Today',
// //               required: true,
// //             },
// //             {
// //               name: 'headingColor',
// //               type: 'text',
// //               label: 'Heading Color',
// //             },
// //             {
// //               name: 'paragraphs',
// //               type: 'array',
// //               label: 'Content Paragraphs',
// //               admin: {
// //                 description: 'Drag to reorder paragraphs',
// //               },
// //               fields: [
// //                 {
// //                   name: 'text',
// //                   type: 'richText',
// //                   label: 'Paragraph Text',
// //                   required: true,
// //                 },
// //                 {
// //                   name: 'textColor',
// //                   type: 'text',
// //                   label: 'Paragraph Text Color',
// //                 },
// //               ],
// //             },
// //             {
// //               name: 'animation',
// //               type: 'text',
// //               label: 'Animation Class',
// //               defaultValue: 'fadeInLeft',
// //             },
// //           ],
// //         },
// //         {
// //           name: 'rightContent',
// //           type: 'group',
// //           label: 'Right Column Content',
// //           fields: [
// //             {
// //               name: 'image',
// //               type: 'upload',
// //               relationTo: 'media',
// //               label: 'Image',
// //               required: true,
// //             },
// //             {
// //               name: 'alt',
// //               type: 'text',
// //               label: 'Alt Text',
// //               defaultValue: 'woman handing clipboard back to nurse',
// //               required: true,
// //             },
// //             {
// //               name: 'animation',
// //               type: 'text',
// //               label: 'Animation Class',
// //               defaultValue: 'fadeInRight',
// //             },
// //           ],
// //         },
// //       ],
// //     },
// //     // How to Enroll Section
// //     {
// //       name: 'enrollSection',
// //       type: 'group',
// //       label: 'How to Enroll Section',
// //       fields: [
// //         {
// //           name: 'show',
// //           type: 'checkbox',
// //           label: 'Show Section',
// //           defaultValue: true,
// //         },
// //         {
// //           name: 'backgroundColor',
// //           type: 'text',
// //           label: 'Background Color',
// //         },
// //         {
// //           name: 'textColor',
// //           type: 'text',
// //           label: 'Text Color',
// //         },
// //         {
// //           name: 'containerClass',
// //           type: 'text',
// //           label: 'Container Class',
// //           defaultValue: 'mod_column viewport container',
// //         },
// //         {
// //           name: 'heading',
// //           type: 'text',
// //           label: 'Section Heading',
// //           defaultValue: 'How to Enroll',
// //           required: true,
// //         },
// //         {
// //           name: 'headingColor',
// //           type: 'text',
// //           label: 'Heading Color',
// //         },
// //         {
// //           name: 'steps',
// //           type: 'array',
// //           label: 'Enrollment Steps',
// //           admin: {
// //             description: 'Drag to reorder steps',
// //           },
// //           fields: [
// //             {
// //               name: 'boldText',
// //               type: 'text',
// //               label: 'Bold Text (Step Title)',
// //               required: true,
// //             },
// //             {
// //               name: 'description',
// //               type: 'richText',
// //               label: 'Step Description',
// //             },
// //             {
// //               name: 'textColor',
// //               type: 'text',
// //               label: 'Text Color',
// //             },
// //           ],
// //         },
// //       ],
// //     },
// //     // Contact Form Section
// //     {
// //       name: 'formSection',
// //       type: 'group',
// //       label: 'Application Form Section',
// //       fields: [
// //         {
// //           name: 'show',
// //           type: 'checkbox',
// //           label: 'Show Section',
// //           defaultValue: true,
// //         },
// //         {
// //           name: 'backgroundColor',
// //           type: 'text',
// //           label: 'Background Color',
// //         },
// //         {
// //           name: 'textColor',
// //           type: 'text',
// //           label: 'Text Color',
// //         },
// //         {
// //           name: 'containerClass',
// //           type: 'text',
// //           label: 'Container Class',
// //           defaultValue: 'mod_contact_form dark',
// //         },
// //         {
// //           name: 'heading',
// //           type: 'text',
// //           label: 'Form Heading',
// //           defaultValue: 'Apply Now',
// //           required: true,
// //         },
// //         {
// //           name: 'headingColor',
// //           type: 'text',
// //           label: 'Heading Color',
// //         },
// //         {
// //           name: 'formId',
// //           type: 'text',
// //           label: 'Form ID',
// //           defaultValue: 'form_training',
// //           required: true,
// //         },
// //         {
// //           name: 'formAction',
// //           type: 'text',
// //           label: 'Form Action URL',
// //           defaultValue: '/validate/',
// //           required: true,
// //         },
// //         {
// //           name: 'redirectUrl',
// //           type: 'text',
// //           label: 'Success Redirect URL',
// //           defaultValue: '/contact/thank-you/',
// //           required: true,
// //         },
// //         {
// //           name: 'subject',
// //           type: 'text',
// //           label: 'Email Subject',
// //           defaultValue: 'Training Sign Up Form',
// //           required: true,
// //         },
// //         {
// //           name: 'formFields',
// //           type: 'array',
// //           label: 'Form Fields',
// //           admin: {
// //             description: 'Drag to reorder form fields',
// //           },
// //           fields: [
// //             {
// //               name: 'fieldType',
// //               type: 'select',
// //               label: 'Field Type',
// //               required: true,
// //               options: [
// //                 { label: 'Text', value: 'text' },
// //                 { label: 'Email', value: 'email' },
// //                 { label: 'Phone', value: 'tel' },
// //                 { label: 'Textarea', value: 'textarea' },
// //                 { label: 'Select', value: 'select' },
// //                 { label: 'Checkbox', value: 'checkbox' },
// //               ],
// //             },
// //             {
// //               name: 'fieldName',
// //               type: 'text',
// //               label: 'Field Name',
// //               required: true,
// //               admin: {
// //                 description: 'Used as HTML name attribute',
// //               },
// //             },
// //             {
// //               name: 'fieldId',
// //               type: 'text',
// //               label: 'Field ID',
// //               required: true,
// //             },
// //             {
// //               name: 'label',
// //               type: 'text',
// //               label: 'Field Label',
// //               required: true,
// //             },
// //             {
// //               name: 'placeholder',
// //               type: 'text',
// //               label: 'Placeholder Text',
// //             },
// //             {
// //               name: 'required',
// //               type: 'checkbox',
// //               label: 'Required Field',
// //               defaultValue: false,
// //             },
// //             {
// //               name: 'rows',
// //               type: 'number',
// //               label: 'Textarea Rows',
// //               admin: {
// //                 description: 'Only for textarea fields',
// //               },
// //             },
// //             {
// //               name: 'cols',
// //               type: 'number',
// //               label: 'Textarea Columns',
// //               admin: {
// //                 description: 'Only for textarea fields',
// //               },
// //             },
// //             {
// //               name: 'selectOptions',
// //               type: 'array',
// //               label: 'Select Options',
// //               admin: {
// //                 description: 'Only for select fields - drag to reorder',
// //               },
// //               fields: [
// //                 {
// //                   name: 'label',
// //                   type: 'text',
// //                   label: 'Option Label',
// //                   required: true,
// //                 },
// //                 {
// //                   name: 'value',
// //                   type: 'text',
// //                   label: 'Option Value',
// //                   required: true,
// //                 },
// //                 {
// //                   name: 'selected',
// //                   type: 'checkbox',
// //                   label: 'Selected by Default',
// //                   defaultValue: false,
// //                 },
// //                 {
// //                   name: 'disabled',
// //                   type: 'checkbox',
// //                   label: 'Disabled',
// //                   defaultValue: false,
// //                 },
// //               ],
// //             },
// //             {
// //               name: 'checkboxValue',
// //               type: 'text',
// //               label: 'Checkbox Value',
// //               admin: {
// //                 description: 'Only for checkbox fields',
// //               },
// //             },
// //             {
// //               name: 'fieldClass',
// //               type: 'text',
// //               label: 'Additional CSS Classes',
// //             },
// //           ],
// //         },
// //         {
// //           name: 'submitButton',
// //           type: 'group',
// //           label: 'Submit Button',
// //           fields: [
// //             {
// //               name: 'text',
// //               type: 'text',
// //               label: 'Button Text',
// //               defaultValue: 'Submit',
// //               required: true,
// //             },
// //             {
// //               name: 'backgroundColor',
// //               type: 'text',
// //               label: 'Button Background Color',
// //             },
// //             {
// //               name: 'textColor',
// //               type: 'text',
// //               label: 'Button Text Color',
// //             },
// //             {
// //               name: 'hoverBackgroundColor',
// //               type: 'text',
// //               label: 'Hover Background Color',
// //             },
// //             {
// //               name: 'hoverTextColor',
// //               type: 'text',
// //               label: 'Hover Text Color',
// //             },
// //             {
// //               name: 'className',
// //               type: 'text',
// //               label: 'Button Class',
// //               defaultValue: 'submit btn',
// //             },
// //           ],
// //         },
// //         {
// //           name: 'disclaimerText',
// //           type: 'richText',
// //           label: 'Disclaimer/Legal Text',
// //           admin: {
// //             description: 'Text appearing below form (messaging rates, privacy policy links, etc.)',
// //           },
// //         },
// //         {
// //           name: 'disclaimerTextColor',
// //           type: 'text',
// //           label: 'Disclaimer Text Color',
// //         },
// //         {
// //           name: 'enableRecaptcha',
// //           type: 'checkbox',
// //           label: 'Enable reCAPTCHA',
// //           defaultValue: true,
// //         },
// //       ],
// //     },
// //     // FAQs Section
// //     {
// //       name: 'faqSection',
// //       type: 'group',
// //       label: 'FAQs Section',
// //       fields: [
// //         {
// //           name: 'show',
// //           type: 'checkbox',
// //           label: 'Show Section',
// //           defaultValue: true,
// //         },
// //         {
// //           name: 'backgroundColor',
// //           type: 'text',
// //           label: 'Background Color',
// //         },
// //         {
// //           name: 'textColor',
// //           type: 'text',
// //           label: 'Text Color',
// //         },
// //         {
// //           name: 'containerClass',
// //           type: 'text',
// //           label: 'Container Class',
// //           defaultValue: 'mod_box_grid viewport container option-3 single bkg-image wider',
// //         },
// //         {
// //           name: 'backgroundImage',
// //           type: 'group',
// //           label: 'Background Image',
// //           fields: [
// //             {
// //               name: 'mobile',
// //               type: 'upload',
// //               relationTo: 'media',
// //               label: 'Mobile Image (≤420px)',
// //             },
// //             {
// //               name: 'tablet',
// //               type: 'upload',
// //               relationTo: 'media',
// //               label: 'Tablet Image (≤800px)',
// //             },
// //             {
// //               name: 'desktop',
// //               type: 'upload',
// //               relationTo: 'media',
// //               label: 'Desktop Image (≤1400px)',
// //             },
// //             {
// //               name: 'large',
// //               type: 'upload',
// //               relationTo: 'media',
// //               label: 'Large Desktop Image',
// //             },
// //             {
// //               name: 'alt',
// //               type: 'text',
// //               label: 'Alt Text',
// //             },
// //           ],
// //         },
// //         {
// //           name: 'heading',
// //           type: 'text',
// //           label: 'Section Heading',
// //           defaultValue: 'FAQs',
// //           required: true,
// //         },
// //         {
// //           name: 'headingColor',
// //           type: 'text',
// //           label: 'Heading Color',
// //         },
// //         {
// //           name: 'faqs',
// //           type: 'array',
// //           label: 'FAQ Items',
// //           admin: {
// //             description: 'Drag to reorder FAQs',
// //           },
// //           fields: [
// //             {
// //               name: 'question',
// //               type: 'text',
// //               label: 'Question',
// //               required: true,
// //             },
// //             {
// //               name: 'questionColor',
// //               type: 'text',
// //               label: 'Question Text Color',
// //             },
// //             {
// //               name: 'answer',
// //               type: 'richText',
// //               label: 'Answer',
// //               required: true,
// //             },
// //             {
// //               name: 'answerColor',
// //               type: 'text',
// //               label: 'Answer Text Color',
// //             },
// //             {
// //               name: 'boxBackgroundColor',
// //               type: 'text',
// //               label: 'Box Background Color',
// //             },
// //             {
// //               name: 'animation',
// //               type: 'text',
// //               label: 'Animation Class',
// //               defaultValue: 'fadeInLeft',
// //             },
// //           ],
// //         },
// //       ],
// //     },
// //     // Final CTA Section
// //     {
// //       name: 'finalCtaSection',
// //       type: 'group',
// //       label: 'Final CTA Section',
// //       fields: [
// //         {
// //           name: 'show',
// //           type: 'checkbox',
// //           label: 'Show Section',
// //           defaultValue: true,
// //         },
// //         {
// //           name: 'backgroundColor',
// //           type: 'text',
// //           label: 'Background Color',
// //         },
// //         {
// //           name: 'textColor',
// //           type: 'text',
// //           label: 'Text Color',
// //         },
// //         {
// //           name: 'containerClass',
// //           type: 'text',
// //           label: 'Container Class',
// //           defaultValue: 'mod_column viewport container',
// //         },
// //         {
// //           name: 'centerAlign',
// //           type: 'checkbox',
// //           label: 'Center Align Content',
// //           defaultValue: true,
// //         },
// //         {
// //           name: 'ctaButton',
// //           type: 'group',
// //           label: 'CTA Button',
// //           fields: [
// //             {
// //               name: 'show',
// //               type: 'checkbox',
// //               label: 'Show Button',
// //               defaultValue: true,
// //             },
// //             {
// //               name: 'text',
// //               type: 'text',
// //               label: 'Button Text',
// //               defaultValue: 'Apply Now & Secure Your Spot',
// //               required: true,
// //             },
// //             {
// //               name: 'url',
// //               type: 'text',
// //               label: 'Button URL',
// //               required: true,
// //             },
// //             {
// //               name: 'openInNewTab',
// //               type: 'checkbox',
// //               label: 'Open in New Tab',
// //               defaultValue: true,
// //             },
// //             {
// //               name: 'backgroundColor',
// //               type: 'text',
// //               label: 'Button Background Color',
// //             },
// //             {
// //               name: 'textColor',
// //               type: 'text',
// //               label: 'Button Text Color',
// //             },
// //             {
// //               name: 'hoverBackgroundColor',
// //               type: 'text',
// //               label: 'Button Hover Background Color',
// //             },
// //             {
// //               name: 'hoverTextColor',
// //               type: 'text',
// //               label: 'Button Hover Text Color',
// //             },
// //             {
// //               name: 'className',
// //               type: 'text',
// //               label: 'Button Class Name',
// //               defaultValue: 'btn',
// //             },
// //           ],
// //         },
// //       ],
// //     },
// //     // Section Order
// //     {
// //       name: 'sectionOrder',
// //       type: 'array',
// //       label: 'Section Order',
// //       admin: {
// //         description: 'Drag to reorder sections on the page',
// //       },
// //       fields: [
// //         {
// //           name: 'section',
// //           type: 'select',
// //           label: 'Section',
// //           required: true,
// //           options: [
// //             { label: 'Hero Two Column Section', value: 'hero' },
// //             { label: 'How to Enroll Section', value: 'enroll' },
// //             { label: 'Application Form Section', value: 'form' },
// //             { label: 'FAQs Section', value: 'faq' },
// //             { label: 'Final CTA Section', value: 'finalCta' },
// //           ],
// //         },
// //       ],
// //       defaultValue: [
// //         { section: 'hero' },
// //         { section: 'enroll' },
// //         { section: 'form' },
// //         { section: 'faq' },
// //         { section: 'finalCta' },
// //       ],
// //     },
// //     // Global Styles
// //     {
// //       name: 'globalStyles',
// //       type: 'group',
// //       label: 'Global Styles',
// //       fields: [
// //         {
// //           name: 'containerMaxWidth',
// //           type: 'text',
// //           label: 'Container Max Width',
// //           admin: {
// //             description: 'CSS max-width value (e.g., 1200px, 100%)',
// //           },
// //         },
// //         {
// //           name: 'containerPadding',
// //           type: 'text',
// //           label: 'Container Padding',
// //           admin: {
// //             description: 'CSS padding value (e.g., 20px, 1rem 2rem)',
// //           },
// //         },
// //         {
// //           name: 'sectionSpacing',
// //           type: 'text',
// //           label: 'Section Spacing',
// //           admin: {
// //             description: 'Spacing between sections (e.g., 60px, 4rem)',
// //           },
// //         },
// //         {
// //           name: 'fontFamily',
// //           type: 'text',
// //           label: 'Font Family',
// //           admin: {
// //             description: 'CSS font-family value',
// //           },
// //         },
// //         {
// //           name: 'primaryColor',
// //           type: 'text',
// //           label: 'Primary Color',
// //           admin: {
// //             description: 'Primary brand color',
// //           },
// //         },
// //         {
// //           name: 'secondaryColor',
// //           type: 'text',
// //           label: 'Secondary Color',
// //           admin: {
// //             description: 'Secondary brand color',
// //           },
// //         },
// //         {
// //           name: 'defaultTextColor',
// //           type: 'text',
// //           label: 'Default Text Color',
// //           admin: {
// //             description: 'Default text color for the page',
// //           },
// //         },
// //         {
// //           name: 'linkColor',
// //           type: 'text',
// //           label: 'Link Color',
// //           admin: {
// //             description: 'Default color for links',
// //           },
// //         },
// //         {
// //           name: 'linkHoverColor',
// //           type: 'text',
// //           label: 'Link Hover Color',
// //           admin: {
// //             description: 'Color for links on hover',
// //           },
// //         },
// //       ],
// //     },
// //     // Typography Settings
// //     {
// //       name: 'typographySettings',
// //       type: 'group',
// //       label: 'Typography Settings',
// //       fields: [
// //         {
// //           name: 'h1FontSize',
// //           type: 'text',
// //           label: 'H1 Font Size',
// //         },
// //         {
// //           name: 'h1Color',
// //           type: 'text',
// //           label: 'H1 Color',
// //         },
// //         {
// //           name: 'h1FontWeight',
// //           type: 'text',
// //           label: 'H1 Font Weight',
// //         },
// //         {
// //           name: 'h2FontSize',
// //           type: 'text',
// //           label: 'H2 Font Size',
// //         },
// //         {
// //           name: 'h2Color',
// //           type: 'text',
// //           label: 'H2 Color',
// //         },
// //         {
// //           name: 'h2FontWeight',
// //           type: 'text',
// //           label: 'H2 Font Weight',
// //         },
// //         {
// //           name: 'h3FontSize',
// //           type: 'text',
// //           label: 'H3 Font Size',
// //         },
// //         {
// //           name: 'h3Color',
// //           type: 'text',
// //           label: 'H3 Color',
// //         },
// //         {
// //           name: 'h3FontWeight',
// //           type: 'text',
// //           label: 'H3 Font Weight',
// //         },
// //         {
// //           name: 'h4FontSize',
// //           type: 'text',
// //           label: 'H4 Font Size',
// //         },
// //         {
// //           name: 'h4Color',
// //           type: 'text',
// //           label: 'H4 Color',
// //         },
// //         {
// //           name: 'h4FontWeight',
// //           type: 'text',
// //           label: 'H4 Font Weight',
// //         },
// //         {
// //           name: 'h5FontSize',
// //           type: 'text',
// //           label: 'H5 Font Size',
// //         },
// //         {
// //           name: 'h5Color',
// //           type: 'text',
// //           label: 'H5 Color',
// //         },
// //         {
// //           name: 'h5FontWeight',
// //           type: 'text',
// //           label: 'H5 Font Weight',
// //         },
// //         {
// //           name: 'bodyFontSize',
// //           type: 'text',
// //           label: 'Body Font Size',
// //         },
// //         {
// //           name: 'bodyLineHeight',
// //           type: 'text',
// //           label: 'Body Line Height',
// //         },
// //         {
// //           name: 'emFontStyle',
// //           type: 'select',
// //           label: 'Emphasis (em) Font Style',
// //           options: [
// //             { label: 'Normal', value: 'normal' },
// //             { label: 'Italic', value: 'italic' },
// //             { label: 'Oblique', value: 'oblique' },
// //           ],
// //           defaultValue: 'italic',
// //         },
// //         {
// //           name: 'strongFontWeight',
// //           type: 'select',
// //           label: 'Strong/Bold Font Weight',
// //           options: [
// //             { label: 'Normal', value: 'normal' },
// //             { label: 'Bold', value: 'bold' },
// //             { label: '500', value: '500' },
// //             { label: '600', value: '600' },
// //             { label: '700', value: '700' },
// //             { label: '800', value: '800' },
// //           ],
// //           defaultValue: 'bold',
// //         },
// //       ],
// //     },
// //     // Button Styles
// //     {
// //       name: 'buttonStyles',
// //       type: 'group',
// //       label: 'Button Styles',
// //       fields: [
// //         {
// //           name: 'defaultBackgroundColor',
// //           type: 'text',
// //           label: 'Default Button Background',
// //         },
// //         {
// //           name: 'defaultTextColor',
// //           type: 'text',
// //           label: 'Default Button Text Color',
// //         },
// //         {
// //           name: 'defaultHoverBackground',
// //           type: 'text',
// //           label: 'Default Button Hover Background',
// //         },
// //         {
// //           name: 'defaultHoverTextColor',
// //           type: 'text',
// //           label: 'Default Button Hover Text Color',
// //         },
// //         {
// //           name: 'borderRadius',
// //           type: 'text',
// //           label: 'Button Border Radius',
// //           admin: {
// //             description: 'e.g., 4px, 0.5rem',
// //           },
// //         },
// //         {
// //           name: 'padding',
// //           type: 'text',
// //           label: 'Button Padding',
// //           admin: {
// //             description: 'e.g., 12px 24px',
// //           },
// //         },
// //         {
// //           name: 'fontSize',
// //           type: 'text',
// //           label: 'Button Font Size',
// //         },
// //         {
// //           name: 'fontWeight',
// //           type: 'text',
// //           label: 'Button Font Weight',
// //         },
// //         {
// //           name: 'border',
// //           type: 'text',
// //           label: 'Button Border',
// //           admin: {
// //             description: 'e.g., 1px solid #000',
// //           },
// //         },
// //         {
// //           name: 'transition',
// //           type: 'text',
// //           label: 'Button Transition',
// //           defaultValue: 'all 0.3s ease',
// //         },
// //       ],
// //     },
// //     // Form Styles
// //     {
// //       name: 'formStyles',
// //       type: 'group',
// //       label: 'Form Styles',
// //       fields: [
// //         {
// //           name: 'inputBackgroundColor',
// //           type: 'text',
// //           label: 'Input Background Color',
// //         },
// //         {
// //           name: 'inputTextColor',
// //           type: 'text',
// //           label: 'Input Text Color',
// //         },
// //         {
// //           name: 'inputBorderColor',
// //           type: 'text',
// //           label: 'Input Border Color',
// //         },
// //         {
// //           name: 'inputBorderWidth',
// //           type: 'text',
// //           label: 'Input Border Width',
// //           defaultValue: '1px',
// //         },
// //         {
// //           name: 'inputBorderRadius',
// //           type: 'text',
// //           label: 'Input Border Radius',
// //           admin: {
// //             description: 'e.g., 4px',
// //           },
// //         },
// //         {
// //           name: 'inputPadding',
// //           type: 'text',
// //           label: 'Input Padding',
// //           admin: {
// //             description: 'e.g., 10px 15px',
// //           },
// //         },
// //         {
// //           name: 'inputFocusBorderColor',
// //           type: 'text',
// //           label: 'Input Focus Border Color',
// //         },
// //         {
// //           name: 'inputFocusShadow',
// //           type: 'text',
// //           label: 'Input Focus Shadow',
// //           admin: {
// //             description: 'CSS box-shadow value',
// //           },
// //         },
// //         {
// //           name: 'labelColor',
// //           type: 'text',
// //           label: 'Label Color',
// //         },
// //         {
// //           name: 'labelFontSize',
// //           type: 'text',
// //           label: 'Label Font Size',
// //         },
// //         {
// //           name: 'labelFontWeight',
// //           type: 'text',
// //           label: 'Label Font Weight',
// //         },
// //         {
// //           name: 'placeholderColor',
// //           type: 'text',
// //           label: 'Placeholder Text Color',
// //         },
// //         {
// //           name: 'errorColor',
// //           type: 'text',
// //           label: 'Error Message Color',
// //         },
// //         {
// //           name: 'fieldSpacing',
// //           type: 'text',
// //           label: 'Field Spacing',
// //           admin: {
// //             description: 'Space between form fields (e.g., 20px)',
// //           },
// //         },
// //       ],
// //     },
// //     // Animation Settings
// //     {
// //       name: 'animationSettings',
// //       type: 'group',
// //       label: 'Animation Settings',
// //       fields: [
// //         {
// //           name: 'enableAnimations',
// //           type: 'checkbox',
// //           label: 'Enable Animations',
// //           defaultValue: true,
// //         },
// //         {
// //           name: 'fadeInDuration',
// //           type: 'text',
// //           label: 'Fade In Duration',
// //           admin: {
// //             description: 'Duration for fade in animations (e.g., 1s, 2s)',
// //           },
// //           defaultValue: '1s',
// //         },
// //         {
// //           name: 'slideInDuration',
// //           type: 'text',
// //           label: 'Slide In Duration',
// //           admin: {
// //             description: 'Duration for slide in animations',
// //           },
// //           defaultValue: '2s',
// //         },
// //         {
// //           name: 'animationEasing',
// //           type: 'text',
// //           label: 'Animation Easing',
// //           admin: {
// //             description: 'CSS easing function',
// //           },
// //           defaultValue: 'ease-in-out',
// //         },
// //         {
// //           name: 'animationDelay',
// //           type: 'text',
// //           label: 'Animation Delay',
// //           admin: {
// //             description: 'Delay before animation starts (e.g., 0.2s)',
// //           },
// //           defaultValue: '0s',
// //         },
// //       ],
// //     },
// //     // SEO Settings
// //     {
// //       name: 'seoSettings',
// //       type: 'group',
// //       label: 'SEO Settings',
// //       fields: [
// //         {
// //           name: 'metaTitle',
// //           type: 'text',
// //           label: 'Meta Title',
// //         },
// //         {
// //           name: 'metaDescription',
// //           type: 'textarea',
// //           label: 'Meta Description',
// //         },
// //         {
// //           name: 'ogImage',
// //           type: 'upload',
// //           relationTo: 'media',
// //           label: 'OG Image',
// //         },
// //         {
// //           name: 'keywords',
// //           type: 'text',
// //           label: 'Keywords',
// //           admin: {
// //             description: 'Comma-separated keywords for SEO',
// //           },
// //         },
// //         {
// //           name: 'canonicalUrl',
// //           type: 'text',
// //           label: 'Canonical URL',
// //         },
// //         {
// //           name: 'robots',
// //           type: 'select',
// //           label: 'Robots Meta Tag',
// //           options: [
// //             { label: 'Index, Follow', value: 'index,follow' },
// //             { label: 'No Index, Follow', value: 'noindex,follow' },
// //             { label: 'Index, No Follow', value: 'index,nofollow' },
// //             { label: 'No Index, No Follow', value: 'noindex,nofollow' },
// //           ],
// //           defaultValue: 'index,follow',
// //         },
// //       ],
// //     },
// //     // Accessibility Settings
// //     {
// //       name: 'accessibilitySettings',
// //       type: 'group',
// //       label: 'Accessibility Settings',
// //       fields: [
// //         {
// //           name: 'skipToContent',
// //           type: 'checkbox',
// //           label: 'Include Skip to Content Link',
// //           defaultValue: true,
// //         },
// //         {
// //           name: 'ariaLabelsEnabled',
// //           type: 'checkbox',
// //           label: 'Enable ARIA Labels',
// //           defaultValue: true,
// //         },
// //         {
// //           name: 'altTextRequired',
// //           type: 'checkbox',
// //           label: 'Require Alt Text for Images',
// //           defaultValue: true,
// //         },
// //         {
// //           name: 'focusVisibleColor',
// //           type: 'text',
// //           label: 'Focus Visible Color',
// //           admin: {
// //             description: 'Color for focus outlines (accessibility)',
// //           },
// //         },
// //         {
// //           name: 'contrastMode',
// //           type: 'select',
// //           label: 'Contrast Mode',
// //           options: [
// //             { label: 'Normal', value: 'normal' },
// //             { label: 'High Contrast', value: 'high' },
// //             { label: 'Very High Contrast', value: 'very-high' },
// //           ],
// //           defaultValue: 'normal',
// //         },
// //       ],
// //     },
// //     // Mobile Settings
// //     {
// //       name: 'mobileSettings',
// //       type: 'group',
// //       label: 'Mobile Settings',
// //       fields: [
// //         {
// //           name: 'mobileBreakpoint',
// //           type: 'text',
// //           label: 'Mobile Breakpoint',
// //           admin: {
// //             description: 'Screen width for mobile (e.g., 768px)',
// //           },
// //           defaultValue: '768px',
// //         },
// //         {
// //           name: 'tabletBreakpoint',
// //           type: 'text',
// //           label: 'Tablet Breakpoint',
// //           admin: {
// //             description: 'Screen width for tablet (e.g., 1024px)',
// //           },
// //           defaultValue: '1024px',
// //         },
// //         {
// //           name: 'mobileFontSizeAdjustment',
// //           type: 'text',
// //           label: 'Mobile Font Size Adjustment',
// //           admin: {
// //             description: 'Percentage adjustment for mobile fonts (e.g., 90%)',
// //           },
// //           defaultValue: '100%',
// //         },
// //         {
// //           name: 'mobileSpacingAdjustment',
// //           type: 'text',
// //           label: 'Mobile Spacing Adjustment',
// //           admin: {
// //             description: 'Percentage adjustment for mobile spacing',
// //           },
// //           defaultValue: '100%',
// //         },
// //         {
// //           name: 'mobileColumnStacking',
// //           type: 'checkbox',
// //           label: 'Stack Columns on Mobile',
// //           defaultValue: true,
// //         },
// //       ],
// //     },
// //     // List Styles
// //     {
// //       name: 'listStyles',
// //       type: 'group',
// //       label: 'List Styles',
// //       fields: [
// //         {
// //           name: 'bulletColor',
// //           type: 'text',
// //           label: 'Bullet Point Color',
// //         },
// //         {
// //           name: 'bulletStyle',
// //           type: 'select',
// //           label: 'Bullet Style',
// //           options: [
// //             { label: 'Disc', value: 'disc' },
// //             { label: 'Circle', value: 'circle' },
// //             { label: 'Square', value: 'square' },
// //             { label: 'None', value: 'none' },
// //           ],
// //           defaultValue: 'disc',
// //         },
// //         {
// //           name: 'listMarginLeft',
// //           type: 'text',
// //           label: 'List Margin Left',
// //           admin: {
// //             description: 'e.g., 20px, 1.5rem',
// //           },
// //         },
// //         {
// //           name: 'listItemSpacing',
// //           type: 'text',
// //           label: 'List Item Spacing',
// //           admin: {
// //             description: 'Spacing between list items (e.g., 10px)',
// //           },
// //         },
// //       ],
// //     },
// //     // Image Settings
// //     {
// //       name: 'imageSettings',
// //       type: 'group',
// //       label: 'Image Settings',
// //       fields: [
// //         {
// //           name: 'lazyLoading',
// //           type: 'checkbox',
// //           label: 'Enable Lazy Loading',
// //           defaultValue: true,
// //         },
// //         {
// //           name: 'imageQuality',
// //           type: 'select',
// //           label: 'Image Quality',
// //           options: [
// //             { label: 'Low', value: 'low' },
// //             { label: 'Medium', value: 'medium' },
// //             { label: 'High', value: 'high' },
// //             { label: 'Original', value: 'original' },
// //           ],
// //           defaultValue: 'high',
// //         },
// //         {
// //           name: 'autoFormat',
// //           type: 'checkbox',
// //           label: 'Auto Format Images',
// //           defaultValue: true,
// //           admin: {
// //             description: 'Automatically optimize image format (WebP, etc.)',
// //           },
// //         },
// //         {
// //           name: 'autoCompress',
// //           type: 'checkbox',
// //           label: 'Auto Compress Images',
// //           defaultValue: true,
// //         },
// //         {
// //           name: 'responsiveImages',
// //           type: 'checkbox',
// //           label: 'Enable Responsive Images',
// //           defaultValue: true,
// //           admin: {
// //             description: 'Generate multiple image sizes for different screens',
// //           },
// //         },
// //         {
// //           name: 'imageBorderRadius',
// //           type: 'text',
// //           label: 'Image Border Radius',
// //           admin: {
// //             description: 'e.g., 8px, 0.5rem',
// //           },
// //         },
// //         {
// //           name: 'imageShadow',
// //           type: 'text',
// //           label: 'Image Shadow',
// //           admin: {
// //             description: 'CSS box-shadow value',
// //           },
// //         },
// //       ],
// //     },
// //     // Link Settings
// //     {
// //       name: 'linkSettings',
// //       type: 'group',
// //       label: 'Link Settings',
// //       fields: [
// //         {
// //           name: 'defaultLinkTarget',
// //           type: 'select',
// //           label: 'Default Link Target',
// //           options: [
// //             { label: 'Same Window', value: '_self' },
// //             { label: 'New Window', value: '_blank' },
// //           ],
// //           defaultValue: '_self',
// //         },
// //         {
// //           name: 'linkUnderline',
// //           type: 'select',
// //           label: 'Link Underline Style',
// //           options: [
// //             { label: 'None', value: 'none' },
// //             { label: 'Always', value: 'always' },
// //             { label: 'On Hover', value: 'hover' },
// //           ],
// //           defaultValue: 'hover',
// //         },
// //         {
// //           name: 'linkTransition',
// //           type: 'text',
// //           label: 'Link Transition',
// //           admin: {
// //             description: 'CSS transition for links (e.g., all 0.3s ease)',
// //           },
// //           defaultValue: 'all 0.3s ease',
// //         },
// //       ],
// //     },
// //     // Spacing Settings
// //     {
// //       name: 'spacingSettings',
// //       type: 'group',
// //       label: 'Spacing Settings',
// //       fields: [
// //         {
// //           name: 'heroSectionSpacing',
// //           type: 'text',
// //           label: 'Hero Section Spacing',
// //           admin: {
// //             description: 'Padding/margin for hero section (e.g., 60px 0)',
// //           },
// //         },
// //         {
// //           name: 'enrollSectionSpacing',
// //           type: 'text',
// //           label: 'Enroll Section Spacing',
// //         },
// //         {
// //           name: 'formSectionSpacing',
// //           type: 'text',
// //           label: 'Form Section Spacing',
// //         },
// //         {
// //           name: 'faqSectionSpacing',
// //           type: 'text',
// //           label: 'FAQ Section Spacing',
// //         },
// //         {
// //           name: 'finalCtaSectionSpacing',
// //           type: 'text',
// //           label: 'Final CTA Section Spacing',
// //         },
// //         {
// //           name: 'elementSpacing',
// //           type: 'text',
// //           label: 'Element Spacing',
// //           admin: {
// //             description: 'Spacing between elements within sections (e.g., 20px)',
// //           },
// //         },
// //       ],
// //     },
// //     // Border & Shadow Settings
// //     {
// //       name: 'borderShadowSettings',
// //       type: 'group',
// //       label: 'Border & Shadow Settings',
// //       fields: [
// //         {
// //           name: 'boxBorderRadius',
// //           type: 'text',
// //           label: 'Box Border Radius',
// //           admin: {
// //             description: 'Border radius for boxes (e.g., 8px)',
// //           },
// //         },
// //         {
// //           name: 'boxShadow',
// //           type: 'text',
// //           label: 'Box Shadow',
// //           admin: {
// //             description: 'CSS box-shadow value',
// //           },
// //         },
// //         {
// //           name: 'boxHoverShadow',
// //           type: 'text',
// //           label: 'Box Hover Shadow',
// //         },
// //         {
// //           name: 'sectionBorder',
// //           type: 'text',
// //           label: 'Section Border',
// //           admin: {
// //             description: 'Border for sections (e.g., 1px solid #ccc)',
// //           },
// //         },
// //         {
// //           name: 'sectionBorderRadius',
// //           type: 'text',
// //           label: 'Section Border Radius',
// //         },
// //       ],
// //     },
// //     // Column Width Settings
// //     {
// //       name: 'columnWidthSettings',
// //       type: 'group',
// //       label: 'Column Width Settings',
// //       fields: [
// //         {
// //           name: 'twoColumnLeftWidth',
// //           type: 'text',
// //           label: 'Two Column Left Width',
// //           admin: {
// //             description: 'Width for left column (e.g., 50%, 60%)',
// //           },
// //           defaultValue: '50%',
// //         },
// //         {
// //           name: 'twoColumnRightWidth',
// //           type: 'text',
// //           label: 'Two Column Right Width',
// //           defaultValue: '50%',
// //         },
// //         {
// //           name: 'columnGap',
// //           type: 'text',
// //           label: 'Column Gap',
// //           admin: {
// //             description: 'Space between columns (e.g., 20px, 2rem)',
// //           },
// //           defaultValue: '20px',
// //         },
// //       ],
// //     },
// //     // Header/Title Settings
// //     {
// //       name: 'headerSettings',
// //       type: 'group',
// //       label: 'Header/Title Settings',
// //       fields: [
// //         {
// //           name: 'headingTextTransform',
// //           type: 'select',
// //           label: 'Heading Text Transform',
// //           options: [
// //             { label: 'None', value: 'none' },
// //             { label: 'Uppercase', value: 'uppercase' },
// //             { label: 'Lowercase', value: 'lowercase' },
// //             { label: 'Capitalize', value: 'capitalize' },
// //           ],
// //           defaultValue: 'none',
// //         },
// //         {
// //           name: 'headingLetterSpacing',
// //           type: 'text',
// //           label: 'Heading Letter Spacing',
// //           admin: {
// //             description: 'e.g., 1px, 0.05em',
// //           },
// //         },
// //         {
// //           name: 'headingMarginBottom',
// //           type: 'text',
// //           label: 'Heading Margin Bottom',
// //           admin: {
// //             description: 'Space below headings (e.g., 20px)',
// //           },
// //         },
// //         {
// //           name: 'subheadingFontSize',
// //           type: 'text',
// //           label: 'Subheading Font Size',
// //         },
// //         {
// //           name: 'subheadingColor',
// //           type: 'text',
// //           label: 'Subheading Color',
// //         },
// //       ],
// //     },
// //     // Hover Effects
// //     {
// //       name: 'hoverEffects',
// //       type: 'group',
// //       label: 'Hover Effects',
// //       fields: [
// //         {
// //           name: 'enableBoxHover',
// //           type: 'checkbox',
// //           label: 'Enable Box Hover Effects',
// //           defaultValue: true,
// //         },
// //         {
// //           name: 'boxHoverTransform',
// //           type: 'text',
// //           label: 'Box Hover Transform',
// //           admin: {
// //             description: 'CSS transform on hover (e.g., translateY(-5px))',
// //           },
// //         },
// //         {
// //           name: 'boxHoverTransition',
// //           type: 'text',
// //           label: 'Box Hover Transition',
// //           defaultValue: 'all 0.3s ease',
// //         },
// //         {
// //           name: 'imageHoverEffect',
// //           type: 'select',
// //           label: 'Image Hover Effect',
// //           options: [
// //             { label: 'None', value: 'none' },
// //             { label: 'Zoom In', value: 'zoom-in' },
// //             { label: 'Zoom Out', value: 'zoom-out' },
// //             { label: 'Opacity', value: 'opacity' },
// //           ],
// //           defaultValue: 'none',
// //         },
// //         {
// //           name: 'imageHoverOpacity',
// //           type: 'text',
// //           label: 'Image Hover Opacity',
// //           admin: {
// //             description: 'Opacity value on hover (e.g., 0.8)',
// //           },
// //         },
// //       ],
// //     },
// //     // Grid Settings
// //     {
// //       name: 'gridSettings',
// //       type: 'group',
// //       label: 'Grid Settings',
// //       fields: [
// //         {
// //           name: 'faqGridColumns',
// //           type: 'number',
// //           label: 'FAQ Grid Columns (Desktop)',
// //           defaultValue: 3,
// //           admin: {
// //             description: 'Number of columns in FAQ grid on desktop',
// //           },
// //         },
// //         {
// //           name: 'faqGridColumnsTablet',
// //           type: 'number',
// //           label: 'FAQ Grid Columns (Tablet)',
// //           defaultValue: 2,
// //         },
// //         {
// //           name: 'faqGridColumnsMobile',
// //           type: 'number',
// //           label: 'FAQ Grid Columns (Mobile)',
// //           defaultValue: 1,
// //         },
// //         {
// //           name: 'faqGridGap',
// //           type: 'text',
// //           label: 'FAQ Grid Gap',
// //           admin: {
// //             description: 'Space between grid items (e.g., 20px)',
// //           },
// //           defaultValue: '20px',
// //         },
// //       ],
// //     },
// //     // Content Alignment
// //     {
// //       name: 'contentAlignment',
// //       type: 'group',
// //       label: 'Content Alignment',
// //       fields: [
// //         {
// //           name: 'heroContentAlign',
// //           type: 'select',
// //           label: 'Hero Content Alignment',
// //           options: [
// //             { label: 'Left', value: 'left' },
// //             { label: 'Center', value: 'center' },
// //             { label: 'Right', value: 'right' },
// //           ],
// //           defaultValue: 'left',
// //         },
// //         {
// //           name: 'enrollContentAlign',
// //           type: 'select',
// //           label: 'Enroll Content Alignment',
// //           options: [
// //             { label: 'Left', value: 'left' },
// //             { label: 'Center', value: 'center' },
// //             { label: 'Right', value: 'right' },
// //           ],
// //           defaultValue: 'left',
// //         },
// //         {
// //           name: 'formContentAlign',
// //           type: 'select',
// //           label: 'Form Content Alignment',
// //           options: [
// //             { label: 'Left', value: 'left' },
// //             { label: 'Center', value: 'center' },
// //             { label: 'Right', value: 'right' },
// //           ],
// //           defaultValue: 'center',
// //         },
// //         {
// //           name: 'faqContentAlign',
// //           type: 'select',
// //           label: 'FAQ Content Alignment',
// //           options: [
// //             { label: 'Left', value: 'left' },
// //             { label: 'Center', value: 'center' },
// //             { label: 'Right', value: 'right' },
// //           ],
// //           defaultValue: 'left',
// //         },
// //       ],
// //     },
// //     // Background Settings
// //     {
// //       name: 'backgroundSettings',
// //       type: 'group',
// //       label: 'Background Settings',
// //       fields: [
// //         {
// //           name: 'backgroundImageSize',
// //           type: 'select',
// //           label: 'Background Image Size',
// //           options: [
// //             { label: 'Cover', value: 'cover' },
// //             { label: 'Contain', value: 'contain' },
// //             { label: 'Auto', value: 'auto' },
// //           ],
// //           defaultValue: 'cover',
// //         },
// //         {
// //           name: 'backgroundImagePosition',
// //           type: 'select',
// //           label: 'Background Image Position',
// //           options: [
// //             { label: 'Center', value: 'center' },
// //             { label: 'Top', value: 'top' },
// //             { label: 'Bottom', value: 'bottom' },
// //             { label: 'Left', value: 'left' },
// //             { label: 'Right', value: 'right' },
// //           ],
// //           defaultValue: 'center',
// //         },
// //         {
// //           name: 'backgroundImageRepeat',
// //           type: 'select',
// //           label: 'Background Image Repeat',
// //           options: [
// //             { label: 'No Repeat', value: 'no-repeat' },
// //             { label: 'Repeat', value: 'repeat' },
// //             { label: 'Repeat X', value: 'repeat-x' },
// //             { label: 'Repeat Y', value: 'repeat-y' },
// //           ],
// //           defaultValue: 'no-repeat',
// //         },
// //         {
// //           name: 'backgroundOverlay',
// //           type: 'checkbox',
// //           label: 'Enable Background Overlay',
// //           defaultValue: false,
// //         },
// //         {
// //           name: 'backgroundOverlayColor',
// //           type: 'text',
// //           label: 'Background Overlay Color',
// //           admin: {
// //             description: 'RGBA color value (e.g., rgba(0,0,0,0.5))',
// //           },
// //         },
// //       ],
// //     },
// //     // Center Alignment Settings
// //     {
// //       name: 'centerAlignmentSettings',
// //       type: 'group',
// //       label: 'Center Alignment Settings',
// //       fields: [
// //         {
// //           name: 'centerTag',
// //           type: 'select',
// //           label: 'HTML Tag for Center',
// //           options: [
// //             { label: 'Center Tag', value: 'center' },
// //             { label: 'Div with text-align', value: 'div' },
// //           ],
// //           defaultValue: 'center',
// //           admin: {
// //             description: 'Choose between <center> tag or <div style="text-align: center">',
// //           },
// //         },
// //       ],
// //     },
// //     // Custom CSS
// //     {
// //       name: 'customCSS',
// //       type: 'group',
// //       label: 'Custom CSS',
// //       fields: [
// //         {
// //           name: 'additionalCSS',
// //           type: 'textarea',
// //           label: 'Additional CSS',
// //           admin: {
// //             description: 'Add custom CSS styles for this component',
// //             rows: 10,
// //           },
// //         },
// //         {
// //           name: 'cssClasses',
// //           type: 'array',
// //           label: 'Additional CSS Classes',
// //           admin: {
// //             description: 'Add custom CSS class names to sections',
// //           },
// //           fields: [
// //             {
// //               name: 'section',
// //               type: 'select',
// //               label: 'Apply to Section',
// //               options: [
// //                 { label: 'Hero Section', value: 'hero' },
// //                 { label: 'Enroll Section', value: 'enroll' },
// //                 { label: 'Form Section', value: 'form' },
// //                 { label: 'FAQ Section', value: 'faq' },
// //                 { label: 'Final CTA Section', value: 'finalCta' },
// //               ],
// //             },
// //             {
// //               name: 'className',
// //               type: 'text',
// //               label: 'Class Name',
// //               required: true,
// //             },
// //           ],
// //         },
// //       ],
// //     },
// //     {
// //       name: 'isActive',
// //       type: 'checkbox',
// //       label: 'Active',
// //       defaultValue: true,
// //       admin: {
// //         description: 'Toggle to enable/disable this component',
// //       },
// //     },
// //   ],
// //   timestamps: true,
// // }

// import { CollectionConfig } from 'payload'

// export const TrainingApplicationComponent: CollectionConfig = {
//   slug: 'training-application-component',
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
//     // Hero Two Column Section
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
//         },
//         {
//           name: 'verticalAlign',
//           type: 'checkbox',
//           label: 'Vertical Align Content',
//           defaultValue: true,
//         },
//         {
//           name: 'leftContent',
//           type: 'group',
//           label: 'Left Column Content',
//           fields: [
//             {
//               name: 'heading',
//               type: 'text',
//               label: 'Main Heading',
//               defaultValue: 'Apply for Your Training Spot Today',
//               required: true,
//             },
//             {
//               name: 'headingColor',
//               type: 'text',
//               label: 'Heading Color',
//             },
//             {
//               name: 'paragraphs',
//               type: 'array',
//               label: 'Content Paragraphs',
//               admin: {
//                 description: 'Drag to reorder paragraphs',
//               },
//             //   defaultValue: [
//             //     {
//             //       text: [
//             //         {
//             //           type: 'paragraph',
//             //           children: [
//             //             {
//             //               text: 'Launch your career in aesthetics with Goldfingers Aesthetics, the #1 aesthetic center for BOTOX ®treatment in Florida. The Gold Standard Aesthetics Training Program delivers elite education for future injectors —led by industry leaders, powered by over 20 years of expertise, and designed for providers who are ready to elevate their craft.',
//             //             },
//             //           ],
//             //         },
//             //       ],
//             //     },
//             //     {
//             //       text: [
//             //         {
//             //           type: 'paragraph',
//             //           children: [
//             //             {
//             //               text: "Whether you're new to aesthetic injectables or seeking to refine and expand your skillset, our AMI-certified program offers hands-on, real-world training at Florida's largest aesthetics center. Join the program that reflects the same artistry, consistency, and results that made Goldfingers Aesthetics a top 1% national provider.",
//             //             },
//             //           ],
//             //         },
//             //       ],
//             //     },
//             //   ],
//               fields: [
//                 {
//                   name: 'text',
//                   type: 'richText',
//                   label: 'Paragraph Text',
//                   required: true,
//                 },
//                 {
//                   name: 'textColor',
//                   type: 'text',
//                   label: 'Paragraph Text Color',
//                 },
//               ],
//             },
//             {
//               name: 'animation',
//               type: 'text',
//               label: 'Animation Class',
//               defaultValue: 'fadeInLeft',
//             },
//           ],
//         },
//         {
//           name: 'rightContent',
//           type: 'group',
//           label: 'Right Column Content',
//           fields: [
//             {
//               name: 'image',
//               type: 'upload',
//               relationTo: 'media',
//               label: 'Image',
//               required: true,
//             },
//             {
//               name: 'alt',
//               type: 'text',
//               label: 'Alt Text',
//               defaultValue: 'woman handing clipboard back to nurse',
//               required: true,
//             },
//             {
//               name: 'animation',
//               type: 'text',
//               label: 'Animation Class',
//               defaultValue: 'fadeInRight',
//             },
//           ],
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
//           required: true,
//         },
//         {
//           name: 'headingColor',
//           type: 'text',
//           label: 'Heading Color',
//         },
//         {
//           name: 'steps',
//           type: 'array',
//           label: 'Enrollment Steps',
//           admin: {
//             description: 'Drag to reorder steps',
//           },
//         //   defaultValue: [
//         //     {
//         //       boldText: 'Fill Out the Initial Application below',
//         //     },
//         //     {
//         //       boldText: 'Receive Confirmation & Payment Instructions:',
//         //       description: [
//         //         {
//         //           type: 'paragraph',
//         //           children: [
//         //             {
//         //               text: "Once accepted, you'll receive next steps to finalize your enrollment.",
//         //             },
//         //           ],
//         //         },
//         //       ],
//         //     },
//         //     {
//         //       boldText: 'Start Your Online Training & Get Ready for Hands-On Experience:',
//         //       description: [
//         //         {
//         //           type: 'paragraph',
//         //           children: [
//         //             {
//         //               text: 'Dive into our online modules and prepare for in-person training at one of our clinic locations.',
//         //             },
//         //           ],
//         //         },
//         //       ],
//         //     },
//         //   ],
//           fields: [
//             {
//               name: 'boldText',
//               type: 'text',
//               label: 'Bold Text (Step Title)',
//               required: true,
//             },
//             {
//               name: 'description',
//               type: 'richText',
//               label: 'Step Description',
//             },
//             {
//               name: 'textColor',
//               type: 'text',
//               label: 'Text Color',
//             },
//           ],
//         },
//       ],
//     },
//     // Contact Form Section
//     {
//       name: 'formSection',
//       type: 'group',
//       label: 'Application Form Section',
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
//           defaultValue: 'mod_contact_form dark',
//         },
//         {
//           name: 'heading',
//           type: 'text',
//           label: 'Form Heading',
//           defaultValue: 'Apply Now',
//           required: true,
//         },
//         {
//           name: 'headingColor',
//           type: 'text',
//           label: 'Heading Color',
//         },
//         {
//           name: 'formId',
//           type: 'text',
//           label: 'Form ID',
//           defaultValue: 'form_training',
//           required: true,
//         },
//         {
//           name: 'formAction',
//           type: 'text',
//           label: 'Form Action URL',
//           defaultValue: '/validate/',
//           required: true,
//         },
//         {
//           name: 'redirectUrl',
//           type: 'text',
//           label: 'Success Redirect URL',
//           defaultValue: '/contact/thank-you/',
//           required: true,
//         },
//         {
//           name: 'subject',
//           type: 'text',
//           label: 'Email Subject',
//           defaultValue: 'Training Sign Up Form',
//           required: true,
//         },
//         {
//           name: 'formFields',
//           type: 'array',
//           label: 'Form Fields',
//           admin: {
//             description: 'Drag to reorder form fields',
//           },
//           defaultValue: [
//             {
//               fieldType: 'text',
//               fieldName: 'first_name',
//               fieldId: 'training_first_name',
//               label: 'First Name*',
//               placeholder: 'First Name*',
//               required: true,
//             },
//             {
//               fieldType: 'text',
//               fieldName: 'last_name',
//               fieldId: 'training_last_name',
//               label: 'Last Name*',
//               placeholder: 'Last Name*',
//               required: true,
//             },
//             {
//               fieldType: 'tel',
//               fieldName: 'phone',
//               fieldId: 'training_phone',
//               label: 'Phone*',
//               placeholder: 'Phone*',
//               required: true,
//             },
//             {
//               fieldType: 'email',
//               fieldName: 'email',
//               fieldId: 'training_email',
//               label: 'Email*',
//               placeholder: 'Email*',
//               required: true,
//             },
//             {
//               fieldType: 'text',
//               fieldName: 'preferred_training_month',
//               fieldId: 'training_preferred_training_month',
//               label: 'Preferred Training Month',
//               placeholder: 'Preferred Training Month',
//               required: false,
//             },
//             {
//               fieldType: 'select',
//               fieldName: 'preferred_training_program',
//               fieldId: 'training_preferred_training_program',
//               label: 'Preferred Training Program*',
//               required: true,
//               selectOptions: [
//                 {
//                   label: 'Preferred Training Program*',
//                   value: '',
//                   selected: true,
//                   disabled: true,
//                 },
//                 {
//                   label: 'Foundational',
//                   value: 'Foundational',
//                   selected: false,
//                   disabled: false,
//                 },
//                 {
//                   label: 'Comprehensive',
//                   value: 'Comprehensive',
//                   selected: false,
//                   disabled: false,
//                 },
//               ],
//             },
//             {
//               fieldType: 'textarea',
//               fieldName: 'questions_or_comments',
//               fieldId: 'training_questions_or_comments',
//               label: 'Questions or Comments',
//               placeholder: 'Questions or Comments',
//               required: false,
//               rows: 6,
//               cols: 48,
//             },
//             {
//               fieldType: 'checkbox',
//               fieldName: 'optin_for_sms_texting',
//               fieldId: 'training_optin_for_sms_texting',
//               label: 'Opt-In For SMS Texting',
//               checkboxValue: 'Yes',
//               fieldClass: 'opt-in follow-up',
//             },
//             {
//               fieldType: 'checkbox',
//               fieldName:
//                 'by_completing_this_form_you_are_giving_us_permission_to_followup_by_phone_email_or_text',
//               fieldId:
//                 'training_by_completing_this_form_you_are_giving_us_permission_to_followup_by_phone_email_or_text',
//               label:
//                 'By completing this form, you are giving us permission to follow-up by phone, email or text.',
//               checkboxValue: 'Yes',
//               required: true,
//               fieldClass: 'follow-up',
//             },
//           ],
//           fields: [
//             {
//               name: 'fieldType',
//               type: 'select',
//               label: 'Field Type',
//               required: true,
//               options: [
//                 { label: 'Text', value: 'text' },
//                 { label: 'Email', value: 'email' },
//                 { label: 'Phone', value: 'tel' },
//                 { label: 'Textarea', value: 'textarea' },
//                 { label: 'Select', value: 'select' },
//                 { label: 'Checkbox', value: 'checkbox' },
//               ],
//             },
//             {
//               name: 'fieldName',
//               type: 'text',
//               label: 'Field Name',
//               required: true,
//               admin: {
//                 description: 'Used as HTML name attribute',
//               },
//             },
//             {
//               name: 'fieldId',
//               type: 'text',
//               label: 'Field ID',
//               required: true,
//             },
//             {
//               name: 'label',
//               type: 'text',
//               label: 'Field Label',
//               required: true,
//             },
//             {
//               name: 'placeholder',
//               type: 'text',
//               label: 'Placeholder Text',
//             },
//             {
//               name: 'required',
//               type: 'checkbox',
//               label: 'Required Field',
//               defaultValue: false,
//             },
//             {
//               name: 'rows',
//               type: 'number',
//               label: 'Textarea Rows',
//               admin: {
//                 description: 'Only for textarea fields',
//               },
//             },
//             {
//               name: 'cols',
//               type: 'number',
//               label: 'Textarea Columns',
//               admin: {
//                 description: 'Only for textarea fields',
//               },
//             },
//             {
//               name: 'selectOptions',
//               type: 'array',
//               label: 'Select Options',
//               admin: {
//                 description: 'Only for select fields - drag to reorder',
//               },
//               fields: [
//                 {
//                   name: 'label',
//                   type: 'text',
//                   label: 'Option Label',
//                   required: true,
//                 },
//                 {
//                   name: 'value',
//                   type: 'text',
//                   label: 'Option Value',
//                   required: true,
//                 },
//                 {
//                   name: 'selected',
//                   type: 'checkbox',
//                   label: 'Selected by Default',
//                   defaultValue: false,
//                 },
//                 {
//                   name: 'disabled',
//                   type: 'checkbox',
//                   label: 'Disabled',
//                   defaultValue: false,
//                 },
//               ],
//             },
//             {
//               name: 'checkboxValue',
//               type: 'text',
//               label: 'Checkbox Value',
//               admin: {
//                 description: 'Only for checkbox fields',
//               },
//             },
//             {
//               name: 'fieldClass',
//               type: 'text',
//               label: 'Additional CSS Classes',
//             },
//           ],
//         },
//         {
//           name: 'submitButton',
//           type: 'group',
//           label: 'Submit Button',
//           fields: [
//             {
//               name: 'text',
//               type: 'text',
//               label: 'Button Text',
//               defaultValue: 'Submit',
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
//               label: 'Hover Background Color',
//             },
//             {
//               name: 'hoverTextColor',
//               type: 'text',
//               label: 'Hover Text Color',
//             },
//             {
//               name: 'className',
//               type: 'text',
//               label: 'Button Class',
//               defaultValue: 'submit btn',
//             },
//           ],
//         },
//         {
//           name: 'disclaimerText',
//           type: 'richText',
//           label: 'Disclaimer/Legal Text',
//           admin: {
//             description: 'Text appearing below form (messaging rates, privacy policy links, etc.)',
//           },
//         //   defaultValue: [
//         //     {
//         //       type: 'paragraph',
//         //       children: [
//         //         {
//         //           text: 'Messaging frequency may vary. Message and data rates may apply. You can opt out any time by texting STOP. For assistance, text HELP or visit our website at ',
//         //         },
//         //         {
//         //           type: 'link',
//         //           url: 'https://goldfingersaesthetics.com',
//         //           children: [{ text: 'Goldfingers Aesthetics' }],
//         //         },
//         //         {
//         //           text: '. Visit ',
//         //         },
//         //         {
//         //           type: 'link',
//         //           url: 'https://goldfingersaesthetics.com/privacy-policy',
//         //           children: [{ text: 'Privacy Policy' }],
//         //         },
//         //         {
//         //           text: ' and ',
//         //         },
//         //         {
//         //           type: 'link',
//         //           url: 'https://www.goldfingersaesthetics.com/terms-and-conditions/',
//         //           children: [{ text: 'Terms and Conditions' }],
//         //         },
//         //         {
//         //           text: '.',
//         //         },
//         //       ],
//         //     },
//         //   ],
//         },
//         {
//           name: 'disclaimerTextColor',
//           type: 'text',
//           label: 'Disclaimer Text Color',
//         },
//         {
//           name: 'enableRecaptcha',
//           type: 'checkbox',
//           label: 'Enable reCAPTCHA',
//           defaultValue: true,
//         },
//       ],
//     },
//     // FAQs Section
//     {
//       name: 'faqSection',
//       type: 'group',
//       label: 'FAQs Section',
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
//             },
//           ],
//         },
//         {
//           name: 'heading',
//           type: 'text',
//           label: 'Section Heading',
//           defaultValue: 'FAQs',
//           required: true,
//         },
//         {
//           name: 'headingColor',
//           type: 'text',
//           label: 'Heading Color',
//         },
//         {
//           name: 'faqs',
//           type: 'array',
//           label: 'FAQ Items',
//           admin: {
//             description: 'Drag to reorder FAQs',
//           },
//         //   defaultValue: [
//         //     {
//         //       question: 'Who is eligible for this training?',
//         //       answer: [
//         //         {
//         //           type: 'paragraph',
//         //           children: [
//         //             {
//         //               text: 'NPs, PAs, and MDs are welcome to apply. We do not currently accept RNs.',
//         //             },
//         //           ],
//         //         },
//         //       ],
//         //       animation: 'fadeInLeft',
//         //     },
//         //     {
//         //       question: 'What certification will I receive?',
//         //       answer: [
//         //         {
//         //           type: 'paragraph',
//         //           children: [
//         //             {
//         //               text: 'Graduates will earn an AMI (Allergan Medical Institute) Certification.',
//         //             },
//         //           ],
//         //         },
//         //       ],
//         //       animation: 'fadeInLeft',
//         //     },
//         //     {
//         //       question: 'Do I need prior experience?',
//         //       answer: [
//         //         {
//         //           type: 'paragraph',
//         //           children: [
//         //             {
//         //               text: 'No experience is necessary. Our program is designed for all levels.',
//         //             },
//         //           ],
//         //         },
//         //       ],
//         //       animation: 'fadeInLeft',
//         //     },
//         //     {
//         //       question: 'Where are the trainings held?',
//         //       answer: [
//         //         {
//         //           type: 'paragraph',
//         //           children: [
//         //             {
//         //               text: 'In-person training sessions are held at Goldfingers Aesthetics clinics throughout Florida.',
//         //             },
//         //           ],
//         //         },
//         //       ],
//         //       animation: 'fadeInLeft',
//         //     },
//         //     {
//         //       question: 'What is included in the tuition?',
//         //       answer: [
//         //         {
//         //           type: 'paragraph',
//         //           children: [
//         //             {
//         //               text: 'Your tuition includes hands-on training, access to online learning modules, and certification upon completion.',
//         //             },
//         //           ],
//         //         },
//         //       ],
//         //       animation: 'fadeInLeft',
//         //     },
//         //     {
//         //       question: 'Are payment plans available?',
//         //       answer: [
//         //         {
//         //           type: 'paragraph',
//         //           children: [
//         //             {
//         //               text: 'Not at this time. Full tuition is required at enrollment.',
//         //             },
//         //           ],
//         //         },
//         //       ],
//         //       animation: 'fadeInLeft',
//         //     },
//         //   ],
//           fields: [
//             {
//               name: 'question',
//               type: 'text',
//               label: 'Question',
//               required: true,
//             },
//             {
//               name: 'questionColor',
//               type: 'text',
//               label: 'Question Text Color',
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
//               label: 'Answer Text Color',
//             },
//             {
//               name: 'boxBackgroundColor',
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
//         },
//       ],
//     },
//     // Final CTA Section
//     {
//       name: 'finalCtaSection',
//       type: 'group',
//       label: 'Final CTA Section',
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
//           name: 'centerAlign',
//           type: 'checkbox',
//           label: 'Center Align Content',
//           defaultValue: true,
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
//               defaultValue: 'Apply Now & Secure Your Spot',
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
//               defaultValue: true,
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
//             { label: 'Application Form Section', value: 'form' },
//             { label: 'FAQs Section', value: 'faq' },
//             { label: 'Final CTA Section', value: 'finalCta' },
//           ],
//         },
//       ],
//       defaultValue: [
//         { section: 'hero' },
//         { section: 'enroll' },
//         { section: 'form' },
//         { section: 'faq' },
//         { section: 'finalCta' },
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
//         {
//           name: 'emFontStyle',
//           type: 'select',
//           label: 'Emphasis (em) Font Style',
//           options: [
//             { label: 'Normal', value: 'normal' },
//             { label: 'Italic', value: 'italic' },
//             { label: 'Oblique', value: 'oblique' },
//           ],
//           defaultValue: 'italic',
//         },
//         {
//           name: 'strongFontWeight',
//           type: 'select',
//           label: 'Strong/Bold Font Weight',
//           options: [
//             { label: 'Normal', value: 'normal' },
//             { label: 'Bold', value: 'bold' },
//             { label: '500', value: '500' },
//             { label: '600', value: '600' },
//             { label: '700', value: '700' },
//             { label: '800', value: '800' },
//           ],
//           defaultValue: 'bold',
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
//           name: 'border',
//           type: 'text',
//           label: 'Button Border',
//           admin: {
//             description: 'e.g., 1px solid #000',
//           },
//         },
//         {
//           name: 'transition',
//           type: 'text',
//           label: 'Button Transition',
//           defaultValue: 'all 0.3s ease',
//         },
//       ],
//     },
//     // Form Styles
//     {
//       name: 'formStyles',
//       type: 'group',
//       label: 'Form Styles',
//       fields: [
//         {
//           name: 'inputBackgroundColor',
//           type: 'text',
//           label: 'Input Background Color',
//         },
//         {
//           name: 'inputTextColor',
//           type: 'text',
//           label: 'Input Text Color',
//         },
//         {
//           name: 'inputBorderColor',
//           type: 'text',
//           label: 'Input Border Color',
//         },
//         {
//           name: 'inputBorderWidth',
//           type: 'text',
//           label: 'Input Border Width',
//           defaultValue: '1px',
//         },
//         {
//           name: 'inputBorderRadius',
//           type: 'text',
//           label: 'Input Border Radius',
//           admin: {
//             description: 'e.g., 4px',
//           },
//         },
//         {
//           name: 'inputPadding',
//           type: 'text',
//           label: 'Input Padding',
//           admin: {
//             description: 'e.g., 10px 15px',
//           },
//         },
//         {
//           name: 'inputFocusBorderColor',
//           type: 'text',
//           label: 'Input Focus Border Color',
//         },
//         {
//           name: 'inputFocusShadow',
//           type: 'text',
//           label: 'Input Focus Shadow',
//           admin: {
//             description: 'CSS box-shadow value',
//           },
//         },
//         {
//           name: 'labelColor',
//           type: 'text',
//           label: 'Label Color',
//         },
//         {
//           name: 'labelFontSize',
//           type: 'text',
//           label: 'Label Font Size',
//         },
//         {
//           name: 'labelFontWeight',
//           type: 'text',
//           label: 'Label Font Weight',
//         },
//         {
//           name: 'placeholderColor',
//           type: 'text',
//           label: 'Placeholder Text Color',
//         },
//         {
//           name: 'errorColor',
//           type: 'text',
//           label: 'Error Message Color',
//         },
//         {
//           name: 'fieldSpacing',
//           type: 'text',
//           label: 'Field Spacing',
//           admin: {
//             description: 'Space between form fields (e.g., 20px)',
//           },
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
//         {
//           name: 'animationDelay',
//           type: 'text',
//           label: 'Animation Delay',
//           admin: {
//             description: 'Delay before animation starts (e.g., 0.2s)',
//           },
//           defaultValue: '0s',
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
//         {
//           name: 'mobileColumnStacking',
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
//         {
//           name: 'imageBorderRadius',
//           type: 'text',
//           label: 'Image Border Radius',
//           admin: {
//             description: 'e.g., 8px, 0.5rem',
//           },
//         },
//         {
//           name: 'imageShadow',
//           type: 'text',
//           label: 'Image Shadow',
//           admin: {
//             description: 'CSS box-shadow value',
//           },
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
//           name: 'formSectionSpacing',
//           type: 'text',
//           label: 'Form Section Spacing',
//         },
//         {
//           name: 'faqSectionSpacing',
//           type: 'text',
//           label: 'FAQ Section Spacing',
//         },
//         {
//           name: 'finalCtaSectionSpacing',
//           type: 'text',
//           label: 'Final CTA Section Spacing',
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
//           name: 'sectionBorder',
//           type: 'text',
//           label: 'Section Border',
//           admin: {
//             description: 'Border for sections (e.g., 1px solid #ccc)',
//           },
//         },
//         {
//           name: 'sectionBorderRadius',
//           type: 'text',
//           label: 'Section Border Radius',
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
//     // Header/Title Settings
//     {
//       name: 'headerSettings',
//       type: 'group',
//       label: 'Header/Title Settings',
//       fields: [
//         {
//           name: 'headingTextTransform',
//           type: 'select',
//           label: 'Heading Text Transform',
//           options: [
//             { label: 'None', value: 'none' },
//             { label: 'Uppercase', value: 'uppercase' },
//             { label: 'Lowercase', value: 'lowercase' },
//             { label: 'Capitalize', value: 'capitalize' },
//           ],
//           defaultValue: 'none',
//         },
//         {
//           name: 'headingLetterSpacing',
//           type: 'text',
//           label: 'Heading Letter Spacing',
//           admin: {
//             description: 'e.g., 1px, 0.05em',
//           },
//         },
//         {
//           name: 'headingMarginBottom',
//           type: 'text',
//           label: 'Heading Margin Bottom',
//           admin: {
//             description: 'Space below headings (e.g., 20px)',
//           },
//         },
//         {
//           name: 'subheadingFontSize',
//           type: 'text',
//           label: 'Subheading Font Size',
//         },
//         {
//           name: 'subheadingColor',
//           type: 'text',
//           label: 'Subheading Color',
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
//     // Content Alignment
//     {
//       name: 'contentAlignment',
//       type: 'group',
//       label: 'Content Alignment',
//       fields: [
//         {
//           name: 'heroContentAlign',
//           type: 'select',
//           label: 'Hero Content Alignment',
//           options: [
//             { label: 'Left', value: 'left' },
//             { label: 'Center', value: 'center' },
//             { label: 'Right', value: 'right' },
//           ],
//           defaultValue: 'left',
//         },
//         {
//           name: 'enrollContentAlign',
//           type: 'select',
//           label: 'Enroll Content Alignment',
//           options: [
//             { label: 'Left', value: 'left' },
//             { label: 'Center', value: 'center' },
//             { label: 'Right', value: 'right' },
//           ],
//           defaultValue: 'left',
//         },
//         {
//           name: 'formContentAlign',
//           type: 'select',
//           label: 'Form Content Alignment',
//           options: [
//             { label: 'Left', value: 'left' },
//             { label: 'Center', value: 'center' },
//             { label: 'Right', value: 'right' },
//           ],
//           defaultValue: 'center',
//         },
//         {
//           name: 'faqContentAlign',
//           type: 'select',
//           label: 'FAQ Content Alignment',
//           options: [
//             { label: 'Left', value: 'left' },
//             { label: 'Center', value: 'center' },
//             { label: 'Right', value: 'right' },
//           ],
//           defaultValue: 'left',
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
//     // Center Alignment Settings
//     {
//       name: 'centerAlignmentSettings',
//       type: 'group',
//       label: 'Center Alignment Settings',
//       fields: [
//         {
//           name: 'centerTag',
//           type: 'select',
//           label: 'HTML Tag for Center',
//           options: [
//             { label: 'Center Tag', value: 'center' },
//             { label: 'Div with text-align', value: 'div' },
//           ],
//           defaultValue: 'center',
//           admin: {
//             description: 'Choose between <center> tag or <div style="text-align: center">',
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
//                 { label: 'Form Section', value: 'form' },
//                 { label: 'FAQ Section', value: 'faq' },
//                 { label: 'Final CTA Section', value: 'finalCta' },
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

export const TrainingApplication: CollectionConfig = {
  slug: 'training-application',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'isActive', 'updatedAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Training Application',
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Toggle to enable/disable this section',
      },
    },
    // Intro Module
    {
      name: 'introModule',
      type: 'group',
      fields: [
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
          required: false,
          admin: {
            description: 'Logo for the intro section',
          },
        },
        {
          name: 'heading',
          type: 'text',
          defaultValue: 'Apply for Your Training Spot Today',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          defaultValue:
            'Begin your journey with the #1 aesthetics training program in Florida. Fill out the form below to apply for hands-on instruction, expert guidance, and AMI certification.',
        },
      ],
    },
    // Form Section
    {
      name: 'formSection',
      type: 'group',
      fields: [
        {
          name: 'formTitle',
          type: 'text',
          defaultValue: 'Apply Now',
        },
        {
          name: 'backgroundColor',
          type: 'text',
          defaultValue: '#ffffff',
        },
        {
          name: 'formId',
          type: 'text',
          defaultValue: 'form_training',
        },
        {
          name: 'redirectUrl',
          type: 'text',
          defaultValue: '/contact/thank-you/',
        },
        {
          name: 'subjectLine',
          type: 'text',
          defaultValue: 'Training Sign Up Form',
        },
        // Form Fields Configuration
        {
          name: 'formFields',
          type: 'array',
          defaultValue: [
            {
              fieldType: 'text',
              name: 'first_name',
              label: 'First Name*',
              placeholder: 'First Name*',
              required: true,
              order: 1,
            },
            {
              fieldType: 'text',
              name: 'last_name',
              label: 'Last Name*',
              placeholder: 'Last Name*',
              required: true,
              order: 2,
            },
            {
              fieldType: 'tel',
              name: 'phone',
              label: 'Phone*',
              placeholder: 'Phone*',
              required: true,
              order: 3,
            },
            {
              fieldType: 'email',
              name: 'email',
              label: 'Email*',
              placeholder: 'Email*',
              required: true,
              order: 4,
            },
            {
              fieldType: 'text',
              name: 'preferred_training_month',
              label: 'Preferred Training Month',
              placeholder: 'Preferred Training Month',
              required: false,
              order: 5,
            },
            {
              fieldType: 'select',
              name: 'preferred_training_program',
              label: 'Preferred Training Program*',
              placeholder: 'Preferred Training Program*',
              required: true,
              order: 6,
            },
            {
              fieldType: 'textarea',
              name: 'questions_or_comments',
              label: 'Questions or Comments',
              placeholder: 'Questions or Comments',
              required: false,
              rows: 6,
              order: 7,
            },
            {
              fieldType: 'checkbox',
              name: 'optin_for_sms_texting',
              label: 'Opt-In For SMS Texting',
              required: false,
              defaultValue: '',
              order: 8,
            },
            {
              fieldType: 'checkbox',
              name: 'by_completing_this_form_you_are_giving_us_permission_to_followup_by_phone_email_or_text',
              label:
                'By completing this form, you are giving us permission to follow-up by phone, email or text.',
              required: true,
              defaultValue: '',
              order: 9,
            },
          ],
          fields: [
            {
              name: 'fieldType',
              type: 'select',
              required: true,
              options: [
                { label: 'Text', value: 'text' },
                { label: 'Email', value: 'email' },
                { label: 'Phone', value: 'tel' },
                { label: 'Select', value: 'select' },
                { label: 'Textarea', value: 'textarea' },
                { label: 'Checkbox', value: 'checkbox' },
                { label: 'Hidden', value: 'hidden' },
              ],
            },
            {
              name: 'name',
              type: 'text',
              required: true,
            },
            {
              name: 'label',
              type: 'text',
              required: true,
            },
            {
              name: 'placeholder',
              type: 'text',
            },
            {
              name: 'required',
              type: 'checkbox',
              defaultValue: false,
            },
            {
              name: 'order',
              type: 'number',
              required: true,
            },
            {
              name: 'options',
              type: 'array',
              admin: {
                condition: (data, siblingData) => siblingData?.fieldType === 'select',
              },
              fields: [
                {
                  name: 'label',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'value',
                  type: 'text',
                  required: true,
                },
              ],
            },
            {
              name: 'rows',
              type: 'number',
              admin: {
                condition: (data, siblingData) => siblingData?.fieldType === 'textarea',
              },
            },
            {
              name: 'cols',
              type: 'number',
              admin: {
                condition: (data, siblingData) => siblingData?.fieldType === 'textarea',
              },
            },
            {
              name: 'defaultValue',
              type: 'text',
            },
          ],
        },
        // Training Program Options
        {
          name: 'trainingProgramOptions',
          type: 'array',
          defaultValue: [
            { label: 'Foundational', value: 'Foundational', order: 1 },
            { label: 'Comprehensive', value: 'Comprehensive', order: 2 },
          ],
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
            },
            {
              name: 'value',
              type: 'text',
              required: true,
            },
            {
              name: 'order',
              type: 'number',
              required: true,
            },
          ],
        },
        // Privacy Policy Configuration
        {
          name: 'privacySection',
          type: 'group',
          fields: [
            {
              name: 'privacyText',
              type: 'textarea',
              defaultValue:
                'Messaging frequency may vary. Message and data rates may apply. You can opt out any time by texting STOP. For assistance, text HELP or visit our website.',
            },
            {
              name: 'privacyLinks',
              type: 'array',
              defaultValue: [
                {
                  text: 'Goldfingers Aesthetics',
                  url: 'https://goldfingersaesthetics.com',
                  order: 1,
                },
                {
                  text: 'Privacy Policy',
                  url: 'https://goldfingersaesthetics.com/privacy-policy',
                  order: 2,
                },
                {
                  text: 'Terms and Conditions',
                  url: 'https://www.goldfingersaesthetics.com/terms-and-conditions/',
                  order: 3,
                },
              ],
              fields: [
                {
                  name: 'text',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'url',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'order',
                  type: 'number',
                  required: true,
                },
              ],
            },
          ],
        },
        // Submit Button Configuration
        {
          name: 'submitButton',
          type: 'group',
          fields: [
            {
              name: 'text',
              type: 'text',
              defaultValue: 'Submit',
            },
            {
              name: 'backgroundColor',
              type: 'text',
              defaultValue: '#007bff',
            },
            {
              name: 'textColor',
              type: 'text',
              defaultValue: '#ffffff',
            },
          ],
        },
        // Background Image using Cloudinary Upload
        {
          name: 'backgroundImage',
          type: 'upload',
          relationTo: 'media',
          required: false,
          admin: {
            description: 'Background image for the form section',
          },
        },
      ],
    },
  ],
}