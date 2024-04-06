let myDate=new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toISOString());
// console.log(myDate.getTimezoneOffset());
// console.log(myDate.toTimeString());
// console.log(myDate.toJSON());
// console.log(myDate.toUTCString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toTimeString());
// console.log(typeof myDate);//object
//  let myCreateDate= new Date(2024,3,6,14,28)//tue Apr 06 2024
// console.log(myCreateDate.toDateString());
// let myCreateDate=new Date("2024-01-06")
// let myCreateDate=new Date("01-14-2024");
// console.log(myCreateDate.toLocaleString());
// let myTimeStamp=Date.now()
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// console.log(Date.now()/1000);
// console.log(Math.floor(Date.now()/1000));
// let newDate=new Date()
// // console.log(newDate);
// // console.log(newDate.getMonth()+1 );
// // console.log(newDate.getDay());
// newDate.toLocaleString('default', {
//     weekday: "long",
    
// })
let newDate = new Date();
let dayOfWeek = newDate.toLocaleString('default', { weekday: 'long' });

console.log("Today is:", dayOfWeek);


