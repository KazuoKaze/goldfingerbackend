// import { CollectionConfig } from 'payload'

// export const TrainingFormSubmissions: CollectionConfig = {
//   slug: 'training-form-submissions',
//   admin: {
//     useAsTitle: 'email',
//     defaultColumns: [
//       'email',
//       'first_name',
//       'last_name',
//       'preferred_training_program',
//       'status',
//       'submittedAt',
//     ],
//     group: 'Form Submissions',
//   },
//   access: {
//     read: () => true,
//     create: () => true,
//   },
//   fields: [
//     {
//       name: 'formType',
//       type: 'text',
//       defaultValue: 'training',
//       admin: {
//         readOnly: true,
//       },
//     },
//     {
//       name: 'first_name',
//       type: 'text',
//       required: true,
//       admin: {
//         description: 'First name of the applicant',
//       },
//     },
//     {
//       name: 'last_name',
//       type: 'text',
//       required: true,
//       admin: {
//         description: 'Last name of the applicant',
//       },
//     },
//     {
//       name: 'email',
//       type: 'email',
//       required: true,
//       admin: {
//         description: 'Email address',
//       },
//     },
//     {
//       name: 'phone',
//       type: 'text',
//       required: true,
//       admin: {
//         description: 'Phone number',
//       },
//     },
//     {
//       name: 'preferred_training_month',
//       type: 'text',
//       admin: {
//         description: 'Preferred month for training',
//       },
//     },
//     {
//       name: 'preferred_training_program',
//       type: 'select',
//       required: true,
//       options: [
//         { label: 'Foundational', value: 'Foundational' },
//         { label: 'Comprehensive', value: 'Comprehensive' },
//       ],
//       admin: {
//         description: 'Selected training program',
//       },
//     },
//     {
//       name: 'questions_or_comments',
//       type: 'textarea',
//       admin: {
//         description: 'Additional questions or comments from applicant',
//       },
//     },
//     {
//       name: 'optin_for_sms_texting',
//       type: 'checkbox',
//       defaultValue: false,
//       admin: {
//         description: 'SMS opt-in status',
//       },
//     },
//     {
//       name: 'by_completing_this_form_you_are_giving_us_permission_to_followup_by_phone_email_or_text',
//       type: 'checkbox',
//       defaultValue: false,
//       admin: {
//         description: 'Follow-up permission granted',
//       },
//     },
//     // Metadata
//     {
//       name: 'ipAddress',
//       type: 'text',
//       admin: {
//         description: 'IP address of the submission',
//         readOnly: true,
//       },
//     },
//     {
//       name: 'userAgent',
//       type: 'textarea',
//       admin: {
//         description: 'Browser user agent',
//         readOnly: true,
//       },
//     },
//     {
//       name: 'referrer',
//       type: 'text',
//       admin: {
//         description: 'Referrer URL',
//         readOnly: true,
//       },
//     },
//     {
//       name: 'submittedAt',
//       type: 'date',
//       admin: {
//         description: 'Date and time of submission',
//         date: {
//           displayFormat: 'MMM dd, yyyy h:mm a',
//         },
//         readOnly: true,
//       },
//     },
//     {
//       name: 'status',
//       type: 'select',
//       defaultValue: 'new',
//       options: [
//         { label: 'New', value: 'new' },
//         { label: 'Contacted', value: 'contacted' },
//         { label: 'Scheduled', value: 'scheduled' },
//         { label: 'Enrolled', value: 'enrolled' },
//         { label: 'Declined', value: 'declined' },
//         { label: 'Spam', value: 'spam' },
//       ],
//       admin: {
//         description: 'Current status of the application',
//       },
//     },
//     {
//       name: 'notes',
//       type: 'richText',
//       admin: {
//         description: 'Internal notes about this application',
//       },
//     },
//   ],
//   timestamps: true,
// }

import { CollectionConfig } from 'payload'

export const TrainingFormSubmissions: CollectionConfig = {
  slug: 'training-form-submissions',
  admin: {
    useAsTitle: 'email',
    defaultColumns: [
      'email',
      'first_name',
      'last_name',
      'preferred_training_program',
      'status',
      'submittedAt',
    ],
    group: 'Form Submissions',
  },
  access: {
    read: () => true,
    create: () => true,
  },
  fields: [
    {
      name: 'formType',
      type: 'text',
      defaultValue: 'training',
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'first_name',
      type: 'text',
      required: true,
      admin: {
        description: 'First name of the applicant',
      },
    },
    {
      name: 'last_name',
      type: 'text',
      required: true,
      admin: {
        description: 'Last name of the applicant',
      },
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      admin: {
        description: 'Email address',
      },
    },
    {
      name: 'phone',
      type: 'text',
      required: true,
      admin: {
        description: 'Phone number',
      },
    },
    {
      name: 'preferred_training_month',
      type: 'text',
      admin: {
        description: 'Preferred month for training',
      },
    },
    {
      name: 'preferred_training_program',
      type: 'select',
      required: true,
      options: [
        { label: 'Foundational', value: 'Foundational' },
        { label: 'Comprehensive', value: 'Comprehensive' },
      ],
      admin: {
        description: 'Selected training program',
      },
    },
    {
      name: 'questions_or_comments',
      type: 'textarea',
      admin: {
        description: 'Additional questions or comments from applicant',
      },
    },
    {
      name: 'optin_for_sms_texting',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'SMS opt-in status',
      },
    },
    {
      name: 'by_completing_this_form_you_are_giving_us_permission_to_followup_by_phone_email_or_text',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Follow-up permission granted',
      },
    },
    // Metadata
    {
      name: 'ipAddress',
      type: 'text',
      admin: {
        description: 'IP address of the submission',
        readOnly: true,
      },
    },
    {
      name: 'userAgent',
      type: 'textarea',
      admin: {
        description: 'Browser user agent',
        readOnly: true,
      },
    },
    {
      name: 'referrer',
      type: 'text',
      admin: {
        description: 'Referrer URL',
        readOnly: true,
      },
    },
    {
      name: 'submittedAt',
      type: 'date',
      admin: {
        description: 'Date and time of submission',
        date: {
          displayFormat: 'MMM dd, yyyy h:mm a',
        },
        readOnly: true,
      },
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'new',
      options: [
        { label: 'New', value: 'new' },
        { label: 'Contacted', value: 'contacted' },
        { label: 'Scheduled', value: 'scheduled' },
        { label: 'Enrolled', value: 'enrolled' },
        { label: 'Declined', value: 'declined' },
        { label: 'Spam', value: 'spam' },
      ],
      admin: {
        description: 'Current status of the application',
      },
    },
    {
      name: 'notes',
      type: 'richText',
      admin: {
        description: 'Internal notes about this application',
      },
    },
  ],
  timestamps: true,
}