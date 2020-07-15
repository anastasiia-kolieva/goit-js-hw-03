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

const userInformation = Object.keys(user);

for (const information of userInformation) {
  console.log(information, ":", user[information]);
}
