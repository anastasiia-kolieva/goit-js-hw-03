"use strict";

const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];

const getAllPropValues = function (arr, prop) {
  let arrOfValues = [];
  let product;
  let propertyOfProduct;
  let valueOfProperty;

  // Разбила массив на отдельные обьекты
  for (let i = 0; i < products.length; i += 1) {
    product = products[i];
    // масив свойств обьекта
    propertyOfProduct = Object.keys(product);
    // масив значений свойств обьекта
    valueOfProperty = Object.values(product);

    // если имя свойства равно  N-ному елементу масива propertyOfProduct(масив свойств)
    if (prop === propertyOfProduct[i]) {
      // этот N-нный елемент добавляется в масив arrOfValues
      arrOfValues.push(valueOfProperty[i]);
    }
  }

  console.log(arrOfValues);
//   выводиться массив с одним значением, индекс которого совпадает с индексом свойства?????????

  return arrOfValues;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
getAllPropValues(products, "name"); // ['Радар', 'Сканер', 'Дроид', 'Захват']

getAllPropValues(products, "quantity"); // [4, 3, 7, 2]

getAllPropValues(products, "category"); // []
