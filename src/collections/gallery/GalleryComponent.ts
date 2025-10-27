import { CollectionConfig } from 'payload'

export const GalleryComponent: CollectionConfig = {
  slug: 'gallery-component',
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
      defaultValue: 'Gallery Component',
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
            { label: 'Gallery Index Section', value: 'galleryIndex' },
            { label: 'Age Restriction Popup', value: 'ageRestriction' },
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
              defaultValue: 'Gallery',
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
          name: 'galleryIndexSection',
          type: 'group',
          label: 'Gallery Index Section Settings',
          admin: {
            condition: (data, siblingData) => siblingData?.sectionType === 'galleryIndex',
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
              name: 'containerWidth',
              type: 'select',
              label: 'Container Width',
              options: [
                { label: 'Container', value: 'container' },
                { label: 'Wide', value: 'wide' },
                { label: 'Narrow', value: 'narrow' },
              ],
              defaultValue: 'container',
            },
            {
              name: 'groups',
              type: 'array',
              label: 'Gallery Groups',
              admin: {
                description: 'Drag to reorder gallery groups (e.g., Non-Surgical, Surgical)',
              },
              fields: [
                {
                  name: 'groupName',
                  type: 'text',
                  required: true,
                  label: 'Group Name',
                  admin: {
                    description: 'e.g., Non-Surgical, Surgical',
                  },
                },
                {
                  name: 'groupSlug',
                  type: 'text',
                  required: true,
                  label: 'Group Slug/CSS Class',
                  admin: {
                    description: 'CSS class for this group (e.g., non-surgical, surgical)',
                  },
                },
                {
                  name: 'headingColor',
                  type: 'text',
                  label: 'Heading Color',
                  admin: {
                    description: 'Override color for this group heading',
                  },
                },
                {
                  name: 'backgroundColor',
                  type: 'text',
                  label: 'Group Background Color',
                  admin: {
                    description: 'Background color for this group',
                  },
                },
                {
                  name: 'links',
                  type: 'array',
                  label: 'Gallery Links',
                  admin: {
                    description: 'Drag to reorder gallery links within this group',
                  },
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
                      name: 'linkColor',
                      type: 'text',
                      label: 'Link Color',
                      admin: {
                        description: 'Override link color (optional)',
                      },
                    },
                    {
                      name: 'hoverColor',
                      type: 'text',
                      label: 'Hover Color',
                      admin: {
                        description: 'Link hover color (optional)',
                      },
                    },
                  ],
                },
              ],
            },
            {
              name: 'cssClasses',
              type: 'text',
              label: 'Additional CSS Classes',
              admin: {
                description: 'Space-separated CSS classes',
              },
            },
          ],
        },
        {
          name: 'ageRestrictionSection',
          type: 'group',
          label: 'Age Restriction Popup Settings',
          admin: {
            condition: (data, siblingData) => siblingData?.sectionType === 'ageRestriction',
          },
          fields: [
            {
              name: 'enabled',
              type: 'checkbox',
              label: 'Enable Age Restriction',
              defaultValue: false,
              admin: {
                description: 'Show age restriction popup when enabled',
              },
            },
            {
              name: 'backgroundColor',
              type: 'text',
              label: 'Popup Background Color',
              admin: {
                description: 'Background color of the popup',
              },
            },
            {
              name: 'textColor',
              type: 'text',
              label: 'Text Color',
              admin: {
                description: 'Color of text in the popup',
              },
            },
            {
              name: 'overlayColor',
              type: 'text',
              label: 'Overlay Background Color',
              admin: {
                description: 'Background color of the overlay (e.g., rgba(0,0,0,0.8))',
              },
            },
            {
              name: 'heading',
              type: 'text',
              label: 'Popup Heading',
              defaultValue: 'Warning:',
            },
            {
              name: 'headingColor',
              type: 'text',
              label: 'Heading Color',
            },
            {
              name: 'message',
              type: 'richText',
              label: 'Popup Message',
              required: true,
              admin: {
                description: 'The warning message displayed to users',
              },
            },
            {
              name: 'buttonText',
              type: 'text',
              label: 'Button Text',
              defaultValue: 'Ok',
            },
            {
              name: 'buttonBackgroundColor',
              type: 'text',
              label: 'Button Background Color',
            },
            {
              name: 'buttonTextColor',
              type: 'text',
              label: 'Button Text Color',
            },
            {
              name: 'buttonHoverColor',
              type: 'text',
              label: 'Button Hover Color',
            },
            {
              name: 'showCloseButton',
              type: 'checkbox',
              label: 'Show Close Button',
              defaultValue: true,
            },
            {
              name: 'cssClasses',
              type: 'text',
              label: 'Additional CSS Classes',
              admin: {
                description: 'Space-separated CSS classes',
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
