const mySum=Symbol("Key01");

const Juser={
    name:"Ashish",
    age:28,
    location:"Bhimtal",
    gmail:"Kandpalashish58@gmail.com",
    working_time:"nine to six pm "
};
Juser.greeting=function(){
    console.log("Hello Js User");
    
};
Juser.greetingTWo=function(){
    console.log(`Hello JsUser,${this.name}`);
};
console.log(Juser.greeting());
console.log(Juser.greetingTWo());