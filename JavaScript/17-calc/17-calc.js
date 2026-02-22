"use strict";

const input1 = document.querySelector(".firstNum");
const input2 = document.querySelector(".secondNum");
const result = document.querySelector(".total");

function checkNum() {
  if (input1.value === "" || input2.value === "") {
    result.innerText = "Ошибка";
    return null;
  }
  return {
    n1: Number(input1.value),
    n2: Number(input2.value),
  };
}

document.querySelector(".summ").addEventListener("click", () => {
  const nums = checkNum();
  if (!nums) return;
  result.innerText = `Сумма равна: ${nums.n1 + nums.n2}`;
});

document.querySelector(".minus").addEventListener("click", () => {
  const nums = checkNum();
  if (!nums) return;
  result.innerText = `Разница равна: ${nums.n1 - nums.n2}`;
});

document.querySelector(".division").addEventListener("click", () => {
  const nums = checkNum();
  if (!nums) return;
  if (nums.n2 === 0) {
    result.innerText = "На ноль делить нельзя";
    return;
  }
  result.innerText = `Деление равно: ${(nums.n1 / nums.n2).toFixed(3)}`;
});

document.querySelector(".multiple").addEventListener("click", () => {
  const nums = checkNum();
  if (!nums) return;
  result.innerText = `Умножение равно: ${nums.n1 * nums.n2}`;
});

document.querySelector(".clear").addEventListener("click", () => {
  input1.value = "";
  input2.value = "";
  result.innerText = "Итого";
});
