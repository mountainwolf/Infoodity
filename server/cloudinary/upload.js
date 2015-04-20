if (!process.env.CLOUD_NAME) {
  var cloudAPI = require("./apikey");  
}

var cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME|| cloudAPI.cloudname,
  api_key: process.env.CLOUD_KEY || cloudAPI.key,
  api_secret: process.env.CLOUD_SECRET || cloudAPI.secret
});

exports.uploadFromFilePath = function(path, cb) {
  cloudinary.uploader.upload(path, function(result) {
    cb(result);
  });
};

exports.upload_stream = cloudinary.uploader.upload_stream;