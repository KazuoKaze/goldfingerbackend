// collections/BotoxPage.ts

import { CollectionConfig } from 'payload'

export const KybellaGallery: CollectionConfig = {
  slug: 'KybellaGallery', // Matches the fetch query endpoint
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
        description: 'URL-friendly identifier (e.g., botox)',
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
              defaultValue: 'BOTOX Background Image',
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
              label: 'Non Surgical',
              url: '/gallery/non-surgical/',
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
          defaultValue: 'BOTOX',
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
              label: 'Lip Fillers',
              url: '/gallery/non-surgical/lip-fillers/',
              isActive: false,
            },
            {
              label: 'BOTOX',
              url: '/gallery/non-surgical/botox/',
              isActive: true,
            },
            {
              label: 'JUVÉDERM',
              url: '/gallery/non-surgical/juvederm/',
              isActive: false,
            },
            {
              label: 'KYBELLA',
              url: '/gallery/non-surgical/kybella/',
              isActive: false,
            },
            {
              label: 'Micro-Channeling',
              url: '/gallery/non-surgical/micro-channeling/',
              isActive: false,
            },
            {
              label: 'Restylane',
              url: '/gallery/non-surgical/restylane-r/',
              isActive: false,
            },
            {
              label: 'SkinMedica',
              url: '/gallery/non-surgical/skinmedica/',
              isActive: false,
            },
            {
              label: 'Dermal Filler',
              url: '/gallery/non-surgical/dermal-filler/',
              isActive: false,
            },
            {
              label: 'Cheek Contour',
              url: '/gallery/non-surgical/cheek-contour/',
              isActive: false,
            },
            {
              label: 'Liquid Chin & Jaw Contouring',
              url: '/gallery/non-surgical/liquid-chin-and-jaw-contouring/',
              isActive: false,
            },
            {
              label: 'Liquid Rhinoplasty',
              url: '/gallery/non-surgical/liquid-rhinoplasty/',
              isActive: false,
            },
            {
              label: 'Marionette Lines',
              url: '/gallery/non-surgical/marionette-lines/',
              isActive: false,
            },
            {
              label: 'Liquid (Non-Surgical) Facelift',
              url: '/gallery/non-surgical/liquid-facelift/',
              isActive: false,
            },
            {
              label: 'Weight Loss',
              url: '/gallery/non-surgical/weight-loss/',
              isActive: false,
            },
            {
              label: 'Lash Extensions',
              url: '/gallery/non-surgical/lash-extensions/',
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
              defaultValue: '/gallery/non-surgical/',
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

    // Gallery Items Section
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
          label: 'Gallery Images',
          admin: {
            description: 'Drag to reorder gallery images',
          },
          fields: [
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              required: true,
              label: 'Image',
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
              name: 'itemUrl',
              type: 'text',
              
              label: 'Item Page URL',
              admin: {
                description:
                  'URL to the individual gallery item page (e.g., /gallery/non-surgical/botox/item/...)',
              },
            },
            {
              name: 'altText',
              type: 'text',
              required: true,
              label: 'Alt Text',
            },
            {
              name: 'patientId',
              type: 'text',
              label: 'Patient ID',
              admin: {
                description: 'Optional patient identifier for alt text',
              },
            },
            {
              name: 'imageNumber',
              type: 'number',
              label: 'Image Number',
              defaultValue: 1,
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
              defaultValue: 300,
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

    // Pagination Section (default disabled since not in provided code)
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
            description: 'Base URL without page number (e.g., /gallery/non-surgical/botox/)',
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

export default KybellaGallery
