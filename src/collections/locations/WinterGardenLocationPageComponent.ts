import { CollectionConfig } from 'payload'

export const WinterGardenLocationPageComponent: CollectionConfig = {
  slug: 'winter-garden-location-page-component',
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
      defaultValue: 'Winter Garden Location Page Component',
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
              label: 'Winter Garden',
              url: '/winter-garden/',
              ariaLabel: 'Breadcrumbs to help navigate the user',
            },
          ],
        },
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          required: true,
          defaultValue: 'Winter Garden',
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
              defaultValue: '',
            },
            {
              name: 'url',
              type: 'text',
              label: 'Image URL (if not uploading)',
              defaultValue: 'https://www.datocms-assets.com/105497/1752877682-winter-gardent-4.jpg',
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
          defaultValue: 'row mb-30',
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
          defaultValue: 'Where beauty meets innovation',
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
            'At Goldfingers Aesthetics in Winter Garden, every treatment is an exquisite experience. We take pride in our accomplishments and commitment to employing advanced techniques in every procedure. Our mission is to provide you with a rejuvenating journey that reflects your personal vision of beauty.',
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
      label: 'Half Image Section 1 (Rejuvenating Treatments)',
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
          defaultValue:
            'mod_half_image viewport half-image container wow fadeInLeft background-navy',
        },
        {
          name: 'rowCssClasses',
          type: 'text',
          label: 'Row CSS Classes',
          defaultValue: 'row half-image-row mt-0 mb-0',
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
          defaultValue: 'Rejuvenating treatments: Empower your life with our help.',
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
            "Goldfingers Aesthetics is not only about aesthetics; it's about transformation and empowerment. Our offerings extend beyond enhancing beauty, reflecting our commitment to comprehensive well-being. Experience non-surgical enhancements that uplift your spirit and achieve a look you love.",
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
              defaultValue: 'https://www.datocms-assets.com/105497/1752877682-winter-garden-3.jpg',
            },
          ],
        },
      ],
    },
    // Column Section 1
    {
      name: 'columnSection1',
      type: 'group',
      label: 'Column Section 1 (Range of Services)',
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
          defaultValue: 'row mt-30 mb-30',
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Heading',
          required: true,
          defaultValue: 'Our Range of services in Winter Garden',
        },
        {
          name: 'headingColor',
          type: 'text',
          label: 'Heading Color',
        },
        {
          name: 'headingAlign',
          type: 'select',
          label: 'Heading Alignment',
          options: [
            { label: 'Left', value: 'text-left' },
            { label: 'Center', value: 'text-center' },
            { label: 'Right', value: 'text-right' },
          ],
          defaultValue: 'text-center',
        },
        {
          name: 'introText',
          type: 'textarea',
          label: 'Intro Text',
          defaultValue:
            'Discover an array of transformative treatments at Goldfingers Aesthetics & Plastic Surgery in Winter Garden:',
        },
        {
          name: 'introAlign',
          type: 'select',
          label: 'Intro Alignment',
          options: [
            { label: 'Left', value: 'text-left' },
            { label: 'Center', value: 'text-center' },
            { label: 'Right', value: 'text-right' },
          ],
          defaultValue: 'text-center',
        },
        {
          name: 'content',
          type: 'richText',
          label: 'Content',
        },
        {
          name: 'bulletPoints',
          type: 'array',
          label: 'Bullet Points (Columns)',
          admin: {
            description: 'Drag to reorder bullet points',
          },
          fields: [
            {
              name: 'title',
              type: 'text',
              label: 'Title (bold)',
              required: true,
            },
            {
              name: 'description',
              type: 'textarea',
              label: 'Description',
              required: true,
            },
          ],
          defaultValue: [
            {
              title: 'BOTOX',
              description:
                'Turn back the clock with age-defying injections that smooth away lines and wrinkles, resulting in a refreshed and youthful appearance.',
            },
            {
              title: 'Dermal Fillers',
              description:
                'Restore and enhance your natural beauty with dermal fillers that redefine features, smooth lines, and harmonize your facial contours.',
            },
            {
              title: 'Hand Rejuvenation',
              description:
                'Reclaim youthful hands and confidence with our rejuvenation treatments, addressing volume loss and enhancing skin texture.',
            },
            {
              title: 'Non-Surgical Facelift',
              description:
                'Lift, tighten, and refresh your appearance without surgery through our non-surgical facelift, revitalizing your features.',
            },
            {
              title: "Men's Tailored Services",
              description:
                "Tailored treatments address men's specific aesthetic needs, from wrinkle solutions to masculine contouring.",
            },
            {
              title: 'Permanent Makeup',
              description:
                'Enjoy effortless elegance with expertly applied permanent makeup that accentuates your features.',
            },
            {
              title: 'Micro-Channeling',
              description:
                'Stimulate collagen production and reveal radiant skin with our micro-channeling treatment, enhancing your skin texture.',
            },
            {
              title: 'Semaglutide Injections',
              description:
                'Explore innovative weight management with semaglutide injections, a groundbreaking approach to wellness.',
            },
            {
              title: 'Advanced Skincare',
              description:
                'Elevate your skincare routine with our advanced skincare products, maintaining and enhancing your treatment results.',
            },
            {
              title: 'Spa Services',
              description:
                "Discover revitalizing spa services ranging from acne facials to microneedling with ProCell serum, all designed to enhance your skin's health and appearance.",
            },
          ],
        },
        {
          name: 'useColumns',
          type: 'checkbox',
          label: 'Use Columns Layout',
          defaultValue: true,
        },
      ],
    },
    // Divider Section
    {
      name: 'dividerSection',
      type: 'group',
      label: 'Divider Section',
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
          defaultValue: 'mod_divider container',
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
          defaultValue: 'https://www.datocms-assets.com/105497/1693320285-logo-module-navy.svg',
        },
        {
          name: 'logoAlt',
          type: 'text',
          label: 'Logo Alt Text',
          defaultValue: 'Logo media',
        },
        {
          name: 'logoWidth',
          type: 'number',
          label: 'Logo Width',
          defaultValue: 55,
        },
        {
          name: 'logoHeight',
          type: 'number',
          label: 'Logo Height',
          defaultValue: 61,
        },
      ],
    },
    // Three Column Section 1
    {
      name: 'threeColumnSection1',
      type: 'group',
      label: 'Three Column Section 1 (Excellence)',
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
          defaultValue: 'mod_columns_three viewport container',
        },
        {
          name: 'rowCssClasses',
          type: 'text',
          label: 'Row CSS Classes',
          defaultValue: 'row',
        },
        {
          name: 'leftColumn',
          type: 'group',
          label: 'Left Column',
          fields: [
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
              defaultValue: 'fadeInLeft',
            },
            {
              name: 'heading',
              type: 'text',
              label: 'Heading',
              defaultValue: 'Over two decades',
            },
            {
              name: 'headingSpan',
              type: 'text',
              label: 'Heading Span (block desktop)',
              defaultValue: 'of aesthetic excellence',
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
                'With a legacy spanning over 20 years in the aesthetics industry, our foundation is rooted in unparalleled expertise. This wealth of experience ensures that you receive safe, satisfying, and effective treatments. We are proud to be known for:',
            },
          ],
        },
        {
          name: 'centerColumn',
          type: 'group',
          label: 'Center Column',
          fields: [
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
              defaultValue: 'fadeInLeft',
            },
            {
              name: 'heading',
              type: 'text',
              label: 'Heading',
              defaultValue: "Nation's Top 1% for BOTOX and Juvéderm",
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
                'As a testament to our dedication to excellence, Goldfingers Aesthetics & Plastic Surgery proudly stands among the top 1% of providers nationwide for BOTOX and Juvéderm treatments. This recognition underscores our commitment to delivering exceptional results to our valued patients.',
            },
          ],
        },
        {
          name: 'rightColumn',
          type: 'group',
          label: 'Right Column',
          fields: [
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
              defaultValue: 'fadeInRight',
            },
            {
              name: 'heading',
              type: 'text',
              label: 'Heading',
              defaultValue: "Florida's Premier Aesthetics Center",
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
                "We've blossomed into Florida's premier aesthetics center, offering an expansive network of services across 24 locations and growing. Our extensive reach is a testament to our commitment to providing accessible, top-tier care to individuals seeking beauty and well-being enhancements.",
            },
          ],
        },
      ],
    },
    // Two Column Section 1
    {
      name: 'twoColumnSection1',
      type: 'group',
      label: 'Two Column Section 1 (Goldfingers Way)',
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
          defaultValue: 'mod_columns_two viewport container',
        },
        {
          name: 'rowCssClasses',
          type: 'text',
          label: 'Row CSS Classes',
          defaultValue: 'row',
        },
        {
          name: 'verticalAlign',
          type: 'checkbox',
          label: 'Vertical Align',
          defaultValue: false,
        },
        {
          name: 'leftColumn',
          type: 'group',
          label: 'Left Column',
          fields: [
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
              defaultValue: 'fadeInLeft',
            },
            {
              name: 'heading',
              type: 'text',
              label: 'Heading',
              defaultValue: 'The Goldfingers way Our focus is on you and you alone.',
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
                'Expect nothing less than a fully personalized journey to enhance your appearance. Our approach is characterized by warmth, compassion, and exceptional skills, creating an empowering experience. Our treatments draw from decades of expertise, ensuring that each procedure is effective and tailored to your unique needs.',
            },
          ],
        },
        {
          name: 'rightColumn',
          type: 'group',
          label: 'Right Column',
          fields: [
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
              defaultValue: 'fadeInRight',
            },
            {
              name: 'content',
              type: 'richText',
              label: 'Content',
            },
            {
              name: 'image',
              type: 'group',
              label: 'Image',
              fields: [
                {
                  name: 'upload',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Image Upload',
                },
                {
                  name: 'url',
                  type: 'text',
                  label: 'Image URL (if not uploading)',
                  defaultValue: 'https://www.datocms-assets.com/105497/1694009255-gift-cards.jpg',
                },
                {
                  name: 'alt',
                  type: 'text',
                  label: 'Alt Text',
                  defaultValue: 'Blonde woman laughing',
                },
                {
                  name: 'width',
                  type: 'number',
                  label: 'Width',
                  defaultValue: 542,
                },
                {
                  name: 'height',
                  type: 'number',
                  label: 'Height',
                  defaultValue: 540,
                },
              ],
            },
          ],
        },
      ],
    },
    // Two Column Section 2
    {
      name: 'twoColumnSection2',
      type: 'group',
      label: 'Two Column Section 2 (Story)',
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
          defaultValue: 'mod_columns_two viewport container',
        },
        {
          name: 'rowCssClasses',
          type: 'text',
          label: 'Row CSS Classes',
          defaultValue: 'row',
        },
        {
          name: 'verticalAlign',
          type: 'checkbox',
          label: 'Vertical Align',
          defaultValue: true,
        },
        {
          name: 'leftColumn',
          type: 'group',
          label: 'Left Column',
          fields: [
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
              defaultValue: 'fadeInLeft',
            },
            {
              name: 'content',
              type: 'richText',
              label: 'Content',
            },
            {
              name: 'image',
              type: 'group',
              label: 'Image',
              fields: [
                {
                  name: 'upload',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Image Upload',
                },
                {
                  name: 'url',
                  type: 'text',
                  label: 'Image URL (if not uploading)',
                  defaultValue: 'https://www.datocms-assets.com/105497/1694009158-alle-rewards.jpg',
                },
                {
                  name: 'alt',
                  type: 'text',
                  label: 'Alt Text',
                  defaultValue: 'woman holding mirror to her face while doctor points to her chin',
                },
                {
                  name: 'width',
                  type: 'number',
                  label: 'Width',
                  defaultValue: 540,
                },
                {
                  name: 'height',
                  type: 'number',
                  label: 'Height',
                  defaultValue: 538,
                },
              ],
            },
          ],
        },
        {
          name: 'rightColumn',
          type: 'group',
          label: 'Right Column',
          fields: [
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
              defaultValue: 'fadeInRight',
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
              name: 'contentText',
              type: 'textarea',
              label: 'Content Text (plain)',
              defaultValue:
                "For over two decades, Dr. James Young, D.O., has been at the forefront of Goldfingers Aesthetics & Plastic Surgery, establishing it as Florida's premier aesthetics center. With 24 locations catering to over 3,500 patients annually with BOTOX® Cosmetic and JUVÉDERM®, Dr. Young and his curated team have earned the prestigious Top 1% in the Nation award from Allergan, the creators of BOTOX® Cosmetic. Each injector is meticulously chosen and undergoes comprehensive Allergan training guided by Dr. Young's mentorship.",
            },
          ],
        },
      ],
    },
    // Banner Section 1
    {
      name: 'bannerSection1',
      type: 'group',
      label: 'Banner Section 1 (Elevate Your Look)',
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
          defaultValue: 'mod_banner dark hide-divider viewport background-3',
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
              defaultValue: 'https://www.datocms-assets.com/105497/1693257040-banner-bgd-3.jpg',
            },
          ],
        },
        {
          name: 'useTwoColumns',
          type: 'checkbox',
          label: 'Use Two Column Layout',
          defaultValue: true,
        },
        {
          name: 'verticalAlign',
          type: 'checkbox',
          label: 'Vertical Align Columns',
          defaultValue: true,
        },
        {
          name: 'leftContent',
          type: 'group',
          label: 'Left Content',
          fields: [
            {
              name: 'heading',
              type: 'text',
              label: 'Heading',
              defaultValue: 'Elevate your look',
            },
            {
              name: 'headingSpan',
              type: 'text',
              label: 'Heading Span (block desktop)',
              defaultValue: 'and enjoy the journey.',
            },
            {
              name: 'headingColor',
              type: 'text',
              label: 'Heading Color',
            },
          ],
        },
        {
          name: 'rightContent',
          type: 'group',
          label: 'Right Content',
          fields: [
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
                'Experience subtle enhancements with dermal fillers, including JUVÉDERM® and RESTYLANE®, at Goldfingers Aesthetics. Rediscover your natural allure as our fillers smooth wrinkles and lines while enhancing hydration and skin resilience.',
            },
          ],
        },
      ],
    },
    // Two Column Section 3
    {
      name: 'twoColumnSection3',
      type: 'group',
      label: 'Two Column Section 3 (Haven of Support)',
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
          defaultValue: 'mod_columns_two viewport container',
        },
        {
          name: 'rowCssClasses',
          type: 'text',
          label: 'Row CSS Classes',
          defaultValue: 'row pb-0',
        },
        {
          name: 'verticalAlign',
          type: 'checkbox',
          label: 'Vertical Align',
          defaultValue: true,
        },
        {
          name: 'leftColumn',
          type: 'group',
          label: 'Left Column',
          fields: [
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
              defaultValue: 'fadeInLeft',
            },
            {
              name: 'heading',
              type: 'text',
              label: 'Heading',
              defaultValue: 'A haven of support:',
            },
            {
              name: 'headingSmall',
              type: 'text',
              label: 'Heading Small Text',
              defaultValue: 'Goldfingers Aesthetics in Winter Garden',
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
                'Our Winter Garden office is a haven for advanced skincare services. Our skilled team utilizes high-quality products from trusted brands like SkinMedica to deliver results that reflect your aesthetic goals and aspirations.',
            },
            {
              name: 'useSmallText',
              type: 'checkbox',
              label: 'Use Small Text Styling',
              defaultValue: true,
            },
          ],
        },
        {
          name: 'rightColumn',
          type: 'group',
          label: 'Right Column',
          fields: [
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
              defaultValue: 'fadeInRight',
            },
            {
              name: 'content',
              type: 'richText',
              label: 'Content',
            },
            {
              name: 'image',
              type: 'group',
              label: 'Image',
              fields: [
                {
                  name: 'upload',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Image Upload',
                },
                {
                  name: 'url',
                  type: 'text',
                  label: 'Image URL (if not uploading)',
                  defaultValue: 'https://www.datocms-assets.com/105497/1720542106-financing.jpg',
                },
                {
                  name: 'alt',
                  type: 'text',
                  label: 'Alt Text',
                  defaultValue: 'woman smiling',
                },
                {
                  name: 'width',
                  type: 'number',
                  label: 'Width',
                  defaultValue: 526,
                },
                {
                  name: 'height',
                  type: 'number',
                  label: 'Height',
                  defaultValue: 524,
                },
              ],
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
            { label: 'Half Image 1 (Rejuvenating)', value: 'halfImage1' },
            { label: 'Column 1 (Range of Services)', value: 'column1' },
            { label: 'Divider', value: 'divider' },
            { label: 'Three Column 1 (Excellence)', value: 'threeColumn1' },
            { label: 'Two Column 1 (Goldfingers Way)', value: 'twoColumn1' },
            { label: 'Two Column 2 (Story)', value: 'twoColumn2' },
            { label: 'Banner 1 (Elevate)', value: 'banner1' },
            { label: 'Two Column 3 (Haven)', value: 'twoColumn3' },
          ],
        },
      ],
      defaultValue: [
        { section: 'hero' },
        { section: 'introColumn' },
        { section: 'halfImage1' },
        { section: 'column1' },
        { section: 'divider' },
        { section: 'threeColumn1' },
        { section: 'twoColumn1' },
        { section: 'twoColumn2' },
        { section: 'banner1' },
        { section: 'twoColumn3' },
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
          defaultValue: 'Winter Garden Aesthetics & Plastic Surgery | Goldfingers',
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          label: 'Meta Description',
          defaultValue:
            'Experience transformative aesthetic treatments at Goldfingers in Winter Garden. BOTOX, dermal fillers, plastic surgery, and advanced skincare. Top 1% nationwide.',
        },
        {
          name: 'keywords',
          type: 'text',
          label: 'Keywords',
          defaultValue:
            'winter garden aesthetics, botox winter garden, dermal fillers, plastic surgery, med spa, skincare',
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
