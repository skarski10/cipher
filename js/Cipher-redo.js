var userSent = prompt("Type a sentence");
var first = userSent.search(/^[a-z]/i);
var firstLetter = userSent.charAt(first).toUpperCase();
//console.log(firstLetter);

var last = userSent.search(/[a-z]$/i);
var lastLetter = userSent.charAt(last).toUpperCase();
//console.log (lastLetter);

var edited = userSent + firstLetter + lastLetter;

//console.log(edited);

var reverse = function(){
  return userSent + lastLetter + firstLetter;
}
