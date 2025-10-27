import { CollectionConfig } from 'payload'

export const SurgicalGalleryComponent: CollectionConfig = {
  slug: 'surgical-gallery-component',
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
      defaultValue: 'Surgical Gallery Component',
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
              defaultValue: 'Surgical Gallery',
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
              name: 'categoryGroups',
              type: 'array',
              label: 'Category Groups',
              admin: {
                description: 'Drag to reorder category items',
              },
              fields: [
                {
                  name: 'categoryName',
                  type: 'text',
                  required: true,
                  label: 'Category Name',
                  admin: {
                    description: 'Display name for the category (e.g., Tummy Tuck)',
                  },
                },
                {
                  name: 'categorySlug',
                  type: 'text',
                  required: true,
                  label: 'Category Slug/CSS Class',
                  admin: {
                    description: 'URL-friendly slug and CSS class (e.g., tummy-tuck)',
                  },
                },
                {
                  name: 'url',
                  type: 'text',
                  required: true,
                  label: 'Category URL',
                  admin: {
                    description: 'Full URL to the category page',
                  },
                },
                {
                  name: 'headingColor',
                  type: 'text',
                  label: 'Heading Color',
                  admin: {
                    description: 'Override color for this category heading',
                  },
                },
                {
                  name: 'linkColor',
                  type: 'text',
                  label: 'Link Color',
                  admin: {
                    description: 'Color for the link',
                  },
                },
                {
                  name: 'linkHoverColor',
                  type: 'text',
                  label: 'Link Hover Color',
                  admin: {
                    description: 'Color when hovering over the link',
                  },
                },
                {
                  name: 'backgroundColor',
                  type: 'text',
                  label: 'Group Background Color',
                  admin: {
                    description: 'Background color for this category group',
                  },
                },
                {
                  name: 'borderColor',
                  type: 'text',
                  label: 'Border Color',
                  admin: {
                    description: 'Border color for this category group (optional)',
                  },
                },
                {
                  name: 'padding',
                  type: 'text',
                  label: 'Group Padding',
                  admin: {
                    description: 'CSS padding value (e.g., 20px, 1rem 2rem)',
                  },
                },
                {
                  name: 'margin',
                  type: 'text',
                  label: 'Group Margin',
                  admin: {
                    description: 'CSS margin value (e.g., 20px, 1rem 2rem)',
                  },
                },
              ],
            },
            {
              name: 'cssClasses',
              type: 'text',
              label: 'Additional CSS Classes',
              admin: {
                description: 'Space-separated CSS classes (e.g., sub-index)',
              },
              defaultValue: 'sub-index',
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
              name: 'isHidden',
              type: 'checkbox',
              label: 'Initially Hidden',
              defaultValue: true,
              admin: {
                description: 'Start with popup hidden (controlled by JS)',
              },
            },
            {
              name: 'popupBackgroundColor',
              type: 'text',
              label: 'Popup Background Color',
              admin: {
                description: 'Background color of the popup',
              },
            },
            {
              name: 'popupTextColor',
              type: 'text',
              label: 'Popup Text Color',
              admin: {
                description: 'Color of text in the popup',
              },
            },
            {
              name: 'popupBorderColor',
              type: 'text',
              label: 'Popup Border Color',
              admin: {
                description: 'Border color of the popup (optional)',
              },
            },
            {
              name: 'popupBorderRadius',
              type: 'text',
              label: 'Popup Border Radius',
              admin: {
                description: 'Border radius (e.g., 8px, 1rem)',
              },
            },
            {
              name: 'popupPadding',
              type: 'text',
              label: 'Popup Inner Padding',
              admin: {
                description: 'Padding inside the popup (e.g., 40px, 2rem)',
              },
            },
            {
              name: 'overlayBackgroundColor',
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
              admin: {
                description: 'Color for the heading text',
              },
            },
            {
              name: 'headingFontSize',
              type: 'text',
              label: 'Heading Font Size',
              admin: {
                description: 'Font size for heading (e.g., 24px, 1.5rem)',
              },
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
              name: 'messageFontSize',
              type: 'text',
              label: 'Message Font Size',
              admin: {
                description: 'Font size for message (e.g., 16px, 1rem)',
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
              name: 'buttonHoverBackgroundColor',
              type: 'text',
              label: 'Button Hover Background Color',
            },
            {
              name: 'buttonHoverTextColor',
              type: 'text',
              label: 'Button Hover Text Color',
            },
            {
              name: 'buttonBorderColor',
              type: 'text',
              label: 'Button Border Color',
            },
            {
              name: 'buttonBorderRadius',
              type: 'text',
              label: 'Button Border Radius',
              admin: {
                description: 'Border radius for button (e.g., 4px, 0.5rem)',
              },
            },
            {
              name: 'buttonPadding',
              type: 'text',
              label: 'Button Padding',
              admin: {
                description: 'Padding inside button (e.g., 10px 20px)',
              },
            },
            {
              name: 'showCloseButton',
              type: 'checkbox',
              label: 'Show Close Button',
              defaultValue: true,
            },
            {
              name: 'closeButtonColor',
              type: 'text',
              label: 'Close Button Color',
              admin: {
                description: 'Color of the close button (X)',
              },
            },
            {
              name: 'closeButtonHoverColor',
              type: 'text',
              label: 'Close Button Hover Color',
            },
            {
              name: 'closeButtonSize',
              type: 'text',
              label: 'Close Button Size',
              admin: {
                description: 'Size of close button (e.g., 30px, 2rem)',
              },
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
        {
          name: 'headingFontSize',
          type: 'text',
          label: 'Default Heading Font Size',
          admin: {
            description: 'Default font size for h2 headings (e.g., 32px, 2rem)',
          },
        },
        {
          name: 'bodyFontSize',
          type: 'text',
          label: 'Default Body Font Size',
          admin: {
            description: 'Default font size for body text (e.g., 16px, 1rem)',
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
        description: 'Toggle to enable/disable this component',
      },
    },
  ],
  timestamps: true,
}
