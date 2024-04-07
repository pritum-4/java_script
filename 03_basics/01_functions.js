function add(num1,num2)//parameters
{
    console.log(num1+num2);
}
add(1,"2")//12 <-- arguemnets:1,"2"
add(2,4)//6
add(3,"a")//3a
add(3,null)//3

const result = add(3,5)
console.log("Result",result);//Result undefined

function addNumber(num1,num2)
{
    let result = num1+num2
    return result
}
const res = addNumber(3,5)
console.log("Result",res);//Result 8

function loginUser(username){
    if(username === undefined){
        console.log("Please enter a user name");
        return;
    }
    return `${username} just loggeed in `
}
const msg = loginUser("prayas")
console.log(msg);//prayas just loggeed in

console.log(loginUser());//Please enter a user name
//undefined

function calculateCartPrice(...num1)//...num1 is rest operator
{
    return num1
}
console.log(calculateCartPrice(200,400,500));//[ 200, 400, 500 ]

function addNumbersInfinit(var1,var2,...num1)
{
    return num1;
}
console.log(addNumbersInfinit(200,400,500,400,600));//[ 500, 400, 600 ]

const user = {
    username:"prayas",
    id:2323
}
function handleObject(anyObject)
{
    console.log(`${anyObject.username} and id is ${anyObject.id}`);
    return;
}
handleObject(user)
handleObject({
    username:"krishna",
    id:108
})

const myArr = [200,400,800,100]
function returnSecondValue(getArray){
    return getArray[0]
}
console.log(returnSecondValue(myArr));














