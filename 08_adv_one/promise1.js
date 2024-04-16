function fetchData(){
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
            resolve('Data fetched successfully!');
         },1000);
    });
}
async function getData(){
    return await fetchData();
}
getData().then((res)=>{
    console.log(res);
})
console.log('Fetching Data')
let arr1 = [1,2,3]
let arr2 = arr1
arr2.push(4)
console.log(arr1);
console.log(arr2);
