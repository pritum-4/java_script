let  sum = 0;
let n = (12345)
let x = (Math.round(Math.log10(n)+1));
if(x>=5){
    while(n>0){
        let num = (n%10);
        sum = sum + (num*num*num);
        n=parseInt(n/10);
    }
}
console.log(sum);