"use strict";

const findBestEmployee = function (employees) {
  let amoutOfTasks;
  let amoutOfEmployees;
  let lowestAmoutOfTask = 0;

  amoutOfTasks = Object.values(employees);

  for (let i = 0; i < amoutOfTasks.length; i += 1) {
    if (lowestAmoutOfTask <= amoutOfTasks[i]) {
      lowestAmoutOfTask = amoutOfTasks[i];
    }
  }

  amoutOfEmployees = Object.keys(employees);

  for (const employee of amoutOfEmployees) {
    if (employees[employee] === lowestAmoutOfTask) {
      console.log(employee);
    }
  }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */

findBestEmployee({
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
}); // lorence

findBestEmployee({
  poly: 12,
  mango: 17,
  ajax: 4,
}); // mango

findBestEmployee({
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
}); // lux
