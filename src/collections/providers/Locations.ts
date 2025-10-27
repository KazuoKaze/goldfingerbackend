// // import { CollectionConfig } from 'payload'
// // import { formatSlug } from '../utilities/formatSlug'

// // export const Locations: CollectionConfig = {
// //   slug: 'locations',
// //   admin: {
// //     useAsTitle: 'name',
// //     defaultColumns: ['name', 'city', 'state', 'phone', 'updatedAt'],
// //     group: 'Directory',
// //   },
// //   access: {
// //     read: () => true, // Public access for reading locations
// //   },
// //   fields: [
// //     {
// //       name: 'name',
// //       type: 'text',
// //       required: true,
// //       label: 'Location Name',
// //       admin: {
// //         description: 'e.g., "Clearwater", "Lady Lake / The Villages"',
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
// //           'This will be the URL path (e.g., "clearwater" becomes /locations/clearwater/)',
// //         position: 'sidebar',
// //       },
// //       hooks: {
// //         beforeValidate: [formatSlug('name')],
// //       },
// //       index: true,
// //     },
// //     {
// //       name: 'featuredImage',
// //       type: 'upload',
// //       relationTo: 'media',
// //       required: true,
// //       label: 'Featured Image',
// //       admin: {
// //         description: 'Main location image (recommended: 600x400px)',
// //       },
// //     },
// //     {
// //       name: 'imageAlt',
// //       type: 'text',
// //       label: 'Image Alt Text',
// //       admin: {
// //         description: 'Describe the image for accessibility',
// //       },
// //     },
// //     // Address Information
// //     {
// //       name: 'address',
// //       type: 'group',
// //       label: 'Address',
// //       fields: [
// //         {
// //           name: 'street',
// //           type: 'text',
// //           required: true,
// //           label: 'Street Address',
// //           admin: {
// //             description: 'e.g., "2745 Fl-580 Suite 101"',
// //           },
// //         },
// //         {
// //           name: 'city',
// //           type: 'text',
// //           required: true,
// //           label: 'City',
// //         },
// //         {
// //           name: 'state',
// //           type: 'text',
// //           required: true,
// //           label: 'State',
// //           admin: {
// //             description: 'Two letter state code (e.g., FL)',
// //           },
// //           maxLength: 2,
// //         },
// //         {
// //           name: 'zipCode',
// //           type: 'text',
// //           required: true,
// //           label: 'Zip Code',
// //         },
// //         {
// //           name: 'fullAddress',
// //           type: 'text',
// //           label: 'Full Address (Display)',
// //           admin: {
// //             description: 'Complete address as it should appear on the site',
// //           },
// //         },
// //       ],
// //     },
// //     // Contact Information
// //     {
// //       name: 'phone',
// //       type: 'text',
// //       required: true,
// //       label: 'Phone Number',
// //       admin: {
// //         description: 'Format: (XXX) XXX-XXXX',
// //       },
// //     },
// //     // Coordinates for map
// //     {
// //       name: 'coordinates',
// //       type: 'group',
// //       label: 'Map Coordinates',
// //       fields: [
// //         {
// //           name: 'latitude',
// //           type: 'number',
// //           required: true,
// //           label: 'Latitude',
// //           admin: {
// //             step: 0.000001,
// //           },
// //         },
// //         {
// //           name: 'longitude',
// //           type: 'number',
// //           required: true,
// //           label: 'Longitude',
// //           admin: {
// //             step: 0.000001,
// //           },
// //         },
// //       ],
// //     },
// //     // Business Hours
// //     {
// //       name: 'businessHours',
// //       type: 'array',
// //       label: 'Business Hours',
// //       fields: [
// //         {
// //           name: 'day',
// //           type: 'select',
// //           required: true,
// //           options: [
// //             { label: 'Monday', value: 'monday' },
// //             { label: 'Tuesday', value: 'tuesday' },
// //             { label: 'Wednesday', value: 'wednesday' },
// //             { label: 'Thursday', value: 'thursday' },
// //             { label: 'Friday', value: 'friday' },
// //             { label: 'Saturday', value: 'saturday' },
// //             { label: 'Sunday', value: 'sunday' },
// //           ],
// //         },
// //         {
// //           name: 'open',
// //           type: 'text',
// //           label: 'Opening Time',
// //           admin: {
// //             description: 'e.g., "9:00 AM"',
// //           },
// //         },
// //         {
// //           name: 'close',
// //           type: 'text',
// //           label: 'Closing Time',
// //           admin: {
// //             description: 'e.g., "5:00 PM"',
// //           },
// //         },
// //         {
// //           name: 'closed',
// //           type: 'checkbox',
// //           label: 'Closed',
// //           defaultValue: false,
// //         },
// //       ],
// //     },
// //     // Additional Details
// //     {
// //       name: 'description',
// //       type: 'textarea',
// //       label: 'Location Description',
// //       admin: {
// //         description: 'Brief description of this location',
// //       },
// //     },
// //     {
// //       name: 'featured',
// //       type: 'checkbox',
// //       label: 'Featured Location',
// //       defaultValue: false,
// //       admin: {
// //         position: 'sidebar',
// //         description: 'Show in featured locations carousel',
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
// //           label: 'Coming Soon',
// //           value: 'coming-soon',
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
// //       ],
// //     },
// //   ],
// //   hooks: {
// //     beforeChange: [
// //       ({ data }) => {
// //         // Auto-generate full address if not provided
// //         if (!data.address?.fullAddress && data.address) {
// //           data.address.fullAddress = `${data.address.street}, ${data.address.city}, ${data.address.state} ${data.address.zipCode}`
// //         }
// //         return data
// //       },
// //     ],
// //   },
// //   timestamps: true,
// // }

