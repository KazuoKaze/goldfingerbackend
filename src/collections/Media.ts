


// // // collections/Media.ts
// // import { CollectionConfig } from "payload";
// // import { v2 as cloudinary } from "cloudinary";
// // import { Readable } from "stream";

// // cloudinary.config({
// //   cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
// //   api_key: process.env.CLOUDINARY_API_KEY!,
// //   api_secret: process.env.CLOUDINARY_API_SECRET!,
// // });

// // export const Media: CollectionConfig = {
// //   slug: 'media',
// //   access: {
// //     read: () => true, // Allow public read access
// //   },
// //   upload: true,
// //   admin: {
// //     useAsTitle: 'original_filename',
// //   },
// //   fields: [
// //     {
// //       name: 'cloudinary_url',
// //       type: 'text',
// //       admin: {
// //         readOnly: true,
// //         description: 'Cloudinary URL',
// //       },
// //     },
// //     {
// //       name: 'public_id',
// //       type: 'text',
// //       admin: {
// //         readOnly: true,
// //       },
// //     },
// //     {
// //       name: 'resource_type',
// //       type: 'text',
// //       admin: {
// //         readOnly: true,
// //       },
// //     },
// //     {
// //       name: 'original_filename',
// //       type: 'text',
// //       admin: {
// //         readOnly: true,
// //       },
// //     },
// //   ],
// //   hooks: {
// //     beforeChange: [
// //       async ({ data, req }) => {
// //         const file = req.file

// //         if (file && file.data && !data.cloudinary_url) {
// //           try {
// //             console.log('Uploading to Cloudinary...')

// //             // Upload buffer to Cloudinary using upload_stream
// //             const uploadResult = await new Promise<any>((resolve, reject) => {
// //               const uploadStream = cloudinary.uploader.upload_stream(
// //                 {
// //                   folder: 'payload-media',
// //                   resource_type: 'auto',
// //                   public_id: data.filename?.replace(/\.[^/.]+$/, ''), // Remove extension
// //                 },
// //                 (error, result) => {
// //                   if (error) reject(error)
// //                   else resolve(result)
// //                 },
// //               )

// //               // Convert buffer to stream and pipe to Cloudinary
// //               const bufferStream = Readable.from(file.data)
// //               bufferStream.pipe(uploadStream)
// //             })

// //             // Set Cloudinary data
// //             data.cloudinary_url = uploadResult.secure_url
// //             data.public_id = uploadResult.public_id
// //             data.resource_type = uploadResult.resource_type
// //             data.original_filename = file.name

// //             console.log('Successfully uploaded to Cloudinary:', uploadResult.secure_url)
// //           } catch (err) {
// //             console.error('Cloudinary upload error:', err)
// //           }
// //         }

// //         return data
// //       },
// //     ],
// //     afterDelete: [
// //       async ({ doc }) => {
// //         // Clean up from Cloudinary when deleted
// //         if (doc.public_id) {
// //           try {
// //             await cloudinary.uploader.destroy(doc.public_id)
// //             console.log('Deleted from Cloudinary:', doc.public_id)
// //           } catch (err) {
// //             console.error('Cloudinary deletion error:', err)
// //           }
// //         }
// //       },
// //     ],
// //   },
// // }


// // collections/Media.ts
// import { CollectionConfig } from "payload";
// import { v2 as cloudinary } from "cloudinary";
// import { Readable } from "stream";

// // Configure Cloudinary
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
//   admin: {
//     useAsTitle: 'original_filename',
//   },
//   fields: [
//     {
//       name: 'cloudinary_url',
//       type: 'text',
//       admin: {
//         readOnly: true,
//         description: 'Cloudinary URL',
//       },
//     },
//     {
//       name: 'public_id',
//       type: 'text',
//       admin: {
//         readOnly: true,
//       },
//     },
//     {
//       name: 'resource_type',
//       type: 'text',
//       admin: {
//         readOnly: true,
//       },
//     },
//     {
//       name: 'original_filename',
//       type: 'text',
//       admin: {
//         readOnly: true,
//       },
//     },
//   ],
//   hooks: {
//     beforeChange: [
//       async ({ data, req }) => {
//         const file = req.file;

//         // Only upload if file exists and no cloudinary_url yet
//         if (file && file.data && !data.cloudinary_url) {
//           try {
//             // Verify environment variables
//             if (!process.env.CLOUDINARY_CLOUD_NAME || 
//                 !process.env.CLOUDINARY_API_KEY || 
//                 !process.env.CLOUDINARY_API_SECRET) {
//               throw new Error('Cloudinary environment variables are not configured');
//             }

//             console.log('Starting Cloudinary upload...', {
//               filename: file.name,
//               size: file.data.length,
//               mimetype: file.mimetype,
//             });

//             // Upload to Cloudinary using upload_stream
//             const uploadResult = await new Promise<any>((resolve, reject) => {
//               const uploadStream = cloudinary.uploader.upload_stream(
//                 {
//                   folder: 'payload-media',
//                   resource_type: 'auto',
//                   public_id: file.name.replace(/\.[^/.]+$/, ''), // Remove file extension
//                   use_filename: true,
//                   unique_filename: true,
//                 },
//                 (error, result) => {
//                   if (error) {
//                     console.error('Cloudinary upload_stream error:', error);
//                     reject(error);
//                   } else {
//                     console.log('Cloudinary upload successful');
//                     resolve(result);
//                   }
//                 }
//               );

