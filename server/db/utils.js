module.exports = {
    sanitize : function(str) {
        console.log(str.replace("'","''"))
        return str.replace(/'/g,"''");
    }
    
}