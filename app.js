var profile = require('./profile.js');
process.argv.slice(2).forEach(profile.get);