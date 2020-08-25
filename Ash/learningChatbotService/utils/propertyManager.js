const PropertiesReader = require('properties-reader');
const prop = PropertiesReader('errorcodes.properties');
/*gets property from path/to/app.properties
You can also export this function using module.exports*/
module.exports.getProperty = (pty) => {return prop.get(pty);}
