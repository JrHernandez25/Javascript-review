'use strict';

console.log("Hello world")

let randomenumber = 7; //let is locally scoped
var num = 4; //var is locally scoped
const number = 5; //this is a globably scoped variable

console.log(num);
console.log(randomenumber);
console.log(number);

document.write("<h1>Javascript Demo</h1>");

//alert("This is an alert maessage");
//alert("Did you listen to the warning");

//let name = prompt("What is your name");

//console.log(name);

//let mynumb = prompt('pick a number between 1 and 10');

//if(mynumb < 5){
  //  document.write('<h2>You choose a small number</h2>');
//}
//else if(mynumb > 5){
  //  document.write('<h2>You choose a large number</h2>');
//}
//if(mynumb == 5){
  //  document.write('<h2>You choose 5</h2>');
//}

//For Loops
//for(statement 1; statement 2; statement 3)
//statemet 1 is where you are starting your loop. i = 0
//statement 2 is the condition you want to run through. i < 10.
//statement 3 is how often you execute the command. i++.

for(let i=0; i<=10; i++){
    console.log(i*3);
}

const numb1 = prompt('pick a number');
const numb2 = prompt('pick another number');
Number(numb1);
Number(numb2);

function add(numb1, numb2){
    let int1 = parseInt(numb1);
    let int2 = parseInt(numb2);
    document.write(numb1 + ' added too ' + numb2 + ' is equal to ');
    document.write(int1 + int2);
}

add(numb1, numb2);