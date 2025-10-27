// import { CollectionConfig } from 'payload'

// export const Home: CollectionConfig = {
//   slug: 'home',
//   labels: {
//     singular: 'Home Page',
//     plural: 'Home Pages',
//   },
//   admin: {
//     useAsTitle: 'title',
//     defaultColumns: ['title', 'updatedAt'],
//   },
//   access: {
//     read: () => true,
//   },
//   fields: [
//     {
//       name: 'title',
//       type: 'text',
//       required: true,
//       defaultValue: 'Home Page',
//     },
//     {
//       name: 'accessibilityMenu',
//       type: 'group',
//       label: 'Accessibility Menu',
//       fields: [
//         {
//           name: 'enabled',
//           type: 'checkbox',
//           label: 'Show Accessibility Menu',
//           defaultValue: true,
//         },
//         {
//           name: 'items',
//           type: 'array',
//           label: 'Menu Items',
//           fields: [
//             {
//               name: 'text',
//               type: 'text',
//               label: 'Text',
//             },
//             {
//               name: 'href',
//               type: 'text',
//               label: 'Link',
//             },
//             {
//               name: 'ariaLabel',
//               type: 'text',
//               label: 'ARIA Label',
//             },
//           ],
//         },
//       ],
//     },
//     {
//       name: 'sections',
//       type: 'array',
//       required: true,
//       minRows: 1,
//       labels: {
//         singular: 'Section',
//         plural: 'Sections',
//       },
//       admin: {
//         components: {
//           RowLabel: ({ data }) => {
//             return data?.sectionType?.replace(/_/g, ' ').toUpperCase() || 'Section'
//           },
//         },
//       },
//       fields: [
//         {
//           name: 'sectionType',
//           type: 'select',
//           required: true,
//           options: [
//             { label: 'Hero Banner', value: 'hero_banner' },
//             { label: 'Anchor Links', value: 'anchor_links' },
//             { label: 'Intro Section', value: 'intro_section' },
//             { label: 'Two Column Content', value: 'two_column' },
//             { label: 'Three Column Stats', value: 'three_column_stats' },
//             { label: 'Home Grid', value: 'home_grid' },
//             { label: 'Home Banner', value: 'home_banner' },
//             { label: 'Half Image Section', value: 'half_image' },
//             { label: 'Reviews Slider', value: 'reviews_slider' },
//             { label: 'Double Banner', value: 'double_banner' },
//             { label: 'Locations Banner', value: 'locations_banner' },
//             { label: 'CTA Gallery', value: 'cta_gallery' },
//             { label: 'Tabs Module', value: 'tabs_module' },
//           ],
//         },
//         {
//           name: 'visibility',
//           type: 'checkbox',
//           label: 'Visible',
//           defaultValue: true,
//         },
//         {
//           name: 'customClasses',
//           type: 'text',
//           label: 'Custom CSS Classes',
//           admin: {
//             description: 'Space-separated class names (e.g., "dark center-placement wow fadeInUp")',
//           },
//         },
//         {
//           name: 'heroBanner',
//           type: 'group',
//           label: 'Hero Banner Content',
//           admin: {
//             condition: (data, siblingData) => siblingData?.sectionType === 'hero_banner',
//           },
//           fields: [
//             {
//               name: 'logo',
//               type: 'upload',
//               relationTo: 'media',
//               label: 'Logo',
//             },
//             {
//               name: 'logoWidth',
//               type: 'number',
//               label: 'Logo Width',
//               defaultValue: 58,
//             },
//             {
//               name: 'logoHeight',
//               type: 'number',
//               label: 'Logo Height',
//               defaultValue: 64,
//             },
//             {
//               name: 'logoAlt',
//               type: 'text',
//               label: 'Logo Alt Text',
//             },
//             {
//               name: 'mainHeading',
//               type: 'text',
//               label: 'Main Heading (h1)',
//             },
//             {
//               name: 'subHeadingLine1',
//               type: 'text',
//               label: 'Sub Heading Line 1',
//             },
//             {
//               name: 'subHeadingLine2',
//               type: 'text',
//               label: 'Sub Heading Line 2',
//             },
//             {
//               name: 'backgroundVideo',
//               type: 'group',
//               label: 'Background Video',
//               fields: [
//                 {
//                   name: 'enabled',
//                   type: 'checkbox',
//                   label: 'Enable Video Background',
//                   defaultValue: true,
//                 },
//                 {
//                   name: 'desktopUrl',
//                   type: 'text',
//                   label: 'Desktop Video URL (high quality)',
//                 },
//                 {
//                   name: 'tabletUrl',
//                   type: 'text',
//                   label: 'Tablet Video URL (medium quality)',
//                 },
//                 {
//                   name: 'mobileUrl',
//                   type: 'text',
//                   label: 'Mobile Video URL (low quality)',
//                 },
//                 {
//                   name: 'videoTitle',
//                   type: 'text',
//                   label: 'Video Title (for accessibility)',
//                 },
//               ],
//             },
//             {
//               name: 'slides',
//               type: 'array',
//               label: 'Image Slides',
//               fields: [
//                 {
//                   name: 'image',
//                   type: 'upload',
//                   relationTo: 'media',
//                   label: 'Image',
//                 },
//                 {
//                   name: 'imageAlt',
//                   type: 'text',
//                   label: 'Image Alt Text',
//                 },
//               ],
//             },
//           ],
//         },
//         {
//           name: 'anchorLinks',
//           type: 'group',
//           label: 'Anchor Links Content',
//           admin: {
//             condition: (data, siblingData) => siblingData?.sectionType === 'anchor_links',
//           },
//           fields: [
//             {
//               name: 'links',
//               type: 'array',
//               label: 'Links',
//               fields: [
//                 {
//                   name: 'text',
//                   type: 'text',
//                   label: 'Link Text',
//                   required: true,
//                 },
//                 {
//                   name: 'url',
//                   type: 'text',
//                   label: 'URL',
//                   required: true,
//                 },
//                 {
//                   name: 'ariaLabel',
//                   type: 'text',
//                   label: 'ARIA Label',
//                 },
//               ],
//             },
//           ],
//         },
//         {
//           name: 'introSection',
//           type: 'group',
//           label: 'Intro Section Content',
//           admin: {
//             condition: (data, siblingData) => siblingData?.sectionType === 'intro_section',
//           },
//           fields: [
//             {
//               name: 'heading',
//               type: 'textarea',
//               label: 'Main Heading (h2)',
//             },
//             {
//               name: 'subheadings',
//               type: 'array',
//               label: 'Subheadings (h4)',
//               fields: [
//                 {
//                   name: 'text',
//                   type: 'text',
//                   label: 'Text',
//                 },
//               ],
//             },
//           ],
//         },
//         {
//           name: 'twoColumn',
//           type: 'group',
//           label: 'Two Column Content',
//           admin: {
//             condition: (data, siblingData) => siblingData?.sectionType === 'two_column',
//           },
//           fields: [
//             {
//               name: 'mediaPosition',
//               type: 'select',
//               label: 'Media Position',
//               options: [
//                 { label: 'Left', value: 'media-left' },
//                 { label: 'Right', value: 'media-right' },
//               ],
//               defaultValue: 'media-left',
//             },
//             {
//               name: 'smallHeading',
//               type: 'text',
//               label: 'Small Heading',
//             },
//             {
//               name: 'mainHeadingLine1',
//               type: 'text',
//               label: 'Main Heading Line 1',
//             },
//             {
//               name: 'mainHeadingLine2',
//               type: 'text',
//               label: 'Main Heading Line 2',
//             },
//             {
//               name: 'content',
//               type: 'textarea',
//               label: 'Content Paragraph',
//             },
//             {
//               name: 'media',
//               type: 'upload',
//               relationTo: 'media',
//               label: 'Media',
//             },
//             {
//               name: 'mediaAlt',
//               type: 'text',
//               label: 'Media Alt Text',
//             },
//             {
//               name: 'mediaWidth',
//               type: 'number',
//               label: 'Media Width',
//             },
//             {
//               name: 'mediaHeight',
//               type: 'number',
//               label: 'Media Height',
//             },
//           ],
//         },
//         {
//           name: 'threeColumnStats',
//           type: 'group',
//           label: 'Three Column Stats',
//           admin: {
//             condition: (data, siblingData) => siblingData?.sectionType === 'three_column_stats',
//           },
//           fields: [
//             {
//               name: 'columns',
//               type: 'array',
//               label: 'Stat Columns',
//               minRows: 3,
//               maxRows: 3,
//               fields: [
//                 {
//                   name: 'number',
//                   type: 'text',
//                   label: 'Number (h2)',
//                   required: true,
//                 },
//                 {
//                   name: 'titleSmall',
//                   type: 'text',
//                   label: 'Small Title Text',
//                 },
//                 {
//                   name: 'titleLine1',
//                   type: 'text',
//                   label: 'Title Line 1',
//                 },
//                 {
//                   name: 'titleLine2',
//                   type: 'text',
//                   label: 'Title Line 2 (optional)',
//                 },
//               ],
//             },
//           ],
//         },
//         {
//           name: 'homeGrid',
//           type: 'group',
//           label: 'Home Grid Content',
//           admin: {
//             condition: (data, siblingData) => siblingData?.sectionType === 'home_grid',
//           },
//           fields: [
//             {
//               name: 'gridOption',
//               type: 'select',
//               label: 'Grid Style',
//               options: [
//                 { label: 'Option 1 - 3 Column with Title Overlay', value: 'option-1' },
//                 { label: 'Option 2', value: 'option-2' },
//                 { label: 'Option 3 - 3 Column with Title Below', value: 'option-3' },
//               ],
//             },
//             {
//               name: 'items',
//               type: 'array',
//               label: 'Grid Items',
//               fields: [
//                 {
//                   name: 'title',
//                   type: 'text',
//                   label: 'Title',
//                 },
//                 {
//                   name: 'content',
//                   type: 'textarea',
//                   label: 'Content',
//                 },
//                 {
//                   name: 'image',
//                   type: 'upload',
//                   relationTo: 'media',
//                   label: 'Image',
//                 },
//                 {
//                   name: 'imageAlt',
//                   type: 'text',
//                   label: 'Image Alt Text',
//                 },
//                 {
//                   name: 'linkText',
//                   type: 'text',
//                   label: 'Link Text',
//                 },
//                 {
//                   name: 'linkUrl',
//                   type: 'text',
//                   label: 'Link URL',
//                 },
//               ],
//             },
//           ],
//         },
//         {
//           name: 'homeBanner',
//           type: 'group',
//           label: 'Home Banner Content',
//           admin: {
//             condition: (data, siblingData) => siblingData?.sectionType === 'home_banner',
//           },
//           fields: [
//             {
//               name: 'option',
//               type: 'select',
//               label: 'Banner Option',
//               options: [
//                 { label: 'Option 1 - With Columns', value: 'option-1' },
//                 { label: 'Option 2 - Quote Style', value: 'option-2' },
//               ],
//             },
//             {
//               name: 'backgroundImage',
//               type: 'upload',
//               relationTo: 'media',
//               label: 'Background Image',
//             },
//             {
//               name: 'logo',
//               type: 'upload',
//               relationTo: 'media',
//               label: 'Logo',
//             },
//             {
//               name: 'logoAlt',
//               type: 'text',
//               label: 'Logo Alt Text',
//             },
//             {
//               name: 'logoWidth',
//               type: 'number',
//               label: 'Logo Width',
//             },
//             {
//               name: 'logoHeight',
//               type: 'number',
//               label: 'Logo Height',
//             },
//             {
//               name: 'smallHeading',
//               type: 'text',
//               label: 'Small Heading',
//             },
//             {
//               name: 'mainHeadingLine1',
//               type: 'text',
//               label: 'Main Heading Line 1',
//             },
//             {
//               name: 'mainHeadingLine2',
//               type: 'text',
//               label: 'Main Heading Line 2',
//             },
//             {
//               name: 'quoteText',
//               type: 'textarea',
//               label: 'Quote Text (for option-2)',
//             },
//             {
//               name: 'columns',
//               type: 'array',
//               label: 'Feature Columns (for option-1)',
//               fields: [
//                 {
//                   name: 'title',
//                   type: 'text',
//                   label: 'Title',
//                 },
//                 {
//                   name: 'content',
//                   type: 'textarea',
//                   label: 'Content',
//                 },
//               ],
//             },
//           ],
//         },
//         {
//           name: 'halfImage',
//           type: 'group',
//           label: 'Half Image Section',
//           admin: {
//             condition: (data, siblingData) => siblingData?.sectionType === 'half_image',
//           },
//           fields: [
//             {
//               name: 'flipped',
//               type: 'checkbox',
//               label: 'Flip Layout (image on right)',
//               defaultValue: false,
//             },
//             {
//               name: 'image',
//               type: 'upload',
//               relationTo: 'media',
//               label: 'Image',
//             },
//             {
//               name: 'imageAlt',
//               type: 'text',
//               label: 'Image Alt Text',
//             },
//             {
//               name: 'heading',
//               type: 'textarea',
//               label: 'Heading (h2)',
//             },
//             {
//               name: 'contentBold',
//               type: 'textarea',
//               label: 'Bold Paragraph',
//             },
//             {
//               name: 'content',
//               type: 'textarea',
//               label: 'Regular Paragraph',
//             },
//             {
//               name: 'buttons',
//               type: 'array',
//               label: 'Buttons',
//               fields: [
//                 {
//                   name: 'text',
//                   type: 'text',
//                   label: 'Button Text',
//                 },
//                 {
//                   name: 'url',
//                   type: 'text',
//                   label: 'URL',
//                 },
//                 {
//                   name: 'classes',
//                   type: 'text',
//                   label: 'Button Classes',
//                   admin: {
//                     description: 'e.g., "btn white outline"',
//                   },
//                 },
//               ],
//             },
//           ],
//         },
//         {
//           name: 'reviewsSlider',
//           type: 'group',
//           label: 'Reviews Slider',
//           admin: {
//             condition: (data, siblingData) => siblingData?.sectionType === 'reviews_slider',
//           },
//           fields: [
//             {
//               name: 'logo',
//               type: 'upload',
//               relationTo: 'media',
//               label: 'Logo',
//             },
//             {
//               name: 'logoAlt',
//               type: 'text',
//               label: 'Logo Alt',
//             },
//             {
//               name: 'logoWidth',
//               type: 'number',
//               defaultValue: 55,
//             },
//             {
//               name: 'logoHeight',
//               type: 'number',
//               defaultValue: 61,
//             },
//             {
//               name: 'title',
//               type: 'text',
//               label: 'Section Title',
//             },
//             {
//               name: 'itemsToShow',
//               type: 'number',
//               label: 'Items to Show',
//               defaultValue: 3,
//             },
//             {
//               name: 'reviews',
//               type: 'array',
//               label: 'Reviews',
//               fields: [
//                 {
//                   name: 'description',
//                   type: 'textarea',
//                   label: 'Review Text',
//                 },
//                 {
//                   name: 'author',
//                   type: 'text',
//                   label: 'Author',
//                 },
//                 {
//                   name: 'rating',
//                   type: 'number',
//                   label: 'Rating (1-5)',
//                   min: 1,
//                   max: 5,
//                   defaultValue: 5,
//                 },
//               ],
//             },
//             {
//               name: 'ctaText',
//               type: 'text',
//               label: 'CTA Button Text',
//             },
//             {
//               name: 'ctaUrl',
//               type: 'text',
//               label: 'CTA Button URL',
//             },
//           ],
//         },
//         {
//           name: 'doubleBanner',
//           type: 'group',
//           label: 'Double Banner',
//           admin: {
//             condition: (data, siblingData) => siblingData?.sectionType === 'double_banner',
//           },
//           fields: [
//             {
//               name: 'mainTitleSmall',
//               type: 'text',
//               label: 'Main Small Heading',
//             },
//             {
//               name: 'mainTitle',
//               type: 'text',
//               label: 'Main Title',
//             },
//             {
//               name: 'leftBanner',
//               type: 'group',
//               label: 'Left Banner',
//               fields: [
//                 {
//                   name: 'title',
//                   type: 'text',
//                   label: 'Title (h2)',
//                 },
//                 {
//                   name: 'contentBold',
//                   type: 'text',
//                   label: 'Bold Heading',
//                 },
//                 {
//                   name: 'content',
//                   type: 'textarea',
//                   label: 'Content',
//                 },
//                 {
//                   name: 'linkText',
//                   type: 'text',
//                   label: 'Link Text',
//                 },
//                 {
//                   name: 'linkUrl',
//                   type: 'text',
//                   label: 'Link URL',
//                 },
//                 {
//                   name: 'image',
//                   type: 'upload',
//                   relationTo: 'media',
//                   label: 'Background Image',
//                 },
//                 {
//                   name: 'imageAlt',
//                   type: 'text',
//                   label: 'Image Alt Text',
//                 },
//               ],
//             },
//             {
//               name: 'rightBanner',
//               type: 'group',
//               label: 'Right Banner',
//               fields: [
//                 {
//                   name: 'title',
//                   type: 'text',
//                   label: 'Title (h2)',
//                 },
//                 {
//                   name: 'contentBold',
//                   type: 'text',
//                   label: 'Bold Heading',
//                 },
//                 {
//                   name: 'content',
//                   type: 'textarea',
//                   label: 'Content',
//                 },
//                 {
//                   name: 'linkText',
//                   type: 'text',
//                   label: 'Link Text',
//                 },
//                 {
//                   name: 'linkUrl',
//                   type: 'text',
//                   label: 'Link URL',
//                 },
//                 {
//                   name: 'image',
//                   type: 'upload',
//                   relationTo: 'media',
//                   label: 'Background Image',
//                 },
//                 {
//                   name: 'imageAlt',
//                   type: 'text',
//                   label: 'Image Alt Text',
//                 },
//               ],
//             },
//           ],
//         },
//         {
//           name: 'locationsBanner',
//           type: 'group',
//           label: 'Locations Banner',
//           admin: {
//             condition: (data, siblingData) => siblingData?.sectionType === 'locations_banner',
//           },
//           fields: [
//             {
//               name: 'smallHeading',
//               type: 'text',
//               label: 'Small Heading',
//             },
//             {
//               name: 'mainHeading',
//               type: 'text',
//               label: 'Main Heading',
//             },
//             {
//               name: 'description',
//               type: 'textarea',
//               label: 'Description',
//             },
//             {
//               name: 'mapImage',
//               type: 'upload',
//               relationTo: 'media',
//               label: 'Map Background Image',
//             },
//             {
//               name: 'ctaText',
//               type: 'text',
//               label: 'CTA Button Text',
//             },
//             {
//               name: 'ctaUrl',
//               type: 'text',
//               label: 'CTA Button URL',
//             },
//             {
//               name: 'locations',
//               type: 'array',
//               label: 'Locations (24 total)',
//               fields: [
//                 {
//                   name: 'name',
//                   type: 'text',
//                   label: 'Location Name',
//                   required: true,
//                 },
//                 {
//                   name: 'addressLine1',
//                   type: 'text',
//                   label: 'Address Line 1',
//                 },
//                 {
//                   name: 'addressLine2',
//                   type: 'text',
//                   label: 'Address Line 2',
//                 },
//                 {
//                   name: 'phone',
//                   type: 'text',
//                   label: 'Phone Number (display)',
//                 },
//                 {
//                   name: 'phoneLink',
//                   type: 'text',
//                   label: 'Phone Link (tel:)',
//                 },
//                 {
//                   name: 'url',
//                   type: 'text',
//                   label: 'Location Page URL',
//                 },
//                 {
//                   name: 'ariaLabel',
//                   type: 'text',
//                   label: 'Pin ARIA Label',
//                 },
//                 {
//                   name: 'leftPosition',
//                   type: 'text',
//                   label: 'Left Position (%)',
//                   admin: {
//                     description: 'e.g., "53" for 53%',
//                   },
//                 },
//                 {
//                   name: 'topPosition',
//                   type: 'text',
//                   label: 'Top Position (%)',
//                   admin: {
//                     description: 'e.g., "45" for 45%',
//                   },
//                 },
//               ],
//             },
//           ],
//         },
//         {
//           name: 'ctaGallery',
//           type: 'group',
//           label: 'CTA Gallery',
//           admin: {
//             condition: (data, siblingData) => siblingData?.sectionType === 'cta_gallery',
//           },
//           fields: [
//             {
//               name: 'smallHeading',
//               type: 'text',
//               label: 'Small Heading',
//             },
//             {
//               name: 'mainHeading',
//               type: 'text',
//               label: 'Main Heading',
//             },
//             {
//               name: 'testimonial',
//               type: 'textarea',
//               label: 'Testimonial Quote',
//             },
//             {
//               name: 'image',
//               type: 'upload',
//               relationTo: 'media',
//               label: 'Gallery Image',
//             },
//             {
//               name: 'imageAlt',
//               type: 'text',
//               label: 'Image Alt Text',
//             },
//             {
//               name: 'buttonText',
//               type: 'text',
//               label: 'Button Text',
//             },
//             {
//               name: 'buttonUrl',
//               type: 'text',
//               label: 'Button URL',
//             },
//             {
//               name: 'buttonTitle',
//               type: 'text',
//               label: 'Button Title Attribute',
//             },
//             {
//               name: 'buttonAriaLabel',
//               type: 'text',
//               label: 'Button ARIA Label',
//             },
//           ],
//         },
//         {
//           name: 'tabsModule',
//           type: 'group',
//           label: 'Tabs Module',
//           admin: {
//             condition: (data, siblingData) => siblingData?.sectionType === 'tabs_module',
//           },
//           fields: [
//             {
//               name: 'tabs',
//               type: 'array',
//               label: 'Tabs',
//               fields: [
//                 {
//                   name: 'tabLabel',
//                   type: 'text',
//                   label: 'Tab Label',
//                   required: true,
//                 },
//                 {
//                   name: 'smallHeading',
//                   type: 'text',
//                   label: 'Small Heading',
//                 },
//                 {
//                   name: 'mainHeading',
//                   type: 'text',
//                   label: 'Main Heading',
//                 },
//                 {
//                   name: 'description',
//                   type: 'textarea',
//                   label: 'Description',
//                 },
//                 {
//                   name: 'links',
//                   type: 'array',
//                   label: 'Related Links',
//                   fields: [
//                     {
//                       name: 'text',
//                       type: 'text',
//                       label: 'Link Text',
//                     },
//                     {
//                       name: 'url',
//                       type: 'text',
//                       label: 'URL',
//                     },
//                   ],
//                 },
//                 {
//                   name: 'buttonText',
//                   type: 'text',
//                   label: 'Button Text',
//                 },
//                 {
//                   name: 'buttonUrl',
//                   type: 'text',
//                   label: 'Button URL',
//                 },
//                 {
//                   name: 'buttonClasses',
//                   type: 'text',
//                   label: 'Button Classes',
//                 },
//                 {
//                   name: 'media',
//                   type: 'upload',
//                   relationTo: 'media',
//                   label: 'Tab Media',
//                 },
//                 {
//                   name: 'mediaAlt',
//                   type: 'text',
//                   label: 'Media Alt Text',
//                 },
//               ],
//             },
//           ],
//         },
//       ],
//     },
//     {
//       name: 'seo',
//       type: 'group',
//       label: 'SEO Settings',
//       fields: [
//         {
//           name: 'metaTitle',
//           type: 'text',
//           label: 'Meta Title',
//         },
//         {
//           name: 'metaDescription',
//           type: 'textarea',
//           label: 'Meta Description',
//         },
//         {
//           name: 'ogImage',
//           type: 'upload',
//           relationTo: 'media',
//           label: 'Open Graph Image',
//         },
//       ],
//     },
//   ],
// }

