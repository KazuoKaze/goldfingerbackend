import { CollectionConfig } from 'payload'

export const AspireRewardsPageComponent: CollectionConfig = {
  slug: 'aspire-rewards-page-component',
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
      defaultValue: 'Aspire Rewards Page Component',
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
              label: 'Aspire Rewards',
              url: '/specials-and-rewards/aspire-rewards/',
              ariaLabel: 'Breadcrumbs to help navigate the user',
            },
          ],
        },
        {
          name: 'title',
          type: 'text',
          required: true,
          defaultValue: 'Aspire Rewards',
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
              defaultValue: 'Awards on countertop',
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
          name: 'heading',
          type: 'text',
          label: 'Heading',
          required: true,
          defaultValue: 'Specials',
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
      ],
    },
    // Half Image Section (What is ASPIRE)
    {
      name: 'halfImageSection',
      type: 'group',
      label: 'Half Image Section (What is ASPIRE)',
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
          defaultValue: 'left',
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
            description: 'CSS margin classes (e.g., mb-80-desktop mb-40-tablet-down)',
          },
          defaultValue: 'mb-80-desktop mb-40-tablet-down',
        },
        {
          name: 'copyPadding',
          type: 'checkbox',
          label: 'Add Padding to Content',
          defaultValue: false,
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Heading',
          required: true,
          defaultValue: 'What is the ASPIRE Rewards Program?',
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
          name: 'productLinks',
          type: 'array',
          label: 'Product Links',
          admin: {
            description: 'Drag to reorder product links in the list',
          },
          fields: [
            {
              name: 'name',
              type: 'text',
              label: 'Product Name',
              required: true,
            },
            {
              name: 'url',
              type: 'text',
              label: 'Product URL',
            },
            {
              name: 'openInNewTab',
              type: 'checkbox',
              label: 'Open in New Tab',
              defaultValue: true,
            },
          ],
          defaultValue: [
            {
              name: 'Dysport',
              url: 'https://www.dysportusa.com/?s_mcid=ppc-google-branded-dysport&utm_source=google&utm_medium=ppc&utm_campaign=Brand&utm_content=Dysport/',
              openInNewTab: true,
            },
            {
              name: 'Restylane',
              url: 'https://www.restylaneusa.com/product/restylane/',
              openInNewTab: true,
            },
            {
              name: 'Restylane Silk',
              url: 'https://www.restylaneusa.com/product/restylane-silk?s_mcid=ppc-google-branded-restylane-silk&utm_source=google&utm_medium=ppc&utm_campaign=Brand&utm_content=RestylaneSilk/',
              openInNewTab: true,
            },
            {
              name: 'Restylane-L',
              url: '',
              openInNewTab: false,
            },
            {
              name: 'Restylane Lyft',
              url: 'https://www.restylaneusa.com/product/restylane-lyft',
              openInNewTab: true,
            },
            {
              name: 'Sculptra',
              url: '',
              openInNewTab: false,
            },
          ],
        },
        {
          name: 'listStyle',
          type: 'select',
          label: 'List Style',
          options: [
            { label: 'Single Column', value: 'single' },
            { label: 'Two Columns', value: 'columns' },
            { label: 'Three Columns', value: 'columns-3' },
          ],
          defaultValue: 'columns',
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
              defaultValue: 'Woman indicating eyelid',
            },
          ],
        },
      ],
    },
    // Box Grid Section
    {
      name: 'boxGridSection',
      type: 'group',
      label: 'Box Grid Section',
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
            description: 'e.g., three-boxes, container, option-1, no-stacking, bkg-image, wider',
          },
          defaultValue: 'three-boxes container option-1 no-stacking bkg-image wider viewport',
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
          name: 'boxBackgroundColor',
          type: 'text',
          label: 'Box Background Color',
        },
        {
          name: 'boxTextColor',
          type: 'text',
          label: 'Box Text Color',
        },
        {
          name: 'boxHoverBackgroundColor',
          type: 'text',
          label: 'Box Hover Background Color',
        },
        {
          name: 'numberOfColumns',
          type: 'select',
          label: 'Number of Columns',
          options: [
            { label: 'One Column', value: 'one-box' },
            { label: 'Two Columns', value: 'two-boxes' },
            { label: 'Three Columns', value: 'three-boxes' },
            { label: 'Four Columns', value: 'four-boxes' },
          ],
          defaultValue: 'three-boxes',
        },
        {
          name: 'enableStacking',
          type: 'checkbox',
          label: 'Enable Mobile Stacking',
          admin: {
            description: 'Stack boxes vertically on mobile devices',
          },
          defaultValue: false,
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
              defaultValue: 'Background media',
            },
          ],
        },
        {
          name: 'boxes',
          type: 'array',
          label: 'Content Boxes',
          admin: {
            description: 'Drag to reorder boxes',
          },
          fields: [
            {
              name: 'heading',
              type: 'text',
              label: 'Box Heading',
              required: true,
            },
            {
              name: 'headingColor',
              type: 'text',
              label: 'Heading Color',
            },
            {
              name: 'content',
              type: 'richText',
              label: 'Box Content',
              required: true,
            },
            {
              name: 'icon',
              type: 'upload',
              relationTo: 'media',
              label: 'Box Icon (Optional)',
            },
            {
              name: 'iconAlt',
              type: 'text',
              label: 'Icon Alt Text',
            },
            {
              name: 'link',
              type: 'group',
              label: 'Box Link (Optional)',
              fields: [
                {
                  name: 'url',
                  type: 'text',
                  label: 'Link URL',
                },
                {
                  name: 'text',
                  type: 'text',
                  label: 'Link Text',
                },
                {
                  name: 'openInNewTab',
                  type: 'checkbox',
                  label: 'Open in New Tab',
                  defaultValue: false,
                },
              ],
            },
            {
              name: 'customBackgroundColor',
              type: 'text',
              label: 'Custom Box Background Color',
              admin: {
                description: 'Override global box background for this box',
              },
            },
          ],
          // defaultValue: [
          //   {
          //     heading: 'Earn Points',
          //     content:
          //       "With ASPIRE Galderma Rewards, using Galderma aesthetic products isn't the only way to earn points. We also reward your loyalty in other unique ways throughout your aesthetic journey.",
          //   },
          //   {
          //     heading: 'Spread The Word',
          //     content:
          //       "When you refer a friend to join the ASPIRE Rewards program, you'll receive 100 points once they enroll. You can refer up to 5 friends in a calendar year.",
          //   },
          //   {
          //     heading: 'Get Rewarded',
          //     content:
          //       "It's easy to redeem your points for treatment certificates that provide valuable savings on Galderma aesthetic treatments from Goldfingers Aesthetics.",
          //   },
          // ],
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
            { label: 'Half Image Section (What is ASPIRE)', value: 'halfImage' },
            { label: 'Box Grid Section', value: 'boxGrid' },
          ],
        },
      ],
      defaultValue: [
        { section: 'hero' },
        { section: 'intro' },
        { section: 'halfImage' },
        { section: 'boxGrid' },
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
            description: 'CSS list-style-type (e.g., disc, circle, square, none)',
          },
        },
        {
          name: 'listMarginLeft',
          type: 'text',
          label: 'List Margin Left',
        },
      ],
    },
    // Box Grid Styles
    {
      name: 'boxGridStyles',
      type: 'group',
      label: 'Box Grid Styles',
      fields: [
        {
          name: 'boxPadding',
          type: 'text',
          label: 'Box Padding',
          admin: {
            description: 'Internal padding for boxes (e.g., 30px, 2rem)',
          },
        },
        {
          name: 'boxBorderRadius',
          type: 'text',
          label: 'Box Border Radius',
        },
        {
          name: 'boxBorder',
          type: 'text',
          label: 'Box Border',
          admin: {
            description: 'CSS border value (e.g., 1px solid #ccc)',
          },
        },
        {
          name: 'boxShadow',
          type: 'text',
          label: 'Box Shadow',
        },
        {
          name: 'boxHoverShadow',
          type: 'text',
          label: 'Box Hover Shadow',
        },
        {
          name: 'boxGap',
          type: 'text',
          label: 'Gap Between Boxes',
          admin: {
            description: 'Space between boxes (e.g., 20px, 1.5rem)',
          },
        },
        {
          name: 'boxMinHeight',
          type: 'text',
          label: 'Box Minimum Height',
        },
        {
          name: 'boxTextAlign',
          type: 'select',
          label: 'Box Text Alignment',
          options: [
            { label: 'Left', value: 'left' },
            { label: 'Center', value: 'center' },
            { label: 'Right', value: 'right' },
          ],
          defaultValue: 'left',
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
        {
          name: 'widerLayout',
          type: 'checkbox',
          label: 'Use Wider Layout',
          admin: {
            description: 'Expand content to use more width',
          },
          defaultValue: true,
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
          name: 'fadeLeftDuration',
          type: 'text',
          label: 'Fade Left Duration',
          admin: {
            description: 'Duration for fade left animations',
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
        {
          name: 'staggerBoxAnimations',
          type: 'checkbox',
          label: 'Stagger Box Animations',
          admin: {
            description: 'Animate boxes sequentially with delay',
          },
          defaultValue: true,
        },
        {
          name: 'boxAnimationDelay',
          type: 'text',
          label: 'Box Animation Delay',
          admin: {
            description: 'Delay between box animations (e.g., 0.2s)',
          },
          defaultValue: '0.2s',
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
          defaultValue: 'Aspire Rewards - Goldfingers Aesthetics',
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
        {
          name: 'linkIndicators',
          type: 'checkbox',
          label: 'Visual Link Indicators',
          admin: {
            description: 'Add visual indicators for external links',
          },
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
          name: 'mobileBoxColumns',
          type: 'select',
          label: 'Mobile Box Columns',
          options: [
            { label: '1 Column', value: '1' },
            { label: '2 Columns', value: '2' },
          ],
          defaultValue: '1',
        },
        {
          name: 'tabletBoxColumns',
          type: 'select',
          label: 'Tablet Box Columns',
          options: [
            { label: '1 Column', value: '1' },
            { label: '2 Columns', value: '2' },
            { label: '3 Columns', value: '3' },
          ],
          defaultValue: '2',
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
                { label: 'Box Grid Section', value: 'boxGrid' },
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
        {
          name: 'responsiveMargins',
          type: 'group',
          label: 'Responsive Margin Classes',
          admin: {
            description: 'Define custom margin classes for different breakpoints',
          },
          fields: [
            {
              name: 'desktopMargin',
              type: 'text',
              label: 'Desktop Margin Class',
              defaultValue: 'mb-80-desktop',
            },
            {
              name: 'tabletMargin',
              type: 'text',
              label: 'Tablet Margin Class',
              defaultValue: 'mb-40-tablet-down',
            },
            {
              name: 'mobileMargin',
              type: 'text',
              label: 'Mobile Margin Class',
            },
          ],
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
          name: 'aspireTrackingEnabled',
          type: 'checkbox',
          label: 'Enable Aspire Rewards Tracking',
          admin: {
            description: 'Enable tracking for Aspire rewards program',
          },
          defaultValue: false,
        },
        {
          name: 'aspireTrackingCode',
          type: 'textarea',
          label: 'Aspire Tracking Code',
          admin: {
            description: 'Custom tracking code for Aspire integration',
          },
        },
        {
          name: 'galdermaTrackingEnabled',
          type: 'checkbox',
          label: 'Enable Galderma Tracking',
          admin: {
            description: 'Enable tracking for Galderma products',
          },
          defaultValue: false,
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
        {
          name: 'conversionGoals',
          type: 'array',
          label: 'Conversion Goals',
          fields: [
            {
              name: 'goalName',
              type: 'text',
              label: 'Goal Name',
            },
            {
              name: 'goalTrigger',
              type: 'select',
              label: 'Trigger Event',
              options: [
                { label: 'Page View', value: 'pageview' },
                { label: 'Link Click', value: 'click' },
                { label: 'Form Submit', value: 'submit' },
                { label: 'Button Click', value: 'button' },
              ],
            },
            {
              name: 'goalValue',
              type: 'text',
              label: 'Goal Value ($)',
            },
          ],
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
        {
          name: 'enableBrotliCompression',
          type: 'checkbox',
          label: 'Enable Brotli Compression',
          defaultValue: true,
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
            { term: 'Restylane' },
            { term: 'Perlane' },
            { term: 'Dysport' },
            { term: 'Sculptra' },
          ],
        },
        {
          name: 'externalLinksOpenNewTab',
          type: 'checkbox',
          label: 'Open External Links in New Tab',
          defaultValue: true,
        },
        {
          name: 'addNoOpenerToExternalLinks',
          type: 'checkbox',
          label: 'Add rel="noopener" to External Links',
          admin: {
            description: 'Security best practice for external links',
          },
          defaultValue: true,
        },
        {
          name: 'enableRichSnippets',
          type: 'checkbox',
          label: 'Enable Rich Snippets',
          admin: {
            description: 'Add structured data for rich search results',
          },
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
          name: 'aspireLogoDisplay',
          type: 'checkbox',
          label: 'Display Aspire Logo',
          defaultValue: false,
        },
        {
          name: 'aspireLogo',
          type: 'upload',
          relationTo: 'media',
          label: 'Aspire Logo',
        },
        {
          name: 'aspireLogoAlt',
          type: 'text',
          label: 'Aspire Logo Alt Text',
          defaultValue: 'Aspire Rewards Logo',
        },
        {
          name: 'galdermaLogoDisplay',
          type: 'checkbox',
          label: 'Display Galderma Logo',
          defaultValue: false,
        },
        {
          name: 'galdermaLogo',
          type: 'upload',
          relationTo: 'media',
          label: 'Galderma Logo',
        },
        {
          name: 'galdermaLogoAlt',
          type: 'text',
          label: 'Galderma Logo Alt Text',
          defaultValue: 'Galderma Logo',
        },
        {
          name: 'brandColors',
          type: 'group',
          label: 'Brand Colors',
          fields: [
            {
              name: 'aspirePrimary',
              type: 'text',
              label: 'Aspire Primary Color',
              admin: {
                description: 'Primary color for Aspire branding',
              },
            },
            {
              name: 'aspireSecondary',
              type: 'text',
              label: 'Aspire Secondary Color',
            },
            {
              name: 'galdermaBlue',
              type: 'text',
              label: 'Galderma Blue',
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
          defaultValue: 'Join Aspire Now',
        },
        {
          name: 'globalCTAUrl',
          type: 'text',
          label: 'Global CTA URL',
          defaultValue: 'https://www.aspirerewards.com/',
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
        {
          name: 'ctaIcon',
          type: 'upload',
          relationTo: 'media',
          label: 'CTA Icon (Optional)',
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
