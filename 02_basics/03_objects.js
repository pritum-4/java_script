//objects
//================================
//singleton
//Object.create()=>creating object by constructor method=> here comes the concept of singleton
//===============================
//object literals
//any literal declared using curly braces is referred as an object to be precise it is called object literal

const mySym = Symbol("key1")

const jsuser = {
    name:"Prayas",//name is by default string so need not to be declared in ""
    "full name":"Jayant",
    age:18,
    [mySym]:"myKey1",//symbol
    location:"Bermingham Street",
    isLoggedIn:false,
    lastLoginDays:["Monday","Sunday"]
}
console.log(jsuser.name);//can be accessed this way 
//or 
console.log(jsuser["name"]);
console.log(jsuser["full name"]);//mostly used in this case
console.log(typeof jsuser[mySym]);//accessing symbol
jsuser.age=21
//Object.freeze(jsuser)
jsuser.age=30
console.log(jsuser);

jsuser.greeting = function(){
    console.log(`Hello jsuser`);
}
jsuser.greeting2 = function(){
    console.log(`Hello jsuser , ${this.name}`);
}
console.log(jsuser.greeting());
console.log(jsuser.greeting2());