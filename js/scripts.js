// Business logic
var isVowel = function(char){
  var result;
  char = char.toLowerCase();
    if(char == "a" || char == "e" || char == "i" || char == "o" || char == "u" ) {
        result = true;
    }
    else{
        result = false;
    }
  return result;
}




var translator = function(string){
  var arr = [];
  arr = string.split(" ");
  for (var i = 0; i < arr.length; i++){
    if (arr[i].indexOf("a") === 0 || arr[i].indexOf("e") === 0 || arr[i].indexOf("o") === 0 || arr[i].indexOf("i") === 0 || arr[i].indexOf("u") === 0 || arr[i].indexOf("y") === 0){
      arr[i] = arr[i].concat("way");
    } else {
      var counter = 0;
      var j = 0;
      var word = arr[i];
      while ((word[j] != "a" && word[j] != "e" && word[j] != "o" && word[j] != "i" && word[j] != "y") && j < word.length){

        if (word[j] === "u" && word[j-1] === "q" && isVowel(word[j + 1])){
          counter ++;
          break;
        } else if (word[j] === "u" && word[j-1] !== "q"){
          break;
        } else {
          counter++;
        }
        j++;
      }
      var firstConsonants = arr[i].slice(0, counter);
      var wordLeftOver = arr[i].slice(counter, arr[i].length)
      arr[i] = wordLeftOver.concat(firstConsonants).concat("ay");
    }
  }
  var newString = arr.join(" ");
  return newString;
}

// UI logic
