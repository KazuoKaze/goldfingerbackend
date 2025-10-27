import { CollectionConfig } from 'payload'

export const MedicalSpaInjectablesComponent: CollectionConfig = {
  slug: 'medical-spa-injectables-component',
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
      defaultValue: 'Medical Spa Injectables Component',
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
              label: 'Medical Spa',
              url: '/medical-spa/',
              ariaLabel: 'Breadcrumbs to help navigate the user',
            },
            {
              label: 'Injectables',
              url: '/medical-spa/injectables/',
              ariaLabel: 'Breadcrumbs to help navigate the user',
            },
          ],
        },
        {
          name: 'title',
          type: 'text',
          required: true,
          defaultValue: 'Injectables',
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
    // Index Static Section (Card Grid)
    {
      name: 'indexStaticSection',
      type: 'group',
      label: 'Index Static Section (Card Grid)',
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
            description: 'CSS color value for section background',
          },
        },
        {
          name: 'containerBackgroundColor',
          type: 'text',
          label: 'Container Background Color',
          admin: {
            description: 'CSS color value for inner container',
          },
        },
        {
          name: 'cardBackgroundColor',
          type: 'text',
          label: 'Card Background Color',
          admin: {
            description: 'Default background color for all cards',
          },
        },
        {
          name: 'cardTextColor',
          type: 'text',
          label: 'Card Text Color',
          admin: {
            description: 'Default text color for all cards',
          },
        },
        {
          name: 'cardHoverColor',
          type: 'text',
          label: 'Card Hover Background Color',
          admin: {
            description: 'Background color when hovering over cards',
          },
        },
        {
          name: 'overlayBackgroundColor',
          type: 'text',
          label: 'Overlay Background Color',
          admin: {
            description: 'Background color for hover overlay (e.g., rgba(0,0,0,0.7))',
          },
        },
        {
          name: 'overlayTextColor',
          type: 'text',
          label: 'Overlay Text Color',
          admin: {
            description: 'Text color for overlay content',
          },
        },
        {
          name: 'cards',
          type: 'array',
          label: 'Cards',
          admin: {
            description: 'Drag to reorder cards in the grid',
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
              name: 'overlayLabel',
              type: 'text',
              label: 'Overlay Label',
              admin: {
                description: 'Text shown in hover overlay',
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
              name: 'customBackgroundColor',
              type: 'text',
              label: 'Custom Background Color (Optional)',
              admin: {
                description: 'Override global card background color for this specific card',
              },
            },
            {
              name: 'customTextColor',
              type: 'text',
              label: 'Custom Text Color (Optional)',
              admin: {
                description: 'Override global card text color for this specific card',
              },
            },
            {
              name: 'customHoverColor',
              type: 'text',
              label: 'Custom Hover Color (Optional)',
              admin: {
                description: 'Override global hover color for this specific card',
              },
            },
            {
              name: 'customOverlayBackgroundColor',
              type: 'text',
              label: 'Custom Overlay Background (Optional)',
              admin: {
                description: 'Override global overlay background for this card',
              },
            },
            {
              name: 'customOverlayTextColor',
              type: 'text',
              label: 'Custom Overlay Text Color (Optional)',
              admin: {
                description: 'Override global overlay text color for this card',
              },
            },
          ],
          defaultValue: [
            {
              title: 'BOTOX',
              url: '/medical-spa/botox/',
              overlayLabel: 'BOTOX',
            },
            {
              title: 'Dysport',
              url: '/medical-spa/dysport/',
              overlayLabel: 'Dysport',
            },
            {
              title: 'Dermal Fillers',
              url: '/medical-spa/dermal-fillers/',
              overlayLabel: 'Dermal Fillers',
            },
            {
              title: 'Juvederm',
              url: '/medical-spa/juvederm/',
              overlayLabel: 'Juvederm',
            },
            {
              title: 'Juvederm Volux',
              url: '/medical-spa/juvederm-volux/',
              overlayLabel: 'Juvederm Volux',
            },
            {
              title: 'Restylane',
              url: '/medical-spa/restylane/',
              overlayLabel: 'Restylane',
            },
            {
              title: 'Restylane Contour',
              url: '/medical-spa/restylane-contour/',
              overlayLabel: 'Restylane Contour',
            },
            {
              title: 'Cheek Fillers',
              url: '/medical-spa/cheek-fillers/',
              overlayLabel: 'Cheek Fillers',
            },
            {
              title: 'Lines & Wrinkles',
              url: '/medical-spa/lines-and-wrinkles/',
              overlayLabel: 'Lines & Wrinkles',
            },
            {
              title: 'Lip Fillers',
              url: '/medical-spa/lips/',
              overlayLabel: 'Lip Fillers',
            },
            {
              title: 'Chin Fillers',
              url: '/medical-spa/chin/',
              overlayLabel: 'Chin Fillers',
            },
            {
              title: 'Hand Rejuvenation',
              url: '/medical-spa/hands/',
              overlayLabel: 'Hand Rejuvenation',
            },
            {
              title: 'Non-Surgical Facelift',
              url: '/medical-spa/face-lift/',
              overlayLabel: 'Non-Surgical Facelift',
            },
          ],
        },
        {
          name: 'gridLayout',
          type: 'select',
          label: 'Grid Layout',
          options: [
            { label: '2 Columns', value: '2' },
            { label: '3 Columns', value: '3' },
            { label: '4 Columns', value: '4' },
            { label: 'Auto (Responsive)', value: 'auto' },
          ],
          defaultValue: 'auto',
          admin: {
            description: 'Choose grid layout for cards',
          },
        },
        {
          name: 'cardSpacing',
          type: 'text',
          label: 'Card Spacing',
          admin: {
            description: 'Gap between cards (e.g., 20px, 1.5rem)',
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
            description: 'Box shadow for cards (e.g., 0 2px 8px rgba(0,0,0,0.1))',
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
            { label: 'Index Static Section', value: 'indexStatic' },
          ],
        },
      ],
      defaultValue: [{ section: 'hero' }, { section: 'indexStatic' }],
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
          name: 'cardHoverAnimation',
          type: 'select',
          label: 'Card Hover Animation',
          options: [
            { label: 'None', value: 'none' },
            { label: 'Scale Up', value: 'scale' },
            { label: 'Lift (Translate Y)', value: 'lift' },
            { label: 'Fade', value: 'fade' },
            { label: 'Zoom', value: 'zoom' },
          ],
          defaultValue: 'scale',
        },
        {
          name: 'transitionDuration',
          type: 'text',
          label: 'Transition Duration',
          admin: {
            description: 'Duration for animations (e.g., 0.3s, 300ms)',
          },
          defaultValue: '0.3s',
        },
        {
          name: 'transitionEasing',
          type: 'text',
          label: 'Transition Easing',
          admin: {
            description: 'CSS easing function (e.g., ease, ease-in-out, cubic-bezier)',
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
      ],
    },
    // Accessibility Settings
    {
      name: 'accessibilitySettings',
      type: 'group',
      label: 'Accessibility Settings',
      fields: [
        {
          name: 'ariaLabels',
          type: 'checkbox',
          label: 'Include ARIA Labels',
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
