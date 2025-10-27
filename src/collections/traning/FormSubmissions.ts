import { CollectionConfig } from 'payload'

export const FormSubmissions: CollectionConfig = {
  slug: 'form-submissions',
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['email', 'formType', 'createdAt', 'status'],
    group: 'Form Data',
  },
  access: {
    read: () => true,
    create: () => true, // Allow public form submissions
  },
  fields: [
    {
      name: 'formType',
      type: 'select',
      required: true,
      options: [
        { label: 'Training Application', value: 'training' },
        { label: 'Contact Form', value: 'contact' },
        // Add more form types as needed
      ],
      defaultValue: 'training',
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'New', value: 'new' },
        { label: 'Reviewed', value: 'reviewed' },
        { label: 'Contacted', value: 'contacted' },
        { label: 'Completed', value: 'completed' },
      ],
      defaultValue: 'new',
      admin: {
        position: 'sidebar',
      },
    },
    // Personal Information
    {
      name: 'firstName',
      type: 'text',
      required: true,
    },
    {
      name: 'lastName',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
      required: true,
    },
    // Training Specific Fields
    {
      name: 'preferredTrainingMonth',
      type: 'text',
    },
    {
      name: 'preferredTrainingProgram',
      type: 'select',
      options: [
        { label: 'Foundational', value: 'Foundational' },
        { label: 'Comprehensive', value: 'Comprehensive' },
      ],
    },
    {
      name: 'questionsOrComments',
      type: 'textarea',
    },
    // Consent Fields
    {
      name: 'optinForSmsTexting',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'permissionToFollowUp',
      type: 'checkbox',
      required: true,
    },
    // Metadata
    {
      name: 'submittedAt',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
        position: 'sidebar',
      },
    },
    {
      name: 'ipAddress',
      type: 'text',
      admin: {
        position: 'sidebar',
        readOnly: true,
      },
    },
    {
      name: 'userAgent',
      type: 'text',
      admin: {
        position: 'sidebar',
        readOnly: true,
      },
    },
    // Store all form data as JSON for flexibility
    {
      name: 'rawFormData',
      type: 'json',
      admin: {
        description: 'Complete form submission data',
      },
    },
  ],
  timestamps: true,
  hooks: {
    beforeChange: [
      ({ data, operation }) => {
        if (operation === 'create' && !data.submittedAt) {
          data.submittedAt = new Date().toISOString()
        }
        return data
      },
    ],
  },
}
