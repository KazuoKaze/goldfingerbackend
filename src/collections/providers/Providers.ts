// // import { CollectionConfig } from 'payload'
// // import { formatSlug } from '../utilities/formatSlug'

// // export const Providers: CollectionConfig = {
// //   slug: 'providers',
// //   admin: {
// //     useAsTitle: 'name',
// //     defaultColumns: ['name', 'title', 'primaryLocation', 'status', 'updatedAt'],
// //     group: 'Directory',
// //   },
// //   access: {
// //     read: () => true, // Public access for reading providers
// //   },
// //   fields: [
// //     {
// //       name: 'name',
// //       type: 'text',
// //       required: true,
// //       label: 'Provider Name',
// //       admin: {
// //         description: 'Full name (e.g., "Bria Bennie")',
// //       },
// //     },
// //     {
// //       name: 'slug',
// //       type: 'text',
// //       required: true,
// //       unique: true,
// //       label: 'URL Slug',
// //       admin: {
// //         description:
// //           'This will be the URL path (e.g., "bria-bennie" becomes /providers/bria-bennie/)',
// //         position: 'sidebar',
// //       },
// //       hooks: {
// //         beforeValidate: [formatSlug('name')],
// //       },
// //       index: true,
// //     },
// //     {
// //       name: 'title',
// //       type: 'text',
// //       required: true,
// //       label: 'Professional Title',
// //       admin: {
// //         description: 'e.g., "PA-C", "APRN", "MD"',
// //       },
// //     },
// //     {
// //       name: 'profileImage',
// //       type: 'upload',
// //       relationTo: 'media',
// //       required: true,
// //       label: 'Profile Image',
// //       admin: {
// //         description: 'Professional headshot (recommended: 400x400px)',
// //       },
// //     },
// //     // Location Relationship
// //     {
// //       name: 'primaryLocation',
// //       type: 'relationship',
// //       relationTo: 'locations',
// //       required: true,
// //       label: 'Primary Location',
// //       admin: {
// //         description: 'Main location where this provider practices',
// //       },
// //     },
// //     {
// //       name: 'additionalLocations',
// //       type: 'relationship',
// //       relationTo: 'locations',
// //       hasMany: true,
// //       label: 'Additional Locations',
// //       admin: {
// //         description: 'Other locations where this provider also practices',
// //       },
// //     },
// //     // Provider Details
// //     {
// //       name: 'bio',
// //       type: 'richText',
// //       label: 'Biography',
// //       admin: {
// //         description: 'Detailed professional biography',
// //       },
// //     },
// //     {
// //       name: 'shortBio',
// //       type: 'textarea',
// //       label: 'Short Bio',
// //       maxLength: 500,
// //       admin: {
// //         description: 'Brief description for listing pages (150-200 characters recommended)',
// //       },
// //     },
// //     {
// //       name: 'specialties',
// //       type: 'array',
// //       label: 'Specialties',
// //       fields: [
// //         {
// //           name: 'specialty',
// //           type: 'text',
// //           required: true,
// //         },
// //       ],
// //     },
// //     {
// //       name: 'services',
// //       type: 'array',
// //       label: 'Services Offered',
// //       fields: [
// //         {
// //           name: 'service',
// //           type: 'text',
// //           required: true,
// //         },
// //       ],
// //     },
// //     // Education & Certifications
// //     {
// //       name: 'education',
// //       type: 'array',
// //       label: 'Education',
// //       fields: [
// //         {
// //           name: 'degree',
// //           type: 'text',
// //           label: 'Degree',
// //           required: true,
// //         },
// //         {
// //           name: 'institution',
// //           type: 'text',
// //           label: 'Institution',
// //           required: true,
// //         },
// //         {
// //           name: 'year',
// //           type: 'text',
// //           label: 'Year',
// //         },
// //       ],
// //     },
// //     {
// //       name: 'certifications',
// //       type: 'array',
// //       label: 'Certifications',
// //       fields: [
// //         {
// //           name: 'certification',
// //           type: 'text',
// //           required: true,
// //         },
// //       ],
// //     },
// //     // Professional Info
// //     {
// //       name: 'yearsOfExperience',
// //       type: 'number',
// //       label: 'Years of Experience',
// //     },
// //     {
// //       name: 'languages',
// //       type: 'array',
// //       label: 'Languages Spoken',
// //       fields: [
// //         {
// //           name: 'language',
// //           type: 'text',
// //           required: true,
// //         },
// //       ],
// //     },
// //     // Reviews & Ratings
// //     {
// //       name: 'reviews',
// //       type: 'group',
// //       label: 'Reviews',
// //       fields: [
// //         {
// //           name: 'averageRating',
// //           type: 'number',
// //           min: 0,
// //           max: 5,
// //           label: 'Average Rating',
// //           admin: {
// //             step: 0.1,
// //           },
// //         },
// //         {
// //           name: 'totalReviews',
// //           type: 'number',
// //           label: 'Total Reviews',
// //           defaultValue: 0,
// //         },
// //       ],
// //     },
// //     // Media Gallery
// //     {
// //       name: 'gallery',
// //       type: 'array',
// //       label: 'Photo Gallery',
// //       fields: [
// //         {
// //           name: 'image',
// //           type: 'upload',
// //           relationTo: 'media',
// //           required: true,
// //         },
// //         {
// //           name: 'caption',
// //           type: 'text',
// //         },
// //       ],
// //     },
// //     // Availability
// //     {
// //       name: 'acceptingNewPatients',
// //       type: 'checkbox',
// //       label: 'Accepting New Patients',
// //       defaultValue: true,
// //       admin: {
// //         position: 'sidebar',
// //       },
// //     },
// //     {
// //       name: 'featured',
// //       type: 'checkbox',
// //       label: 'Featured Provider',
// //       defaultValue: false,
// //       admin: {
// //         position: 'sidebar',
// //         description: 'Show this provider prominently',
// //       },
// //     },
// //     {
// //       name: 'status',
// //       type: 'select',
// //       required: true,
// //       defaultValue: 'active',
// //       options: [
// //         {
// //           label: 'Active',
// //           value: 'active',
// //         },
// //         {
// //           label: 'On Leave',
// //           value: 'on-leave',
// //         },
// //         {
// //           label: 'Inactive',
// //           value: 'inactive',
// //         },
// //       ],
// //       admin: {
// //         position: 'sidebar',
// //       },
// //     },
// //     // Contact & Scheduling
// //     {
// //       name: 'schedulingLink',
// //       type: 'text',
// //       label: 'Scheduling Link',
// //       admin: {
// //         description: 'Link to online booking system',
// //       },
// //     },
// //     {
// //       name: 'email',
// //       type: 'email',
// //       label: 'Contact Email',
// //     },
// //     // SEO
// //     {
// //       name: 'seo',
// //       type: 'group',
// //       label: 'SEO Settings',
// //       fields: [
// //         {
// //           name: 'metaTitle',
// //           type: 'text',
// //           label: 'Meta Title',
// //           maxLength: 100,
// //         },
// //         {
// //           name: 'metaDescription',
// //           type: 'textarea',
// //           label: 'Meta Description',
// //           maxLength: 200,
// //         },
// //         {
// //           name: 'ogImage',
// //           type: 'upload',
// //           relationTo: 'media',
// //           label: 'Social Share Image',
// //         },
// //       ],
// //     },
// //   ],
// //   hooks: {
// //     beforeChange: [
// //       ({ data }) => {
// //         // Auto-generate short bio from full bio if not provided
// //         if (!data.shortBio && data.bio) {
// //           const plainText = JSON.stringify(data.bio)
// //             .replace(/<[^>]*>/g, '')
// //             .replace(/[{}"]/g, '')
// //           data.shortBio = plainText.substring(0, 200) + '...'
// //         }
// //         return data
// //       },
// //     ],
// //   },
// //   timestamps: true,
// // }

