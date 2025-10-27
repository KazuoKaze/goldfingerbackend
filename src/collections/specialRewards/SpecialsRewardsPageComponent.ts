import { CollectionConfig } from 'payload'

export const SpecialsRewardsPageComponent: CollectionConfig = {
  slug: 'specials-rewards-page-component',
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
      defaultValue: 'Specials & Rewards Page Component',
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
          defaultValue: [
            {
              label: 'Home',
              url: '/',
              ariaLabel: 'Breadcrumbs to help navigate the user',
            },
            {
              label: 'Specials And Rewards',
              url: '/specials-and-rewards/',
              ariaLabel: 'Breadcrumbs to help navigate the user',
            },
          ],
        },
        {
          name: 'title',
          type: 'text',
          required: true,
          defaultValue: 'Specials & Rewards',
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
              defaultValue: 'Goldfingers exam office',
            },
          ],
        },
      ],
    },
    // Page Index List Section (Navigation Tabs)
    {
      name: 'indexListSection',
      type: 'group',
      label: 'Index List Section (Navigation Tabs)',
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
        },
        {
          name: 'textColor',
          type: 'text',
          label: 'Text Color',
        },
        {
          name: 'hoverBackgroundColor',
          type: 'text',
          label: 'Item Hover Background Color',
        },
        {
          name: 'hoverTextColor',
          type: 'text',
          label: 'Item Hover Text Color',
        },
        {
          name: 'navigationItems',
          type: 'array',
          label: 'Navigation Items',
          admin: {
            description: 'Drag to reorder navigation items',
          },
          fields: [
            {
              name: 'label',
              type: 'text',
              label: 'Item Label',
              required: true,
            },
            {
              name: 'url',
              type: 'text',
              label: 'Item URL',
              required: true,
            },
            {
              name: 'ariaLabel',
              type: 'text',
              label: 'ARIA Label',
            },
          ],
          defaultValue: [
            {
              label: 'Specials',
              url: '/specials-and-rewards/specials/',
              ariaLabel: 'Opens Specials page',
            },
            {
              label: 'Alle Rewards',
              url: '/specials-and-rewards/alle/',
              ariaLabel: 'Opens Alle Rewards page',
            },
            {
              label: 'Aspire Rewards',
              url: '/specials-and-rewards/aspire-rewards/',
              ariaLabel: 'Opens Aspire Rewards page',
            },
            {
              label: 'Gift Cards',
              url: '/specials-and-rewards/gift-cards/',
              ariaLabel: 'Opens Gift Cards page',
            },
          ],
        },
      ],
    },
    // Page Index Section (Cards Grid)
    {
      name: 'indexCardsSection',
      type: 'group',
      label: 'Index Cards Section (Grid)',
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
        },
        {
          name: 'cardBackgroundColor',
          type: 'text',
          label: 'Card Background Color',
        },
        {
          name: 'cardHoverBackgroundColor',
          type: 'text',
          label: 'Card Hover Background Color',
        },
        {
          name: 'titleColor',
          type: 'text',
          label: 'Card Title Color',
        },
        {
          name: 'overlayTextColor',
          type: 'text',
          label: 'Image Overlay Text Color',
        },
        {
          name: 'overlayBackgroundColor',
          type: 'text',
          label: 'Image Overlay Background Color',
          admin: {
            description: 'Background color for overlay on image hover',
          },
        },
        {
          name: 'cards',
          type: 'array',
          label: 'Index Cards',
          admin: {
            description: 'Drag to reorder cards',
          },
          fields: [
            {
              name: 'title',
              type: 'text',
              label: 'Card Title',
              required: true,
            },
            {
              name: 'url',
              type: 'text',
              label: 'Card URL',
              required: true,
            },
            {
              name: 'ariaLabel',
              type: 'text',
              label: 'ARIA Label',
            },
            {
              name: 'overlayText',
              type: 'text',
              label: 'Image Overlay Text',
              admin: {
                description: 'Text displayed on image hover',
              },
            },
            {
              name: 'image',
              type: 'group',
              label: 'Card Image',
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
                  label: 'Desktop Image',
                },
                {
                  name: 'alt',
                  type: 'text',
                  label: 'Alt Text',
                  required: true,
                },
              ],
            },
          ],
          defaultValue: [
            {
              title: 'Specials',
              url: '/specials-and-rewards/specials/',
              ariaLabel: 'Opens Specials page',
              overlayText: 'Specials',
            },
            {
              title: 'Alle Rewards',
              url: '/specials-and-rewards/alle/',
              ariaLabel: 'Opens Alle Rewards page',
              overlayText: 'Alle Rewards',
            },
            {
              title: 'Aspire Rewards',
              url: '/specials-and-rewards/aspire-rewards/',
              ariaLabel: 'Opens Aspire Rewards page',
              overlayText: 'Aspire Rewards',
            },
            {
              title: 'Gift Cards',
              url: '/specials-and-rewards/gift-cards/',
              ariaLabel: 'Opens Gift Cards page',
              overlayText: 'Gift Cards',
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
            { label: 'Index List Section (Navigation Tabs)', value: 'indexList' },
            { label: 'Index Cards Section (Grid)', value: 'indexCards' },
          ],
        },
      ],
      defaultValue: [{ section: 'hero' }, { section: 'indexList' }, { section: 'indexCards' }],
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
    // Card Styles
    {
      name: 'cardStyles',
      type: 'group',
      label: 'Card Styles',
      fields: [
        {
          name: 'borderRadius',
          type: 'text',
          label: 'Card Border Radius',
          admin: {
            description: 'e.g., 4px, 0.5rem',
          },
        },
        {
          name: 'boxShadow',
          type: 'text',
          label: 'Card Box Shadow',
          admin: {
            description: 'CSS box-shadow value',
          },
        },
        {
          name: 'hoverBoxShadow',
          type: 'text',
          label: 'Card Hover Box Shadow',
        },
        {
          name: 'padding',
          type: 'text',
          label: 'Card Content Padding',
        },
        {
          name: 'imageAspectRatio',
          type: 'text',
          label: 'Card Image Aspect Ratio',
          admin: {
            description: 'e.g., 16/9, 4/3',
          },
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
            description: 'Duration for fade in animations (e.g., 1s, 2s)',
          },
          defaultValue: '1s',
        },
        {
          name: 'hoverTransitionDuration',
          type: 'text',
          label: 'Hover Transition Duration',
          admin: {
            description: 'Duration for hover transitions',
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
          defaultValue: 'Specials & Rewards',
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
        {
          name: 'mobileCardColumns',
          type: 'select',
          label: 'Mobile Card Columns',
          options: [
            { label: '1 Column', value: '1' },
            { label: '2 Columns', value: '2' },
          ],
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
