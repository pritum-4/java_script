const user = {
    username:"hitesh",
    price:99,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this)
    }
}
// user.welcomeMessage()
// user.username="Prayas"
// user.welcomeMessage()//context of user name changed
console.log(this);//current context 

// function chai()
// {
//     let username = "prayas" 
//     console.log(this.username);//undefined
//     //this keywod donot work on cariables inside the function
// }
// chai()

//arrow function

// const chai = () => {
//     let username = "Prayas"
//     console.log(this.username);
// }
// chai()

//implicit function 

// const chai =() => (name = "Prayas")
// console.log(chai())


//**************** NORMAL FUNCTION*********

function add(num)
{
    return num+1
}
console.log(add(2));

//****************FUNCTION DELARED IN VARIABLE*************
const add1 = function(num){
    return num+1
}
console.log(add1(2));
//****************ARROW FUNCTION*************
const add2 = (num) =>{
    return num+1;
}
console.log(add2(2));
//****************INLINE FUNCTION/IMPLICIT RETURN*************
const add3 = (num) => (num+1)
console.log(add3(2));

//return object in implicit return
const uname = ()=>({username:"prayas"})
console.log(uname());








