"use strict";

const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];

const calculateTotalPrice = function (allProdcuts, productName) {
  let totalPrice = 0;

  for (let product of products) {
    if (product.name === productName) {
      totalPrice = product.price * product.quantity;
      console.log(totalPrice);
    }
    continue;
  }
  return totalPrice;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
calculateTotalPrice(products, "Радар"); // 5200

calculateTotalPrice(products, "Дроид"); // 2800
