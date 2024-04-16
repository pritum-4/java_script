// const promiseOne = new Promise((resolve,reject)=>{
//     //Do an async wait
//     //DB call , cryptography , network 
//     setTimeout(()=>{
//         console.log("Async task completed");
//         resolve()
//     },1000)
// })
// promiseOne.then(()=>{
//     console.log("Promise Consumed");
// })
// //===========================================
// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Async task 2");
//         resolve()
//     },1000)}).then(()=>{
//         console.log("Aync task-2 resolved");
// })
// //============================================
// const promiseThree=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve({username:"prayas",email:"example@example.com"})
//     },1000)
// })
// promiseThree.then((person)=>{
//     console.log(person);
// })
// //=============================================
// const promiseFour= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error = false;
//         if(!error){
//             resolve({username:"prayas",email:"example@example.com"})
//         }
//         else{
//             reject('ERROR Something went wrong')
//         }
//     },1000)
// })
// promiseFour
// .then((user)=>{
//     console.log(user);
//     return user.username
// })
// .then((username)=>{
//     console.log(username)
// })
// .catch((error)=>{
//     console.log(error);
// })
// .finally(()=>{
//     console.log("The promise is either resolved or rejected");
// })
//=============================================
const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true;
        if(!error){
            resolve({username:"prayas",email:"example@example.com"})
        }
        else{
            reject('ERROR:JS went wrong')
        }
    },1000)
})
async function consumePromiseFive(){
   try {
    const response = await promiseFive 
     console.log(response);
   } 
   catch (error) {
    console.log(error)
   }
}
consumePromiseFive()
//async canot handle catch block

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://api.github.com/users/hiteshchoudhary')
//         //console.log(response)
//     const data = await response.json()
//     console.log(data)
//     } catch (error) {
//         console.log("E",error);
//     }
// }
//getAllUsers()
// fetch('https://api.github.com/users/hiteshchoudhary')
// .then((response)=>{
//     return response.json()
// })
// .then((value)=>console.log(value))
// .catch((error)=>console.log(error))












