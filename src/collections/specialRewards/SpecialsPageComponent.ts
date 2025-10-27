import { CollectionConfig } from 'payload'

export const SpecialsPageComponent: CollectionConfig = {
  slug: 'specials-page-component',
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
      defaultValue: 'Specials Page Component',
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
          name: 'className',
          type: 'text',
          label: 'Additional CSS Classes',
          admin: {
            description: 'e.g., less-padding, mobile-stack',
          },
          defaultValue: 'less-padding mobile-stack',
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
          defaultValue: [
            {
              label: 'Home',
              url: '/',
              ariaLabel: 'Breadcrumbs to help navigate the user',
            },
            {
              label: 'Specials And Rewards',
              url: '/specials-and-rewards/',
              ariaLabel: 'Breadcrumbs to help navigate the user',
            },
            {
              label: 'Specials',
              url: '/specials-and-rewards/specials/',
              ariaLabel: 'Breadcrumbs to help navigate the user',
            },
          ],
        },
        {
          name: 'title',
          type: 'text',
          required: true,
          defaultValue: 'Specials',
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
              defaultValue: 'team photo',
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
          label: 'Additional CSS Classes',
          admin: {
            description: 'e.g., option-1, wide, viewport',
          },
          defaultValue: 'option-1 wide viewport',
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
          admin: {
            description: 'CSS padding value (e.g., 0, 20px, 2rem)',
          },
          defaultValue: '0',
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
          defaultValue: 'Goldfingers Aesthetics Specials',
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
    // Banner Section 1 (Price Match Guarantee)
    {
      name: 'bannerSection1',
      type: 'group',
      label: 'Banner Section 1 (Price Match)',
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
          label: 'Additional CSS Classes',
          admin: {
            description: 'e.g., dark, hide-divider, viewport, background-1',
          },
          defaultValue: 'dark hide-divider viewport background-1',
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
          name: 'textAlign',
          type: 'select',
          label: 'Text Alignment',
          options: [
            { label: 'Left', value: 'left' },
            { label: 'Center', value: 'center' },
            { label: 'Right', value: 'right' },
          ],
          defaultValue: 'center',
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
          defaultValue: 'Price Match Guarantee for all Dermal Fillers!',
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
    // Column Section 1 (Image)
    {
      name: 'columnSection1',
      type: 'group',
      label: 'Column Section 1 (Promotional Image)',
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
          label: 'Additional CSS Classes',
          admin: {
            description: 'e.g., viewport, container, text-center',
          },
          defaultValue: 'viewport container',
        },
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Background Color',
        },
        {
          name: 'textAlign',
          type: 'select',
          label: 'Text Alignment',
          options: [
            { label: 'Left', value: 'left' },
            { label: 'Center', value: 'center' },
            { label: 'Right', value: 'right' },
          ],
          defaultValue: 'center',
        },
        {
          name: 'columns',
          type: 'array',
          label: 'Content Columns',
          admin: {
            description: 'Drag to reorder columns',
          },
          fields: [
            {
              name: 'columnWidth',
              type: 'text',
              label: 'Column Width',
              admin: {
                description: 'CSS width or max-width class (e.g., mw-50 for max-width 50%)',
              },
            },
            {
              name: 'content',
              type: 'richText',
              label: 'Column Content',
              // required: true,
            },
            {
              name: 'image',
              type: 'group',
              label: 'Column Image',
              fields: [
                {
                  name: 'url',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Image',
                },
                {
                  name: 'width',
                  type: 'text',
                  label: 'Image Width',
                },
                {
                  name: 'height',
                  type: 'text',
                  label: 'Image Height',
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
      ],
    },
    // Column Section 2 (VIP Member)
    {
      name: 'columnSection2',
      type: 'group',
      label: 'Column Section 2 (VIP Member)',
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
          label: 'Additional CSS Classes',
          admin: {
            description: 'e.g., viewport, container, text-center',
          },
          defaultValue: 'viewport container',
        },
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Background Color',
        },
        {
          name: 'textAlign',
          type: 'select',
          label: 'Text Alignment',
          options: [
            { label: 'Left', value: 'left' },
            { label: 'Center', value: 'center' },
            { label: 'Right', value: 'right' },
          ],
          defaultValue: 'center',
        },
        {
          name: 'columns',
          type: 'array',
          label: 'Content Columns',
          admin: {
            description: 'Drag to reorder columns',
          },
          fields: [
            {
              name: 'columnWidth',
              type: 'text',
              label: 'Column Width',
              admin: {
                description: 'CSS width or max-width class (e.g., mw-50 for max-width 50%)',
              },
              defaultValue: 'mw-50',
            },
            {
              name: 'content',
              type: 'richText',
              label: 'Column Content',
              // required: true,
            },
            {
              name: 'image',
              type: 'group',
              label: 'Column Image',
              fields: [
                {
                  name: 'url',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Image',
                },
                {
                  name: 'width',
                  type: 'text',
                  label: 'Image Width',
                },
                {
                  name: 'height',
                  type: 'text',
                  label: 'Image Height',
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
          name: 'heading',
          type: 'text',
          label: 'Form Heading',
          required: true,
          defaultValue: 'Contact Us',
        },
        {
          name: 'headingColor',
          type: 'text',
          label: 'Heading Color',
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
              defaultValue: 'contact',
            },
            {
              name: 'formAction',
              type: 'text',
              label: 'Form Action URL',
              defaultValue: '/validate/',
            },
            {
              name: 'redirectUrl',
              type: 'text',
              label: 'Redirect URL (After Submit)',
              defaultValue: '/contact/thank-you/',
            },
            {
              name: 'emailSubject',
              type: 'text',
              label: 'Email Subject',
              defaultValue: 'Contact Form',
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
          fields: [
            {
              name: 'fieldType',
              type: 'select',
              label: 'Field Type',
              required: true,
              options: [
                { label: 'Text', value: 'text' },
                { label: 'Email', value: 'email' },
                { label: 'Phone', value: 'tel' },
                { label: 'Textarea', value: 'textarea' },
                { label: 'Select', value: 'select' },
                { label: 'Checkbox', value: 'checkbox' },
                { label: 'Hidden', value: 'hidden' },
              ],
            },
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
              required: true,
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
              name: 'required',
              type: 'checkbox',
              label: 'Required Field',
              defaultValue: false,
            },
            {
              name: 'defaultValue',
              type: 'text',
              label: 'Default Value',
            },
            {
              name: 'columnClass',
              type: 'text',
              label: 'Column Class',
              admin: {
                description: 'e.g., col1, col2',
              },
              defaultValue: 'col1',
            },
            {
              name: 'additionalClasses',
              type: 'text',
              label: 'Additional CSS Classes',
              admin: {
                description: 'e.g., hidden-row, follow-up, opt-in',
              },
            },
            {
              name: 'selectOptions',
              type: 'array',
              label: 'Select Options (For Select Fields)',
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
              ],
            },
            {
              name: 'validationMessage',
              type: 'text',
              label: 'Validation Message',
              defaultValue: 'This field is required.',
            },
          ],
          defaultValue: [
            {
              fieldType: 'text',
              fieldName: 'first_name',
              fieldId: 'contact_first_name',
              label: 'First Name*',
              placeholder: 'First Name*',
              required: true,
              columnClass: 'col1',
            },
            {
              fieldType: 'text',
              fieldName: 'last_name',
              fieldId: 'contact_last_name',
              label: 'Last Name*',
              placeholder: 'Last Name*',
              required: true,
              columnClass: 'col1',
            },
            {
              fieldType: 'tel',
              fieldName: 'phone',
              fieldId: 'contact_phone',
              label: 'Phone*',
              placeholder: 'Phone*',
              required: true,
              columnClass: 'col1',
            },
            {
              fieldType: 'email',
              fieldName: 'email',
              fieldId: 'contact_email',
              label: 'Email*',
              placeholder: 'Email*',
              required: true,
              columnClass: 'col1',
            },
            {
              fieldType: 'select',
              fieldName: 'location_id',
              fieldId: 'contact_location_id',
              label: 'Location*',
              placeholder: 'Location*',
              required: true,
              columnClass: 'col1',
            },
            {
              fieldType: 'select',
              fieldName: 'what_service_are_you_interested_in',
              fieldId: 'contact_what_service_are_you_interested_in',
              label: 'What Service Are You Interested In?*',
              placeholder: 'What Service Are You Interested In?*',
              required: true,
              columnClass: 'col1',
              selectOptions: [
                { label: 'Liposuction', value: 'Liposuction' },
                { label: 'BOTOX', value: 'BOTOX' },
                { label: 'Plastic Surgery', value: 'Plastic Surgery' },
                { label: 'Micro-channeling', value: 'Micro-channeling' },
                { label: 'Med Spa', value: 'Med Spa' },
                { label: 'Skin Care', value: 'Skin Care' },
                { label: 'Dermal Fillers', value: 'Dermal Fillers' },
                { label: 'Face Lift', value: 'Face Lift' },
                { label: 'Weight Loss Injections', value: 'Weight Loss Injections' },
                { label: 'I Have a Question', value: 'I Have a Question' },
              ],
            },
            {
              fieldType: 'textarea',
              fieldName: 'commentsquestions',
              fieldId: 'contact_commentsquestions',
              label: 'Comments/Questions',
              placeholder: 'Comments/Questions',
              required: false,
              columnClass: 'col1',
            },
            {
              fieldType: 'checkbox',
              fieldName: 'optin_for_sms_texting',
              fieldId: 'contact_optin_for_sms_texting',
              label: 'Opt-In For SMS Texting',
              required: false,
              columnClass: 'col1',
              additionalClasses: 'opt-in follow-up',
              defaultValue: 'Yes',
            },
          ],
        },
        {
          name: 'buttonText',
          type: 'text',
          label: 'Submit Button Text',
          defaultValue: 'Submit',
        },
        {
          name: 'buttonBackgroundColor',
          type: 'text',
          label: 'Button Background Color',
        },
        {
          name: 'buttonTextColor',
          type: 'text',
          label: 'Button Text Color',
        },
        {
          name: 'buttonHoverBackgroundColor',
          type: 'text',
          label: 'Button Hover Background Color',
        },
        {
          name: 'privacyNotice',
          type: 'richText',
          label: 'Privacy Notice Text',
          admin: {
            description: 'Text displayed at bottom of form (messaging terms, privacy policy, etc.)',
          },
        },
        {
          name: 'enableRecaptcha',
          type: 'checkbox',
          label: 'Enable reCAPTCHA',
          defaultValue: true,
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
            { label: 'Banner Section 1 (Price Match)', value: 'bannerSection1' },
            { label: 'Column Section 1 (Promotional Image)', value: 'columnSection1' },
            { label: 'Column Section 2 (VIP Member)', value: 'columnSection2' },
            { label: 'Contact Form Section', value: 'contactForm' },
          ],
        },
      ],
      defaultValue: [
        { section: 'hero' },
        { section: 'intro' },
        { section: 'bannerSection1' },
        { section: 'columnSection1' },
        { section: 'columnSection2' },
        { section: 'contactForm' },
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
          name: 'inputBorderRadius',
          type: 'text',
          label: 'Input Border Radius',
          admin: {
            description: 'e.g., 4px, 0.5rem',
          },
        },
        {
          name: 'inputPadding',
          type: 'text',
          label: 'Input Padding',
        },
        {
          name: 'labelColor',
          type: 'text',
          label: 'Label Color',
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
          name: 'errorColor',
          type: 'text',
          label: 'Error Message Color',
        },
        {
          name: 'focusBorderColor',
          type: 'text',
          label: 'Input Focus Border Color',
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
        {
          name: 'disabledBackgroundColor',
          type: 'text',
          label: 'Disabled Button Background',
        },
        {
          name: 'disabledTextColor',
          type: 'text',
          label: 'Disabled Button Text Color',
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
          name: 'enableWowAnimations',
          type: 'checkbox',
          label: 'Enable WOW.js Animations',
          admin: {
            description: 'Enable scroll-triggered animations',
          },
          defaultValue: true,
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
          defaultValue: 'Specials - Goldfingers Aesthetics',
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
        {
          name: 'structuredData',
          type: 'textarea',
          label: 'Structured Data (JSON-LD)',
          admin: {
            description: 'Add schema.org structured data in JSON-LD format',
          },
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
        {
          name: 'keyboardNavigationEnabled',
          type: 'checkbox',
          label: 'Enhanced Keyboard Navigation',
          defaultValue: true,
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
          name: 'mobileStackSections',
          type: 'checkbox',
          label: 'Stack Sections on Mobile',
          admin: {
            description: 'Automatically stack sections vertically on mobile devices',
          },
          defaultValue: true,
        },
        {
          name: 'mobileHideElements',
          type: 'text',
          label: 'Mobile Hidden Elements',
          admin: {
            description: 'Comma-separated list of element classes to hide on mobile',
          },
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
          name: 'customCSS',
          type: 'textarea',
          label: 'Custom CSS',
          admin: {
            description: 'Add custom CSS styles for this page',
          },
        },
        {
          name: 'customJS',
          type: 'textarea',
          label: 'Custom JavaScript',
          admin: {
            description: 'Add custom JavaScript code for this page',
          },
        },
        {
          name: 'dataAttributes',
          type: 'array',
          label: 'Custom Data Attributes',
          admin: {
            description: 'Add custom data attributes to page elements',
          },
          fields: [
            {
              name: 'attribute',
              type: 'text',
              label: 'Attribute Name',
              admin: {
                description: 'e.g., data-tracking-id',
              },
            },
            {
              name: 'value',
              type: 'text',
              label: 'Attribute Value',
            },
            {
              name: 'targetSection',
              type: 'select',
              label: 'Apply To Section',
              options: [
                { label: 'Hero Section', value: 'hero' },
                { label: 'Intro Section', value: 'intro' },
                { label: 'Banner Section 1', value: 'bannerSection1' },
                { label: 'Column Section 1', value: 'columnSection1' },
                { label: 'Column Section 2', value: 'columnSection2' },
                { label: 'Contact Form Section', value: 'contactForm' },
              ],
            },
          ],
        },
        {
          name: 'lazyLoadImages',
          type: 'checkbox',
          label: 'Enable Lazy Loading for Images',
          defaultValue: true,
        },
        {
          name: 'enableCaching',
          type: 'checkbox',
          label: 'Enable Page Caching',
          defaultValue: true,
        },
      ],
    },
    // Integration Settings
    {
      name: 'integrationSettings',
      type: 'group',
      label: 'Integration Settings',
      fields: [
        {
          name: 'googleAnalyticsId',
          type: 'text',
          label: 'Google Analytics ID',
          admin: {
            description: 'GA tracking ID for this page',
          },
        },
        {
          name: 'facebookPixelId',
          type: 'text',
          label: 'Facebook Pixel ID',
        },
        {
          name: 'recaptchaSiteKey',
          type: 'text',
          label: 'reCAPTCHA Site Key',
          admin: {
            description: 'Google reCAPTCHA v3 site key',
          },
        },
        {
          name: 'recaptchaSecretKey',
          type: 'text',
          label: 'reCAPTCHA Secret Key',
          admin: {
            description: 'Google reCAPTCHA v3 secret key (stored securely)',
          },
        },
        {
          name: 'marketingAutomationTags',
          type: 'array',
          label: 'Marketing Automation Tags',
          admin: {
            description: 'Tags for marketing automation platforms',
          },
          fields: [
            {
              name: 'platform',
              type: 'select',
              label: 'Platform',
              options: [
                { label: 'HubSpot', value: 'hubspot' },
                { label: 'Marketo', value: 'marketo' },
                { label: 'Pardot', value: 'pardot' },
                { label: 'ActiveCampaign', value: 'activecampaign' },
                { label: 'Other', value: 'other' },
              ],
            },
            {
              name: 'tagCode',
              type: 'textarea',
              label: 'Tag Code',
            },
          ],
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
          name: 'imageOptimization',
          type: 'checkbox',
          label: 'Enable Image Optimization',
          defaultValue: true,
        },
        {
          name: 'imageQuality',
          type: 'text',
          label: 'Image Quality',
          admin: {
            description: 'Compression quality (1-100)',
          },
          defaultValue: '85',
        },
        {
          name: 'imageFormat',
          type: 'select',
          label: 'Preferred Image Format',
          options: [
            { label: 'Auto', value: 'auto' },
            { label: 'WebP', value: 'webp' },
            { label: 'JPEG', value: 'jpeg' },
            { label: 'PNG', value: 'png' },
          ],
          defaultValue: 'auto',
        },
        {
          name: 'minifyCSS',
          type: 'checkbox',
          label: 'Minify CSS',
          defaultValue: true,
        },
        {
          name: 'minifyJS',
          type: 'checkbox',
          label: 'Minify JavaScript',
          defaultValue: true,
        },
        {
          name: 'deferNonCriticalCSS',
          type: 'checkbox',
          label: 'Defer Non-Critical CSS',
          defaultValue: false,
        },
        {
          name: 'preloadCriticalAssets',
          type: 'checkbox',
          label: 'Preload Critical Assets',
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
