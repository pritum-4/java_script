console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2==1);
console.log(2<=2);
//=================
console.log("2">1);//true
console.log("02">1);//true
//==================
console.log(null>0);//false
console.log(null == 0);//false
console.log(null>=0)//true
/* the reason for the above is equality(==) and comparisons(<,>,>=,<=) works differently 

comparisons convert null value to number treating it 0

thus null>=0 is true 
null>0 is false
*/
//================
console.log(undefined>0);//false
console.log(undefined<=0);//false
console.log(undefined==0);//false

//     strict checking:===
console.log("2"==2)//true
console.log("2"===2);//false -> here it is checking the datatype also


