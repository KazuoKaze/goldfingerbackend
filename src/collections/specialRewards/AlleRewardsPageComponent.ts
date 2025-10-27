import { CollectionConfig } from 'payload'

export const AlleRewardsPageComponent: CollectionConfig = {
  slug: 'alle-rewards-page-component',
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
      defaultValue: 'Allē Rewards Page Component',
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
            description: 'e.g., banner, mobile-stack',
          },
          defaultValue: 'banner mobile-stack',
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
            {
              label: 'Alle',
              url: '/specials-and-rewards/alle/',
              ariaLabel: 'Breadcrumbs to help navigate the user',
            },
          ],
        },
        {
          name: 'title',
          type: 'text',
          required: true,
          defaultValue: 'Allē Rewards',
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
              defaultValue: 'nurse smiling with woman',
            },
          ],
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
          name: 'className',
          type: 'text',
          label: 'Additional CSS Classes',
          admin: {
            description: 'e.g., option-1, viewport, container',
          },
          defaultValue: 'option-1 viewport container',
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
          name: 'paddingBottom',
          type: 'text',
          label: 'Padding Bottom',
          admin: {
            description: 'CSS padding value (e.g., 0, 20px, 2rem)',
          },
          defaultValue: '0',
        },
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
          label: 'Logo',
        },
        {
          name: 'logoAlt',
          type: 'text',
          label: 'Logo Alt Text',
          defaultValue: 'Goldfingers aesthetic logo',
        },
        {
          name: 'logoWidth',
          type: 'text',
          label: 'Logo Width',
          defaultValue: '58',
        },
        {
          name: 'logoHeight',
          type: 'text',
          label: 'Logo Height',
          defaultValue: '64',
        },
        {
          name: 'content',
          type: 'richText',
          label: 'Content',
          required: true,
        },
      ],
    },
    // Half Image Section (Program Details)
    {
      name: 'halfImageSection',
      type: 'group',
      label: 'Half Image Section (Program Details)',
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
            description: 'e.g., viewport, half-image, container',
          },
          defaultValue: 'viewport half-image container',
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
          name: 'imagePosition',
          type: 'select',
          label: 'Image Position',
          options: [
            { label: 'Left', value: 'left' },
            { label: 'Right (Flipped)', value: 'flipped' },
          ],
          defaultValue: 'flipped',
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
          defaultValue: 'top',
        },
        {
          name: 'marginBottom',
          type: 'text',
          label: 'Margin Bottom',
          admin: {
            description: 'CSS margin value (e.g., 0, mb-0)',
          },
          defaultValue: 'mb-0',
        },
        {
          name: 'copyPadding',
          type: 'checkbox',
          label: 'Add Padding to Content',
          defaultValue: true,
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Heading',
          required: true,
          defaultValue: 'Program Details',
        },
        {
          name: 'headingColor',
          type: 'text',
          label: 'Heading Color',
        },
        {
          name: 'content',
          type: 'richText',
          label: 'Content',
          required: true,
        },
        {
          name: 'image',
          type: 'group',
          label: 'Image',
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
              defaultValue: 'woman holding mirror to her face while doctor points to her chin',
            },
          ],
        },
      ],
    },
    // Column Section 1 (Allē Flash)
    {
      name: 'columnSection1',
      type: 'group',
      label: 'Column Section 1 (Allē Flash)',
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
            description: 'e.g., viewport, container, has-media',
          },
          defaultValue: 'viewport container has-media',
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
          name: 'mediaPosition',
          type: 'select',
          label: 'Media Position',
          options: [
            { label: 'Left', value: 'media-left' },
            { label: 'Right', value: 'media-right' },
          ],
          defaultValue: 'media-left',
        },
        {
          name: 'marginBottom',
          type: 'text',
          label: 'Margin Bottom',
          admin: {
            description: 'e.g., mb-30, mb-0',
          },
          defaultValue: 'mb-30',
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Heading',
          required: true,
          defaultValue: 'Allē Flash',
        },
        {
          name: 'headingColor',
          type: 'text',
          label: 'Heading Color',
        },
        {
          name: 'content',
          type: 'richText',
          label: 'Content',
          required: true,
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
              name: 'desktop',
              type: 'upload',
              relationTo: 'media',
              label: 'Desktop Image',
            },
            {
              name: 'alt',
              type: 'text',
              label: 'Alt Text',
            },
            {
              name: 'width',
              type: 'text',
              label: 'Image Width',
            },
            {
              name: 'height',
              type: 'text',
              label: 'Image Height',
            },
          ],
        },
      ],
    },
    // Banner Section 1
    {
      name: 'bannerSection1',
      type: 'group',
      label: 'Banner Section 1 (Image Banner)',
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
            description: 'e.g., dark, hide-divider, viewport, background-4',
          },
          defaultValue: 'dark hide-divider viewport background-4',
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
          name: 'textAlign',
          type: 'select',
          label: 'Text Alignment',
          options: [
            { label: 'Left', value: 'left' },
            { label: 'Center', value: 'center' },
            { label: 'Right', value: 'right' },
          ],
          defaultValue: 'center',
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
              defaultValue: 'Banner media',
            },
          ],
        },
        {
          name: 'content',
          type: 'richText',
          label: 'Banner Content',
          admin: {
            description: 'Main content/image to display in banner',
          },
        },
        {
          name: 'contentImage',
          type: 'group',
          label: 'Content Image (Alternative)',
          admin: {
            description: 'Upload an image to display as banner content',
          },
          fields: [
            {
              name: 'url',
              type: 'upload',
              relationTo: 'media',
              label: 'Image',
            },
            {
              name: 'alt',
              type: 'text',
              label: 'Alt Text',
              defaultValue: 'Content',
            },
            {
              name: 'width',
              type: 'text',
              label: 'Image Width',
            },
            {
              name: 'height',
              type: 'text',
              label: 'Image Height',
            },
          ],
        },
      ],
    },
    // Column Section 2 (Get Started Today)
    {
      name: 'columnSection2',
      type: 'group',
      label: 'Column Section 2 (Get Started Today)',
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
            description: 'e.g., viewport, container, has-media',
          },
          defaultValue: 'viewport container has-media',
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
          name: 'mediaPosition',
          type: 'select',
          label: 'Media Position',
          options: [
            { label: 'Left', value: 'media-left' },
            { label: 'Right', value: 'media-right' },
          ],
          defaultValue: 'media-left',
        },
        {
          name: 'marginTop',
          type: 'text',
          label: 'Margin Top',
          admin: {
            description: 'e.g., mt-30, mt-0',
          },
          defaultValue: 'mt-30',
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Heading',
          required: true,
          defaultValue: 'Get Started Today',
        },
        {
          name: 'headingColor',
          type: 'text',
          label: 'Heading Color',
        },
        {
          name: 'content',
          type: 'richText',
          label: 'Content',
          required: true,
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
              defaultValue: 'Benefits banner',
            },
            {
              name: 'width',
              type: 'text',
              label: 'Image Width',
            },
            {
              name: 'height',
              type: 'text',
              label: 'Image Height',
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
            { label: 'Intro Section', value: 'intro' },
            { label: 'Half Image Section (Program Details)', value: 'halfImage' },
            { label: 'Column Section 1 (Allē Flash)', value: 'columnSection1' },
            { label: 'Banner Section 1 (Image Banner)', value: 'bannerSection1' },
            { label: 'Column Section 2 (Get Started Today)', value: 'columnSection2' },
          ],
        },
      ],
      defaultValue: [
        { section: 'hero' },
        { section: 'intro' },
        { section: 'halfImage' },
        { section: 'columnSection1' },
        { section: 'bannerSection1' },
        { section: 'columnSection2' },
      ],
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
          name: 'h3FontSize',
          type: 'text',
          label: 'H3 Font Size',
        },
        {
          name: 'h3Color',
          type: 'text',
          label: 'H3 Color',
        },
        {
          name: 'h3FontWeight',
          type: 'text',
          label: 'H3 Font Weight',
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
        {
          name: 'paragraphSpacing',
          type: 'text',
          label: 'Paragraph Spacing',
        },
        {
          name: 'listStyleType',
          type: 'text',
          label: 'List Style Type',
          admin: {
            description: 'CSS list-style-type (e.g., disc, circle, square)',
          },
        },
        {
          name: 'listMarginLeft',
          type: 'text',
          label: 'List Margin Left',
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
          name: 'halfImageContentWidth',
          type: 'text',
          label: 'Half Image Content Width',
          admin: {
            description: 'Width percentage for half image sections (e.g., 50%)',
          },
          defaultValue: '50%',
        },
        {
          name: 'columnGap',
          type: 'text',
          label: 'Column Gap',
          admin: {
            description: 'Gap between columns (e.g., 30px, 2rem)',
          },
        },
        {
          name: 'rowGap',
          type: 'text',
          label: 'Row Gap',
          admin: {
            description: 'Gap between rows (e.g., 20px, 1.5rem)',
          },
        },
        {
          name: 'imageObjectFit',
          type: 'select',
          label: 'Image Object Fit',
          options: [
            { label: 'Cover', value: 'cover' },
            { label: 'Contain', value: 'contain' },
            { label: 'Fill', value: 'fill' },
            { label: 'None', value: 'none' },
          ],
          defaultValue: 'cover',
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
          name: 'fadeInDelay',
          type: 'text',
          label: 'Fade In Delay',
          admin: {
            description: 'Delay before fade in starts (e.g., 0.2s)',
          },
          defaultValue: '0s',
        },
        {
          name: 'slideInDuration',
          type: 'text',
          label: 'Slide In Duration',
          admin: {
            description: 'Duration for slide animations',
          },
          defaultValue: '1s',
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
        {
          name: 'enableWowAnimations',
          type: 'checkbox',
          label: 'Enable WOW.js Animations',
          admin: {
            description: 'Enable scroll-triggered animations',
          },
          defaultValue: true,
        },
        {
          name: 'wowOffset',
          type: 'text',
          label: 'WOW Animation Offset',
          admin: {
            description: 'Distance from viewport to trigger animation (px)',
          },
          defaultValue: '100',
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
          defaultValue: 'Allē Rewards - Goldfingers Aesthetics',
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
          name: 'mobileStackSections',
          type: 'checkbox',
          label: 'Stack Sections on Mobile',
          admin: {
            description: 'Automatically stack sections vertically on mobile devices',
          },
          defaultValue: true,
        },
        {
          name: 'mobileImageHeight',
          type: 'text',
          label: 'Mobile Image Height',
          admin: {
            description: 'Max height for images on mobile (e.g., 300px)',
          },
        },
        {
          name: 'mobileHideElements',
          type: 'text',
          label: 'Mobile Hidden Elements',
          admin: {
            description: 'Comma-separated list of element classes to hide on mobile',
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
          name: 'dataAttributes',
          type: 'array',
          label: 'Custom Data Attributes',
          admin: {
            description: 'Add custom data attributes to page elements',
          },
          fields: [
            {
              name: 'attribute',
              type: 'text',
              label: 'Attribute Name',
              admin: {
                description: 'e.g., data-tracking-id',
              },
            },
            {
              name: 'value',
              type: 'text',
              label: 'Attribute Value',
            },
            {
              name: 'targetSection',
              type: 'select',
              label: 'Apply To Section',
              options: [
                { label: 'Hero Section', value: 'hero' },
                { label: 'Intro Section', value: 'intro' },
                { label: 'Half Image Section', value: 'halfImage' },
                { label: 'Column Section 1', value: 'columnSection1' },
                { label: 'Banner Section 1', value: 'bannerSection1' },
                { label: 'Column Section 2', value: 'columnSection2' },
              ],
            },
          ],
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
        {
          name: 'preloadImages',
          type: 'checkbox',
          label: 'Preload Critical Images',
          admin: {
            description: 'Preload above-the-fold images for better performance',
          },
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
          name: 'facebookPixelId',
          type: 'text',
          label: 'Facebook Pixel ID',
        },
        {
          name: 'alleTrackingEnabled',
          type: 'checkbox',
          label: 'Enable Allē Tracking',
          admin: {
            description: 'Enable tracking for Allē rewards program',
          },
          defaultValue: false,
        },
        {
          name: 'alleTrackingCode',
          type: 'textarea',
          label: 'Allē Tracking Code',
          admin: {
            description: 'Custom tracking code for Allē integration',
          },
        },
        {
          name: 'marketingAutomationTags',
          type: 'array',
          label: 'Marketing Automation Tags',
          admin: {
            description: 'Tags for marketing automation platforms',
          },
          fields: [
            {
              name: 'platform',
              type: 'select',
              label: 'Platform',
              options: [
                { label: 'HubSpot', value: 'hubspot' },
                { label: 'Marketo', value: 'marketo' },
                { label: 'Pardot', value: 'pardot' },
                { label: 'ActiveCampaign', value: 'activecampaign' },
                { label: 'Other', value: 'other' },
              ],
            },
            {
              name: 'tagCode',
              type: 'textarea',
              label: 'Tag Code',
            },
          ],
        },
        {
          name: 'conversionTrackingEnabled',
          type: 'checkbox',
          label: 'Enable Conversion Tracking',
          defaultValue: false,
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
          name: 'imageFormat',
          type: 'select',
          label: 'Preferred Image Format',
          options: [
            { label: 'Auto (WebP with fallback)', value: 'auto' },
            { label: 'WebP', value: 'webp' },
            { label: 'AVIF', value: 'avif' },
            { label: 'JPEG', value: 'jpeg' },
            { label: 'PNG', value: 'png' },
          ],
          defaultValue: 'auto',
        },
        {
          name: 'responsiveImageSizes',
          type: 'text',
          label: 'Responsive Image Sizes',
          admin: {
            description: 'Comma-separated widths for responsive images (e.g., 420,800,1400)',
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
        {
          name: 'deferNonCriticalCSS',
          type: 'checkbox',
          label: 'Defer Non-Critical CSS',
          defaultValue: false,
        },
        {
          name: 'preloadCriticalAssets',
          type: 'checkbox',
          label: 'Preload Critical Assets',
          defaultValue: true,
        },
        {
          name: 'enableCDN',
          type: 'checkbox',
          label: 'Use CDN for Assets',
          defaultValue: true,
        },
        {
          name: 'cdnUrl',
          type: 'text',
          label: 'CDN Base URL',
          admin: {
            description: 'Base URL for CDN (e.g., https://cdn.example.com)',
          },
        },
      ],
    },
    // Content Settings
    {
      name: 'contentSettings',
      type: 'group',
      label: 'Content Settings',
      fields: [
        {
          name: 'showRegisteredTrademarks',
          type: 'checkbox',
          label: 'Display Registered Trademarks (®)',
          admin: {
            description: 'Automatically add ® symbols to trademarked terms',
          },
          defaultValue: true,
        },
        {
          name: 'trademarkedTerms',
          type: 'array',
          label: 'Trademarked Terms',
          admin: {
            description: 'List of terms that should display ® symbol',
          },
          fields: [
            {
              name: 'term',
              type: 'text',
              label: 'Term',
              required: true,
            },
          ],
          defaultValue: [
            { term: 'ALLĒ' },
            { term: 'Brilliant Distinctions' },
            { term: 'Botox' },
            { term: 'Juvéderm' },
            { term: 'Kybella' },
            { term: 'SkinMedica' },
          ],
        },
        {
          name: 'phoneNumberFormat',
          type: 'select',
          label: 'Phone Number Format',
          options: [
            { label: '(407) 333-4300', value: 'formatted' },
            { label: '407-333-4300', value: 'dashed' },
            { label: '407.333.4300', value: 'dotted' },
            { label: '4073334300', value: 'plain' },
          ],
          defaultValue: 'dotted',
        },
        {
          name: 'defaultPhoneNumber',
          type: 'text',
          label: 'Default Phone Number',
          defaultValue: '4073334300',
        },
        {
          name: 'externalLinksOpenNewTab',
          type: 'checkbox',
          label: 'Open External Links in New Tab',
          defaultValue: true,
        },
      ],
    },
    // Brand Settings
    {
      name: 'brandSettings',
      type: 'group',
      label: 'Brand Settings',
      fields: [
        {
          name: 'alleLogoDisplay',
          type: 'checkbox',
          label: 'Display Allē Logo',
          defaultValue: false,
        },
        {
          name: 'alleLogo',
          type: 'upload',
          relationTo: 'media',
          label: 'Allē Logo',
        },
        {
          name: 'alleLogoAlt',
          type: 'text',
          label: 'Allē Logo Alt Text',
          defaultValue: 'Allē Rewards Logo',
        },
        {
          name: 'brandColors',
          type: 'group',
          label: 'Brand Colors',
          fields: [
            {
              name: 'allePrimary',
              type: 'text',
              label: 'Allē Primary Color',
              admin: {
                description: 'Primary color for Allē branding',
              },
            },
            {
              name: 'alleSecondary',
              type: 'text',
              label: 'Allē Secondary Color',
            },
            {
              name: 'alleAccent',
              type: 'text',
              label: 'Allē Accent Color',
            },
          ],
        },
      ],
    },
    // Call-to-Action Settings
    {
      name: 'ctaSettings',
      type: 'group',
      label: 'Call-to-Action Settings',
      fields: [
        {
          name: 'enableGlobalCTA',
          type: 'checkbox',
          label: 'Enable Global CTA',
          admin: {
            description: 'Add a floating or sticky CTA button',
          },
          defaultValue: false,
        },
        {
          name: 'globalCTAText',
          type: 'text',
          label: 'Global CTA Text',
          defaultValue: 'Join Allē Now',
        },
        {
          name: 'globalCTAUrl',
          type: 'text',
          label: 'Global CTA URL',
        },
        {
          name: 'globalCTAPosition',
          type: 'select',
          label: 'Global CTA Position',
          options: [
            { label: 'Bottom Right', value: 'bottom-right' },
            { label: 'Bottom Left', value: 'bottom-left' },
            { label: 'Top Right', value: 'top-right' },
            { label: 'Top Left', value: 'top-left' },
            { label: 'Bottom Center (Sticky)', value: 'bottom-center' },
          ],
          defaultValue: 'bottom-right',
        },
        {
          name: 'ctaBackgroundColor',
          type: 'text',
          label: 'CTA Background Color',
        },
        {
          name: 'ctaTextColor',
          type: 'text',
          label: 'CTA Text Color',
        },
        {
          name: 'ctaHoverBackgroundColor',
          type: 'text',
          label: 'CTA Hover Background Color',
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
