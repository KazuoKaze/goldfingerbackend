// import { CollectionConfig } from 'payload'

// export const GalleryItemPageComponent: CollectionConfig = {
//   slug: 'gallery-item-page-component',
//   admin: {
//     useAsTitle: 'pageName',
//     defaultColumns: ['pageName', 'pageSlug', 'categoryType', 'updatedAt'],
//     group: 'Components',
//   },
//   access: {
//     read: () => true,
//   },
//   fields: [
//     {
//       name: 'pageName',
//       type: 'text',
//       required: true,
//       label: 'Page Name',
//       admin: {
//         description:
//           'Display name for this gallery page (e.g., BOTOX Gallery, Lip Fillers Gallery)',
//       },
//     },
//     {
//       name: 'pageSlug',
//       type: 'text',
//       required: true,
//       label: 'Page Slug',
//       unique: true,
//       admin: {
//         description: 'URL slug for this page (e.g., botox, lip-fillers). Must be unique.',
//       },
//     },
//     {
//       name: 'categoryType',
//       type: 'select',
//       required: true,
//       label: 'Category Type',
//       options: [
//         { label: 'Non-Surgical', value: 'non-surgical' },
//         { label: 'Surgical', value: 'surgical' },
//       ],
//       defaultValue: 'non-surgical',
//       admin: {
//         description: 'Whether this is a surgical or non-surgical gallery',
//       },
//     },
//     {
//       name: 'sections',
//       type: 'array',
//       label: 'Page Sections',
//       admin: {
//         description: 'Drag to reorder sections on the page',
//       },
//       fields: [
//         {
//           name: 'sectionType',
//           type: 'select',
//           required: true,
//           options: [
//             { label: 'Gallery Hero Section', value: 'galleryHero' },
//             { label: 'Gallery Item Index Section', value: 'galleryItemIndex' },
//           ],
//         },
//         {
//           name: 'sectionId',
//           type: 'text',
//           label: 'Section ID',
//           admin: {
//             description: 'Unique identifier for this section (optional)',
//           },
//         },
//         {
//           name: 'galleryHeroSection',
//           type: 'group',
//           label: 'Gallery Hero Section Settings',
//           admin: {
//             condition: (data, siblingData) => siblingData?.sectionType === 'galleryHero',
//           },
//           fields: [
//             {
//               name: 'backgroundColor',
//               type: 'text',
//               label: 'Background Color',
//               admin: {
//                 description: 'CSS color value (e.g., #ffffff, rgba(0,0,0,0.5))',
//               },
//             },
//             {
//               name: 'backgroundImage',
//               type: 'group',
//               label: 'Background Image',
//               fields: [
//                 {
//                   name: 'mobile',
//                   type: 'upload',
//                   relationTo: 'media',
//                   label: 'Mobile Image (≤420px)',
//                 },
//                 {
//                   name: 'tablet',
//                   type: 'upload',
//                   relationTo: 'media',
//                   label: 'Tablet Image (≤800px)',
//                 },
//                 {
//                   name: 'desktop',
//                   type: 'upload',
//                   relationTo: 'media',
//                   label: 'Desktop Image (≤1400px)',
//                 },
//                 {
//                   name: 'large',
//                   type: 'upload',
//                   relationTo: 'media',
//                   label: 'Large Desktop Image',
//                 },
//                 {
//                   name: 'alt',
//                   type: 'text',
//                   label: 'Alt Text',
//                   defaultValue: 'Marble',
//                 },
//                 {
//                   name: 'width',
//                   type: 'number',
//                   label: 'Image Width',
//                   defaultValue: 2200,
//                 },
//                 {
//                   name: 'height',
//                   type: 'number',
//                   label: 'Image Height',
//                   defaultValue: 691,
//                 },
//               ],
//             },
//             {
//               name: 'title',
//               type: 'text',
//               required: true,
//               defaultValue: 'BOTOX Gallery',
//               label: 'Page Title',
//             },
//             {
//               name: 'titleColor',
//               type: 'text',
//               label: 'Title Color',
//               admin: {
//                 description: 'CSS color value',
//               },
//             },
//             {
//               name: 'breadcrumbs',
//               type: 'array',
//               label: 'Breadcrumbs',
//               admin: {
//                 description: 'Drag to reorder breadcrumb items',
//               },
//               fields: [
//                 {
//                   name: 'label',
//                   type: 'text',
//                   required: true,
//                 },
//                 {
//                   name: 'url',
//                   type: 'text',
//                   required: true,
//                 },
//                 {
//                   name: 'ariaLabel',
//                   type: 'text',
//                   label: 'ARIA Label',
//                   defaultValue: 'Breadcrumbs to help navigate the user',
//                 },
//               ],
//             },
//             {
//               name: 'cssClasses',
//               type: 'text',
//               label: 'Additional CSS Classes',
//               admin: {
//                 description: 'Space-separated CSS classes (e.g., banner bg)',
//               },
//               defaultValue: 'banner bg',
//             },
//           ],
//         },
//         {
//           name: 'galleryItemIndexSection',
//           type: 'group',
//           label: 'Gallery Item Index Section Settings',
//           admin: {
//             condition: (data, siblingData) => siblingData?.sectionType === 'galleryItemIndex',
//           },
//           fields: [
//             {
//               name: 'backgroundColor',
//               type: 'text',
//               label: 'Background Color',
//               admin: {
//                 description: 'CSS color value',
//               },
//             },
//             {
//               name: 'textColor',
//               type: 'text',
//               label: 'Text Color',
//               admin: {
//                 description: 'CSS color value',
//               },
//             },
//             {
//               name: 'containerClasses',
//               type: 'text',
//               label: 'Container CSS Classes',
//               defaultValue: 'container partial_gallery_item_index',
//               admin: {
//                 description: 'CSS classes for the main container',
//               },
//             },
//             {
//               name: 'dropdownSection',
//               type: 'group',
//               label: 'Dropdown Navigation Settings',
//               fields: [
//                 {
//                   name: 'currentPageLabel',
//                   type: 'text',
//                   required: true,
//                   label: 'Current Page Label',
//                   defaultValue: 'BOTOX',
//                   admin: {
//                     description: 'Label shown in the dropdown selector',
//                   },
//                 },
//                 {
//                   name: 'dropdownItems',
//                   type: 'array',
//                   label: 'Dropdown Menu Items',
//                   admin: {
//                     description: 'Drag to reorder dropdown items',
//                   },
//                   fields: [
//                     {
//                       name: 'label',
//                       type: 'text',
//                       required: true,
//                       label: 'Menu Item Label',
//                     },
//                     {
//                       name: 'url',
//                       type: 'text',
//                       required: true,
//                       label: 'Menu Item URL',
//                     },
//                   ],
//                 },
//                 {
//                   name: 'backLinkText',
//                   type: 'text',
//                   label: 'Back Link Text',
//                   defaultValue: 'Back to Gallery',
//                 },
//                 {
//                   name: 'backLinkUrl',
//                   type: 'text',
//                   label: 'Back Link URL',
//                   defaultValue: '/gallery/non-surgical/',
//                 },
//                 {
//                   name: 'selectorTextColor',
//                   type: 'text',
//                   label: 'Selector Text Color',
//                   admin: {
//                     description: 'Color for the dropdown selector text',
//                   },
//                 },
//                 {
//                   name: 'selectorBackgroundColor',
//                   type: 'text',
//                   label: 'Selector Background Color',
//                   admin: {
//                     description: 'Background color for dropdown selector',
//                   },
//                 },
//                 {
//                   name: 'dropdownBackgroundColor',
//                   type: 'text',
//                   label: 'Dropdown Menu Background Color',
//                   admin: {
//                     description: 'Background color for dropdown menu items',
//                   },
//                 },
//                 {
//                   name: 'dropdownLinkColor',
//                   type: 'text',
//                   label: 'Dropdown Link Color',
//                   admin: {
//                     description: 'Color for dropdown menu links',
//                   },
//                 },
//                 {
//                   name: 'dropdownLinkHoverColor',
//                   type: 'text',
//                   label: 'Dropdown Link Hover Color',
//                   admin: {
//                     description: 'Hover color for dropdown menu links',
//                   },
//                 },
//                 {
//                   name: 'backLinkColor',
//                   type: 'text',
//                   label: 'Back Link Color',
//                   admin: {
//                     description: 'Color for the back to gallery link',
//                   },
//                 },
//                 {
//                   name: 'backLinkHoverColor',
//                   type: 'text',
//                   label: 'Back Link Hover Color',
//                   admin: {
//                     description: 'Hover color for back link',
//                   },
//                 },
//               ],
//             },
//             {
//               name: 'galleryItems',
//               type: 'array',
//               label: 'Gallery Items',
//               admin: {
//                 description: 'Add and reorder gallery items (before/after images)',
//               },
//               fields: [
//                 {
//                   name: 'itemUrl',
//                   type: 'text',
//                   required: true,
//                   label: 'Item Detail URL',
//                   admin: {
//                     description: 'URL to the detailed view of this gallery item',
//                   },
//                 },
//                 {
//                   name: 'image',
//                   type: 'upload',
//                   relationTo: 'media',
//                   required: true,
//                   label: 'Gallery Image',
//                 },
//                 {
//                   name: 'imageAlt',
//                   type: 'text',
//                   required: true,
//                   label: 'Image Alt Text',
//                   admin: {
//                     description: 'Descriptive alt text for the image',
//                   },
//                 },
//                 {
//                   name: 'imageWidth',
//                   type: 'number',
//                   label: 'Image Width',
//                   defaultValue: 400,
//                 },
//                 {
//                   name: 'imageHeight',
//                   type: 'number',
//                   label: 'Image Height',
//                   defaultValue: 100,
//                 },
//                 {
//                   name: 'cssClasses',
//                   type: 'text',
//                   label: 'Item CSS Classes',
//                   defaultValue: 'item single',
//                   admin: {
//                     description: 'CSS classes for this gallery item',
//                   },
//                 },
//               ],
//             },
//             {
//               name: 'itemsContainerClasses',
//               type: 'text',
//               label: 'Items Container CSS Classes',
//               defaultValue: 'partial_gallery_default_item_index',
//               admin: {
//                 description: 'CSS classes for the gallery items container',
//               },
//             },
//           ],
//         },
//       ],
//     },
//     {
//       name: 'globalStyles',
//       type: 'group',
//       label: 'Global Styles',
//       fields: [
//         {
//           name: 'containerMaxWidth',
//           type: 'text',
//           label: 'Container Max Width',
//           admin: {
//             description: 'CSS max-width value (e.g., 1200px, 100%)',
//           },
//         },
//         {
//           name: 'containerPadding',
//           type: 'text',
//           label: 'Container Padding',
//           admin: {
//             description: 'CSS padding value (e.g., 20px, 1rem 2rem)',
//           },
//         },
//         {
//           name: 'sectionSpacing',
//           type: 'text',
//           label: 'Section Spacing',
//           admin: {
//             description: 'Spacing between sections (e.g., 60px, 4rem)',
//           },
//         },
//         {
//           name: 'fontFamily',
//           type: 'text',
//           label: 'Font Family',
//           admin: {
//             description: 'CSS font-family value',
//           },
//         },
//         {
//           name: 'primaryColor',
//           type: 'text',
//           label: 'Primary Color',
//           admin: {
//             description: 'Main brand color',
//           },
//         },
//         {
//           name: 'secondaryColor',
//           type: 'text',
//           label: 'Secondary Color',
//           admin: {
//             description: 'Secondary brand color',
//           },
//         },
//         {
//           name: 'linkColor',
//           type: 'text',
//           label: 'Default Link Color',
//           admin: {
//             description: 'Default color for all links',
//           },
//         },
//         {
//           name: 'linkHoverColor',
//           type: 'text',
//           label: 'Default Link Hover Color',
//           admin: {
//             description: 'Default hover color for all links',
//           },
//         },
//       ],
//     },
//     {
//       name: 'seoSettings',
//       type: 'group',
//       label: 'SEO Settings',
//       fields: [
//         {
//           name: 'metaTitle',
//           type: 'text',
//           label: 'Meta Title',
//         },
//         {
//           name: 'metaDescription',
//           type: 'richText',
//           label: 'Meta Description',
//         },
//         {
//           name: 'ogImage',
//           type: 'upload',
//           relationTo: 'media',
//           label: 'OG Image',
//         },
//         {
//           name: 'canonicalUrl',
//           type: 'text',
//           label: 'Canonical URL',
//         },
//         {
//           name: 'keywords',
//           type: 'text',
//           label: 'Keywords',
//           admin: {
//             description: 'Comma-separated keywords for SEO',
//           },
//         },
//       ],
//     },
//     {
//       name: 'isActive',
//       type: 'checkbox',
//       label: 'Active',
//       defaultValue: true,
//       admin: {
//         description: 'Toggle to enable/disable this page',
//       },
//     },
//   ],
//   timestamps: true,
// }

