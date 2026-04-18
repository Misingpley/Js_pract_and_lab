"use strict";

import { greet, add, multiply, sumAll } from "./utils.js";
import { user, numbers } from "./data.js";

const app = document.getElementById("app");

const { name, age, city } = user;

const info = `Користувач: ${name}, Вік: ${age}, Місто: ${city}`;

const newNumbers = [...numbers, 6, 7];

app.innerHTML = `
  <p>${greet(name)}</p>
  <p>${info}</p>
  <p>10 + 5 = ${add(10, 5)}</p>
  <p>10 * 5 = ${multiply(10, 5)}</p>
  <p>Сума: ${sumAll(...numbers)}</p>
  <p>Новий масив: ${newNumbers.join(", ")}</p>
`;

console.log("ES6 працює ✔");