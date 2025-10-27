import { CollectionConfig } from 'payload'

export const SatelliteLocationsPageComponent: CollectionConfig = {
  slug: 'satellite-locations-page-component',
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
      defaultValue: 'Satellite Locations Page Component',
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
        },
        {
          name: 'cssClasses',
          type: 'text',
          label: 'CSS Classes',
          defaultValue: 'mod_hero banner mobile-stack',
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
            {
              name: 'url',
              type: 'text',
              label: 'Image URL (if not uploading)',
              defaultValue:
                'https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg',
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
              label: 'Satellite Locations',
              url: '/satellite-locations/',
              ariaLabel: 'Breadcrumbs to help navigate the user',
            },
          ],
        },
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          required: true,
          defaultValue: 'Satellite Locations',
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
          defaultValue: 'Goldfinger Aesthetics by Salon Lofts',
        },
        {
          name: 'subtitleColor',
          type: 'text',
          label: 'Subtitle Color',
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
              defaultValue: 'Path going down to the beach',
            },
            {
              name: 'url',
              type: 'text',
              label: 'Image URL (if not uploading)',
              defaultValue:
                'https://www.datocms-assets.com/105497/1694698055-salon-loft-locations-banner.jpg',
            },
          ],
        },
      ],
    },
    // Location Sections
    {
      name: 'locationSections',
      type: 'array',
      label: 'Location Sections',
      admin: {
        description: 'Manage all location sections. Each section contains two location columns.',
      },
      fields: [
        {
          name: 'sectionName',
          type: 'text',
          label: 'Section Name (for admin reference)',
          required: true,
        },
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
          name: 'cssClasses',
          type: 'text',
          label: 'CSS Classes',
          defaultValue: 'mod_columns_two viewport container',
        },
        {
          name: 'rowCssClasses',
          type: 'text',
          label: 'Row CSS Classes',
          defaultValue: 'row pb-0',
        },
        {
          name: 'paddingBottom',
          type: 'select',
          label: 'Padding Bottom',
          options: [
            { label: 'None (pb-0)', value: 'pb-0' },
            { label: 'Default', value: '' },
            { label: 'Small (pb-20)', value: 'pb-20' },
            { label: 'Medium (pb-40)', value: 'pb-40' },
          ],
          defaultValue: 'pb-0',
        },
        {
          name: 'locations',
          type: 'array',
          label: 'Locations in This Section',
          admin: {
            description: 'Add up to 2 locations per section for side-by-side display',
          },
          maxRows: 2,
          fields: [
            {
              name: 'locationName',
              type: 'text',
              label: 'Location Name',
              required: true,
            },
            {
              name: 'animationClass',
              type: 'select',
              label: 'Animation Class',
              options: [
                { label: 'Fade In Left', value: 'fadeInLeft' },
                { label: 'Fade In Right', value: 'fadeInRight' },
                { label: 'Fade In Up', value: 'fadeInUp' },
                { label: 'None', value: '' },
              ],
              defaultValue: 'fadeInLeft',
            },
            {
              name: 'mapSettings',
              type: 'group',
              label: 'Map Settings',
              fields: [
                {
                  name: 'embedUrl',
                  type: 'textarea',
                  label: 'Google Maps Embed URL',
                  required: true,
                  admin: {
                    description: 'Full iframe src URL from Google Maps embed code',
                  },
                },
                {
                  name: 'width',
                  type: 'text',
                  label: 'Map Width',
                  defaultValue: '100%',
                },
                {
                  name: 'height',
                  type: 'number',
                  label: 'Map Height (px)',
                  defaultValue: 350,
                },
                {
                  name: 'grayscale',
                  type: 'checkbox',
                  label: 'Apply Grayscale Filter',
                  defaultValue: true,
                },
              ],
            },
            {
              name: 'contactInfo',
              type: 'group',
              label: 'Contact Information',
              fields: [
                {
                  name: 'headingPaddingTop',
                  type: 'text',
                  label: 'Heading Padding Top Class',
                  defaultValue: 'pt-20',
                },
                {
                  name: 'phone',
                  type: 'text',
                  label: 'Phone Number',
                  required: true,
                },
                {
                  name: 'phoneDisplay',
                  type: 'text',
                  label: 'Phone Display Format (optional)',
                  admin: {
                    description: 'Leave empty to use same as phone number',
                  },
                },
                {
                  name: 'address',
                  type: 'textarea',
                  label: 'Address',
                  required: true,
                },
                {
                  name: 'googleMapsUrl',
                  type: 'text',
                  label: 'Google Maps Link URL',
                  required: true,
                  admin: {
                    description: 'Full Google Maps URL for the address link',
                  },
                },
                {
                  name: 'email',
                  type: 'email',
                  label: 'Email Address',
                  admin: {
                    description: 'Optional - leave empty if not applicable',
                  },
                },
                {
                  name: 'additionalInfo',
                  type: 'textarea',
                  label: 'Additional Information',
                  admin: {
                    description: 'Optional additional contact details or notes',
                  },
                },
              ],
            },
          ],
        },
      ],
      defaultValue: [
        {
          sectionName: 'Section 1 - College Park & Lake Nona',
          show: true,
          cssClasses: 'mod_columns_two viewport container',
          rowCssClasses: 'row pb-0',
          paddingBottom: 'pb-0',
          locations: [
            {
              locationName: 'College Park',
              animationClass: 'fadeInLeft',
              mapSettings: {
                embedUrl:
                  'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d448505.24663790717!2d-81.389215!3d28.571347!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e77a6381afa571%3A0x96452472e49c5b12!2s2211%20Edgewater%20Dr%2C%20Orlando%2C%20FL%2032804!5e0!3m2!1sen!2sus!4v1694638932088!5m2!1sen!2sus',
                width: '100%',
                height: 350,
                grayscale: true,
              },
              contactInfo: {
                headingPaddingTop: 'pt-20',
                phone: '4074497648',
                phoneDisplay: '407-449-7648',
                address: '2211 Edgewater Dr. Orlando, FL 32804',
                googleMapsUrl: 'https://maps.google.com/?q=2211+Edgewater+Dr.+Orlando,+FL+32804',
              },
            },
            {
              locationName: 'Lake Nona',
              animationClass: 'fadeInRight',
              mapSettings: {
                embedUrl:
                  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.585741681301!2d-81.28040768864324!3d28.37137139579086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88dd89c0942823bf%3A0x7e96b43ba9533d7b!2s6982%20Lake%20Nona%20Blvd%20Suite%20110%2C%20Orlando%2C%20FL%2032827!5e0!3m2!1sen!2sus!4v1736790673241!5m2!1sen!2sus',
                width: '100%',
                height: 350,
                grayscale: true,
              },
              contactInfo: {
                headingPaddingTop: 'pt-20',
                phone: '4075377371',
                phoneDisplay: '407-537-7371',
                address: '6982 Lake Nona Blvd, Suite 110, Orlando FL 32827',
                googleMapsUrl: 'https://maps.app.goo.gl/FNe8ZzTwXMtiddW2A',
                email: 'goldfingersaestheticslakenona@gmail.com',
              },
            },
          ],
        },
        {
          sectionName: 'Section 2 - Largo & Oldsmar',
          show: true,
          cssClasses: 'mod_columns_two viewport container',
          rowCssClasses: 'row pb-0',
          paddingBottom: 'pb-0',
          locations: [
            {
              locationName: 'Largo',
              animationClass: 'fadeInLeft',
              mapSettings: {
                embedUrl:
                  'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d451360.89444228844!2d-82.781073!3d27.894086!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2fa5ed2d76be5%3A0xdb3c0d3132dc4685!2s10500%20Ulmerton%20Rd%20suite%20816%2C%20Largo%2C%20FL%2033771!5e0!3m2!1sen!2sus!4v1694639065715!5m2!1sen!2sus',
                width: '100%',
                height: 350,
                grayscale: true,
              },
              contactInfo: {
                headingPaddingTop: 'pt-20',
                phone: '7276160543',
                phoneDisplay: '727-616-0543',
                address: '10500 Ulmerton Rd. Suite 816 Largo, FL 33778',
                googleMapsUrl:
                  'https://maps.google.com/?q=10500+Ulmerton+Rd.+Suite+816+Largo,+FL+33778',
              },
            },
            {
              locationName: 'Oldsmar',
              animationClass: 'fadeInRight',
              mapSettings: {
                embedUrl:
                  'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d450711.8199646493!2d-82.699061!3d28.049342000000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2edae508aeed7%3A0x26b518ad8a2ad4da!2s3144%20Tampa%20Rd%20FL%203467%2C%20Oldsmar%2C%20FL%2034677!5e0!3m2!1sen!2sus!4v1694639111813!5m2!1sen!2sus',
                width: '100%',
                height: 350,
                grayscale: true,
              },
              contactInfo: {
                headingPaddingTop: 'pt-20',
                phone: '7276160867',
                phoneDisplay: '727-616-0867',
                address: '3144 Tampa Rd #1, Oldsmar, FL 34677',
                googleMapsUrl: 'https://maps.google.com/?q=3144+Tampa+Rd+%231,+Oldsmar,+FL+34677',
              },
            },
          ],
        },
        {
          sectionName: 'Section 3 - Savannah Park/Sanford & West Chase',
          show: true,
          cssClasses: 'mod_columns_two viewport container',
          rowCssClasses: 'row pb-0',
          paddingBottom: 'pb-0',
          locations: [
            {
              locationName: 'Savannah Park / Sanford',
              animationClass: 'fadeInLeft',
              mapSettings: {
                embedUrl:
                  'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d447504.698429384!2d-81.348329!3d28.805186!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e70d7afd39420b%3A0x1aed5e80449459f3!2s4720%20International%20Pkwy%2C%20Sanford%2C%20FL%2032771!5e0!3m2!1sen!2sus!4v1694639163010!5m2!1sen!2sus',
                width: '100%',
                height: 350,
                grayscale: true,
              },
              contactInfo: {
                headingPaddingTop: 'pt-20',
                phone: '4078485674',
                phoneDisplay: '407-848-5674',
                address: '4720 International Parkway. Sanford, FL 32771',
                googleMapsUrl:
                  'https://maps.google.com/?q=4720+International+Parkway.+Sanford,+FL+32771',
              },
            },
            {
              locationName: 'West Chase',
              animationClass: 'fadeInRight',
              mapSettings: {
                embedUrl:
                  'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d450736.4458815336!2d-82.590517!3d28.043466!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2ea5b0dc78563%3A0xeeed66c438721b85!2s9460%20W%20Linebaugh%20Ave%2C%20Westchase%2C%20FL%2033626!5e0!3m2!1sen!2sus!4v1694639198869!5m2!1sen!2sus',
                width: '100%',
                height: 350,
                grayscale: true,
              },
              contactInfo: {
                headingPaddingTop: 'pt-20',
                phone: '8133581705',
                phoneDisplay: '813-358-1705',
                address: '9460 W Linebaugh Ave. Tampa, FL 33626',
                googleMapsUrl: 'https://maps.google.com/?q=9460+W+Linebaugh+Ave.+Tampa,+FL+33626',
              },
            },
          ],
        },
        {
          sectionName: 'Section 4 - Winter Park East & Winter Springs',
          show: true,
          cssClasses: 'mod_columns_two viewport container',
          rowCssClasses: 'row',
          paddingBottom: '',
          locations: [
            {
              locationName: 'Winter Park East',
              animationClass: 'fadeInLeft',
              mapSettings: {
                embedUrl:
                  'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d448276.7036951487!2d-81.301125!3d28.624914!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e76fab614811f1%3A0xdec208981c10e3f9!2s2451%20Howell%20Market%20Ln%20%231115%2C%20Winter%20Park%2C%20FL%2032792!5e0!3m2!1sen!2sus!4v1694639241586!5m2!1sen!2sus',
                width: '100%',
                height: 350,
                grayscale: true,
              },
              contactInfo: {
                headingPaddingTop: 'pt-20',
                phone: '4076342694',
                phoneDisplay: '407-634-2694',
                address: '2451 Howell Market Lane, Suite 1115, Winter Park, FL 32792',
                googleMapsUrl:
                  'https://maps.google.com/?q=2451+Howell+Market+Lane,+Suite+1115,+Winter+Park,+FL+32792',
              },
            },
            {
              locationName: 'Winter Springs',
              animationClass: 'fadeInRight',
              mapSettings: {
                embedUrl:
                  'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d448192.4100543199!2d-81.267195!3d28.644648!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e76ec6df9bab9d%3A0x2bb897de65ad186!2s1468%20Tuskawilla%20Rd%20%231020%2C%20Winter%20Springs%2C%20FL%2032708!5e0!3m2!1sen!2sus!4v1694639280392!5m2!1sen!2sus',
                width: '100%',
                height: 350,
                grayscale: true,
              },
              contactInfo: {
                headingPaddingTop: 'pt-20',
                phone: '4079862630',
                phoneDisplay: '407-986-2630',
                address: '1468 Tuskawilla Rd, #1020, Winter Springs, FL 32708',
                googleMapsUrl:
                  'https://maps.google.com/?q=1468+Tuskawilla+Rd,+%231020,+Winter+Springs,+FL+32708',
                email: 'goldfingersaestheticswsprings@gmail.com',
              },
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
            { label: 'Location Section 1', value: 'locationSection1' },
            { label: 'Location Section 2', value: 'locationSection2' },
            { label: 'Location Section 3', value: 'locationSection3' },
            { label: 'Location Section 4', value: 'locationSection4' },
          ],
        },
      ],
      defaultValue: [
        { section: 'hero' },
        { section: 'locationSection1' },
        { section: 'locationSection2' },
        { section: 'locationSection3' },
        { section: 'locationSection4' },
      ],
    },
    // Global Styles
    {
      name: 'globalStyles',
      type: 'group',
      label: 'Global Styles',
      fields: [
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
          name: 'textColor',
          type: 'text',
          label: 'Default Text Color',
        },
        {
          name: 'linkColor',
          type: 'text',
          label: 'Link Color',
        },
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Default Background Color',
        },
        {
          name: 'headingColor',
          type: 'text',
          label: 'Default Heading Color',
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
          defaultValue: 'Satellite Locations | Goldfingers Aesthetics by Salon Lofts',
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          label: 'Meta Description',
          defaultValue:
            'Find a Goldfingers Aesthetics by Salon Lofts location near you. Serving College Park, Lake Nona, Largo, Oldsmar, Sanford, West Chase, Winter Park, and Winter Springs.',
        },
        {
          name: 'keywords',
          type: 'text',
          label: 'Keywords',
          defaultValue:
            'goldfingers locations, salon lofts, aesthetics near me, florida aesthetics, orlando locations',
        },
        {
          name: 'ogImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Open Graph Image',
        },
      ],
    },
    {
      name: 'isActive',
      type: 'checkbox',
      label: 'Active',
      defaultValue: true,
    },
  ],
  timestamps: true,
}
