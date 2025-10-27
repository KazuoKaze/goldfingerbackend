// collections/MommyMakeoverGallery.ts

import { CollectionConfig } from 'payload'

export const BreastAugmentationGallery: CollectionConfig = {
  slug: 'BreastAugmentationGallery',
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
        description: 'Name to identify this gallery component',
      },
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: 'URL Slug',
      admin: {
        description: 'URL-friendly identifier (e.g., tummy-tuck)',
      },
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
      label: 'Active',
    },

    // Hero Section
    {
      name: 'heroSection',
      type: 'group',
      label: 'Hero Section',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Hero Title',
          defaultValue: 'Tummy Tuck Gallery',
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
          admin: {
            description: 'CSS color value for title',
          },
        },
        {
          name: 'backgroundImage',
          type: 'group',
          label: 'Background Image',
          fields: [
            {
              name: 'desktop',
              type: 'upload',
              relationTo: 'media',
              label: 'Desktop Image (2200px)',
            },
            {
              name: 'tablet',
              type: 'upload',
              relationTo: 'media',
              label: 'Tablet Image (1400px)',
            },
            {
              name: 'mobile',
              type: 'upload',
              relationTo: 'media',
              label: 'Mobile Image (800px)',
            },
            {
              name: 'smallMobile',
              type: 'upload',
              relationTo: 'media',
              label: 'Small Mobile Image (420px)',
            },
            {
              name: 'altText',
              type: 'text',
              label: 'Alt Text',
              defaultValue: 'Marble',
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
              label: 'Gallery',
              url: '/gallery/',
              ariaLabel: 'Breadcrumbs to help navigate the user',
            },
            {
              label: 'Surgical',
              url: '/gallery/surgical/',
              ariaLabel: 'Breadcrumbs to help navigate the user',
            },
            {
              label: 'Tummy Tuck',
              url: '/gallery/surgical/tummy-tuck/',
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
          name: 'breadcrumbTextColor',
          type: 'text',
          label: 'Breadcrumb Text Color',
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
      ],
    },

    // Dropdown Navigation Section
    {
      name: 'dropdownSection',
      type: 'group',
      label: 'Dropdown Navigation Section',
      fields: [
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Background Color',
        },
        {
          name: 'selectedItemLabel',
          type: 'text',
          label: 'Selected Item Label',
          required: true,
          defaultValue: 'Tummy Tuck',
        },
        {
          name: 'dropdownItems',
          type: 'array',
          label: 'Dropdown Menu Items',
          admin: {
            description: 'Drag to reorder dropdown items',
          },
          defaultValue: [
            {
              label: 'Tummy Tuck',
              url: '/gallery/surgical/tummy-tuck/',
              isActive: true,
            },
            {
              label: 'Mommy Makeover',
              url: '/gallery/surgical/mommy-makeover/',
              isActive: false,
            },
            {
              label: 'Liposuction',
              url: '/gallery/surgical/liposuction/',
              isActive: false,
            },
            {
              label: 'Breast Augmentation',
              url: '/gallery/surgical/breast-augmentation/',
              isActive: false,
            },
            {
              label: 'Breast Lift',
              url: '/gallery/surgical/breast-lift/',
              isActive: false,
            },
          ],
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
              label: 'Menu Item Label',
            },
            {
              name: 'url',
              type: 'text',
              required: true,
              label: 'Menu Item URL',
            },
            {
              name: 'isActive',
              type: 'checkbox',
              label: 'Is Active Item',
              defaultValue: false,
            },
          ],
        },
        {
          name: 'backButton',
          type: 'group',
          label: 'Back Button',
          fields: [
            {
              name: 'label',
              type: 'text',
              label: 'Button Label',
              defaultValue: 'Back to Gallery',
            },
            {
              name: 'url',
              type: 'text',
              label: 'Button URL',
              defaultValue: '/gallery/surgical/',
            },
            {
              name: 'iconClass',
              type: 'text',
              label: 'Icon Class',
              defaultValue: 'icon-left-open',
            },
          ],
        },
        {
          name: 'textColor',
          type: 'text',
          label: 'Text Color',
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
        {
          name: 'borderColor',
          type: 'text',
          label: 'Border Color',
        },
      ],
    },

    // Gallery Items Section - WITH BEFORE/AFTER IMAGES
    {
      name: 'gallerySection',
      type: 'group',
      label: 'Gallery Items Section',
      fields: [
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Background Color',
        },
        {
          name: 'sectionPadding',
          type: 'text',
          label: 'Section Padding',
          admin: {
            description: 'CSS padding value (e.g., 20px 0)',
          },
        },
        {
          name: 'galleryItems',
          type: 'array',
          label: 'Gallery Items (Before & After)',
          admin: {
            description:
              'Drag to reorder gallery items. Each item contains before and after images.',
          },
          fields: [
            {
              name: 'itemUrl',
              type: 'text',
              
              label: 'Item Page URL',
              admin: {
                description:
                  'URL to the individual gallery item page (e.g., /gallery/surgical/tummy-tuck/item/175151533/)',
              },
            },
            {
              name: 'patientId',
              type: 'text',
              label: 'Patient ID',
              admin: {
                description: 'Patient identifier (e.g., 175151533)',
              },
            },
            // BEFORE IMAGE
            {
              name: 'beforeImage',
              type: 'group',
              label: 'Before Image',
              fields: [
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                  label: 'Before Image',
                },
                {
                  name: 'imageUrl',
                  type: 'text',
                  label: 'Image URL (if external)',
                  admin: {
                    description: 'Use this if image is hosted externally instead of upload',
                  },
                },
                {
                  name: 'altText',
                  type: 'text',
                  required: true,
                  label: 'Alt Text',
                  admin: {
                    description:
                      'e.g., "Tummy Tuck Before & After Gallery - Patient 175151533 - Image 1"',
                  },
                },
                {
                  name: 'width',
                  type: 'number',
                  label: 'Width',
                  defaultValue: 400,
                },
                {
                  name: 'height',
                  type: 'number',
                  label: 'Height',
                  defaultValue: 534,
                },
              ],
            },
            // AFTER IMAGE
            {
              name: 'afterImage',
              type: 'group',
              label: 'After Image',
              fields: [
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                  label: 'After Image',
                },
                {
                  name: 'imageUrl',
                  type: 'text',
                  label: 'Image URL (if external)',
                  admin: {
                    description: 'Use this if image is hosted externally instead of upload',
                  },
                },
                {
                  name: 'altText',
                  type: 'text',
                  required: true,
                  label: 'Alt Text',
                  admin: {
                    description:
                      'e.g., "Tummy Tuck Before & After Gallery - Patient 175151533 - Image 2"',
                  },
                },
                {
                  name: 'width',
                  type: 'number',
                  label: 'Width',
                  defaultValue: 400,
                },
                {
                  name: 'height',
                  type: 'number',
                  label: 'Height',
                  defaultValue: 466,
                },
              ],
            },
            {
              name: 'customCss',
              type: 'text',
              label: 'Custom CSS Class',
            },
          ],
        },
        {
          name: 'itemBackgroundColor',
          type: 'text',
          label: 'Item Background Color',
        },
        {
          name: 'itemBorderColor',
          type: 'text',
          label: 'Item Border Color',
        },
        {
          name: 'itemHoverEffect',
          type: 'select',
          label: 'Item Hover Effect',
          options: [
            { label: 'None', value: 'none' },
            { label: 'Scale', value: 'scale' },
            { label: 'Opacity', value: 'opacity' },
            { label: 'Shadow', value: 'shadow' },
          ],
          defaultValue: 'scale',
        },
      ],
    },

    // Pagination Section
    {
      name: 'paginationSection',
      type: 'group',
      label: 'Pagination Section',
      fields: [
        {
          name: 'enabled',
          type: 'checkbox',
          label: 'Enable Pagination',
          defaultValue: false,
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
          name: 'activePageColor',
          type: 'text',
          label: 'Active Page Color',
        },
        {
          name: 'activePageBackground',
          type: 'text',
          label: 'Active Page Background',
        },
        {
          name: 'hoverColor',
          type: 'text',
          label: 'Hover Color',
        },
        {
          name: 'currentPage',
          type: 'number',
          label: 'Current Page',
          defaultValue: 1,
        },
        {
          name: 'totalPages',
          type: 'number',
          label: 'Total Pages',
          defaultValue: 1,
        },
        {
          name: 'baseUrl',
          type: 'text',
          label: 'Base URL for Pagination',
          admin: {
            description: 'Base URL without page number (e.g., /gallery/surgical/tummy-tuck/)',
          },
        },
        {
          name: 'pages',
          type: 'array',
          label: 'Page Links',
          admin: {
            description: 'Individual page link configuration',
          },
          fields: [
            {
              name: 'pageNumber',
              type: 'number',
              required: true,
              label: 'Page Number',
            },
            {
              name: 'url',
              type: 'text',
              required: true,
              label: 'Page URL',
            },
            {
              name: 'isCurrent',
              type: 'checkbox',
              label: 'Is Current Page',
              defaultValue: false,
            },
            {
              name: 'hideOnPhone',
              type: 'checkbox',
              label: 'Hide on Phone',
              defaultValue: true,
            },
          ],
        },
        {
          name: 'nextButton',
          type: 'group',
          label: 'Next Button',
          fields: [
            {
              name: 'label',
              type: 'text',
              label: 'Label',
              defaultValue: 'Next',
            },
            {
              name: 'url',
              type: 'text',
              label: 'URL',
            },
            {
              name: 'enabled',
              type: 'checkbox',
              label: 'Enabled',
              defaultValue: true,
            },
          ],
        },
        {
          name: 'prevButton',
          type: 'group',
          label: 'Previous Button',
          fields: [
            {
              name: 'label',
              type: 'text',
              label: 'Label',
              defaultValue: 'Previous',
            },
            {
              name: 'url',
              type: 'text',
              label: 'URL',
            },
            {
              name: 'enabled',
              type: 'checkbox',
              label: 'Enabled',
              defaultValue: false,
            },
          ],
        },
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
          label: 'Container Background Color',
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
          name: 'customCss',
          type: 'textarea',
          label: 'Custom CSS',
          admin: {
            description: 'Additional CSS rules to apply',
          },
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
            { label: 'Hero', value: 'hero' },
            { label: 'Dropdown Navigation', value: 'dropdown' },
            { label: 'Gallery', value: 'gallery' },
            { label: 'Pagination', value: 'pagination' },
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
        { sectionType: 'dropdown', enabled: true },
        { sectionType: 'gallery', enabled: true },
        { sectionType: 'pagination', enabled: false },
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
      ],
    },
  ],
  timestamps: true,
}

export default BreastAugmentationGallery