// import { CollectionConfig } from 'payload'

// // collections/Locations.ts
// export const Locations: CollectionConfig = {
//     slug: 'locations',
//     admin: {
//       useAsTitle: 'name',
//       defaultColumns: ['name', 'phone', 'city', 'state'],
//     },
//     fields: [
//       {
//         name: 'name',
//         type: 'text',
//         required: true,
//         label: 'Location Name',
//       },
//       {
//         name: 'slug',
//         type: 'text',
//         required: true,
//         unique: true,
//         label: 'URL Slug',
//       },
//       {
//         name: 'image',
//         type: 'upload',
//         relationTo: 'media',
//         required: true,
//         label: 'Location Image',
//       },
//       {
//         name: 'imageAlt',
//         type: 'text',
//         label: 'Image Alt Text',
//       },
//       {
//         name: 'phone',
//         type: 'text',
//         required: true,
//         label: 'Phone Number',
//       },
//       {
//         name: 'address',
//         type: 'group',
//         label: 'Address',
//         fields: [
//           {
//             name: 'street',
//             type: 'text',
//             required: true,
//             label: 'Street Address',
//           },
//           {
//             name: 'city',
//             type: 'text',
//             required: true,
//             label: 'City',
//           },
//           {
//             name: 'state',
//             type: 'text',
//             required: true,
//             label: 'State',
//           },
//           {
//             name: 'zipCode',
//             type: 'text',
//             required: true,
//             label: 'Zip Code',
//           },
//           {
//             name: 'fullAddress',
//             type: 'text',
//             label: 'Full Address (Display)',
//             admin: {
//               description: 'Auto-generated or manually entered for display',
//             },
//           },
//         ],
//       },
//       {
//         name: 'coordinates',
//         type: 'group',
//         label: 'Map Coordinates',
//         fields: [
//           {
//             name: 'latitude',
//             type: 'number',
//             required: true,
//             label: 'Latitude',
//           },
//           {
//             name: 'longitude',
//             type: 'number',
//             required: true,
//             label: 'Longitude',
//           },
//         ],
//       },
//       {
//         name: 'businessHours',
//         type: 'array',
//         label: 'Business Hours',
//         fields: [
//           {
//             name: 'day',
//             type: 'select',
//             options: [
//               { label: 'Monday', value: 'monday' },
//               { label: 'Tuesday', value: 'tuesday' },
//               { label: 'Wednesday', value: 'wednesday' },
//               { label: 'Thursday', value: 'thursday' },
//               { label: 'Friday', value: 'friday' },
//               { label: 'Saturday', value: 'saturday' },
//               { label: 'Sunday', value: 'sunday' },
//             ],
//             required: true,
//           },
//           {
//             name: 'open',
//             type: 'text',
//             label: 'Opening Time',
//           },
//           {
//             name: 'close',
//             type: 'text',
//             label: 'Closing Time',
//           },
//           {
//             name: 'closed',
//             type: 'checkbox',
//             label: 'Closed',
//             defaultValue: false,
//           },
//         ],
//       },
//       {
//         name: 'isActive',
//         type: 'checkbox',
//         label: 'Active',
//         defaultValue: true,
//       },
//       {
//         name: 'order',
//         type: 'number',
//         label: 'Display Order',
//       },
//     ],
//   };

import { CollectionConfig } from 'payload'

export const Locations: CollectionConfig = {
  slug: 'locations',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'address', 'phone'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Location Name',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Location Image',
    },
    {
      name: 'alt',
      type: 'text',
      required: true,
      label: 'Image Alt Text',
    },
    {
      name: 'address',
      type: 'text',
      required: true,
      label: 'Street Address',
    },
    {
      name: 'phone',
      type: 'text',
      required: true,
      label: 'Phone Number',
      admin: {
        placeholder: '(XXX) XXX-XXXX',
      },
    },
    {
      name: 'coordinates',
      type: 'group',
      label: 'Map Coordinates',
      fields: [
        {
          name: 'lat',
          type: 'number',
          required: true,
          label: 'Latitude',
        },
        {
          name: 'lng',
          type: 'number',
          required: true,
          label: 'Longitude',
        },
      ],
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
        },
      ],
    },
    {
      name: 'businessHours',
      type: 'array',
      label: 'Business Hours',
      fields: [
        {
          name: 'day',
          type: 'select',
          required: true,
          options: [
            { label: 'Monday', value: 'monday' },
            { label: 'Tuesday', value: 'tuesday' },
            { label: 'Wednesday', value: 'wednesday' },
            { label: 'Thursday', value: 'thursday' },
            { label: 'Friday', value: 'friday' },
            { label: 'Saturday', value: 'saturday' },
            { label: 'Sunday', value: 'sunday' },
          ],
        },
        {
          name: 'openTime',
          type: 'text',
          required: true,
          label: 'Opening Time',
          admin: {
            placeholder: '9:00 AM',
          },
        },
        {
          name: 'closeTime',
          type: 'text',
          required: true,
          label: 'Closing Time',
          admin: {
            placeholder: '5:00 PM',
          },
        },
        {
          name: 'isClosed',
          type: 'checkbox',
          label: 'Closed',
          defaultValue: false,
        },
      ],
    },
    {
      name: 'providers',
      type: 'relationship',
      relationTo: 'providers',
      hasMany: true,
      label: 'Providers at this Location',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: 'URL Slug',
      admin: {
        description: 'Used in the URL path (e.g., /locations/clearwater)',
      },
    },
    {
      name: 'isActive',
      type: 'checkbox',
      label: 'Active',
      defaultValue: true,
      admin: {
        description: 'Show this location on the website',
      },
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Featured Location',
      defaultValue: false,
    },
    
  ],
}