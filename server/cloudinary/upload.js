var cloudAPI = require("./apikey");
var cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: cloudAPI.cloudname,
  api_key: cloudAPI.key,
  api_secret: cloudAPI.secret
});

exports.uploadFromFilePath = function(path, cb) {
  cloudinary.uploader.upload(path, function(result) {
    cb(result);
  });
};

exports.upload_stream = cloudinary.uploader.upload_stream;