// // export default Home

import { GlobalConfig } from 'payload'

export const Home: GlobalConfig = {
  slug: 'home',
  label: 'Home Page',
  admin: {
    description: 'Manage the home page content and sections',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'accessibilityMenu',
      type: 'group',
      label: 'Accessibility Menu',
      fields: [
        {
          name: 'enabled',
          type: 'checkbox',
          label: 'Show Accessibility Menu',
          defaultValue: true,
        },
        {
          name: 'items',
          type: 'array',
          label: 'Menu Items',
          fields: [
            {
              name: 'text',
              type: 'text',
              label: 'Text',
            },
            {
              name: 'href',
              type: 'text',
              label: 'Link',
            },
            {
              name: 'ariaLabel',
              type: 'text',
              label: 'ARIA Label',
            },
          ],
        },
      ],
    },
    {
      name: 'sections',
      type: 'array',
      required: true,
      minRows: 1,
      labels: {
        singular: 'Section',
        plural: 'Sections',
      },
      admin: {
        description: 'Drag and drop to reorder sections',
        // components: {
        //   RowLabel: ({ data }) => {
        //     return data?.sectionType?.replace(/_/g, ' ').toUpperCase() || 'Section'
        //   },
        // },
      },
      fields: [
        {
          name: 'sectionType',
          type: 'select',
          required: true,
          options: [
            { label: 'Hero Banner', value: 'hero_banner' },
            { label: 'Anchor Links', value: 'anchor_links' },
            { label: 'Intro Section', value: 'intro_section' },
            { label: 'Two Column Content', value: 'two_column' },
            { label: 'Three Column Stats', value: 'three_column_stats' },
            { label: 'Home Grid', value: 'home_grid' },
            { label: 'Home Banner', value: 'home_banner' },
            { label: 'Half Image Section', value: 'half_image' },
            { label: 'Reviews Slider', value: 'reviews_slider' },
            { label: 'Double Banner', value: 'double_banner' },
            { label: 'Locations Banner', value: 'locations_banner' },
            { label: 'CTA Gallery', value: 'cta_gallery' },
            { label: 'Tabs Module', value: 'tabs_module' },
            { label: 'Founders Section', value: 'founders_section' },
            { label: 'Quote Banner', value: 'quote_banner' },
            { label: 'Procedures Double Banner', value: 'procedures_banner' },
          ],
        },
        {
          name: 'visibility',
          type: 'checkbox',
          label: 'Visible',
          defaultValue: true,
        },
        {
          name: 'customClasses',
          type: 'text',
          label: 'Custom CSS Classes',
          admin: {
            description: 'Space-separated class names (e.g., "dark center-placement wow fadeInUp")',
          },
        },
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Section Background Color',
          admin: {
            description: 'CSS color value (e.g., #ffffff, transparent, rgb(255,255,255))',
          },
        },
        {
          name: 'textColor',
          type: 'text',
          label: 'Section Text Color',
          admin: {
            description: 'CSS color value (e.g., #000000, #333333)',
          },
        },
        {
          name: 'heroBanner',
          type: 'group',
          label: 'Hero Banner Content',
          admin: {
            condition: (data, siblingData) => siblingData?.sectionType === 'hero_banner',
          },
          fields: [
            {
              name: 'logo',
              type: 'upload',
              relationTo: 'media',
              label: 'Logo',
              admin: {
                description: 'Upload your logo image',
              },
            },
            {
              name: 'logoWidth',
              type: 'number',
              label: 'Logo Width',
              defaultValue: 58,
            },
            {
              name: 'logoHeight',
              type: 'number',
              label: 'Logo Height',
              defaultValue: 64,
            },
            {
              name: 'logoAlt',
              type: 'text',
              label: 'Logo Alt Text',
            },
            {
              name: 'mainHeading',
              type: 'text',
              label: 'Main Heading (h1)',
            },
            {
              name: 'subHeadingLine1',
              type: 'text',
              label: 'Sub Heading Line 1',
            },
            {
              name: 'subHeadingLine2',
              type: 'text',
              label: 'Sub Heading Line 2',
            },
            {
              name: 'backgroundVideo',
              type: 'group',
              label: 'Background Video',
              fields: [
                {
                  name: 'enabled',
                  type: 'checkbox',
                  label: 'Enable Video Background',
                  defaultValue: true,
                },
                {
                  name: 'desktopUrl',
                  type: 'text',
                  label: 'Desktop Video URL (high quality)',
                },
                {
                  name: 'tabletUrl',
                  type: 'text',
                  label: 'Tablet Video URL (medium quality)',
                },
                {
                  name: 'mobileUrl',
                  type: 'text',
                  label: 'Mobile Video URL (low quality)',
                },
                {
                  name: 'videoTitle',
                  type: 'text',
                  label: 'Video Title (for accessibility)',
                },
              ],
            },
            {
              name: 'slides',
              type: 'array',
              label: 'Image Slides',
              fields: [
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Image',
                  admin: {
                    description: 'Upload your logo image',
                  },
                },
                {
                  name: 'imageAlt',
                  type: 'text',
                  label: 'Image Alt Text',
                },
              ],
            },
          ],
        },
        {
          name: 'anchorLinks',
          type: 'group',
          label: 'Anchor Links Content',
          admin: {
            condition: (data, siblingData) => siblingData?.sectionType === 'anchor_links',
          },
          fields: [
            {
              name: 'links',
              type: 'array',
              label: 'Links',
              fields: [
                {
                  name: 'text',
                  type: 'text',
                  label: 'Link Text',
                  required: true,
                },
                {
                  name: 'url',
                  type: 'text',
                  label: 'URL',
                  required: true,
                },
                {
                  name: 'ariaLabel',
                  type: 'text',
                  label: 'ARIA Label',
                },
              ],
            },
          ],
        },
        {
          name: 'introSection',
          type: 'group',
          label: 'Intro Section Content',
          admin: {
            condition: (data, siblingData) => siblingData?.sectionType === 'intro_section',
          },
          fields: [
            {
              name: 'heading',
              type: 'textarea',
              label: 'Main Heading (h2)',
            },
            {
              name: 'subheadings',
              type: 'array',
              label: 'Subheadings (h4)',
              fields: [
                {
                  name: 'text',
                  type: 'text',
                  label: 'Text',
                },
              ],
            },
          ],
        },
        {
          name: 'twoColumn',
          type: 'group',
          label: 'Two Column Content',
          admin: {
            condition: (data, siblingData) => siblingData?.sectionType === 'two_column',
          },
          fields: [
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
              name: 'smallHeading',
              type: 'text',
              label: 'Small Heading',
            },
            {
              name: 'mainHeadingLine1',
              type: 'text',
              label: 'Main Heading Line 1',
            },
            {
              name: 'mainHeadingLine2',
              type: 'text',
              label: 'Main Heading Line 2',
            },
            {
              name: 'content',
              type: 'textarea',
              label: 'Content Paragraph',
            },
            {
              name: 'media',
              type: 'upload',
              relationTo: 'media',
              label: 'Media',
              admin: {
                description: 'Upload your logo image',
              },
            },
            {
              name: 'mediaAlt',
              type: 'text',
              label: 'Media Alt Text',
            },
            {
              name: 'mediaWidth',
              type: 'number',
              label: 'Media Width',
            },
            {
              name: 'mediaHeight',
              type: 'number',
              label: 'Media Height',
            },
          ],
        },
        {
          name: 'threeColumnStats',
          type: 'group',
          label: 'Three Column Stats',
          admin: {
            condition: (data, siblingData) => siblingData?.sectionType === 'three_column_stats',
          },
          fields: [
            {
              name: 'columns',
              type: 'array',
              label: 'Stat Columns',
              minRows: 3,
              maxRows: 3,
              fields: [
                {
                  name: 'number',
                  type: 'text',
                  label: 'Number (h2)',
                  required: true,
                },
                {
                  name: 'titleSmall',
                  type: 'text',
                  label: 'Small Title Text',
                },
                {
                  name: 'titleLine1',
                  type: 'text',
                  label: 'Title Line 1',
                },
                {
                  name: 'titleLine2',
                  type: 'text',
                  label: 'Title Line 2 (optional)',
                },
              ],
            },
          ],
        },
        {
          name: 'homeGrid',
          type: 'group',
          label: 'Home Grid Content',
          admin: {
            condition: (data, siblingData) => siblingData?.sectionType === 'home_grid',
          },
          fields: [
            {
              name: 'gridOption',
              type: 'select',
              label: 'Grid Style',
              options: [
                { label: 'Option 1 - 3 Column with Title Overlay', value: 'option-1' },
                { label: 'Option 2', value: 'option-2' },
                { label: 'Option 3 - 3 Column with Title Below', value: 'option-3' },
              ],
            },
            {
              name: 'items',
              type: 'array',
              label: 'Grid Items',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  label: 'Title',
                },
                {
                  name: 'content',
                  type: 'textarea',
                  label: 'Content',
                },
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Image',
                  admin: {
                    description: 'Upload your logo image',
                  },
                },
                {
                  name: 'imageAlt',
                  type: 'text',
                  label: 'Image Alt Text',
                },
                {
                  name: 'linkText',
                  type: 'text',
                  label: 'Link Text',
                },
                {
                  name: 'linkUrl',
                  type: 'text',
                  label: 'Link URL',
                },
              ],
            },
          ],
        },
        {
          name: 'homeBanner',
          type: 'group',
          label: 'Home Banner Content',
          admin: {
            condition: (data, siblingData) => siblingData?.sectionType === 'home_banner',
          },
          fields: [
            {
              name: 'option',
              type: 'select',
              label: 'Banner Option',
              options: [
                { label: 'Option 1 - With Columns', value: 'option-1' },
                { label: 'Option 2 - Quote Style', value: 'option-2' },
              ],
            },
            {
              name: 'backgroundImage',
              type: 'upload',
              relationTo: 'media',
              label: 'Background Image',
              admin: {
                description: 'Upload your logo image',
              },
            },
            {
              name: 'logo',
              type: 'upload',
              relationTo: 'media',
              label: 'Logo',
              admin: {
                description: 'Upload your logo image',
              },
            },
            {
              name: 'logoAlt',
              type: 'text',
              label: 'Logo Alt Text',
            },
            {
              name: 'logoWidth',
              type: 'number',
              label: 'Logo Width',
            },
            {
              name: 'logoHeight',
              type: 'number',
              label: 'Logo Height',
            },
            {
              name: 'smallHeading',
              type: 'text',
              label: 'Small Heading',
            },
            {
              name: 'mainHeadingLine1',
              type: 'text',
              label: 'Main Heading Line 1',
            },
            {
              name: 'mainHeadingLine2',
              type: 'text',
              label: 'Main Heading Line 2',
            },
            {
              name: 'quoteText',
              type: 'textarea',
              label: 'Quote Text (for option-2)',
            },
            {
              name: 'columns',
              type: 'array',
              label: 'Feature Columns (for option-1)',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  label: 'Title',
                },
                {
                  name: 'content',
                  type: 'textarea',
                  label: 'Content',
                },
              ],
            },
          ],
        },
        {
          name: 'halfImage',
          type: 'group',
          label: 'Half Image Section',
          admin: {
            condition: (data, siblingData) => siblingData?.sectionType === 'half_image',
          },
          fields: [
            {
              name: 'flipped',
              type: 'checkbox',
              label: 'Flip Layout (image on right)',
              defaultValue: false,
            },
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              label: 'Image',
              admin: {
                description: 'Upload your logo image',
              },
            },
            {
              name: 'imageAlt',
              type: 'text',
              label: 'Image Alt Text',
            },
            {
              name: 'heading',
              type: 'textarea',
              label: 'Heading (h2)',
            },
            {
              name: 'contentBold',
              type: 'textarea',
              label: 'Bold Paragraph',
            },
            {
              name: 'content',
              type: 'textarea',
              label: 'Regular Paragraph',
            },
            {
              name: 'buttons',
              type: 'array',
              label: 'Buttons',
              fields: [
                {
                  name: 'text',
                  type: 'text',
                  label: 'Button Text',
                },
                {
                  name: 'url',
                  type: 'text',
                  label: 'URL',
                },
                {
                  name: 'classes',
                  type: 'text',
                  label: 'Button Classes',
                  admin: {
                    description: 'e.g., "btn white outline"',
                  },
                },
              ],
            },
          ],
        },
        {
          name: 'reviewsSlider',
          type: 'group',
          label: 'Reviews Slider',
          admin: {
            condition: (data, siblingData) => siblingData?.sectionType === 'reviews_slider',
          },
          fields: [
            {
              name: 'logo',
              type: 'upload',
              relationTo: 'media',
              label: 'Logo',
              admin: {
                description: 'Upload your logo image',
              },
            },
            {
              name: 'logoAlt',
              type: 'text',
              label: 'Logo Alt',
            },
            {
              name: 'logoWidth',
              type: 'number',
              defaultValue: 55,
            },
            {
              name: 'logoHeight',
              type: 'number',
              defaultValue: 61,
            },
            {
              name: 'title',
              type: 'text',
              label: 'Section Title',
            },
            {
              name: 'itemsToShow',
              type: 'number',
              label: 'Items to Show',
              defaultValue: 3,
            },
            {
              name: 'reviews',
              type: 'array',
              label: 'Reviews',
              fields: [
                {
                  name: 'description',
                  type: 'textarea',
                  label: 'Review Text',
                },
                {
                  name: 'author',
                  type: 'text',
                  label: 'Author',
                },
                {
                  name: 'rating',
                  type: 'number',
                  label: 'Rating (1-5)',
                  min: 1,
                  max: 5,
                  defaultValue: 5,
                },
              ],
            },
            {
              name: 'ctaText',
              type: 'text',
              label: 'CTA Button Text',
            },
            {
              name: 'ctaUrl',
              type: 'text',
              label: 'CTA Button URL',
            },
          ],
        },
        {
          name: 'doubleBanner',
          type: 'group',
          label: 'Double Banner',
          admin: {
            condition: (data, siblingData) => siblingData?.sectionType === 'double_banner',
          },
          fields: [
            {
              name: 'mainTitleSmall',
              type: 'text',
              label: 'Main Small Heading',
            },
            {
              name: 'mainTitle',
              type: 'text',
              label: 'Main Title',
            },
            {
              name: 'leftBanner',
              type: 'group',
              label: 'Left Banner',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  label: 'Title (h2)',
                },
                {
                  name: 'contentBold',
                  type: 'text',
                  label: 'Bold Heading',
                },
                {
                  name: 'content',
                  type: 'textarea',
                  label: 'Content',
                },
                {
                  name: 'linkText',
                  type: 'text',
                  label: 'Link Text',
                },
                {
                  name: 'linkUrl',
                  type: 'text',
                  label: 'Link URL',
                },
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Background Image',
                  admin: {
                    description: 'Upload your logo image',
                  },
                },
                {
                  name: 'imageAlt',
                  type: 'text',
                  label: 'Image Alt Text',
                },
              ],
            },
            {
              name: 'rightBanner',
              type: 'group',
              label: 'Right Banner',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  label: 'Title (h2)',
                },
                {
                  name: 'contentBold',
                  type: 'text',
                  label: 'Bold Heading',
                },
                {
                  name: 'content',
                  type: 'textarea',
                  label: 'Content',
                },
                {
                  name: 'linkText',
                  type: 'text',
                  label: 'Link Text',
                },
                {
                  name: 'linkUrl',
                  type: 'text',
                  label: 'Link URL',
                },
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Background Image',
                  admin: {
                    description: 'Upload your logo image',
                  },
                },
                {
                  name: 'imageAlt',
                  type: 'text',
                  label: 'Image Alt Text',
                },
              ],
            },
          ],
        },
        {
          name: 'locationsBanner',
          type: 'group',
          label: 'Locations Banner',
          admin: {
            condition: (data, siblingData) => siblingData?.sectionType === 'locations_banner',
          },
          fields: [
            {
              name: 'smallHeading',
              type: 'text',
              label: 'Small Heading',
            },
            {
              name: 'mainHeading',
              type: 'text',
              label: 'Main Heading',
            },
            {
              name: 'description',
              type: 'textarea',
              label: 'Description',
            },
            {
              name: 'mapImage',
              type: 'upload',
              relationTo: 'media',
              label: 'Map Background Image',
              admin: {
                description: 'Upload your logo image',
              },
            },
            {
              name: 'ctaText',
              type: 'text',
              label: 'CTA Button Text',
            },
            {
              name: 'ctaUrl',
              type: 'text',
              label: 'CTA Button URL',
            },
            {
              name: 'locations',
              type: 'array',
              label: 'Locations (24 total)',
              fields: [
                {
                  name: 'name',
                  type: 'text',
                  label: 'Location Name',
                  required: true,
                },
                {
                  name: 'addressLine1',
                  type: 'text',
                  label: 'Address Line 1',
                },
                {
                  name: 'addressLine2',
                  type: 'text',
                  label: 'Address Line 2',
                },
                {
                  name: 'phone',
                  type: 'text',
                  label: 'Phone Number (display)',
                },
                {
                  name: 'phoneLink',
                  type: 'text',
                  label: 'Phone Link (tel:)',
                },
                {
                  name: 'url',
                  type: 'text',
                  label: 'Location Page URL',
                },
                {
                  name: 'ariaLabel',
                  type: 'text',
                  label: 'Pin ARIA Label',
                },
                {
                  name: 'leftPosition',
                  type: 'text',
                  label: 'Left Position (%)',
                  admin: {
                    description: 'e.g., "53" for 53%',
                  },
                },
                {
                  name: 'topPosition',
                  type: 'text',
                  label: 'Top Position (%)',
                  admin: {
                    description: 'e.g., "45" for 45%',
                  },
                },
              ],
            },
          ],
        },
        {
          name: 'ctaGallery',
          type: 'group',
          label: 'CTA Gallery',
          admin: {
            condition: (data, siblingData) => siblingData?.sectionType === 'cta_gallery',
          },
          fields: [
            {
              name: 'smallHeading',
              type: 'text',
              label: 'Small Heading',
            },
            {
              name: 'mainHeading',
              type: 'text',
              label: 'Main Heading',
            },
            {
              name: 'testimonial',
              type: 'textarea',
              label: 'Testimonial Quote',
            },
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              label: 'Gallery Image',
              admin: {
                description: 'Upload your logo image',
              },
            },
            {
              name: 'imageAlt',
              type: 'text',
              label: 'Image Alt Text',
            },
            {
              name: 'buttonText',
              type: 'text',
              label: 'Button Text',
            },
            {
              name: 'buttonUrl',
              type: 'text',
              label: 'Button URL',
            },
            {
              name: 'buttonTitle',
              type: 'text',
              label: 'Button Title Attribute',
            },
            {
              name: 'buttonAriaLabel',
              type: 'text',
              label: 'Button ARIA Label',
            },
          ],
        },
        {
          name: 'tabsModule',
          type: 'group',
          label: 'Tabs Module',
          admin: {
            condition: (data, siblingData) => siblingData?.sectionType === 'tabs_module',
          },
          fields: [
            {
              name: 'tabs',
              type: 'array',
              label: 'Tabs',
              fields: [
                {
                  name: 'tabLabel',
                  type: 'text',
                  label: 'Tab Label',
                  required: true,
                },
                {
                  name: 'smallHeading',
                  type: 'text',
                  label: 'Small Heading',
                },
                {
                  name: 'mainHeading',
                  type: 'text',
                  label: 'Main Heading',
                },
                {
                  name: 'description',
                  type: 'textarea',
                  label: 'Description',
                },
                {
                  name: 'links',
                  type: 'array',
                  label: 'Related Links',
                  fields: [
                    {
                      name: 'text',
                      type: 'text',
                      label: 'Link Text',
                    },
                    {
                      name: 'url',
                      type: 'text',
                      label: 'URL',
                    },
                  ],
                },
                {
                  name: 'buttonText',
                  type: 'text',
                  label: 'Button Text',
                },
                {
                  name: 'buttonUrl',
                  type: 'text',
                  label: 'Button URL',
                },
                {
                  name: 'buttonClasses',
                  type: 'text',
                  label: 'Button Classes',
                },
                {
                  name: 'media',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Tab Media',
                  admin: {
                    description: 'Upload your logo image',
                  },
                },
                {
                  name: 'mediaAlt',
                  type: 'text',
                  label: 'Media Alt Text',
                },
              ],
            },
          ],
        },
        {
          name: 'foundersSection',
          type: 'group',
          label: 'Founders Section',
          admin: {
            condition: (data, siblingData) => siblingData?.sectionType === 'founders_section',
          },
          fields: [
            {
              name: 'flipped',
              type: 'checkbox',
              label: 'Flip Layout (image on right)',
              defaultValue: true,
            },
            {
              name: 'hasWatermark',
              type: 'checkbox',
              label: 'Show Watermark',
              defaultValue: false,
            },
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              label: 'Founders Image',
              admin: {
                description: 'Upload the founders image',
              },
            },
            {
              name: 'imageAlt',
              type: 'text',
              label: 'Image Alt Text',
              defaultValue: 'Dr. James Young & My Pham Young',
            },
            {
              name: 'imageWidth',
              type: 'number',
              label: 'Image Width',
              defaultValue: 1740,
            },
            {
              name: 'imageHeight',
              type: 'number',
              label: 'Image Height',
              defaultValue: 1742,
            },
            {
              name: 'smallHeading',
              type: 'text',
              label: 'Small Heading',
              defaultValue: 'Our Founders,',
            },
            {
              name: 'mainHeading',
              type: 'text',
              label: 'Main Heading',
              defaultValue: 'Dr. James Young & My Pham Young',
            },
            {
              name: 'content',
              type: 'textarea',
              label: 'Content Text',
            },
            {
              name: 'buttonText',
              type: 'text',
              label: 'Button Text',
              defaultValue: 'Learn More About Founders',
            },
            {
              name: 'buttonUrl',
              type: 'text',
              label: 'Button URL',
              defaultValue: '/about/meet-the-team/',
            },
          ],
        },
        {
          name: 'quoteBanner',
          type: 'group',
          label: 'Quote Banner',
          admin: {
            condition: (data, siblingData) => siblingData?.sectionType === 'quote_banner',
          },
          fields: [
            {
              name: 'isDark',
              type: 'checkbox',
              label: 'Dark Theme',
              defaultValue: true,
            },
            {
              name: 'hasLinks',
              type: 'checkbox',
              label: 'Show Links',
              defaultValue: false,
            },
            {
              name: 'logo',
              type: 'upload',
              relationTo: 'media',
              label: 'Logo',
              admin: {
                description: 'Upload the logo (typically white for dark theme)',
              },
            },
            {
              name: 'logoAlt',
              type: 'text',
              label: 'Logo Alt Text',
              defaultValue: 'white goldfinger aesthetics logo',
            },
            {
              name: 'logoWidth',
              type: 'number',
              label: 'Logo Width',
              defaultValue: 58,
            },
            {
              name: 'logoHeight',
              type: 'number',
              label: 'Logo Height',
              defaultValue: 64,
            },
            {
              name: 'quoteText',
              type: 'textarea',
              label: 'Quote Text (h3)',
              required: true,
            },
            {
              name: 'backgroundImage',
              type: 'upload',
              relationTo: 'media',
              label: 'Background Image',
              admin: {
                description: 'Upload the background image',
              },
            },
            {
              name: 'backgroundImageAlt',
              type: 'text',
              label: 'Background Image Alt Text',
            },
            {
              name: 'backgroundImageWidth',
              type: 'number',
              label: 'Background Image Width',
              defaultValue: 2200,
            },
            {
              name: 'backgroundImageHeight',
              type: 'number',
              label: 'Background Image Height',
              defaultValue: 1077,
            },
          ],
        },
        {
          name: 'proceduresBanner',
          type: 'group',
          label: 'Procedures Double Banner',
          admin: {
            condition: (data, siblingData) => siblingData?.sectionType === 'procedures_banner',
          },
          fields: [
            {
              name: 'mainTitleSmall',
              type: 'text',
              label: 'Small Main Title',
              defaultValue: 'plastic surgery procedures',
            },
            {
              name: 'mainTitle',
              type: 'text',
              label: 'Main Title',
              defaultValue: 'Be Proud of Your Body',
            },
            {
              name: 'leftBanner',
              type: 'group',
              label: 'Left Banner (Body Procedures)',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  label: 'Title (h2)',
                  defaultValue: 'Body Procedures',
                },
                {
                  name: 'contentBold',
                  type: 'text',
                  label: 'Bold Heading',
                  defaultValue: 'Body Procedures',
                },
                {
                  name: 'content',
                  type: 'textarea',
                  label: 'Content',
                },
                {
                  name: 'linkText',
                  type: 'text',
                  label: 'Link Text',
                  defaultValue: 'View All Body Procedures',
                },
                {
                  name: 'linkUrl',
                  type: 'text',
                  label: 'Link URL',
                  defaultValue: '/plastic-surgery/body/',
                },
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Background Image',
                  admin: {
                    description: 'Upload background image for body procedures',
                  },
                },
                {
                  name: 'imageAlt',
                  type: 'text',
                  label: 'Image Alt Text',
                  defaultValue: 'fit woman in black exercise clothes',
                },
                {
                  name: 'imageWidth',
                  type: 'number',
                  label: 'Image Width',
                  defaultValue: 1484,
                },
                {
                  name: 'imageHeight',
                  type: 'number',
                  label: 'Image Height',
                  defaultValue: 1852,
                },
              ],
            },
            {
              name: 'rightBanner',
              type: 'group',
              label: 'Right Banner (Breast Procedures)',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  label: 'Title (h2)',
                  defaultValue: 'Breast Procedures',
                },
                {
                  name: 'contentBold',
                  type: 'text',
                  label: 'Bold Heading',
                  defaultValue: 'Breast Procedures',
                },
                {
                  name: 'content',
                  type: 'textarea',
                  label: 'Content',
                },
                {
                  name: 'linkText',
                  type: 'text',
                  label: 'Link Text',
                  defaultValue: 'View All Breast Procedures',
                },
                {
                  name: 'linkUrl',
                  type: 'text',
                  label: 'Link URL',
                  defaultValue: '/plastic-surgery/breast/',
                },
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Background Image',
                  admin: {
                    description: 'Upload background image for breast procedures',
                  },
                },
                {
                  name: 'imageAlt',
                  type: 'text',
                  label: 'Image Alt Text',
                  defaultValue: 'African-American woman in sports bra',
                },
                {
                  name: 'imageWidth',
                  type: 'number',
                  label: 'Image Width',
                  defaultValue: 1484,
                },
                {
                  name: 'imageHeight',
                  type: 'number',
                  label: 'Image Height',
                  defaultValue: 1852,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'seo',
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
          label: 'Open Graph Image',
          admin: {
            description: 'Upload your logo image',
          },
        },
      ],
    },
  ],
}