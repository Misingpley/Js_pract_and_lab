"use strict";

const btn = document.getElementById("loadPokemon");
const card = document.getElementById("card");

btn.addEventListener("click", async () => {
  const id = Math.floor(Math.random() * 151) + 1;

  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if (!res.ok) throw new Error("Error");

    const data = await res.json();

    renderPokemon(data);

  } catch (e) {
    card.innerHTML = "Помилка";
  }
});

function renderPokemon(p) {
  const types = p.types.map(t => `<span>${t.type.name}</span>`).join("");

  card.innerHTML = `
    <div class="card">
      <div class="top">
        <div class="hp">HP ${p.stats[0].base_stat}</div>
        <img src="${p.sprites.front_default}" />
      </div>

      <h2>${p.name}</h2>

      <div class="types">${types}</div>

      <div class="stats">
        <div>
          <strong>${p.stats[1].base_stat}</strong>
          <p>Attack</p>
        </div>
        <div>
          <strong>${p.stats[2].base_stat}</strong>
          <p>Defense</p>
        </div>
        <div>
          <strong>${p.stats[5].base_stat}</strong>
          <p>Speed</p>
        </div>
      </div>
    </div>
  `;
}