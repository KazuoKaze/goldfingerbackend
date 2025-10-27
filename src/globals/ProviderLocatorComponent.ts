
import { GlobalConfig } from 'payload'

export const ProviderLocatorComponent: GlobalConfig = {
  slug: 'provider-locator-component',
  label: 'Provider Locator Component',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'componentName',
      type: 'text',
      label: 'Component Name',
      defaultValue: 'Provider & Location Locator',
    },
    {
      name: 'sections',
      type: 'array',
      label: 'Sections',
      admin: {
        description: 'Drag to reorder sections',
      },
      fields: [
        {
          name: 'sectionType',
          type: 'select',
          required: true,
          options: [
            { label: 'Header', value: 'header' },
            { label: 'Search Bar', value: 'search' },
            { label: 'Provider List', value: 'providerList' },
            { label: 'Location List', value: 'locationList' },
            { label: 'Detail View', value: 'detailView' },
            { label: 'Map', value: 'map' },
            { label: 'Carousel', value: 'carousel' },
            { label: 'Mobile Footer', value: 'mobileFooter' },
          ],
        },
        {
          name: 'isActive',
          type: 'checkbox',
          label: 'Active',
          defaultValue: true,
        },
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Background Color',
          admin: {
            description: 'CSS color value (e.g., #ffffff, rgb(255,255,255))',
          },
        },
        {
          name: 'textColor',
          type: 'text',
          label: 'Text Color',
        },
        {
          name: 'order',
          type: 'number',
          label: 'Display Order',
          admin: {
            description: 'Lower numbers appear first',
          },
        },
      ],
    },
    {
      name: 'header',
      type: 'group',
      label: 'Header Settings',
      fields: [
        {
          name: 'menuItems',
          type: 'array',
          label: 'Menu Items',
          admin: {
            description: 'Drag to reorder menu items',
          },
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
              label: 'Label',
            },
            {
              name: 'id',
              type: 'text',
              required: true,
              label: 'ID',
            },
            {
              name: 'isActive',
              type: 'checkbox',
              label: 'Active by Default',
              defaultValue: false,
            },
            {
              name: 'textColor',
              type: 'text',
              label: 'Text Color',
            },
            {
              name: 'activeTextColor',
              type: 'text',
              label: 'Active Text Color',
            },
            {
              name: 'backgroundColor',
              type: 'text',
              label: 'Background Color',
            },
            {
              name: 'order',
              type: 'number',
              label: 'Order',
            },
          ],
        },
        {
          name: 'searchIcon',
          type: 'upload',
          relationTo: 'media',
          label: 'Search Icon',
        },
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Header Background Color',
        },
        {
          name: 'useMyLocation',
          type: 'group',
          label: 'Use My Location Settings',
          fields: [
            {
              name: 'enabled',
              type: 'checkbox',
              label: 'Enable',
              defaultValue: true,
            },
            {
              name: 'text',
              type: 'text',
              label: 'Button Text',
              defaultValue: 'Use My Location',
            },
            {
              name: 'icon',
              type: 'upload',
              relationTo: 'media',
              label: 'Icon',
            },
            {
              name: 'textColor',
              type: 'text',
              label: 'Text Color',
            },
          ],
        },
      ],
    },
    {
      name: 'searchBar',
      type: 'group',
      label: 'Search Bar Settings',
      fields: [
        {
          name: 'locationSearchPlaceholder',
          type: 'text',
          label: 'Location Search Placeholder',
          defaultValue: 'Search by address or zip code',
        },
        {
          name: 'providerSearchPlaceholder',
          type: 'text',
          label: 'Provider Search Placeholder',
          defaultValue: 'Search by provider name',
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
          name: 'borderColor',
          type: 'text',
          label: 'Border Color',
        },
        {
          name: 'backButtonText',
          type: 'text',
          label: 'Back Button Text',
          defaultValue: '< Back',
        },
        {
          name: 'resultsSnippetText',
          type: 'text',
          label: 'Results Snippet Text',
          defaultValue: '{count} Providers',
          admin: {
            description: 'Use {count} as placeholder for number',
          },
        },
      ],
    },
    {
      name: 'providerCard',
      type: 'group',
      label: 'Provider Card Settings',
      fields: [
        {
          name: 'quickViewText',
          type: 'text',
          label: 'Quick View Button Text',
          defaultValue: 'Quick View',
        },
        {
          name: 'viewProviderText',
          type: 'text',
          label: 'View Provider Button Text',
          defaultValue: 'View Provider',
        },
        {
          name: 'scheduleButtonText',
          type: 'text',
          label: 'Schedule Button Text',
          defaultValue: 'Schedule',
        },
        {
          name: 'backgroundImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Card Background Image',
        },
        {
          name: 'cardBackgroundColor',
          type: 'text',
          label: 'Card Background Color',
        },
        {
          name: 'textColor',
          type: 'text',
          label: 'Text Color',
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
          name: 'hoverBackgroundColor',
          type: 'text',
          label: 'Hover Background Color',
        },
      ],
    },
    {
      name: 'locationCard',
      type: 'group',
      label: 'Location Card Settings',
      fields: [
        {
          name: 'quickViewText',
          type: 'text',
          label: 'Quick View Button Text',
          defaultValue: 'Quick View',
        },
        {
          name: 'viewLocationText',
          type: 'text',
          label: 'View Location Button Text',
          defaultValue: 'View Location',
        },
        {
          name: 'scheduleButtonText',
          type: 'text',
          label: 'Schedule Button Text',
          defaultValue: 'Schedule',
        },
        {
          name: 'cardBackgroundColor',
          type: 'text',
          label: 'Card Background Color',
        },
        {
          name: 'textColor',
          type: 'text',
          label: 'Text Color',
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
          name: 'locationIcon',
          type: 'upload',
          relationTo: 'media',
          label: 'Location Icon',
        },
      ],
    },
    {
      name: 'detailView',
      type: 'group',
      label: 'Detail View Settings',
      fields: [
        {
          name: 'viewProviderButtonText',
          type: 'text',
          label: 'View Provider Button Text',
          defaultValue: 'View Provider',
        },
        {
          name: 'getDirectionsText',
          type: 'text',
          label: 'Get Directions Text',
          defaultValue: 'Get Directions>',
        },
        {
          name: 'businessHoursText',
          type: 'text',
          label: 'Business Hours Text',
          defaultValue: 'Business Hours>',
        },
        {
          name: 'viewLocationText',
          type: 'text',
          label: 'View Location Text',
          defaultValue: 'View Location',
        },
        {
          name: 'reviewsText',
          type: 'text',
          label: 'Reviews Text',
          defaultValue: '{count} Reviews',
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
          name: 'starColor',
          type: 'text',
          label: 'Star Rating Color',
        },
        {
          name: 'starActiveColor',
          type: 'text',
          label: 'Active Star Color',
        },
      ],
    },
    {
      name: 'map',
      type: 'group',
      label: 'Map Settings',
      fields: [
        {
          name: 'apiKey',
          type: 'text',
          label: 'Google Maps API Key',
          admin: {
            description: 'Your Google Maps JavaScript API key',
          },
        },
        {
          name: 'defaultCenter',
          type: 'group',
          label: 'Default Center',
          fields: [
            {
              name: 'latitude',
              type: 'number',
              label: 'Latitude',
              defaultValue: 28.2898,
            },
            {
              name: 'longitude',
              type: 'number',
              label: 'Longitude',
              defaultValue: -85.5713,
            },
          ],
        },
        {
          name: 'defaultZoom',
          type: 'number',
          label: 'Default Zoom Level',
          defaultValue: 7,
          min: 1,
          max: 20,
        },
        {
          name: 'markerIcon',
          type: 'upload',
          relationTo: 'media',
          label: 'Custom Marker Icon',
        },
        {
          name: 'mapStyles',
          type: 'json',
          label: 'Map Styles (JSON)',
          admin: {
            description: 'Google Maps styling JSON',
          },
        },
      ],
    },
    {
      name: 'carousel',
      type: 'group',
      label: 'Carousel Settings',
      fields: [
        {
          name: 'enabled',
          type: 'checkbox',
          label: 'Enable Carousel',
          defaultValue: true,
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Carousel Heading',
          defaultValue: 'More Locations Near You',
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
          name: 'arrowColor',
          type: 'text',
          label: 'Arrow Color',
        },
        {
          name: 'itemsToShow',
          type: 'number',
          label: 'Items to Show',
          defaultValue: 3,
          min: 1,
          max: 10,
        },
      ],
    },
    {
      name: 'mobileFooter',
      type: 'group',
      label: 'Mobile Footer Settings',
      fields: [
        {
          name: 'tabs',
          type: 'array',
          label: 'Footer Tabs',
          admin: {
            description: 'Drag to reorder tabs',
          },
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
              label: 'Label',
            },
            {
              name: 'action',
              type: 'text',
              required: true,
              label: 'Action',
            },
            {
              name: 'isActive',
              type: 'checkbox',
              label: 'Active by Default',
              defaultValue: false,
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
              name: 'activeBackgroundColor',
              type: 'text',
              label: 'Active Background Color',
            },
            {
              name: 'activeTextColor',
              type: 'text',
              label: 'Active Text Color',
            },
            {
              name: 'order',
              type: 'number',
              label: 'Order',
            },
          ],
        },
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Footer Background Color',
        },
      ],
    },
    {
      name: 'icons',
      type: 'group',
      label: 'Icons & Images',
      fields: [
        {
          name: 'searchIcon',
          type: 'upload',
          relationTo: 'media',
          label: 'Search Icon',
        },
        {
          name: 'locationIcon',
          type: 'upload',
          relationTo: 'media',
          label: 'Location Icon',
        },
        {
          name: 'crosshairIcon',
          type: 'upload',
          relationTo: 'media',
          label: 'Crosshair Icon',
        },
        {
          name: 'webIcon',
          type: 'upload',
          relationTo: 'media',
          label: 'Web Icon',
        },
        {
          name: 'providerBackgroundImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Provider Card Background',
        },
      ],
    },
    {
      name: 'globalStyles',
      type: 'group',
      label: 'Global Styles',
      fields: [
        {
          name: 'primaryColor',
          type: 'text',
          label: 'Primary Color',
        },
        {
          name: 'secondaryColor',
          type: 'text',
          label: 'Secondary Color',
        },
        {
          name: 'accentColor',
          type: 'text',
          label: 'Accent Color',
        },
        {
          name: 'fontFamily',
          type: 'text',
          label: 'Font Family',
        },
        {
          name: 'headingFontFamily',
          type: 'text',
          label: 'Heading Font Family',
        },
        {
          name: 'borderRadius',
          type: 'text',
          label: 'Border Radius',
          defaultValue: '8px',
        },
        {
          name: 'customCSS',
          type: 'textarea',
          label: 'Custom CSS',
          admin: {
            description: 'Add any custom CSS here',
          },
        },
      ],
    },
  ],
}
