//for...each loop
//by default for..each loop present in array 
const coding = ["js","rb","java","py","cpp"]

coding.forEach((item)=>{
    console.log(item);
})
console.log("==================");
const printMe = (a) =>{console.log(a)};
coding.forEach(printMe)
console.log("==================");
coding.forEach((a,b,c)=>{//a =item,b=index,c=whole array
    console.log(a,b,c);
})
console.log("==================");
//array of objects looping
const myCoding =[
    {
        lang:"java",
        name:"jv"
    },
    {
        lang:"c++",
        name:"cpp"
    },
    {
        lang:"java script",
        name:"js"
    }
]
myCoding.forEach((item)=>{
    console.log(item.lang," ",item.name);
})







