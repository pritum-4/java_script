const arr = [1,2,3,4,5,6,7,8,9,10]
const arr1 = arr.map((num)=>num+10)
console.log(arr1);//[
    11, 12, 13, 14, 15,
    16, 17, 18, 19, 20
  //]

const arr2 = arr.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>=40);//chaining 

console.log(arr2);//[
    41, 51,  61, 71,
    81, 91, 101
  //]