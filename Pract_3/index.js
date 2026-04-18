"use strict";

class User {
  constructor(name, age, profession) {
    this.name = name;
    this.age = age;
    this.profession = profession;
  }

  display() {
    console.log(`Користувач: ${this.name}, ${this.age}, ${this.profession}`);
  }
}

class Admin extends User {
  constructor(name, age, profession, role) {
    super(name, age, profession);
    this.role = role;
  }

  display() {
    console.log(`Адмін: ${this.name}, роль: ${this.role}`);
  }
}

let name = prompt("Ім'я:");
let age = Number(prompt("Вік:"));
let prof = prompt("Професія:");

let user = new User(name, age, prof);
user.display();

let admin = new Admin("Admin", 30, "IT", "SuperAdmin");
admin.display();