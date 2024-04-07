//const tinderUser = new Object() ->singleton object

const tinderUser = {};
tinderUser.id="234cd"
tinderUser.name="Haresh"
tinderUser.loggedIn=false

//console.log(tinderUser);

const regularUser ={
    email:"haresh@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Rahul",
            lastname:"Mahakur"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj3 = {obj1,obj2}
console.log(obj3);//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } } ->merging obj2 to obj1
const obj4=Object.assign({},obj1,obj2)//{} <--- merging obj1 and obj2 to a new uninitialized object
console.log(obj4);
const obj5 = {...obj1,...obj2}//use of spreading concept for merginf to object 
console.log(obj5);


const users = [
    {
        id:1,
        email:"haresh@gmail.com"
    }
]
users[0].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));//array of keys:     [ 'id', 'name', 'loggedIn' ]
console.log(Object.values(tinderUser));//array of values:[ '234cd', 'Haresh', false ]
console.log(Object.entries(tinderUser));//[ [ 'id', '234cd' ], [ 'name', 'Haresh' ], [ 'loggedIn', false ] ]
console.log(tinderUser.hasOwnProperty('loggedIn'));//gives boolean result

//objects destructruring

const course={
    coursename:"js basics",
    price:"1000",
    teacher:"hitesh"
}
//course.teacher

const {teacher} = course
console.log(teacher);//hitesh
const {teacher:sir} = course//sir new varible defined
console.log(sir);//hitesh

//json file
// {
//     "name":"prayas",
//     "price":"2000",
//     "course":"js basics"
// }
