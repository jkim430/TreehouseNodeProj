//Print message
function printMessage(username, badgeCount, points) {
  var message = username+" has "+badgeCount+" total badge(s) and "+points+" points in JavaScript";
  console.log(message);
}

//Print error messages
function printError(e) {
  console.error(e.message);
}

module.exports.printMessage = printMessage;
module.exports.printError = printError;