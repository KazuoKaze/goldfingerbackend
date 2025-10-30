import { CollectionConfig } from 'payload'

export const TermsAndConditionsComponent: CollectionConfig = {
  slug: 'terms-and-conditions-component',
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
      defaultValue: 'Terms and Conditions Component',
    },
    {
      name: 'sections',
      type: 'array',
      label: 'Page Sections',
      admin: {
        description: 'Drag to reorder sections on the page',
      },
      fields: [
        {
          name: 'sectionType',
          type: 'select',
          required: true,
          options: [
            { label: 'Hero Section', value: 'hero' },
            { label: 'Content Section', value: 'content' },
          ],
        },
        {
          name: 'sectionId',
          type: 'text',
          label: 'Section ID',
          admin: {
            description: 'Unique identifier for this section (optional)',
          },
        },
        {
          name: 'heroSection',
          type: 'group',
          label: 'Hero Section Settings',
          admin: {
            condition: (data, siblingData) => siblingData?.sectionType === 'hero',
          },
          fields: [
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
            },
            {
              name: 'title',
              type: 'text',
              required: true,
              defaultValue: 'Terms & Conditions',
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
                  defaultValue: "Goldfinger's building",
                },
              ],
            },
            {
              name: 'cssClasses',
              type: 'text',
              label: 'Additional CSS Classes',
              defaultValue: 'mobile-stack',
              admin: {
                description: 'Space-separated CSS classes (e.g., mobile-stack)',
              },
            },
          ],
        },
        {
          name: 'contentSection',
          type: 'group',
          label: 'Content Section Settings',
          admin: {
            condition: (data, siblingData) => siblingData?.sectionType === 'content',
          },
          fields: [
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
              name: 'containerWidth',
              type: 'select',
              label: 'Container Width',
              options: [
                { label: 'Default', value: 'default' },
                { label: 'Container', value: 'container' },
                { label: 'Wide', value: 'wide' },
                { label: 'Narrow', value: 'narrow' },
              ],
              defaultValue: 'container',
            },
            {
              name: 'contentBlocks',
              type: 'array',
              label: 'Content Blocks',
              admin: {
                description: 'Drag to reorder content blocks (headings, paragraphs, lists)',
              },
              fields: [
                {
                  name: 'blockType',
                  type: 'select',
                  required: true,
                  options: [
                    { label: 'Heading 2', value: 'h2' },
                    { label: 'Heading 3', value: 'h3' },
                    { label: 'Paragraph', value: 'paragraph' },
                    { label: 'Rich Text', value: 'richText' },
                    { label: 'Ordered List', value: 'orderedList' },
                    { label: 'Link', value: 'link' },
                  ],
                },
                {
                  name: 'heading',
                  type: 'text',
                  label: 'Heading Text',
                  admin: {
                    condition: (data, siblingData) =>
                      siblingData?.blockType === 'h2' || siblingData?.blockType === 'h3',
                  },
                },
                {
                  name: 'headingColor',
                  type: 'text',
                  label: 'Heading Color',
                  admin: {
                    description: 'CSS color value',
                    condition: (data, siblingData) =>
                      siblingData?.blockType === 'h2' || siblingData?.blockType === 'h3',
                  },
                },
                {
                  name: 'paragraphText',
                  type: 'textarea',
                  label: 'Paragraph Text',
                  admin: {
                    condition: (data, siblingData) => siblingData?.blockType === 'paragraph',
                  },
                },
                {
                  name: 'richTextContent',
                  type: 'richText',
                  label: 'Rich Text Content',
                  admin: {
                    condition: (data, siblingData) => siblingData?.blockType === 'richText',
                  },
                },
                {
                  name: 'listItems',
                  type: 'array',
                  label: 'List Items',
                  admin: {
                    description: 'Drag to reorder list items',
                    condition: (data, siblingData) => siblingData?.blockType === 'orderedList',
                  },
                  fields: [
                    {
                      name: 'text',
                      type: 'textarea',
                      required: true,
                    },
                    {
                      name: 'textColor',
                      type: 'text',
                      label: 'Text Color',
                      admin: {
                        description: 'Override text color for this item',
                      },
                    },
                  ],
                },
                {
                  name: 'linkText',
                  type: 'text',
                  label: 'Link Text',
                  admin: {
                    condition: (data, siblingData) => siblingData?.blockType === 'link',
                  },
                },
                {
                  name: 'linkUrl',
                  type: 'text',
                  label: 'Link URL',
                  admin: {
                    condition: (data, siblingData) => siblingData?.blockType === 'link',
                  },
                },
                {
                  name: 'linkColor',
                  type: 'text',
                  label: 'Link Color',
                  admin: {
                    description: 'CSS color value',
                    condition: (data, siblingData) => siblingData?.blockType === 'link',
                  },
                },
                {
                  name: 'textColor',
                  type: 'text',
                  label: 'Text Color',
                  admin: {
                    description: 'Override section text color for this block',
                  },
                },
                {
                  name: 'backgroundColor',
                  type: 'text',
                  label: 'Background Color',
                  admin: {
                    description: 'Background color for this block',
                  },
                },
                {
                  name: 'padding',
                  type: 'text',
                  label: 'Padding',
                  admin: {
                    description: 'CSS padding value (e.g., 20px, 1rem 2rem)',
                  },
                },
                {
                  name: 'margin',
                  type: 'text',
                  label: 'Margin',
                  admin: {
                    description: 'CSS margin value (e.g., 20px 0, 1rem)',
                  },
                },
                {
                  name: 'cssClasses',
                  type: 'text',
                  label: 'Additional CSS Classes',
                  admin: {
                    description: 'Space-separated CSS classes',
                  },
                },
              ],
            },
            {
              name: 'cssClasses',
              type: 'text',
              label: 'Additional CSS Classes',
              admin: {
                description: 'Space-separated CSS classes for the section',
              },
            },
            {
              name: 'padding',
              type: 'text',
              label: 'Section Padding',
              admin: {
                description: 'CSS padding value (e.g., 60px 20px, 4rem 2rem)',
              },
            },
            {
              name: 'margin',
              type: 'text',
              label: 'Section Margin',
              admin: {
                description: 'CSS margin value (e.g., 40px 0, 3rem 0)',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'defaultContent',
      type: 'group',
      label: 'Default Content Settings',
      admin: {
        description: 'Pre-configured content blocks for Terms and Conditions',
      },
      fields: [
        {
          name: 'introHeading',
          type: 'text',
          label: 'Introduction Heading',
          defaultValue: 'Terms of Service',
        },
        {
          name: 'introParagraph1',
          type: 'textarea',
          label: 'Introduction Paragraph 1',
          defaultValue:
            'These Terms of Service govern your use of the website located at www.goldfingersaesthetics.com and any related services provided by Goldfingers Aesthetics.',
        },
        {
          name: 'introParagraph2',
          type: 'textarea',
          label: 'Introduction Paragraph 2',
          defaultValue:
            'By accessing www.goldfingersaesthetics.com, you agree to abide by these Terms of Service and to comply with all applicable laws and regulations. If you do not agree with these Terms of Service, you are prohibited from using or accessing this website or using any other services provided by Goldfingers Aesthetics.',
        },
        {
          name: 'introParagraph3',
          type: 'textarea',
          label: 'Introduction Paragraph 3',
          defaultValue:
            'We, Goldfingers Aesthetics, reserve the right to review and amend any of these Terms of Service at our sole discretion. Upon doing so, we will update this page. Any changes to these Terms of Service will take effect immediately from the date of publication.',
        },
        {
          name: 'lastUpdated',
          type: 'text',
          label: 'Last Updated Text',
          defaultValue: 'These Terms of Service were last updated on January 1, 2025.',
        },
        {
          name: 'limitationsHeading',
          type: 'text',
          label: 'Limitations Section Heading',
          defaultValue: 'Limitations of Use',
        },
        {
          name: 'limitationsIntro',
          type: 'textarea',
          label: 'Limitations Introduction',
          defaultValue:
            'By using this website, you warrant on behalf of yourself, your users, and other parties you represent that you will not:',
        },
        {
          name: 'limitationsList',
          type: 'array',
          label: 'Limitations List Items',
          admin: {
            description: 'Drag to reorder limitation items',
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
              text: 'modify, copy, prepare derivative works of, decompile, or reverse engineer any materials and software contained on this website;',
            },
            {
              text: 'remove any copyright or other proprietary notations from any materials and software on this website;',
            },
            {
              text: 'transfer the materials to another person or "mirror" the materials on any other server;',
            },
            {
              text: 'knowingly or negligently use this website or any of its associated services in a way that abuses or disrupts our networks or any other service Goldfingers Aesthetics provides;',
            },
            {
              text: 'use this website or its associated services to transmit or publish any harassing, indecent, obscene, fraudulent, or unlawful material;',
            },
            {
              text: 'use this website or its associated services in violation of any applicable laws or regulations;',
            },
            {
              text: 'use this website in conjunction with sending unauthorized advertising or spam;',
            },
            { text: "harvest, collect, or gather user data without the user's consent; or" },
            {
              text: 'use this website or its associated services in such a way that may infringe the privacy, intellectual property rights, or other rights of third parties.',
            },
          ],
        },
        {
          name: 'intellectualPropertyHeading',
          type: 'text',
          label: 'Intellectual Property Heading',
          defaultValue: 'Intellectual Property',
        },
        {
          name: 'intellectualPropertyParagraph1',
          type: 'textarea',
          label: 'Intellectual Property Paragraph 1',
          defaultValue:
            'The intellectual property in the materials contained in this website are owned by or licensed to Goldfingers Aesthetics and are protected by applicable copyright and trademark law. We grant our users permission to download one copy of the materials for personal, non-commercial transitory use.',
        },
        {
          name: 'intellectualPropertyParagraph2',
          type: 'textarea',
          label: 'Intellectual Property Paragraph 2',
          defaultValue:
            'This constitutes the grant of a license, not a transfer of title. This license shall automatically terminate if you violate any of these restrictions or the Terms of Service, and may be terminated by Goldfingers Aesthetics at any time.',
        },
        {
          name: 'liabilityHeading',
          type: 'text',
          label: 'Liability Heading',
          defaultValue: 'Liability',
        },
        {
          name: 'liabilityParagraph1',
          type: 'textarea',
          label: 'Liability Paragraph 1',
          defaultValue:
            "Our website and the materials on our website are provided on an 'as is' basis. To the extent permitted by law, Goldfingers Aesthetics makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property, or other violation of rights.",
        },
        {
          name: 'liabilityParagraph2',
          type: 'textarea',
          label: 'Liability Paragraph 2',
          defaultValue:
            'In no event shall Goldfingers Aesthetics or its suppliers be liable for any consequential loss suffered or incurred by you or any third party arising from the use or inability to use this website or the materials on this website, even if Goldfingers Aesthetics or an authorized representative has been notified, orally or in writing, of the possibility of such damage.',
        },
        {
          name: 'liabilityParagraph3',
          type: 'textarea',
          label: 'Liability Paragraph 3',
          defaultValue:
            'In the context of this agreement, "consequential loss" includes any consequential loss, indirect loss, real or anticipated loss of profit, loss of benefit, loss of revenue, loss of business, loss of goodwill, loss of opportunity, loss of savings, loss of reputation, loss of use and/or loss or corruption of data, whether under statute, contract, equity, tort (including negligence), indemnity, or otherwise.',
        },
        {
          name: 'liabilityParagraph4',
          type: 'textarea',
          label: 'Liability Paragraph 4',
          defaultValue:
            'Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.',
        },
        {
          name: 'accuracyHeading',
          type: 'text',
          label: 'Accuracy Heading',
          defaultValue: 'Accuracy of Materials',
        },
        {
          name: 'accuracyParagraph',
          type: 'textarea',
          label: 'Accuracy Paragraph',
          defaultValue:
            'The materials appearing on our website are not comprehensive and are for general information purposes only. Goldfingers Aesthetics does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on this website, or otherwise relating to such materials or on any resources linked to this website.',
        },
        {
          name: 'linksHeading',
          type: 'text',
          label: 'Links Heading',
          defaultValue: 'Links',
        },
        {
          name: 'linksParagraph',
          type: 'textarea',
          label: 'Links Paragraph',
          defaultValue:
            'Goldfingers Aesthetics has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement, approval, or control by Goldfingers Aesthetics of the site. Use of any such linked site is at your own risk and we strongly advise you make your own investigations with respect to the suitability of those sites.',
        },
        {
          name: 'terminateHeading',
          type: 'text',
          label: 'Right to Terminate Heading',
          defaultValue: 'Right to Terminate',
        },
        {
          name: 'terminateParagraph',
          type: 'textarea',
          label: 'Right to Terminate Paragraph',
          defaultValue:
            'We may suspend or terminate your right to use our website and terminate these Terms of Service immediately upon written notice to you for any breach of these Terms of Service.',
        },
        {
          name: 'severanceHeading',
          type: 'text',
          label: 'Severance Heading',
          defaultValue: 'Severance',
        },
        {
          name: 'severanceParagraph',
          type: 'textarea',
          label: 'Severance Paragraph',
          defaultValue:
            'Any term of these Terms of Service which is wholly or partially void or unenforceable is severed to the extent that it is void or unenforceable. The validity of the remainder of these Terms of Service is not affected.',
        },
        {
          name: 'governingLawHeading',
          type: 'text',
          label: 'Governing Law Heading',
          defaultValue: 'Governing Law',
        },
        {
          name: 'governingLawParagraph',
          type: 'textarea',
          label: 'Governing Law Paragraph',
          defaultValue:
            'These Terms of Service are governed by and construed in accordance with the laws of California. You irrevocably submit to the exclusive jurisdiction of the courts in that State or location.',
        },
      ],
    },
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
            description: 'Main brand color',
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
          name: 'linkColor',
          type: 'text',
          label: 'Default Link Color',
          admin: {
            description: 'Default color for all links',
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
        {
          name: 'headingColor',
          type: 'text',
          label: 'Default Heading Color',
          admin: {
            description: 'Default color for all headings',
          },
        },
        {
          name: 'bodyTextColor',
          type: 'text',
          label: 'Body Text Color',
          admin: {
            description: 'Default color for body text',
          },
        },
      ],
    },
    {
      name: 'seoSettings',
      type: 'group',
      label: 'SEO Settings',
      fields: [
        {
          name: 'metaTitle',
          type: 'text',
          label: 'Meta Title',
          defaultValue: 'Terms & Conditions | Goldfingers Aesthetics',
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          label: 'Meta Description',
          defaultValue:
            'Read the Terms and Conditions for using Goldfingers Aesthetics website and services.',
        },
        {
          name: 'ogImage',
          type: 'upload',
          relationTo: 'media',
          label: 'OG Image',
        },
        {
          name: 'canonicalUrl',
          type: 'text',
          label: 'Canonical URL',
          defaultValue: 'https://www.goldfingersaesthetics.com/terms-and-conditions/',
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
