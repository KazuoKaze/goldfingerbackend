import { CollectionConfig } from 'payload'

export const GiftCardsPageComponent: CollectionConfig = {
  slug: 'gift-cards-page-component',
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
      defaultValue: 'Gift Cards Page Component',
    },
    // Hero Section (Banner Module)
    {
      name: 'heroSection',
      type: 'group',
      label: 'Hero Section (Banner)',
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
          name: 'textColor',
          type: 'text',
          label: 'Text Color',
          admin: {
            description: 'CSS color value for all text in this section',
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
              label: 'Breadcrumb Label',
              required: true,
            },
            {
              name: 'url',
              type: 'text',
              label: 'Breadcrumb URL',
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
            { label: 'Home', url: '/', ariaLabel: 'Breadcrumbs to help navigate the user' },
            {
              label: 'Specials And Rewards',
              url: '/specials-and-rewards/',
              ariaLabel: 'Breadcrumbs to help navigate the user',
            },
            {
              label: 'Gift Cards',
              url: '/specials-and-rewards/gift-cards/',
              ariaLabel: 'Breadcrumbs to help navigate the user',
            },
          ],
        },
        {
          name: 'breadcrumbTextColor',
          type: 'text',
          label: 'Breadcrumb Text Color',
          admin: {
            description: 'CSS color value for breadcrumb links',
          },
        },
        {
          name: 'title',
          type: 'text',
          label: 'Main Title (H1)',
          required: true,
          defaultValue: 'Gift Cards',
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
              defaultValue: 'woman smiling at nurse holding clipboard',
            },
          ],
        },
        {
          name: 'layoutStyle',
          type: 'select',
          label: 'Layout Style',
          options: [
            { label: 'Mobile Stack', value: 'mobile-stack' },
            { label: 'Full Width', value: 'full-width' },
            { label: 'Centered', value: 'centered' },
          ],
          defaultValue: 'mobile-stack',
        },
      ],
    },
    // Intro Section
    {
      name: 'introSection',
      type: 'group',
      label: 'Intro Section',
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
            description: 'CSS color value (e.g., #f5f5f5, transparent)',
          },
        },
        {
          name: 'textColor',
          type: 'text',
          label: 'Text Color',
          admin: {
            description: 'CSS color value for body text',
          },
        },
        {
          name: 'paddingTop',
          type: 'text',
          label: 'Padding Top',
          admin: {
            description: 'CSS padding value (e.g., 60px, 0)',
          },
        },
        {
          name: 'paddingBottom',
          type: 'text',
          label: 'Padding Bottom',
          admin: {
            description: 'CSS padding value (e.g., 60px, 0, pb-0)',
          },
        },
        {
          name: 'containerWidth',
          type: 'select',
          label: 'Container Width',
          options: [
            { label: 'Standard Container', value: 'container' },
            { label: 'Wide', value: 'wide' },
            { label: 'Full Width', value: 'full-width' },
          ],
          defaultValue: 'wide',
        },
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
          label: 'Logo',
        },
        {
          name: 'logoWidth',
          type: 'text',
          label: 'Logo Width',
          admin: {
            description: 'Width in pixels (e.g., 58)',
          },
          defaultValue: '58',
        },
        {
          name: 'logoHeight',
          type: 'text',
          label: 'Logo Height',
          admin: {
            description: 'Height in pixels (e.g., 64)',
          },
          defaultValue: '64',
        },
        {
          name: 'logoAlt',
          type: 'text',
          label: 'Logo Alt Text',
          defaultValue: 'Goldfingers aesthetic logo',
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Heading (H2)',
          required: true,
          defaultValue: 'Goldfingers Aesthetics Specials',
        },
        {
          name: 'headingColor',
          type: 'text',
          label: 'Heading Color',
          admin: {
            description: 'CSS color value',
          },
        },
        {
          name: 'headingFontSize',
          type: 'text',
          label: 'Heading Font Size',
          admin: {
            description: 'CSS font-size value (e.g., 36px, 2.25rem)',
          },
        },
        {
          name: 'content',
          type: 'richText',
          label: 'Content',
          required: true,
        },
        {
          name: 'textAlign',
          type: 'select',
          label: 'Text Alignment',
          options: [
            { label: 'Left', value: 'left' },
            { label: 'Center', value: 'center' },
            { label: 'Right', value: 'right' },
          ],
          defaultValue: 'left',
        },
        {
          name: 'animationClass',
          type: 'text',
          label: 'Animation Class',
          admin: {
            description: 'CSS animation class (e.g., fadeInUp, fadeInLeft)',
          },
          defaultValue: 'fadeInUp',
        },
      ],
    },
    // Half Image Section
    {
      name: 'halfImageSection',
      type: 'group',
      label: 'Half Image Section',
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
          name: 'textColor',
          type: 'text',
          label: 'Text Color',
          admin: {
            description: 'CSS color value for body text',
          },
        },
        {
          name: 'imagePosition',
          type: 'select',
          label: 'Image Position',
          options: [
            { label: 'Left', value: 'left' },
            { label: 'Right', value: 'right' },
          ],
          defaultValue: 'left',
          admin: {
            description: 'Position of image relative to content',
          },
        },
        {
          name: 'verticalAlignment',
          type: 'select',
          label: 'Vertical Alignment',
          options: [
            { label: 'Top', value: 'top' },
            { label: 'Center', value: 'center' },
            { label: 'Bottom', value: 'bottom' },
          ],
          defaultValue: 'center',
        },
        {
          name: 'animationClass',
          type: 'text',
          label: 'Animation Class',
          admin: {
            description: 'CSS animation class (e.g., fadeInLeft, fadeInRight)',
          },
          defaultValue: 'fadeInLeft',
        },
        {
          name: 'mediaImage',
          type: 'group',
          label: 'Media Image',
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
              defaultValue: 'Blonde woman laughing',
            },
            {
              name: 'imageWidth',
              type: 'text',
              label: 'Image Width',
              admin: {
                description: 'Width in pixels (e.g., 1832)',
              },
            },
            {
              name: 'imageHeight',
              type: 'text',
              label: 'Image Height',
              admin: {
                description: 'Height in pixels (e.g., 1824)',
              },
            },
          ],
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Heading (H2)',
          required: true,
          defaultValue: 'Goldfingers Aesthetics Gift Cards',
        },
        {
          name: 'headingColor',
          type: 'text',
          label: 'Heading Color',
          admin: {
            description: 'CSS color value',
          },
        },
        {
          name: 'headingFontSize',
          type: 'text',
          label: 'Heading Font Size',
          admin: {
            description: 'CSS font-size value (e.g., 32px, 2rem)',
          },
        },
        {
          name: 'content',
          type: 'richText',
          label: 'Content',
          required: true,
        },
        {
          name: 'bulletPoints',
          type: 'array',
          label: 'Bullet Points',
          admin: {
            description: 'Drag to reorder bullet points',
          },
          fields: [
            {
              name: 'text',
              type: 'text',
              label: 'Bullet Point Text',
              required: true,
            },
            {
              name: 'textColor',
              type: 'text',
              label: 'Text Color',
              admin: {
                description: 'Optional: Override default text color for this bullet',
              },
            },
          ],
          defaultValue: [
            {
              text: 'Our gift certificates can be used at any Goldfingers Aesthetic location for any treatment or product.',
            },
            { text: 'Gift certificates never expire.' },
            { text: 'No cash refunds are given for our gift certificates.' },
            { text: 'We gladly offer gift certificate transfers from patient to patient.' },
            {
              text: 'We require 24 hours notice for cancellation of treatments to avoid any charges.',
            },
            { text: 'Gift certificates cannot be reissued if lost or stolen.' },
          ],
        },
        {
          name: 'bulletPointColor',
          type: 'text',
          label: 'Bullet Point Color',
          admin: {
            description: 'CSS color value for bullet points',
          },
        },
        {
          name: 'copyAlignment',
          type: 'select',
          label: 'Content Alignment',
          options: [
            { label: 'Left', value: 'left' },
            { label: 'Center', value: 'center' },
            { label: 'Right', value: 'right' },
          ],
          defaultValue: 'left',
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
            { label: 'Hero Section (Banner)', value: 'hero' },
            { label: 'Intro Section', value: 'intro' },
            { label: 'Half Image Section', value: 'halfImage' },
          ],
        },
      ],
      defaultValue: [{ section: 'hero' }, { section: 'intro' }, { section: 'halfImage' }],
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
          admin: {
            description: 'CSS font-size value',
          },
        },
        {
          name: 'h1Color',
          type: 'text',
          label: 'H1 Color',
          admin: {
            description: 'CSS color value',
          },
        },
        {
          name: 'h1FontWeight',
          type: 'text',
          label: 'H1 Font Weight',
          admin: {
            description: 'CSS font-weight value (e.g., 700, bold)',
          },
        },
        {
          name: 'h1LineHeight',
          type: 'text',
          label: 'H1 Line Height',
          admin: {
            description: 'CSS line-height value (e.g., 1.2, 1.5)',
          },
        },
        {
          name: 'h2FontSize',
          type: 'text',
          label: 'H2 Font Size',
          admin: {
            description: 'CSS font-size value',
          },
        },
        {
          name: 'h2Color',
          type: 'text',
          label: 'H2 Color',
          admin: {
            description: 'CSS color value',
          },
        },
        {
          name: 'h2FontWeight',
          type: 'text',
          label: 'H2 Font Weight',
          admin: {
            description: 'CSS font-weight value',
          },
        },
        {
          name: 'h2LineHeight',
          type: 'text',
          label: 'H2 Line Height',
          admin: {
            description: 'CSS line-height value',
          },
        },
        {
          name: 'bodyFontSize',
          type: 'text',
          label: 'Body Font Size',
          admin: {
            description: 'CSS font-size value (e.g., 16px, 1rem)',
          },
        },
        {
          name: 'bodyLineHeight',
          type: 'text',
          label: 'Body Line Height',
          admin: {
            description: 'CSS line-height value (e.g., 1.6, 1.8)',
          },
        },
        {
          name: 'bodyFontWeight',
          type: 'text',
          label: 'Body Font Weight',
          admin: {
            description: 'CSS font-weight value (e.g., 400, normal)',
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
          admin: {
            description: 'Enable/disable all animations on the page',
          },
        },
        {
          name: 'enableViewportAnimations',
          type: 'checkbox',
          label: 'Enable Viewport Animations',
          defaultValue: true,
          admin: {
            description: 'Enable animations that trigger when elements enter viewport',
          },
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
          name: 'slideInDuration',
          type: 'text',
          label: 'Slide In Duration',
          admin: {
            description: 'Duration for slide in animations',
          },
          defaultValue: '2s',
        },
        {
          name: 'animationEasing',
          type: 'text',
          label: 'Animation Easing',
          admin: {
            description: 'CSS easing function (e.g., ease-in-out, cubic-bezier)',
          },
          defaultValue: 'ease-in-out',
        },
        {
          name: 'animationDelay',
          type: 'text',
          label: 'Animation Delay',
          admin: {
            description: 'Default delay before animations start (e.g., 0s, 0.2s)',
          },
          defaultValue: '0s',
        },
      ],
    },
    // Lazy Loading Settings
    {
      name: 'lazyLoadingSettings',
      type: 'group',
      label: 'Lazy Loading Settings',
      fields: [
        {
          name: 'enableLazyLoading',
          type: 'checkbox',
          label: 'Enable Lazy Loading',
          defaultValue: true,
          admin: {
            description: 'Enable lazy loading for images',
          },
        },
        {
          name: 'lazyLoadingStrategy',
          type: 'select',
          label: 'Lazy Loading Strategy',
          options: [
            { label: 'Native (loading="lazy")', value: 'native' },
            { label: 'Custom (data-lazyload)', value: 'custom' },
            { label: 'Both', value: 'both' },
          ],
          defaultValue: 'custom',
        },
        {
          name: 'placeholderImage',
          type: 'text',
          label: 'Placeholder Image',
          admin: {
            description: 'Base64 or URL for placeholder while images load',
          },
          defaultValue:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=',
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
          admin: {
            description: 'SEO title for search engines',
          },
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          label: 'Meta Description',
          admin: {
            description: 'SEO description for search engines',
          },
        },
        {
          name: 'ogImage',
          type: 'upload',
          relationTo: 'media',
          label: 'OG Image',
          admin: {
            description: 'Open Graph image for social media sharing',
          },
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
          admin: {
            description: 'Canonical URL for this page',
          },
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
        {
          name: 'structuredData',
          type: 'textarea',
          label: 'Structured Data (JSON-LD)',
          admin: {
            description: 'JSON-LD structured data for rich snippets',
          },
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
          admin: {
            description: 'Add skip navigation link for screen readers',
          },
        },
        {
          name: 'ariaLabelsEnabled',
          type: 'checkbox',
          label: 'Enable ARIA Labels',
          defaultValue: true,
          admin: {
            description: 'Include ARIA labels for accessibility',
          },
        },
        {
          name: 'altTextRequired',
          type: 'checkbox',
          label: 'Require Alt Text for Images',
          defaultValue: true,
          admin: {
            description: 'Make alt text mandatory for all images',
          },
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
        {
          name: 'headingHierarchy',
          type: 'checkbox',
          label: 'Enforce Heading Hierarchy',
          defaultValue: true,
          admin: {
            description: 'Ensure proper heading structure (H1 > H2 > H3)',
          },
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
            description: 'Screen width for mobile (e.g., 420px)',
          },
          defaultValue: '420px',
        },
        {
          name: 'tabletBreakpoint',
          type: 'text',
          label: 'Tablet Breakpoint',
          admin: {
            description: 'Screen width for tablet (e.g., 800px)',
          },
          defaultValue: '800px',
        },
        {
          name: 'desktopBreakpoint',
          type: 'text',
          label: 'Desktop Breakpoint',
          admin: {
            description: 'Screen width for desktop (e.g., 1400px)',
          },
          defaultValue: '1400px',
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
          name: 'mobileStackBehavior',
          type: 'select',
          label: 'Mobile Stack Behavior',
          options: [
            { label: 'Stack Vertically', value: 'stack' },
            { label: 'Maintain Horizontal', value: 'horizontal' },
            { label: 'Auto', value: 'auto' },
          ],
          defaultValue: 'stack',
        },
      ],
    },
    // Image Optimization Settings
    {
      name: 'imageOptimizationSettings',
      type: 'group',
      label: 'Image Optimization Settings',
      fields: [
        {
          name: 'enableAutoFormat',
          type: 'checkbox',
          label: 'Enable Auto Format',
          defaultValue: true,
          admin: {
            description: 'Automatically serve WebP/AVIF when supported',
          },
        },
        {
          name: 'enableCompression',
          type: 'checkbox',
          label: 'Enable Compression',
          defaultValue: true,
          admin: {
            description: 'Compress images for faster loading',
          },
        },
        {
          name: 'compressionQuality',
          type: 'text',
          label: 'Compression Quality',
          admin: {
            description: 'Quality level for image compression (1-100)',
          },
          defaultValue: '80',
        },
        {
          name: 'enableResponsiveImages',
          type: 'checkbox',
          label: 'Enable Responsive Images',
          defaultValue: true,
          admin: {
            description: 'Use srcset for responsive image loading',
          },
        },
        {
          name: 'retinaSupport',
          type: 'checkbox',
          label: 'Retina Display Support',
          defaultValue: true,
          admin: {
            description: 'Serve 2x images for retina displays',
          },
        },
      ],
    },
    // Performance Settings
    {
      name: 'performanceSettings',
      type: 'group',
      label: 'Performance Settings',
      fields: [
        {
          name: 'enablePreload',
          type: 'checkbox',
          label: 'Enable Critical Resource Preload',
          defaultValue: false,
          admin: {
            description: 'Preload critical images and fonts',
          },
        },
        {
          name: 'preloadHeroImage',
          type: 'checkbox',
          label: 'Preload Hero Image',
          defaultValue: false,
          admin: {
            description: 'Preload the hero section image for faster LCP',
          },
        },
        {
          name: 'deferNonCritical',
          type: 'checkbox',
          label: 'Defer Non-Critical Resources',
          defaultValue: true,
          admin: {
            description: 'Defer loading of non-critical images',
          },
        },
        {
          name: 'enableCaching',
          type: 'checkbox',
          label: 'Enable Browser Caching',
          defaultValue: true,
          admin: {
            description: 'Cache assets in browser',
          },
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
          name: 'pageLayout',
          type: 'select',
          label: 'Page Layout',
          options: [
            { label: 'Full Width', value: 'full-width' },
            { label: 'Boxed', value: 'boxed' },
            { label: 'Wide', value: 'wide' },
          ],
          defaultValue: 'full-width',
        },
        {
          name: 'contentMaxWidth',
          type: 'text',
          label: 'Content Max Width',
          admin: {
            description: 'Maximum width for content sections (e.g., 1400px)',
          },
        },
        {
          name: 'rowSpacing',
          type: 'text',
          label: 'Row Spacing',
          admin: {
            description: 'Spacing between rows (e.g., 40px, 2.5rem)',
          },
        },
        {
          name: 'columnGap',
          type: 'text',
          label: 'Column Gap',
          admin: {
            description: 'Gap between columns (e.g., 30px, 2rem)',
          },
        },
      ],
    },
    // Custom CSS
    {
      name: 'customCSS',
      type: 'group',
      label: 'Custom CSS',
      fields: [
        {
          name: 'enableCustomCSS',
          type: 'checkbox',
          label: 'Enable Custom CSS',
          defaultValue: false,
          admin: {
            description: 'Allow custom CSS overrides',
          },
        },
        {
          name: 'heroSectionCSS',
          type: 'textarea',
          label: 'Hero Section Custom CSS',
          admin: {
            description: 'Custom CSS for hero section',
            condition: (data) => data?.customCSS?.enableCustomCSS,
          },
        },
        {
          name: 'introSectionCSS',
          type: 'textarea',
          label: 'Intro Section Custom CSS',
          admin: {
            description: 'Custom CSS for intro section',
            condition: (data) => data?.customCSS?.enableCustomCSS,
          },
        },
        {
          name: 'halfImageSectionCSS',
          type: 'textarea',
          label: 'Half Image Section Custom CSS',
          admin: {
            description: 'Custom CSS for half image section',
            condition: (data) => data?.customCSS?.enableCustomCSS,
          },
        },
        {
          name: 'globalCustomCSS',
          type: 'textarea',
          label: 'Global Custom CSS',
          admin: {
            description: 'Custom CSS applied to entire page',
            condition: (data) => data?.customCSS?.enableCustomCSS,
          },
        },
      ],
    },
    // Custom JavaScript
    {
      name: 'customJavaScript',
      type: 'group',
      label: 'Custom JavaScript',
      fields: [
        {
          name: 'enableCustomJS',
          type: 'checkbox',
          label: 'Enable Custom JavaScript',
          defaultValue: false,
          admin: {
            description: 'Allow custom JavaScript code',
          },
        },
        {
          name: 'headerScript',
          type: 'textarea',
          label: 'Header Script',
          admin: {
            description: 'JavaScript to load in the header',
            condition: (data) => data?.customJavaScript?.enableCustomJS,
          },
        },
        {
          name: 'footerScript',
          type: 'textarea',
          label: 'Footer Script',
          admin: {
            description: 'JavaScript to load in the footer',
            condition: (data) => data?.customJavaScript?.enableCustomJS,
          },
        },
        {
          name: 'onLoadScript',
          type: 'textarea',
          label: 'On Load Script',
          admin: {
            description: 'JavaScript to execute on page load',
            condition: (data) => data?.customJavaScript?.enableCustomJS,
          },
        },
      ],
    },
    // Module/Component Classes
    {
      name: 'moduleClasses',
      type: 'group',
      label: 'Module Classes',
      admin: {
        description: 'Custom CSS classes for each module',
      },
      fields: [
        {
          name: 'heroModuleClass',
          type: 'text',
          label: 'Hero Module Class',
          admin: {
            description: 'Additional CSS classes for hero module (e.g., banner, mobile-stack)',
          },
          defaultValue: 'banner mobile-stack',
        },
        {
          name: 'introModuleClass',
          type: 'text',
          label: 'Intro Module Class',
          admin: {
            description: 'Additional CSS classes for intro module',
          },
          defaultValue: 'container viewport option-1 wide wow fadeInUp',
        },
        {
          name: 'halfImageModuleClass',
          type: 'text',
          label: 'Half Image Module Class',
          admin: {
            description: 'Additional CSS classes for half image module',
          },
          defaultValue: 'viewport half-image container wow fadeInLeft',
        },
      ],
    },
    // Data Attributes
    {
      name: 'dataAttributes',
      type: 'group',
      label: 'Data Attributes',
      admin: {
        description: 'Custom data attributes for tracking and functionality',
      },
      fields: [
        {
          name: 'heroDataAttributes',
          type: 'array',
          label: 'Hero Section Data Attributes',
          fields: [
            {
              name: 'attribute',
              type: 'text',
              label: 'Attribute Name',
              required: true,
              admin: {
                description: 'e.g., data-s3-module, data-tracking-id',
              },
            },
            {
              name: 'value',
              type: 'text',
              label: 'Attribute Value',
            },
          ],
        },
        {
          name: 'introDataAttributes',
          type: 'array',
          label: 'Intro Section Data Attributes',
          fields: [
            {
              name: 'attribute',
              type: 'text',
              label: 'Attribute Name',
              required: true,
            },
            {
              name: 'value',
              type: 'text',
              label: 'Attribute Value',
            },
          ],
        },
        {
          name: 'halfImageDataAttributes',
          type: 'array',
          label: 'Half Image Section Data Attributes',
          fields: [
            {
              name: 'attribute',
              type: 'text',
              label: 'Attribute Name',
              required: true,
            },
            {
              name: 'value',
              type: 'text',
              label: 'Attribute Value',
            },
          ],
        },
      ],
    },
    // API Keys and Configuration
    {
      name: 'apiConfiguration',
      type: 'group',
      label: 'API Configuration',
      admin: {
        description: 'API keys and external service configuration',
      },
      fields: [
        {
          name: 'enableAPIKeys',
          type: 'checkbox',
          label: 'Enable API Key Fields',
          defaultValue: false,
          admin: {
            description: 'Show API key configuration fields',
          },
        },
        {
          name: 'contentAPIKey',
          type: 'text',
          label: 'Content API Key',
          admin: {
            description: 'API key for content management',
            condition: (data) => data?.apiConfiguration?.enableAPIKeys,
          },
        },
        {
          name: 'analyticsTrackingID',
          type: 'text',
          label: 'Analytics Tracking ID',
          admin: {
            description: 'Google Analytics or other tracking ID',
          },
        },
        {
          name: 'cdnBaseURL',
          type: 'text',
          label: 'CDN Base URL',
          admin: {
            description: 'Base URL for CDN assets (e.g., https://www.datocms-assets.com/105497/)',
          },
        },
      ],
    },
    // Responsive Behavior
    {
      name: 'responsiveBehavior',
      type: 'group',
      label: 'Responsive Behavior',
      fields: [
        {
          name: 'mobileMenuStyle',
          type: 'select',
          label: 'Mobile Menu Style',
          options: [
            { label: 'Hamburger', value: 'hamburger' },
            { label: 'Full Screen', value: 'fullscreen' },
            { label: 'Slide In', value: 'slide-in' },
          ],
          defaultValue: 'hamburger',
        },
        {
          name: 'tabletLayout',
          type: 'select',
          label: 'Tablet Layout',
          options: [
            { label: 'Desktop Style', value: 'desktop' },
            { label: 'Mobile Style', value: 'mobile' },
            { label: 'Hybrid', value: 'hybrid' },
          ],
          defaultValue: 'hybrid',
        },
        {
          name: 'imageScaling',
          type: 'select',
          label: 'Image Scaling on Mobile',
          options: [
            { label: 'Fit', value: 'fit' },
            { label: 'Fill', value: 'fill' },
            { label: 'Cover', value: 'cover' },
            { label: 'Contain', value: 'contain' },
          ],
          defaultValue: 'cover',
        },
        {
          name: 'mobileTextSize',
          type: 'select',
          label: 'Mobile Text Size',
          options: [
            { label: 'Same as Desktop', value: 'same' },
            { label: 'Smaller', value: 'smaller' },
            { label: 'Larger', value: 'larger' },
          ],
          defaultValue: 'same',
        },
      ],
    },
    // Page Metadata
    {
      name: 'pageMetadata',
      type: 'group',
      label: 'Page Metadata',
      fields: [
        {
          name: 'pageID',
          type: 'text',
          label: 'Page ID',
          admin: {
            description: 'Unique identifier for this page',
          },
        },
        {
          name: 'pageVersion',
          type: 'text',
          label: 'Page Version',
          admin: {
            description: 'Version number for tracking',
          },
          defaultValue: '1.0.0',
        },
        {
          name: 'author',
          type: 'text',
          label: 'Page Author',
          admin: {
            description: 'Creator or maintainer of this page',
          },
        },
        {
          name: 'lastModifiedBy',
          type: 'text',
          label: 'Last Modified By',
          admin: {
            description: 'Last person to modify this page',
          },
        },
        {
          name: 'notes',
          type: 'textarea',
          label: 'Internal Notes',
          admin: {
            description: 'Internal notes about this page (not displayed publicly)',
          },
        },
      ],
    },
    // Schema Markup
    {
      name: 'schemaMarkup',
      type: 'group',
      label: 'Schema Markup',
      admin: {
        description: 'Structured data for search engines',
      },
      fields: [
        {
          name: 'enableSchema',
          type: 'checkbox',
          label: 'Enable Schema Markup',
          defaultValue: false,
        },
        {
          name: 'schemaType',
          type: 'select',
          label: 'Schema Type',
          options: [
            { label: 'WebPage', value: 'WebPage' },
            { label: 'Product', value: 'Product' },
            { label: 'Service', value: 'Service' },
            { label: 'LocalBusiness', value: 'LocalBusiness' },
            { label: 'MedicalBusiness', value: 'MedicalBusiness' },
          ],
          admin: {
            condition: (data) => data?.schemaMarkup?.enableSchema,
          },
        },
        {
          name: 'businessName',
          type: 'text',
          label: 'Business Name',
          admin: {
            condition: (data) => data?.schemaMarkup?.enableSchema,
          },
        },
        {
          name: 'businessDescription',
          type: 'textarea',
          label: 'Business Description',
          admin: {
            condition: (data) => data?.schemaMarkup?.enableSchema,
          },
        },
        {
          name: 'customSchema',
          type: 'textarea',
          label: 'Custom Schema JSON',
          admin: {
            description: 'Custom JSON-LD schema markup',
            condition: (data) => data?.schemaMarkup?.enableSchema,
          },
        },
      ],
    },
    // Content Variations
    {
      name: 'contentVariations',
      type: 'group',
      label: 'Content Variations',
      admin: {
        description: 'A/B testing and content variations',
      },
      fields: [
        {
          name: 'enableVariations',
          type: 'checkbox',
          label: 'Enable Content Variations',
          defaultValue: false,
          admin: {
            description: 'Enable A/B testing with content variations',
          },
        },
        {
          name: 'variationName',
          type: 'text',
          label: 'Variation Name',
          admin: {
            description: 'Name for this content variation',
            condition: (data) => data?.contentVariations?.enableVariations,
          },
        },
        {
          name: 'variationPercentage',
          type: 'text',
          label: 'Traffic Percentage',
          admin: {
            description: 'Percentage of traffic to show this variation (0-100)',
            condition: (data) => data?.contentVariations?.enableVariations,
          },
        },
      ],
    },
    // Advanced Settings
    {
      name: 'advancedSettings',
      type: 'group',
      label: 'Advanced Settings',
      fields: [
        {
          name: 'enableDebugMode',
          type: 'checkbox',
          label: 'Enable Debug Mode',
          defaultValue: false,
          admin: {
            description: 'Show debug information in console',
          },
        },
        {
          name: 'customMainID',
          type: 'text',
          label: 'Custom Main Element ID',
          admin: {
            description: 'Custom ID for main element (default: main)',
          },
          defaultValue: 'main',
        },
        {
          name: 'enableSmoothScroll',
          type: 'checkbox',
          label: 'Enable Smooth Scroll',
          defaultValue: false,
          admin: {
            description: 'Enable smooth scrolling behavior',
          },
        },
        {
          name: 'loadingStrategy',
          type: 'select',
          label: 'Loading Strategy',
          options: [
            { label: 'Default', value: 'default' },
            { label: 'Progressive', value: 'progressive' },
            { label: 'Deferred', value: 'deferred' },
          ],
          defaultValue: 'default',
        },
        {
          name: 'cacheControl',
          type: 'text',
          label: 'Cache Control',
          admin: {
            description: 'Cache-Control header value',
          },
        },
      ],
    },
    // Status and Visibility
    {
      name: 'isActive',
      type: 'checkbox',
      label: 'Active',
      defaultValue: true,
      admin: {
        description: 'Toggle to enable/disable this component',
      },
    },
    {
      name: 'isDraft',
      type: 'checkbox',
      label: 'Draft Mode',
      defaultValue: false,
      admin: {
        description: 'Mark this component as draft (not visible publicly)',
      },
    },
    {
      name: 'publishDate',
      type: 'date',
      label: 'Publish Date',
      admin: {
        description: 'Schedule when this component should go live',
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
    {
      name: 'unpublishDate',
      type: 'date',
      label: 'Unpublish Date',
      admin: {
        description: 'Schedule when this component should be unpublished',
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
  ],
  timestamps: true,
  versions: {
    drafts: true,
    maxPerDoc: 50,
  },
}
