"use strict";

const btn = document.getElementById("loadPokemon");
const output = document.getElementById("output");

btn.addEventListener("click", async () => {
  const name = prompt("Введи ім'я або ID покемона:");

  if (!name) return;

  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

    if (!res.ok) throw new Error("Pokemon not found");

    const data = await res.json();

    const result = {
      name: data.name,
      height: data.height,
      weight: data.weight,
      abilities: data.abilities.map(a => a.ability.name)
    };

    output.textContent = JSON.stringify(result, null, 2);

  } catch (err) {
    output.textContent = "Помилка: " + err.message;
  }
});