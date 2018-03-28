// Business logic
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
      while ((word[j] != "a" && word[j] != "e" && word[j] != "o" && word[j] != "i" && word[j] != "u" && word[j] != "y") && j < word.length){
        // while (j<10 && j < word.length){
          console.log(word[j]);
        counter ++;
        if (word[j] === "u" && word[j-1] === "q"){
          counter ++;
        }
        console.log(j);
        // console.log(counter);
        j++;
      }
      arr[i] = arr[i].slice(0, (counter-1)).concat("ay")
    }
  }
  var newString = arr.join(" ");
  return newString;
}
