import { CollectionConfig } from 'payload'

export const FormSubmissions: CollectionConfig = {
  slug: 'form-submissions',
  labels: {
    singular: 'Form Submission',
    plural: 'Form Submissions',
  },
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['email', 'first_name', 'last_name', 'phone', 'createdAt'],
    description: 'Contact form submissions from the website',
  },
  access: {
    read: () => true,
    create: () => true,
  },
  fields: [
    {
      name: 'formType',
      type: 'text',
      label: 'Form Type',
      defaultValue: 'contact',
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'first_name',
      type: 'text',
      label: 'First Name',
      required: true,
    },
    {
      name: 'last_name',
      type: 'text',
      label: 'Last Name',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      label: 'Email',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Phone',
      required: true,
    },
    {
      name: 'location_id',
      type: 'text',
      label: 'Location ID',
    },
    {
      name: 'location_name',
      type: 'text',
      label: 'Location Name',
    },
    {
      name: 'what_service_are_you_interested_in',
      type: 'select',
      label: 'Service Interest',
      options: [
        { label: 'Liposuction', value: 'Liposuction' },
        { label: 'BOTOX', value: 'BOTOX' },
        { label: 'Plastic Surgery', value: 'Plastic Surgery' },
        { label: 'Micro-channeling', value: 'Micro-channeling' },
        { label: 'Med Spa', value: 'Med Spa' },
        { label: 'Skin Care', value: 'Skin Care' },
        { label: 'Dermal Fillers', value: 'Dermal Fillers' },
        { label: 'Face Lift', value: 'Face Lift' },
        { label: 'Weight Loss Injections', value: 'Weight Loss Injections' },
        { label: 'I Have a Question', value: 'I Have a Question' },
      ],
    },
    {
      name: 'commentsquestions',
      type: 'textarea',
      label: 'Comments/Questions',
    },
    {
      name: 'optin_for_sms_texting',
      type: 'checkbox',
      label: 'Opted in for SMS',
      defaultValue: false,
    },
    {
      name: 'by_completing_this_form_you_are_giving_us_permission_to_followup_by_phone_email_or_text',
      type: 'checkbox',
      label: 'Permission to Follow Up',
      defaultValue: false,
    },
    {
      name: 'status',
      type: 'select',
      label: 'Status',
      options: [
        { label: 'New', value: 'new' },
        { label: 'Contacted', value: 'contacted' },
        { label: 'In Progress', value: 'in_progress' },
        { label: 'Completed', value: 'completed' },
        { label: 'Archived', value: 'archived' },
      ],
      defaultValue: 'new',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'notes',
      type: 'textarea',
      label: 'Internal Notes',
      admin: {
        description: 'Add any notes about this submission',
      },
    },
    {
      name: 'ipAddress',
      type: 'text',
      label: 'IP Address',
      admin: {
        readOnly: true,
        position: 'sidebar',
      },
    },
    {
      name: 'userAgent',
      type: 'text',
      label: 'User Agent',
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'referrer',
      type: 'text',
      label: 'Referrer URL',
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'submittedAt',
      type: 'date',
      label: 'Submission Date',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
        readOnly: true,
        position: 'sidebar',
      },
      defaultValue: () => new Date().toISOString(),
    },
  ],
  timestamps: true,
}
