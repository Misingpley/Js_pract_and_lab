"use strict";

export function greet(name) {
  return `Привіт, ${name}!`;
}

export const add = (a, b) => a + b;

export const multiply = (a, b) => a * b;

export function sumAll(...nums) {
  return nums.reduce((acc, n) => acc + n, 0);
}