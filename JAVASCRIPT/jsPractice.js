//  var a = 10;
//  console.log(a);
//   a = " 'Coding Ninjas' ";
//  console.log(a);

// var a = "A";
// console.log(65-a);

// var a;
// console.log(a + "b");

// sum of even no.s using prompt**********************
// var N;
//  N = prompt("enter the No");
//  var result = 0;
//  for(var i = 0; i < N; i++){
//     if(i%2 == 0){

//         result = result + i;

//     }
//  }
//  console.log(result);
// result(5);

// sum of even no.s**********************
// function result(n){
//     let sum = 0;
//     for(let i = 0; i < n; i++){
//         if(i % 2 == 0){
//             sum = sum +i;
//         }
//     }
//     console.log(sum);
//     // return sum;
// }
// let ans = result(5);
// console.log(ans);

// calling a function with parantheses it will only tell the reference **********
// function multiply(a, b) {
//     return a*b;
// };
// console.log(multiply);

// check the given no is fibonnaci series no or not**************
// function finbonacciSeries(n) {
//   let a = 0;
//   let b = 1;
//   while (a < n/2) {
//     let c = a + b;
//     if (c == n) {
//       return true;
//       break;
//     }
//     let temp = b;
//     b = c;
//     a = temp;
//   }
//   return false;
// }
// let result = finbonacciSeries(5);
// console.log(result);

//  variable hosting**************************
// console.log(i);
// var i = 10;

//  variable hosting**************************
// x = 5;
// console.log(x);
// var x;

// function hosting********************
// print();
// function print(){
//   console.log("hello");
// }

// arrow function in js ************
// let  sum = (a,b) =>{
//   var c = a+b;
//   document.write(c);
// }
// sum(2,5);

// function expression *******************
//  let sum = function(a,b){
//  var c = a+b;
//   console.log(c);
//  }
//  sum(7,9);

// function hoisting doesn't work in the case of the function expression****************************
// hoist(); 
// var hoist = function () {
//     console.log('bar');
// };

// function expression *******************
//  let sum = function add(a,b){
//  var c = a+b;
//   console.log(c);
//  }
// sum(3,7);



// Write a function 'returnDay' that takes one parameter(number from 1 to 7) and returns the day of the week(using array concept)**************

// let returnDay =(n)=>{
//   let arr =["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
//   switch(n){
//     case 1:
//       console.log(arr[0]);
//       break;
//     case 2:
//       console.log(arr[1]);
//       break;
//     case 3:
//       console.log(arr[2]);
//       break;
//     case 4:
//       console.log(arr[3]);
//       break;
//     case 5:
//       console.log(arr[4]);
//       break;
//     case 6:
//       console.log(arr[5]);
//       break;
//     case 7:
//       console.log(arr[6]);
//       break;
//      default:
//       console.log("enjoy madi")
    
//   }
// }
// returnDay(4);

// itrate in the array using forEach loop***************

// let arr = [1,2,3,4,5,6];
// arr.forEach( function print(index){
//   console.log(index);
// });

// or
// let arr = [1,2,3,4,5,6];
// arr.forEach(print);
// function print(element){
//   console.log(element);
// }

// var words = ['one', 'two', 'three', 'four'];
// words.forEach(function(word) {
//     console.log(word);
//     if (word === 'two') {
//         words.shift();
//     }
// });




// using function of the array **************
// array = [ 60, 70, 20, 10, 40, 90 ];

// const test = function(x) {
//     return x > 5;
// }

// if(!array.every(test)) {
//     console.log("statement 1"); 
// }

// else {
//     console.log("statement 2"); 
// }

// Implement a function “duplicate” to duplicate an array, as shown below:

// For input arr=[1,2] duplicate(arr) should return [1,2,1,2]

// function duplicate(arr){
//   var arr1 = [arr,arr];
//   return arr1;
// }
// var x = duplicate([1,2]);
// console.log(x);

// rotateLeft([1,2,3,4]) // returns [2,3,4,1]

// function rotateLeft(arr){
//   var ele = arr.shift();
//   arr.push(ele);
//   return arr;
// }
// var x = rotateLeft([1,2,3,4]);
// console.log(x);

// objects in js ******************************************

// var student = {
//   name : "sagar",
//   roll_no : 24,
//   sem : 6
// };
// console.log(student.name);
// // adding properties to the object 
// student.auid = "R1920732";
// console.log(student.auid);
// // console.log(typeof student);

// iterating in the objects in the js****************

// var student = {
//   name : "sagar",
//   roll_no : 24,
//   sem : 6
// };
// //  way 1
// //  var x = Object.keys(student);
// //  console.log(x);

// //  way 2(using for in loop)
// for(var prop in  student)
// {
//   console.log(prop, student[prop]);
// }

// nested objects*****************

// var student = {
//     name : "sagar",
//     roll_no : 24,
//     sem : 6,
//     address : {
//       city : "patna",
//       pincode : 802214
//     },
//     print : function(){
//       console.log("we belong to same city");
//     }
//   };

//   console.log(student.address.city);
//   // we can also put function as the key vALUE within the object*****************
//  console.log(student.print())

// 1. Create a student object with three properties: name, age, and roll no.
// 2. Create an object address with two properties, City and state and add this object property to the student object.
// 3. Now delete the roll no property and print the object before and after deleting the property.

// var student = {
//   name : "sagar",
//   age : 23,
//   roll_no : 32,
//   address : {
//   city : "bangalore",
//   state : "karnataka"
// }
// };
// for( var prop in student){
//    console.log(prop ,  student[prop]);
// };
// delete student.roll_no;
// for( var prop in student){
//    console.log(prop ,  student[prop]);
// };

// note ----*******  arrays are actually objects in javascript 

// itrating over arrays using for in loop *******

// var arr = [1,2,3,4,5];
// for( var i in arr){
//   console.log(i, arr[i]);
// }

// timming events in java script*******************************
// setTimeout();
// setInterval();
// clearInterval();

// create a countdown that starts with 10 and ends at 1 sec ****************
// let count = 10;
// function timer(){
//   console.log(count);
//   count --;
//   if(count == 0){
// console.log("time up!");  
//     clearInterval(id);
//   }
// }
// let id = setInterval(timer , 1000);

// copying one object to another so that it doesn't have affect on the first obj  ***************************
// var sagar = {
//   name : "sagar",
//   class : 10
// };
// var virat = Object.assign({}, sagar);
// virat.name  = "virat";
// console.log(virat);
// console.log(sagar);
//  or 
// var sagar = {
//     name : "sagar",
//      class : 10
//   };
//   var virat = {...sagar};
//   virat.name = "virat";
//   console.log(virat);
//   console.log(sagar);

// function add(a,b,c,d) {
//   console.log(a+b+c+d)
// }
// setTimeout(add(2,6,8,9) , 10);

// starting DOM**************************************************
// var elems = document.getElementById('head');
// elems.style.backgroundColor = "red";
// var elem2 = document.querySelector(".para");
// elem2[0].innerText = "i am changed para";
// elem2[1].style.color = "green";

// starting with even listener************************************
//  var target_button = document.querySelector('.btn');
//  target_button.style.height = "50px";
//  target_button.style.width = "100px";
//  target_button.addEventListener('click',function(){
//     alert("i am very happy");
//  });


 





