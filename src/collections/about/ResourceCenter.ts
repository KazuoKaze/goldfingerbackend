import { CollectionConfig } from 'payload'

export const VideoGalleryComponent: CollectionConfig = {
  slug: 'video-gallery-component',
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
      defaultValue: 'Video Gallery Component',
    },
    {
      name: 'heroSection',
      type: 'group',
      label: 'Hero Section',
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
        },
        {
          name: 'title',
          type: 'text',
          required: true,
          defaultValue: 'Videos',
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
              defaultValue: 'Doctor James Young',
            },
          ],
        },
      ],
    },
    {
      name: 'introSection',
      type: 'group',
      label: 'Intro Section',
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
          name: 'paddingBottom',
          type: 'text',
          label: 'Padding Bottom',
          admin: {
            description: 'CSS padding value (e.g., 0, 20px)',
          },
        },
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
              name: 'width',
              type: 'number',
              label: 'Width',
              defaultValue: 58,
            },
            {
              name: 'height',
              type: 'number',
              label: 'Height',
              defaultValue: 64,
            },
            {
              name: 'alt',
              type: 'text',
              label: 'Alt Text',
              defaultValue: 'Goldfingers aesthetic logo',
            },
          ],
        },
        {
          name: 'content',
          type: 'textarea',
          label: 'Content',
          required: true,
          admin: {
            description: 'Main intro text content with paragraphs and links',
          },
        },
        {
          name: 'description',
          type: 'richText',
          label: 'Description Text',
        },
        {
          name: 'animationClass',
          type: 'text',
          label: 'Animation Class',
          defaultValue: 'wow fadeInUp',
          admin: {
            description: 'CSS animation classes (e.g., wow fadeInUp)',
          },
        },
      ],
    },
    {
      name: 'videoGridSection',
      type: 'group',
      label: 'Video Grid Section',
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
          name: 'gridLayout',
          type: 'group',
          label: 'Grid Layout Settings',
          fields: [
            {
              name: 'columns',
              type: 'select',
              label: 'Grid Columns',
              defaultValue: '4',
              options: [
                {
                  label: '2 Columns',
                  value: '2',
                },
                {
                  label: '3 Columns',
                  value: '3',
                },
                {
                  label: '4 Columns',
                  value: '4',
                },
              ],
              admin: {
                description: 'Number of columns in the grid',
              },
            },
            {
              name: 'gap',
              type: 'text',
              label: 'Grid Gap',
              admin: {
                description: 'Space between grid items (e.g., 20px, 2rem)',
              },
            },
          ],
        },
        {
          name: 'videos',
          type: 'array',
          label: 'Videos',
          admin: {
            description: 'Drag to reorder videos in the grid',
          },
          fields: [
            {
              name: 'youtubeUrl',
              type: 'text',
              label: 'YouTube URL',
              required: true,
              admin: {
                description: 'Full YouTube video URL (e.g., https://www.youtube.com/watch?v=...)',
              },
            },
            {
              name: 'thumbnail',
              type: 'group',
              label: 'Thumbnail',
              fields: [
                {
                  name: 'customThumbnail',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Custom Thumbnail (Optional)',
                  admin: {
                    description: 'Upload custom thumbnail or leave empty to use YouTube default',
                  },
                },
                {
                  name: 'alt',
                  type: 'text',
                  label: 'Alt Text',
                  defaultValue: 'Goldfingers Aesthetics',
                },
              ],
            },
            {
              name: 'title',
              type: 'text',
              label: 'Video Title',
              required: true,
              admin: {
                description: 'Title displayed below the video thumbnail',
              },
            },
            {
              name: 'titleColor',
              type: 'text',
              label: 'Title Color',
              admin: {
                description: 'CSS color value for this video title',
              },
            },
            {
              name: 'thumbnailHoverEffect',
              type: 'text',
              label: 'Hover Effect',
              admin: {
                description: 'CSS class or style for hover effect',
              },
            },
          ],
        },
        {
          name: 'videoCardStyles',
          type: 'group',
          label: 'Video Card Styles',
          fields: [
            {
              name: 'cardBackgroundColor',
              type: 'text',
              label: 'Card Background Color',
              admin: {
                description: 'Background color for video cards',
              },
            },
            {
              name: 'cardBorderRadius',
              type: 'text',
              label: 'Card Border Radius',
              admin: {
                description: 'Border radius for cards (e.g., 8px, 0.5rem)',
              },
            },
            {
              name: 'cardShadow',
              type: 'text',
              label: 'Card Shadow',
              admin: {
                description: 'CSS box-shadow value',
              },
            },
            {
              name: 'cardHoverShadow',
              type: 'text',
              label: 'Card Hover Shadow',
              admin: {
                description: 'CSS box-shadow value on hover',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'sectionOrder',
      type: 'array',
      label: 'Section Order',
      admin: {
        description: 'Drag to reorder sections on the page',
      },
      fields: [
        {
          name: 'sectionName',
          type: 'select',
          label: 'Section',
          required: true,
          options: [
            {
              label: 'Hero Section',
              value: 'hero',
            },
            {
              label: 'Intro Section',
              value: 'intro',
            },
            {
              label: 'Video Grid Section',
              value: 'videoGrid',
            },
          ],
        },
        {
          name: 'isVisible',
          type: 'checkbox',
          label: 'Show Section',
          defaultValue: true,
        },
      ],
      defaultValue: [
        { sectionName: 'hero', isVisible: true },
        { sectionName: 'intro', isVisible: true },
        { sectionName: 'videoGrid', isVisible: true },
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
          name: 'linkColor',
          type: 'text',
          label: 'Link Color',
          admin: {
            description: 'Default link color',
          },
        },
        {
          name: 'linkHoverColor',
          type: 'text',
          label: 'Link Hover Color',
          admin: {
            description: 'Link color on hover',
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
          type: 'textarea',
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
      name: 'advancedSettings',
      type: 'group',
      label: 'Advanced Settings',
      fields: [
        {
          name: 'customCSS',
          type: 'textarea',
          label: 'Custom CSS',
          admin: {
            description: 'Add custom CSS for this component',
          },
        },
        {
          name: 'customJS',
          type: 'textarea',
          label: 'Custom JavaScript',
          admin: {
            description: 'Add custom JavaScript for this component',
          },
        },
        {
          name: 'moduleDataAttributes',
          type: 'text',
          label: 'Module Data Attributes',
          admin: {
            description: 'Custom data attributes for modules (e.g., data-s3-module)',
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
