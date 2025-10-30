


// // // // collections/Media.ts
// // // import { CollectionConfig } from "payload";
// // // import { v2 as cloudinary } from "cloudinary";
// // // import { Readable } from "stream";

// // // cloudinary.config({
// // //   cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
// // //   api_key: process.env.CLOUDINARY_API_KEY!,
// // //   api_secret: process.env.CLOUDINARY_API_SECRET!,
// // // });

// // // export const Media: CollectionConfig = {
// // //   slug: 'media',
// // //   access: {
// // //     read: () => true, // Allow public read access
// // //   },
// // //   upload: true,
// // //   admin: {
// // //     useAsTitle: 'original_filename',
// // //   },
// // //   fields: [
// // //     {
// // //       name: 'cloudinary_url',
// // //       type: 'text',
// // //       admin: {
// // //         readOnly: true,
// // //         description: 'Cloudinary URL',
// // //       },
// // //     },
// // //     {
// // //       name: 'public_id',
// // //       type: 'text',
// // //       admin: {
// // //         readOnly: true,
// // //       },
// // //     },
// // //     {
// // //       name: 'resource_type',
// // //       type: 'text',
// // //       admin: {
// // //         readOnly: true,
// // //       },
// // //     },
// // //     {
// // //       name: 'original_filename',
// // //       type: 'text',
// // //       admin: {
// // //         readOnly: true,
// // //       },
// // //     },
// // //   ],
// // //   hooks: {
// // //     beforeChange: [
// // //       async ({ data, req }) => {
// // //         const file = req.file

// // //         if (file && file.data && !data.cloudinary_url) {
// // //           try {
// // //             console.log('Uploading to Cloudinary...')

// // //             // Upload buffer to Cloudinary using upload_stream
// // //             const uploadResult = await new Promise<any>((resolve, reject) => {
// // //               const uploadStream = cloudinary.uploader.upload_stream(
// // //                 {
// // //                   folder: 'payload-media',
// // //                   resource_type: 'auto',
// // //                   public_id: data.filename?.replace(/\.[^/.]+$/, ''), // Remove extension
// // //                 },
// // //                 (error, result) => {
// // //                   if (error) reject(error)
// // //                   else resolve(result)
// // //                 },
// // //               )

// // //               // Convert buffer to stream and pipe to Cloudinary
// // //               const bufferStream = Readable.from(file.data)
// // //               bufferStream.pipe(uploadStream)
// // //             })

// // //             // Set Cloudinary data
// // //             data.cloudinary_url = uploadResult.secure_url
// // //             data.public_id = uploadResult.public_id
// // //             data.resource_type = uploadResult.resource_type
// // //             data.original_filename = file.name

// // //             console.log('Successfully uploaded to Cloudinary:', uploadResult.secure_url)
// // //           } catch (err) {
// // //             console.error('Cloudinary upload error:', err)
// // //           }
// // //         }

// // //         return data
// // //       },
// // //     ],
// // //     afterDelete: [
// // //       async ({ doc }) => {
// // //         // Clean up from Cloudinary when deleted
// // //         if (doc.public_id) {
// // //           try {
// // //             await cloudinary.uploader.destroy(doc.public_id)
// // //             console.log('Deleted from Cloudinary:', doc.public_id)
// // //           } catch (err) {
// // //             console.error('Cloudinary deletion error:', err)
// // //           }
// // //         }
// // //       },
// // //     ],
// // //   },
// // // }


// // // collections/Media.ts
// // import { CollectionConfig } from "payload";
// // import { v2 as cloudinary } from "cloudinary";

// // cloudinary.config({
// //   cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
// //   api_key: process.env.CLOUDINARY_API_KEY!,
// //   api_secret: process.env.CLOUDINARY_API_SECRET!,
// // });

