const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
require("dotenv").config()
console.log("Cloudinary Config:");
console.log("cloud_name:", process.env.CLOUD_NAME);
console.log("api_key:", process.env.API_KEY);
console.log("api_secret:", process.env.API_SECRET);


cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key:process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "wonderlust", // Cloudinary folder name
    allowed_formats: ["jpg", "jpeg", "png", "webp"]
  }
});

module.exports = { cloudinary, storage };
