"use strict";

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

// starting with event listener************************************
// some of the mouse events************************************
//  var target_button = document.querySelector('.btn');
//  target_button.style.height = "50px";
//  target_button.style.width = "100px";
//  target_button.addEventListener('click',function(){
//     alert("i am very happy");
//  });
//  target_button.addEventListener('dblclick',function(){
//     document.write("hey y u have clicked 2 times");
//  });

// some of the keyboard events ******************************
//    var box = document.getElementById("input-box");
//    box.addEventListener("keypress", function(){
// "use strict";
//     console.log("key pressed");
//    });
//    box.addEventListener("keydown", function(event){
//     console.log("key down", event.key);
//    });
//    box.addEventListener("keyup", function(){
//     console.log("key up");
//    });

// event propagation *********************************************
// when we have the dom hierarchy then this works
// var outerdiv = document.querySelector(".outer");
// var innerdiv = document.querySelector(".inner");
// innerdiv.addEventListener("click",function(event){
//     alert("u just clicked the inner div");
//     event.stopPropagation();
// });
// outerdiv.addEventListener("click",function(){
//     alert"u just clicked the outer div");
// });

/*closures in js enbles us the access to use the varible outside the scope even if the execution of the outer context is done 
 i.e the variable doesn't get destroyed after the exection of the outer context , it get stored for the inner context use */

// var i = 0;
// function outer() {
//   var j = 20;
//   console.log("outer " + j);
//   function inner() {
//     var k = 10;
//     console.log("inner " + j, k);
//     j++;
//     k++;
//   }
//   inner();
// }
// outer();
// outer();

// console.log((function(x,f=()=>x){
//     x = 2;
//     var x;
//     var y = x;
//     console.log(y);
//     console.log(x);
//     return [x,y,f()];
// }) (1));

// let user = {
//    firstname: 'John',
//    lastname: 'Doe',
//    getFullName: function(){
//        return function(){
//            console.log(`The full name of the user is ${this.firstname} ${this.lastname} `);
//        }
//    }
// }
// user.getFullName()();

/*In the given example, the function which is getting returned i.e.
  
    return function(){

           console.log(`The full name of the user is ${this.firstname} ${this.lastname} `);
     }

 Is a unbounded function (An unbound function is a function that is not bound to an object) So this in the above function refers to the global (window) object. Since unbound functions are implicitly bound to the global scope). And since no firstname and lastname variables were defined in the window environment,  ${this.firstname} ${this.lastname}  prints undefined undefined */

//  if in place of the niormal function if the arrw function was there then it would have printed as expected

// function makeArmy() {
//     let shooters = [];
//     let i = 0;
//     while (i < 10) {
//       let shooter = function() {
//         console.log( i );
//       };
//     i++;
//       shooters.push(shooter);
//     }
//     return shooters;
//   }
//   let army = makeArmy();
//   army[0]();
//   army[5]();

// function makeArmy() {
//     let shooters = [];
//     for( let i = 0; i < 10; i++) {
//       let shooter = function() {
//         console.log("hi");
//         console.log( i );
//       };
//       shooters.push(shooter);
//     }
//     return shooters;
//   }
//   let army = makeArmy();
//   army[0]();
//   army[5]();

// var argument = [1, 2, 3];
// var arr = () => argument[2];
// arr();
// function foo(n) {
//   var f = () => argument[0] + n;
//   return f();
// }
// foo(3);

// var i = 0;
// function increment(){
//   console.log(i);
//   i++;
// }
// increment();
// increment();

// getting stated with the higher order function***************************************
// we will see the behaviour of the parameters whenn they are passed *****
const flight = "LH1234";
const sagar = {
  name: "saurabh",
  age: 22,
  city: "bangalore",
  passport: 12344567,
};
function checkIn(flightNo, passenger) {
  flightNo = 'Lh345';
  passenger.name = "golu";
  console.log(passenger.name);
  console.log(passenger.passport);
  if (passenger.passport === 12344567) {
    alert(`checked in`);
  } else {
    alert(`wrong passport info!`);
  }
}
checkIn(flight, sagar);
console.log(flight);
console.log(sagar);

// function manipulate(passenger){
//   passenger.passport = 10000000;
// }
// manipulate(sagar);
// console.log(sagar);

// here in objects if we try to chnage values using parametres then those changes will automatically
// reflect to the actual values of the objects becoz both the values are pointing towards the reference of the same locataion so changes done will directly affect the changes at the actaul location.but this is not the case with the variables becoz they are stored in the heap memory..
