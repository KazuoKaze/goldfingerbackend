// // import { CollectionConfig } from 'payload'

// // export const TrainingApplicationSimpleComponent: CollectionConfig = {
// //   slug: 'training-application-simple-component',
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
// //       defaultValue: 'Training Application Simple Component',
// //     },
// //     // Intro Module Section
// //     {
// //       name: 'introSection',
// //       type: 'group',
// //       label: 'Intro Section',
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
// //           defaultValue: 'mod_intro container viewport option-1 wow fadeInUp',
// //           admin: {
// //             description: 'CSS classes for the container',
// //           },
// //         },
// //         {
// //           name: 'logo',
// //           type: 'group',
// //           label: 'Logo Settings',
// //           fields: [
// //             {
// //               name: 'show',
// //               type: 'checkbox',
// //               label: 'Show Logo',
// //               defaultValue: true,
// //             },
// //             {
// //               name: 'image',
// //               type: 'upload',
// //               relationTo: 'media',
// //               label: 'Logo Image',
// //             },
// //             {
// //               name: 'width',
// //               type: 'number',
// //               label: 'Logo Width',
// //               defaultValue: 58,
// //             },
// //             {
// //               name: 'height',
// //               type: 'number',
// //               label: 'Logo Height',
// //               defaultValue: 64,
// //             },
// //             {
// //               name: 'alt',
// //               type: 'text',
// //               label: 'Logo Alt Text',
// //               defaultValue: 'Goldfingers aesthetic logo',
// //             },
// //             {
// //               name: 'loading',
// //               type: 'select',
// //               label: 'Loading Strategy',
// //               options: [
// //                 { label: 'Lazy', value: 'lazy' },
// //                 { label: 'Eager', value: 'eager' },
// //               ],
// //               defaultValue: 'lazy',
// //             },
// //           ],
// //         },
// //         {
// //           name: 'heading',
// //           type: 'text',
// //           label: 'Main Heading',
// //           defaultValue: 'Apply for Your Training Spot Today',
// //           required: true,
// //         },
// //         {
// //           name: 'headingColor',
// //           type: 'text',
// //           label: 'Heading Color',
// //         },
// //         {
// //           name: 'headingTag',
// //           type: 'select',
// //           label: 'Heading HTML Tag',
// //           options: [
// //             { label: 'H1', value: 'h1' },
// //             { label: 'H2', value: 'h2' },
// //             { label: 'H3', value: 'h3' },
// //           ],
// //           defaultValue: 'h1',
// //         },
// //         {
// //           name: 'centerHeading',
// //           type: 'checkbox',
// //           label: 'Center Align Heading',
// //           defaultValue: true,
// //         },
// //         {
// //           name: 'bulletPoints',
// //           type: 'array',
// //           label: 'Bullet Points / Content',
// //           admin: {
// //             description: 'Drag to reorder content items',
// //           },
// //           fields: [
// //             {
// //               name: 'content',
// //               type: 'richText',
// //               label: 'Content',
// //               required: true,
// //             },
// //             {
// //               name: 'textColor',
// //               type: 'text',
// //               label: 'Text Color',
// //             },
// //             {
// //               name: 'centerAlign',
// //               type: 'checkbox',
// //               label: 'Center Align',
// //               defaultValue: true,
// //             },
// //             {
// //               name: 'fontWeight',
// //               type: 'select',
// //               label: 'Font Weight',
// //               options: [
// //                 { label: 'Normal (400)', value: '400' },
// //                 { label: 'Medium (500)', value: '500' },
// //                 { label: 'Semi-Bold (600)', value: '600' },
// //                 { label: 'Bold (700)', value: '700' },
// //               ],
// //               defaultValue: '400',
// //             },
// //           ],
// //         },
// //         {
// //           name: 'animation',
// //           type: 'text',
// //           label: 'Animation Class',
// //           defaultValue: 'fadeInUp',
// //           admin: {
// //             description: 'WOW.js animation class',
// //           },
// //         },
// //       ],
// //     },
// //     // Contact Form Section
// //     {
// //       name: 'formSection',
// //       type: 'group',
// //       label: 'Contact Form Section',
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
// //           defaultValue: 'mod_contact_form',
// //           admin: {
// //             description: 'Add "dark" class for dark mode',
// //           },
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
// //           name: 'headingTag',
// //           type: 'select',
// //           label: 'Heading HTML Tag',
// //           options: [
// //             { label: 'H1', value: 'h1' },
// //             { label: 'H2', value: 'h2' },
// //             { label: 'H3', value: 'h3' },
// //           ],
// //           defaultValue: 'h2',
// //         },
// //         {
// //           name: 'backgroundImage',
// //           type: 'group',
// //           label: 'Background Image',
// //           fields: [
// //             {
// //               name: 'show',
// //               type: 'checkbox',
// //               label: 'Show Background Image',
// //               defaultValue: true,
// //             },
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
// //               label: 'Large Desktop Image (>1400px)',
// //             },
// //             {
// //               name: 'width',
// //               type: 'number',
// //               label: 'Image Width',
// //               defaultValue: 2200,
// //             },
// //             {
// //               name: 'height',
// //               type: 'number',
// //               label: 'Image Height',
// //               defaultValue: 1160,
// //             },
// //             {
// //               name: 'alt',
// //               type: 'text',
// //               label: 'Alt Text',
// //               defaultValue: 'Image of a bridge with an overlay',
// //             },
// //             {
// //               name: 'loading',
// //               type: 'select',
// //               label: 'Loading Strategy',
// //               options: [
// //                 { label: 'Lazy', value: 'lazy' },
// //                 { label: 'Eager', value: 'eager' },
// //               ],
// //               defaultValue: 'lazy',
// //             },
// //           ],
// //         },
// //         {
// //           name: 'formSettings',
// //           type: 'group',
// //           label: 'Form Settings',
// //           fields: [
// //             {
// //               name: 'formId',
// //               type: 'text',
// //               label: 'Form ID',
// //               defaultValue: 'form_training',
// //               required: true,
// //             },
// //             {
// //               name: 'formClass',
// //               type: 'text',
// //               label: 'Form Class',
// //               defaultValue: 's3-form',
// //             },
// //             {
// //               name: 'method',
// //               type: 'select',
// //               label: 'Form Method',
// //               options: [
// //                 { label: 'POST', value: 'post' },
// //                 { label: 'GET', value: 'get' },
// //               ],
// //               defaultValue: 'post',
// //             },
// //             {
// //               name: 'action',
// //               type: 'text',
// //               label: 'Form Action URL',
// //               defaultValue: '/validate/',
// //               required: true,
// //             },
// //             {
// //               name: 'encType',
// //               type: 'text',
// //               label: 'Encoding Type',
// //               defaultValue: 'multipart/form-data',
// //             },
// //             {
// //               name: 'subject',
// //               type: 'text',
// //               label: 'Email Subject',
// //               defaultValue: 'Training Sign Up Form',
// //               required: true,
// //             },
// //             {
// //               name: 'redirectUrl',
// //               type: 'text',
// //               label: 'Success Redirect URL',
// //               defaultValue: '/contact/thank-you/',
// //               required: true,
// //             },
// //           ],
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
// //                 { label: 'Phone/Tel', value: 'tel' },
// //                 { label: 'Textarea', value: 'textarea' },
// //                 { label: 'Select/Dropdown', value: 'select' },
// //                 { label: 'Checkbox', value: 'checkbox' },
// //                 { label: 'Hidden', value: 'hidden' },
// //               ],
// //             },
// //             {
// //               name: 'columnClass',
// //               type: 'select',
// //               label: 'Column Width',
// //               options: [
// //                 { label: 'Full Width (col1)', value: 'col1' },
// //                 { label: 'Half Width (col2)', value: 'col2' },
// //                 { label: 'Third Width (col3)', value: 'col3' },
// //               ],
// //               defaultValue: 'col1',
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
// //               admin: {
// //                 description: 'Must be unique. Use format: formid_fieldname',
// //               },
// //             },
// //             {
// //               name: 'label',
// //               type: 'text',
// //               label: 'Field Label',
// //             },
// //             {
// //               name: 'placeholder',
// //               type: 'text',
// //               label: 'Placeholder Text',
// //             },
// //             {
// //               name: 'defaultValue',
// //               type: 'text',
// //               label: 'Default Value',
// //             },
// //             {
// //               name: 'required',
// //               type: 'checkbox',
// //               label: 'Required Field',
// //               defaultValue: false,
// //             },
// //             {
// //               name: 'requiredMessage',
// //               type: 'text',
// //               label: 'Required Message',
// //               defaultValue: 'This field is required.',
// //               admin: {
// //                 description: 'Message shown when field is required',
// //               },
// //             },
// //             {
// //               name: 'size',
// //               type: 'number',
// //               label: 'Input Size',
// //               admin: {
// //                 description: 'Size attribute for input fields',
// //               },
// //             },
// //             {
// //               name: 'rows',
// //               type: 'number',
// //               label: 'Textarea Rows',
// //               admin: {
// //                 description: 'Only for textarea fields',
// //               },
// //               defaultValue: 6,
// //             },
// //             {
// //               name: 'cols',
// //               type: 'number',
// //               label: 'Textarea Columns',
// //               admin: {
// //                 description: 'Only for textarea fields',
// //               },
// //               defaultValue: 48,
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
// //                 description: 'Value submitted when checkbox is checked',
// //               },
// //               defaultValue: 'Yes',
// //             },
// //             {
// //               name: 'checkboxLabel',
// //               type: 'richText',
// //               label: 'Checkbox Label Text',
// //               admin: {
// //                 description: 'Label text for checkbox (can include links)',
// //               },
// //             },
// //             {
// //               name: 'additionalClasses',
// //               type: 'text',
// //               label: 'Additional CSS Classes',
// //               admin: {
// //                 description: 'Space-separated classes (e.g., "opt-in follow-up")',
// //               },
// //             },
// //             {
// //               name: 'hiddenRow',
// //               type: 'checkbox',
// //               label: 'Hidden Row',
// //               defaultValue: false,
// //               admin: {
// //                 description: 'Add hidden-row class to field-row',
// //               },
// //             },
// //           ],
// //         },
// //         {
// //           name: 'disclaimerSection',
// //           type: 'group',
// //           label: 'Disclaimer/Legal Section',
// //           fields: [
// //             {
// //               name: 'show',
// //               type: 'checkbox',
// //               label: 'Show Disclaimer',
// //               defaultValue: true,
// //             },
// //             {
// //               name: 'content',
// //               type: 'richText',
// //               label: 'Disclaimer Content',
// //               admin: {
// //                 description: 'Legal text, links, and messaging information',
// //               },
// //             },
// //             {
// //               name: 'textColor',
// //               type: 'text',
// //               label: 'Text Color',
// //             },
// //             {
// //               name: 'className',
// //               type: 'text',
// //               label: 'Container Class',
// //               defaultValue: 'section-label follow-up',
// //             },
// //           ],
// //         },
// //         {
// //           name: 'recaptchaSettings',
// //           type: 'group',
// //           label: 'reCAPTCHA Settings',
// //           fields: [
// //             {
// //               name: 'enableV3',
// //               type: 'checkbox',
// //               label: 'Enable reCAPTCHA v3',
// //               defaultValue: true,
// //             },
// //             {
// //               name: 'v3FieldId',
// //               type: 'text',
// //               label: 'reCAPTCHA v3 Field ID',
// //               defaultValue: 'training_recaptchaV3',
// //             },
// //             {
// //               name: 'enableV2',
// //               type: 'checkbox',
// //               label: 'Enable reCAPTCHA v2',
// //               defaultValue: true,
// //             },
// //             {
// //               name: 'v2ContainerId',
// //               type: 'text',
// //               label: 'reCAPTCHA v2 Container ID',
// //               defaultValue: 'training_recaptchaV2',
// //             },
// //             {
// //               name: 'errorContainerId',
// //               type: 'text',
// //               label: 'reCAPTCHA Error Container ID',
// //               defaultValue: 'training_recaptcha',
// //             },
// //             {
// //               name: 'errorMessage',
// //               type: 'text',
// //               label: 'Error Message',
// //               defaultValue: 'This field is required.',
// //             },
// //           ],
// //         },
// //         {
// //           name: 'submitButton',
// //           type: 'group',
// //           label: 'Submit Button',
// //           fields: [
// //             {
// //               name: 'validateButton',
// //               type: 'group',
// //               label: 'Validate Button (Display)',
// //               fields: [
// //                 {
// //                   name: 'text',
// //                   type: 'text',
// //                   label: 'Button Text',
// //                   defaultValue: 'Submit',
// //                 },
// //                 {
// //                   name: 'id',
// //                   type: 'text',
// //                   label: 'Button ID',
// //                   defaultValue: 'validate_training',
// //                 },
// //                 {
// //                   name: 'className',
// //                   type: 'text',
// //                   label: 'Button Classes',
// //                   defaultValue: 'btn validate disabled',
// //                 },
// //               ],
// //             },
// //             {
// //               name: 'submitButton',
// //               type: 'group',
// //               label: 'Submit Button (Actual)',
// //               fields: [
// //                 {
// //                   name: 'text',
// //                   type: 'text',
// //                   label: 'Button Text',
// //                   defaultValue: 'Submit',
// //                 },
// //                 {
// //                   name: 'id',
// //                   type: 'text',
// //                   label: 'Button ID',
// //                   defaultValue: 'submit_training',
// //                 },
// //                 {
// //                   name: 'name',
// //                   type: 'text',
// //                   label: 'Button Name',
// //                   defaultValue: 'submit',
// //                 },
// //                 {
// //                   name: 'value',
// //                   type: 'text',
// //                   label: 'Button Value',
// //                   defaultValue: 'submitted',
// //                 },
// //                 {
// //                   name: 'className',
// //                   type: 'text',
// //                   label: 'Button Classes',
// //                   defaultValue: 'submit btn',
// //                 },
// //               ],
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
// //               name: 'disabledBackgroundColor',
// //               type: 'text',
// //               label: 'Disabled Background Color',
// //             },
// //             {
// //               name: 'disabledTextColor',
// //               type: 'text',
// //               label: 'Disabled Text Color',
// //             },
// //           ],
// //         },
// //         {
// //           name: 'hiddenFields',
// //           type: 'array',
// //           label: 'Additional Hidden Fields',
// //           admin: {
// //             description: 'System fields like form_id, human_check, etc.',
// //           },
// //           fields: [
// //             {
// //               name: 'fieldName',
// //               type: 'text',
// //               label: 'Field Name',
// //               required: true,
// //             },
// //             {
// //               name: 'fieldId',
// //               type: 'text',
// //               label: 'Field ID',
// //             },
// //             {
// //               name: 'value',
// //               type: 'text',
// //               label: 'Field Value',
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
// //             { label: 'Intro Section', value: 'intro' },
// //             { label: 'Contact Form Section', value: 'form' },
// //           ],
// //         },
// //       ],
// //       defaultValue: [{ section: 'intro' }, { section: 'form' }],
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
// //           name: 'smallFontSize',
// //           type: 'text',
// //           label: 'Small Text Font Size',
// //           admin: {
// //             description: 'For error messages, help text, etc.',
// //           },
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
// //         {
// //           name: 'textareaMinHeight',
// //           type: 'text',
// //           label: 'Textarea Min Height',
// //         },
// //         {
// //           name: 'selectArrowColor',
// //           type: 'text',
// //           label: 'Select Dropdown Arrow Color',
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
// //           label: 'Enable WOW.js Animations',
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
// //           name: 'mobilePaddingAdjustment',
// //           type: 'text',
// //           label: 'Mobile Padding Adjustment',
// //           admin: {
// //             description: 'Adjust padding for mobile devices',
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
// //           name: 'enableLazyLoading',
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
// //           name: 'usePicture',
// //           type: 'checkbox',
// //           label: 'Use Picture Element for Responsive Images',
// //           defaultValue: true,
// //           admin: {
// //             description: 'Uses <picture> with <source> tags for better responsive image control',
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
// //         {
// //           name: 'draggableImages',
// //           type: 'checkbox',
// //           label: 'Allow Draggable Images',
// //           defaultValue: false,
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
// //           name: 'introSectionSpacing',
// //           type: 'text',
// //           label: 'Intro Section Spacing',
// //           admin: {
// //             description: 'Padding/margin for intro section (e.g., 60px 0)',
// //           },
// //         },
// //         {
// //           name: 'formSectionSpacing',
// //           type: 'text',
// //           label: 'Form Section Spacing',
// //         },
// //         {
// //           name: 'elementSpacing',
// //           type: 'text',
// //           label: 'Element Spacing',
// //           admin: {
// //             description: 'Spacing between elements within sections (e.g., 20px)',
// //           },
// //         },
// //         {
// //           name: 'logoSpacing',
// //           type: 'text',
// //           label: 'Logo Spacing',
// //           admin: {
// //             description: 'Margin around logo',
// //           },
// //         },
// //         {
// //           name: 'headingSpacing',
// //           type: 'text',
// //           label: 'Heading Spacing',
// //           admin: {
// //             description: 'Margin below headings',
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
// //         {
// //           name: 'sectionShadow',
// //           type: 'text',
// //           label: 'Section Shadow',
// //           admin: {
// //             description: 'CSS box-shadow value for sections',
// //           },
// //         },
// //         {
// //           name: 'formWrapperShadow',
// //           type: 'text',
// //           label: 'Form Wrapper Shadow',
// //         },
// //         {
// //           name: 'formWrapperBorder',
// //           type: 'text',
// //           label: 'Form Wrapper Border',
// //         },
// //         {
// //           name: 'formWrapperBorderRadius',
// //           type: 'text',
// //           label: 'Form Wrapper Border Radius',
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
// //           name: 'introContentAlign',
// //           type: 'select',
// //           label: 'Intro Content Alignment',
// //           options: [
// //             { label: 'Left', value: 'left' },
// //             { label: 'Center', value: 'center' },
// //             { label: 'Right', value: 'right' },
// //           ],
// //           defaultValue: 'center',
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
// //           name: 'logoAlign',
// //           type: 'select',
// //           label: 'Logo Alignment',
// //           options: [
// //             { label: 'Left', value: 'left' },
// //             { label: 'Center', value: 'center' },
// //             { label: 'Right', value: 'right' },
// //           ],
// //           defaultValue: 'center',
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
// //             { label: 'Center Center', value: 'center center' },
// //             { label: 'Top Center', value: 'top center' },
// //             { label: 'Bottom Center', value: 'bottom center' },
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
// //           name: 'backgroundImageAttachment',
// //           type: 'select',
// //           label: 'Background Image Attachment',
// //           options: [
// //             { label: 'Scroll', value: 'scroll' },
// //             { label: 'Fixed', value: 'fixed' },
// //             { label: 'Local', value: 'local' },
// //           ],
// //           defaultValue: 'scroll',
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
// //           name: 'useCenterTag',
// //           type: 'checkbox',
// //           label: 'Use Center Tag',
// //           defaultValue: true,
// //           admin: {
// //             description: 'Use <center> tag or CSS text-align for centering',
// //           },
// //         },
// //         {
// //           name: 'centerTagReplacement',
// //           type: 'select',
// //           label: 'Center Tag Replacement',
// //           options: [
// //             { label: 'Div with text-align', value: 'div' },
// //             { label: 'Div with flexbox', value: 'flex' },
// //             { label: 'Keep <center> tag', value: 'center' },
// //           ],
// //           defaultValue: 'center',
// //           admin: {
// //             description: 'Choose modern alternative if not using <center>',
// //           },
// //         },
// //       ],
// //     },
// //     // Viewport Settings
// //     {
// //       name: 'viewportSettings',
// //       type: 'group',
// //       label: 'Viewport Settings',
// //       fields: [
// //         {
// //           name: 'enableViewportClass',
// //           type: 'checkbox',
// //           label: 'Enable Viewport Class',
// //           defaultValue: true,
// //           admin: {
// //             description: 'Add viewport class for responsive behavior',
// //           },
// //         },
// //         {
// //           name: 'viewportThreshold',
// //           type: 'text',
// //           label: 'Viewport Threshold',
// //           admin: {
// //             description: 'Percentage of element visible before triggering (e.g., 0.5)',
// //           },
// //         },
// //       ],
// //     },
// //     // Checkbox & Radio Styles
// //     {
// //       name: 'checkboxRadioStyles',
// //       type: 'group',
// //       label: 'Checkbox & Radio Styles',
// //       fields: [
// //         {
// //           name: 'checkboxSize',
// //           type: 'text',
// //           label: 'Checkbox Size',
// //           admin: {
// //             description: 'Width and height of checkbox (e.g., 20px)',
// //           },
// //         },
// //         {
// //           name: 'checkboxBorderColor',
// //           type: 'text',
// //           label: 'Checkbox Border Color',
// //         },
// //         {
// //           name: 'checkboxBackgroundColor',
// //           type: 'text',
// //           label: 'Checkbox Background Color',
// //         },
// //         {
// //           name: 'checkboxCheckedColor',
// //           type: 'text',
// //           label: 'Checkbox Checked Color',
// //         },
// //         {
// //           name: 'checkboxBorderRadius',
// //           type: 'text',
// //           label: 'Checkbox Border Radius',
// //           admin: {
// //             description: 'e.g., 3px for rounded corners',
// //           },
// //         },
// //         {
// //           name: 'checkboxLabelSpacing',
// //           type: 'text',
// //           label: 'Checkbox Label Spacing',
// //           admin: {
// //             description: 'Space between checkbox and label',
// //           },
// //         },
// //       ],
// //     },
// //     // Error & Validation Styles
// //     {
// //       name: 'validationStyles',
// //       type: 'group',
// //       label: 'Error & Validation Styles',
// //       fields: [
// //         {
// //           name: 'errorBorderColor',
// //           type: 'text',
// //           label: 'Error Border Color',
// //           admin: {
// //             description: 'Border color for fields with errors',
// //           },
// //         },
// //         {
// //           name: 'errorBackgroundColor',
// //           type: 'text',
// //           label: 'Error Background Color',
// //         },
// //         {
// //           name: 'errorTextColor',
// //           type: 'text',
// //           label: 'Error Text Color',
// //         },
// //         {
// //           name: 'successBorderColor',
// //           type: 'text',
// //           label: 'Success Border Color',
// //         },
// //         {
// //           name: 'successTextColor',
// //           type: 'text',
// //           label: 'Success Text Color',
// //         },
// //         {
// //           name: 'validationMessageFontSize',
// //           type: 'text',
// //           label: 'Validation Message Font Size',
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
// //           name: 'enableInputHover',
// //           type: 'checkbox',
// //           label: 'Enable Input Hover Effects',
// //           defaultValue: true,
// //         },
// //         {
// //           name: 'inputHoverBorderColor',
// //           type: 'text',
// //           label: 'Input Hover Border Color',
// //         },
// //         {
// //           name: 'inputHoverShadow',
// //           type: 'text',
// //           label: 'Input Hover Shadow',
// //         },
// //         {
// //           name: 'linkHoverTransform',
// //           type: 'text',
// //           label: 'Link Hover Transform',
// //           admin: {
// //             description: 'CSS transform on hover (e.g., scale(1.05))',
// //           },
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
// //                 { label: 'Intro Section', value: 'intro' },
// //                 { label: 'Form Section', value: 'form' },
// //                 { label: 'Form Wrapper', value: 'formWrapper' },
// //                 { label: 'Form Fields Container', value: 'formFields' },
// //                 { label: 'Submit Button Container', value: 'submitHolder' },
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
// //     // Form Wrapper Styles
// //     {
// //       name: 'formWrapperStyles',
// //       type: 'group',
// //       label: 'Form Wrapper Styles',
// //       fields: [
// //         {
// //           name: 'wrapperBackgroundColor',
// //           type: 'text',
// //           label: 'Wrapper Background Color',
// //         },
// //         {
// //           name: 'wrapperPadding',
// //           type: 'text',
// //           label: 'Wrapper Padding',
// //           admin: {
// //             description: 'e.g., 40px 20px',
// //           },
// //         },
// //         {
// //           name: 'wrapperMaxWidth',
// //           type: 'text',
// //           label: 'Wrapper Max Width',
// //           admin: {
// //             description: 'e.g., 800px, 100%',
// //           },
// //         },
// //         {
// //           name: 'wrapperMargin',
// //           type: 'text',
// //           label: 'Wrapper Margin',
// //           admin: {
// //             description: 'e.g., 0 auto',
// //           },
// //         },
// //       ],
// //     },
// //     // Picture Element Settings
// //     {
// //       name: 'pictureSettings',
// //       type: 'group',
// //       label: 'Picture Element Settings',
// //       fields: [
// //         {
// //           name: 'enableLazyLoadPlaceholder',
// //           type: 'checkbox',
// //           label: 'Enable Lazy Load Placeholder',
// //           defaultValue: true,
// //           admin: {
// //             description: 'Use data-lazyload attributes with placeholder',
// //           },
// //         },
// //         {
// //           name: 'placeholderImage',
// //           type: 'text',
// //           label: 'Placeholder Image Data URI',
// //           defaultValue:
// //             'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=',
// //           admin: {
// //             description: 'Base64 encoded 1x1 transparent placeholder',
// //           },
// //         },
// //         {
// //           name: 'retinaSupport',
// //           type: 'checkbox',
// //           label: 'Enable Retina Support (2x images)',
// //           defaultValue: true,
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

