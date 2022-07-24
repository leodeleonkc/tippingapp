"use strict";
const resizeOps = () => {
  document.documentElement.style.setProperty(
    "--vh",
    window.innerHeight * 0.01 + "px"
  );
};

// Main Elements

const totalPerPerson = document.getElementById("total-per-person");
const tipPerPerson = document.getElementById("tip-per-person");
const billInput = document.getElementById("user-input");
const tipPercent = document.getElementById("tip-percent");
const totalPeepCount = document.getElementById("total-peeps");

// Buttons

const plusTipBtn = document.getElementById("plusPercent");
const minusTipBtn = document.getElementById("minusPercent");
const plusPeepsBtn = document.getElementById("plusPeeps");
const minusPeepsBtn = document.getElementById("minusPeeps");

// Logic

// Initial Values

let perCentage = 15 * 0.01;
let totalPeeps = 4;

// Percentage Plus and Minus Buttons

plusTipBtn.addEventListener("click", function () {
  perCentage = (tipPercent.textContent++ + 1) * 0.01;
  if (billInput.value) calcTip();
});

minusTipBtn.addEventListener("click", function () {
  if (tipPercent.textContent > 1)
    perCentage = (tipPercent.textContent-- - 1) * 0.01;
  if (billInput.value) calcTip();
});

// People Plus and Minus Buttons

plusPeepsBtn.addEventListener("click", function () {
  totalPeeps = totalPeepCount.textContent++ + 1;
  if (billInput.value) calcTip();
});

minusPeepsBtn.addEventListener("click", function () {
  if (totalPeeps > 1) totalPeeps = totalPeepCount.textContent-- - 1;

  if (billInput.value) calcTip();
});

// Running the App

billInput.addEventListener("focusout", calcTip);

function calcTip() {
  const theBill = billInput.value;
  const tip = theBill * perCentage;
  const tipPer = tip / totalPeeps;
  const totalPer = (Number(theBill) + tip) / totalPeeps;

  tipPerPerson.textContent = `$${tipPer.toFixed(2)}`;
  totalPerPerson.textContent = `$${totalPer.toFixed(2)}`;
}
