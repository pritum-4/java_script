let n = 12345;
// let y=0;
// while(n>0)
// {
//     y=y*10+(n%10);
//     n=parseInt(n/10);
// }
let y = parseInt(n.toString().split('').reverse().join(''))
console.log(y);