import { CollectionConfig } from 'payload'

export const DaytonaBeachLocationPageComponent: CollectionConfig = {
  slug: 'daytona-beach-location-page-component',
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
      defaultValue: 'Daytona Beach Location Page Component',
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
              label: 'Daytona Beach',
              url: '/daytona-beach/',
              ariaLabel: 'Breadcrumbs to help navigate the user',
            },
          ],
        },
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          required: true,
          defaultValue: 'Daytona Beach',
        },
        {
          name: 'titleColor',
          type: 'text',
          label: 'Title Color',
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
            'Welcome to Goldfingers Aesthetics & Plastic Surgery in Daytona Beach, where beauty meets innovation. Our wide array of cutting-edge services can help you look and feel your best. From BOTOX® and Dysport® to Restylane® and Juvéderm®, start your transformative journey with us today.',
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
              defaultValue: 'scenic view of pier from beach',
            },
            {
              name: 'url',
              type: 'text',
              label: 'Image URL (if not uploading)',
              defaultValue:
                'https://www.datocms-assets.com/105497/1694093589-daytona-beach-banner.jpg',
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
            'At Goldfingers Aesthetics in Daytona Beach, every treatment is an exquisite experience. We take pride in our accomplishments and commitment to employing advanced techniques in every procedure. Our mission is to provide you with a rejuvenating journey that reflects your personal vision of beauty.',
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
              defaultValue: '/daytona-beach/medical-spa/',
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
    // Box Grid Section 1
    {
      name: 'boxGridSection1',
      type: 'group',
      label: 'Box Grid Section 1 (Aesthetic Excellence)',
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
          defaultValue: 'mod_box_grid viewport container option-2 default bkg-image wider',
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
          name: 'introText',
          type: 'textarea',
          label: 'Intro Text',
          defaultValue:
            'With a legacy spanning over 20 years in the aesthetics industry, our foundation is rooted in unparalleled expertise. This wealth of experience ensures that you receive safe, satisfying, and effective treatments. We are proud to be known for:',
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
                  defaultValue: false,
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
              heading: "Nation's Top 1% for BOTOX and Juvéderm",
              content:
                'As a testament to our dedication to excellence, Goldfingers Aesthetics & Plastic Surgery proudly stands among the top 1% of providers nationwide for BOTOX and Juvéderm treatments. This recognition underscores our commitment to delivering exceptional results to our valued patients.',
              button: {
                show: false,
              },
              animationClass: 'fadeInUp',
            },
            {
              heading: "Florida's Premier Aesthetics Center",
              content:
                "We've blossomed into Florida's premier aesthetics center, offering an expansive network of services across 24 locations and growing. Our extensive reach is a testament to our commitment to providing accessible, top-tier care to individuals seeking beauty and well-being enhancements.",
              button: {
                show: false,
              },
              animationClass: 'fadeInUp',
            },
          ],
        },
      ],
    },
    // Column Section 1
    {
      name: 'columnSection1',
      type: 'group',
      label: 'Column Section 1 (Meet Provider)',
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
          defaultValue: 'Meet Belal Ahmad, NP, your expert provider for customized care',
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
            'At our Daytona Beach location, Belal Ahmad, Nurse Practitioner, oversees med spa services. With a wealth of experience in the medical field and Allergan training, Belal Ahmad brings exceptional expertise to every treatment. You can trust her precision, skills, and empathetic care throughout your aesthetic journey.',
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
    // Banner Section 1
    {
      name: 'bannerSection1',
      type: 'group',
      label: 'Banner Section 1 (The Goldfingers Way)',
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
        {
          name: 'layout',
          type: 'select',
          label: 'Layout',
          options: [
            { label: 'Single Column', value: 'single' },
            { label: 'Two Columns', value: 'columns-two' },
          ],
          defaultValue: 'columns-two',
        },
        {
          name: 'verticalAlign',
          type: 'checkbox',
          label: 'Vertical Align',
          defaultValue: true,
        },
      ],
    },
    // Column Section 2
    {
      name: 'columnSection2',
      type: 'group',
      label: 'Column Section 2 (Range of Services)',
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
          defaultValue: 'Our Range of services in Daytona Beach',
        },
        {
          name: 'headingColor',
          type: 'text',
          label: 'Heading Color',
        },
        {
          name: 'subheading',
          type: 'text',
          label: 'Subheading',
          defaultValue:
            'Discover an array of transformative treatments at Goldfingers Aesthetics & Plastic Surgery in Daytona Beach:',
        },
        {
          name: 'content',
          type: 'richText',
          label: 'Content',
        },
        {
          name: 'serviceLinks',
          type: 'array',
          label: 'Service Links',
          admin: {
            description: 'Drag to reorder service links',
          },
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
            },
            {
              name: 'url',
              type: 'text',
              required: true,
            },
            {
              name: 'description',
              type: 'textarea',
              required: true,
            },
          ],
          defaultValue: [
            {
              title: 'BOTOX',
              url: '/daytona-beach/medical-spa/botox/',
              description:
                'Turn back the clock with age-defying injections that smooth away lines and wrinkles, resulting in a refreshed and youthful appearance.',
            },
            {
              title: 'Dermal Fillers',
              url: '/daytona-beach/medical-spa/facial-fillers/',
              description:
                'Restore and enhance your natural beauty with dermal fillers that redefine features, smooth lines, and harmonize your facial contours.',
            },
            {
              title: 'Hand Rejuvenation',
              url: '/medical-spa/hands/',
              description:
                'Reclaim youthful hands and confidence with our rejuvenation treatments, addressing volume loss and enhancing skin texture.',
            },
            {
              title: 'Non-Surgical Facelift',
              url: '/medical-spa/face-lift/',
              description:
                'Lift, tighten, and refresh your appearance without surgery through our non-surgical facelift, revitalizing your features.',
            },
            {
              title: "Men's Tailored Services",
              url: '/medical-spa/mens-services/',
              description:
                "Tailored treatments address men's specific aesthetic needs, from wrinkle solutions to masculine contouring.",
            },
            {
              title: 'Permanent Makeup',
              url: '/medical-spa/permanent-makeup/',
              description:
                'Enjoy effortless elegance with expertly applied permanent makeup that accentuates your features.',
            },
            {
              title: 'Micro-Channeling',
              url: '/medical-spa/micro-channeling/',
              description:
                'Stimulate collagen production and reveal radiant skin with our micro-channeling treatment, enhancing your skin texture.',
            },
            {
              title: 'Semaglutide Injections',
              url: '/daytona-beach/medical-spa/weight-loss/',
              description:
                'Explore innovative weight management with semaglutide injections, a groundbreaking approach to wellness.',
            },
            {
              title: 'Advanced Skincare',
              url: '/medical-spa/skincare-services/',
              description:
                'Elevate your skincare routine with our advanced skincare products, maintaining and enhancing your treatment results.',
            },
            {
              title: 'Spa Services',
              url: '/daytona-beach/medical-spa/spa-services/',
              description:
                "Discover revitalizing spa services ranging from acne facials to microneedling with ProCell serum, all designed to enhance your skin's health and appearance.",
            },
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
          defaultValue: 'background-navy',
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
          defaultValue: 'row half-image-row flipped mt-0 mb-0',
        },
        {
          name: 'flipped',
          type: 'checkbox',
          label: 'Flipped Layout',
          defaultValue: true,
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
          name: 'textAlign',
          type: 'select',
          label: 'Text Alignment',
          options: [
            { label: 'Left', value: 'text-left' },
            { label: 'Center', value: 'text-center' },
            { label: 'Right', value: 'text-right' },
          ],
          defaultValue: 'text-left',
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
              defaultValue: 'lifeguard tower at sunset',
            },
            {
              name: 'url',
              type: 'text',
              label: 'Image URL (if not uploading)',
              defaultValue: 'https://www.datocms-assets.com/105497/1694093838-daytona-beach.jpg',
            },
          ],
        },
      ],
    },
    // Column Section 3
    {
      name: 'columnSection3',
      type: 'group',
      label: 'Column Section 3 (Story)',
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
    // Banner Section 2
    {
      name: 'bannerSection2',
      type: 'group',
      label: 'Banner Section 2 (Elevate Your Look)',
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
        {
          name: 'layout',
          type: 'select',
          label: 'Layout',
          options: [
            { label: 'Single Column', value: 'single' },
            { label: 'Two Columns', value: 'columns-two' },
          ],
          defaultValue: 'columns-two',
        },
        {
          name: 'verticalAlign',
          type: 'checkbox',
          label: 'Vertical Align',
          defaultValue: true,
        },
      ],
    },
    // Column Section 4
    {
      name: 'columnSection4',
      type: 'group',
      label: 'Column Section 4 (Plastic Surgery)',
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
          defaultValue: 'Plastic Surgery',
        },
        {
          name: 'headingSmall',
          type: 'text',
          label: 'Heading Small Text',
          defaultValue: 'Comprehensive face and body rejuvenation',
        },
        {
          name: 'headingColor',
          type: 'text',
          label: 'Heading Color',
        },
        {
          name: 'subheading',
          type: 'text',
          label: 'Subheading',
          defaultValue:
            'Goldfingers Aesthetics extends its reach to transformative plastic surgery treatments. Under the skilled guidance of Dr. Michael McClure and our elite team of plastic surgeons, you can explore modern plastic surgery techniques. Our AAAA-certified surgical center in Lake Mary is where we bring your dreams to life:',
        },
        {
          name: 'content',
          type: 'richText',
          label: 'Content',
        },
        {
          name: 'serviceLinks',
          type: 'array',
          label: 'Service Links',
          admin: {
            description: 'Drag to reorder service links',
          },
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
            },
            {
              name: 'url',
              type: 'text',
              required: true,
            },
            {
              name: 'description',
              type: 'textarea',
              required: true,
            },
          ],
          defaultValue: [
            {
              title: 'Breast Augmentation',
              url: '/plastic-surgery/breast-augmentation/',
              description:
                'Enhance your curves and define your silhouette with breast augmentation, customizing size and shape with precision-placed implants.',
            },
            {
              title: 'Breast Lift',
              url: '/plastic-surgery/breast-lift/',
              description:
                'Restore youthful contours and confidence with a breast lift, reversing sagging for a rejuvenated appearance.',
            },
            {
              title: 'Breast Reduction',
              url: '/plastic-surgery/breast-reduction/',
              description:
                'Find relief and balance through breast reduction, addressing excess tissue for comfort and aesthetics.',
            },
            {
              title: 'Breast Revision',
              url: '/plastic-surgery/breast-revision/',
              description:
                'Correct previous procedures with breast revision, achieving desired outcomes and resolving concerns.',
            },
            {
              title: 'Mommy Makeover',
              url: '/plastic-surgery/mommy-makeover/',
              description:
                'Reclaim your pre-pregnancy body with a mommy makeover, a combination of procedures tailored to your unique needs.',
            },
            {
              title: 'Liposuction',
              url: '/plastic-surgery/liposuction/',
              description:
                'Sculpt your body by removing stubborn fat deposits with liposuction, achieving smoother, more refined contours.',
            },
            {
              title: '8-Point Facelift',
              url: '',
              description:
                'Rejuvenate your face through the transformative 8-point facelift, addressing multiple areas for a refreshed and youthful appearance.',
            },
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
      ],
    },
    // CTA Section
    {
      name: 'ctaSection',
      type: 'group',
      label: 'CTA Section (Schedule Consultation)',
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
          defaultValue: 'background-2',
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
          defaultValue: 'mod_cta_general viewport container cta thin wow fadeInRight mt-0 mb-0',
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Heading',
          defaultValue: 'Schedule a Consultation',
        },
        {
          name: 'headingUrl',
          type: 'text',
          label: 'Heading URL',
          defaultValue: '/contact/?location=165421472',
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
              defaultValue: 'Book an Appointment',
            },
            {
              name: 'url',
              type: 'text',
              label: 'Button URL',
              defaultValue: '/contact/?location=165421472',
            },
            {
              name: 'cssClass',
              type: 'text',
              label: 'Button CSS Class',
              defaultValue: 'btn white',
            },
          ],
        },
      ],
    },
    // Two Column Section
    {
      name: 'twoColumnSection',
      type: 'group',
      label: 'Two Column Section (Haven of Support)',
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
          name: 'leftHeading',
          type: 'text',
          label: 'Left Column Heading',
          defaultValue: 'A haven of support:',
        },
        {
          name: 'leftHeadingSmall',
          type: 'text',
          label: 'Left Heading Small Text',
          defaultValue: 'Goldfingers Aesthetics in Daytona Beach',
        },
        {
          name: 'rightContent',
          type: 'textarea',
          label: 'Right Column Content',
          defaultValue:
            'Our Daytona Beach office is a haven for advanced skincare services. Our skilled team utilizes high-quality products from trusted brands like SkinMedica to deliver results that reflect your aesthetic goals and aspirations.',
        },
        {
          name: 'verticalAlign',
          type: 'checkbox',
          label: 'Vertical Align',
          defaultValue: true,
        },
        {
          name: 'leftAnimationClass',
          type: 'select',
          label: 'Left Animation Class',
          options: [
            { label: 'Fade In Up', value: 'fadeInUp' },
            { label: 'Fade In Left', value: 'fadeInLeft' },
            { label: 'Fade In Right', value: 'fadeInRight' },
            { label: 'None', value: '' },
          ],
          defaultValue: 'fadeInLeft',
        },
        {
          name: 'rightAnimationClass',
          type: 'select',
          label: 'Right Animation Class',
          options: [
            { label: 'Fade In Up', value: 'fadeInUp' },
            { label: 'Fade In Left', value: 'fadeInLeft' },
            { label: 'Fade In Right', value: 'fadeInRight' },
            { label: 'None', value: '' },
          ],
          defaultValue: 'fadeInRight',
        },
      ],
    },
    // Column Section 5
    {
      name: 'columnSection5',
      type: 'group',
      label: 'Column Section 5 (Goldfingers Experience)',
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
          defaultValue: 'row media-left',
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
          defaultValue: 'Enjoy the Goldfingers Experience',
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
            'At Goldfingers Aesthetics & Plastic Surgery in Daytona Beach, we redefine aesthetics with a commitment to excellence and an unwavering passion for beauty. Your experience with us invites you to a realm of possibilities where medical spa treatments empower you to look and feel your best. Join us in discovering the remarkable transformations that await you.',
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
              defaultValue: 'sconce light fixture',
            },
            {
              name: 'url',
              type: 'text',
              label: 'Image URL (if not uploading)',
              defaultValue: 'https://www.datocms-assets.com/105497/1695240771-accent-9.jpg',
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
            { label: 'Box Grid 1 (Excellence)', value: 'boxGrid1' },
            { label: 'Column 1 (Provider)', value: 'column1' },
            { label: 'Banner 1 (Goldfingers Way)', value: 'banner1' },
            { label: 'Column 2 (Services)', value: 'column2' },
            { label: 'Half Image 1 (Rejuvenating)', value: 'halfImage1' },
            { label: 'Column 3 (Story)', value: 'column3' },
            { label: 'Banner 2 (Elevate)', value: 'banner2' },
            { label: 'Column 4 (Plastic Surgery)', value: 'column4' },
            { label: 'CTA (Schedule)', value: 'cta' },
            { label: 'Two Column (Haven)', value: 'twoColumn' },
            { label: 'Column 5 (Experience)', value: 'column5' },
          ],
        },
      ],
      defaultValue: [
        { section: 'hero' },
        { section: 'introColumn' },
        { section: 'boxGrid1' },
        { section: 'column1' },
        { section: 'banner1' },
        { section: 'column2' },
        { section: 'halfImage1' },
        { section: 'column3' },
        { section: 'banner2' },
        { section: 'column4' },
        { section: 'cta' },
        { section: 'twoColumn' },
        { section: 'column5' },
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
          defaultValue: 'Daytona Beach Aesthetics & Plastic Surgery | Goldfingers',
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          label: 'Meta Description',
          defaultValue:
            'Experience transformative aesthetic treatments at Goldfingers in Daytona Beach. BOTOX, dermal fillers, plastic surgery, and advanced skincare. Top 1% nationwide.',
        },
        {
          name: 'keywords',
          type: 'text',
          label: 'Keywords',
          defaultValue:
            'daytona beach aesthetics, botox daytona beach, dermal fillers, plastic surgery, med spa, skincare',
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