//               // Handle stream errors
//               uploadStream.on('error', (err) => {
//                 console.error('Upload stream error:', err);
//                 reject(err);
//               });

//               // Convert buffer to stream and pipe to Cloudinary
//               const bufferStream = Readable.from(file.data);
              
//               bufferStream.on('error', (err) => {
//                 console.error('Buffer stream error:', err);
//                 reject(err);
//               });

//               bufferStream.pipe(uploadStream);
//             });

//             // Save Cloudinary metadata to document
//             data.cloudinary_url = uploadResult.secure_url;
//             data.public_id = uploadResult.public_id;
//             data.resource_type = uploadResult.resource_type;
//             data.original_filename = file.name;

//             console.log('Media uploaded successfully:', {
//               url: uploadResult.secure_url,
//               public_id: uploadResult.public_id,
//             });

//           } catch (error) {
//             const errorMessage = error instanceof Error ? error.message : 'Unknown error';
//             console.error('Cloudinary upload failed:', {
//               error: errorMessage,
//               stack: error instanceof Error ? error.stack : undefined,
//             });
            
//             // Throw error to prevent document creation without cloudinary URL
//             throw new Error(`Failed to upload to Cloudinary: ${errorMessage}`);
//           }
//         }

//         return data;
//       },
//     ],
//     afterDelete: [
//       async ({ doc }) => {
//         // Clean up from Cloudinary when media is deleted
//         if (doc.public_id) {
//           try {
//             const result = await cloudinary.uploader.destroy(doc.public_id, {
//               resource_type: doc.resource_type || 'image',
//             });
            
//             console.log('Deleted from Cloudinary:', {
//               public_id: doc.public_id,
//               result: result.result,
//             });
//           } catch (error) {
//             console.error('Cloudinary deletion error:', {
//               public_id: doc.public_id,
//               error: error instanceof Error ? error.message : 'Unknown error',
//             });
//             // Don't throw - we still want the document deleted from DB
//           }
//         }
//       },
//     ],
//   },
// };



// src/collections/Media.ts
import { CollectionConfig } from "payload";
import { uploadToCloudinary, cloudinary } from "../utils/cloudinary";

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  upload: {
    staticDir: 'media',
    mimeTypes: ['image/*', 'video/*', 'application/pdf'],
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        position: 'centre',
      },
      {
        name: 'card',
        width: 768,
        height: 1024,
        position: 'centre',
      },
    ],
    adminThumbnail: ({ doc }) => {
      return (doc as any).cloudinary_url || null;
    },
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
      admin: {
        readOnly: true,
        description: 'Cloudinary URL - use this in your frontend',
      },
    },
    {
      name: 'public_id',
      type: 'text',
      admin: {
        readOnly: true,
      },
    },
  ],
  hooks: {
    afterChange: [
      async ({ doc, req, operation }) => {
        // Only process NEW uploads that don't have cloudinary_url yet
        if (operation === 'create' && doc.filename && !doc.cloudinary_url) {
          // Use setImmediate to process in background
          setImmediate(async () => {
            try {
              console.log('🔄 Processing upload for:', doc.filename)

              const file = (req as any).files?.file || req.file

              if (file && file.data) {
                console.log('📁 Uploading to Cloudinary...')

                const result = await uploadToCloudinary(file.data, doc.filename)

                console.log('✅ Upload successful:', result.secure_url)

                // Update database directly
                try {
                  const collection = req.payload.db.collections['media'];
                  
                  if (collection) {
                    await collection.findByIdAndUpdate(
                      doc.id,
                      {
                        cloudinary_url: result.secure_url,
                        public_id: result.public_id,
                      },
                      { new: true }
                    );
                    console.log('✅ Database updated successfully')
                  }
                } catch (updateError) {
                  console.error('❌ Database update failed:', updateError)
                  // Fallback: try using payload API
                  try {
                    await req.payload.update({
                      collection: 'media',
                      id: doc.id,
                      data: {
                        cloudinary_url: result.secure_url,
                        public_id: result.public_id,
                      },
                      overrideAccess: true,
                    });
                    console.log('✅ Fallback update successful')
                  } catch (fallbackError) {
                    console.error('❌ Fallback update also failed:', fallbackError)
                  }
                }
              }
            } catch (error) {
              console.error('❌ Cloudinary upload error:', error)
            }
          });
        }
        
        return doc;
      },
    ],
    afterRead: [
      async ({ doc }) => {
        // CRITICAL: Serve ALL images from Cloudinary if cloudinary_url exists
        // This protects existing images and serves new ones correctly
        if (doc.cloudinary_url) {
          doc.url = doc.cloudinary_url;
          doc.thumbnailURL = doc.cloudinary_url;
        }
        return doc;
      },
    ],
    afterDelete: [
      async ({ doc }) => {
        // Only delete from Cloudinary if public_id exists
        if (doc.public_id) {
          try {
            await cloudinary.uploader.destroy(doc.public_id);
            console.log('🗑️ Deleted from Cloudinary:', doc.public_id);
          } catch (error) {
            console.error('❌ Cloudinary delete error:', error);
          }
        }
      },
    ],
  },
}