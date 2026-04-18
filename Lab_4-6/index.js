"use strict";

const container = document.getElementById("movies");
const searchInput = document.getElementById("search");
const sortBtn = document.getElementById("sort");

let movies = [];

async function loadMovies() {
  try {
    const res = await fetch("https://api.tvmaze.com/shows");

    if (!res.ok) throw new Error("API error");

    movies = await res.json();
    render(movies);

  } catch (err) {
    container.innerHTML = "Помилка завантаження";
  }
}

function render(data) {
  container.innerHTML = data.map(m => `
    <div style="border:1px solid #ccc; margin:5px; padding:5px;">
      <h3>${m.name}</h3>
      <p>Рейтинг: ${m.rating.average}</p>
    </div>
  `).join("");
}

// пошук
searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();

  const filtered = movies.filter(m =>
    m.name.toLowerCase().includes(value)
  );

  render(filtered);
});

sortBtn.addEventListener("click", () => {
  const sorted = [...movies].sort((a, b) =>
    (b.rating.average || 0) - (a.rating.average || 0)
  );

  render(sorted);
});

loadMovies();