// export const TrainingApplicationSimpleComponent: CollectionConfig = {
//   slug: 'training-application-simple-component',
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
//       defaultValue: 'Training Application Simple Component',
//     },
//     // Intro Module Section
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
//           defaultValue: 'mod_intro container viewport option-1 wow fadeInUp',
//           admin: {
//             description: 'CSS classes for the container',
//           },
//         },
//         {
//           name: 'logo',
//           type: 'group',
//           label: 'Logo Settings',
//           fields: [
//             {
//               name: 'show',
//               type: 'checkbox',
//               label: 'Show Logo',
//               defaultValue: true,
//             },
//             {
//               name: 'image',
//               type: 'upload',
//               relationTo: 'media',
//               label: 'Logo Image',
//             },
//             {
//               name: 'width',
//               type: 'number',
//               label: 'Logo Width',
//               defaultValue: 58,
//             },
//             {
//               name: 'height',
//               type: 'number',
//               label: 'Logo Height',
//               defaultValue: 64,
//             },
//             {
//               name: 'alt',
//               type: 'text',
//               label: 'Logo Alt Text',
//               defaultValue: 'Goldfingers aesthetic logo',
//             },
//             {
//               name: 'loading',
//               type: 'select',
//               label: 'Loading Strategy',
//               options: [
//                 { label: 'Lazy', value: 'lazy' },
//                 { label: 'Eager', value: 'eager' },
//               ],
//               defaultValue: 'lazy',
//             },
//           ],
//         },
//         {
//           name: 'heading',
//           type: 'text',
//           label: 'Main Heading',
//           defaultValue: 'Apply for Your Training Spot Today',
//           required: true,
//         },
//         {
//           name: 'headingColor',
//           type: 'text',
//           label: 'Heading Color',
//         },
//         {
//           name: 'headingTag',
//           type: 'select',
//           label: 'Heading HTML Tag',
//           options: [
//             { label: 'H1', value: 'h1' },
//             { label: 'H2', value: 'h2' },
//             { label: 'H3', value: 'h3' },
//           ],
//           defaultValue: 'h1',
//         },
//         {
//           name: 'centerHeading',
//           type: 'checkbox',
//           label: 'Center Align Heading',
//           defaultValue: true,
//         },
//         {
//           name: 'bulletPoints',
//           type: 'array',
//           label: 'Bullet Points / Content',
//           admin: {
//             description: 'Drag to reorder content items',
//           },
//           fields: [
//             {
//               name: 'content',
//               type: 'richText',
//               label: 'Content',
//               required: true,
//             },
//             {
//               name: 'textColor',
//               type: 'text',
//               label: 'Text Color',
//             },
//             {
//               name: 'centerAlign',
//               type: 'checkbox',
//               label: 'Center Align',
//               defaultValue: true,
//             },
//             {
//               name: 'fontWeight',
//               type: 'select',
//               label: 'Font Weight',
//               options: [
//                 { label: 'Normal (400)', value: '400' },
//                 { label: 'Medium (500)', value: '500' },
//                 { label: 'Semi-Bold (600)', value: '600' },
//                 { label: 'Bold (700)', value: '700' },
//               ],
//               defaultValue: '400',
//             },
//           ],
//         },
//         {
//           name: 'animation',
//           type: 'text',
//           label: 'Animation Class',
//           defaultValue: 'fadeInUp',
//           admin: {
//             description: 'WOW.js animation class',
//           },
//         },
//       ],
//     },
//     // Contact Form Section
//     {
//       name: 'formSection',
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
//           defaultValue: 'mod_contact_form',
//           admin: {
//             description: 'Add "dark" class for dark mode',
//           },
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
//           name: 'headingTag',
//           type: 'select',
//           label: 'Heading HTML Tag',
//           options: [
//             { label: 'H1', value: 'h1' },
//             { label: 'H2', value: 'h2' },
//             { label: 'H3', value: 'h3' },
//           ],
//           defaultValue: 'h2',
//         },
//         {
//           name: 'backgroundImage',
//           type: 'group',
//           label: 'Background Image',
//           fields: [
//             {
//               name: 'show',
//               type: 'checkbox',
//               label: 'Show Background Image',
//               defaultValue: true,
//             },
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
//               label: 'Large Desktop Image (>1400px)',
//             },
//             {
//               name: 'width',
//               type: 'number',
//               label: 'Image Width',
//               defaultValue: 2200,
//             },
//             {
//               name: 'height',
//               type: 'number',
//               label: 'Image Height',
//               defaultValue: 1160,
//             },
//             {
//               name: 'alt',
//               type: 'text',
//               label: 'Alt Text',
//               defaultValue: 'Image of a bridge with an overlay',
//             },
//             {
//               name: 'loading',
//               type: 'select',
//               label: 'Loading Strategy',
//               options: [
//                 { label: 'Lazy', value: 'lazy' },
//                 { label: 'Eager', value: 'eager' },
//               ],
//               defaultValue: 'lazy',
//             },
//           ],
//         },
//         {
//           name: 'formSettings',
//           type: 'group',
//           label: 'Form Settings',
//           fields: [
//             {
//               name: 'formId',
//               type: 'text',
//               label: 'Form ID',
//               defaultValue: 'form_training',
//               required: true,
//             },
//             {
//               name: 'formClass',
//               type: 'text',
//               label: 'Form Class',
//               defaultValue: 's3-form',
//             },
//             {
//               name: 'method',
//               type: 'select',
//               label: 'Form Method',
//               options: [
//                 { label: 'POST', value: 'post' },
//                 { label: 'GET', value: 'get' },
//               ],
//               defaultValue: 'post',
//             },
//             {
//               name: 'action',
//               type: 'text',
//               label: 'Form Action URL',
//               defaultValue: '/validate/',
//               required: true,
//             },
//             {
//               name: 'encType',
//               type: 'text',
//               label: 'Encoding Type',
//               defaultValue: 'multipart/form-data',
//             },
//             {
//               name: 'subject',
//               type: 'text',
//               label: 'Email Subject',
//               defaultValue: 'Training Sign Up Form',
//               required: true,
//             },
//             {
//               name: 'redirectUrl',
//               type: 'text',
//               label: 'Success Redirect URL',
//               defaultValue: '/contact/thank-you/',
//               required: true,
//             },
//           ],
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
//               columnClass: 'col1',
//               fieldName: 'first_name',
//               fieldId: 'training_first_name',
//               label: 'First Name*',
//               placeholder: 'First Name*',
//               required: true,
//               requiredMessage: 'This field is required.',
//               size: 50,
//             },
//             {
//               fieldType: 'text',
//               columnClass: 'col1',
//               fieldName: 'last_name',
//               fieldId: 'training_last_name',
//               label: 'Last Name*',
//               placeholder: 'Last Name*',
//               required: true,
//               requiredMessage: 'This field is required.',
//               size: 50,
//             },
//             {
//               fieldType: 'tel',
//               columnClass: 'col1',
//               fieldName: 'phone',
//               fieldId: 'training_phone',
//               label: 'Phone*',
//               placeholder: 'Phone*',
//               required: true,
//               requiredMessage: 'This field is required.',
//               size: 50,
//             },
//             {
//               fieldType: 'email',
//               columnClass: 'col1',
//               fieldName: 'email',
//               fieldId: 'training_email',
//               label: 'Email*',
//               placeholder: 'Email*',
//               required: true,
//               requiredMessage: 'This field is required.',
//               size: 50,
//             },
//             {
//               fieldType: 'text',
//               columnClass: 'col1',
//               fieldName: 'preferred_training_month',
//               fieldId: 'training_preferred_training_month',
//               label: 'Preferred Training Month',
//               placeholder: 'Preferred Training Month',
//               required: false,
//               size: 50,
//             },
//             {
//               fieldType: 'select',
//               columnClass: 'col1',
//               fieldName: 'preferred_training_program',
//               fieldId: 'training_preferred_training_program',
//               label: 'Preferred Training Program*',
//               required: true,
//               requiredMessage: 'This field is required.',
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
//               columnClass: 'col1',
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
//               columnClass: 'col1',
//               fieldName: 'optin_for_sms_texting',
//               fieldId: 'training_optin_for_sms_texting',
//               checkboxValue: 'Yes',
//               checkboxLabel: [
//                 {
//                   type: 'paragraph',
//                   children: [{ text: 'Opt-In For SMS Texting' }],
//                 },
//               ],
//               additionalClasses: 'opt-in follow-up',
//               required: false,
//             },
//             {
//               fieldType: 'checkbox',
//               columnClass: 'col1',
//               fieldName:
//                 'by_completing_this_form_you_are_giving_us_permission_to_followup_by_phone_email_or_text',
//               fieldId:
//                 'training_by_completing_this_form_you_are_giving_us_permission_to_followup_by_phone_email_or_text',
//               checkboxValue: 'Yes',
//               checkboxLabel: [
//                 {
//                   type: 'paragraph',
//                   children: [
//                     {
//                       text: 'By completing this form, you are giving us permission to follow-up by phone, email or text.',
//                     },
//                   ],
//                 },
//               ],
//               additionalClasses: 'follow-up',
//               required: true,
//               requiredMessage: 'This field is required.',
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
//                 { label: 'Phone/Tel', value: 'tel' },
//                 { label: 'Textarea', value: 'textarea' },
//                 { label: 'Select/Dropdown', value: 'select' },
//                 { label: 'Checkbox', value: 'checkbox' },
//                 { label: 'Hidden', value: 'hidden' },
//               ],
//             },
//             {
//               name: 'columnClass',
//               type: 'select',
//               label: 'Column Width',
//               options: [
//                 { label: 'Full Width (col1)', value: 'col1' },
//                 { label: 'Half Width (col2)', value: 'col2' },
//                 { label: 'Third Width (col3)', value: 'col3' },
//               ],
//               defaultValue: 'col1',
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
//               admin: {
//                 description: 'Must be unique. Use format: formid_fieldname',
//               },
//             },
//             {
//               name: 'label',
//               type: 'text',
//               label: 'Field Label',
//             },
//             {
//               name: 'placeholder',
//               type: 'text',
//               label: 'Placeholder Text',
//             },
//             {
//               name: 'defaultValue',
//               type: 'text',
//               label: 'Default Value',
//             },
//             {
//               name: 'required',
//               type: 'checkbox',
//               label: 'Required Field',
//               defaultValue: false,
//             },
//             {
//               name: 'requiredMessage',
//               type: 'text',
//               label: 'Required Message',
//               defaultValue: 'This field is required.',
//               admin: {
//                 description: 'Message shown when field is required',
//               },
//             },
//             {
//               name: 'size',
//               type: 'number',
//               label: 'Input Size',
//               admin: {
//                 description: 'Size attribute for input fields',
//               },
//             },
//             {
//               name: 'rows',
//               type: 'number',
//               label: 'Textarea Rows',
//               admin: {
//                 description: 'Only for textarea fields',
//               },
//               defaultValue: 6,
//             },
//             {
//               name: 'cols',
//               type: 'number',
//               label: 'Textarea Columns',
//               admin: {
//                 description: 'Only for textarea fields',
//               },
//               defaultValue: 48,
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
//                 description: 'Value submitted when checkbox is checked',
//               },
//               defaultValue: 'Yes',
//             },
//             {
//               name: 'checkboxLabel',
//               type: 'richText',
//               label: 'Checkbox Label Text',
//               admin: {
//                 description: 'Label text for checkbox (can include links)',
//               },
//             },
//             {
//               name: 'additionalClasses',
//               type: 'text',
//               label: 'Additional CSS Classes',
//               admin: {
//                 description: 'Space-separated classes (e.g., "opt-in follow-up")',
//               },
//             },
//             {
//               name: 'hiddenRow',
//               type: 'checkbox',
//               label: 'Hidden Row',
//               defaultValue: false,
//               admin: {
//                 description: 'Add hidden-row class to field-row',
//               },
//             },
//           ],
//         },
//         {
//           name: 'disclaimerSection',
//           type: 'group',
//           label: 'Disclaimer/Legal Section',
//           fields: [
//             {
//               name: 'show',
//               type: 'checkbox',
//               label: 'Show Disclaimer',
//               defaultValue: true,
//             },
//             {
//               name: 'content',
//               type: 'richText',
//               label: 'Disclaimer Content',
//               admin: {
//                 description: 'Legal text, links, and messaging information',
//               },
//             //   defaultValue: [
//             //     {
//             //       type: 'paragraph',
//             //       children: [
//             //         {
//             //           text: 'Messaging frequency may vary. Message and data rates may apply. You can opt out any time by texting STOP. For assistance, text HELP or visit our website at ',
//             //         },
//             //         {
//             //           type: 'link',
//             //           url: 'https://goldfingersaesthetics.com',
//             //           children: [{ text: 'Goldfingers Aesthetics' }],
//             //         },
//             //         {
//             //           text: '. Visit ',
//             //         },
//             //         {
//             //           type: 'link',
//             //           url: 'https://goldfingersaesthetics.com/privacy-policy',
//             //           children: [{ text: 'Privacy Policy' }],
//             //         },
//             //         {
//             //           text: ' and ',
//             //         },
//             //         {
//             //           type: 'link',
//             //           url: 'https://www.goldfingersaesthetics.com/terms-and-conditions/',
//             //           children: [{ text: 'Terms and Conditions' }],
//             //         },
//             //         {
//             //           text: '.',
//             //         },
//             //       ],
//             //     },
//             //   ],
//             },
//             {
//               name: 'textColor',
//               type: 'text',
//               label: 'Text Color',
//             },
//             {
//               name: 'className',
//               type: 'text',
//               label: 'Container Class',
//               defaultValue: 'section-label follow-up',
//             },
//           ],
//         },
//         {
//           name: 'recaptchaSettings',
//           type: 'group',
//           label: 'reCAPTCHA Settings',
//           fields: [
//             {
//               name: 'enableV3',
//               type: 'checkbox',
//               label: 'Enable reCAPTCHA v3',
//               defaultValue: true,
//             },
//             {
//               name: 'v3FieldId',
//               type: 'text',
//               label: 'reCAPTCHA v3 Field ID',
//               defaultValue: 'training_recaptchaV3',
//             },
//             {
//               name: 'enableV2',
//               type: 'checkbox',
//               label: 'Enable reCAPTCHA v2',
//               defaultValue: true,
//             },
//             {
//               name: 'v2ContainerId',
//               type: 'text',
//               label: 'reCAPTCHA v2 Container ID',
//               defaultValue: 'training_recaptchaV2',
//             },
//             {
//               name: 'errorContainerId',
//               type: 'text',
//               label: 'reCAPTCHA Error Container ID',
//               defaultValue: 'training_recaptcha',
//             },
//             {
//               name: 'errorMessage',
//               type: 'text',
//               label: 'Error Message',
//               defaultValue: 'This field is required.',
//             },
//           ],
//         },
//         {
//           name: 'submitButton',
//           type: 'group',
//           label: 'Submit Button',
//           fields: [
//             {
//               name: 'validateButton',
//               type: 'group',
//               label: 'Validate Button (Display)',
//               fields: [
//                 {
//                   name: 'text',
//                   type: 'text',
//                   label: 'Button Text',
//                   defaultValue: 'Submit',
//                 },
//                 {
//                   name: 'id',
//                   type: 'text',
//                   label: 'Button ID',
//                   defaultValue: 'validate_training',
//                 },
//                 {
//                   name: 'className',
//                   type: 'text',
//                   label: 'Button Classes',
//                   defaultValue: 'btn validate disabled',
//                 },
//               ],
//             },
//             {
//               name: 'submitButton',
//               type: 'group',
//               label: 'Submit Button (Actual)',
//               fields: [
//                 {
//                   name: 'text',
//                   type: 'text',
//                   label: 'Button Text',
//                   defaultValue: 'Submit',
//                 },
//                 {
//                   name: 'id',
//                   type: 'text',
//                   label: 'Button ID',
//                   defaultValue: 'submit_training',
//                 },
//                 {
//                   name: 'name',
//                   type: 'text',
//                   label: 'Button Name',
//                   defaultValue: 'submit',
//                 },
//                 {
//                   name: 'value',
//                   type: 'text',
//                   label: 'Button Value',
//                   defaultValue: 'submitted',
//                 },
//                 {
//                   name: 'className',
//                   type: 'text',
//                   label: 'Button Classes',
//                   defaultValue: 'submit btn',
//                 },
//               ],
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
//               name: 'disabledBackgroundColor',
//               type: 'text',
//               label: 'Disabled Background Color',
//             },
//             {
//               name: 'disabledTextColor',
//               type: 'text',
//               label: 'Disabled Text Color',
//             },
//           ],
//         },
//         {
//           name: 'hiddenFields',
//           type: 'array',
//           label: 'Additional Hidden Fields',
//           admin: {
//             description: 'System fields like form_id, human_check, etc.',
//           },
//           defaultValue: [
//             {
//               fieldName: 'form_id',
//               fieldId: 'form_id',
//               value: 'training',
//             },
//             {
//               fieldName: 'human_check',
//               fieldId: 'human_check',
//               value: '',
//             },
//           ],
//           fields: [
//             {
//               name: 'fieldName',
//               type: 'text',
//               label: 'Field Name',
//               required: true,
//             },
//             {
//               name: 'fieldId',
//               type: 'text',
//               label: 'Field ID',
//             },
//             {
//               name: 'value',
//               type: 'text',
//               label: 'Field Value',
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
//             { label: 'Intro Section', value: 'intro' },
//             { label: 'Contact Form Section', value: 'form' },
//           ],
//         },
//       ],
//       defaultValue: [{ section: 'intro' }, { section: 'form' }],
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
//           name: 'smallFontSize',
//           type: 'text',
//           label: 'Small Text Font Size',
//           admin: {
//             description: 'For error messages, help text, etc.',
//           },
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
//         {
//           name: 'textareaMinHeight',
//           type: 'text',
//           label: 'Textarea Min Height',
//         },
//         {
//           name: 'selectArrowColor',
//           type: 'text',
//           label: 'Select Dropdown Arrow Color',
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
//           label: 'Enable WOW.js Animations',
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
//           name: 'mobilePaddingAdjustment',
//           type: 'text',
//           label: 'Mobile Padding Adjustment',
//           admin: {
//             description: 'Adjust padding for mobile devices',
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
//           name: 'enableLazyLoading',
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
//           name: 'usePicture',
//           type: 'checkbox',
//           label: 'Use Picture Element for Responsive Images',
//           defaultValue: true,
//           admin: {
//             description: 'Uses <picture> with <source> tags for better responsive image control',
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
//         {
//           name: 'draggableImages',
//           type: 'checkbox',
//           label: 'Allow Draggable Images',
//           defaultValue: false,
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
//           name: 'introSectionSpacing',
//           type: 'text',
//           label: 'Intro Section Spacing',
//           admin: {
//             description: 'Padding/margin for intro section (e.g., 60px 0)',
//           },
//         },
//         {
//           name: 'formSectionSpacing',
//           type: 'text',
//           label: 'Form Section Spacing',
//         },
//         {
//           name: 'elementSpacing',
//           type: 'text',
//           label: 'Element Spacing',
//           admin: {
//             description: 'Spacing between elements within sections (e.g., 20px)',
//           },
//         },
//         {
//           name: 'logoSpacing',
//           type: 'text',
//           label: 'Logo Spacing',
//           admin: {
//             description: 'Margin around logo',
//           },
//         },
//         {
//           name: 'headingSpacing',
//           type: 'text',
//           label: 'Heading Spacing',
//           admin: {
//             description: 'Margin below headings',
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
//         {
//           name: 'sectionShadow',
//           type: 'text',
//           label: 'Section Shadow',
//           admin: {
//             description: 'CSS box-shadow value for sections',
//           },
//         },
//         {
//           name: 'formWrapperShadow',
//           type: 'text',
//           label: 'Form Wrapper Shadow',
//         },
//         {
//           name: 'formWrapperBorder',
//           type: 'text',
//           label: 'Form Wrapper Border',
//         },
//         {
//           name: 'formWrapperBorderRadius',
//           type: 'text',
//           label: 'Form Wrapper Border Radius',
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
//           name: 'introContentAlign',
//           type: 'select',
//           label: 'Intro Content Alignment',
//           options: [
//             { label: 'Left', value: 'left' },
//             { label: 'Center', value: 'center' },
//             { label: 'Right', value: 'right' },
//           ],
//           defaultValue: 'center',
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
//           name: 'logoAlign',
//           type: 'select',
//           label: 'Logo Alignment',
//           options: [
//             { label: 'Left', value: 'left' },
//             { label: 'Center', value: 'center' },
//             { label: 'Right', value: 'right' },
//           ],
//           defaultValue: 'center',
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
//             { label: 'Center Center', value: 'center center' },
//             { label: 'Top Center', value: 'top center' },
//             { label: 'Bottom Center', value: 'bottom center' },
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
//           name: 'backgroundImageAttachment',
//           type: 'select',
//           label: 'Background Image Attachment',
//           options: [
//             { label: 'Scroll', value: 'scroll' },
//             { label: 'Fixed', value: 'fixed' },
//             { label: 'Local', value: 'local' },
//           ],
//           defaultValue: 'scroll',
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
//           name: 'useCenterTag',
//           type: 'checkbox',
//           label: 'Use Center Tag',
//           defaultValue: true,
//           admin: {
//             description: 'Use <center> tag or CSS text-align for centering',
//           },
//         },
//         {
//           name: 'centerTagReplacement',
//           type: 'select',
//           label: 'Center Tag Replacement',
//           options: [
//             { label: 'Div with text-align', value: 'div' },
//             { label: 'Div with flexbox', value: 'flex' },
//             { label: 'Keep <center> tag', value: 'center' },
//           ],
//           defaultValue: 'center',
//           admin: {
//             description: 'Choose modern alternative if not using <center>',
//           },
//         },
//       ],
//     },
//     // Viewport Settings
//     {
//       name: 'viewportSettings',
//       type: 'group',
//       label: 'Viewport Settings',
//       fields: [
//         {
//           name: 'enableViewportClass',
//           type: 'checkbox',
//           label: 'Enable Viewport Class',
//           defaultValue: true,
//           admin: {
//             description: 'Add viewport class for responsive behavior',
//           },
//         },
//         {
//           name: 'viewportThreshold',
//           type: 'text',
//           label: 'Viewport Threshold',
//           admin: {
//             description: 'Percentage of element visible before triggering (e.g., 0.5)',
//           },
//         },
//       ],
//     },
//     // Checkbox & Radio Styles
//     {
//       name: 'checkboxRadioStyles',
//       type: 'group',
//       label: 'Checkbox & Radio Styles',
//       fields: [
//         {
//           name: 'checkboxSize',
//           type: 'text',
//           label: 'Checkbox Size',
//           admin: {
//             description: 'Width and height of checkbox (e.g., 20px)',
//           },
//         },
//         {
//           name: 'checkboxBorderColor',
//           type: 'text',
//           label: 'Checkbox Border Color',
//         },
//         {
//           name: 'checkboxBackgroundColor',
//           type: 'text',
//           label: 'Checkbox Background Color',
//         },
//         {
//           name: 'checkboxCheckedColor',
//           type: 'text',
//           label: 'Checkbox Checked Color',
//         },
//         {
//           name: 'checkboxBorderRadius',
//           type: 'text',
//           label: 'Checkbox Border Radius',
//           admin: {
//             description: 'e.g., 3px for rounded corners',
//           },
//         },
//         {
//           name: 'checkboxLabelSpacing',
//           type: 'text',
//           label: 'Checkbox Label Spacing',
//           admin: {
//             description: 'Space between checkbox and label',
//           },
//         },
//       ],
//     },
//     // Error & Validation Styles
//     {
//       name: 'validationStyles',
//       type: 'group',
//       label: 'Error & Validation Styles',
//       fields: [
//         {
//           name: 'errorBorderColor',
//           type: 'text',
//           label: 'Error Border Color',
//           admin: {
//             description: 'Border color for fields with errors',
//           },
//         },
//         {
//           name: 'errorBackgroundColor',
//           type: 'text',
//           label: 'Error Background Color',
//         },
//         {
//           name: 'errorTextColor',
//           type: 'text',
//           label: 'Error Text Color',
//         },
//         {
//           name: 'successBorderColor',
//           type: 'text',
//           label: 'Success Border Color',
//         },
//         {
//           name: 'successTextColor',
//           type: 'text',
//           label: 'Success Text Color',
//         },
//         {
//           name: 'validationMessageFontSize',
//           type: 'text',
//           label: 'Validation Message Font Size',
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
//           name: 'enableInputHover',
//           type: 'checkbox',
//           label: 'Enable Input Hover Effects',
//           defaultValue: true,
//         },
//         {
//           name: 'inputHoverBorderColor',
//           type: 'text',
//           label: 'Input Hover Border Color',
//         },
//         {
//           name: 'inputHoverShadow',
//           type: 'text',
//           label: 'Input Hover Shadow',
//         },
//         {
//           name: 'linkHoverTransform',
//           type: 'text',
//           label: 'Link Hover Transform',
//           admin: {
//             description: 'CSS transform on hover (e.g., scale(1.05))',
//           },
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
//                 { label: 'Intro Section', value: 'intro' },
//                 { label: 'Form Section', value: 'form' },
//                 { label: 'Form Wrapper', value: 'formWrapper' },
//                 { label: 'Form Fields Container', value: 'formFields' },
//                 { label: 'Submit Button Container', value: 'submitHolder' },
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
//     // Form Wrapper Styles
//     {
//       name: 'formWrapperStyles',
//       type: 'group',
//       label: 'Form Wrapper Styles',
//       fields: [
//         {
//           name: 'wrapperBackgroundColor',
//           type: 'text',
//           label: 'Wrapper Background Color',
//         },
//         {
//           name: 'wrapperPadding',
//           type: 'text',
//           label: 'Wrapper Padding',
//           admin: {
//             description: 'e.g., 40px 20px',
//           },
//         },
//         {
//           name: 'wrapperMaxWidth',
//           type: 'text',
//           label: 'Wrapper Max Width',
//           admin: {
//             description: 'e.g., 800px, 100%',
//           },
//         },
//         {
//           name: 'wrapperMargin',
//           type: 'text',
//           label: 'Wrapper Margin',
//           admin: {
//             description: 'e.g., 0 auto',
//           },
//         },
//       ],
//     },
//     // Picture Element Settings
//     {
//       name: 'pictureSettings',
//       type: 'group',
//       label: 'Picture Element Settings',
//       fields: [
//         {
//           name: 'enableLazyLoadPlaceholder',
//           type: 'checkbox',
//           label: 'Enable Lazy Load Placeholder',
//           defaultValue: true,
//           admin: {
//             description: 'Use data-lazyload attributes with placeholder',
//           },
//         },
//         {
//           name: 'placeholderImage',
//           type: 'text',
//           label: 'Placeholder Image Data URI',
//           defaultValue:
//             'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=',
//           admin: {
//             description: 'Base64 encoded 1x1 transparent placeholder',
//           },
//         },
//         {
//           name: 'retinaSupport',
//           type: 'checkbox',
//           label: 'Enable Retina Support (2x images)',
//           defaultValue: true,
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

