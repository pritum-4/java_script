//global scope
let a = 10;   // Declaring and initializing 'a' in the global scope
const b = 20; // Declaring and initializing 'b' in the global scope
var c = 30;   // Declaring and initializing 'c' in the global scope

if (true) {//block scope
    let a = 10;   // Declaring and initializing 'a' in the block scope (shadowing the global 'a')
    const b = 20; // Declaring and initializing 'b' in the block scope (shadowing the global 'b')
    var c = 30;   // Re-assigning the global variable 'c'
}

console.log(a); // Output: 10 (prints the global 'a', the block-scoped 'a' doesn't affect it)
console.log(b); // Output: 20 (prints the global 'b', the block-scoped 'b' doesn't affect it)
console.log(c); // Output: 30 (prints the modified global 'c' from within the block)
function one()
{
    const username = "prayas"
    function two()
    {
        const website="youtube"
        console.log(username);
    }
    two()
}
one()

//================================
console.log(addOne(2))//3
function addOne(num)
{
    return num+1
}
//console.log(addTwo(3));//error because here we can not accesss the variable function declared afterwards 
const addTwo = function(num)
{
    return num+2
}
console.log(addTwo(3));//5

