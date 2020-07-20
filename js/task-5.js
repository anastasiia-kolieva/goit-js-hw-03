"use strict";

const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];

const getAllPropValues = function (arr, prop) {
  // задаём результирующий массив значений свойства
  const arrOfProperties = [];

  // Перебор массива
  // Item-елемент масива arr (один обьект в маисве обьектов)
  for (const property of arr) {
    // Если в объекте есть заданое свойство?????
    if (property[prop]) {
      // тогда пушим значение этого свойства в массив arrProp
      arrOfProperties.push(property[prop]);
    }
  }
  console.log (arrOfProperties);
  return arrOfProperties;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
getAllPropValues(products, "name"); // ['Радар', 'Сканер', 'Дроид', 'Захват']

getAllPropValues(products, "quantity"); // [4, 3, 7, 2]

getAllPropValues(products, "category"); // []