// // export const Media: CollectionConfig = {
// //   slug: 'media',
// //   access: {
// //     read: () => true,
// //   },
// //   upload: {
// //     staticDir: '/tmp',
// //     mimeTypes: ['image/*', 'video/*', 'application/pdf'],
// //     disableLocalStorage: true, // Don't store files locally
// //   },
// //   fields: [
// //     {
// //       name: 'alt',
// //       type: 'text',
// //       label: 'Alt Text',
// //     },
// //     {
// //       name: 'cloudinary_url',
// //       type: 'text',
// //       admin: {
// //         readOnly: true,
// //         description: 'Cloudinary URL - use this in your frontend',
// //       },
// //     },
// //     {
// //       name: 'public_id',
// //       type: 'text',
// //       admin: {
// //         readOnly: true,
// //       },
// //     },
// //   ],
// //   hooks: {
// //     beforeChange: [
// //       async ({ data, req }) => {
// //         if (req.file && !data.cloudinary_url) {
// //           try {
// //             console.log('Starting Cloudinary upload...');
// //             console.log('File info:', {
// //               name: req.file.name,
// //               size: req.file.size,
// //               mimetype: req.file.mimetype
// //             });

// //             // Convert buffer to base64 data URI
// //             const b64 = Buffer.from(req.file.data).toString('base64');
// //             const dataURI = `data:${req.file.mimetype};base64,${b64}`;

// //             // Upload to Cloudinary
// //             const uploadResult = await cloudinary.uploader.upload(dataURI, {
// //               folder: 'payload-media',
// //               resource_type: 'auto',
// //             });

// //             console.log('Cloudinary upload successful:', uploadResult.secure_url);

// //             // Update data with Cloudinary info
// //             data.cloudinary_url = uploadResult.secure_url;
// //             data.public_id = uploadResult.public_id;
            
// //             // These are required by Payload
// //             data.url = uploadResult.secure_url;
// //             data.thumbnailURL = uploadResult.secure_url;
// //             data.filename = req.file.name;
// //             data.mimeType = req.file.mimetype;
// //             data.filesize = req.file.size;
// //             data.width = uploadResult.width;
// //             data.height = uploadResult.height;

// //           } catch (err) {
// //             console.error('Cloudinary upload failed:', err);
// //             throw new Error(`Failed to upload to Cloudinary: ${err.message}`);
// //           }
// //         }
// //         return data;
// //       },
// //     ],
// //     afterRead: [
// //       async ({ doc }) => {
// //         // Serve images from Cloudinary instead of local storage
// //         if (doc.cloudinary_url) {
// //           doc.url = doc.cloudinary_url;
// //           doc.thumbnailURL = doc.cloudinary_url;
// //         }
// //         return doc;
// //       },
// //     ],
// //     afterDelete: [
// //       async ({ doc }) => {
// //         if (doc.public_id) {
// //           try {
// //             await cloudinary.uploader.destroy(doc.public_id);
// //             console.log('Deleted from Cloudinary:', doc.public_id);
// //           } catch (err) {
// //             console.error('Cloudinary deletion error:', err);
// //           }
// //         }
// //       },
// //     ],
// //   },
// // }


// // collections/Media.ts
// import { CollectionConfig } from "payload";
// import { v2 as cloudinary } from "cloudinary";

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
//   api_key: process.env.CLOUDINARY_API_KEY!,
//   api_secret: process.env.CLOUDINARY_API_SECRET!,
// });

// export const Media: CollectionConfig = {
//   slug: 'media',
//   access: {
//     read: () => true,
//   },
//   upload: true,
//   fields: [
//     {
//       name: 'alt',
//       type: 'text',
//       label: 'Alt Text',
//     },
//     {
//       name: 'cloudinary_url',
//       type: 'text',
//       admin: {
//         readOnly: true,
//         description: 'Cloudinary URL - use this in your frontend',
//       },
//     },
//     {
//       name: 'public_id',
//       type: 'text',
//       admin: {
//         readOnly: true,
//       },
//     },
//   ],
//   hooks: {
//     beforeValidate: [
//       async ({ data, req, operation }) => {
//         if (operation === 'create' && req.file) {
//           // Set required fields before validation
//           data.filename = req.file.name;
//           data.mimeType = req.file.mimetype;
//           data.filesize = req.file.size;
          
//           try {
//             console.log('Uploading to Cloudinary:', req.file.name);
            
//             // Convert buffer to base64
//             const b64 = Buffer.from(req.file.data).toString('base64');
//             const dataURI = `data:${req.file.mimetype};base64,${b64}`;

//             // Upload to Cloudinary
//             const result = await cloudinary.uploader.upload(dataURI, {
//               folder: 'payload-media',
//               resource_type: 'auto',
//             });

//             console.log('Upload successful:', result.secure_url);

//             // Set Cloudinary fields
//             data.cloudinary_url = result.secure_url;
//             data.public_id = result.public_id;
//             data.url = result.secure_url;
            
