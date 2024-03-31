const mySym=Symbol("key1")

const Jsuser={
    name:"Ashish",
  "fullname":"Ashish Kandpal",
  [mySym]:"my key1",
    age:28,
    location:"Bhimtal"
    

};
console.log(Jsuser["fullname"]);
console.log(Jsuser[mySym]);