const name = "Prayas"
const repoCount = 12

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);//string interpolation modern way of concatinating things

const gameName = new String('freefire')//it makes a string object

console.log(gameName[0]);
console.log(gameName.__proto__);//{} shows the prototype

console.log(gameName.length);//8

console.log(gameName.toUpperCase())//FREEFIRE

console.log(gameName.charAt(2));//e

console.log(gameName.indexOf('e'));//2

const newString = gameName.substring(0,4);//negative number can not be given as arguement
console.log(newString);//

const ano = gameName.slice(-8,4);
console.log(ano);

const removeSpaces = "  prayas  "
console.log(removeSpaces.trim());

const url = "https://prayas.com/prayas%20mahakur"

console.log(url.replace('%20','-'));

console.log(url.includes('pr'));

const splitString = "The new way to derive things is via practical";

console.log(splitString.split(' '));







