"use strict";

const input = document.getElementById("taskInput");
const btn = document.getElementById("addTask");
const list = document.getElementById("taskList");

const jsonString = '{"name":"Ivan","age":30}';

try {
  const obj = JSON.parse(jsonString);
  console.log("JSON → object:", obj);

  const back = JSON.stringify(obj, null, 2);
  console.log("object → JSON:", back);
} catch (e) {
  console.error("JSON error", e);
}

function loadTasks() {
  try {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  } catch {
    return [];
  }
}

function saveTasks(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function render() {
  const tasks = loadTasks();
  list.innerHTML = "";

  tasks.forEach((task, i) => {
    const li = document.createElement("li");
    li.textContent = task;
    li.dataset.index = i;
    list.appendChild(li);
  });
}

btn.addEventListener("click", () => {
  const text = input.value.trim();
  if (!text) return;

  const tasks = loadTasks();
  tasks.push(text);

  saveTasks(tasks);
  render();

  input.value = "";
});

list.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    const index = e.target.dataset.index;

    const tasks = loadTasks();
    tasks.splice(index, 1);

    saveTasks(tasks);
    render();
  }
});

render();