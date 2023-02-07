/*
var paragraphTrain = [];
var firstGuy = document.getElementById("original");
var parent = document.getElementById("parent");
var test = document.getElementById("test");

console.log("say hi");

console.log(test);
console.log("hello there are you there");

for (var i = 0; i < 7; i++) {
    console.log("say hi");
    
 
}


console.log(paragraphTrain);
console.log(parent);
console.log(firstGuy);

console.log(paragraphTrain[0].innerHTML);
console.log(paragraphTrain[0].parentNode);

for (var i = 0; i < 7; i++) {
    parent.append(paragraphTrain[i].innerHTML);
}


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

alert("help me");



var clone = firstGuy.cloneNode(true);

for (var i = 0; i < 7; i++) {
    test.append(clone);
}

console.log(clones[6]);  */


var paragraphForm = document.querySelector(".paragraph-form");
console.log(paragraphForm);
var number = document.getElementById("number");

var number = document.getElementById("original");
var cloneTrain = [];
var firstGuy = document.getElementById("original");
var clone = firstGuy.cloneNode(true);
var test = document.getElementById("test");


let numParaRender = document.getElementById("numParaRender");
console.log(numParaRender);

let numParagraphs;
console.log(firstGuy);
console.log(clone);
console.log(test);

paragraphForm.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("hello");
    console.log(number.value);
    var value2 = document.getElementById("number").value;
    console.log(value2);
    numParagraphs = value2;

    for (var i = 0; i < numParagraphs; i++) {
        cloneTrain[i] = clone;
        test.append(cloneTrain[i].outerHTML);

    }

    numParaRender.innerHTML = "Number of paragraphs below is: " + numParagraphs;
    //var value = parseInt(number.value);
    
    //text2 = text.slice(0, value);
    //console.log(text2);
    //text2 = text2.map(function (item) {
        //return `<p class="result">${item}</p>`;
    //});
    //console.log(text2);
    //text2 = text2.join("");
    //console.log(text2);
    //lorem.innerHTML = text2;
});







console.log(cloneTrain);
//test.append(cloneTrain[0].outerHTML);
//test.append(cloneTrain[3].outerHTML);


var headerTrain = [];
var header2 = document.getElementById("header2");
var header2Clone = header2.cloneNode(true);
console.log(header2Clone);

var spacer = document.createElement("p");
test.append(spacer);

//for (var i = 0; i < 6; i++) {
    //headerTrain[i] = header2Clone;
    
    //test.append(headerTrain[i].outerHTML);
//}







