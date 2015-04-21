// Setup cloudinary and export needed cloudinary functions

if (!process.env.CLOUD_NAME) {
  var cloudAPI = require("./apikey");  
}

var cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME|| cloudAPI.cloudname,
  api_key: process.env.CLOUD_KEY || cloudAPI.key,
  api_secret: process.env.CLOUD_SECRET || cloudAPI.secret
});

// To upload a file at a given path
exports.uploadFromFilePath = function(path, cb) {
  cloudinary.uploader.upload(path, function(result) {
    cb(result);
  });
};


// For uploading a file stream
exports.upload_stream = cloudinary.uploader.upload_stream;