import { CollectionConfig } from 'payload'

export const WinterParkLocationPageComponent: CollectionConfig = {
  slug: 'winter-park-location-page-component',
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
      defaultValue: 'Winter Park Location Page Component',
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
        },
        {
          name: 'cssClasses',
          type: 'text',
          label: 'CSS Classes',
          defaultValue: 'mod_hero banner mobile-stack',
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
            {
              name: 'url',
              type: 'text',
              label: 'Image URL (if not uploading)',
              defaultValue:
                'https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg',
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
              label: 'Winter Park',
              url: '/winter-park/',
              ariaLabel: 'Breadcrumbs to help navigate the user',
            },
          ],
        },
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          required: true,
          defaultValue: 'Goldfingers Aesthetics & Plastic Surgery',
        },
        {
          name: 'titleSmall',
          type: 'text',
          label: 'Title Small Text',
          defaultValue: 'in Winter Park',
        },
        {
          name: 'titleColor',
          type: 'text',
          label: 'Title Color',
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
              defaultValue: 'winter park location',
            },
            {
              name: 'url',
              type: 'text',
              label: 'Image URL (if not uploading)',
              defaultValue:
                'https://www.datocms-assets.com/105497/1699983298-winter-park-banner-adj.jpg',
            },
          ],
        },
      ],
    },
    // Intro Column Section
    {
      name: 'introColumnSection',
      type: 'group',
      label: 'Intro Column Section',
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
          name: 'cssClasses',
          type: 'text',
          label: 'CSS Classes',
          defaultValue: 'mod_column viewport container',
        },
        {
          name: 'rowCssClasses',
          type: 'text',
          label: 'Row CSS Classes',
          defaultValue: 'row',
        },
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
          label: 'Logo',
        },
        {
          name: 'logoUrl',
          type: 'text',
          label: 'Logo URL (if not uploading)',
          defaultValue: 'https://www.datocms-assets.com/105497/1692813243-logo-module.svg',
        },
        {
          name: 'logoAlt',
          type: 'text',
          label: 'Logo Alt Text',
          defaultValue: 'Goldfingers aesthetic logo',
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
          name: 'heading',
          type: 'text',
          label: 'Heading',
          required: true,
          defaultValue: 'Experience the difference',
        },
        {
          name: 'headingSpan',
          type: 'text',
          label: 'Heading Span (block desktop)',
          defaultValue: 'at Goldfingers Aesthetics',
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
        },
        {
          name: 'contentText',
          type: 'textarea',
          label: 'Content Text (plain)',
          defaultValue:
            'Welcome to Goldfingers Aesthetics & Plastic Surgery in Winter Park, your destination for transformative med spa services in an atmosphere of care and support. From BOTOX® & Dysport® to Restylane® and Juvéderm®, we offer a wide range of the latest medical aesthetic treatments designed to enhance your natural beauty. Schedule an appointment with the leading med spa in Winter Park today and take the first step towards a rejuvenated you.',
        },
        {
          name: 'button',
          type: 'group',
          label: 'Button',
          fields: [
            {
              name: 'show',
              type: 'checkbox',
              label: 'Show Button',
              defaultValue: true,
            },
            {
              name: 'text',
              type: 'text',
              label: 'Button Text',
              defaultValue: 'Explore Our Medical Spa Services',
            },
            {
              name: 'url',
              type: 'text',
              label: 'Button URL',
              defaultValue: '/winter-park/medical-spa/',
            },
            {
              name: 'cssClass',
              type: 'text',
              label: 'Button CSS Class',
              defaultValue: 'btn',
            },
          ],
        },
        {
          name: 'maxWidth',
          type: 'text',
          label: 'Content Max Width Class',
          defaultValue: 'mw-80',
        },
        {
          name: 'textAlign',
          type: 'select',
          label: 'Text Alignment',
          options: [
            { label: 'Left', value: 'text-left' },
            { label: 'Center', value: 'text-center' },
            { label: 'Right', value: 'text-right' },
          ],
          defaultValue: 'text-center',
        },
      ],
    },
    // Half Image Section 1
    {
      name: 'halfImageSection1',
      type: 'group',
      label: 'Half Image Section 1 (Journey)',
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
          name: 'cssClasses',
          type: 'text',
          label: 'CSS Classes',
          defaultValue: 'mod_half_image viewport half-image container wow fadeInLeft',
        },
        {
          name: 'rowCssClasses',
          type: 'text',
          label: 'Row CSS Classes',
          defaultValue: 'row half-image-row mb-80-desktop mb-40-tablet-down',
        },
        {
          name: 'flipped',
          type: 'checkbox',
          label: 'Flipped Layout',
          defaultValue: false,
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Heading',
          required: true,
          defaultValue: 'Your journey at Goldfingers Aesthetics:',
        },
        {
          name: 'headingSmall',
          type: 'text',
          label: 'Heading Small Text',
          defaultValue: 'Your journey',
        },
        {
          name: 'headingSpan',
          type: 'text',
          label: 'Heading Span (block desktop)',
          defaultValue: 'at Goldfingers Aesthetics:',
        },
        {
          name: 'subheading',
          type: 'text',
          label: 'Subheading',
          defaultValue: 'Comfort, care, and beautiful results.',
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
        },
        {
          name: 'contentText',
          type: 'textarea',
          label: 'Content Text (plain)',
          defaultValue:
            'At Goldfingers Aesthetics in Winter Park, we are dedicated to making each treatment a delight. Our commitment to excellence and advanced techniques is evident in every procedure we offer. Our legacy of over 25 years in the aesthetics industry sets us apart as a trusted name in the field, and our accomplishments speak volumes:',
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
              required: true,
            },
          ],
          defaultValue: [
            { text: 'More than 25 Years in Aesthetics' },
            { text: 'Top 1% in the Nation for BOTOX and Juvéderm' },
            { text: 'Largest Aesthetics Center in Florida' },
            { text: 'Over 24 Locations & Growing' },
            { text: 'Allergan Trained Facial Contour Aesthetic Injectors' },
          ],
        },
        {
          name: 'textAlign',
          type: 'select',
          label: 'Text Alignment',
          options: [
            { label: 'Left', value: 'text-left' },
            { label: 'Center', value: 'text-center' },
            { label: 'Right', value: 'text-right' },
          ],
          defaultValue: 'text-center',
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
              defaultValue: '',
            },
            {
              name: 'url',
              type: 'text',
              label: 'Image URL (if not uploading)',
              defaultValue:
                'https://www.datocms-assets.com/105497/1699984177-ga-wp-waiting-room1-adj.jpg',
            },
          ],
        },
      ],
    },
    // Banner Section 1
    {
      name: 'bannerSection1',
      type: 'group',
      label: 'Banner Section 1 (Artistry)',
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
          name: 'cssClasses',
          type: 'text',
          label: 'CSS Classes',
          defaultValue: 'mod_banner dark hide-divider viewport background-1',
        },
        {
          name: 'animationClass',
          type: 'select',
          label: 'Animation Class',
          options: [
            { label: 'Fade In Up', value: 'fadeInUp' },
            { label: 'Fade In Left', value: 'fadeInLeft' },
            { label: 'Fade In Right', value: 'fadeInRight' },
            { label: 'None', value: '' },
          ],
          defaultValue: 'fadeInUp',
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
            {
              name: 'url',
              type: 'text',
              label: 'Image URL (if not uploading)',
              defaultValue: 'https://www.datocms-assets.com/105497/1693257026-banner-bgd-1.jpg',
            },
          ],
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Heading',
          defaultValue: 'Artistry in aesthetics',
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
        },
        {
          name: 'contentText',
          type: 'textarea',
          label: 'Content Text (plain)',
          defaultValue:
            'Goldfingers Aesthetics in Winter Park is where the art of aesthetics takes center stage. Our injection techniques are honed to perfection, ensuring each procedure is executed with precision, resulting in elegant and sophisticated outcomes. We pride ourselves on delivering excellence, setting a high standard for quality in the aesthetics industry.',
        },
        {
          name: 'maxWidth',
          type: 'text',
          label: 'Content Max Width Class',
          defaultValue: 'mw-80',
        },
      ],
    },
    // Column Section 1
    {
      name: 'columnSection1',
      type: 'group',
      label: 'Column Section 1 (Premier Med Spa)',
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
          name: 'cssClasses',
          type: 'text',
          label: 'CSS Classes',
          defaultValue: 'mod_column viewport container has-media',
        },
        {
          name: 'rowCssClasses',
          type: 'text',
          label: 'Row CSS Classes',
          defaultValue: 'row mt-40 mb-40 media-right',
        },
        {
          name: 'mediaPosition',
          type: 'select',
          label: 'Media Position',
          options: [
            { label: 'Left', value: 'media-left' },
            { label: 'Right', value: 'media-right' },
          ],
          defaultValue: 'media-right',
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Heading',
          required: true,
          defaultValue: "Florida's premier med spa:",
        },
        {
          name: 'headingSmall',
          type: 'text',
          label: 'Heading Small Text',
          defaultValue: "Florida's premier med spa:",
        },
        {
          name: 'headingMain',
          type: 'text',
          label: 'Heading Main Text',
          defaultValue: 'Goldfingers Aesthetics',
        },
        {
          name: 'headingSpan',
          type: 'text',
          label: 'Heading Span (block desktop)',
          defaultValue: 'in Winter Park',
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
        },
        {
          name: 'contentText',
          type: 'textarea',
          label: 'Content Text (plain)',
          defaultValue:
            "As Florida's premier aesthetics center, Goldfingers Aesthetics has grown to encompass 24 locations and counting. Our success story is rooted in our commitment to providing accessible, top-tier care and a wide array of unparalleled services that cater to individuals seeking beauty and well-being enhancements.",
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
              defaultValue: 'skyline',
            },
            {
              name: 'url',
              type: 'text',
              label: 'Image URL (if not uploading)',
              defaultValue: 'https://www.datocms-assets.com/105497/1694025415-accent-6.jpg',
            },
            {
              name: 'width',
              type: 'number',
              label: 'Width',
              defaultValue: 904,
            },
            {
              name: 'height',
              type: 'number',
              label: 'Height',
              defaultValue: 1062,
            },
          ],
        },
      ],
    },
    // Box Grid Section 1
    {
      name: 'boxGridSection1',
      type: 'group',
      label: 'Box Grid Section 1 (Personalized Experience)',
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
          name: 'cssClasses',
          type: 'text',
          label: 'CSS Classes',
          defaultValue: 'mod_box_grid viewport container option-2 default bkg-image dark wider',
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
            {
              name: 'url',
              type: 'text',
              label: 'Image URL (if not uploading)',
              defaultValue: 'https://www.datocms-assets.com/105497/1693256962-box-mod-bgd-2.jpg',
            },
          ],
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Heading',
          defaultValue: 'Personalized med spa experience',
        },
        {
          name: 'headingColor',
          type: 'text',
          label: 'Heading Color',
        },
        {
          name: 'introText',
          type: 'textarea',
          label: 'Intro Text',
          defaultValue:
            'Experience the Goldfingers Aesthetics way, where your journey to an enhanced look is entirely tailored to you. Expect to be treated with warmth, compassion, and rare skills that result in a positive and empowering experience. With decades of expertise, we ensure your treatments are both safe and satisfying, creating a rejuvenating journey that celebrates your unique beauty. Discover a comprehensive range of med spa treatments awaiting you at Goldfingers Aesthetics & Plastic Surgery in Winter Park:',
        },
        {
          name: 'boxes',
          type: 'array',
          label: 'Boxes',
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
              name: 'content',
              type: 'textarea',
              label: 'Box Content',
              required: true,
            },
            {
              name: 'button',
              type: 'group',
              label: 'Button',
              fields: [
                {
                  name: 'show',
                  type: 'checkbox',
                  label: 'Show Button',
                  defaultValue: true,
                },
                {
                  name: 'text',
                  type: 'text',
                  label: 'Button Text',
                },
                {
                  name: 'url',
                  type: 'text',
                  label: 'Button URL',
                },
                {
                  name: 'cssClass',
                  type: 'text',
                  label: 'Button CSS Class',
                  defaultValue: 'btn',
                },
              ],
            },
            {
              name: 'animationClass',
              type: 'select',
              label: 'Animation Class',
              options: [
                { label: 'Fade In Up', value: 'fadeInUp' },
                { label: 'Fade In Left', value: 'fadeInLeft' },
                { label: 'Fade In Right', value: 'fadeInRight' },
                { label: 'None', value: '' },
              ],
              defaultValue: 'fadeInUp',
            },
          ],
          defaultValue: [
            {
              heading: 'BOTOX',
              content:
                'Effortlessly turn back time with age-defying injections that smooth away lines and wrinkles, revealing a revitalized and youthful appearance.',
              button: {
                show: true,
                text: 'Learn more about BOTOX',
                url: '/winter-park/medical-spa/botox/',
                cssClass: 'btn',
              },
              animationClass: 'fadeInUp',
            },
            {
              heading: 'Dermal Fillers',
              content:
                'Restore and enhance your innate beauty with dermal fillers, achieving balance between features, softening lines, and refining facial contours.',
              button: {
                show: true,
                text: 'Learn more about dermal fillers',
                url: '/winter-park/medical-spa/facial-fillers/',
                cssClass: 'btn',
              },
              animationClass: 'fadeInUp',
            },
            {
              heading: 'Hand Rejuvenation',
              content:
                'Restore the look of youthful hands with our rejuvenation treatments, addressing volume loss and improving skin texture.',
              button: {
                show: true,
                text: 'Learn more about hand rejuvenation',
                url: '/medical-spa/hands/',
                cssClass: 'btn',
              },
              animationClass: 'fadeInUp',
            },
            {
              heading: 'Non-Surgical Facelift',
              content:
                'Elevate, tighten, and refresh your appearance without surgery through our transformative non-surgical facelift, rejuvenating your features.',
              button: {
                show: true,
                text: 'Learn more about non-surgical facelifts',
                url: '/medical-spa/face-lift/',
                cssClass: 'btn',
              },
              animationClass: 'fadeInUp',
            },
            {
              heading: 'Permanent Makeup',
              content:
                'Embrace effortless elegance with expertly applied permanent makeup, accentuating your features with natural-looking enhancement.',
              button: {
                show: true,
                text: 'Learn more about permanent makeup',
                url: '/medical-spa/permanent-makeup/',
                cssClass: 'btn',
              },
              animationClass: 'fadeInUp',
            },
            {
              heading: 'Advanced Skincare',
              content:
                'Elevate your skincare routine with our range of advanced skincare products, designed to maintain and amplify the outcomes of your treatments.',
              button: {
                show: true,
                text: 'Learn more about skincare',
                url: '/medical-spa/skincare-services/',
                cssClass: 'btn',
              },
              animationClass: 'fadeInUp',
            },
          ],
        },
      ],
    },
    // Box Grid Section 2
    {
      name: 'boxGridSection2',
      type: 'group',
      label: 'Box Grid Section 2 (Additional Services)',
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
          name: 'cssClasses',
          type: 'text',
          label: 'CSS Classes',
          defaultValue: 'mod_box_grid viewport container option-1 default no-bg wider',
        },
        {
          name: 'boxes',
          type: 'array',
          label: 'Boxes',
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
              name: 'content',
              type: 'textarea',
              label: 'Box Content',
              required: true,
            },
            {
              name: 'button',
              type: 'group',
              label: 'Button',
              fields: [
                {
                  name: 'show',
                  type: 'checkbox',
                  label: 'Show Button',
                  defaultValue: true,
                },
                {
                  name: 'text',
                  type: 'text',
                  label: 'Button Text',
                },
                {
                  name: 'url',
                  type: 'text',
                  label: 'Button URL',
                },
                {
                  name: 'cssClass',
                  type: 'text',
                  label: 'Button CSS Class',
                  defaultValue: 'btn',
                },
              ],
            },
            {
              name: 'animationClass',
              type: 'select',
              label: 'Animation Class',
              options: [
                { label: 'Fade In Up', value: 'fadeInUp' },
                { label: 'Fade In Left', value: 'fadeInLeft' },
                { label: 'Fade In Right', value: 'fadeInRight' },
                { label: 'None', value: '' },
              ],
              defaultValue: 'fadeInUp',
            },
          ],
          defaultValue: [
            {
              heading: 'Micro-Channeling',
              content:
                "Stimulate collagen production and unveil radiant skin with our micro-channeling treatment, enhancing your skin's texture and tone.",
              button: {
                show: true,
                text: 'Learn more about micro-channeling',
                url: '/medical-spa/micro-channeling/',
                cssClass: 'btn',
              },
              animationClass: 'fadeInUp',
            },
            {
              heading: 'Semaglutide Injections',
              content:
                'Embark on the innovative path to weight management with semaglutide injections, a groundbreaking approach to overall wellness.',
              button: {
                show: true,
                text: 'Learn more about semaglutide injections',
                url: '/winter-park/medical-spa/weight-loss/',
                cssClass: 'btn',
              },
              animationClass: 'fadeInUp',
            },
            {
              heading: 'Spa Services',
              content:
                "Rejuvenate your skin's health and appearance with our spa services, from acne facials to dermaplaning and microneedling.",
              button: {
                show: true,
                text: 'Learn more about spa services',
                url: '/winter-park/medical-spa/spa-services/',
                cssClass: 'btn',
              },
              animationClass: 'fadeInUp',
            },
            {
              heading: 'Services for Men',
              content:
                'Discover bespoke treatments catering to the unique aesthetic needs of men, addressing wrinkles, volume loss, and masculine contouring.',
              button: {
                show: true,
                text: 'Learn more about our services for men',
                url: '/medical-spa/mens-services/',
                cssClass: 'btn',
              },
              animationClass: 'fadeInUp',
            },
          ],
        },
      ],
    },
    // Banner Section 2
    {
      name: 'bannerSection2',
      type: 'group',
      label: 'Banner Section 2 (Story)',
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
          name: 'cssClasses',
          type: 'text',
          label: 'CSS Classes',
          defaultValue: 'mod_banner dark hide-divider viewport background-2',
        },
        {
          name: 'animationClass',
          type: 'select',
          label: 'Animation Class',
          options: [
            { label: 'Fade In Up', value: 'fadeInUp' },
            { label: 'Fade In Left', value: 'fadeInLeft' },
            { label: 'Fade In Right', value: 'fadeInRight' },
            { label: 'None', value: '' },
          ],
          defaultValue: 'fadeInUp',
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
            {
              name: 'url',
              type: 'text',
              label: 'Image URL (if not uploading)',
              defaultValue: 'https://www.datocms-assets.com/105497/1693257034-banner-bgd-2.jpg',
            },
          ],
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Heading',
          defaultValue: 'The Goldfingers Aesthetics story',
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
        },
        {
          name: 'contentParagraphs',
          type: 'array',
          label: 'Content Paragraphs',
          admin: {
            description: 'Drag to reorder paragraphs',
          },
          fields: [
            {
              name: 'text',
              type: 'textarea',
              required: true,
            },
          ],
          defaultValue: [
            {
              text: "For two decades, Goldfingers Aesthetics & Plastic Surgery has been at the forefront of aesthetic transformation. Spearheaded by Dr. James Young, DO, our team's dedication has led to our recognition as Florida's largest aesthetics center. Our expansion to 24 locations is a testament to our commitment to providing exceptional care and catering to the needs of over 3,500 annual patients with BOTOX® Cosmetic and JUVÉDERM®.",
            },
            {
              text: "Accompanied by a handpicked team, Dr. Young's leadership has earned us the esteemed Top 1% in the Nation award from Allergan, creators of BOTOX® Cosmetic. Each injector undergoes extensive Allergan training and direct mentorship, ensuring a patient-centric experience.",
            },
          ],
        },
      ],
    },
    // Column Section 2
    {
      name: 'columnSection2',
      type: 'group',
      label: 'Column Section 2 (Elevate Your Look)',
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
          name: 'cssClasses',
          type: 'text',
          label: 'CSS Classes',
          defaultValue: 'mod_column viewport container has-media',
        },
        {
          name: 'rowCssClasses',
          type: 'text',
          label: 'Row CSS Classes',
          defaultValue: 'row mt-30 mb-30 media-right',
        },
        {
          name: 'mediaPosition',
          type: 'select',
          label: 'Media Position',
          options: [
            { label: 'Left', value: 'media-left' },
            { label: 'Right', value: 'media-right' },
          ],
          defaultValue: 'media-right',
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Heading',
          required: true,
          defaultValue: 'Elevate your look',
        },
        {
          name: 'headingSpan',
          type: 'text',
          label: 'Heading Span (block desktop)',
          defaultValue: 'at Goldfingers Aesthetics',
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
        },
        {
          name: 'contentText',
          type: 'textarea',
          label: 'Content Text (plain)',
          defaultValue:
            'Goldfingers Aesthetics in Winter Park offers an array of dermal fillers, including JUVÉDERM® and RESTYLANE®, that enhance your natural beauty. Our fillers not only smooth away wrinkles and lines, but they also enhance hydration, plumpness, and overall skin resilience, revealing your best self.',
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
              defaultValue: 'skyline',
            },
            {
              name: 'url',
              type: 'text',
              label: 'Image URL (if not uploading)',
              defaultValue: 'https://www.datocms-assets.com/105497/1694025415-accent-6.jpg',
            },
            {
              name: 'width',
              type: 'number',
              label: 'Width',
              defaultValue: 904,
            },
            {
              name: 'height',
              type: 'number',
              label: 'Height',
              defaultValue: 1062,
            },
          ],
        },
      ],
    },
    // Box Grid Section 3
    {
      name: 'boxGridSection3',
      type: 'group',
      label: 'Box Grid Section 3 (Plastic Surgery)',
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
          name: 'cssClasses',
          type: 'text',
          label: 'CSS Classes',
          defaultValue: 'mod_box_grid viewport container option-1 default bkg-image dark wider',
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
            {
              name: 'url',
              type: 'text',
              label: 'Image URL (if not uploading)',
              defaultValue: 'https://www.datocms-assets.com/105497/1693256954-box-mod-bgd-1.jpg',
            },
          ],
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Heading',
          defaultValue: 'Plastic surgery at its best.',
        },
        {
          name: 'headingColor',
          type: 'text',
          label: 'Heading Color',
        },
        {
          name: 'introText',
          type: 'textarea',
          label: 'Intro Text',
          defaultValue:
            'Explore the realm of transformative plastic surgery tailored to your aesthetic vision at Goldfingers Aesthetics & Plastic Surgery in Winter Park. Dr. Michael McClure, our board-certified plastic surgeon, employs advanced surgical techniques, performing all surgeries with ultimate precision and care. Our transformations occur at a state-of-the-art AAAA certified surgical center located in Lake Mary. This commitment underscores our unwavering dedication to prioritizing patient safety and health above all else. Discover a range of plastic surgery procedures that can help you achieve your desired look:',
        },
        {
          name: 'boxes',
          type: 'array',
          label: 'Boxes',
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
              name: 'content',
              type: 'textarea',
              label: 'Box Content',
            },
            {
              name: 'button',
              type: 'group',
              label: 'Button',
              fields: [
                {
                  name: 'show',
                  type: 'checkbox',
                  label: 'Show Button',
                  defaultValue: true,
                },
                {
                  name: 'text',
                  type: 'text',
                  label: 'Button Text',
                },
                {
                  name: 'url',
                  type: 'text',
                  label: 'Button URL',
                },
                {
                  name: 'cssClass',
                  type: 'text',
                  label: 'Button CSS Class',
                  defaultValue: 'btn',
                },
              ],
            },
            {
              name: 'animationClass',
              type: 'select',
              label: 'Animation Class',
              options: [
                { label: 'Fade In Up', value: 'fadeInUp' },
                { label: 'Fade In Left', value: 'fadeInLeft' },
                { label: 'Fade In Right', value: 'fadeInRight' },
                { label: 'None', value: '' },
              ],
              defaultValue: 'fadeInUp',
            },
          ],
          defaultValue: [
            {
              heading: 'Breast Augmentation',
              content: '',
              button: {
                show: true,
                text: 'Learn more about breast augmentation',
                url: '/plastic-surgery/breast-augmentation/',
                cssClass: 'btn',
              },
              animationClass: 'fadeInUp',
            },
            {
              heading: 'Breast Lift',
              content:
                'Reclaim youthful contours and confidence through a breast lift, reshaping and lifting sagging breasts for a revitalized appearance.',
              button: {
                show: true,
                text: 'Learn more about breast lifts',
                url: '/plastic-surgery/breast-lift/',
                cssClass: 'btn',
              },
              animationClass: 'fadeInUp',
            },
            {
              heading: 'Breast Reduction',
              content:
                'Find relief from discomfort while achieving aesthetic balance through a breast reduction, reducing excess tissue for improved comfort and appearance.',
              button: {
                show: true,
                text: 'Learn more about breast reduction',
                url: '/plastic-surgery/breast-reduction/',
                cssClass: 'btn',
              },
              animationClass: 'fadeInUp',
            },
            {
              heading: 'Breast Revision',
              content:
                'Correct and enhance past procedures with breast revision, addressing concerns and ensuring your desired outcome',
              button: {
                show: true,
                text: 'Learn more about breast revision',
                url: '/plastic-surgery/breast-revision/',
                cssClass: 'btn',
              },
              animationClass: 'fadeInUp',
            },
            {
              heading: 'Mommy Makeover',
              content:
                'Embark on a comprehensive transformation with a mommy makeover, combining various procedures to restore your confidence and vitality.',
              button: {
                show: true,
                text: 'Learn more about mommy makeovers',
                url: '/plastic-surgery/mommy-makeover/',
                cssClass: 'btn',
              },
              animationClass: 'fadeInUp',
            },
            {
              heading: 'Liposuction',
              content:
                'Sculpt and refine your body by effectively eliminating stubborn fat deposits with liposuction, unveiling smoother and more defined contours.',
              button: {
                show: true,
                text: 'Learn more about liposuction',
                url: '/plastic-surgery/liposuction/',
                cssClass: 'btn',
              },
              animationClass: 'fadeInUp',
            },
            {
              heading: '8-Point Facelift',
              content:
                'Rejuvenate your facial features with the transformative 8-point facelift, addressing multiple areas to restore a youthful and vibrant appearance.',
              button: {
                show: false,
                text: '',
                url: '',
                cssClass: 'btn',
              },
              animationClass: 'fadeInUp',
            },
          ],
        },
      ],
    },
    // Column Section 3
    {
      name: 'columnSection3',
      type: 'group',
      label: 'Column Section 3 (Schedule Consultation)',
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
          name: 'cssClasses',
          type: 'text',
          label: 'CSS Classes',
          defaultValue: 'mod_column viewport container has-media',
        },
        {
          name: 'rowCssClasses',
          type: 'text',
          label: 'Row CSS Classes',
          defaultValue: 'row mt-30 media-left',
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
          name: 'heading',
          type: 'text',
          label: 'Heading',
          required: true,
          defaultValue: 'Schedule a consultation',
        },
        {
          name: 'headingSmall',
          type: 'text',
          label: 'Heading Small Text',
          defaultValue: "and discover Winter Park's",
        },
        {
          name: 'headingSpan',
          type: 'text',
          label: 'Heading Span (block desktop)',
          defaultValue: 'leading aesthetics center',
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
        },
        {
          name: 'contentText',
          type: 'textarea',
          label: 'Content Text (plain)',
          defaultValue:
            'Unveil the possibilities of a revitalized you at Goldfingers Aesthetics & Plastic Surgery in Winter Park. Our practice is a beacon of excellence, with over two decades of expertise in enhancing natural beauty and restoring confidence. From advanced med spa treatments to transformative plastic surgery, we are dedicated to tailoring our services to your unique needs. With a commitment to patient-centered care, our skilled team is ready to guide you through a journey of empowerment. Discover the Goldfingers difference and beautiful, natural rejuvenation.',
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
              defaultValue: 'dock on the ocean',
            },
            {
              name: 'url',
              type: 'text',
              label: 'Image URL (if not uploading)',
              defaultValue: 'https://www.datocms-assets.com/105497/1694025407-accent-5.jpg',
            },
            {
              name: 'width',
              type: 'number',
              label: 'Width',
              defaultValue: 904,
            },
            {
              name: 'height',
              type: 'number',
              label: 'Height',
              defaultValue: 1062,
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
            { label: 'Intro Column', value: 'introColumn' },
            { label: 'Half Image 1 (Journey)', value: 'halfImage1' },
            { label: 'Banner 1 (Artistry)', value: 'banner1' },
            { label: 'Column 1 (Premier Med Spa)', value: 'column1' },
            { label: 'Box Grid 1 (Personalized)', value: 'boxGrid1' },
            { label: 'Box Grid 2 (Additional Services)', value: 'boxGrid2' },
            { label: 'Banner 2 (Story)', value: 'banner2' },
            { label: 'Column 2 (Elevate)', value: 'column2' },
            { label: 'Box Grid 3 (Plastic Surgery)', value: 'boxGrid3' },
            { label: 'Column 3 (Schedule)', value: 'column3' },
          ],
        },
      ],
      defaultValue: [
        { section: 'hero' },
        { section: 'introColumn' },
        { section: 'halfImage1' },
        { section: 'banner1' },
        { section: 'column1' },
        { section: 'boxGrid1' },
        { section: 'boxGrid2' },
        { section: 'banner2' },
        { section: 'column2' },
        { section: 'boxGrid3' },
        { section: 'column3' },
      ],
    },
    // Global Styles
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
          name: 'textColor',
          type: 'text',
          label: 'Default Text Color',
        },
        {
          name: 'linkColor',
          type: 'text',
          label: 'Link Color',
        },
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Default Background Color',
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
          defaultValue: 'Winter Park Aesthetics & Plastic Surgery | Goldfingers',
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          label: 'Meta Description',
          defaultValue:
            'Experience transformative aesthetic treatments at Goldfingers in Winter Park. BOTOX, dermal fillers, plastic surgery, and advanced skincare. Top 1% nationwide.',
        },
        {
          name: 'keywords',
          type: 'text',
          label: 'Keywords',
          defaultValue:
            'winter park aesthetics, botox winter park, dermal fillers, plastic surgery, med spa, skincare',
        },
        {
          name: 'ogImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Open Graph Image',
        },
      ],
    },
    {
      name: 'isActive',
      type: 'checkbox',
      label: 'Active',
      defaultValue: true,
    },
  ],
  timestamps: true,
}
