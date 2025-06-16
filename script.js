// Temas
const btn = document.getElementById("theme-toggle");
btn.onclick = () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
};

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

// apskates
let hits = localStorage.getItem("hits") || 0;
hits++;
localStorage.setItem("hits", hits);
document.getElementById("hit-counter").textContent = hits;

// Gads
document.getElementById("year").textContent = new Date().getFullYear();

