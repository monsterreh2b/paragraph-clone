var paragraphTrain = [];
var firstGuy = document.getElementById("original");
var parent = document.getElementById("parent");
var test = document.getElementById("test");

console.log(test);

/*for (var i = 0; i < 7; i++) {
    paragraphTrain.push(firstGuy);
    
 
}
console.log(paragraphTrain);
console.log(parent);
console.log(firstGuy);

console.log(paragraphTrain[0].innerHTML);
console.log(paragraphTrain[0].parentNode);

for (var i = 0; i < 7; i++) {
    parent.append(paragraphTrain[i].innerHTML);
}*/


var clones = [];
var clone = firstGuy.cloneNode(true);
var clone2 = firstGuy.cloneNode(true);
var clone3 = firstGuy.cloneNode(true);
var clone4 = firstGuy.cloneNode(true);
var clone5 = firstGuy.cloneNode(true);
var clone6 = firstGuy.cloneNode(true);
var clone7 = firstGuy.cloneNode(true);

clones.push(clone);

console.log(clones[0]);

parent.append(clone);
parent.append(clone2);
parent.append(clone3);
parent.append(clone4);
parent.append(clone5);
parent.append(clone6);
parent.append(clone7);

//parent.append(clones[0]);

var clonesFin = [];
var cloneFin = firstGuy.cloneNode(true);
clonesFin.push(cloneFin);
console.log(cloneFin);












