//singleton object
//onst tinderUser=new Object()
//non singleton object
const tinderUser={}
tinderUser.id="123abc"
tinderUser.name="Samy"
tinderUser.isloggedIn=false
//console.log(tinderUser);
const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
        fistname:"Ashish",
        lastname:"Kandpal",
        
    }
}
   }
//console.log(regularUser.fullname.userfullname);
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj4={5:"a",6:"b"}
//const obj3={obj1,obj2}
//const obj3=Object.assign({},obj1,obj2,obj4)
const obj3={...obj1,...obj2,...obj4}
//console.log(obj3);


const users=[
    {
        id: 1,
        email:"kandpalashish58@gmail.com",
    },
    {
        id: 2,
        email:"someashu58@gmail.com",
    },
    {
        id :3,
        email:"ganeshji123@gmail.com",
    },
    {
        id:4,
        email:"baapji234@gmail.com"
    }
]
//console.log(users[1].email);
//console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(Object.hasOwnProperty('name'));