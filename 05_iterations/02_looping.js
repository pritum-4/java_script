//for in loop 
//map is not iterable in for..in loop
const obj ={
    js:'javascript',
    cpp:'C++',
    rb:'ruby',
    swift:'swift'
}

for(const a in obj){
    console.log(`${a} shortcut for ${obj[a]}`);
}

const programming = ["js","rb","py","java","cpp"]

for(const a in programming){
    console.log(programming[a]);
}