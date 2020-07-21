"use strict";

const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];

const getAllPropValues = function (arr, prop) {
  const arrOfProperties = [];

  for (const property of arr) {
    if (property[prop]) {
      arrOfProperties.push(property[prop]);
    }
  }
  console.log(arrOfProperties);
  return arrOfProperties;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
getAllPropValues(products, "name"); // ['Радар', 'Сканер', 'Дроид', 'Захват']

getAllPropValues(products, "quantity"); // [4, 3, 7, 2]

getAllPropValues(products, "category"); // []