// import { CollectionConfig } from 'payload'

// export const Providers: CollectionConfig = {
//   slug: 'providers',
//   admin: {
//     useAsTitle: 'name',
//     defaultColumns: ['name', 'title', 'slug', 'location'],
//   },
//   fields: [
//     {
//       name: 'name',
//       type: 'text',
//       required: true,
//       label: 'Provider Name',
//     },
//     {
//       name: 'slug',
//       type: 'text',
//       required: true,
//       unique: true,
//       label: 'URL Slug',
//       admin: {
//         description: 'URL-friendly version of the name (e.g., bria-bennie)',
//       },
//     },
//     {
//       name: 'title',
//       type: 'text',
//       required: true,
//       label: 'Credentials/Title',
//       admin: {
//         description: 'e.g., PA-C, MD, APRN',
//       },
//     },
//     {
//       name: 'image',
//       type: 'upload',
//       relationTo: 'media',
//       required: true,
//       label: 'Provider Photo',
//     },
//     {
//       name: 'location',
//       type: 'relationship',
//       relationTo: 'locations',
//       required: true,
//       label: 'Primary Location',
//     },
//     {
//       name: 'additionalLocations',
//       type: 'relationship',
//       relationTo: 'locations',
//       hasMany: true,
//       label: 'Additional Locations',
//       admin: {
//         description: 'Other locations where this provider works',
//       },
//     },
//     {
//       name: 'distance',
//       type: 'text',
//       label: 'Distance Display',
//       admin: {
//         description: 'e.g., "20.4 mi" - can be calculated or set manually',
//       },
//     },
//     {
//       name: 'bio',
//       type: 'richText',
//       label: 'Biography',
//       admin: {
//         description: 'Full biography for the provider detail page',
//       },
//     },
//     {
//       name: 'experience',
//       type: 'array',
//       label: 'Experience',
//       fields: [
//         {
//           name: 'item',
//           type: 'text',
//           label: 'Experience Item',
//         },
//       ],
//     },
//     {
//       name: 'specialties',
//       type: 'array',
//       label: 'Specialties',
//       fields: [
//         {
//           name: 'item',
//           type: 'text',
//           label: 'Specialty Item',
//         },
//       ],
//     },
//     {
//       name: 'reviews',
//       type: 'group',
//       label: 'Reviews',
//       fields: [
//         {
//           name: 'rating',
//           type: 'number',
//           min: 0,
//           max: 5,
//           label: 'Average Rating',
//           defaultValue: 0,
//         },
//         {
//           name: 'count',
//           type: 'number',
//           label: 'Number of Reviews',
//           defaultValue: 0,
//         },
//       ],
//     },
//     {
//       name: 'isActive',
//       type: 'checkbox',
//       label: 'Active',
//       defaultValue: true,
//       admin: {
//         description: 'Show this provider in the locator',
//       },
//     },
//     {
//       name: 'order',
//       type: 'number',
//       label: 'Display Order',
//       admin: {
//         description: 'Lower numbers appear first',
//       },
//     },
//   ],
// }


