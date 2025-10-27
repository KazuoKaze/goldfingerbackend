import { CollectionConfig } from 'payload'

export const WesleyChapelLocationPageComponent: CollectionConfig = {
  slug: 'wesley-chapel-location-page-component',
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
      defaultValue: 'Wesley Chapel Location Page Component',
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
              label: 'Wesley Chapel',
              url: '/wesley-chapel/',
              ariaLabel: 'Breadcrumbs to help navigate the user',
            },
          ],
        },
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          required: true,
          defaultValue: 'Wesley Chapel',
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
              required: true,
              defaultValue: 'epperson lagoon',
            },
            {
              name: 'url',
              type: 'text',
              label: 'Image URL (if not uploading)',
              defaultValue:
                'https://www.datocms-assets.com/105497/1711550484-fl_west-florida_wesley-chapel_epperson-02-lagoon.webp',
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
          defaultValue: 'Goldfingers Aesthetics & Plastic Surgery in Wesley Chapel',
        },
        {
          name: 'headingSpan',
          type: 'text',
          label: 'Heading Span Text (block on desktop)',
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
            'Conveniently located in Wesley Chapel, Goldfingers Aesthetics provides state-of-the-art cosmetic procedures with an emphasis on safety, natural-looking outcomes, and concierge care. Our mission is to help you express the best version of yourself, fulfilling your vision of authentic, timeless beauty.',
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
      label: 'Half Image Section 1 (Top-Rated Center)',
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
          defaultValue: 'row half-image-row mt-0',
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
          defaultValue: "Florida's top-rated, cutting-edge aesthetic center",
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
            "Every treatment at Goldfingers Aesthetics in Wesley Chapel is performed with precision and artistry utilizing best-in-class technology. With over 25 years in the cosmetic industry and 24 locations, we are proud to be recognized as within the nation's top 1% for BOTOX and Juvederm injections. Our Allergan-trained facial contour specialists focus on preserving your individuality and spontaneity while minimizing signs of aging.",
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
              defaultValue: 'pier on beach at sunset',
            },
            {
              name: 'url',
              type: 'text',
              label: 'Image URL (if not uploading)',
              defaultValue: 'https://www.datocms-assets.com/105497/1694093811-clearwater.jpg',
            },
          ],
        },
      ],
    },
    // Box Grid Section 1
    {
      name: 'boxGridSection1',
      type: 'group',
      label: 'Box Grid Section 1 (Premier Med Spa)',
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
          defaultValue: 'mod_box_grid viewport container option-3 single bkg-image',
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Heading',
          defaultValue: 'VISIT OUR PREMIER MED SPA IN WESLEY CHAPEL',
        },
        {
          name: 'headingSmall',
          type: 'text',
          label: 'Heading Small Text',
          defaultValue: 'Meticulous attention to detail',
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
            'Our Allergan-trained injectors are true artists, carefully perfecting your look while providing compassionate, supportive care throughout every session. Our onsite Nurse Practitioner has years of expertise and a refined eye for balance and symmetry.',
        },
      ],
    },
    // Column Section 1
    {
      name: 'columnSection1',
      type: 'group',
      label: 'Column Section 1 (Excellence)',
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
          defaultValue: 'row mt-30 pb-20',
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Heading',
          required: true,
          defaultValue: 'Another name for excellence',
        },
        {
          name: 'headingSmall',
          type: 'text',
          label: 'Heading Small Text (before main)',
          defaultValue: 'Goldfingers –',
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
          name: 'content',
          type: 'richText',
          label: 'Content',
        },
        {
          name: 'contentText',
          type: 'textarea',
          label: 'Content Text (plain)',
          defaultValue:
            'Every medspa treatment at our Wesley Chapel location is highly customized according to your unique needs and wishes. We offer a wide array of aesthetic solutions that can enhance your self-confidence and quality of life.',
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
                'Painless with no downtime, BOTOX is a leading neuromodulator known for erasing dynamic lines in the forehead and around the eyes.',
            },
            {
              title: 'Dermal fillers',
              description:
                'Fillers can restore youthfulness and vitality to age-depleted contours in the lips, cheeks, temples, and jawline.',
            },
            {
              title: 'Hand rejuvenation',
              description:
                'Our hyaluronic acid-based fillers can replenish volume in the hands, restoring a smooth, plump appearance.',
            },
            {
              title: 'Liquid facelift',
              description:
                'Our innovative non-surgical facelift treatments combine fillers and neuromodulators to revitalize your countenance.',
            },
            {
              title: 'Permanent makeup',
              description:
                'For those who wish to look their best 24/7, our permanent makeup sessions can eliminate unnecessary daily hours spent applying cosmetics.',
            },
            {
              title: 'Micro-channeling',
              description:
                'Micro-channeling works to stimulate collagen renewal for sustainable skin softening over time.',
            },
            {
              title: 'Treatments for men',
              description:
                'We provide a host of advanced treatments specifically engineered to help our male patients look and feel their best.',
            },
            {
              title: 'Semaglutide injections',
              description:
                'Patients can enjoy transformative weight loss with our easy-to-manage Semaglutide injections.',
            },
            {
              title: 'Medical-grade skincare',
              description:
                'Our superior skincare lines help augment your daily routine and preserve the results of your cosmetic procedure.',
            },
            {
              title: 'Spa services',
              description:
                'From facials and microneedling to chemical peels and acne treatments, patients love to be pampered at our world-class medspa in Wesley Chapel.',
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
    // Column with Media Section 1
    {
      name: 'columnMediaSection1',
      type: 'group',
      label: 'Column with Media Section 1 (Self-Care)',
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
          defaultValue: 'row mb-30 media-right',
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
          defaultValue: 'Take your self-care to the next level',
        },
        {
          name: 'headingSmall',
          type: 'text',
          label: 'Heading Small Text',
          defaultValue: 'with non-surgical enhancements',
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
            'From lash extensions and permanent makeup to weight loss treatments, fillers, and hand rejuvenation, our cutting-edge medspa provides you with dozens of ways to celebrate your innate beauty and magnificence. We create nuanced, elegant changes that support a more confident, attractive you. Come alone, or bring a friend, partner, or family member for the ultimate luxury experience!',
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
              label: 'Desktop Image',
            },
            {
              name: 'alt',
              type: 'text',
              label: 'Alt Text',
              required: true,
              defaultValue: 'boardwalk and palm trees on the beach',
            },
            {
              name: 'url',
              type: 'text',
              label: 'Image URL (if not uploading)',
              defaultValue: 'https://www.datocms-assets.com/105497/1694025427-accent-8.jpg',
            },
          ],
        },
      ],
    },
    // Banner Section 1
    {
      name: 'bannerSection1',
      type: 'group',
      label: 'Banner Section 1 (Story Behind)',
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
          defaultValue: 'The story behind Goldfingers Aesthetics',
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
          name: 'content',
          type: 'richText',
          label: 'Content',
        },
        {
          name: 'contentText',
          type: 'textarea',
          label: 'Content Text (plain)',
          defaultValue:
            "Florida's top-rated aesthetics center is overseen by Dr. James Young, DO, who for two decades has expanded the brand to encompass 3,500 BOTOX and Juvederm patients annually at 24 convenient locations. Dr. Young and his handpicked, exclusive team of cosmetic professionals were awarded by Allergan as being in the Top 1% of the Nation when it comes to injectables. Each of our talented injectors is personally mentored by Dr. Young and undergoes exhaustive Allergan training.",
        },
      ],
    },
    // Two Column Section 1
    {
      name: 'twoColumnSection1',
      type: 'group',
      label: 'Two Column Section 1 (Reverse Signs)',
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
              name: 'heading',
              type: 'text',
              label: 'Heading',
              defaultValue: 'Reverse signs of aging with customized injectables',
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
              name: 'contentText',
              type: 'textarea',
              label: 'Content Text (plain)',
              defaultValue:
                'Goldfingers Aesthetics in Wesley Chapel provides personalized dermal filler sessions using Juvederm and Restylane, world-renowned hyaluronic acid-based injectables that smooth the lips, cheeks, chin, jawline, and hands, telegraphing enhanced youthfulness and vitality. For patients struggling with age-related volume loss, fillers are a safe, non-invasive alternative to plastic surgery, with results lasting 6-18 months on average.',
            },
          ],
        },
      ],
    },
    // Column Section 2
    {
      name: 'columnSection2',
      type: 'group',
      label: 'Column Section 2 (Plastic Surgery)',
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
          defaultValue: 'The art of plastic surgery',
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
          name: 'content',
          type: 'richText',
          label: 'Content',
        },
        {
          name: 'contentText',
          type: 'textarea',
          label: 'Content Text (plain)',
          defaultValue:
            'For patients seeking long-lasting changes that will revolutionize their appearance, cosmetic surgery can provide a new lease on life. We offer an array of modern procedures performed by a board-certified plastic surgeon with over two decades of expertise. All procedures are performed at our immaculate, AAAASF-accredited surgical center.',
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
              title: 'Breast augmentation',
              description:
                'Breast augmentation can create more feminine, shapely curves, balancing the physique and expanding your clothing options.',
            },
            {
              title: 'Breast lift',
              description:
                'A breast lift, often combined with breast augmentation or breast reduction, can combat sagging skin and downward-facing nipples, elevating the chest profile.',
            },
            {
              title: 'Breast reduction',
              description:
                'Breast reduction can help relieve shoulder, back, and neck pain, enhance energy and stamina, and correct the proportions of the upper torso.',
            },
            {
              title: 'Breast revision',
              description:
                'Our skilled, precision-oriented plastic surgeon can correct complications such as capsular contracture, restoring your appearance and peace of mind.',
            },
            {
              title: 'Mommy makeover',
              description:
                'Moms love our combination treatments to rejuvenate the figure from head to toe. Mommy makeovers include breast surgery, liposuction, abdominoplasty, and more.',
            },
            {
              title: 'Liposuction',
              description:
                'Liposuction is a popular solution for trimming unwanted pockets of stubborn fat that are notoriously difficult to shed through dieting and exercise alone.',
            },
            {
              title: '8-point facelift',
              description:
                'Our innovative 8-point facelift is ideal for rewinding the hands of time by addressing midface sagging, jowls, and loss of definition in the jawline.',
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
    // Box Grid Section 2
    {
      name: 'boxGridSection2',
      type: 'group',
      label: 'Box Grid Section 2 (Skincare Services)',
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
          defaultValue: 'mod_box_grid viewport container option-2 single bkg-image',
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Heading',
          defaultValue: 'Skincare services',
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
            'At our beautiful Wesley Chapel facility, we provide access to advanced medical-grade skincare lines such as SkinMedica. Products are backed by clinical research and support all phases of your daily skincare regimen, including cleansing, exfoliation, hydration, nourishment, and protection from harmful UV rays. After investing in a cosmetic procedure, safeguard your results by using our line of customized elixirs and anti-aging serums.',
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
            { label: 'Half Image 1 (Top-Rated)', value: 'halfImage1' },
            { label: 'Box Grid 1 (Premier Med Spa)', value: 'boxGrid1' },
            { label: 'Column 1 (Excellence)', value: 'column1' },
            { label: 'Column Media 1 (Self-Care)', value: 'columnMedia1' },
            { label: 'Banner 1 (Story)', value: 'banner1' },
            { label: 'Two Column 1 (Reverse Signs)', value: 'twoColumn1' },
            { label: 'Column 2 (Plastic Surgery)', value: 'column2' },
            { label: 'Box Grid 2 (Skincare)', value: 'boxGrid2' },
          ],
        },
      ],
      defaultValue: [
        { section: 'hero' },
        { section: 'introColumn' },
        { section: 'halfImage1' },
        { section: 'boxGrid1' },
        { section: 'column1' },
        { section: 'columnMedia1' },
        { section: 'banner1' },
        { section: 'twoColumn1' },
        { section: 'column2' },
        { section: 'boxGrid2' },
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
          defaultValue: 'Wesley Chapel Aesthetics & Plastic Surgery | Goldfingers',
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          label: 'Meta Description',
          defaultValue:
            'Visit Goldfingers Aesthetics in Wesley Chapel for premium cosmetic procedures, BOTOX, dermal fillers, and plastic surgery. Top 1% nationwide for injectables.',
        },
        {
          name: 'keywords',
          type: 'text',
          label: 'Keywords',
          defaultValue:
            'wesley chapel aesthetics, botox wesley chapel, dermal fillers, plastic surgery, med spa',
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
