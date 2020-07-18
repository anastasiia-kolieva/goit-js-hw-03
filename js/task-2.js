"use strict";

const countProps = function (obj) {
  let amoutOfProps = 0;

  const objProos = Object.keys(obj);

  amoutOfProps = objProos.length;
  console.log(amoutOfProps);

  return;
};

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */

countProps({}); // 0

countProps({ name: "Mango", age: 2 }); // 2

countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }); // 3
