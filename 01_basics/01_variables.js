const accountId = 144553
let accountEmail = "prayas@gmail.com"
var accountPassword = "12345"
accountCity="Jeypore"
let accountState
//accountId=2 //not allowed

accountEmail="pc@ios.com"
accountPassword="123"
accountCity="Bhubaneswar"

console.log(accountId);
/* 
prefer not to use var:
because of issues in block scope and function scope
*/


console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);