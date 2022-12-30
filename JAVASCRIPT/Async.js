"use strict";
// //synchronous: It is the property of the js that allows the line-by-line execution of the code .

//// Asynchronous:But there was an issue and that is suppose if we had a setInterval function or
// //any timeout function then our entire code after that function will not be executed until that
// // particular timeout function executed......
// //Then there comes an most important feature of js i.e its Asynchronous nature.It emplies that
// // if there is any such task that will stop the execution then that particular task will be done in the background ..

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

// // //making our first AJAX call
const htmlfun = function (data, className = "") {
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

// //above we incounter CALLBACK HELL it is the nesting of multiple callback function which led to errors in the code further
// //it also led to the inaccuracy of the code..So to solve this we have another concept PROMISES.
// //There are different states of the promises 1.)PENDING 2.)SETTELED 3.)FULFILLED / REJECTED.

// const result = fetch(`https://restcountries.com/v3.1/name/india`);
// console.log(result);

// //again building a card of country details using fetch API and promises.
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

////***********************OR**********************

// const renderCard = function (nameOfCountry) {
//   fetch(`https://restcountries.com/v3.1/name/${nameOfCountry}`)
//   .then((response) => {

//   if(!response.ok){
//     throw new Error(`country not found(${response.status})`);
//     return response.json();

//   }
//   }
//     )
//   .then((data)=>{
//     htmlfun(data[0]);
//      //second country
//     const neighbour = data[0].borders[0];
//     if(!neighbour) return;
//    return  fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
//   }).then((response)=> response.json())
//   .then((data)=> {
//     htmlfun(data[0],'neighbour');
//   //third country
//     const neighbour2 = data[0].borders[0];
//     console.log(neighbour2);
//     if(!neighbour2) return;

//      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour2}`)
//   })
//   .then((response)=> response.json())
//   .then((data)=> htmlfun(data[0] ,'neighbour2'))
//   .catch((err) => {
//     console.error(err);
//   renderError(`something went wrong ${err.message}.try again`)
// })

// };
// btn.addEventListener('click',function(){
//   // renderCard('india');
//   renderCard('dsgd');

// })

// const renderError = function(msg){
//   countriesContainer.insertAdjacentText('beforeend',msg);
//   countriesContainer.style.opacity = 1;

// }

// //EVENT LOOP------
// /here in the below code the synchronous task will be done at the very start.
//and in the asynchronous tasks as we know the promises don't go in the callback stack it direct goes to the micro tasks  which has the higest priority.
// console.log("time start");
// setTimeout(()=>console.log("hello i am a timer"),0);
// Promise.resolve('Resolved promise 1').then((response)=>console.log(response));
// console.log("time ends");

// //BUILDING OUR OWN PROMISE-
// //resolve:- full-fill promise & reject :-not full-filled
// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log("lottery is happening");

//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve("you win 💰");
//     } else {
//       reject(new Error("you loose your money💩");
//     }
//   }, 2000);
// });

// lotteryPromise
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

// //challenge  loading two images at the time interval of 2 secs..

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// const imageContainer = document.querySelector(".images");
// const imageLoad = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement(`img`);
//     img.src = imgPath;
//     img.addEventListener(`load`, function () {
//       imageContainer.append(img);
//       resolve(img);
//     });
//     img.addEventListener(`error`, function () {
//       reject(new Error("images not found"));
//     });
//   });
// };

// let currentImg;

// imageLoad("/ASSETS/IMAGES/9054.jpg")
//   .then((img) => {
//     currentImg = img;
//     console.log("image 1 loaded");
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = `none`;
//     return imageLoad(`/ASSETS/IMAGES/mozrila.png`);
//   })
//   .then((img) => {
//     currentImg = img;
//     console.log("image 2 loaded");
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = `none`;
//   })

//   .catch((err) => console.log("image not found"));

// //consuming promise using ASYNC AWAIT----async and await is just a suger coating on the then method.
// //in previous aproach we were returning the response and then consuming that promise with THEN method.

// const whereAmI = async function (country) {
//   const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
//   const data = await res.json();
//   console.log(data);
//   htmlfun(data[0]);
//   //----Rendering the second country----
//   const neighbour = data[0].borders[0];
//   if (!neighbour) return;
//   console.log(neighbour);
//   const res2 = await fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//   const data2 = await res2.json();
//   console.log(data2);
//   htmlfun(data2[0], "neighbour");
// };
// whereAmI("india");

// // error handling with ASYNC AND AWAIT
// // try and catch is used for handling the errors

// const whereAmI = async function (country) {
//   try {
//     const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
//     if (!res.ok) throw new Error("problem in getting data");
//     const data = await res.json();
//     console.log(data);
//     htmlfun(data[0]);
//     //----Rendering the second country----
//     const neighbour = data[0].borders[0];
//     if (!neighbour) return;
//     console.log(neighbour);
//     const res2 = await fetch(
//       `https://restcountries.com/v3.1/alpha/${neighbour}`
//     );
//     if (!res2.ok) throw new Error("problem in getting neighbour country");
//     const data2 = await res2.json();
//     console.log(data2);
//     htmlfun(data2[0], "neighbour");
//   } catch (err) {
//     console.error(`${err}`);
//   }
// };
// whereAmI("india");

// //running Promises in parallel tp each other-----it is done with the hepl of  promise.all function
// //it takes all the promises ro be run parallel as an array element and returns a promise .
const getData = async function (url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error("problem in getting data");
  const data = await res.json();
  return data;
  // console.log(data);
};
// const get3Countries = async function (c1, c2, c3) {
//   try {
//     // const [data1] = await getData(`https://restcountries.com/v3.1/name/${c1}`);
//     // const [data2] = await getData(`https://restcountries.com/v3.1/name/${c2}`);
//     // const [data3] = await getData(`https://restcountries.com/v3.1/name/${c3}`);
//     const data = await Promise.all([
//       getData(`https://restcountries.com/v3.1/name/${c1}`),
//       getData(`https://restcountries.com/v3.1/name/${c2}`),
//       getData(`https://restcountries.com/v3.1/name/${c3}`),
//     ]);
//     // console.log([data1.capital, data2.capital, data3.capital]);
//     console.log(data.flatMap((d) => d[0].capital));
//   } catch (err) {
//     console.error(`error 💥💥 +${err}`);
//   }
// };

// get3Countries("india", "portugal", "usa");

// // creating a timeout using  PROMISE.RACE---

// const timeOut = async function (sec) {
//   await new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject(new Error("Request time out"));
//     }, sec * 1000);
//   });
// };

// Promise.race([
//   getData(`https://restcountries.com/v3.1/name/india`),
//   timeOut(0.01),
// ])
//   .then((res) => console.log(res[0]))
//   .catch(err => console.log(err));











// // write a promise to load a script into ur html using async and await------- 

// async function loadScript(url) {
//   try {
//     // Use the `await` keyword to wait for the script to finish loading
//     await new Promise((resolve, reject) => {
//       const script = document.createElement('script');
//       script.src = url;
//       script.onload = resolve();
//       script.onerror = reject();
//       document.head.appendChild(script);
//     });
//     // The script has now finished loading
//     console.log('Script loaded successfully');
//   } catch (error) {
//     // An error occurred while loading the script
//     console.error('Error loading script:', error);
//   }
// }
// // Call the `loadScript` function to start loading the script
// loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js');

// // write a promise to load a script into ur html using then method--------------- 

// function fun (url) {
//   return new Promise(function (resolve, reject) {
//     const script = document.createElement(`script`);
//     script.src = url;
//     document.head.appendChild(script);
//     script.onload = resolve(script);
//     script.onerror = reject(new Error("something went wrong"));
//   })
// };

// fun(url =
//   "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
// );

// const promise = fun(url);

// promise.then((script)=>console.log("loaded sucessfully" + script))
// .catch((err) => console.error(err.message));
