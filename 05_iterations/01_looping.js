//for of loop:
//object are not iterable in for...of loop
const arr = [1,2,3,4,5]
for (const num of arr) {
    console.log(num);
}

const greetings = "Hello World!"
for(const c of greetings){
    console.log(`Each character is ${c}`);
}

//MAPS:
const map = new Map()
map.set('IN',"India")
map.set('FR',"France")
map.set('BR','Britain')
console.log(map);

for (const [key,value] of map) {
    console.log(key,':-',value);    
}

const obj = {
    'game1':'NFS',
    'game2':'Spiderman'
}
// for (const [a,b] of obj ){//here obj is not iterable
//     console.log(a,':-',b); //error  
// }


