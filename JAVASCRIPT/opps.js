"use strict";

//constructure function properties-----
//1. It is called by using new keyword.
//2.this new key word have several properties.
//3.As soon as we call the constructure function the "new" keyword creates a new  empty object{}.
//4.the "this" keyword in the constructure function will now refer to the empty object.
//5.the newly created object link to the prototype object.
//6.finally the constructure function automatically returns. 
//7.the constructure function is created as same as the normal function just calling is different.

const conFun = function(name,dateOfBirth){
    this.name = name;
    this.dateOfBirth = dateOfBirth;
}
 const sagar = new conFun("sagar",1999);
 const anurag = new conFun("anurag",1998);
 const royal = new conFun("royal",2000);
 console.log(sagar);//here there is only one thing in the protoype of conFun i.e the constructure function itself.
 console.log(anurag);
 console.log(royal);

 //prototype--

 conFun.prototype.calcAge = function(){//but by doing this we are pushing the calAge function to the prototype of conFun.(analogy) 
    return (2022 - this.dateOfBirth)//so basically here the object will not be having method calAge but still we can acess 
 };//that with the help of prototypal inheritance.And  here the this keyword will always set to the object that is caliing. 
console.log(sagar.calcAge());
console.log(anurag.calcAge());
console.log(royal.calcAge());
console.log(sagar);
//checking the prototype  by using "__proto__";
console.log(conFun.__proto__);
console.log(sagar.__proto__);

//not just the method we can also set properties with the help of "prototype"--
conFun.prototype.city = "bangalore";
console.log(anurag.city);// so basically this city property is not the direct property of anurag but still we can acess it as we discuss earlier due to prototypal inheritance.
console.log(anurag.hasOwnProperty("city"));//this method is used to check the direct property of an object. in this case it is false.