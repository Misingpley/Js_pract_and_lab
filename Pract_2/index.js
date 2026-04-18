"use strict";

function greet() {
  console.log("Привіт!");
}
greet();

const multiply = (a, b) => a * b;
console.log(multiply(5, 6));

function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter());
console.log(counter());

function createSurvey() {
  let name = prompt("Ім'я:");
  let age = Number(prompt("Вік:"));
  let city = prompt("Місто:");

  return {
    name,
    age,
    city,
    isAdult: age >= 18
  };
}

function displaySurvey(data) {
  console.log(data);
  alert(`Ім'я: ${data.name}, Вік: ${data.age}, Місто: ${data.city}`);
}

const survey = createSurvey();
displaySurvey(survey);