import { CollectionConfig } from 'payload'

export const GalleryItemPageComponent: CollectionConfig = {
  slug: 'gallery-item-page-component',
  admin: {
    useAsTitle: 'pageName',
    defaultColumns: ['pageName', 'pageSlug', 'categoryType', 'updatedAt'],
    group: 'Components',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'pageName',
      type: 'text',
      required: true,
      label: 'Page Name',
      admin: {
        description:
          'Display name for this gallery page (e.g., BOTOX Gallery, Lip Fillers Gallery)',
      },
    },
    {
      name: 'pageSlug',
      type: 'text',
      required: true,
      label: 'Page Slug',
      unique: true,
      admin: {
        description: 'URL slug for this page (e.g., botox, lip-fillers). Must be unique.',
      },
    },
    {
      name: 'categoryType',
      type: 'select',
      required: true,
      label: 'Category Type',
      options: [
        { label: 'Non-Surgical', value: 'non-surgical' },
        { label: 'Surgical', value: 'surgical' },
      ],
      defaultValue: 'non-surgical',
      admin: {
        description: 'Whether this is a surgical or non-surgical gallery',
      },
    },
    {
      name: 'sections',
      type: 'array',
      label: 'Page Sections',
      admin: {
        description: 'Drag to reorder sections on the page',
      },
      fields: [
        {
          name: 'sectionType',
          type: 'select',
          required: true,
          options: [
            { label: 'Gallery Hero Section', value: 'galleryHero' },
            { label: 'Gallery Item Index Section', value: 'galleryItemIndex' },
          ],
        },
        {
          name: 'sectionId',
          type: 'text',
          label: 'Section ID',
          admin: {
            description: 'Unique identifier for this section (optional)',
          },
        },
        {
          name: 'galleryHeroSection',
          type: 'group',
          label: 'Gallery Hero Section Settings',
          admin: {
            condition: (data, siblingData) => siblingData?.sectionType === 'galleryHero',
          },
          fields: [
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
                  defaultValue: 'Marble',
                },
                {
                  name: 'width',
                  type: 'number',
                  label: 'Image Width',
                  defaultValue: 2200,
                },
                {
                  name: 'height',
                  type: 'number',
                  label: 'Image Height',
                  defaultValue: 691,
                },
              ],
            },
            {
              name: 'title',
              type: 'text',
              required: true,
              defaultValue: 'BOTOX Gallery',
              label: 'Page Title',
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
            },
            {
              name: 'cssClasses',
              type: 'text',
              label: 'Additional CSS Classes',
              admin: {
                description: 'Space-separated CSS classes (e.g., banner bg)',
              },
              defaultValue: 'banner bg',
            },
          ],
        },
        {
          name: 'galleryItemIndexSection',
          type: 'group',
          label: 'Gallery Item Index Section Settings',
          admin: {
            condition: (data, siblingData) => siblingData?.sectionType === 'galleryItemIndex',
          },
          fields: [
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
              name: 'containerClasses',
              type: 'text',
              label: 'Container CSS Classes',
              defaultValue: 'container partial_gallery_item_index',
              admin: {
                description: 'CSS classes for the main container',
              },
            },
            {
              name: 'dropdownSection',
              type: 'group',
              label: 'Dropdown Navigation Settings',
              fields: [
                {
                  name: 'currentPageLabel',
                  type: 'text',
                  required: true,
                  label: 'Current Page Label',
                  defaultValue: 'BOTOX',
                  admin: {
                    description: 'Label shown in the dropdown selector',
                  },
                },
                {
                  name: 'dropdownItems',
                  type: 'array',
                  label: 'Dropdown Menu Items',
                  defaultValue: [
                    { label: 'Lip Fillers', url: '/gallery/non-surgical/lip-fillers/' },
                    { label: 'BOTOX', url: '/gallery/non-surgical/botox/' },
                    { label: 'JUVÉDERM', url: '/gallery/non-surgical/juvederm/' },
                    { label: 'KYBELLA', url: '/gallery/non-surgical/kybella/' },
                    { label: 'Micro-Channeling', url: '/gallery/non-surgical/micro-channeling/' },
                    { label: 'Restylane', url: '/gallery/non-surgical/restylane-r/' },
                    { label: 'SkinMedica', url: '/gallery/non-surgical/skinmedica/' },
                    { label: 'Dermal Filler', url: '/gallery/non-surgical/dermal-filler/' },
                    { label: 'Cheek Contour', url: '/gallery/non-surgical/cheek-contour/' },
                    {
                      label: 'Liquid Chin & Jaw Contouring',
                      url: '/gallery/non-surgical/liquid-chin-and-jaw-contouring/',
                    },
                    {
                      label: 'Liquid Rhinoplasty',
                      url: '/gallery/non-surgical/liquid-rhinoplasty/',
                    },
                    { label: 'Marionette Lines', url: '/gallery/non-surgical/marionette-lines/' },
                    {
                      label: 'Liquid (Non-Surgical) Facelift',
                      url: '/gallery/non-surgical/liquid-facelift/',
                    },
                    { label: 'Weight Loss', url: '/gallery/non-surgical/weight-loss/' },
                    { label: 'Lash Extensions', url: '/gallery/non-surgical/lash-extensions/' },
                  ],
                  admin: {
                    description:
                      'Pre-filled with all non-surgical gallery links. Drag to reorder or modify as needed.',
                  },
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
                  ],
                },
                {
                  name: 'backLinkText',
                  type: 'text',
                  label: 'Back Link Text',
                  defaultValue: 'Back to Gallery',
                },
                {
                  name: 'backLinkUrl',
                  type: 'text',
                  label: 'Back Link URL',
                  defaultValue: '/gallery/non-surgical/',
                },
                {
                  name: 'selectorTextColor',
                  type: 'text',
                  label: 'Selector Text Color',
                  admin: {
                    description: 'Color for the dropdown selector text',
                  },
                },
                {
                  name: 'selectorBackgroundColor',
                  type: 'text',
                  label: 'Selector Background Color',
                  admin: {
                    description: 'Background color for dropdown selector',
                  },
                },
                {
                  name: 'dropdownBackgroundColor',
                  type: 'text',
                  label: 'Dropdown Menu Background Color',
                  admin: {
                    description: 'Background color for dropdown menu items',
                  },
                },
                {
                  name: 'dropdownLinkColor',
                  type: 'text',
                  label: 'Dropdown Link Color',
                  admin: {
                    description: 'Color for dropdown menu links',
                  },
                },
                {
                  name: 'dropdownLinkHoverColor',
                  type: 'text',
                  label: 'Dropdown Link Hover Color',
                  admin: {
                    description: 'Hover color for dropdown menu links',
                  },
                },
                {
                  name: 'backLinkColor',
                  type: 'text',
                  label: 'Back Link Color',
                  admin: {
                    description: 'Color for the back to gallery link',
                  },
                },
                {
                  name: 'backLinkHoverColor',
                  type: 'text',
                  label: 'Back Link Hover Color',
                  admin: {
                    description: 'Hover color for back link',
                  },
                },
              ],
            },
            {
              name: 'galleryItems',
              type: 'array',
              label: 'Gallery Items',
              admin: {
                description: 'Add and reorder gallery items (before/after images)',
              },
              fields: [
                {
                  name: 'itemId',
                  type: 'text',
                  label: 'Custom Item ID (Optional)',
                  admin: {
                    description:
                      'Custom identifier for the URL. Leave empty to auto-generate from image filename.',
                  },
                },
                {
                  name: 'itemUrl',
                  type: 'text',
                  label: 'Item Detail URL (Auto-generated)',
                  admin: {
                    readOnly: true,
                    description:
                      'This URL is automatically generated. Format: /gallery/{category}/{page-slug}/item/{id}/',
                  },
                  hooks: {
                    beforeChange: [
                      async ({ data, siblingData, req }) => {
                        // Get parent document data
                        const { pageSlug, categoryType } = data || {}

                        // Get item ID - either custom or from image filename
                        let itemId = siblingData?.itemId

                        // If no custom ID, try to generate from image
                        if (!itemId && siblingData?.image) {
                          const imageId =
                            typeof siblingData.image === 'string'
                              ? siblingData.image
                              : siblingData.image?.id || siblingData.image?.filename

                          // Extract filename without extension or use ID
                          if (imageId) {
                            itemId = String(imageId)
                              .replace(/\.[^/.]+$/, '') // Remove extension
                              .replace(/[^a-zA-Z0-9-_]/g, '-') // Replace special chars
                          }
                        }

                        // Fallback to timestamp if still no ID
                        if (!itemId) {
                          itemId = Date.now().toString()
                        }

                        // Generate URL
                        return `/gallery/${categoryType || 'non-surgical'}/${pageSlug || 'gallery'}/item/${itemId}/`
                      },
                    ],
                  },
                },
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                  label: 'Gallery Image',
                },
                {
                  name: 'imageAlt',
                  type: 'text',
                  required: true,
                  label: 'Image Alt Text',
                  admin: {
                    description: 'Descriptive alt text for the image',
                  },
                },
                {
                  name: 'imageWidth',
                  type: 'number',
                  label: 'Image Width',
                  defaultValue: 400,
                },
                {
                  name: 'imageHeight',
                  type: 'number',
                  label: 'Image Height',
                  defaultValue: 100,
                },
                {
                  name: 'cssClasses',
                  type: 'text',
                  label: 'Item CSS Classes',
                  defaultValue: 'item single',
                  admin: {
                    description: 'CSS classes for this gallery item',
                  },
                },
              ],
            },
            {
              name: 'itemsContainerClasses',
              type: 'text',
              label: 'Items Container CSS Classes',
              defaultValue: 'partial_gallery_default_item_index',
              admin: {
                description: 'CSS classes for the gallery items container',
              },
            },
          ],
        },
      ],
    },
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
            description: 'Main brand color',
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
          name: 'linkColor',
          type: 'text',
          label: 'Default Link Color',
          admin: {
            description: 'Default color for all links',
          },
        },
        {
          name: 'linkHoverColor',
          type: 'text',
          label: 'Default Link Hover Color',
          admin: {
            description: 'Default hover color for all links',
          },
        },
      ],
    },
    {
      name: 'seoSettings',
      type: 'group',
      label: 'SEO Settings',
      fields: [
        {
          name: 'metaTitle',
          type: 'text',
          label: 'Meta Title',
        },
        {
          name: 'metaDescription',
          type: 'richText',
          label: 'Meta Description',
        },
        {
          name: 'ogImage',
          type: 'upload',
          relationTo: 'media',
          label: 'OG Image',
        },
        {
          name: 'canonicalUrl',
          type: 'text',
          label: 'Canonical URL',
        },
        {
          name: 'keywords',
          type: 'text',
          label: 'Keywords',
          admin: {
            description: 'Comma-separated keywords for SEO',
          },
        },
      ],
    },
    {
      name: 'isActive',
      type: 'checkbox',
      label: 'Active',
      defaultValue: true,
      admin: {
        description: 'Toggle to enable/disable this page',
      },
    },
  ],
  timestamps: true,
}