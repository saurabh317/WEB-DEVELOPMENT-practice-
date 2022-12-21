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

// *************************ARRAYS***************************
// **********************************************************

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

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// let print = function(item,no){
//   if(item > 0){
//     console.log(no+1+" "+"ammount credited"+ " "+Math.abs(item));
//   }else{
//     console.log(no+1+" "+"amount withdrawl" +" "+Math.abs(item));
//   }
// }
// movements.forEach(print);

// **************ARRAY FUNCTIONS*****************
/////////////////////////////////////////////////
// **********************************************

// 1.EVERY-------------
// let array = [ 60, 70, 20, 10, 40, 90 ];
// const test = function(x) {
//     return x > 5;
// }
// if(array.every(test)) {
//     console.log("statement 1");
// }
// else {
//     console.log("statement 2");
// }

// 2.MAP--itrate over array and impliment a particular method to all elements of the array.
// let array = [ 60, 70, 20, 10, 40, 90 ];
// const store = array.map((item)=>{
//   return item * 10;
// })
// console.log(store);
// console.log(array);

// 3.FILTER--itrate over array and check fopr a particular condition on each of the elements
// and return the elemets that passes that condition.
// let array = [ -60, 70, -20, 10, 40, -90 ];
// let store = array.filter(function(item){
//     return item > 0;
// });
// console.log(store);

// 4.REDUCE--it itrate in the array and keep adding the elemets of the array and returns a single value at the end.
// acc = accumulator whose initial value we have given as a parameter to the reduce method i.e 0.
// let array = [ -60, 70, -20, 10, 40, -90 ];
// let store = array.reduce(function(acc,curr,i,array){
//     return acc + curr;
// },0);
// console.log(store);

// ******NOTE:- its not that we can only add or multiply Elements of the array to return to a single value
// we can do any operations which will led to return a single value.*************
// let array = [ -60, 70, -20, 10, 40, -90 ];
// let store = array.reduce(function(acc,curr,i){
//     if(acc > curr){
//         return acc;
//     }
//     return curr;
// },array[0]);
// console.log(store);

// 5.FIND--it itrate over the array implimenting a given condition and returns the very
// first element of the array which satisfy the given condition.
//  let array = [ -60, 70, -20, 10, 40, -90 ];
//  let store = array.find(function(item){
//     return item > 0;
//  })
//  console.log(store);

// 6.SOME--IT itrates over the array and check for a given condition that if any of the element
// statisfy that condition or not and returns a boolean value.
// let array = [ -60, 70, -20, 10, 40, -90 ];
// let store = array.some(function(item){
//     return item >0;
// })
// console.log(store);

// 7.EVERY-- unlike some it checks the given condition on each and every elements of the array
// then returns a boolean value.
// let array = [ -60, 70, -20, 10, 40, -90 ];
// let store = array.every(function(item){
//     return item > 0;
// })
// console.log(store);

// 8.FLAT-- unlike all the above functions it doesn't have a call back function, basically it flatten the
// array in one big array.this was introduced in Es 2019.
// let array = [ [-60, 70], [-20], 10, 40, -90 ];
// console.log(array.flat());

// NOTE:- suppose here if we had more  nested arrays,, then simply this array method willn't work
// for that we need to specify the argument i.e death value to this method..
// let array = [ [[-60], 70], [[-20], 10], 40, -90 ];
// console.log(array.flat(2));

// 9.FLATMAP--this is the combination of flat and map together but it takes the argument as as the map--
// const obj1 = {
//     name : 'saurabh',
//     creditTranscation:[200,500,800,1200],
//     debitTranscation:[400,800,100]
// }
// const obj2 = {
//     name : 'raja',
//     creditTranscation:[500,100,800,200],
//     debitTranscation:[40,80,10]
// }
// const obj3 = {
//     name : 'aman',
//     creditTranscation:[2000,800,800,1270],
//     debitTranscation:[400,800,108]
// }
// const obj4 = {
//     name : 'amit',
//     creditTranscation:[206,508,800,200],
//     debitTranscation:[4000,840,140]
// }
// const details = [obj1,obj2,obj3,obj4];

// const DetailTranscation = details.flatMap(acc => acc.creditTranscation).reduce((acc,curr)=>acc + curr,0);
// console.log(DetailTranscation);

// 10.SORT--it itrates over the array and then sort the elements of the array,it converts all the elements in the string first--

// let array = [ -60, 70, -20, 10, 40, -90 ];
// console.log(array.sort());//this output is not sorted.
// console.log( array.sort((a,b)=>(a-b)));

// Question --->Implement a function “duplicate” to duplicate an array, as shown below:

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

// *************************OBJECTS***************************
// ***********************************************************

// objects in js ****************************

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

// iterating in the objects in the js*******

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

// copying one object to another so that it doesn't have affect on the first obj***************************
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

// nested objects***************************

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
//   // we can also put function as the key VALUE within the object*****************
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

// *****************INTERVAL FUNCTIONS***********************
// **********************************************************

// timming events in java script***********************
// setTimeout();
// setInterval();
// clearInterval();

// create a countdown that starts with 10 and ends at 1 sec *
// function timer(){
//   console.log(count);
//   count --;
//   if(count == 0){
// console.log("time up!");
//     clearInterval(id);
//   }
// }
// let id = setInterval(timer , 1000);

//--------make a clock representing  current hours,min,sec------------
// setInterval(() => {
//     const now = new Date();
//     const hour =`${now.getHours()}`.padStart(2 , 0);
//     const min =`${now.getMinutes()}`.padStart(2 , 0);
//     const sec =`${now.getSeconds()}`.padStart(2 , 0);
//     console.log(`${hour}:${min}:${sec}`);

