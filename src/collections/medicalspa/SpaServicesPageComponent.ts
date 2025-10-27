import { CollectionConfig } from 'payload'

export const SpaServicesPageComponent: CollectionConfig = {
  slug: 'spa-services-page-component',
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
      defaultValue: 'Spa Services Page Component',
    },
    // Hero Section
    {
      name: 'heroSection',
      type: 'group',
      label: 'Hero Section',
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
          defaultValue: 'Spa Services',
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
              defaultValue: 'Kristi Coody injecting a patient with filler',
            },
          ],
        },
      ],
    },
    // Service Items Section
    {
      name: 'servicesSection',
      type: 'group',
      label: 'Services Section',
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
          admin: {
            description: 'CSS color value',
          },
        },
        {
          name: 'containerClass',
          type: 'text',
          label: 'Container Class',
          defaultValue: 'container',
          admin: {
            description: 'CSS class for the container',
          },
        },
        {
          name: 'serviceItems',
          type: 'array',
          label: 'Service Items',
          admin: {
            description: 'Drag to reorder service items',
          },
          fields: [
            {
              name: 'title',
              type: 'text',
              label: 'Service Title',
              required: true,
            },
            {
              name: 'url',
              type: 'text',
              label: 'Service URL',
              required: true,
            },
            {
              name: 'overlayText',
              type: 'text',
              label: 'Overlay Text',
              admin: {
                description: 'Text shown on hover over the image',
              },
            },
            {
              name: 'image',
              type: 'group',
              label: 'Service Image',
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
                },
              ],
            },
            {
              name: 'imageBackgroundColor',
              type: 'text',
              label: 'Image Background Color',
              admin: {
                description: 'Background color for the image container',
              },
            },
            {
              name: 'overlayColor',
              type: 'text',
              label: 'Overlay Text Color',
              admin: {
                description: 'Color of the overlay text',
              },
            },
            {
              name: 'overlayBackgroundColor',
              type: 'text',
              label: 'Overlay Background Color',
              admin: {
                description: 'Background color of the overlay',
              },
            },
            {
              name: 'titleColor',
              type: 'text',
              label: 'Title Color',
              admin: {
                description: 'Color of the service title text',
              },
            },
            {
              name: 'titleHoverColor',
              type: 'text',
              label: 'Title Hover Color',
              admin: {
                description: 'Color of the title on hover',
              },
            },
          ],
        },
        {
          name: 'itemsPerRow',
          type: 'select',
          label: 'Items Per Row',
          options: [
            { label: '1', value: '1' },
            { label: '2', value: '2' },
            { label: '3', value: '3' },
            { label: '4', value: '4' },
            { label: '6', value: '6' },
          ],
          defaultValue: '3',
          admin: {
            description: 'Number of service items per row',
          },
        },
        {
          name: 'itemSpacing',
          type: 'text',
          label: 'Item Spacing',
          admin: {
            description: 'Space between items (e.g., 20px, 2rem)',
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
        description: 'Drag to reorder sections on the page',
      },
      fields: [
        {
          name: 'section',
          type: 'select',
          label: 'Section',
          required: true,
          options: [
            { label: 'Hero Section', value: 'hero' },
            { label: 'Services Section', value: 'services' },
          ],
        },
      ],
      defaultValue: [{ section: 'hero' }, { section: 'services' }],
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
          name: 'textColor',
          type: 'text',
          label: 'Default Text Color',
          admin: {
            description: 'Default text color for the page',
          },
        },
        {
          name: 'linkColor',
          type: 'text',
          label: 'Link Color',
          admin: {
            description: 'Default color for links',
          },
        },
        {
          name: 'linkHoverColor',
          type: 'text',
          label: 'Link Hover Color',
          admin: {
            description: 'Color for links on hover',
          },
        },
        {
          name: 'headingFontSize',
          type: 'text',
          label: 'Default Heading Font Size',
          admin: {
            description: 'Default font size for h2 headings',
          },
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
          name: 'h1Color',
          type: 'text',
          label: 'H1 Color',
        },
        {
          name: 'h1FontWeight',
          type: 'text',
          label: 'H1 Font Weight',
        },
        {
          name: 'h2FontSize',
          type: 'text',
          label: 'H2 Font Size',
        },
        {
          name: 'h2Color',
          type: 'text',
          label: 'H2 Color',
        },
        {
          name: 'h2FontWeight',
          type: 'text',
          label: 'H2 Font Weight',
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
          admin: {
            description: 'Duration for fade in animations (e.g., 0.3s, 500ms)',
          },
          defaultValue: '0.3s',
        },
        {
          name: 'hoverTransitionDuration',
          type: 'text',
          label: 'Hover Transition Duration',
          admin: {
            description: 'Duration for hover animations',
          },
          defaultValue: '0.3s',
        },
        {
          name: 'animationEasing',
          type: 'text',
          label: 'Animation Easing',
          admin: {
            description: 'CSS easing function',
          },
          defaultValue: 'ease-in-out',
        },
      ],
    },
    // Layout Settings
    {
      name: 'layoutSettings',
      type: 'group',
      label: 'Layout Settings',
      fields: [
        {
          name: 'heroAlignment',
          type: 'select',
          label: 'Hero Content Alignment',
          options: [
            { label: 'Left', value: 'left' },
            { label: 'Center', value: 'center' },
            { label: 'Right', value: 'right' },
          ],
          defaultValue: 'left',
        },
        {
          name: 'servicesGridGap',
          type: 'text',
          label: 'Services Grid Gap',
          admin: {
            description: 'Gap between service items (e.g., 30px, 2rem)',
          },
        },
        {
          name: 'serviceItemBorderRadius',
          type: 'text',
          label: 'Service Item Border Radius',
          admin: {
            description: 'Border radius for service items (e.g., 8px, 0.5rem)',
          },
        },
        {
          name: 'serviceItemShadow',
          type: 'text',
          label: 'Service Item Box Shadow',
          admin: {
            description: 'CSS box-shadow value',
          },
        },
        {
          name: 'serviceItemHoverShadow',
          type: 'text',
          label: 'Service Item Hover Box Shadow',
          admin: {
            description: 'CSS box-shadow value on hover',
          },
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
          name: 'keywords',
          type: 'text',
          label: 'Keywords',
          admin: {
            description: 'Comma-separated keywords for SEO',
          },
        },
        {
          name: 'canonicalUrl',
          type: 'text',
          label: 'Canonical URL',
        },
        {
          name: 'robots',
          type: 'select',
          label: 'Robots Meta Tag',
          options: [
            { label: 'Index, Follow', value: 'index,follow' },
            { label: 'No Index, Follow', value: 'noindex,follow' },
            { label: 'Index, No Follow', value: 'index,nofollow' },
            { label: 'No Index, No Follow', value: 'noindex,nofollow' },
          ],
          defaultValue: 'index,follow',
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
          name: 'skipToContent',
          type: 'checkbox',
          label: 'Include Skip to Content Link',
          defaultValue: true,
        },
        {
          name: 'ariaLabelsEnabled',
          type: 'checkbox',
          label: 'Enable ARIA Labels',
          defaultValue: true,
        },
        {
          name: 'altTextRequired',
          type: 'checkbox',
          label: 'Require Alt Text for Images',
          defaultValue: true,
        },
        {
          name: 'focusVisibleColor',
          type: 'text',
          label: 'Focus Visible Color',
          admin: {
            description: 'Color for focus outlines (accessibility)',
          },
        },
        {
          name: 'contrastMode',
          type: 'select',
          label: 'Contrast Mode',
          options: [
            { label: 'Normal', value: 'normal' },
            { label: 'High Contrast', value: 'high' },
            { label: 'Very High Contrast', value: 'very-high' },
          ],
          defaultValue: 'normal',
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
          admin: {
            description: 'Screen width for mobile (e.g., 768px)',
          },
          defaultValue: '768px',
        },
        {
          name: 'tabletBreakpoint',
          type: 'text',
          label: 'Tablet Breakpoint',
          admin: {
            description: 'Screen width for tablet (e.g., 1024px)',
          },
          defaultValue: '1024px',
        },
        {
          name: 'mobileItemsPerRow',
          type: 'select',
          label: 'Mobile Items Per Row',
          options: [
            { label: '1', value: '1' },
            { label: '2', value: '2' },
          ],
          defaultValue: '1',
        },
        {
          name: 'tabletItemsPerRow',
          type: 'select',
          label: 'Tablet Items Per Row',
          options: [
            { label: '1', value: '1' },
            { label: '2', value: '2' },
            { label: '3', value: '3' },
          ],
          defaultValue: '2',
        },
        {
          name: 'mobileFontSizeAdjustment',
          type: 'text',
          label: 'Mobile Font Size Adjustment',
          admin: {
            description: 'Percentage adjustment for mobile fonts (e.g., 90%)',
          },
          defaultValue: '100%',
        },
        {
          name: 'mobileSpacingAdjustment',
          type: 'text',
          label: 'Mobile Spacing Adjustment',
          admin: {
            description: 'Percentage adjustment for mobile spacing',
          },
          defaultValue: '100%',
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
          name: 'enableHoverEffects',
          type: 'checkbox',
          label: 'Enable Hover Effects',
          defaultValue: true,
        },
        {
          name: 'imageHoverScale',
          type: 'text',
          label: 'Image Hover Scale',
          admin: {
            description: 'Scale value on hover (e.g., 1.05, 1.1)',
          },
          defaultValue: '1.05',
        },
        {
          name: 'imageHoverOpacity',
          type: 'text',
          label: 'Image Hover Opacity',
          admin: {
            description: 'Opacity value on hover (e.g., 0.8, 0.9)',
          },
          defaultValue: '0.9',
        },
        {
          name: 'overlayHoverOpacity',
          type: 'text',
          label: 'Overlay Hover Opacity',
          admin: {
            description: 'Opacity of overlay on hover (e.g., 0.9, 1)',
          },
          defaultValue: '1',
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
