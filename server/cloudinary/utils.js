/** 
 * Create a url from the cloudinary url
 * of the provided length. url must be a
 * cloudinary url containing 'upload/'
 */
exports.resizedImageURL = function(url, width) {
  var urlPieces = url.split('upload/');
  return urlPieces[0] + 'upload/w_600/' + urlPieces[1];  
}
