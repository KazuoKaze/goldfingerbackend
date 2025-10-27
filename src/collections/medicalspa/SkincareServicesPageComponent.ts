// collections/SkincareServicesPage.ts

import { CollectionConfig } from 'payload'

export const SkincareServicesPage: CollectionConfig = {
  slug: 'skincareServicesPage',
  admin: {
    useAsTitle: 'componentName',
    defaultColumns: ['componentName', 'slug', 'updatedAt'],
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
      label: 'Component Name',
      admin: {
        description: 'Name to identify this component (e.g., Skincare Services)',
      },
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: 'URL Slug',
      admin: {
        description: 'URL-friendly identifier (e.g., skincare-services)',
      },
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
      label: 'Active',
    },

    // Hero Module Section
    {
      name: 'heroModule',
      type: 'group',
      label: 'Hero Module',
      fields: [
        {
          name: 'enabled',
          type: 'checkbox',
          defaultValue: true,
          label: 'Enable Hero Module',
        },
        {
          name: 'className',
          type: 'text',
          label: 'Custom Class Names',
          defaultValue: 'mod_hero banner mobile-stack',
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
          name: 'backgroundTexture',
          type: 'group',
          label: 'Background Texture',
          fields: [
            {
              name: 'desktop',
              type: 'upload',
              relationTo: 'media',
              label: 'Desktop Image',
            },
            {
              name: 'tablet',
              type: 'upload',
              relationTo: 'media',
              label: 'Tablet Image',
            },
            {
              name: 'mobile',
              type: 'upload',
              relationTo: 'media',
              label: 'Mobile Image',
            },
            {
              name: 'smallMobile',
              type: 'upload',
              relationTo: 'media',
              label: 'Small Mobile Image',
            },
            {
              name: 'altText',
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
            description: 'Drag to reorder breadcrumb links',
          },
          defaultValue: [
            {
              label: 'Home',
              url: '/',
              ariaLabel: 'Breadcrumbs to help navigate the user',
            },
            {
              label: 'Medical Spa',
              url: '/medical-spa/',
              ariaLabel: 'Breadcrumbs to help navigate the user',
            },
            {
              label: 'Skincare Services',
              url: '/medical-spa/skincare-services/',
              ariaLabel: 'Breadcrumbs to help navigate the user',
            },
          ],
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
              label: 'Link Label',
            },
            {
              name: 'url',
              type: 'text',
              required: true,
              label: 'Link URL',
            },
            {
              name: 'ariaLabel',
              type: 'text',
              label: 'Aria Label',
              defaultValue: 'Breadcrumbs to help navigate the user',
            },
          ],
        },
        {
          name: 'breadcrumbLinkColor',
          type: 'text',
          label: 'Breadcrumb Link Color',
        },
        {
          name: 'breadcrumbHoverColor',
          type: 'text',
          label: 'Breadcrumb Hover Color',
        },
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Hero Title',
          defaultValue: 'Skincare Services',
        },
        {
          name: 'titleColor',
          type: 'text',
          label: 'Title Color',
        },
        {
          name: 'description',
          type: 'richText',
          label: 'Hero Description',
        },
        {
          name: 'descriptionColor',
          type: 'text',
          label: 'Description Color',
        },
        {
          name: 'ctaButton',
          type: 'group',
          label: 'CTA Button',
          fields: [
            {
              name: 'enabled',
              type: 'checkbox',
              defaultValue: true,
              label: 'Show CTA Button',
            },
            {
              name: 'label',
              type: 'text',
              label: 'Button Label',
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
              label: 'Button Classes',
              defaultValue: 'btn white',
            },
          ],
        },
        {
          name: 'mediaImage',
          type: 'group',
          label: 'Media Image',
          fields: [
            {
              name: 'desktop',
              type: 'upload',
              relationTo: 'media',
              label: 'Desktop Image',
            },
            {
              name: 'tablet',
              type: 'upload',
              relationTo: 'media',
              label: 'Tablet Image',
            },
            {
              name: 'mobile',
              type: 'upload',
              relationTo: 'media',
              label: 'Mobile Image',
            },
            {
              name: 'smallMobile',
              type: 'upload',
              relationTo: 'media',
              label: 'Small Mobile Image',
            },
            {
              name: 'altText',
              type: 'text',
              label: 'Alt Text',
              defaultValue: 'Woman receiving facial treatment',
            },
          ],
        },
      ],
    },

    // Intro Module Section
    {
      name: 'introModule',
      type: 'group',
      label: 'Intro Module',
      fields: [
        {
          name: 'enabled',
          type: 'checkbox',
          defaultValue: true,
          label: 'Enable Intro Module',
        },
        {
          name: 'className',
          type: 'text',
          label: 'Custom Class Names',
          defaultValue: 'mod_intro container viewport option-1 wide wow fadeInUp',
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
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
          label: 'Logo Image',
        },
        {
          name: 'logoAltText',
          type: 'text',
          label: 'Logo Alt Text',
          defaultValue: 'Goldfingers aesthetic logo',
        },
        {
          name: 'title',
          type: 'text',
          label: 'Intro Title',
          defaultValue: 'Skin rejuvenation and enhancement at its best.',
        },
        {
          name: 'titleColor',
          type: 'text',
          label: 'Title Color',
        },
        {
          name: 'content',
          type: 'richText',
          label: 'Intro Content',
        },
        {
          name: 'contentColor',
          type: 'text',
          label: 'Content Color',
        },
      ],
    },

    // Double Banner Modules Array
    {
      name: 'doubleBannerModules',
      type: 'array',
      label: 'Double Banner Modules',
      admin: {
        description: 'Drag to reorder double banner sections',
      },
      fields: [
        {
          name: 'enabled',
          type: 'checkbox',
          defaultValue: true,
          label: 'Enable This Double Banner',
        },
        {
          name: 'className',
          type: 'text',
          label: 'Custom Class Names',
          defaultValue: 'mod_double_banner container fadeInLeft',
        },
        {
          name: 'rowClassName',
          type: 'text',
          label: 'Row Class Names',
          defaultValue: 'row mb-40',
          admin: {
            description: 'e.g., "row mb-40" or "row mb-80-desktop mb-40-tablet-down"',
          },
        },
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Background Color',
        },
        // Left Banner
        {
          name: 'leftBanner',
          type: 'group',
          label: 'Left Banner',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
              label: 'Title',
            },
            {
              name: 'titleColor',
              type: 'text',
              label: 'Title Color',
            },
            {
              name: 'content',
              type: 'richText',
              label: 'Content',
            },
            {
              name: 'contentColor',
              type: 'text',
              label: 'Content Color',
            },
            {
              name: 'image',
              type: 'group',
              label: 'Background Image',
              fields: [
                {
                  name: 'desktop',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Desktop Image',
                },
                {
                  name: 'tablet',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Tablet Image',
                },
                {
                  name: 'mobile',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Mobile Image',
                },
                {
                  name: 'smallMobile',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Small Mobile Image',
                },
                {
                  name: 'altText',
                  type: 'text',
                  label: 'Alt Text',
                },
              ],
            },
          ],
        },
        // Right Banner
        {
          name: 'rightBanner',
          type: 'group',
          label: 'Right Banner',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
              label: 'Title',
            },
            {
              name: 'titleColor',
              type: 'text',
              label: 'Title Color',
            },
            {
              name: 'content',
              type: 'richText',
              label: 'Content',
            },
            {
              name: 'contentColor',
              type: 'text',
              label: 'Content Color',
            },
            {
              name: 'image',
              type: 'group',
              label: 'Background Image',
              fields: [
                {
                  name: 'desktop',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Desktop Image',
                },
                {
                  name: 'tablet',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Tablet Image',
                },
                {
                  name: 'mobile',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Mobile Image',
                },
                {
                  name: 'smallMobile',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Small Mobile Image',
                },
                {
                  name: 'altText',
                  type: 'text',
                  label: 'Alt Text',
                },
              ],
            },
          ],
        },
      ],
    },

    // CTA General Module
    {
      name: 'ctaGeneralModule',
      type: 'group',
      label: 'CTA General Module',
      fields: [
        {
          name: 'enabled',
          type: 'checkbox',
          defaultValue: true,
          label: 'Enable CTA Module',
        },
        {
          name: 'className',
          type: 'text',
          label: 'Custom Class Names',
          defaultValue:
            'mod_cta_general viewport container cta thin wow fadeInRight mt-0 mb-0 background-1',
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
          name: 'title',
          type: 'text',
          label: 'CTA Title',
          defaultValue: 'Schedule a Consultation',
        },
        {
          name: 'titleUrl',
          type: 'text',
          label: 'Title Link URL',
          defaultValue: '/contact/',
        },
        {
          name: 'titleColor',
          type: 'text',
          label: 'Title Color',
        },
        {
          name: 'button',
          type: 'group',
          label: 'CTA Button',
          fields: [
            {
              name: 'label',
              type: 'text',
              label: 'Button Label',
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
              label: 'Button Classes',
              defaultValue: 'btn white',
            },
          ],
        },
      ],
    },

    // Column Modules Array
    {
      name: 'columnModules',
      type: 'array',
      label: 'Column Modules',
      admin: {
        description: 'Drag to reorder column sections',
      },
      fields: [
        {
          name: 'enabled',
          type: 'checkbox',
          defaultValue: true,
          label: 'Enable This Column Module',
        },
        {
          name: 'className',
          type: 'text',
          label: 'Custom Class Names',
          defaultValue: 'mod_column viewport container',
          admin: {
            description: 'e.g., "mod_column viewport container has-media"',
          },
        },
        {
          name: 'rowClassName',
          type: 'text',
          label: 'Row Class Names',
          defaultValue: 'row',
          admin: {
            description: 'e.g., "row mt-30 pb-0 media-left"',
          },
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
          name: 'hasMedia',
          type: 'checkbox',
          defaultValue: false,
          label: 'Has Media Image',
        },
        {
          name: 'mediaPosition',
          type: 'select',
          label: 'Media Position',
          options: [
            { label: 'Left', value: 'left' },
            { label: 'Right', value: 'right' },
          ],
          defaultValue: 'left',
          admin: {
            condition: (data, siblingData) => siblingData?.hasMedia,
          },
        },
        {
          name: 'title',
          type: 'text',
          label: 'Title',
        },
        {
          name: 'titleTag',
          type: 'select',
          label: 'Title Tag',
          options: [
            { label: 'H2', value: 'h2' },
            { label: 'H3', value: 'h3' },
            { label: 'H4', value: 'h4' },
          ],
          defaultValue: 'h2',
        },
        {
          name: 'titleColor',
          type: 'text',
          label: 'Title Color',
        },
        {
          name: 'content',
          type: 'richText',
          label: 'Content',
        },
        {
          name: 'contentColor',
          type: 'text',
          label: 'Content Color',
        },
        {
          name: 'listItems',
          type: 'array',
          label: 'List Items',
          admin: {
            description: 'Drag to reorder list items',
          },
          fields: [
            {
              name: 'text',
              type: 'text',
              required: true,
              label: 'List Item Text',
            },
            {
              name: 'textColor',
              type: 'text',
              label: 'Text Color',
            },
          ],
        },
        {
          name: 'listColumns',
          type: 'checkbox',
          label: 'Display List in Columns',
          defaultValue: false,
          admin: {
            description: 'Enable to show list items in multiple columns',
          },
        },
        {
          name: 'mediaImage',
          type: 'group',
          label: 'Media Image',
          admin: {
            condition: (data, siblingData) => siblingData?.hasMedia,
          },
          fields: [
            {
              name: 'desktop',
              type: 'upload',
              relationTo: 'media',
              label: 'Desktop Image',
            },
            {
              name: 'tablet',
              type: 'upload',
              relationTo: 'media',
              label: 'Tablet Image',
            },
            {
              name: 'mobile',
              type: 'upload',
              relationTo: 'media',
              label: 'Mobile Image',
            },
            {
              name: 'smallMobile',
              type: 'upload',
              relationTo: 'media',
              label: 'Small Mobile Image',
            },
            {
              name: 'altText',
              type: 'text',
              label: 'Alt Text',
            },
            {
              name: 'width',
              type: 'number',
              label: 'Width',
              defaultValue: 904,
            },
            {
              name: 'height',
              type: 'number',
              label: 'Height',
              defaultValue: 1062,
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
        description: 'Drag to reorder page sections',
      },
      fields: [
        {
          name: 'sectionType',
          type: 'select',
          required: true,
          label: 'Section Type',
          options: [
            { label: 'Hero Module', value: 'hero' },
            { label: 'Intro Module', value: 'intro' },
            { label: 'Double Banner Modules', value: 'doubleBanners' },
            { label: 'CTA General Module', value: 'ctaGeneral' },
            { label: 'Column Modules', value: 'columnModules' },
          ],
        },
        {
          name: 'enabled',
          type: 'checkbox',
          label: 'Enabled',
          defaultValue: true,
        },
        {
          name: 'customId',
          type: 'text',
          label: 'Custom ID',
          admin: {
            description: 'Optional HTML ID attribute',
          },
        },
        {
          name: 'customClass',
          type: 'text',
          label: 'Custom CSS Class',
        },
      ],
      defaultValue: [
        { sectionType: 'hero', enabled: true },
        { sectionType: 'intro', enabled: true },
        { sectionType: 'doubleBanners', enabled: true },
        { sectionType: 'ctaGeneral', enabled: true },
        { sectionType: 'columnModules', enabled: true },
      ],
    },

    // Global Styling
    {
      name: 'globalStyling',
      type: 'group',
      label: 'Global Styling',
      fields: [
        {
          name: 'containerBackgroundColor',
          type: 'text',
          label: 'Page Background Color',
        },
        {
          name: 'containerMaxWidth',
          type: 'text',
          label: 'Container Max Width',
          admin: {
            description: 'CSS max-width value (e.g., 1200px)',
          },
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
          name: 'accentColor',
          type: 'text',
          label: 'Accent Color',
        },
        {
          name: 'linkColor',
          type: 'text',
          label: 'Global Link Color',
        },
        {
          name: 'linkHoverColor',
          type: 'text',
          label: 'Global Link Hover Color',
        },
        {
          name: 'customCss',
          type: 'textarea',
          label: 'Custom CSS',
          admin: {
            description: 'Additional CSS rules to apply globally',
          },
        },
      ],
    },

    // SEO & Meta
    {
      name: 'seo',
      type: 'group',
      label: 'SEO & Meta',
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
          name: 'metaKeywords',
          type: 'text',
          label: 'Meta Keywords',
        },
        {
          name: 'ogImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Open Graph Image',
        },
        {
          name: 'canonicalUrl',
          type: 'text',
          label: 'Canonical URL',
        },
      ],
    },
  ],
  timestamps: true,
}

export default SkincareServicesPage
