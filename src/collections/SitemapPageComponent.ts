import { CollectionConfig } from 'payload'

export const SitemapPageComponent: CollectionConfig = {
  slug: 'sitemap-page-component',
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
      defaultValue: 'Sitemap Page Component',
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
          name: 'className',
          type: 'text',
          label: 'Additional CSS Classes',
          admin: {
            description: 'e.g., banner, mobile-stack, no-bg',
          },
          defaultValue: 'banner mobile-stack no-bg',
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
              label: 'Sitemap',
              url: '/sitemap/',
              ariaLabel: 'Breadcrumbs to help navigate the user',
            },
          ],
        },
        {
          name: 'title',
          type: 'text',
          required: true,
          defaultValue: 'Sitemap',
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
      ],
    },
    // Sitemap Navigation Section
    {
      name: 'sitemapNavSection',
      type: 'group',
      label: 'Sitemap Navigation Section',
      fields: [
        {
          name: 'show',
          type: 'checkbox',
          label: 'Show Section',
          defaultValue: true,
        },
        {
          name: 'className',
          type: 'text',
          label: 'Additional CSS Classes',
          admin: {
            description: 'e.g., container, mod_sitemap',
          },
          defaultValue: 'container mod_sitemap ',
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
            description: 'CSS color value',
          },
        },
        {
          name: 'paddingTop',
          type: 'text',
          label: 'Padding Top',
          admin: {
            description: 'CSS padding value (e.g., 60px, 4rem)',
          },
        },
        {
          name: 'paddingBottom',
          type: 'text',
          label: 'Padding Bottom',
          admin: {
            description: 'CSS padding value (e.g., 60px, 4rem)',
          },
        },
        {
          name: 'navType',
          type: 'select',
          label: 'Navigation Type',
          options: [
            { label: 'Vertical', value: 'vertical' },
            { label: 'Horizontal', value: 'horizontal' },
          ],
          defaultValue: 'vertical',
        },
        {
          name: 'navVariant',
          type: 'select',
          label: 'Navigation Variant',
          options: [
            { label: 'Default', value: 'default' },
            { label: 'Compact', value: 'compact' },
            { label: 'Expanded', value: 'expanded' },
          ],
          defaultValue: 'default',
        },
        {
          name: 'hamburgerColor',
          type: 'text',
          label: 'Hamburger Color',
          admin: {
            description: 'CSS color value for hamburger menu',
          },
          defaultValue: '#000000',
        },
        {
          name: 'hamburgerColorExpanded',
          type: 'text',
          label: 'Hamburger Color (Expanded)',
          admin: {
            description: 'CSS color value for expanded hamburger',
          },
          defaultValue: '#000000',
        },
        {
          name: 'menuOffset',
          type: 'text',
          label: 'Menu Offset',
          admin: {
            description: 'Offset for menu positioning',
          },
          defaultValue: '0px',
        },
        {
          name: 'menuOffsetMobile',
          type: 'text',
          label: 'Menu Offset Mobile',
          admin: {
            description: 'Offset for menu positioning on mobile',
          },
          defaultValue: '0px',
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
              label: 'Link Label',
              required: true,
            },
            {
              name: 'url',
              type: 'text',
              label: 'Link URL',
              required: true,
            },
            {
              name: 'cssClass',
              type: 'text',
              label: 'CSS Class',
              admin: {
                description: 'Additional CSS classes (e.g., home, about, mega-menu)',
              },
            },
            {
              name: 'openInNewTab',
              type: 'checkbox',
              label: 'Open in New Tab',
              defaultValue: false,
            },
            {
              name: 'hasChildren',
              type: 'checkbox',
              label: 'Has Sub-menu',
              defaultValue: false,
            },
            {
              name: 'ariaLabel',
              type: 'text',
              label: 'ARIA Label',
            },
            {
              name: 'subItems',
              type: 'array',
              label: 'Sub-menu Items (Level 2)',
              admin: {
                description: 'Drag to reorder sub-menu items',
                condition: (data, siblingData) => siblingData?.hasChildren === true,
              },
              fields: [
                {
                  name: 'label',
                  type: 'text',
                  label: 'Link Label',
                  required: true,
                },
                {
                  name: 'url',
                  type: 'text',
                  label: 'Link URL',
                  required: true,
                },
                {
                  name: 'cssClass',
                  type: 'text',
                  label: 'CSS Class',
                  admin: {
                    description: 'Additional CSS classes (e.g., subcat-title)',
                  },
                },
                {
                  name: 'openInNewTab',
                  type: 'checkbox',
                  label: 'Open in New Tab',
                  defaultValue: false,
                },
                {
                  name: 'rel',
                  type: 'text',
                  label: 'Rel Attribute',
                  admin: {
                    description: 'e.g., noopener',
                  },
                },
                {
                  name: 'hasChildren',
                  type: 'checkbox',
                  label: 'Has Sub-menu',
                  defaultValue: false,
                },
                {
                  name: 'subItems',
                  type: 'array',
                  label: 'Sub-menu Items (Level 3)',
                  admin: {
                    description: 'Drag to reorder nested sub-menu items',
                    condition: (data, siblingData) => siblingData?.hasChildren === true,
                  },
                  fields: [
                    {
                      name: 'label',
                      type: 'text',
                      label: 'Link Label',
                      required: true,
                    },
                    {
                      name: 'url',
                      type: 'text',
                      label: 'Link URL',
                      required: true,
                    },
                    {
                      name: 'cssClass',
                      type: 'text',
                      label: 'CSS Class',
                    },
                    {
                      name: 'openInNewTab',
                      type: 'checkbox',
                      label: 'Open in New Tab',
                      defaultValue: false,
                    },
                  ],
                },
              ],
            },
          ],
          defaultValue: [
            {
              label: 'Home',
              url: '/',
              cssClass: 'home',
              hasChildren: false,
            },
            {
              label: 'About',
              url: '/about/',
              cssClass: 'about',
              hasChildren: true,
              ariaLabel: 'About dropdown',
              subItems: [
                {
                  label: 'Our Founders',
                  url: '/about/our-founders/',
                  cssClass: 'our-founders',
                },
                {
                  label: 'Providers',
                  url: '/locations/?tab=providers',
                  cssClass: 'providers',
                  rel: 'noopener',
                },
                {
                  label: 'Testimonials',
                  url: '/about/testimonials/',
                  cssClass: 'testimonials',
                },
                {
                  label: 'Blog',
                  url: '/blog/',
                  cssClass: 'blog',
                },
                {
                  label: 'Videos',
                  url: '/about/resource-center/',
                  cssClass: 'videos',
                },
                {
                  label: 'Privacy Policy',
                  url: '/about/confidentiality-statement/',
                  cssClass: 'privacy-policy',
                },
              ],
            },
            {
              label: 'Financing',
              url: '/financing/',
              cssClass: 'financing',
              hasChildren: false,
            },
            {
              label: 'Contact',
              url: '/contact/',
              cssClass: 'contact',
              hasChildren: false,
            },
          ],
        },
      ],
    },
    // Social Media & Contact Section
    {
      name: 'socialContactSection',
      type: 'group',
      label: 'Social Media & Contact Section',
      fields: [
        {
          name: 'show',
          type: 'checkbox',
          label: 'Show Section',
          defaultValue: true,
        },
        {
          name: 'phoneNumber',
          type: 'text',
          label: 'Phone Number',
          admin: {
            description: 'Display phone number',
          },
          defaultValue: '(407) 333-4300',
        },
        {
          name: 'phoneNumberLink',
          type: 'text',
          label: 'Phone Number Link',
          admin: {
            description: 'tel: link format',
          },
          defaultValue: 'tel:+14073334300',
        },
        {
          name: 'phoneAriaLabel',
          type: 'text',
          label: 'Phone ARIA Label',
          defaultValue: 'Give Goldfingers Aesthetics a phone call',
        },
        {
          name: 'phoneEventTracking',
          type: 'text',
          label: 'Phone Event Tracking',
          admin: {
            description: 'Event tracking attribute',
          },
          defaultValue: 'Phone - Mobile Nav',
        },
        {
          name: 'socialLinks',
          type: 'array',
          label: 'Social Media Links',
          admin: {
            description: 'Drag to reorder social media links',
          },
          fields: [
            {
              name: 'platform',
              type: 'select',
              label: 'Platform',
              options: [
                { label: 'Instagram', value: 'instagram' },
                { label: 'Facebook', value: 'facebook' },
                { label: 'YouTube', value: 'youtube' },
                { label: 'Twitter', value: 'twitter' },
                { label: 'LinkedIn', value: 'linkedin' },
                { label: 'TikTok', value: 'tiktok' },
              ],
              required: true,
            },
            {
              name: 'url',
              type: 'text',
              label: 'URL',
              required: true,
            },
            {
              name: 'title',
              type: 'text',
              label: 'Title Attribute',
            },
            {
              name: 'ariaLabel',
              type: 'text',
              label: 'ARIA Label',
            },
            {
              name: 'iconClass',
              type: 'text',
              label: 'Icon CSS Class',
              admin: {
                description: 'CSS class for the icon',
              },
            },
          ],
          defaultValue: [
            {
              platform: 'instagram',
              url: 'https://www.instagram.com/goldfingers.aesthetics/',
              title: 'Goldfingers Aesthetics on Instagram',
              ariaLabel: 'Goldfingers Aesthetics on Instagram opens in a new tab',
              iconClass: 'instagram-icon',
            },
            {
              platform: 'facebook',
              url: 'https://www.facebook.com/goldfingersaesthetics/',
              title: 'Goldfingers Aesthetics on Facebook',
              ariaLabel: 'Goldfingers Aesthetics on Facebook opens in a new tab',
              iconClass: 'facebook-icon',
            },
            {
              platform: 'youtube',
              url: 'https://www.youtube.com/channel/UCGb3ma3A8U69pmhGnccOtfQ',
              title: 'Goldfingers Aesthetics on Youtube',
              ariaLabel: 'Goldfingers Aesthetics on Youtube opens in a new tab',
              iconClass: 'youtube-icon',
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
            { label: 'Sitemap Navigation Section', value: 'sitemapNav' },
          ],
        },
      ],
      defaultValue: [{ section: 'hero' }, { section: 'sitemapNav' }],
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
    // Navigation Styles
    {
      name: 'navigationStyles',
      type: 'group',
      label: 'Navigation Styles',
      fields: [
        {
          name: 'linkColor',
          type: 'text',
          label: 'Navigation Link Color',
        },
        {
          name: 'linkHoverColor',
          type: 'text',
          label: 'Navigation Link Hover Color',
        },
        {
          name: 'linkActiveColor',
          type: 'text',
          label: 'Navigation Link Active Color',
        },
        {
          name: 'linkFontSize',
          type: 'text',
          label: 'Link Font Size',
          admin: {
            description: 'CSS font-size value',
          },
        },
        {
          name: 'linkFontWeight',
          type: 'text',
          label: 'Link Font Weight',
        },
        {
          name: 'level1FontSize',
          type: 'text',
          label: 'Level 1 Font Size',
        },
        {
          name: 'level2FontSize',
          type: 'text',
          label: 'Level 2 Font Size',
        },
        {
          name: 'level3FontSize',
          type: 'text',
          label: 'Level 3 Font Size',
        },
        {
          name: 'dropdownIconColor',
          type: 'text',
          label: 'Dropdown Icon Color',
        },
        {
          name: 'submenuBackgroundColor',
          type: 'text',
          label: 'Submenu Background Color',
        },
        {
          name: 'submenuPadding',
          type: 'text',
          label: 'Submenu Padding',
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
          defaultValue: 'Sitemap - Goldfingers Aesthetics',
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          label: 'Meta Description',
          defaultValue:
            'View the complete sitemap for Goldfingers Aesthetics. Easily navigate through all our services, pages, and resources.',
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
          defaultValue: 'sitemap, navigation, site structure, goldfingers aesthetics',
        },
        {
          name: 'canonicalUrl',
          type: 'text',
          label: 'Canonical URL',
          defaultValue: 'https://www.goldfingersaesthetics.com/sitemap/',
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
            description: 'Add schema.org structured data in JSON-LD format',
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
          name: 'keyboardNavigationEnabled',
          type: 'checkbox',
          label: 'Enhanced Keyboard Navigation',
          defaultValue: true,
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
          name: 'mobileNavType',
          type: 'select',
          label: 'Mobile Navigation Type',
          options: [
            { label: 'Vertical', value: 'vertical' },
            { label: 'Horizontal', value: 'horizontal' },
          ],
          defaultValue: 'vertical',
        },
        {
          name: 'tabletNavType',
          type: 'select',
          label: 'Tablet Navigation Type',
          options: [
            { label: 'Vertical', value: 'vertical' },
            { label: 'Horizontal', value: 'horizontal' },
          ],
          defaultValue: 'vertical',
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
      ],
    },
    // Advanced Settings
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
            description: 'Add custom CSS styles for this page',
          },
        },
        {
          name: 'customJS',
          type: 'textarea',
          label: 'Custom JavaScript',
          admin: {
            description: 'Add custom JavaScript code for this page',
          },
        },
        {
          name: 'lazyLoadImages',
          type: 'checkbox',
          label: 'Enable Lazy Loading for Images',
          defaultValue: true,
        },
        {
          name: 'enableCaching',
          type: 'checkbox',
          label: 'Enable Page Caching',
          defaultValue: true,
        },
      ],
    },
    // Integration Settings
    {
      name: 'integrationSettings',
      type: 'group',
      label: 'Integration Settings',
      fields: [
        {
          name: 'googleAnalyticsId',
          type: 'text',
          label: 'Google Analytics ID',
          admin: {
            description: 'GA tracking ID for this page',
          },
        },
        {
          name: 'enableTracking',
          type: 'checkbox',
          label: 'Enable Page Tracking',
          defaultValue: true,
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
          name: 'imageOptimization',
          type: 'checkbox',
          label: 'Enable Image Optimization',
          defaultValue: true,
        },
        {
          name: 'imageQuality',
          type: 'text',
          label: 'Image Quality',
          admin: {
            description: 'Compression quality (1-100)',
          },
          defaultValue: '85',
        },
        {
          name: 'responsiveImageSizes',
          type: 'text',
          label: 'Responsive Image Sizes',
          admin: {
            description: 'Comma-separated widths for responsive images',
          },
          defaultValue: '420,630,800,1200,1400,2100',
        },
        {
          name: 'minifyCSS',
          type: 'checkbox',
          label: 'Minify CSS',
          defaultValue: true,
        },
        {
          name: 'minifyJS',
          type: 'checkbox',
          label: 'Minify JavaScript',
          defaultValue: true,
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
