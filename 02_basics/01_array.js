//array
//In javascript array can be resizable 

const arr = [0,1,2,3,4]
console.log(arr[0]);

//when array-copy-operation is done then it always make shallow copy 
//a shallow copy of an object is a copy which whose properties share the same reference point
//i.e if there is any changes in the value then it is reflected to every reference point
console.log("=========================================");
const animal = ['tiger','lion','giraffe','cat'];

const arr1 = new Array(1,2,3,4,5,6);

console.log(animal);
console.log(arr1);

//ARRAY METHODS
arr1.push(9)//inserted at last
arr1.push(10)
console.log(arr1);
arr1.pop()//removed from last
console.log(arr1);//10 is removed
arr1.unshift(0);//0 added at first and other values shifted
console.log(arr1);
arr1.shift();//first element of the array is deleted
console.log(arr1);
console.log(arr1.includes(5));
//does array include 5-true/false
console.log(arr1.indexOf(2));//return index value of the parameter

const arr2 = arr.join()
console.log(arr2);
console.log(typeof arr2);
//============================

//SLICE AND SPLICE

console.log("A",arr);

const a = arr.slice(1,3)//donot change the original array
console.log("B",a);

const b = arr.splice(1,3)//changes made in original array
console.log("C",b);
console.log('A',arr);
A [ 0, 1, 2, 3, 4 ]//original array
B [ 1, 2 ]//slice output
A [ 0, 1, 2, 3, 4 ]//array after slicing
C [ 1, 2, 3 ]//splice output
A [ 0, 4 ]//array after splicing