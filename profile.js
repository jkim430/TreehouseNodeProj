//We need a simple way to look at a user's badge count and JS points
//Use node.js to connect to treehouse's API to get profile info to print out

var http = require('http');
var printer = require('./printer');

function get(username) {
  //Connect to API URL (http://teamtreehouse.com/username.json)
  var request = http.get("http://teamtreehouse.com/"+username+".json", function(response) {
    var body = '';
    //Read data
    response.on('data', function (chunk) {
      body+=chunk;
    });
    response.on('end', function () {
      if (response.statusCode === 200) {
        try {
          //Parse data
          var profile = JSON.parse(body);
          //Print data
          printer.printMessage(username, profile.badges.length, profile.points.JavaScript);
        } catch(e) {
          //Parse Error
          printer.printError(e);
        }
      } else {
        //Status Code Error
        printer.printError({message: "There was an error getting the profile for "+username+". ("+http.STATUS_CODES[response.statusCode]+")"});
      }
    });
  });
  
  //Connection Error
  request.on('error', printer.printError);
}

module.exports.get = get;