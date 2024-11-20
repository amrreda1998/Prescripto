import { v2 as cloudinary } from 'cloudinary';

const configureCloudinary = () => {
  cloudinary.config({
    cloud_name: process.env.ClOUDINARY_KEY_NAME,
    api_key: process.env.ClOUDINARY_API_KEY,
    api_secret: process.env.ClOUDINARY_API_SECRET,
  });
};

export const uploadImage = async (filePath) => {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder: 'Prescripto/doctors',
      use_filename: true, // Use the original file name
      unique_filename: false, // Avoid adding a unique suffix to the file name
    });
    return result;
  } catch (error) {
    console.error('Error uploading to Cloudinary:', error);
  }
};

export default configureCloudinary;
