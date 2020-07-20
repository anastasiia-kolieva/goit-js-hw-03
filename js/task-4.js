"use strict";

const countTotalSalary = function (employees) {
  let totalSalary = [];
  let total = 0;

  totalSalary = Object.values(employees);

  for (let i = 0; i < totalSalary.length; i += 1) {
    total += totalSalary[i];
  }

  console.log(total);

  return total;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
countTotalSalary({}); // 0

countTotalSalary({
  mango: 100,
  poly: 150,
  alfred: 80,
}); // 330

countTotalSalary({
  kiwi: 200,
  lux: 50,
  chelsy: 150,
}); // 400
