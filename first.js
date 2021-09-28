// const fnA = function (message, callback) {
//   console.log(message);

//   console.log(callback);
//   callback(100);
// };

// const fnB = function (number) {
//   console.log("Это лог при вызове fnB", number);
// };
// fnA("qwerty", fnB);

// const doMath = function (a, b, callback) {
//   const result = callback(a, b);

//   console.log(result);
// };

// const add = function (x, y) {
//   return x + y;
// };
// const sub = function (x, y) {
//   return x - y;😚
// };
// const pow = function (x, y) {
//   return x ** y;
// };
// doMath(2, 3, add);
// doMath(10, 8, sub);
// doMath(4, 1 / 10, pow);

const doMath = function (a, b, callback) {
  const result = callback(a, b);

  console.log(result);
};

// const add = ;
// const sub = ;
// const pow = ;
doMath(
  2,
  3,
  function (x, y) {
    return x + y;
  },
  function one() {},
  function two() {}
);
doMath(10, 8, function (x, y) {
  return x - y;
});
doMath(4, 10, function (x, y) {
  return x ** y;
}); // це інлайн ФУНКЦІЯ!!! (АНОНІМНА, ОДНОРАЗОВА)

const buttonRef = document.querySelector(".js-button");

const handleButtonClick = function () {
  console.log("Клик по кнопке " + Date.now());
};
buttonRef.addEventListener("click", handleButtonClick);

// const buttonRef = document.querySelector(".js-button");

// buttonRef.addEventListener("click", function () {
//   console.log("Клик по кнопке " + Date.now());
// });

const onGetPositionSuccess = function (position) {
  console.log(position);
};

const onGetPositionError = function (error) {
  console.log(error);
};

window.navigator.geolocation.getCurrentPosition(
  onGetPositionSuccess,
  onGetPositionError
);

const callback = function () {
  console.log("через two секунды внутри колбека в таймауте");
};
console.log("в коде перед таймаутом");

setTimeout(callback, 2000);
console.log("в коде после таймаута");

// const fruits = [
//   { name: "apples", quantity: 120, isFresh: true },
//   { name: "grapes", quantity: 150, isFresh: false },
//   { name: "bananas", quantity: 100, isFresh: true },
// ];

// const getsFruitsWithQuantity = function (fruit) {
//   return fruit.quantity >= 120;
// };
// const r3 = fiter(fruits, getsFruitsWithQuantity);
// console.log(r3);