// },1000);

// *************************DOM******************************
// **********************************************************

// starting DOM**********************************************
// var elems = document.getElementById('head');
// elems.style.backgroundColor = "red";
// var elem2 = document.querySelector(".para");
// elem2[0].innerText = "i am changed para";
// elem2[1].style.color = "green";

// starting with event listener*******************************
// some of the mouse events***********************************
//  var target_button = document.querySelector('.btn');
//  target_button.style.height = "50px";
//  target_button.style.width = "100px";
//  target_button.addEventListener('click',function(){
//     alert("i am very happy");
//  });
//  target_button.addEventListener('dblclick',function(){
//     document.write("hey y u have clicked 2 times");
//  });

// some of the keyboard events ***************************
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

// event propagation *****************************************
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

/*NOTE:-------closures in js enbles us the access to use the varible outside the scope even if the execution of the outer context is done 
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

// ***********HIGHER ORDER FUNCTION**************************
// **********************************************************

//  NOTE:-----function which return function or takes functions
//  as the  arguments are known as the HigherOrder functions.

// getting stated with the higher order function**************************
// we will see the behaviour of the parameters when they are passed ******
// const flight = "LH1234";
// const sagar = {
//   name: "saurabh",
//   age: 22,
//   city: "bangalore",
//   passport: 12344567,
// };
// function checkIn(flightNo, passenger) {
//   flightNo = 'Lh345';
//   passenger.name = "golu";
//   console.log(passenger.name);
//   console.log(passenger.passport);
//   if (passenger.passport === 12344567) {
//     alert(`checked in`);
//   } else {
//     alert(`wrong passport info!`);
//   }
// }
// checkIn(flight, sagar);
// console.log(flight);
// console.log(sagar);

// function manipulate(passenger){
//   passenger.passport = 10000000;
// }
// manipulate(sagar);
// console.log(sagar);

//NOTE:----- here in objects if we try to change values using parametres then those changes will automatically  reflect to the  actual values
// of the objects becoz both the values are pointing towards the reference of the same locataion so changes done will directly affect the changes at the actaul location.but this is not the case with the variables becoz they are stored in the heap memory..

// default parameters in function***
// const detailArray = [];

// const booking = function(flight,passengers = 1,price){
//   const details ={
//     flight,passengers,price
//   }
//   console.log(details);
//   detailArray.push(details);
// }
//  booking('LH200', undefined,500);
//  console.log(detailArray);

// demonstration of higher order function****

// function1
// const uppercase = function(str){

//   console.log(str.toUpperCase());
// }
//  function 2
// const lowercase = function(str){
//   console.log(str.toLowerCase());
// }

// higher order function********

// const converter = function(str ,fun){

//   console.log(`the name of the function is ${fun.name}`);
//   console.log(`transformed string is ${fun(str)}`);
//   console.log(`original string is ${str}`);

// }
// converter("aman",uppercase);

// function returning a function *******
// const greet = function(greeting){
//   return function(name){
//     console.log(`${greeting} ${name}`);
//   }
// }

// const store = greet('hey');
// store('sagar');

// using arrow function******

// const greet = function(greeting){
//     return (name)=>{
//       console.log(`${greeting} ${name}`);
//     }
//   }
//   const store = greet('hey');
// store('sagar');

// CALL APPLY and BIND methods*****************************

// let details = {
//   name: "sagar",
//   age: 22,
//   designation: "student",
//   // print: function(){
//   //   console.log(this.name);
//   // }
// };
// let fun = function (state,country) {
//   console.log(this.name + " "+country+" "+state);
// };
// fun.call(details);

// let details2 = {
//   name: "saurabh",
//   age: 23,
//   designation: "student",
// };
// // NOTE:---call :suppose if we want to call a function that is not present in our object but we gonna point to our object.
// // details.print.call(details2);
// // fun.call(details2,"india");

// //NOTE:---apply:-it is similar to the call method the only difference is that we can pass the parameters putting them in a array list.
// fun.apply(details2,["karnataka","india"]);

// //NOTE:---bind:- it allows the user to store the function call as a  value in  a variable and return when called that variable.

// let store = fun.bind(details2,"karnataka","india");
// console.log(store);
// store();

// **********************ADVANCED DOM ***********************
// **********************************************************

//inserting elements to a existing DOM--
// const bodySelect = document.body;
// const msg = document.createElement("div");
// msg.classList.add("cookie-msg");
// msg.innerHTML =
//   'we store cookies for enhancing performanc. <button  class="closeBtn">ok</button>';
// bodySelect.append(msg);
// bodySelect.prepend(msg);
// bodySelect.before(msg);
// bodySelect.after(msg);
// //deleting element from the dom--
// document.querySelector('.closeBtn').addEventListener("click",()=>
//    msg.remove()
// )

//styling using js--
// msg.style.backgroundColor = "red";
// document.body.style.setProperty("backgroungColor", "red");
// bodySelect(getComputedStyle(bodySelect).backgroundColor,"red");

//attributes--
// const logo = document.querySelector('.imgg');
// console.log(logo.src);
// console.log(logo.alt);
// console.log(logo);
// logo.alt = "google";
// console.log(logo.alt);
//here we could have also used get attributes
// console.log(logo.getAttribute('src'));//this will give the relative address

//classes--
// logo.classList.add("class1",'class2');
// logo.classList.remove("clas1");
// logo.classList.toggle('class1');
// logo.classList.contains("class2");