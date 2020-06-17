exports.Shuffle = function(str) {
    var wordsArray = str.split(' ');
    var currentIndex = wordsArray.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = wordsArray[currentIndex];
      wordsArray[currentIndex] = wordsArray[randomIndex];
      wordsArray[randomIndex] = temporaryValue;
    }
  
    return wordsArray.join(' ');
  }

exports.GetShuffleList = function(str, count) {

    var arr = new Array(count);
    for(var i = 0; i< count;) {
        var word = this.Shuffle(str);
        if(!arr.includes(word)) {
            i++;
            arr.push(word);
        }
    }
    return arr;
  }
