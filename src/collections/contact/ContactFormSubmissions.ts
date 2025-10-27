import { CollectionConfig } from 'payload'

export const ContactFormSubmissions: CollectionConfig = {
  slug: 'contact-form-submissions',
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['email', 'firstName', 'lastName', 'location', 'service', 'createdAt'],
    group: 'Form Submissions',
  },
  access: {
    // Only authenticated users can read form submissions
    read: ({ req: { user } }) => {
      if (user) {
        return true
      }
      return false
    },
    // Public can create (submit forms)
    create: () => true,
    // Only admins can update or delete
    update: ({ req: { user } }) => {
      if (user?.role === 'admin') {
        return true
      }
      return false
    },
    delete: ({ req: { user } }) => {
      if (user?.role === 'admin') {
        return true
      }
      return false
    },
  },
  fields: [
    {
      name: 'firstName',
      type: 'text',
      required: true,
      admin: {
        description: 'First name of the person submitting the form',
      },
    },
    {
      name: 'lastName',
      type: 'text',
      required: true,
      admin: {
        description: 'Last name of the person submitting the form',
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
      name: 'email',
      type: 'email',
      required: true,
      admin: {
        description: 'Email address',
      },
    },
    {
      name: 'location',
      type: 'text',
      required: true,
      admin: {
        description: 'Selected location',
      },
    },
    {
      name: 'locationName',
      type: 'text',
      admin: {
        description: 'Location name (if different from location ID)',
      },
    },
    {
      name: 'service',
      type: 'text',
      required: true,
      admin: {
        description: 'Service they are interested in',
      },
    },
    {
      name: 'comments',
      type: 'textarea',
      admin: {
        description: 'Comments or questions from the user',
      },
    },
    {
      name: 'optInSMS',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Whether user opted in for SMS texting',
      },
    },
    {
      name: 'consentFollowUp',
      type: 'checkbox',
      defaultValue: false,
      required: true,
      admin: {
        description: 'User gave permission for follow-up',
      },
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'new',
      options: [
        {
          label: 'New',
          value: 'new',
        },
        {
          label: 'In Progress',
          value: 'in-progress',
        },
        {
          label: 'Contacted',
          value: 'contacted',
        },
        {
          label: 'Converted',
          value: 'converted',
        },
        {
          label: 'Closed',
          value: 'closed',
        },
        {
          label: 'Spam',
          value: 'spam',
        },
      ],
      admin: {
        description: 'Status of this submission',
      },
    },
    {
      name: 'assignedTo',
      type: 'relationship',
      relationTo: 'users',
      admin: {
        description: 'Assign this submission to a team member',
      },
    },
    {
      name: 'notes',
      type: 'textarea',
      admin: {
        description: 'Internal notes about this submission',
      },
    },
    {
      name: 'ipAddress',
      type: 'text',
      admin: {
        description: 'IP address of the submitter',
        readOnly: true,
      },
    },
    {
      name: 'userAgent',
      type: 'text',
      admin: {
        description: 'Browser user agent',
        readOnly: true,
      },
    },
    {
      name: 'referrer',
      type: 'text',
      admin: {
        description: 'Page referrer URL',
        readOnly: true,
      },
    },
    {
      name: 'source',
      type: 'text',
      defaultValue: 'contact-form',
      admin: {
        description: 'Source of the submission',
        readOnly: true,
      },
    },
  ],
  hooks: {
    beforeChange: [
      ({ req, data }) => {
        // Automatically capture IP address and user agent
        if (req?.headers) {
          data.ipAddress = req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || req.ip
          data.userAgent = req.headers['user-agent']
          data.referrer = req.headers['referer'] || req.headers['referrer']
        }
        return data
      },
    ],
    afterChange: [
      async ({ doc, operation }) => {
        // Send notification email to admin when new form is submitted
        if (operation === 'create') {
          // You can add email notification logic here
          console.log('New form submission received:', doc)
          // Example: await sendAdminNotification(doc);
        }
      },
    ],
  },
  timestamps: true,
}