//             // Set dimensions if image
//             if (result.width) data.width = result.width;
//             if (result.height) data.height = result.height;

//           } catch (error) {
//             console.error('Cloudinary upload error:', error);
//             throw new Error('Failed to upload image to Cloudinary');
//           }
//         }
//         return data;
//       },
//     ],
//     afterRead: [
//       async ({ doc }) => {
//         // Always serve from Cloudinary
//         if (doc.cloudinary_url) {
//           doc.url = doc.cloudinary_url;
//         }
//         return doc;
//       },
//     ],
//     afterDelete: [
//       async ({ doc }) => {
//         // Delete from Cloudinary
//         if (doc.public_id) {
//           try {
//             await cloudinary.uploader.destroy(doc.public_id);
//             console.log('Deleted from Cloudinary:', doc.public_id);
//           } catch (error) {
//             console.error('Cloudinary delete error:', error);
//           }
//         }
//       },
//     ],
//   },
// }



// collections/Media.ts
import { CollectionConfig } from "payload";
import { v2 as cloudinary } from "cloudinary";

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  upload: {
    disableLocalStorage: true,
    mimeTypes: ['image/*'],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      label: 'Alt Text',
    },
    {
      name: 'cloudinary_url',
      type: 'text',
      required: false,
      admin: {
        readOnly: true,
        description: 'Cloudinary URL',
      },
    },
    {
      name: 'public_id',
      type: 'text',
      required: false,
      admin: {
        readOnly: true,
      },
    },
  ],
  hooks: {
    beforeChange: [
      async ({ data, req, operation }) => {
        // Only run on create operations with files
        if (operation !== 'create' || !req.file) {
          return data;
        }

        try {
          console.log('=== CLOUDINARY UPLOAD START ===');
          console.log('File name:', req.file.name);
          console.log('File size:', req.file.size);
          console.log('File type:', req.file.mimetype);
          console.log('Has file data:', !!req.file.data);
          console.log('Cloudinary config:', {
            cloud_name: !!process.env.CLOUDINARY_CLOUD_NAME,
            api_key: !!process.env.CLOUDINARY_API_KEY,
            api_secret: !!process.env.CLOUDINARY_API_SECRET,
          });

          // Validate file data exists
          if (!req.file.data) {
            throw new Error('No file data found');
          }

          // Convert to base64
          const b64 = Buffer.from(req.file.data).toString('base64');
          const dataURI = `data:${req.file.mimetype};base64,${b64}`;

          console.log('Uploading to Cloudinary...');

          // Upload to Cloudinary with timeout
          const uploadPromise = cloudinary.uploader.upload(dataURI, {
            folder: 'payload-media',
            resource_type: 'auto',
            timeout: 60000,
          });

          const result = await Promise.race([
            uploadPromise,
            new Promise((_, reject) => 
              setTimeout(() => reject(new Error('Upload timeout')), 30000)
            )
          ]);

          console.log('Upload successful!');
          console.log('URL:', result.secure_url);
          console.log('Public ID:', result.public_id);

          // Set all required fields
          data.filename = req.file.name;
          data.mimeType = req.file.mimetype;
          data.filesize = req.file.size;
          data.cloudinary_url = result.secure_url;
          data.public_id = result.public_id;
          data.url = result.secure_url;

          if (result.width) data.width = result.width;
          if (result.height) data.height = result.height;

          console.log('=== CLOUDINARY UPLOAD END ===');
          
          return data;

        } catch (error) {
          console.error('=== CLOUDINARY UPLOAD ERROR ===');
          console.error('Error:', error);
          console.error('Error message:', error.message);
          console.error('Error stack:', error.stack);
          
          // Return a more helpful error
          throw new Error(`Cloudinary upload failed: ${error.message}`);
        }
      },
    ],
    afterRead: [
      async ({ doc }) => {
        if (doc.cloudinary_url) {
          doc.url = doc.cloudinary_url;
        }
        return doc;
      },
    ],
    afterDelete: [
      async ({ doc }) => {
        if (doc.public_id) {
          try {
            await cloudinary.uploader.destroy(doc.public_id);
            console.log('Deleted from Cloudinary:', doc.public_id);
          } catch (error) {
            console.error('Delete error:', error);
          }
        }
      },
    ],
  },
}