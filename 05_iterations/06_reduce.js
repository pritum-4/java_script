const arr = [1,2,3]
// const total = arr.reduce(function (acc,curval){
//     console.log(`acc:${acc},currval:${curval}`);
//     return acc+curval;
// },0)
const total = arr.reduce((acc,curr)=>acc+curr,0)
console.log(total);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);