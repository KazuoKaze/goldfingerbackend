import { CollectionConfig } from 'payload'

export const FooterComponent: CollectionConfig = {
  slug: 'footerComponent',
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
      defaultValue: 'Footer Component',
    },
    // CTA Sub Section
    {
      name: 'ctaSubSection',
      type: 'group',
      label: 'CTA Sub Section',
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
          defaultValue: 'partial_cta_sub wow fadeInDown viewport',
        },
        {
          name: 'mainHeading',
          type: 'group',
          label: 'Main Heading',
          fields: [
            {
              name: 'smallText',
              type: 'text',
              label: 'Small Text',
              defaultValue: 'enhance your natural beauty',
            },
            {
              name: 'mainText',
              type: 'text',
              label: 'Main Text',
              defaultValue: 'Schedule a Consultation',
            },
            {
              name: 'link',
              type: 'text',
              label: 'Link URL',
              defaultValue: '/contact/',
            },
            {
              name: 'color',
              type: 'text',
              label: 'Heading Color',
            },
          ],
        },
        {
          name: 'testimonial',
          type: 'group',
          label: 'Testimonial',
          fields: [
            {
              name: 'text',
              type: 'textarea',
              label: 'Testimonial Text',
              defaultValue:
                "I'm always treated as a member of their family. They're very helpful and honest. I would recommend my friends to get any treatment here with confidence!",
            },
            {
              name: 'isItalic',
              type: 'checkbox',
              label: 'Italic Style',
              defaultValue: true,
            },
            {
              name: 'color',
              type: 'text',
              label: 'Text Color',
            },
          ],
        },
        {
          name: 'ctaButton',
          type: 'group',
          label: 'CTA Button',
          fields: [
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
              name: 'className',
              type: 'text',
              label: 'Button Class',
              defaultValue: 'btn',
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
          ],
        },
        {
          name: 'mediaSection',
          type: 'group',
          label: 'Media Section',
          fields: [
            {
              name: 'titleLine1',
              type: 'text',
              label: 'Title Line 1',
              defaultValue: 'Enhance Your',
            },
            {
              name: 'titleLine2',
              type: 'text',
              label: 'Title Line 2',
              defaultValue: 'Natural Beauty',
            },
            {
              name: 'desktopImage',
              type: 'group',
              label: 'Desktop Image',
              fields: [
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Upload Image',
                },
                {
                  name: 'imageUrl',
                  type: 'text',
                  label: 'Image URL (if not uploading)',
                  defaultValue: 'https://www.datocms-assets.com/105497/1720632514-subcta.jpg',
                },
                {
                  name: 'alt',
                  type: 'text',
                  label: 'Alt Text',
                  defaultValue: 'Contact us media',
                },
                {
                  name: 'width',
                  type: 'number',
                  label: 'Width',
                  defaultValue: 1742,
                },
                {
                  name: 'height',
                  type: 'number',
                  label: 'Height',
                  defaultValue: 1742,
                },
              ],
            },
            {
              name: 'mobileImage',
              type: 'group',
              label: 'Mobile Image',
              fields: [
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Upload Image',
                },
                {
                  name: 'imageUrl',
                  type: 'text',
                  label: 'Image URL (if not uploading)',
                  defaultValue:
                    'https://www.datocms-assets.com/105497/1694641245-cta-mobile-bgd.jpg',
                },
                {
                  name: 'alt',
                  type: 'text',
                  label: 'Alt Text',
                  defaultValue: 'Contact us media',
                },
                {
                  name: 'width',
                  type: 'number',
                  label: 'Width',
                  defaultValue: 1742,
                },
                {
                  name: 'height',
                  type: 'number',
                  label: 'Height',
                  defaultValue: 1742,
                },
              ],
            },
          ],
        },
      ],
    },
    // Footer Main Section
    {
      name: 'footerMainSection',
      type: 'group',
      label: 'Footer Main Section',
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
          defaultValue: 'partial_footer container',
        },
        // Fixed CTA
        {
          name: 'fixedCta',
          type: 'group',
          label: 'Fixed CTA Buttons',
          fields: [
            {
              name: 'show',
              type: 'checkbox',
              label: 'Show Fixed CTA',
              defaultValue: true,
            },
            {
              name: 'buttons',
              type: 'array',
              label: 'Buttons',
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
                  name: 'phoneNumber',
                  type: 'text',
                  label: 'Phone Number (for tel: links)',
                  admin: {
                    description: 'Format: +14073334300',
                  },
                },
                {
                  name: 'displayNumber',
                  type: 'text',
                  label: 'Display Number',
                  admin: {
                    description: 'Format: (407) 333-4300',
                  },
                },
                {
                  name: 'className',
                  type: 'text',
                  label: 'CSS Class',
                  defaultValue: 'btn',
                },
                {
                  name: 'ariaLabel',
                  type: 'text',
                  label: 'ARIA Label',
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
              ],
              defaultValue: [
                {
                  text: 'Contact Us',
                  url: '/contact/',
                  className: 'btn',
                  ariaLabel: 'Contact Goldfingers Aesthetics',
                },
                {
                  text: '(407) 333-4300',
                  url: 'tel:+14073334300',
                  phoneNumber: '+14073334300',
                  displayNumber: '(407) 333-4300',
                  className: 'tel ppc-href btn',
                  ariaLabel: 'Call Goldfingers Aesthetics on the phone',
                },
              ],
            },
          ],
        },
        // Navigation Links
        {
          name: 'navigationLinks',
          type: 'array',
          label: 'Navigation Links',
          admin: {
            description: 'Drag to reorder navigation links',
          },
          fields: [
            {
              name: 'text',
              type: 'text',
              label: 'Link Text',
              required: true,
            },
            {
              name: 'url',
              type: 'text',
              label: 'Link URL',
              required: true,
            },
            {
              name: 'isActive',
              type: 'checkbox',
              label: 'Is Active',
              defaultValue: false,
            },
            {
              name: 'isMegaMenu',
              type: 'checkbox',
              label: 'Is Mega Menu',
              defaultValue: false,
            },
            {
              name: 'color',
              type: 'text',
              label: 'Text Color',
            },
          ],
          defaultValue: [
            { text: 'Home', url: '/', isActive: true },
            { text: 'About', url: '/about/' },
            { text: 'Gallery', url: '/gallery/' },
            { text: 'Medical Spa', url: '/medical-spa/', isMegaMenu: true },
            { text: 'Plastic Surgery', url: '/plastic-surgery/' },
            { text: 'Specials & Rewards', url: '/specials-and-rewards/' },
            { text: 'Financing', url: '/financing/' },
            { text: 'Contact', url: '/contact/' },
            { text: 'Training', url: '/training/' },
          ],
        },
        // Social Media Links
        {
          name: 'socialLinks',
          type: 'array',
          label: 'Social Media Links',
          admin: {
            description: 'Drag to reorder social links',
          },
          fields: [
            {
              name: 'platform',
              type: 'select',
              label: 'Platform',
              required: true,
              options: [
                { label: 'Instagram', value: 'instagram' },
                { label: 'Facebook', value: 'facebook' },
                { label: 'Youtube', value: 'youtube' },
                { label: 'Twitter', value: 'twitter' },
                { label: 'LinkedIn', value: 'linkedin' },
                { label: 'TikTok', value: 'tiktok' },
              ],
            },
            {
              name: 'url',
              type: 'text',
              label: 'URL',
              required: true,
            },
            {
              name: 'title',
              type: 'text',
              label: 'Title',
            },
            {
              name: 'ariaLabel',
              type: 'text',
              label: 'ARIA Label',
            },
            {
              name: 'iconClass',
              type: 'text',
              label: 'Icon Class',
            },
          ],
          defaultValue: [
            {
              platform: 'instagram',
              url: 'https://www.instagram.com/goldfingers.aesthetics/',
              title: 'Goldfingers Aesthetics on Instagram',
              ariaLabel: 'Goldfingers Aesthetics on Instagram opens in a new tab',
              iconClass: 'instagram-icon',
            },
            {
              platform: 'facebook',
              url: 'https://www.facebook.com/goldfingersaesthetics/',
              title: 'Goldfingers Aesthetics on Facebook',
              ariaLabel: 'Goldfingers Aesthetics on Facebook opens in a new tab',
              iconClass: 'facebook-icon',
            },
            {
              platform: 'youtube',
              url: 'https://www.youtube.com/channel/UCGb3ma3A8U69pmhGnccOtfQ',
              title: 'Goldfingers Aesthetics on Youtube',
              ariaLabel: 'Goldfingers Aesthetics on Youtube opens in a new tab',
              iconClass: 'youtube-icon',
            },
          ],
        },
        // Logo Section
        {
          name: 'logo',
          type: 'group',
          label: 'Logo',
          fields: [
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              label: 'Logo Image',
            },
            {
              name: 'imageUrl',
              type: 'text',
              label: 'Logo URL (if not uploading)',
              defaultValue: 'https://www.datocms-assets.com/105497/1692813211-logo-footer.svg',
            },
            {
              name: 'alt',
              type: 'text',
              label: 'Alt Text',
              defaultValue: 'Goldfingers Aesthetics Website Logo',
            },
            {
              name: 'width',
              type: 'number',
              label: 'Width',
              defaultValue: 232,
            },
            {
              name: 'height',
              type: 'number',
              label: 'Height',
              defaultValue: 65,
            },
            {
              name: 'linkUrl',
              type: 'text',
              label: 'Logo Link URL',
              defaultValue: '/',
            },
          ],
        },
        // Reviews Section
        {
          name: 'reviews',
          type: 'group',
          label: 'Reviews Section',
          fields: [
            {
              name: 'show',
              type: 'checkbox',
              label: 'Show Reviews',
              defaultValue: true,
            },
            {
              name: 'rating',
              type: 'number',
              label: 'Star Rating',
              min: 0,
              max: 5,
              defaultValue: 4.8,
            },
            {
              name: 'totalReviews',
              type: 'number',
              label: 'Total Reviews',
              defaultValue: 71,
            },
            {
              name: 'reviewsUrl',
              type: 'text',
              label: 'Reviews Link URL',
              defaultValue: '/about/testimonials/',
            },
            {
              name: 'ariaLabel',
              type: 'text',
              label: 'ARIA Label',
              defaultValue: 'Goldfingers Aesthetics reviews',
            },
            {
              name: 'textColor',
              type: 'text',
              label: 'Text Color',
            },
            {
              name: 'starColor',
              type: 'text',
              label: 'Star Color',
            },
          ],
        },
        // Contact Info Section
        {
          name: 'contactInfo',
          type: 'group',
          label: 'Contact Info',
          fields: [
            {
              name: 'heading',
              type: 'text',
              label: 'Heading',
              defaultValue: 'Contact Us',
            },
            {
              name: 'phoneNumber',
              type: 'text',
              label: 'Phone Number',
              defaultValue: '+14073334300',
            },
            {
              name: 'displayNumber',
              type: 'text',
              label: 'Display Number',
              defaultValue: '(407) 333-4300',
            },
            {
              name: 'locationText',
              type: 'text',
              label: 'Location Text',
              defaultValue: 'Find a location',
            },
            {
              name: 'locationUrl',
              type: 'text',
              label: 'Location URL',
              defaultValue: '/locations/',
            },
            {
              name: 'headingColor',
              type: 'text',
              label: 'Heading Color',
            },
            {
              name: 'textColor',
              type: 'text',
              label: 'Text Color',
            },
          ],
        },
      ],
    },
    // Trademark Section
    {
      name: 'trademarkSection',
      type: 'group',
      label: 'Trademark Section',
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
          name: 'copyrightText',
          type: 'text',
          label: 'Copyright Text',
          defaultValue: '© Goldfingers Aesthetics.',
        },
        {
          name: 'rightsReservedText',
          type: 'text',
          label: 'Rights Reserved Text',
          defaultValue: 'All Rights Reserved.',
        },
        {
          name: 'legalLinks',
          type: 'array',
          label: 'Legal Links',
          admin: {
            description: 'Drag to reorder legal links',
          },
          fields: [
            {
              name: 'text',
              type: 'text',
              label: 'Link Text',
              required: true,
            },
            {
              name: 'url',
              type: 'text',
              label: 'Link URL',
              required: true,
            },
            {
              name: 'color',
              type: 'text',
              label: 'Text Color',
            },
          ],
          defaultValue: [
            { text: 'Terms & Conditions', url: '/terms-and-conditions/' },
            { text: 'Privacy Policy', url: '/privacy-policy/' },
            { text: 'Sitemap', url: '/sitemap/' },
          ],
        },
        {
          name: 'designCredit',
          type: 'group',
          label: 'Design Credit',
          fields: [
            {
              name: 'show',
              type: 'checkbox',
              label: 'Show Design Credit',
              defaultValue: true,
            },
            {
              name: 'url',
              type: 'text',
              label: 'URL',
              defaultValue: 'https://www.studio3marketing.com/',
            },
            {
              name: 'mainText',
              type: 'text',
              label: 'Main Text',
              defaultValue: 'Website Design: Studio III Marketing',
            },
            {
              name: 'subText',
              type: 'text',
              label: 'Sub Text',
              defaultValue: 'Digital Marketing by Orlando Medical Marketing',
            },
            {
              name: 'ariaLabel',
              type: 'text',
              label: 'ARIA Label',
              defaultValue: 'Studio 3 Marketing website opens in a new tab',
            },
            {
              name: 'textColor',
              type: 'text',
              label: 'Text Color',
            },
          ],
        },
      ],
    },
    // Disclaimer Section
    {
      name: 'disclaimerSection',
      type: 'group',
      label: 'Accessibility Disclaimer',
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
          label: 'Heading',
          defaultValue: 'Accessibility:',
        },
        {
          name: 'text',
          type: 'textarea',
          label: 'Disclaimer Text',
          defaultValue:
            'If you are vision-impaired or have some other impairment covered by the Americans with Disabilities Act or a similar law, and you wish to discuss potential accommodations related to using this website, please contact our Accessibility Manager at',
        },
        {
          name: 'phoneNumber',
          type: 'text',
          label: 'Phone Number',
          defaultValue: '+14073334300',
        },
        {
          name: 'displayNumber',
          type: 'text',
          label: 'Display Number',
          defaultValue: '(407) 333-4300',
        },
      ],
    },
    // Sticky Form
    {
      name: 'stickyForm',
      type: 'group',
      label: 'Sticky Form Button',
      fields: [
        {
          name: 'show',
          type: 'checkbox',
          label: 'Show Sticky Form',
          defaultValue: true,
        },
        {
          name: 'text',
          type: 'text',
          label: 'Button Text',
          defaultValue: 'Contact Us',
        },
        {
          name: 'url',
          type: 'text',
          label: 'Button URL',
          defaultValue: '/contact/',
        },
        {
          name: 'ariaLabel',
          type: 'text',
          label: 'ARIA Label',
          defaultValue: 'Contact Us',
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
            { label: 'CTA Sub Section', value: 'ctaSub' },
            { label: 'Footer Main Section', value: 'footerMain' },
            { label: 'Trademark Section', value: 'trademark' },
            { label: 'Disclaimer Section', value: 'disclaimer' },
            { label: 'Sticky Form', value: 'stickyForm' },
          ],
        },
      ],
      defaultValue: [
        { section: 'ctaSub' },
        { section: 'footerMain' },
        { section: 'trademark' },
        { section: 'disclaimer' },
        { section: 'stickyForm' },
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
        },
        {
          name: 'containerPadding',
          type: 'text',
          label: 'Container Padding',
        },
        {
          name: 'sectionSpacing',
          type: 'text',
          label: 'Section Spacing',
        },
        {
          name: 'fontFamily',
          type: 'text',
          label: 'Font Family',
        },
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
          name: 'linkColor',
          type: 'text',
          label: 'Link Color',
        },
        {
          name: 'linkHoverColor',
          type: 'text',
          label: 'Link Hover Color',
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
          name: 'h2FontSize',
          type: 'text',
          label: 'H2 Font Size',
        },
        {
          name: 'h3FontSize',
          type: 'text',
          label: 'H3 Font Size',
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
        },
        {
          name: 'padding',
          type: 'text',
          label: 'Button Padding',
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
          defaultValue: '1s',
        },
        {
          name: 'transitionDuration',
          type: 'text',
          label: 'Transition Duration',
          defaultValue: '0.3s',
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
          defaultValue: '768px',
        },
        {
          name: 'tabletBreakpoint',
          type: 'text',
          label: 'Tablet Breakpoint',
          defaultValue: '1024px',
        },
        {
          name: 'showMobileNav',
          type: 'checkbox',
          label: 'Show Mobile Navigation',
          defaultValue: true,
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
          name: 'ctaSubSectionSpacing',
          type: 'text',
          label: 'CTA Sub Section Spacing',
        },
        {
          name: 'footerMainSpacing',
          type: 'text',
          label: 'Footer Main Spacing',
        },
        {
          name: 'trademarkSpacing',
          type: 'text',
          label: 'Trademark Section Spacing',
        },
        {
          name: 'elementSpacing',
          type: 'text',
          label: 'Element Spacing',
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
          name: 'borderRadius',
          type: 'text',
          label: 'Border Radius',
        },
        {
          name: 'boxShadow',
          type: 'text',
          label: 'Box Shadow',
        },
        {
          name: 'hoverShadow',
          type: 'text',
          label: 'Hover Shadow',
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
          fields: [
            {
              name: 'section',
              type: 'select',
              label: 'Apply to Section',
              options: [
                { label: 'CTA Sub Section', value: 'ctaSub' },
                { label: 'Footer Main Section', value: 'footerMain' },
                { label: 'Trademark Section', value: 'trademark' },
                { label: 'Disclaimer Section', value: 'disclaimer' },
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
          name: 'externalLinkTarget',
          type: 'select',
          label: 'External Link Target',
          options: [
            { label: 'Same Window', value: '_self' },
            { label: 'New Window', value: '_blank' },
          ],
          defaultValue: '_blank',
        },
        {
          name: 'linkTransition',
          type: 'text',
          label: 'Link Transition',
          defaultValue: 'all 0.3s ease',
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
          name: 'enableLinkHover',
          type: 'checkbox',
          label: 'Enable Link Hover Effects',
          defaultValue: true,
        },
        {
          name: 'linkHoverColor',
          type: 'text',
          label: 'Link Hover Color',
        },
        {
          name: 'buttonHoverTransform',
          type: 'text',
          label: 'Button Hover Transform',
        },
        {
          name: 'hoverTransition',
          type: 'text',
          label: 'Hover Transition',
          defaultValue: 'all 0.3s ease',
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
          name: 'structuredData',
          type: 'textarea',
          label: 'Structured Data (JSON-LD)',
          admin: {
            description: 'Add structured data for organization, contact info, etc.',
            rows: 10,
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
          name: 'ariaLabelsEnabled',
          type: 'checkbox',
          label: 'Enable ARIA Labels',
          defaultValue: true,
        },
        {
          name: 'focusVisibleColor',
          type: 'text',
          label: 'Focus Visible Color',
        },
        {
          name: 'skipLinksEnabled',
          type: 'checkbox',
          label: 'Enable Skip Links',
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
