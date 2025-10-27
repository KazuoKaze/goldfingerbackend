import { CollectionConfig } from 'payload'

export const ContactComponent: CollectionConfig = {
  slug: 'contact-component',
  labels: {
    singular: 'Contact Component',
    plural: 'Contact Components',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'updatedAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Contact Page',
    },
    {
      name: 'contactSection',
      type: 'group',
      label: 'Contact Section',
      fields: [
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Background Color',
          defaultValue: '#ffffff',
          admin: {
            description: 'CSS color value (hex, rgb, etc.)',
          },
        },
        {
          name: 'infoSection',
          type: 'group',
          label: 'Info Section',
          fields: [
            {
              name: 'heading',
              type: 'text',
              label: 'Heading',
              defaultValue: 'Contact Us',
            },
            {
              name: 'headingColor',
              type: 'text',
              label: 'Heading Color',
              defaultValue: '#000000',
            },
            {
              name: 'phoneNumber',
              type: 'text',
              label: 'Phone Number',
              defaultValue: '(407) 333-4300',
            },
            {
              name: 'phoneColor',
              type: 'text',
              label: 'Phone Color',
              defaultValue: '#000000',
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
                  defaultValue: '#000000',
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
        {
          name: 'formSection',
          type: 'group',
          label: 'Form Section',
          fields: [
            {
              name: 'backgroundColor',
              type: 'text',
              label: 'Form Background Color',
              defaultValue: '#f9f9f9',
            },
            {
              name: 'subject',
              type: 'text',
              label: 'Form Subject',
              defaultValue: 'Contact Form',
            },
            {
              name: 'redirectUrl',
              type: 'text',
              label: 'Success Redirect URL',
              defaultValue: '/contact/thank-you/',
            },
            {
              name: 'fields',
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
                  options: [
                    { label: 'Text', value: 'text' },
                    { label: 'Email', value: 'email' },
                    { label: 'Tel', value: 'tel' },
                    { label: 'Textarea', value: 'textarea' },
                    { label: 'Select', value: 'select' },
                    { label: 'Checkbox', value: 'checkbox' },
                    { label: 'Hidden', value: 'hidden' },
                  ],
                  required: true,
                },
                {
                  name: 'name',
                  type: 'text',
                  label: 'Field Name',
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
                  label: 'Placeholder',
                },
                {
                  name: 'required',
                  type: 'checkbox',
                  label: 'Required',
                  defaultValue: false,
                },
                {
                  name: 'options',
                  type: 'array',
                  label: 'Options (for select fields)',
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
                  name: 'defaultValue',
                  type: 'text',
                  label: 'Default Value',
                },
                {
                  name: 'rows',
                  type: 'number',
                  label: 'Rows (for textarea)',
                  admin: {
                    condition: (data, siblingData) => siblingData?.fieldType === 'textarea',
                  },
                },
                {
                  name: 'cols',
                  type: 'number',
                  label: 'Columns (for textarea)',
                  admin: {
                    condition: (data, siblingData) => siblingData?.fieldType === 'textarea',
                  },
                },
              ],
              defaultValue: [
                {
                  fieldType: 'text',
                  name: 'first_name',
                  label: 'First Name*',
                  placeholder: 'First Name*',
                  required: true,
                },
                {
                  fieldType: 'text',
                  name: 'last_name',
                  label: 'Last Name*',
                  placeholder: 'Last Name*',
                  required: true,
                },
                {
                  fieldType: 'tel',
                  name: 'phone',
                  label: 'Phone*',
                  placeholder: 'Phone*',
                  required: true,
                },
                {
                  fieldType: 'email',
                  name: 'email',
                  label: 'Email*',
                  placeholder: 'Email*',
                  required: true,
                },
                {
                  fieldType: 'select',
                  name: 'location_id',
                  label: 'Location*',
                  placeholder: 'Location*',
                  required: true,
                  options: [],
                },
                {
                  fieldType: 'select',
                  name: 'what_service_are_you_interested_in',
                  label: 'What Service Are You Interested In?*',
                  placeholder: 'What Service Are You Interested In?*',
                  required: true,
                  options: [
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
                  name: 'commentsquestions',
                  label: 'Comments/Questions',
                  placeholder: 'Comments/Questions',
                  rows: 6,
                  cols: 48,
                },
                {
                  fieldType: 'checkbox',
                  name: 'optin_for_sms_texting',
                  label: 'Opt-In For SMS Texting',
                  defaultValue: 'Yes',
                },
                {
                  fieldType: 'checkbox',
                  name: 'by_completing_this_form_you_are_giving_us_permission_to_followup_by_phone_email_or_text',
                  label:
                    'By completing this form, you are giving us permission to follow-up by phone, email or text.',
                  required: true,
                  defaultValue: 'Yes',
                },
              ],
            },
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
                  defaultValue: '#000000',
                },
                {
                  name: 'textColor',
                  type: 'text',
                  defaultValue: '#ffffff',
                },
              ],
            },
            {
              name: 'privacyText',
              type: 'textarea',
              label: 'Privacy Notice Text',
              defaultValue:
                'Messaging frequency may vary. Message and data rates may apply. You can opt out any time by texting STOP. For assistance, text HELP or visit our website at Goldfingers Aesthetics. Visit Privacy Policy and Terms and Conditions.',
            },
            {
              name: 'privacyLinks',
              type: 'array',
              label: 'Privacy Links',
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
              ],
              defaultValue: [
                {
                  text: 'Goldfingers Aesthetics',
                  url: 'https://goldfingersaesthetics.com',
                },
                {
                  text: 'Privacy Policy',
                  url: 'https://goldfingersaesthetics.com/privacy-policy',
                },
                {
                  text: 'Terms and Conditions',
                  url: 'https://www.goldfingersaesthetics.com/terms-and-conditions/',
                },
              ],
            },
          ],
        },
        {
          name: 'backgroundImages',
          type: 'group',
          label: 'Background Images',
          fields: [
            {
              name: 'desktopImage',
              type: 'upload',
              relationTo: 'media',
              label: 'Desktop Background Image',
            },
            {
              name: 'mobileImage',
              type: 'upload',
              relationTo: 'media',
              label: 'Mobile Background Image',
            },
          ],
        },
      ],
    },
    {
      name: 'locationsBanner',
      type: 'group',
      label: 'Locations Banner Section',
      fields: [
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Background Color',
          defaultValue: '#ffffff',
        },
        {
          name: 'heading',
          type: 'group',
          fields: [
            {
              name: 'smallText',
              type: 'text',
              defaultValue: 'Our Locations',
            },
            {
              name: 'mainText',
              type: 'text',
              defaultValue: 'Find the Goldfingers Aesthetics Location Closest to You',
            },
            {
              name: 'color',
              type: 'text',
              defaultValue: '#000000',
            },
          ],
        },
        {
          name: 'locations',
          type: 'array',
          label: 'Locations',
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
              name: 'slug',
              type: 'text',
              label: 'URL Slug',
              required: true,
            },
            {
              name: 'mapPosition',
              type: 'group',
              label: 'Map Pin Position',
              fields: [
                {
                  name: 'left',
                  type: 'text',
                  label: 'Left Position (%)',
                },
                {
                  name: 'top',
                  type: 'text',
                  label: 'Top Position (%)',
                },
              ],
            },
          ],
          defaultValue: [
            {
              name: 'Clearwater',
              address: '2745 Fl-580 Suite 101, Clearwater, FL 33761',
              phone: '(727) 378-9338',
              slug: '/clearwater/',
              mapPosition: { left: '53%', top: '45%' },
            },
            {
              name: 'Clermont',
              address: '861 Oakley Seaver Dr., Suite B, Clermont, FL 34711',
              phone: '(407) 461-8193',
              slug: '/clermont/',
              mapPosition: { left: '83%', top: '32%' },
            },
            {
              name: 'Daytona Beach',
              address: '244 Seabreeze Blvd, Daytona Beach, FL 32118',
              phone: '(407) 756-9062',
              slug: '/daytona-beach/',
              mapPosition: { left: '99%', top: '17%' },
            },
            {
              name: 'Lady Lake / The Villages',
              address: '8550 N. East 138th Lane, Bldg 600, Lady Lake, FL 32159',
              phone: '(352) 707-0707',
              slug: '/the-villages/',
              mapPosition: { left: '75%', top: '24%' },
            },
            {
              name: 'Lake Mary',
              address: '115 International Pkwy Lake Mary, FL 32746',
              phone: '(407) 405-3388',
              slug: '/lake-mary/',
              mapPosition: { left: '93%', top: '28%' },
            },
            {
              name: 'Lake Nona',
              address: '6982 Lake Nona Blvd, Suite 110, Orlando FL 32827',
              phone: '(407) 590-6274',
              slug: '/lake-nona/',
              mapPosition: {},
            },
            {
              name: 'Longwood',
              address: '165 Wekiva Springs Road, Suite C-135, Longwood, FL 32779',
              phone: '(407) 492-3169',
              slug: '/longwood/',
              mapPosition: { left: '90%', top: '31%' },
            },
            {
              name: 'Mount Dora',
              address: '18770 US-441, Mount Dora, FL 32757',
              phone: '(352) 707-0707',
              slug: '/mount-dora/',
              mapPosition: { left: '84%', top: '27%' },
            },
            {
              name: 'New Smyrna Beach',
              address: 'State Rd. 44 Unit 1976, New Smyrna Beach, FL 32168',
              phone: '(407) 547-5891',
              slug: '/new-smyrna-beach/',
              mapPosition: { left: '105%', top: '29%' },
            },
            {
              name: 'Ocala',
              address: '303 SE 17 Street, Unit 309, Ocala FL 34471',
              phone: '(352) 707-0707',
              slug: '/ocala/',
              mapPosition: { left: '72%', top: '19%' },
            },
            {
              name: 'Orlando / Dr. Phillips',
              address: '7653 Turkey Lake Rd., Orlando, FL 32819',
              phone: '(407) 821-4983',
              slug: '/orlando/',
              mapPosition: { left: '89%', top: '34%' },
            },
            {
              name: 'Port Orange',
              address: '851 Dunlawton Ave Suite 103, Port Orange, FL 32127',
              phone: '(386) 801-0024',
              slug: '/port-orange/',
              mapPosition: { left: '103%', top: '22%' },
            },
            {
              name: 'Sarasota',
              address: '1407 First St Sarasota, FL 34236',
              phone: '941-599-2392',
              slug: '/sarasota/',
              mapPosition: { left: '62.3363%', top: '72.5422%' },
            },
            {
              name: 'Downtown Tampa',
              address: '105 E Jackson St, Tampa, FL 33602',
              phone: '(813) 435-3474',
              slug: '/downtown-tampa/',
              mapPosition: { left: '61%', top: '43%' },
            },
            {
              name: 'St Petersburg',
              address: '1701 Central Ave N Ste 1739, St. Petersburg, FL 33713',
              phone: '(727) 310-5120',
              slug: '/st-petersburg/',
              mapPosition: { left: '52.6608%', top: '48.7713%' },
            },
            {
              name: 'Tampa (Northdale)',
              address: '3861 Northdale Blvd., Tampa, FL 33624',
              phone: '(813) 435-1585',
              slug: '/tampa/',
              mapPosition: { left: '61%', top: '43%' },
            },
            {
              name: 'Downtown Orlando',
              address: '101 Lake Avenue. Suite 1. Orlando 32801',
              phone: '(407) 505-4901',
              slug: '/downtown-orlando/',
              mapPosition: {},
            },
            {
              name: 'Wesley Chapel',
              address: '27440 Cashford Cir Ste 102 Wesley Chapel, FL 33544',
              phone: '(813) 230-3778',
              slug: '/wesley-chapel/',
              mapPosition: {},
            },
            {
              name: 'Winter Garden',
              address: '1101 S Park Ave #500 Winter Garden, FL 34787',
              phone: '407-403-1232',
              slug: '/winter-garden/',
              mapPosition: {},
            },
            {
              name: 'Winter Park',
              address: '400 W Fairbanks Ave, Winter Park, FL 32789',
              phone: '(407) 462-4405',
              slug: '/winter-park/',
              mapPosition: { left: '87%', top: '29%' },
            },
          ],
        },
        {
          name: 'mapImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Map Background Image',
        },
      ],
    },
  ],
}
