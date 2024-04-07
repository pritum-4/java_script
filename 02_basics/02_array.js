const marvel=["thor","ironman","spiderman"]
const dc = ["superman","flash","batman"]
//marvel.push(dc);
//console.log(marvel)[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
//console.log(marvel[3][1]);//flash
// marvel.concat(dc);
// console.log(mar);

//spread function for concat
//=============================
const all_heroes = [...marvel,...dc];//concatenation
console.log(all_heroes);//[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const array1=[1,2,[4,5,6],[6,7,[4,5]]]
const uasable_array1=array1.flat(Infinity);
console.log(uasable_array1);


let v = Array.isArray("Prayas")
console.log(v);
let vi = Array.from("Prayas");
console.log(vi);
let ar = Array.from({name:"prayas"})//interesting
console.log(ar);

let score1=200
let score2=300
let score3=400

console.log(Array.of(score1,score2,score3));




