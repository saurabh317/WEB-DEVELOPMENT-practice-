"use strict";
//synchronous: It is the property of the js that allows the line-by-line execution of the code .

//Asynchronous:But there was an issue and that is suppose if we had a setInterval function or 
//any timeout function then our entire code after that function will not be executed until that
// particular timeout function executed......
//Then there comes an most important feature of js i.e its Asynchronous nature.It emplies that 
//if there is any such task that will stop the execution then that particular task will be done in the background ..


const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');


//making our first AJAX call
const card = function(countryName){
const request = new XMLHttpRequest();
request.open('GET',`https://restcountries.com/v3.1/name/${countryName}`);
request.send();

request.addEventListener('load' ,function(){
    const [data] = JSON.parse(this.responseText);
  console.log(data);


const html = `
<article class="country">
<img class="country__img" src="${data.flags.png}" />
<div class="country__data">
  <h3 class="country__name">${data.name.common}</h3>
  <h4 class="country__region">${data.region}</h4>
  <p class="country__row"><span>👫</span>${(+data.population/1000000).toFixed(1)}M people</p>
  <p class="country__row"><span>🗣️</span>${Object.values(data.languages).shift()}</p>
  <p class="country__row"><span>💰</span>${Object.values(data.currencies).shift().name}</p>
</div>
</article>`;

countriesContainer.insertAdjacentHTML('beforeend',html);
countriesContainer.style.opacity = 1;

})
}
card('india');
card('portugal');
card('usa');
