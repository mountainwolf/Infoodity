/* 
 * Sanitize input to postgresql, only needs
 * to replace each single quote with two single quotes.
 */
module.exports = {
    sanitize : function(str) {
        console.log(str.replace("'","''"))
        return str.replace(/'/g,"''");
    }
    
}
