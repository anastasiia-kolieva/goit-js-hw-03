"use strict";

const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

// сформировала массив userInformation из ключей обьекта user
const userInformation = Object.keys(user);

// выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of  ????