//Initializing the cloudinary service
const cloudinary = require('cloudinary').v2; 
require('dotenv').config(); 



    // Configuration
    cloudinary.config({ 
        cloud_name: 'dw8utzlxe', 
        api_key: process.env.CLOUDINARY_KEY, 
        api_secret: process.env.CLOUDINARY_SECRET 
    });
    
    // Upload an image
    const uploadImage = async (localFileStorage) => {
        try {
          if (!localFileStorage) return null;
          const response = await cloudinary.uploader.upload(localFileStorage, {
            resource_type: "auto",
          });
    
          console.log(response.url);
          console.log(response.url);
          
          return response.url
        } catch (error) {
    
            fs.unlinkSync(localFileStorage);
            return null;
        }
      };

module.exports = uploadImage;
