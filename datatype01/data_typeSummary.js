//  There are 7 type Primitive data type 
//(i)String,(ii)Number,(iii)Boolean,(iv)Null,(v)undefined(vi)Symbol(vii)BigInt
//Primitive data type is call value hote hain
//Reference (Non Primitive data type)
// Array,Function,Object
//javaScript is a Dynamic types
// const score=100;
// const socre1=100.3;
// console.log(typeof(score));
// console.log(typeof(socre1));
// const id=Symbol('123');
// const anotherId=Symbol('123');
// console.log(id==anotherId);
//""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
// Type of val :Result
// undefined : "Undefined"
// Null:  "Object"
// Number : "Number"
//Boolean:"Boolean"
//String:String:         
//Object (native and:      : "Object"
// does not :
//implement [[Call]]):
//Object (native or host:      "function"
// and does implement [[Call]])
// Object (host and 
// does not  Implement[[Call]])                 
//                                     : Implementation-defined except                                
            //                     may not be "undefined", "boolean", "number", or "string".implement [[Call]])
            // """"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""''''
            //stack(Primitive) and heap(Non Primitive)
            // let mycollegename="bias";
            //  anothervalue=mycollegename;
            //  anothervalue="Chai aur maggi";
            // console.log(mycollegename);
            //  console.log(anothervalue);
            let userone={
                email:"usser@google.com",
                Upi:"user@sbi"
            }
let userTwo=userone
userTwo.email="ashishkandpal@google.com"
console.log(userone.email);
console.log(userTwo.email);