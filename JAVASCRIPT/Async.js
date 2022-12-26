"use strict";
//synchronous: It is the property of the js that allows the line-by-line execution of the code .

//Asynchronous:But there was an issue and that is suppose if we had a setInterval function or
//any timeout function then our entire code after that function will not be executed until that
// particular timeout function executed......
//Then there comes an most important feature of js i.e its Asynchronous nature.It emplies that
//if there is any such task that will stop the execution then that particular task will be done in the background ..

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

// //making our first AJAX call
const htmlfun = function (data,className = '') {
  const html = ` 
<article class="country ${className}">
<img class="country__img" src="${data.flags.png}" />
<div class="country__data"> 
  <h3 class="country__name">${data.name.common}</h3>
  <h4 class="country__region">${data.region}</h4>
  <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(
    1
  )}M people</p>
  <p class="country__row"><span>🗣️</span>${Object.values(
    data.languages
  ).shift()}</p>
  <p class="country__row"><span>💰</span>${
    Object.values(data.currencies).shift().name
  }</p>
</div>
</article>`;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

// const card = function (countryName) {
//   //first AJAX call
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v3.1/name/${countryName}`);
//   request.send();

//   request.addEventListener("load", function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     htmlfun(data);

//     const neighbour = data.borders[0];
//     console.log(neighbour);
//     if(!neighbour) return;

//     //second AJAX call 
//     const request2 = new XMLHttpRequest();
//     request2.open("GET", `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load',function(){
//       const [data2]  = JSON.parse(this.responseText);
//       console.log(data2);
//       htmlfun(data2,'neighbour');
//     });

//   });

  
// }
// // card("india");
// // card("pakistan");
// card("usa");

//above we incounter CALLBACK HELL it is the nesting of multiple callback function which led to errors in the code further
//it also led to the inaccuracy of the code..So to solve this we have another concept PROMISES.
//There are different states of the promises 1.)PENDING 2.)SETTELED 3.)FULFILLED / REJECTED. 

// const result = fetch(`https://restcountries.com/v3.1/name/india`);
// console.log(result);

//again building a card of country details using fetch API and promises.
// const renderCountryCard = function(name){
//  const result = fetch(`https://restcountries.com/v3.1/name/${name}`);
//  result.then(function(response){
//   console.log(response);
//   return response.json();
//  }).then(function(data){
//   console.log(data);
//   htmlfun(data[0]);
//  })
// }
// renderCountryCard("india");

//***********************OR**********************

const renderCountryCard = function(name){
  const result = fetch(`https://restcountries.com/v3.1/name/${name}`)
  .then((response) => response.json())
  .then((data) => htmlfun(data[0]));
}
renderCountryCard('usa');