//IMMEDIATELY INVOKED FUCTION EXPRESSION(IIFE)
// any function which need immediate attention 
// like connectiong to a database , etc can be done through IIFE so that it is not hampered by global scope pollution
//step1: write the normal function:===>
// function chai()
// {
//     console.log(`DB Connected`);
// }
// chai()
//step2:wrap it with parenthesis() :====>
(function chai()
{//named iife
    console.log(`DB Connected`);
})();
//we need to put semicolon(;) at the end because sometimes js canot find the end of the context
// note:==>
// (1)(2)
// 1st () is about function defination
// 2nd () is about function calling/execution

((name)=>{
    //unnamed iife
    console.log(`Again connected to DB ${name}`);
})('prayas');