export const TrainingApplicationSimpleComponent: CollectionConfig = {
  slug: 'training-application-simple-component',
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
      defaultValue: 'Training Application Simple Component',
    },
    // Intro Module Section
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
          defaultValue: 'mod_intro container viewport option-1 wow fadeInUp',
          admin: {
            description: 'CSS classes for the container',
          },
        },
        {
          name: 'logo',
          type: 'group',
          label: 'Logo Settings',
          fields: [
            {
              name: 'show',
              type: 'checkbox',
              label: 'Show Logo',
              defaultValue: true,
            },
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              label: 'Logo Image',
            },
            {
              name: 'width',
              type: 'number',
              label: 'Logo Width',
              defaultValue: 58,
            },
            {
              name: 'height',
              type: 'number',
              label: 'Logo Height',
              defaultValue: 64,
            },
            {
              name: 'alt',
              type: 'text',
              label: 'Logo Alt Text',
              defaultValue: 'Goldfingers aesthetic logo',
            },
            {
              name: 'loading',
              type: 'select',
              label: 'Loading Strategy',
              options: [
                { label: 'Lazy', value: 'lazy' },
                { label: 'Eager', value: 'eager' },
              ],
              defaultValue: 'lazy',
            },
          ],
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Main Heading',
          defaultValue: 'Apply for Your Training Spot Today',
          required: true,
        },
        {
          name: 'headingColor',
          type: 'text',
          label: 'Heading Color',
        },
        {
          name: 'headingTag',
          type: 'select',
          label: 'Heading HTML Tag',
          options: [
            { label: 'H1', value: 'h1' },
            { label: 'H2', value: 'h2' },
            { label: 'H3', value: 'h3' },
          ],
          defaultValue: 'h1',
        },
        {
          name: 'centerHeading',
          type: 'checkbox',
          label: 'Center Align Heading',
          defaultValue: true,
        },
        {
          name: 'bulletPoints',
          type: 'array',
          label: 'Bullet Points / Content',
          admin: {
            description: 'Drag to reorder content items',
          },
        //   defaultValue: [
        //     {
        //       content:
        //         'Begin your journey with the #1 aesthetics training program in Florida. Fill out the form below to apply for hands-on instruction, expert guidance, and AMI certification.',
        //       fontWeight: '400',
        //       centerAlign: true,
        //     },
        //   ],
          fields: [
            {
              name: 'content',
              type: 'richText',
              label: 'Content',
              required: true,
            },
            {
              name: 'textColor',
              type: 'text',
              label: 'Text Color',
            },
            {
              name: 'centerAlign',
              type: 'checkbox',
              label: 'Center Align',
              defaultValue: true,
            },
            {
              name: 'fontWeight',
              type: 'select',
              label: 'Font Weight',
              options: [
                { label: 'Normal (400)', value: '400' },
                { label: 'Medium (500)', value: '500' },
                { label: 'Semi-Bold (600)', value: '600' },
                { label: 'Bold (700)', value: '700' },
              ],
              defaultValue: '400',
            },
          ],
        },
        {
          name: 'animation',
          type: 'text',
          label: 'Animation Class',
          defaultValue: 'fadeInUp',
          admin: {
            description: 'WOW.js animation class',
          },
        },
      ],
    },
    // Contact Form Section
    {
      name: 'formSection',
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
          defaultValue: 'mod_contact_form',
          admin: {
            description: 'Add "dark" class for dark mode',
          },
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Form Heading',
          defaultValue: 'Apply Now',
          required: true,
        },
        {
          name: 'headingColor',
          type: 'text',
          label: 'Heading Color',
        },
        {
          name: 'headingTag',
          type: 'select',
          label: 'Heading HTML Tag',
          options: [
            { label: 'H1', value: 'h1' },
            { label: 'H2', value: 'h2' },
            { label: 'H3', value: 'h3' },
          ],
          defaultValue: 'h2',
        },
        {
          name: 'backgroundImage',
          type: 'group',
          label: 'Background Image',
          fields: [
            {
              name: 'show',
              type: 'checkbox',
              label: 'Show Background Image',
              defaultValue: true,
            },
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
              label: 'Large Desktop Image (>1400px)',
            },
            {
              name: 'width',
              type: 'number',
              label: 'Image Width',
              defaultValue: 2200,
            },
            {
              name: 'height',
              type: 'number',
              label: 'Image Height',
              defaultValue: 1160,
            },
            {
              name: 'alt',
              type: 'text',
              label: 'Alt Text',
              defaultValue: 'Image of a bridge with an overlay',
            },
            {
              name: 'loading',
              type: 'select',
              label: 'Loading Strategy',
              options: [
                { label: 'Lazy', value: 'lazy' },
                { label: 'Eager', value: 'eager' },
              ],
              defaultValue: 'lazy',
            },
          ],
        },
        {
          name: 'formSettings',
          type: 'group',
          label: 'Form Settings',
          fields: [
            {
              name: 'formId',
              type: 'text',
              label: 'Form ID',
              defaultValue: 'form_training',
              required: true,
            },
            {
              name: 'formClass',
              type: 'text',
              label: 'Form Class',
              defaultValue: 's3-form',
            },
            {
              name: 'method',
              type: 'select',
              label: 'Form Method',
              options: [
                { label: 'POST', value: 'post' },
                { label: 'GET', value: 'get' },
              ],
              defaultValue: 'post',
            },
            {
              name: 'action',
              type: 'text',
              label: 'Form Action URL',
              defaultValue: '/validate/',
              required: true,
            },
            {
              name: 'encType',
              type: 'text',
              label: 'Encoding Type',
              defaultValue: 'multipart/form-data',
            },
            {
              name: 'subject',
              type: 'text',
              label: 'Email Subject',
              defaultValue: 'Training Sign Up Form',
              required: true,
            },
            {
              name: 'redirectUrl',
              type: 'text',
              label: 'Success Redirect URL',
              defaultValue: '/contact/thank-you/',
              required: true,
            },
          ],
        },
        {
          name: 'formFields',
          type: 'array',
          label: 'Form Fields',
          admin: {
            description: 'Drag to reorder form fields',
          },
          defaultValue: [
            {
              fieldType: 'text',
              columnClass: 'col1',
              fieldName: 'first_name',
              fieldId: 'training_first_name',
              label: 'First Name*',
              placeholder: 'First Name*',
              required: true,
              requiredMessage: 'This field is required.',
              size: 50,
            },
            {
              fieldType: 'text',
              columnClass: 'col1',
              fieldName: 'last_name',
              fieldId: 'training_last_name',
              label: 'Last Name*',
              placeholder: 'Last Name*',
              required: true,
              requiredMessage: 'This field is required.',
              size: 50,
            },
            {
              fieldType: 'tel',
              columnClass: 'col1',
              fieldName: 'phone',
              fieldId: 'training_phone',
              label: 'Phone*',
              placeholder: 'Phone*',
              required: true,
              requiredMessage: 'This field is required.',
              size: 50,
            },
            {
              fieldType: 'email',
              columnClass: 'col1',
              fieldName: 'email',
              fieldId: 'training_email',
              label: 'Email*',
              placeholder: 'Email*',
              required: true,
              requiredMessage: 'This field is required.',
              size: 50,
            },
            {
              fieldType: 'text',
              columnClass: 'col1',
              fieldName: 'preferred_training_month',
              fieldId: 'training_preferred_training_month',
              label: 'Preferred Training Month',
              placeholder: 'Preferred Training Month',
              required: false,
              size: 50,
            },
            {
              fieldType: 'select',
              columnClass: 'col1',
              fieldName: 'preferred_training_program',
              fieldId: 'training_preferred_training_program',
              label: 'Preferred Training Program*',
              required: true,
              requiredMessage: 'This field is required.',
              selectOptions: [
                {
                  label: 'Preferred Training Program*',
                  value: '',
                  selected: true,
                  disabled: true,
                },
                {
                  label: 'Foundational',
                  value: 'Foundational',
                  selected: false,
                  disabled: false,
                },
                {
                  label: 'Comprehensive',
                  value: 'Comprehensive',
                  selected: false,
                  disabled: false,
                },
              ],
            },
            {
              fieldType: 'textarea',
              columnClass: 'col1',
              fieldName: 'questions_or_comments',
              fieldId: 'training_questions_or_comments',
              label: 'Questions or Comments',
              placeholder: 'Questions or Comments',
              required: false,
              rows: 6,
              cols: 48,
            },
            {
              fieldType: 'checkbox',
              columnClass: 'col1',
              fieldName: 'optin_for_sms_texting',
              fieldId: 'training_optin_for_sms_texting',
              checkboxValue: 'Yes',
              checkboxLabel: [
                {
                  type: 'paragraph',
                  children: [{ text: 'Opt-In For SMS Texting' }],
                },
              ],
              additionalClasses: 'opt-in follow-up',
              required: false,
            },
            {
              fieldType: 'checkbox',
              columnClass: 'col1',
              fieldName:
                'by_completing_this_form_you_are_giving_us_permission_to_followup_by_phone_email_or_text',
              fieldId:
                'training_by_completing_this_form_you_are_giving_us_permission_to_followup_by_phone_email_or_text',
              checkboxValue: 'Yes',
              checkboxLabel: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      text: 'By completing this form, you are giving us permission to follow-up by phone, email or text.',
                    },
                  ],
                },
              ],
              additionalClasses: 'follow-up',
              required: true,
              requiredMessage: 'This field is required.',
            },
          ],
          fields: [
            {
              name: 'fieldType',
              type: 'select',
              label: 'Field Type',
              required: true,
              options: [
                { label: 'Text', value: 'text' },
                { label: 'Email', value: 'email' },
                { label: 'Phone/Tel', value: 'tel' },
                { label: 'Textarea', value: 'textarea' },
                { label: 'Select/Dropdown', value: 'select' },
                { label: 'Checkbox', value: 'checkbox' },
                { label: 'Hidden', value: 'hidden' },
              ],
            },
            {
              name: 'columnClass',
              type: 'select',
              label: 'Column Width',
              options: [
                { label: 'Full Width (col1)', value: 'col1' },
                { label: 'Half Width (col2)', value: 'col2' },
                { label: 'Third Width (col3)', value: 'col3' },
              ],
              defaultValue: 'col1',
            },
            {
              name: 'fieldName',
              type: 'text',
              label: 'Field Name',
              required: true,
              admin: {
                description: 'Used as HTML name attribute',
              },
            },
            {
              name: 'fieldId',
              type: 'text',
              label: 'Field ID',
              required: true,
              admin: {
                description: 'Must be unique. Use format: formid_fieldname',
              },
            },
            {
              name: 'label',
              type: 'text',
              label: 'Field Label',
            },
            {
              name: 'placeholder',
              type: 'text',
              label: 'Placeholder Text',
            },
            {
              name: 'defaultValue',
              type: 'text',
              label: 'Default Value',
            },
            {
              name: 'required',
              type: 'checkbox',
              label: 'Required Field',
              defaultValue: false,
            },
            {
              name: 'requiredMessage',
              type: 'text',
              label: 'Required Message',
              defaultValue: 'This field is required.',
              admin: {
                description: 'Message shown when field is required',
              },
            },
            {
              name: 'size',
              type: 'number',
              label: 'Input Size',
              admin: {
                description: 'Size attribute for input fields',
              },
            },
            {
              name: 'rows',
              type: 'number',
              label: 'Textarea Rows',
              admin: {
                description: 'Only for textarea fields',
              },
              defaultValue: 6,
            },
            {
              name: 'cols',
              type: 'number',
              label: 'Textarea Columns',
              admin: {
                description: 'Only for textarea fields',
              },
              defaultValue: 48,
            },
            {
              name: 'selectOptions',
              type: 'array',
              label: 'Select Options',
              admin: {
                description: 'Only for select fields - drag to reorder',
              },
              fields: [
                {
                  name: 'label',
                  type: 'text',
                  label: 'Option Label',
                  required: true,
                },
                {
                  name: 'value',
                  type: 'text',
                  label: 'Option Value',
                  required: true,
                },
                {
                  name: 'selected',
                  type: 'checkbox',
                  label: 'Selected by Default',
                  defaultValue: false,
                },
                {
                  name: 'disabled',
                  type: 'checkbox',
                  label: 'Disabled',
                  defaultValue: false,
                },
              ],
            },
            {
              name: 'checkboxValue',
              type: 'text',
              label: 'Checkbox Value',
              admin: {
                description: 'Value submitted when checkbox is checked',
              },
              defaultValue: 'Yes',
            },
            {
              name: 'checkboxLabel',
              type: 'richText',
              label: 'Checkbox Label Text',
              admin: {
                description: 'Label text for checkbox (can include links)',
              },
            },
            {
              name: 'additionalClasses',
              type: 'text',
              label: 'Additional CSS Classes',
              admin: {
                description: 'Space-separated classes (e.g., "opt-in follow-up")',
              },
            },
            {
              name: 'hiddenRow',
              type: 'checkbox',
              label: 'Hidden Row',
              defaultValue: false,
              admin: {
                description: 'Add hidden-row class to field-row',
              },
            },
          ],
        },
        {
          name: 'disclaimerSection',
          type: 'group',
          label: 'Disclaimer/Legal Section',
          fields: [
            {
              name: 'show',
              type: 'checkbox',
              label: 'Show Disclaimer',
              defaultValue: true,
            },
            {
              name: 'content',
              type: 'richText',
              label: 'Disclaimer Content',
              admin: {
                description: 'Legal text, links, and messaging information',
              },
            //   defaultValue: [
            //     {
            //       type: 'paragraph',
            //       children: [
            //         {
            //           text: 'Messaging frequency may vary. Message and data rates may apply. You can opt out any time by texting STOP. For assistance, text HELP or visit our website at ',
            //         },
            //         {
            //           type: 'link',
            //           url: 'https://goldfingersaesthetics.com',
            //           children: [{ text: 'Goldfingers Aesthetics' }],
            //         },
            //         {
            //           text: '. Visit ',
            //         },
            //         {
            //           type: 'link',
            //           url: 'https://goldfingersaesthetics.com/privacy-policy',
            //           children: [{ text: 'Privacy Policy' }],
            //         },
            //         {
            //           text: ' and ',
            //         },
            //         {
            //           type: 'link',
            //           url: 'https://www.goldfingersaesthetics.com/terms-and-conditions/',
            //           children: [{ text: 'Terms and Conditions' }],
            //         },
            //         {
            //           text: '.',
            //         },
            //       ],
            //     },
            //   ],
            },
            {
              name: 'textColor',
              type: 'text',
              label: 'Text Color',
            },
            {
              name: 'className',
              type: 'text',
              label: 'Container Class',
              defaultValue: 'section-label follow-up',
            },
          ],
        },
        {
          name: 'recaptchaSettings',
          type: 'group',
          label: 'reCAPTCHA Settings',
          fields: [
            {
              name: 'enableV3',
              type: 'checkbox',
              label: 'Enable reCAPTCHA v3',
              defaultValue: true,
            },
            {
              name: 'v3FieldId',
              type: 'text',
              label: 'reCAPTCHA v3 Field ID',
              defaultValue: 'training_recaptchaV3',
            },
            {
              name: 'enableV2',
              type: 'checkbox',
              label: 'Enable reCAPTCHA v2',
              defaultValue: true,
            },
            {
              name: 'v2ContainerId',
              type: 'text',
              label: 'reCAPTCHA v2 Container ID',
              defaultValue: 'training_recaptchaV2',
            },
            {
              name: 'errorContainerId',
              type: 'text',
              label: 'reCAPTCHA Error Container ID',
              defaultValue: 'training_recaptcha',
            },
            {
              name: 'errorMessage',
              type: 'text',
              label: 'Error Message',
              defaultValue: 'This field is required.',
            },
          ],
        },
        {
          name: 'submitButton',
          type: 'group',
          label: 'Submit Button',
          fields: [
            {
              name: 'validateButton',
              type: 'group',
              label: 'Validate Button (Display)',
              fields: [
                {
                  name: 'text',
                  type: 'text',
                  label: 'Button Text',
                  defaultValue: 'Submit',
                },
                {
                  name: 'id',
                  type: 'text',
                  label: 'Button ID',
                  defaultValue: 'validate_training',
                },
                {
                  name: 'className',
                  type: 'text',
                  label: 'Button Classes',
                  defaultValue: 'btn validate disabled',
                },
              ],
            },
            {
              name: 'submitButton',
              type: 'group',
              label: 'Submit Button (Actual)',
              fields: [
                {
                  name: 'text',
                  type: 'text',
                  label: 'Button Text',
                  defaultValue: 'Submit',
                },
                {
                  name: 'id',
                  type: 'text',
                  label: 'Button ID',
                  defaultValue: 'submit_training',
                },
                {
                  name: 'name',
                  type: 'text',
                  label: 'Button Name',
                  defaultValue: 'submit',
                },
                {
                  name: 'value',
                  type: 'text',
                  label: 'Button Value',
                  defaultValue: 'submitted',
                },
                {
                  name: 'className',
                  type: 'text',
                  label: 'Button Classes',
                  defaultValue: 'submit btn',
                },
              ],
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
              label: 'Hover Background Color',
            },
            {
              name: 'hoverTextColor',
              type: 'text',
              label: 'Hover Text Color',
            },
            {
              name: 'disabledBackgroundColor',
              type: 'text',
              label: 'Disabled Background Color',
            },
            {
              name: 'disabledTextColor',
              type: 'text',
              label: 'Disabled Text Color',
            },
          ],
        },
        {
          name: 'hiddenFields',
          type: 'array',
          label: 'Additional Hidden Fields',
          admin: {
            description: 'System fields like form_id, human_check, etc.',
          },
          defaultValue: [
            {
              fieldName: 'form_id',
              fieldId: 'form_id',
              value: 'training',
            },
            {
              fieldName: 'human_check',
              fieldId: 'human_check',
              value: '',
            },
          ],
          fields: [
            {
              name: 'fieldName',
              type: 'text',
              label: 'Field Name',
              required: true,
            },
            {
              name: 'fieldId',
              type: 'text',
              label: 'Field ID',
            },
            {
              name: 'value',
              type: 'text',
              label: 'Field Value',
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
            { label: 'Intro Section', value: 'intro' },
            { label: 'Contact Form Section', value: 'form' },
          ],
        },
      ],
      defaultValue: [{ section: 'intro' }, { section: 'form' }],
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
          name: 'labelFontSize',
          type: 'text',
          label: 'Label Font Size',
        },
        {
          name: 'labelFontWeight',
          type: 'text',
          label: 'Label Font Weight',
        },
        {
          name: 'smallFontSize',
          type: 'text',
          label: 'Small Text Font Size',
          admin: {
            description: 'For error messages, help text, etc.',
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
          name: 'border',
          type: 'text',
          label: 'Button Border',
          admin: {
            description: 'e.g., 1px solid #000',
          },
        },
        {
          name: 'transition',
          type: 'text',
          label: 'Button Transition',
          defaultValue: 'all 0.3s ease',
        },
      ],
    },
    // Form Styles
    {
      name: 'formStyles',
      type: 'group',
      label: 'Form Styles',
      fields: [
        {
          name: 'inputBackgroundColor',
          type: 'text',
          label: 'Input Background Color',
        },
        {
          name: 'inputTextColor',
          type: 'text',
          label: 'Input Text Color',
        },
        {
          name: 'inputBorderColor',
          type: 'text',
          label: 'Input Border Color',
        },
        {
          name: 'inputBorderWidth',
          type: 'text',
          label: 'Input Border Width',
          defaultValue: '1px',
        },
        {
          name: 'inputBorderRadius',
          type: 'text',
          label: 'Input Border Radius',
          admin: {
            description: 'e.g., 4px',
          },
        },
        {
          name: 'inputPadding',
          type: 'text',
          label: 'Input Padding',
          admin: {
            description: 'e.g., 10px 15px',
          },
        },
        {
          name: 'inputFocusBorderColor',
          type: 'text',
          label: 'Input Focus Border Color',
        },
        {
          name: 'inputFocusShadow',
          type: 'text',
          label: 'Input Focus Shadow',
          admin: {
            description: 'CSS box-shadow value',
          },
        },
        {
          name: 'labelColor',
          type: 'text',
          label: 'Label Color',
        },
        {
          name: 'placeholderColor',
          type: 'text',
          label: 'Placeholder Text Color',
        },
        {
          name: 'errorColor',
          type: 'text',
          label: 'Error Message Color',
        },
        {
          name: 'fieldSpacing',
          type: 'text',
          label: 'Field Spacing',
          admin: {
            description: 'Space between form fields (e.g., 20px)',
          },
        },
        {
          name: 'textareaMinHeight',
          type: 'text',
          label: 'Textarea Min Height',
        },
        {
          name: 'selectArrowColor',
          type: 'text',
          label: 'Select Dropdown Arrow Color',
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
          label: 'Enable WOW.js Animations',
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
          name: 'animationEasing',
          type: 'text',
          label: 'Animation Easing',
          admin: {
            description: 'CSS easing function',
          },
          defaultValue: 'ease-in-out',
        },
        {
          name: 'animationDelay',
          type: 'text',
          label: 'Animation Delay',
          admin: {
            description: 'Delay before animation starts (e.g., 0.2s)',
          },
          defaultValue: '0s',
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
          name: 'mobilePaddingAdjustment',
          type: 'text',
          label: 'Mobile Padding Adjustment',
          admin: {
            description: 'Adjust padding for mobile devices',
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
          name: 'enableLazyLoading',
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
        {
          name: 'usePicture',
          type: 'checkbox',
          label: 'Use Picture Element for Responsive Images',
          defaultValue: true,
          admin: {
            description: 'Uses <picture> with <source> tags for better responsive image control',
          },
        },
        {
          name: 'imageBorderRadius',
          type: 'text',
          label: 'Image Border Radius',
          admin: {
            description: 'e.g., 8px, 0.5rem',
          },
        },
        {
          name: 'imageShadow',
          type: 'text',
          label: 'Image Shadow',
          admin: {
            description: 'CSS box-shadow value',
          },
        },
        {
          name: 'draggableImages',
          type: 'checkbox',
          label: 'Allow Draggable Images',
          defaultValue: false,
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
          name: 'introSectionSpacing',
          type: 'text',
          label: 'Intro Section Spacing',
          admin: {
            description: 'Padding/margin for intro section (e.g., 60px 0)',
          },
        },
        {
          name: 'formSectionSpacing',
          type: 'text',
          label: 'Form Section Spacing',
        },
        {
          name: 'elementSpacing',
          type: 'text',
          label: 'Element Spacing',
          admin: {
            description: 'Spacing between elements within sections (e.g., 20px)',
          },
        },
        {
          name: 'logoSpacing',
          type: 'text',
          label: 'Logo Spacing',
          admin: {
            description: 'Margin around logo',
          },
        },
        {
          name: 'headingSpacing',
          type: 'text',
          label: 'Heading Spacing',
          admin: {
            description: 'Margin below headings',
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
          name: 'sectionBorder',
          type: 'text',
          label: 'Section Border',
          admin: {
            description: 'Border for sections (e.g., 1px solid #ccc)',
          },
        },
        {
          name: 'sectionBorderRadius',
          type: 'text',
          label: 'Section Border Radius',
        },
        {
          name: 'sectionShadow',
          type: 'text',
          label: 'Section Shadow',
          admin: {
            description: 'CSS box-shadow value for sections',
          },
        },
        {
          name: 'formWrapperShadow',
          type: 'text',
          label: 'Form Wrapper Shadow',
        },
        {
          name: 'formWrapperBorder',
          type: 'text',
          label: 'Form Wrapper Border',
        },
        {
          name: 'formWrapperBorderRadius',
          type: 'text',
          label: 'Form Wrapper Border Radius',
        },
      ],
    },
    // Content Alignment
    {
      name: 'contentAlignment',
      type: 'group',
      label: 'Content Alignment',
      fields: [
        {
          name: 'introContentAlign',
          type: 'select',
          label: 'Intro Content Alignment',
          options: [
            { label: 'Left', value: 'left' },
            { label: 'Center', value: 'center' },
            { label: 'Right', value: 'right' },
          ],
          defaultValue: 'center',
        },
        {
          name: 'formContentAlign',
          type: 'select',
          label: 'Form Content Alignment',
          options: [
            { label: 'Left', value: 'left' },
            { label: 'Center', value: 'center' },
            { label: 'Right', value: 'right' },
          ],
          defaultValue: 'center',
        },
        {
          name: 'logoAlign',
          type: 'select',
          label: 'Logo Alignment',
          options: [
            { label: 'Left', value: 'left' },
            { label: 'Center', value: 'center' },
            { label: 'Right', value: 'right' },
          ],
          defaultValue: 'center',
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
            { label: 'Center Center', value: 'center center' },
            { label: 'Top Center', value: 'top center' },
            { label: 'Bottom Center', value: 'bottom center' },
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
          name: 'backgroundImageAttachment',
          type: 'select',
          label: 'Background Image Attachment',
          options: [
            { label: 'Scroll', value: 'scroll' },
            { label: 'Fixed', value: 'fixed' },
            { label: 'Local', value: 'local' },
          ],
          defaultValue: 'scroll',
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
    // Center Alignment Settings
    {
      name: 'centerAlignmentSettings',
      type: 'group',
      label: 'Center Alignment Settings',
      fields: [
        {
          name: 'useCenterTag',
          type: 'checkbox',
          label: 'Use Center Tag',
          defaultValue: true,
          admin: {
            description: 'Use <center> tag or CSS text-align for centering',
          },
        },
        {
          name: 'centerTagReplacement',
          type: 'select',
          label: 'Center Tag Replacement',
          options: [
            { label: 'Div with text-align', value: 'div' },
            { label: 'Div with flexbox', value: 'flex' },
            { label: 'Keep <center> tag', value: 'center' },
          ],
          defaultValue: 'center',
          admin: {
            description: 'Choose modern alternative if not using <center>',
          },
        },
      ],
    },
    // Viewport Settings
    {
      name: 'viewportSettings',
      type: 'group',
      label: 'Viewport Settings',
      fields: [
        {
          name: 'enableViewportClass',
          type: 'checkbox',
          label: 'Enable Viewport Class',
          defaultValue: true,
          admin: {
            description: 'Add viewport class for responsive behavior',
          },
        },
        {
          name: 'viewportThreshold',
          type: 'text',
          label: 'Viewport Threshold',
          admin: {
            description: 'Percentage of element visible before triggering (e.g., 0.5)',
          },
        },
      ],
    },
    // Checkbox & Radio Styles
    {
      name: 'checkboxRadioStyles',
      type: 'group',
      label: 'Checkbox & Radio Styles',
      fields: [
        {
          name: 'checkboxSize',
          type: 'text',
          label: 'Checkbox Size',
          admin: {
            description: 'Width and height of checkbox (e.g., 20px)',
          },
        },
        {
          name: 'checkboxBorderColor',
          type: 'text',
          label: 'Checkbox Border Color',
        },
        {
          name: 'checkboxBackgroundColor',
          type: 'text',
          label: 'Checkbox Background Color',
        },
        {
          name: 'checkboxCheckedColor',
          type: 'text',
          label: 'Checkbox Checked Color',
        },
        {
          name: 'checkboxBorderRadius',
          type: 'text',
          label: 'Checkbox Border Radius',
          admin: {
            description: 'e.g., 3px for rounded corners',
          },
        },
        {
          name: 'checkboxLabelSpacing',
          type: 'text',
          label: 'Checkbox Label Spacing',
          admin: {
            description: 'Space between checkbox and label',
          },
        },
      ],
    },
    // Error & Validation Styles
    {
      name: 'validationStyles',
      type: 'group',
      label: 'Error & Validation Styles',
      fields: [
        {
          name: 'errorBorderColor',
          type: 'text',
          label: 'Error Border Color',
          admin: {
            description: 'Border color for fields with errors',
          },
        },
        {
          name: 'errorBackgroundColor',
          type: 'text',
          label: 'Error Background Color',
        },
        {
          name: 'errorTextColor',
          type: 'text',
          label: 'Error Text Color',
        },
        {
          name: 'successBorderColor',
          type: 'text',
          label: 'Success Border Color',
        },
        {
          name: 'successTextColor',
          type: 'text',
          label: 'Success Text Color',
        },
        {
          name: 'validationMessageFontSize',
          type: 'text',
          label: 'Validation Message Font Size',
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
          name: 'enableInputHover',
          type: 'checkbox',
          label: 'Enable Input Hover Effects',
          defaultValue: true,
        },
        {
          name: 'inputHoverBorderColor',
          type: 'text',
          label: 'Input Hover Border Color',
        },
        {
          name: 'inputHoverShadow',
          type: 'text',
          label: 'Input Hover Shadow',
        },
        {
          name: 'linkHoverTransform',
          type: 'text',
          label: 'Link Hover Transform',
          admin: {
            description: 'CSS transform on hover (e.g., scale(1.05))',
          },
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
                { label: 'Intro Section', value: 'intro' },
                { label: 'Form Section', value: 'form' },
                { label: 'Form Wrapper', value: 'formWrapper' },
                { label: 'Form Fields Container', value: 'formFields' },
                { label: 'Submit Button Container', value: 'submitHolder' },
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
    // Form Wrapper Styles
    {
      name: 'formWrapperStyles',
      type: 'group',
      label: 'Form Wrapper Styles',
      fields: [
        {
          name: 'wrapperBackgroundColor',
          type: 'text',
          label: 'Wrapper Background Color',
        },
        {
          name: 'wrapperPadding',
          type: 'text',
          label: 'Wrapper Padding',
          admin: {
            description: 'e.g., 40px 20px',
          },
        },
        {
          name: 'wrapperMaxWidth',
          type: 'text',
          label: 'Wrapper Max Width',
          admin: {
            description: 'e.g., 800px, 100%',
          },
        },
        {
          name: 'wrapperMargin',
          type: 'text',
          label: 'Wrapper Margin',
          admin: {
            description: 'e.g., 0 auto',
          },
        },
      ],
    },
    // Picture Element Settings
    {
      name: 'pictureSettings',
      type: 'group',
      label: 'Picture Element Settings',
      fields: [
        {
          name: 'enableLazyLoadPlaceholder',
          type: 'checkbox',
          label: 'Enable Lazy Load Placeholder',
          defaultValue: true,
          admin: {
            description: 'Use data-lazyload attributes with placeholder',
          },
        },
        {
          name: 'placeholderImage',
          type: 'text',
          label: 'Placeholder Image Data URI',
          defaultValue:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=',
          admin: {
            description: 'Base64 encoded 1x1 transparent placeholder',
          },
        },
        {
          name: 'retinaSupport',
          type: 'checkbox',
          label: 'Enable Retina Support (2x images)',
          defaultValue: true,
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