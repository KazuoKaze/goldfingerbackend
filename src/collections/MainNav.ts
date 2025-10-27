import { CollectionConfig } from 'payload'

export const MainNav: CollectionConfig = {
  slug: 'main-nav',
  admin: {
    useAsTitle: 'title',
    description: 'Main navigation configuration',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Main Navigation',
      admin: {
        description: 'Internal title for reference',
      },
    },
    {
      name: 'styling',
      type: 'group',
      label: 'Styling',
      fields: [
        {
          name: 'headerClass',
          type: 'text',
          label: 'Header CSS Class',
          defaultValue: 'partial_nav_header light',
          admin: {
            description: 'e.g., "partial_nav_header light"',
          },
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
      ],
    },
    {
      name: 'logo',
      type: 'group',
      label: 'Logo Configuration',
      fields: [
        {
          name: 'imageUrl',
          type: 'text',
          label: 'Logo Image URL',
          required: true,
          defaultValue: 'https://www.datocms-assets.com/105497/1692813206-logo-nav.svg',
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
          name: 'desktopVariant',
          type: 'select',
          label: 'Desktop Variant',
          defaultValue: 'focus',
          options: [
            { label: 'Default', value: 'default' },
            { label: 'Focus', value: 'focus' },
          ],
        },
        {
          name: 'tabletVariant',
          type: 'select',
          label: 'Tablet Variant',
          defaultValue: 'default',
          options: [
            { label: 'Default', value: 'default' },
            { label: 'Focus', value: 'focus' },
          ],
        },
        {
          name: 'mobileVariant',
          type: 'select',
          label: 'Mobile Variant',
          defaultValue: 'default',
          options: [
            { label: 'Default', value: 'default' },
            { label: 'Focus', value: 'focus' },
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
          name: 'menuOffset',
          type: 'number',
          label: 'Menu Offset (px)',
          defaultValue: 0,
        },
        {
          name: 'menuOffsetMobile',
          type: 'number',
          label: 'Mobile Menu Offset (px)',
          defaultValue: 0,
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
          admin: {
            description: 'e.g., "noopener"',
          },
        },
        {
          name: 'customClasses',
          type: 'text',
          label: 'Custom CSS Classes',
          admin: {
            description: 'e.g., "mega-menu"',
          },
        },
        {
          name: 'subMenu',
          type: 'array',
          label: 'Sub Menu Items',
          admin: {
            description: 'Dropdown menu items',
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
        {
          name: 'ignore',
          type: 'checkbox',
          label: 'Ignore (Mobile Info Section)',
          defaultValue: false,
          admin: {
            description: 'Use this for mobile-only info sections',
          },
        },
        {
          name: 'mobileInfo',
          type: 'group',
          label: 'Mobile Info Section',
          admin: {
            condition: (data, siblingData) => {
              return siblingData?.ignore === true
            },
          },
          fields: [
            {
              name: 'showSocialLinks',
              type: 'checkbox',
              label: 'Show Social Links',
              defaultValue: false,
            },
            {
              name: 'socialLinks',
              type: 'array',
              label: 'Social Links',
              admin: {
                condition: (data, siblingData) => {
                  return siblingData?.showSocialLinks === true
                },
              },
              fields: [
                {
                  name: 'platform',
                  type: 'select',
                  label: 'Platform',
                  options: [
                    { label: 'Instagram', value: 'instagram' },
                    { label: 'Facebook', value: 'facebook' },
                    { label: 'YouTube', value: 'youtube' },
                    { label: 'Twitter', value: 'twitter' },
                    { label: 'LinkedIn', value: 'linkedin' },
                  ],
                },
                {
                  name: 'url',
                  type: 'text',
                  label: 'URL',
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
              ],
            },
            {
              name: 'showPhone',
              type: 'checkbox',
              label: 'Show Phone',
              defaultValue: false,
            },
            {
              name: 'phoneNumber',
              type: 'text',
              label: 'Phone Number',
              admin: {
                condition: (data, siblingData) => {
                  return siblingData?.showPhone === true
                },
              },
            },
            {
              name: 'phoneLink',
              type: 'text',
              label: 'Phone Link',
              admin: {
                condition: (data, siblingData) => {
                  return siblingData?.showPhone === true
                },
              },
            },
          ],
        },
      ],
    },
  ],
}
