import { CollectionConfig } from 'payload'

export const PrivacyPolicyPageComponent: CollectionConfig = {
  slug: 'privacy-policy-page-component',
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
      defaultValue: 'Privacy Policy Page Component',
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
            description: 'e.g., banner, mobile-stack',
          },
          defaultValue: 'banner mobile-stack',
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
              label: 'Privacy Policy',
              url: '/privacy-policy/',
              ariaLabel: 'Breadcrumbs to help navigate the user',
            },
          ],
        },
        {
          name: 'title',
          type: 'text',
          required: true,
          defaultValue: 'Privacy Policy',
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
              defaultValue: "Goldfinger's building",
            },
          ],
        },
      ],
    },
    // Privacy Content Section
    {
      name: 'privacyContentSection',
      type: 'group',
      label: 'Privacy Content Section',
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
            description: 'e.g., container, mod_privacy_policy',
          },
          defaultValue: 'container mod_privacy_policy',
        },
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Background Color',
          admin: {
            description: 'CSS color value',
          },
        },
        {
          name: 'textColor',
          type: 'text',
          label: 'Text Color',
          admin: {
            description: 'CSS color value',
          },
        },
        {
          name: 'paddingTop',
          type: 'text',
          label: 'Padding Top',
          admin: {
            description: 'CSS padding value (e.g., 60px, 4rem)',
          },
        },
        {
          name: 'paddingBottom',
          type: 'text',
          label: 'Padding Bottom',
          admin: {
            description: 'CSS padding value (e.g., 60px, 4rem)',
          },
        },
        {
          name: 'mainHeading',
          type: 'text',
          label: 'Main Heading',
          required: true,
          defaultValue: 'Privacy Policy',
        },
        {
          name: 'mainHeadingBold',
          type: 'checkbox',
          label: 'Bold Main Heading',
          defaultValue: true,
        },
        {
          name: 'mainHeadingColor',
          type: 'text',
          label: 'Main Heading Color',
          admin: {
            description: 'CSS color value',
          },
        },
        {
          name: 'mainHeadingFontSize',
          type: 'text',
          label: 'Main Heading Font Size',
          admin: {
            description: 'CSS font-size value',
          },
        },
        {
          name: 'websiteUrl',
          type: 'text',
          label: 'Website URL',
          admin: {
            description: 'Your website URL to be displayed in content',
          },
          defaultValue: 'https://www.goldfingersaesthetics.com',
        },
        {
          name: 'websiteDisplayText',
          type: 'text',
          label: 'Website Display Text',
          admin: {
            description: 'How the website URL appears in text',
          },
          defaultValue: 'https://www.goldfingersaesthetics.com',
        },
        {
          name: 'linkColor',
          type: 'text',
          label: 'Link Color',
          admin: {
            description: 'Color for links in content',
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
          name: 'privacyBlocks',
          type: 'array',
          label: 'Privacy Content Blocks',
          admin: {
            description: 'Drag to reorder privacy sections',
          },
          fields: [
            {
              name: 'blockType',
              type: 'select',
              label: 'Block Type',
              options: [
                { label: 'Paragraph', value: 'paragraph' },
                { label: 'Heading', value: 'heading' },
                { label: 'Unordered List', value: 'unorderedList' },
                { label: 'Ordered List', value: 'orderedList' },
                { label: 'Divider Line', value: 'divider' },
                { label: 'Empty Space', value: 'space' },
              ],
              required: true,
              defaultValue: 'paragraph',
            },
            {
              name: 'content',
              type: 'textarea',
              label: 'Content',
              admin: {
                description: 'Main text content for this block',
                condition: (data, siblingData) =>
                  siblingData?.blockType === 'paragraph' || siblingData?.blockType === 'heading',
              },
            },
            {
              name: 'headingLevel',
              type: 'select',
              label: 'Heading Level',
              options: [
                { label: 'H2', value: 'h2' },
                { label: 'H3', value: 'h3' },
                { label: 'H4', value: 'h4' },
              ],
              defaultValue: 'h2',
              admin: {
                condition: (data, siblingData) => siblingData?.blockType === 'heading',
              },
            },
            {
              name: 'bold',
              type: 'checkbox',
              label: 'Bold Text',
              defaultValue: false,
              admin: {
                condition: (data, siblingData) =>
                  siblingData?.blockType === 'paragraph' || siblingData?.blockType === 'heading',
              },
            },
            {
              name: 'italic',
              type: 'checkbox',
              label: 'Italic Text',
              defaultValue: false,
              admin: {
                condition: (data, siblingData) =>
                  siblingData?.blockType === 'paragraph' || siblingData?.blockType === 'heading',
              },
            },
            {
              name: 'fontWeight',
              type: 'text',
              label: 'Font Weight',
              admin: {
                description: 'CSS font-weight value (e.g., 400, 700)',
                condition: (data, siblingData) =>
                  siblingData?.blockType === 'paragraph' || siblingData?.blockType === 'heading',
              },
            },
            {
              name: 'textColor',
              type: 'text',
              label: 'Text Color',
              admin: {
                description: 'CSS color value',
                condition: (data, siblingData) =>
                  siblingData?.blockType === 'paragraph' || siblingData?.blockType === 'heading',
              },
            },
            {
              name: 'listItems',
              type: 'array',
              label: 'List Items',
              admin: {
                description: 'Drag to reorder list items',
                condition: (data, siblingData) =>
                  siblingData?.blockType === 'unorderedList' ||
                  siblingData?.blockType === 'orderedList',
              },
              fields: [
                {
                  name: 'text',
                  type: 'textarea',
                  required: true,
                },
                {
                  name: 'bold',
                  type: 'checkbox',
                  label: 'Bold Text',
                  defaultValue: false,
                },
                {
                  name: 'italic',
                  type: 'checkbox',
                  label: 'Italic Text',
                  defaultValue: false,
                },
                {
                  name: 'fontWeight',
                  type: 'text',
                  label: 'Font Weight',
                  admin: {
                    description: 'CSS font-weight value (e.g., 400, 700)',
                  },
                },
                {
                  name: 'nestedList',
                  type: 'array',
                  label: 'Nested List Items',
                  admin: {
                    description: 'Add nested list items (one level deep)',
                  },
                  fields: [
                    {
                      name: 'text',
                      type: 'textarea',
                      required: true,
                    },
                    {
                      name: 'bold',
                      type: 'checkbox',
                      label: 'Bold Text',
                      defaultValue: false,
                    },
                    {
                      name: 'italic',
                      type: 'checkbox',
                      label: 'Italic Text',
                      defaultValue: false,
                    },
                    {
                      name: 'fontWeight',
                      type: 'text',
                      label: 'Font Weight',
                    },
                  ],
                },
              ],
            },
            {
              name: 'listStyleType',
              type: 'text',
              label: 'List Style Type',
              admin: {
                description: 'CSS list-style-type',
                condition: (data, siblingData) =>
                  siblingData?.blockType === 'unorderedList' ||
                  siblingData?.blockType === 'orderedList',
              },
            },
            {
              name: 'listStartNumber',
              type: 'text',
              label: 'List Start Number',
              admin: {
                description: 'Starting number for ordered lists',
                condition: (data, siblingData) => siblingData?.blockType === 'orderedList',
              },
            },
            {
              name: 'marginTop',
              type: 'text',
              label: 'Margin Top',
              admin: {
                description: 'CSS margin value',
              },
            },
            {
              name: 'marginBottom',
              type: 'text',
              label: 'Margin Bottom',
              admin: {
                description: 'CSS margin value',
              },
            },
            {
              name: 'customClassName',
              type: 'text',
              label: 'Custom CSS Class',
            },
          ],
          defaultValue: [
            {
              blockType: 'paragraph',
              content:
                'Goldfingers Aesthetics ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy describes how we collect, use, disclose, and protect your information when you visit our website, https://www.goldfingersaesthetics.com ("Website"), or interact with us in any other manner.',
              fontWeight: '400',
            },
            {
              blockType: 'paragraph',
              content:
                "Your privacy is important to us. It is Goldfingers Aesthetics's policy to respect your privacy regarding any information we may collect from you across our website, https://www.goldfingersaesthetics.com, and other sites we own and operate.",
              fontWeight: '400',
            },
            {
              blockType: 'paragraph',
              content:
                "We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we're collecting it and how it will be used.",
              fontWeight: '400',
            },
            {
              blockType: 'paragraph',
              content:
                "We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we'll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.",
              fontWeight: '400',
            },
            {
              blockType: 'paragraph',
              content:
                "We don't share any personally identifying information publicly or with third-parties, except when required to by law.",
              fontWeight: '400',
            },
            {
              blockType: 'paragraph',
              content:
                'Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.',
              fontWeight: '400',
            },
            {
              blockType: 'paragraph',
              content:
                'You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.',
              fontWeight: '400',
            },
            {
              blockType: 'paragraph',
              content:
                'Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.',
              fontWeight: '400',
            },
            {
              blockType: 'paragraph',
              content: 'This policy is effective as of March 6, 2025.',
              fontWeight: '400',
            },
            {
              blockType: 'space',
            },
            {
              blockType: 'paragraph',
              content: 'Information We Collect',
              fontWeight: '400',
            },
            {
              blockType: 'paragraph',
              content: 'We may collect the following types of information from you:',
              fontWeight: '400',
            },
            {
              blockType: 'paragraph',
              content:
                'Personal Information: When you contact us through our Website, phone, or email, we may collect personal information that you provide, including your full name, phone number, email address, and mailing address.',
              bold: false,
              fontWeight: '400',
            },
            {
              blockType: 'paragraph',
              content:
                'Automatically Collected Information: When you visit our Website, we may automatically collect certain information about your device and usage, including IP address, browser type, operating system, referring URLs, and pages viewed.',
              fontWeight: '400',
            },
            {
              blockType: 'paragraph',
              content: 'How We Use Your Information',
              fontWeight: '400',
            },
            {
              blockType: 'paragraph',
              content: 'We use the information we collect for the following purposes:',
              fontWeight: '400',
            },
            {
              blockType: 'paragraph',
              content:
                'To Communicate with You: We use your contact information to respond to your inquiries, provide legal services, send administrative information, and keep you informed about your case or our services.',
              fontWeight: '400',
            },
            {
              blockType: 'paragraph',
              content:
                'Marketing and Promotional Communications: With your consent, we may use your information to send you updates, newsletters, or marketing communications via email, phone, or text message. You can opt out of receiving these communications at any time by following the instructions provided in the communication or contacting us directly.',
              fontWeight: '400',
            },
            {
              blockType: 'paragraph',
              content:
                'Legal Compliance: We may use your information to comply with applicable laws, regulations, or legal obligations, including responding to subpoenas, court orders, or legal requests.',
              fontWeight: '400',
            },
            {
              blockType: 'paragraph',
              content: 'Consent to Receive Text Messages',
              bold: true,
            },
            {
              blockType: 'paragraph',
              content:
                'You are not required to consent to receiving text messages from Goldfingers Aesthetics. By providing your phone number and opting in, you consent to receive text messages from Goldfingers Aesthetics regarding your inquiry, our services, or related legal matters. Message and data rates may apply. You can opt out of receiving text messages at any time by replying "STOP" to any text message your receive from us. Please note that opting out may limit our ability to communicate with you regarding your case or services.',
              fontWeight: '400',
            },
            {
              blockType: 'paragraph',
              content: 'Information Sharing and Disclosure',
              bold: true,
            },
            {
              blockType: 'paragraph',
              content:
                'We do not sell or rent your personal information to third parties. We do not sell, rent, release, or transfer your SMS consent or phone number to any third party for any third party marketing purposes. We may share your information in the following circumstances:',
              bold: false,
              fontWeight: '400',
            },
            {
              blockType: 'paragraph',
              content:
                'Service Providers: We may share your information with our service providers who perform services on our behalf, such as marketing, customer services, or technical support. These service providers are contractually obligated to protect your information and use it only for services they provide.',
              italic: true,
              fontWeight: '400',
            },
            {
              blockType: 'paragraph',
              content:
                'Legal Requirements: We may disclose your information if required by law, regulation, or legal process, or if we believe disclosure is necessary to protect our rights, property, or the safety of our users or others.',
              italic: true,
              fontWeight: '400',
            },
            {
              blockType: 'paragraph',
              content: 'Data Security',
              bold: true,
            },
            {
              blockType: 'paragraph',
              content:
                'We implement reasonable security measures to protect your personal information from unauthorized access, use, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.',
              fontWeight: '400',
            },
            {
              blockType: 'paragraph',
              content: 'Your Rights and Choices',
              fontWeight: '400',
            },
            {
              blockType: 'paragraph',
              content:
                'Opting Out: You may opt out of receiving marketing communications from us by following the instructions in those communications or contacting us directly. If you opt out, we may still send you non-promotional communications related to your legal services or our ongoing business relationship.',
              fontWeight: '400',
            },
            {
              blockType: 'paragraph',
              content:
                'Access and Update Information: You have the right to access, update, or correct your personal information. To do so, please contact us using the information provided below.',
              fontWeight: '400',
            },
            {
              blockType: 'paragraph',
              content: 'Third-Party Websites',
              bold: true,
            },
            {
              blockType: 'paragraph',
              content:
                'Our Website may contain links to third-party websites. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to review the privacy policies of any third-party websites you visit.',
              fontWeight: '400',
            },
            {
              blockType: 'paragraph',
              content: "Children's Privacy",
              bold: true,
            },
            {
              blockType: 'paragraph',
              content:
                'Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have inadvertently collected personal information from a child under 13, we will take steps to delete such information.',
              fontWeight: '400',
            },
            {
              blockType: 'paragraph',
              content: 'Changes to This Privacy Policy',
              bold: true,
            },
            {
              blockType: 'paragraph',
              content:
                'We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last Updated" date. We encourage you to review this Privacy Policy periodically for any updates.',
              fontWeight: '400',
            },
            {
              blockType: 'paragraph',
              content: 'Contact Us',
              bold: true,
            },
            {
              blockType: 'paragraph',
              content:
                'If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at:',
              fontWeight: '400',
            },
            {
              blockType: 'paragraph',
              content: 'Goldfingers Aesthetics',
              italic: true,
              fontWeight: '400',
            },
            {
              blockType: 'paragraph',
              content: '115 International Pkwy, Lake Mary, FL 32746',
              italic: true,
              fontWeight: '400',
            },
            {
              blockType: 'paragraph',
              content: '(407) 405-3388',
              italic: true,
              fontWeight: '400',
            },
            {
              blockType: 'space',
            },
            {
              blockType: 'divider',
            },
            {
              blockType: 'paragraph',
              content: 'Terms and Conditions',
              bold: true,
            },
            {
              blockType: 'orderedList',
              listItems: [
                {
                  text: 'Introduction',
                  bold: true,
                  italic: true,
                },
              ],
            },
            {
              blockType: 'paragraph',
              content:
                'Welcome to Goldfingers Aesthetics. By accessing or using our services, including receiving SMS communications, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with these terms, please do not engage with our services.',
              italic: true,
              fontWeight: '400',
            },
            {
              blockType: 'orderedList',
              listStartNumber: '2',
              listItems: [
                {
                  text: 'Consent for SMS Communication',
                  bold: true,
                  italic: true,
                },
              ],
            },
            {
              blockType: 'paragraph',
              content:
                'By providing your consent to receive SMS communications, you acknowledge and agree to receive text messages from Goldfingers Aesthetics at the phone number you provide. Information obtained as part of the SMS consent process will not be shared with third parties.',
              italic: true,
              fontWeight: '400',
            },
            {
              blockType: 'orderedList',
              listStartNumber: '3',
              listItems: [
                {
                  text: 'Types of SMS Communications',
                  bold: true,
                  italic: true,
                },
              ],
            },
            {
              blockType: 'paragraph',
              content:
                'If you have consented to receive text messages, you may receive SMS communications related to the following:',
              italic: true,
              fontWeight: '400',
            },
            {
              blockType: 'unorderedList',
              listItems: [
                {
                  text: 'Updates regarding your appointments, purchases, or other relevant information.',
                  italic: true,
                  fontWeight: '400',
                  nestedList: [
                    {
                      text: 'Updates regarding your appointments, purchases, or other relevant information.',
                      italic: true,
                      fontWeight: '400',
                    },
                  ],
                },
                {
                  text: 'Personalized services, updates, and promotional offers.',
                  italic: true,
                  fontWeight: '400',
                },
                {
                  text: 'Job Applicants: Information about your application status, onboarding materials, or other employment-related updates.',
                  italic: true,
                  fontWeight: '400',
                },
              ],
            },
            {
              blockType: 'orderedList',
              listStartNumber: '4',
              listItems: [
                {
                  text: 'Standard Messaging Disclosures',
                  italic: true,
                  fontWeight: '400',
                },
              ],
            },
            {
              blockType: 'unorderedList',
              listItems: [
                {
                  text: 'Message Frequency: Frequency of messages may vary depending on your interactions with us.',
                  italic: true,
                  fontWeight: '400',
                },
                {
                  text: 'Standard messaging rates will be charged by your mobile service provider.',
                  italic: true,
                  fontWeight: '400',
                },
                {
                  text: 'You can opt-out of receiving SMS messages at any time by texting "STOP" to the number from which you received the message.',
                  italic: true,
                  fontWeight: '400',
                },
              ],
            },
            {
              blockType: 'paragraph',
              content:
                'For assistance, text "HELP" " to any text message or contact us directly at (407) 405-3388, you can email us at marketing@goldfingersaesthetics.com or visit our privacy policy at https://www.goldfingersaesthetics.com/privacy-policy/.',
              italic: true,
              fontWeight: '400',
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
            { label: 'Privacy Content Section', value: 'privacyContent' },
          ],
        },
      ],
      defaultValue: [{ section: 'hero' }, { section: 'privacyContent' }],
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
          admin: {
            description: 'Margin between paragraphs',
          },
        },
        {
          name: 'listStyleType',
          type: 'text',
          label: 'List Style Type',
          admin: {
            description: 'CSS list-style-type (e.g., disc, circle, square, none)',
          },
        },
        {
          name: 'listMarginLeft',
          type: 'text',
          label: 'List Margin Left',
        },
        {
          name: 'orderedListStyleType',
          type: 'text',
          label: 'Ordered List Style Type',
          admin: {
            description: 'CSS list-style-type for numbered lists (e.g., decimal, lower-alpha)',
          },
          defaultValue: 'decimal',
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
          defaultValue: 'Privacy Policy - Goldfingers Aesthetics',
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          label: 'Meta Description',
          defaultValue:
            'Privacy Policy for Goldfingers Aesthetics. Learn how we collect, use, and protect your personal information.',
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
          defaultValue: 'privacy policy, data protection, privacy, goldfingers aesthetics',
        },
        {
          name: 'canonicalUrl',
          type: 'text',
          label: 'Canonical URL',
          defaultValue: 'https://www.goldfingersaesthetics.com/privacy-policy/',
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
        {
          name: 'linkIndicators',
          type: 'checkbox',
          label: 'Visual Link Indicators',
          admin: {
            description: 'Add visual indicators for external links',
          },
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
          name: 'mobileImageHeight',
          type: 'text',
          label: 'Mobile Image Height',
          admin: {
            description: 'Max height for images on mobile (e.g., 300px)',
          },
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
                { label: 'Privacy Content Section', value: 'privacyContent' },
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
        {
          name: 'preloadImages',
          type: 'checkbox',
          label: 'Preload Critical Images',
          admin: {
            description: 'Preload above-the-fold images for better performance',
          },
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
          name: 'enableTracking',
          type: 'checkbox',
          label: 'Enable Page Tracking',
          defaultValue: true,
        },
        {
          name: 'conversionTrackingEnabled',
          type: 'checkbox',
          label: 'Enable Conversion Tracking',
          defaultValue: false,
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
            { label: 'Auto (WebP with fallback)', value: 'auto' },
            { label: 'WebP', value: 'webp' },
            { label: 'AVIF', value: 'avif' },
            { label: 'JPEG', value: 'jpeg' },
            { label: 'PNG', value: 'png' },
          ],
          defaultValue: 'auto',
        },
        {
          name: 'responsiveImageSizes',
          type: 'text',
          label: 'Responsive Image Sizes',
          admin: {
            description: 'Comma-separated widths for responsive images (e.g., 420,800,1400)',
          },
          defaultValue: '420,630,800,1200,1400,2100',
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
          name: 'preloadCriticalAssets',
          type: 'checkbox',
          label: 'Preload Critical Assets',
          defaultValue: true,
        },
        {
          name: 'enableCDN',
          type: 'checkbox',
          label: 'Use CDN for Assets',
          defaultValue: true,
        },
        {
          name: 'cdnUrl',
          type: 'text',
          label: 'CDN Base URL',
          admin: {
            description: 'Base URL for CDN (e.g., https://cdn.example.com)',
          },
        },
      ],
    },
    // Legal Content Settings
    {
      name: 'legalContentSettings',
      type: 'group',
      label: 'Legal Content Settings',
      fields: [
        {
          name: 'companyName',
          type: 'text',
          label: 'Company Name',
          defaultValue: 'Goldfingers Aesthetics',
        },
        {
          name: 'effectiveDate',
          type: 'text',
          label: 'Effective Date',
          admin: {
            description: 'Date when policy became effective',
          },
          defaultValue: 'March 6, 2025',
        },
        {
          name: 'contactPhone',
          type: 'text',
          label: 'Contact Phone',
          defaultValue: '(407) 405-3388',
        },
        {
          name: 'contactEmail',
          type: 'text',
          label: 'Contact Email',
          defaultValue: 'marketing@goldfingersaesthetics.com',
        },
        {
          name: 'physicalAddress',
          type: 'textarea',
          label: 'Physical Address',
          defaultValue: '115 International Pkwy, Lake Mary, FL 32746',
        },
        {
          name: 'displayEffectiveDate',
          type: 'checkbox',
          label: 'Display Effective Date',
          defaultValue: true,
        },
        {
          name: 'displayContactInfo',
          type: 'checkbox',
          label: 'Display Contact Information',
          defaultValue: true,
        },
      ],
    },
    // Content Display Settings
    {
      name: 'contentDisplaySettings',
      type: 'group',
      label: 'Content Display Settings',
      fields: [
        {
          name: 'showTableOfContents',
          type: 'checkbox',
          label: 'Show Table of Contents',
          admin: {
            description: 'Display a table of contents for easy navigation',
          },
          defaultValue: false,
        },
        {
          name: 'tableOfContentsPosition',
          type: 'select',
          label: 'Table of Contents Position',
          options: [
            { label: 'Top', value: 'top' },
            { label: 'Sidebar (Left)', value: 'sidebar-left' },
            { label: 'Sidebar (Right)', value: 'sidebar-right' },
          ],
          defaultValue: 'top',
        },
        {
          name: 'enablePrintButton',
          type: 'checkbox',
          label: 'Enable Print Button',
          defaultValue: true,
        },
        {
          name: 'enableDownloadPDF',
          type: 'checkbox',
          label: 'Enable Download as PDF',
          defaultValue: false,
        },
        {
          name: 'showLastModified',
          type: 'checkbox',
          label: 'Show Last Modified Date',
          defaultValue: true,
        },
        {
          name: 'enableSmoothScroll',
          type: 'checkbox',
          label: 'Enable Smooth Scrolling',
          admin: {
            description: 'Smooth scroll to sections when clicking TOC',
          },
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
