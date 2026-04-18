"use strict";

class PersonalInfo {
  constructor(name, age, contact) {
    this.name = name;
    this.age = age;
    this.contact = contact;
  }
}

class Resume {
  constructor(info, skills) {
    this.info = info;
    this.skills = skills;
  }

  render() {
    return `
      <h2>${this.info.name}</h2>
      <p>Вік: ${this.info.age}</p>
      <p>Контакти: ${this.info.contact}</p>
      <p>Навички: ${this.skills.join(", ")}</p>
    `;
  }
}

let name = prompt("Ім'я:");
let age = Number(prompt("Вік:"));
let contact = prompt("Контакт:");
let skills = prompt("Навички через кому:").split(",");

let info = new PersonalInfo(name, age, contact);
let resume = new Resume(info, skills);

document.getElementById("output").innerHTML = resume.render();