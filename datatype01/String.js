const name="Ashish";
const repoCount=50;
// console.log(name  +   repoCount  + " value");
let name01 = "Bob";
let age = 25;
// console.log(`My name is ${name01} and I am ${age} years old.`);


// console.log(`My name is ${name} and my repoCount is ${repoCount}.`);
//String is a object in javaScript
//const gameName=new String('Ashish')
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('h'));


// const firstIndex=name.indexOf("h");
// const secondIndex=name.indexOf("h",firstIndex+1);
// console.log(secondIndex);

//Substring in JavaScript string.substring(startIndex, endIndex)

// const substring = name.substring(3,5) ;
// console.log(substring); // Output: is
// const browserType = "mozilla";
//     console.log(browserType.length);


//     const str = "Hello, world!";
// console.log(str.slice(-6)); // Output: world!
//H  e  l  l  o  ,     w  o  r  l  d  !
//0  1  2  3  4  5  6  7  8  9 10 11 12 (index)
//-13 -12 -11 -10 -9 -8 -7 -6 -5 -4 -3 -2 -1 (negative index)
// console.log(name.slice(-4));
//A s h i s h
//0 1 2 3 4 5(index)
//-6 -5 -4 -3 -2 -1(negative index)             

// // const str = "Hello";
// // console.log(str.charCodeAt(0)); // Output: 72
// const gameName = new String('hitesh-hc')
// const anothervalue=gameName.slice(-8,4);
// console.log(anothervalue);
// //h i t e s h - h c
// //0 1 2 3 4 5 6 7 8(index)
//h   i  t   e  s  h -  h   c
// //-9 -8 -7 -6 -5 -4 -3 -2 -1 
// const  Stringname01="   hello   ";
// console.log(Stringname01);
// console.log(Stringname01.trim());
const url = "https://ashish.com/ashish%20kandpal"
// console.log(url.replace('%20','-')); 
// const str = 'Hello-world!';
// const parts = str.split('-');
// console.log(parts); // Output: ["Hello"  "world!"]

//  const gameName = new String('hitesh-hc')
//  console.log(gameName.split('-'));
console.log(url.includes('sundar'))//false