import { CollectionConfig } from 'payload'

// collections/Providers.ts
export const Providers: CollectionConfig = {
  slug: 'providers',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'title', 'primaryLocation'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Provider Name',
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Professional Title',
      admin: {
        placeholder: 'PA-C, APRN, MSN, etc.',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Provider Photo',
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Background Image',
      admin: {
        description: 'Optional background image for provider detail view',
      },
    },
    {
      name: 'latitude',
      type: 'number',
      required: true,
      label: 'Latitude',
      admin: {
        step: 0.000001,
        placeholder: '40.7128',
      },
    },
    {
      name: 'longitude',
      type: 'number',
      required: true,
      label: 'Longitude',
      admin: {
        step: 0.000001,
        placeholder: '-74.0060',
      },
    },
    {
      name: 'zoom',
      type: 'number',
      label: 'Map Zoom Level',
      defaultValue: 15,
      min: 1,
      max: 20,
      admin: {
        description: 'Default zoom level (1-20, higher = closer)',
      },
    },
    {
      name: 'primaryLocation',
      type: 'relationship',
      relationTo: 'locations',
      required: true,
      label: 'Primary Location',
    },
    {
      name: 'additionalLocations',
      type: 'relationship',
      relationTo: 'locations',
      hasMany: true,
      label: 'Additional Locations',
    },
    {
      name: 'reviews',
      type: 'group',
      label: 'Reviews',
      fields: [
        {
          name: 'rating',
          type: 'number',
          required: true,
          label: 'Average Rating',
          min: 0,
          max: 5,
          defaultValue: 0,
          admin: {
            step: 0.1,
          },
        },
        {
          name: 'count',
          type: 'number',
          required: true,
          label: 'Number of Reviews',
          min: 0,
          defaultValue: 0,
        },
      ],
    },
    {
      name: 'bio',
      type: 'richText',
      label: 'Biography',
      admin: {
        description: 'Provider biography and qualifications',
      },
    },
    {
      name: 'specialties',
      type: 'array',
      label: 'Specialties',
      fields: [
        {
          name: 'specialty',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'experience',
      type: 'array',
      label: 'Experience',
      fields: [
        {
          name: 'experience',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'awards',
      type: 'array',
      label: 'Awards',
      fields: [
        {
          name: 'Awards',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'memberships',
      type: 'array',
      label: 'Memberships',
      fields: [
        {
          name: 'Memberships',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'personal',
      type: 'array',
      label: 'Personal',
      fields: [
        {
          name: 'Personal',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'education',
      type: 'array',
      label: 'Education',
      fields: [
        {
          name: 'degree',
          type: 'text',
          required: true,
          label: 'Degree',
        },
        {
          name: 'institution',
          type: 'text',
          required: true,
          label: 'Institution',
        },
        {
          name: 'year',
          type: 'text',
          label: 'Graduation Year',
        },
      ],
    },
    {
      name: 'certifications',
      type: 'array',
      label: 'Certifications',
      fields: [
        {
          name: 'certification',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'languages',
      type: 'array',
      label: 'Languages Spoken',
      fields: [
        {
          name: 'language',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'acceptingNewPatients',
      type: 'checkbox',
      label: 'Accepting New Patients',
      defaultValue: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: 'URL Slug',
      admin: {
        description: 'Used in the URL path (e.g., /providers/bria-bennie)',
      },
    },
    {
      name: 'isActive',
      type: 'checkbox',
      label: 'Active',
      defaultValue: true,
      admin: {
        description: 'Show this provider on the website',
      },
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Featured Provider',
      defaultValue: false,
    },
    {
      name: 'sortOrder',
      type: 'number',
      label: 'Sort Order',
      admin: {
        description: 'Lower numbers appear first',
      },
    },
  ],
}