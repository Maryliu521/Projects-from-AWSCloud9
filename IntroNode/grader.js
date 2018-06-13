function average(scores){
    var result = 0;

    scores.forEach(function(score){
        result +=score;
        })
     var average = result/scores.length;
      return Math.round(average);
} 
var scores = [90, 98, 89, 100, 100, 86, 94];
console.log(average(scores));