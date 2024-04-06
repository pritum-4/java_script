const score = 100
console.log(score);

const balance = new Number(100)
console.log(balance);
const fix = balance.toString();
console.log(typeof fix);
console.log(fix.length);
console.log(balance.toFixed(2));
const dnum = 23423.953
console.log(dnum.toPrecision(3));
const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

//===============MATHS==================
 console.log("MATHS")
// console.log(Math.abs(-4));
// console.log(Math.round(4.32));
// console.log(Math.ceil(2.3));
// console.log(Math.floor(5.7));
// console.log(Math.min(3,4,5,5,1));
// console.log(Math.max(3,4,5,5,1));

console.log(Math.random())//return value between 0 and 1
console.log((Math.random()*10) + 1)
//sfifting value by multyplying 10 and avoiding zero to come so added 1

console.log(Math.floor(Math.random()*10) + 1)//getting the lowest number

//for getting random value between any two numbers we give the below formula

const min = 10;
const max = 30;

console.log(Math.floor(Math.random()*(max-min+1))+min)//this will give result between 10 and 30

