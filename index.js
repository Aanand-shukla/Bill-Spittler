let amount = document.querySelector(".enterAmount > input[type=number]");
let numberOfPeopleInput = document.querySelector(".numberofPeople >input");
let generateBill = document.querySelector(".inputdatasection Button");
const eachPersonBillAmount = document.querySelector(".eachPerson");
const tippercentage = document.querySelector(".tippercentage");
const tip = document.querySelector(".tip");
const CustomTip = document.querySelector(".CustomTip");
const totalAmount = document.querySelector(".totalAmount");
const resetButton = document.querySelector(".resetButton");
let selectedTip = 0;
let totalAmounts;
let eachPersonBill;
generateBill.addEventListener("click", () => {
  const numberofPeople = parseInt(numberOfPeopleInput.value);
  const billAmount = parseInt(amount.value);
  let givenTip = `${billAmount * (selectedTip / 100)}`;
  totalAmounts = ` ${billAmount + parseInt(givenTip)}`;
  eachPersonBill = totalAmounts / numberofPeople;
  eachPersonBillAmount.innerText = `₹ ${eachPersonBill}`;
  tip.innerText = `₹ ${parseInt(givenTip)}`;
  totalAmount.innerText = `₹${totalAmounts}`;
});

tippercentage.addEventListener("click", (e) => {
  if (tippercentage !== e.target) {
    [...tippercentage.children].forEach((tip) => {
      tip.classList.remove("selected");
    });
    e.target.classList.add("selected");

    selectedTip = parseInt(e.target.innerText);
    CustomTip.value = "";
  }
});

CustomTip.addEventListener("input", () => {
  selectedTip = parseInt(CustomTip.value);
  [...tippercentage.children].forEach((tip) => {
    tip.classList.remove("selected");
  });
});

resetButton.addEventListener("click", () => {
  amount.value = "";
  CustomTip.value = "";
  numberOfPeopleInput.value = "";
  eachPersonBillAmount.innerText = "";
  tip.innerText = "";
  totalAmount.innerText = "";
  [...tippercentage.children].forEach((tip) => {
    tip.classList.add("disabled");
  });
});
