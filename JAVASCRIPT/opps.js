"use strict";

//constructure function properties-----
//1.It is called by using new keyword.
//2.this new key word have several properties.
//3.As soon as we call the constructure function the "new" keyword creates a new  empty object{}.
//4.the "this" keyword in the constructure function will now refer to the empty object.
//5.the newly created object link to the prototype object.
//6.finally the constructure function automatically returns.
//7.the constructure function is created as same as the normal function just calling is different.

// const conFun = function (name, dateOfBirth) {
//   this.name = name;
//   this.dateOfBirth = dateOfBirth;
// };
// const sagar = new conFun("sagar", 1999);
// const anurag = new conFun("anurag", 1998);
// const royal = new conFun("royal", 2000);
// console.log(sagar); //here there is only one thing in the protoype of conFun i.e the constructure function itself.
// console.log(anurag);
// console.log(royal);

//prototype--

// conFun.prototype.calcAge = function () {
//   //but by doing this we are pushing the calAge function to the prototype of conFun.(analogy)
//   return 2022 - this.dateOfBirth; //so basically here the object will not be having method calAge but still we can acess
// }; //that with the help of prototypal inheritance.And  here the this keyword will always set to the object that is caliing.
// console.log(sagar.calcAge());
// console.log(anurag.calcAge());
// console.log(royal.calcAge());
// console.log(sagar);
// //checking the prototype  by using "__proto__";
// console.log(conFun.__proto__);
// console.log(sagar.__proto__);

// //not just the method we can also set properties with the help of "prototype"--
// conFun.prototype.city = "bangalore";
// console.log(anurag.city); // so basically this city property is not the direct property of anurag but still we can acess it as we discuss earlier due to prototypal inheritance.
// console.log(anurag.hasOwnProperty("city")); //this method is used to check the direct property of an object. in this case it is false.

// prototype of some build-in objects--------
// const arr = [1,3,5,3,6,8,9];
// console.log(arr);
// console.log(arr.__proto__);//this includes all the array methods and here is how various array function works.
// console.log(Array.__proto__);//build-in array object.
//prototype of function---------------
// const check = (x)=>
// x+2;
// console.dir(check.__proto__);

//************************coding challenge*****************************
// ********************************************************************

// const car = function (name, speed) {
//   this.name = name;
//   this.speed = speed;
// };
// car.prototype.accelerate = function () {
//   this.speed = this.speed + 5;
//   return this.speed;
// };
// car.prototype.brake = function () {
//   this.speed = this.speed - 5;
//   return this.speed;
// };

// const bmw = new car("bm", 120);
// const honda = new car("honda", 150);
// console.log(bmw);
// console.log(
//   "you accelerate the car ur current speed is " + bmw.accelerate() + "km/h"
// );
// console.log(
//   "you accelerate the car ur current speed is " + bmw.accelerate() + "km/h"
// );
// console.log("you put brake, ur current speed is " + bmw.brake() + "km/h");
// console.log(
//   "you accelerate the car ur current speed is " + honda.accelerate() + "km/h"
// );
// console.log("you put brake, ur current speed is " + honda.brake() + "km/h");

//NOTE--NOW LETS LOOK ON ALL THESE THINGS THAT HOW THE CONSTRUCTURE FUNCTION WORKS IN ES6 WRAPPED IN A CLASS---------
//********************************************************************************************************************

// class person{
//   constructor(name,birthYear){
//     this.name = name;
//     this.birthYear = birthYear;
//   }
//   calcAge = function(){//so basically in ES6 this was introduced so that all these things don't look weird to the programmers
//     return 2022 - this.birthYear;//coming from different lang.,Rest all the prototypal chaining works same it is just the syntax
//   }//change .Internal working is preety same as earlier.
// }
// const sagar = new person("sagar",1999);
// console.log(sagar);
// console.log(sagar.calcAge());
// //here we can manually add functions as we were adding before
// person.prototype.greting = function(){
//   return ("hello! "+this.name+" have a good day😊")
// }
// console.log(sagar.greting());

//getters and setters ------it works same in objects like we are setting a new property.
// const person = {
//   name:"sagar",
//   class:5,
//   get city(){
//     return "bangalore"
//   }
// }

// console.log(person);

//using getters and setters in classes-----
class car{
  constructor(name,price){
    this.name = name;
    this.price = price;
  }
  print(){
    console.log("this is "+this.name +"its price is "+this.price);
  }
  set name(name){
    if(name.includes(' ')){
      this._name =  name;//here we used _ just to remove the name conflict
    }
    else{
      alert("this is not the full name of the car");
    }
  }
  get name(){
    return this._name;
  } 

  //static method--
  static sound(){
    console.log("bummmmm");
  }
  
}
const bmw = new car("bmw",12222200);
console.log(bmw);
const honda = new car("honda xSeries",14570000);
console.log(honda);
car.sound();



