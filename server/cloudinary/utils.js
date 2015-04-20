exports.resizedImageURL = function(url, width) {
  var urlPieces = url.split('upload/');
  return urlPieces[0] + 'upload/w_600/' + urlPieces[1];  
}