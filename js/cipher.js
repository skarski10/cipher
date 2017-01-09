var userEntry = prompt("Enter a sentance of your choice here");
var capitalize = function(userEntry){
var splitArr = userEntry.split('');
var firstLetter = splitArr[0].toUpperCase();
var lastLetter = splitArr[splitArr.length-1].toUpperCase();
return (firstLetter + lastLetter);
//console.log(firstLetter + lastLetter);
};

//capitalize(userEntry);

var reverse = function(userEntry){
var splitArr = userEntry.split('');
var firstLetter = splitArr[0];//.toUpperCase();
var lastLetter = splitArr[splitArr.length-1];//.toUpperCase();
//console.log(lastLetter + firstLetter);
return (lastLetter + firstLetter);
//console.log(firstLetter + lastLetter);
};

//reverse(userEntry);

var combo = function (functionEntry){
    //console.log(reverse(capitalize(functionEntry)));
    //return reverse(capitalize(userEntry));
    return (userEntry.concat(reverse(capitalize(functionEntry))));
};

//combo(userEntry);

var count = function (userEntry) {
  var splitArr = userEntry.split('');
  //console.log(splitArr);
  var number = Math.round(userEntry.length/2);
  //console.log(number);
  var letter = splitArr[number];
  return (combo(userEntry).replace(/^/, letter));
}

//count(userEntry);

var backwards = function() {
  var splitArr = count(userEntry).split('');
  return ((splitArr.reverse()).join(''));
}

backwards(userEntry);
