"use strict";

let name = prompt("Введіть ім'я:");
let age = Number(prompt("Введіть вік:"));
let city = prompt("Введіть місто:");
let color = prompt("Улюблений колір:");
let isWorking = confirm("Працюєте?");

let isAdult = age >= 18;

console.log(typeof name, typeof age, typeof city, typeof color, typeof isWorking);

alert(`
Ім'я: ${name}
Вік: ${age}
Місто: ${city}
Колір: ${color}
Працює: ${isWorking}
Повнолітній: ${isAdult}
`);