import { CollectionConfig } from 'payload'

export const ContactSection: CollectionConfig = {
  slug: 'contact-section',
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
      defaultValue: 'Contact Section',
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Toggle to enable/disable this section',
      },
    },
    // Main Section Settings
    {
      name: 'mainSection',
      type: 'group',
      fields: [
        {
          name: 'backgroundColor',
          type: 'text',
          defaultValue: '#ffffff',
          admin: {
            description: 'Background color for the main section',
          },
        },
        {
          name: 'moduleClass',
          type: 'text',
          defaultValue: 'mod_contact banner stack phone-background',
        },
      ],
    },
    // Info Section (Left Side)
    {
      name: 'infoSection',
      type: 'group',
      fields: [
        {
          name: 'backgroundColor',
          type: 'text',
          defaultValue: '#f8f9fa',
        },
        {
          name: 'textColor',
          type: 'text',
          defaultValue: '#333333',
        },
        {
          name: 'heading',
          type: 'text',
          required: true,
          defaultValue: 'Contact Us',
        },
        {
          name: 'headingColor',
          type: 'text',
          defaultValue: '#000000',
        },
        {
          name: 'phoneNumber',
          type: 'text',
          required: true,
          defaultValue: '+14073334300',
        },
        {
          name: 'phoneDisplay',
          type: 'text',
          defaultValue: '(407) 333-4300',
        },
        {
          name: 'phoneColor',
          type: 'text',
          defaultValue: '#007bff',
        },
        {
          name: 'specialsButton',
          type: 'group',
          fields: [
            {
              name: 'text',
              type: 'text',
              defaultValue: 'Specials',
            },
            {
              name: 'url',
              type: 'text',
              defaultValue: '/specials-and-rewards/specials/',
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
      ],
    },
    // Form Section
    {
      name: 'formSection',
      type: 'group',
      fields: [
        {
          name: 'backgroundColor',
          type: 'text',
          defaultValue: '#ffffff',
        },
        {
          name: 'formId',
          type: 'text',
          defaultValue: 'form_contact',
        },
        {
          name: 'formAction',
          type: 'text',
          defaultValue: '/validate/',
        },
        {
          name: 'redirectUrl',
          type: 'text',
          defaultValue: '/contact/thank-you/',
        },
        {
          name: 'subjectLine',
          type: 'text',
          defaultValue: 'Contact Form',
        },
        // Form Fields Configuration
        {
          name: 'formFields',
          type: 'array',
          defaultValue: [
            {
              fieldType: 'text',
              name: 'first_name',
              label: 'First Name',
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
          ],
        },
        // Service Options
        {
          name: 'serviceOptions',
          type: 'array',
          defaultValue: [
            { label: 'Liposuction', value: 'Liposuction', order: 1 },
            { label: 'BOTOX', value: 'BOTOX', order: 2 },
            { label: 'Plastic Surgery', value: 'Plastic Surgery', order: 3 },
            { label: 'Micro-channeling', value: 'Micro-channeling', order: 4 },
            { label: 'Med Spa', value: 'Med Spa', order: 5 },
            { label: 'Skin Care', value: 'Skin Care', order: 6 },
            { label: 'Dermal Fillers', value: 'Dermal Fillers', order: 7 },
            { label: 'Face Lift', value: 'Face Lift', order: 8 },
            { label: 'Weight Loss Injections', value: 'Weight Loss Injections', order: 9 },
            { label: 'I Have a Question', value: 'I Have a Question', order: 10 },
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
        // Form Styling
        {
          name: 'formStyling',
          type: 'group',
          fields: [
            {
              name: 'inputBackgroundColor',
              type: 'text',
              defaultValue: '#ffffff',
            },
            {
              name: 'inputTextColor',
              type: 'text',
              defaultValue: '#333333',
            },
            {
              name: 'inputBorderColor',
              type: 'text',
              defaultValue: '#cccccc',
            },
            {
              name: 'labelColor',
              type: 'text',
              defaultValue: '#333333',
            },
            {
              name: 'placeholderColor',
              type: 'text',
              defaultValue: '#999999',
            },
            {
              name: 'submitButtonText',
              type: 'text',
              defaultValue: 'Submit',
            },
            {
              name: 'submitButtonBackgroundColor',
              type: 'text',
              defaultValue: '#007bff',
            },
            {
              name: 'submitButtonTextColor',
              type: 'text',
              defaultValue: '#ffffff',
            },
          ],
        },
      ],
    },
    // Background Images
    {
      name: 'backgroundImages',
      type: 'group',
      fields: [
        {
          name: 'desktopBackground',
          type: 'group',
          fields: [
            {
              name: 'mobile',
              type: 'text',
              defaultValue:
                'https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=420',
            },
            {
              name: 'tablet',
              type: 'text',
              defaultValue:
                'https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=800',
            },
            {
              name: 'desktop',
              type: 'text',
              defaultValue:
                'https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=1400',
            },
            {
              name: 'large',
              type: 'text',
              defaultValue:
                'https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=2200',
            },
          ],
        },
        {
          name: 'mapBackground',
          type: 'group',
          fields: [
            {
              name: 'mobile',
              type: 'text',
              defaultValue:
                'https://www.datocms-assets.com/105497/1693509356-10.jpg?auto=format,compress&w=800',
            },
            {
              name: 'tablet',
              type: 'text',
              defaultValue:
                'https://www.datocms-assets.com/105497/1693509356-10.jpg?auto=format,compress&w=800&q=100',
            },
            {
              name: 'desktop',
              type: 'text',
              defaultValue:
                'https://www.datocms-assets.com/105497/1693509356-10.jpg?auto=format,compress&w=1400&q=100',
            },
            {
              name: 'large',
              type: 'text',
              defaultValue:
                'https://www.datocms-assets.com/105497/1693509356-10.jpg?auto=format,compress&w=2200&q=100',
            },
          ],
        },
      ],
    },
    // Locations
    {
      name: 'locations',
      type: 'array',
      defaultValue: [
        {
          name: 'Orlando',
          address: '5728 Major Blvd, Suite 450, Orlando, FL 32819',
          phone: '+14073334300',
          phoneDisplay: '(407) 333-4300',
          url: '/orlando/',
          mapPosition: { left: '87%', top: '35%' },
          order: 1,
        },
        {
          name: 'Clermont',
          address: '2625 E Hwy 50, Suite 306, Clermont, FL 34711',
          phone: '+13525084644',
          phoneDisplay: '(352) 508-4644',
          url: '/clermont/',
          mapPosition: { left: '67%', top: '42%' },
          order: 2,
        },
        {
          name: 'Deland',
          address: '1890 South Woodland Blvd Suite 102, Deland, FL 32720',
          phone: '+13868010024',
          phoneDisplay: '(386) 801-0024',
          url: '/deland/',
          mapPosition: { left: '85.5181%', top: '17.8751%' },
          order: 3,
        },
        {
          name: 'Sarasota',
          address: '1407 First St, Sarasota, FL 34236',
          phone: '+19415992392',
          phoneDisplay: '941-599-2392',
          url: '/sarasota/',
          mapPosition: { left: '62.3363%', top: '72.5422%' },
          order: 4,
        },
        {
          name: 'Downtown Tampa',
          address: '105 E Jackson St, Tampa, FL 33602',
          phone: '+18134353474',
          phoneDisplay: '(813) 435-3474',
          url: '/downtown-tampa/',
          mapPosition: { left: '61%', top: '43%' },
          order: 5,
        },
        {
          name: 'St Petersburg',
          address: '1701 Central Ave N Ste 1739, St. Petersburg, FL 33713',
          phone: '+17273105120',
          phoneDisplay: '(727) 310-5120',
          url: '/st-petersburg/',
          googleMapsUrl:
            'https://www.google.com/maps/place/Goldfingers+Aesthetics+St.+Petersburg/@27.7716841,-82.6570198,17z/data=!3m1!4b1!4m6!3m5!1s0x88c2e3a22bd61d09:0x1b60bfdb32964d67!8m2!3d27.7716841!4d-82.6570198!16s%2Fg%2F11y677nkdd?entry=ttu',
          mapPosition: { left: '52.6608%', top: '48.7713%' },
          order: 6,
        },
        {
          name: 'Tampa (Northdale)',
          address: '3861 Northdale Blvd., Tampa, FL 33624',
          phone: '+18134351585',
          phoneDisplay: '(813) 435-1585',
          url: '/tampa/',
          mapPosition: { left: '61%', top: '43%' },
          order: 7,
        },
        {
          name: 'Downtown Orlando',
          address: '101 Lake Avenue. Suite 1. Orlando 32801',
          phone: '+14075054901',
          phoneDisplay: '(407) 505-4901',
          url: '/downtown-orlando/',
          mapPosition: { left: '', top: '' },
          order: 8,
        },
        {
          name: 'Wesley Chapel',
          address: '27440 Cashford Cir Ste 102, Wesley Chapel, FL 33544',
          phone: '+18132303778',
          phoneDisplay: '(813) 230-3778',
          url: '/wesley-chapel/',
          mapPosition: { left: '', top: '' },
          order: 9,
        },
        {
          name: 'Winter Garden',
          address: '1101 S Park Ave #500 Winter Garden, FL 34787',
          phone: '+14074031232',
          phoneDisplay: '407-403-1232',
          url: '/winter-garden/',
          mapPosition: { left: '', top: '' },
          order: 10,
        },
        {
          name: 'Winter Park',
          address: '400 W Fairbanks Ave, Winter Park, FL 32789',
          phone: '+14074624405',
          phoneDisplay: '(407) 462-4405',
          url: '/winter-park/',
          mapPosition: { left: '87%', top: '29%' },
          order: 11,
        },
      ],
      admin: {
        description: 'Drag to reorder locations',
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'address',
          type: 'textarea',
          required: true,
        },
        {
          name: 'phone',
          type: 'text',
          required: true,
        },
        {
          name: 'phoneDisplay',
          type: 'text',
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          required: true,
        },
        {
          name: 'googleMapsUrl',
          type: 'text',
          admin: {
            description: 'Optional Google Maps link',
          },
        },
        {
          name: 'mapPosition',
          type: 'group',
          fields: [
            {
              name: 'left',
              type: 'text',
              admin: {
                description: 'CSS left position (e.g., "87%")',
              },
            },
            {
              name: 'top',
              type: 'text',
              admin: {
                description: 'CSS top position (e.g., "35%")',
              },
            },
          ],
        },
        {
          name: 'order',
          type: 'number',
          required: true,
        },
      ],
    },
    // Legal Text and Links
    {
      name: 'legalSection',
      type: 'group',
      fields: [
        {
          name: 'messagingText',
          type: 'textarea',
          defaultValue:
            'Messaging frequency may vary. Message and data rates may apply. You can opt out any time by texting STOP. For assistance, text HELP or visit our website.',
        },
        {
          name: 'links',
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
        {
          name: 'textColor',
          type: 'text',
          defaultValue: '#666666',
        },
        {
          name: 'linkColor',
          type: 'text',
          defaultValue: '#007bff',
        },
      ],
    },
  ],
}
