var paragraphTrain = [];
var firstGuy = document.getElementById("original");
var parent = document.getElementById("parent");

for (var i = 0; i < 7; i++) {
    paragraphTrain.push(firstGuy);
    
 
}
console.log(paragraphTrain);
console.log(parent);
console.log(firstGuy);

console.log(paragraphTrain[0].innerHTML);

for (var i = 0; i < 7; i++) {
    parent.append(paragraphTrain[i].innerHTML);
}






