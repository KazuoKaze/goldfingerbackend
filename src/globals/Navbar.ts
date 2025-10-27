import { GlobalConfig } from 'payload'

export const Navbar: GlobalConfig = {
  slug: 'navbar',
  label: 'Navbar Configuration',
  admin: {
    description: 'Global navbar configuration for the entire site',
  },
  access: {
    read: () => true, // allow public read
  },
  hooks: {
    afterRead: [
      async ({ doc, req }) => {
        // Manually populate the media relationship
        if (doc?.mainNav?.logo?.imageUrl && typeof doc.mainNav.logo.imageUrl === 'string') {
          try {
            const media = await req.payload.findByID({
              collection: 'media',
              id: doc.mainNav.logo.imageUrl,
            })

            if (media) {
              doc.mainNav.logo.imageUrl = media
            }
          } catch (error) {
            console.error('Error populating logo media:', error)
          }
        }

        return doc
      },
    ],
  },
  fields: [
    {
      name: 'enabled',
      type: 'checkbox',
      label: 'Enable Navbar',
      defaultValue: true,
      admin: {
        description: 'Turn the navbar on/off globally',
      },
    },
    {
      name: 'upperNav',
      type: 'group',
      label: 'Upper Navigation',
      fields: [
        {
          name: 'enabled',
          type: 'checkbox',
          label: 'Enable Upper Nav',
          defaultValue: true,
        },
        {
          name: 'styling',
          type: 'group',
          label: 'Styling',
          admin: {
            condition: (data, siblingData) => {
              return siblingData?.enabled === true
            },
          },
          fields: [
            {
              name: 'backgroundColor',
              type: 'text',
              label: 'Background Color',
              defaultValue: '#f8f8f8',
            },
            {
              name: 'textColor',
              type: 'text',
              label: 'Text Color',
              defaultValue: '#333333',
            },
            {
              name: 'linkHoverColor',
              type: 'text',
              label: 'Link Hover Color',
              defaultValue: '#0066cc',
            },
            {
              name: 'padding',
              type: 'text',
              label: 'Padding',
              defaultValue: '10px 0',
              admin: {
                description: 'CSS padding value',
              },
            },
          ],
        },
        {
          name: 'items',
          type: 'array',
          label: 'Navigation Items',
          admin: {
            description: 'Drag and drop to reorder',
            condition: (data, siblingData) => {
              return siblingData?.enabled === true
            },
            // components: {
            //   RowLabel: ({ data, index }) => {
            //     return data?.label || `Item ${index + 1}`
            //   },
            // },
          },
          fields: [
            {
              name: 'type',
              type: 'select',
              label: 'Item Type',
              required: true,
              defaultValue: 'link',
              options: [
                { label: 'Link', value: 'link' },
                { label: 'Phone', value: 'phone' },
                { label: 'Social Links', value: 'social' },
                { label: 'Search', value: 'search' },
              ],
            },
            {
              name: 'label',
              type: 'text',
              label: 'Label',
              admin: {
                condition: (data, siblingData) => {
                  return siblingData?.type !== 'social'
                },
              },
            },
            {
              name: 'href',
              type: 'text',
              label: 'Link URL',
              admin: {
                condition: (data, siblingData) => {
                  return siblingData?.type === 'link'
                },
              },
            },
            {
              name: 'ariaLabel',
              type: 'text',
              label: 'Aria Label',
            },
            {
              name: 'customClasses',
              type: 'text',
              label: 'Custom CSS Classes',
            },
            {
              name: 'phoneNumber',
              type: 'text',
              label: 'Phone Number (Display)',
              admin: {
                condition: (data, siblingData) => {
                  return siblingData?.type === 'phone'
                },
              },
            },
            {
              name: 'phoneLink',
              type: 'text',
              label: 'Phone Link (tel:)',
              admin: {
                condition: (data, siblingData) => {
                  return siblingData?.type === 'phone'
                },
              },
            },
            {
              name: 'socialLinks',
              type: 'array',
              label: 'Social Media Links',
              admin: {
                condition: (data, siblingData) => {
                  return siblingData?.type === 'social'
                },
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
                    { label: 'YouTube', value: 'youtube' },
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
                  label: 'Aria Label',
                },
                {
                  name: 'iconClass',
                  type: 'text',
                  label: 'Icon CSS Class',
                  defaultValue: 'instagram-icon',
                },
              ],
            },
            {
              name: 'searchConfig',
              type: 'group',
              label: 'Search Configuration',
              admin: {
                condition: (data, siblingData) => {
                  return siblingData?.type === 'search'
                },
              },
              fields: [
                {
                  name: 'buttonText',
                  type: 'text',
                  label: 'Button Text',
                  defaultValue: 'Search',
                },
                {
                  name: 'buttonAriaLabel',
                  type: 'text',
                  label: 'Button Aria Label',
                  defaultValue: 'Opens search bar',
                },
                {
                  name: 'buttonTitle',
                  type: 'text',
                  label: 'Button Title',
                  defaultValue: 'Open search bar',
                },
              ],
            },
            {
              name: 'visibility',
              type: 'group',
              label: 'Visibility Settings',
              fields: [
                {
                  name: 'desktop',
                  type: 'checkbox',
                  label: 'Show on Desktop',
                  defaultValue: true,
                },
                {
                  name: 'tablet',
                  type: 'checkbox',
                  label: 'Show on Tablet',
                  defaultValue: true,
                },
                {
                  name: 'mobile',
                  type: 'checkbox',
                  label: 'Show on Mobile',
                  defaultValue: true,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'mainNav',
      type: 'group',
      label: 'Main Navigation',
      fields: [
        {
          name: 'enabled',
          type: 'checkbox',
          label: 'Enable Main Nav',
          defaultValue: true,
        },
        {
          name: 'styling',
          type: 'group',
          label: 'Styling',
          admin: {
            condition: (data, siblingData) => {
              return siblingData?.enabled === true
            },
          },
          fields: [
            {
              name: 'headerClass',
              type: 'text',
              label: 'Header CSS Class',
              defaultValue: 'partial_nav_header light',
            },
            {
              name: 'backgroundColor',
              type: 'text',
              label: 'Background Color',
              defaultValue: '#ffffff',
            },
            {
              name: 'textColor',
              type: 'text',
              label: 'Text Color',
              defaultValue: '#000000',
            },
            {
              name: 'linkHoverColor',
              type: 'text',
              label: 'Link Hover Color',
              defaultValue: '#0066cc',
            },
            {
              name: 'activeItemColor',
              type: 'text',
              label: 'Active Item Color',
              defaultValue: '#0066cc',
            },
            {
              name: 'padding',
              type: 'text',
              label: 'Padding',
              defaultValue: '20px 0',
            },
          ],
        },
        {
          name: 'logo',
          type: 'group',
          label: 'Logo Configuration',
          admin: {
            condition: (data, siblingData) => {
              return siblingData?.enabled === true
            },
          },
          fields: [
            {
              name: 'imageUrl',
              type: 'upload',
              relationTo: 'media',
              // label: 'Logo Image URL',
              required: true,
              admin: {
                description: 'Upload your logo image',
              },
              // defaultValue: 'https://www.datocms-assets.com/105497/1692813206-logo-nav.svg',
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
              name: 'altText',
              type: 'text',
              label: 'Alt Text',
              defaultValue: 'Website Logo',
            },
            {
              name: 'linkUrl',
              type: 'text',
              label: 'Link URL',
              defaultValue: '/',
            },
          ],
        },
        {
          name: 'navigationSettings',
          type: 'group',
          label: 'Navigation Settings',
          admin: {
            condition: (data, siblingData) => {
              return siblingData?.enabled === true
            },
          },
          fields: [
            {
              name: 'desktopType',
              type: 'select',
              label: 'Desktop Type',
              defaultValue: 'horizontal',
              options: [
                { label: 'Horizontal', value: 'horizontal' },
                { label: 'Vertical', value: 'vertical' },
                { label: 'Hamburger', value: 'hamburger' },
              ],
            },
            {
              name: 'tabletType',
              type: 'select',
              label: 'Tablet Type',
              defaultValue: 'hamburger',
              options: [
                { label: 'Horizontal', value: 'horizontal' },
                { label: 'Vertical', value: 'vertical' },
                { label: 'Hamburger', value: 'hamburger' },
              ],
            },
            {
              name: 'mobileType',
              type: 'select',
              label: 'Mobile Type',
              defaultValue: 'hamburger',
              options: [
                { label: 'Horizontal', value: 'horizontal' },
                { label: 'Vertical', value: 'vertical' },
                { label: 'Hamburger', value: 'hamburger' },
              ],
            },
            {
              name: 'breakpointMobile',
              type: 'number',
              label: 'Mobile Breakpoint (px)',
              defaultValue: 640,
            },
            {
              name: 'breakpointTablet',
              type: 'number',
              label: 'Tablet Breakpoint (px)',
              defaultValue: 1024,
            },
            {
              name: 'hamburgerColor',
              type: 'text',
              label: 'Hamburger Icon Color',
              defaultValue: '#fff',
            },
            {
              name: 'hamburgerColorExpanded',
              type: 'text',
              label: 'Hamburger Icon Color (Expanded)',
              defaultValue: '#fff',
            },
          ],
        },
        {
          name: 'menuItems',
          type: 'array',
          label: 'Menu Items',
          admin: {
            description: 'Drag and drop to reorder menu items',
            condition: (data, siblingData) => {
              return siblingData?.enabled === true
            },
            // components: {
            //   RowLabel: ({ data, index }) => {
            //     return data?.label || `Menu Item ${index + 1}`
            //   },
            // },
          },
          fields: [
            {
              name: 'label',
              type: 'text',
              label: 'Label',
              required: true,
            },
            {
              name: 'href',
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
              name: 'rel',
              type: 'text',
              label: 'Rel Attribute',
            },
            {
              name: 'customClasses',
              type: 'text',
              label: 'Custom CSS Classes',
            },
            {
              name: 'subMenu',
              type: 'array',
              label: 'Sub Menu Items',
              admin: {
                description: 'Dropdown menu items (drag to reorder)',
                // components: {
                //   RowLabel: ({ data, index }) => {
                //     return data?.label || `Sub Item ${index + 1}`
                //   },
                // },
              },
              fields: [
                {
                  name: 'label',
                  type: 'text',
                  label: 'Label',
                  required: true,
                },
                {
                  name: 'href',
                  type: 'text',
                  label: 'Link URL',
                  required: true,
                },
                {
                  name: 'rel',
                  type: 'text',
                  label: 'Rel Attribute',
                },
                {
                  name: 'customClasses',
                  type: 'text',
                  label: 'Custom CSS Classes',
                },
                {
                  name: 'subMenu',
                  type: 'array',
                  label: 'Nested Sub Menu',
                  admin: {
                    description: 'Third level menu items',
                    // components: {
                    //   RowLabel: ({ data, index }) => {
                    //     return data?.label || `Nested Item ${index + 1}`
                    //   },
                    // },
                  },
                  fields: [
                    {
                      name: 'label',
                      type: 'text',
                      label: 'Label',
                      required: true,
                    },
                    {
                      name: 'href',
                      type: 'text',
                      label: 'Link URL',
                      required: true,
                    },
                    {
                      name: 'rel',
                      type: 'text',
                      label: 'Rel Attribute',
                    },
                    {
                      name: 'customClasses',
                      type: 'text',
                      label: 'Custom CSS Classes',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'stickyNav',
      type: 'group',
      label: 'Sticky Navigation',
      fields: [
        {
          name: 'enabled',
          type: 'checkbox',
          label: 'Enable Sticky Navigation',
          defaultValue: false,
          admin: {
            description: 'Makes navbar stick to top when scrolling',
          },
        },
        {
          name: 'offset',
          type: 'number',
          label: 'Offset (px)',
          defaultValue: 0,
          admin: {
            description: 'Distance from top before becoming sticky',
            condition: (data, siblingData) => {
              return siblingData?.enabled === true
            },
          },
        },
      ],
    },
    {
      name: 'animations',
      type: 'group',
      label: 'Animations',
      fields: [
        {
          name: 'enableTransitions',
          type: 'checkbox',
          label: 'Enable Transitions',
          defaultValue: true,
        },
        {
          name: 'transitionDuration',
          type: 'text',
          label: 'Transition Duration',
          defaultValue: '0.3s',
          admin: {
            description: 'CSS duration value (e.g., 0.3s, 300ms)',
            condition: (data, siblingData) => {
              return siblingData?.enableTransitions === true
            },
          },
        },
        {
          name: 'dropdownAnimation',
          type: 'select',
          label: 'Dropdown Animation',
          defaultValue: 'fade',
          options: [
            { label: 'Fade', value: 'fade' },
            { label: 'Slide', value: 'slide' },
            { label: 'None', value: 'none' },
          ],
          admin: {
            condition: (data, siblingData) => {
              return siblingData?.enableTransitions === true
            },
          },
        },
      ],
    },
  ],
}
