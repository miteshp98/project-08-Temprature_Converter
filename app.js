"use strict";

const inputNumber = document.querySelector("#Number");
const tempratureOption = document.querySelector("#temp-option");
const convertOption = document.querySelector("#convert-opt");
const converBtn = document.querySelector(".submit-btn");
const resultElem = document.querySelector(".result");

converBtn.addEventListener("click", function (e) {
  e.preventDefault();
  tempratureConverter();
});

function tempratureConverter() {
  if (inputNumber.value === "") {
    resultElem.textContent = null;
    document.querySelector(".error").classList.add("visible");
  } else if (tempratureOption.value === "C" && convertOption.value === "f") {
    document.querySelector(".error").classList.remove("visible");
    resultElem.innerHTML = `${
      (inputNumber.value * 9) / 5 + 32
    } <sup> &degF</sup>`;
    inputNumber.value = "";
  } else if (tempratureOption.value === "F" && convertOption.value === "c") {
    resultElem.innerHTML = `${(((inputNumber.value - 32) * 5) / 9).toFixed(
      2
    )} <sup> &degC</sup>`;
    inputNumber.value = "";
  }
}
