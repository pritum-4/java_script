let score = 33
console.log(score,typeof score);
console.log(score,typeof(score))
score="33"
console.log(score ,typeof score)
score =undefined
//=================================
let valueInNumber = Number(score)
console.log(valueInNumber,typeof valueInNumber)
//conversion to number
/*
"33"=>33
"33abc"=>NaN
true=>1
false=>0
null=>0
undefined=>NaN
NaN=>NaN
*/
//==================================
console.log("===>boolean")
let isLoggedIn = ""
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
/*
1=>true
0=>false
""=>false
"value"=>false
*/
console.log("===>String")
 let num = false;
 let StringNum = String(num)
 console.log(StringNum ,typeof StringNum)
/*
1=>"1"
33=>"33"
0=>"0"
*/




























