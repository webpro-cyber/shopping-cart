let itemMinus = document.querySelectorAll(".item_minus");
let itemPlus = document.querySelectorAll(".item_plus");
let itemRead = document.querySelectorAll(".itemRead");
let productPrice = document.querySelectorAll(".product_price");

let subTotal = document.getElementById("sub_total");
let taxCount = document.getElementById("tax");
let totalFinal = document.getElementById("totalFinal");

taxCount.innerText = 26;

let valueOne = 1;
// Plus Function Handler
function itemPlusFun() {
  valueOne++;
  itemRead[0].value = valueOne;
  const basePrice = 1219;
  const totalPricePlus = basePrice * valueOne;
  productPrice[0].innerText = totalPricePlus;

  const basePriceTwo = 59;
  const totalPricePlusTwo = basePriceTwo * itemRead[1].value;

  const subTotalPlus = totalPricePlus + totalPricePlusTwo;

  const newTax = Math.round((subTotalPlus * 2) / 100);
  const finalTxt = newTax;

  subTotal.innerText = subTotalPlus;

  taxCount.innerText = finalTxt;

  totalFinal.innerText = subTotalPlus + finalTxt;
}

let valueTwo = 1;
function itemPlusFunTwo() {
  valueTwo++;
  itemRead[1].value = valueTwo;
  const basePrice = 59;
  const totalPricePlusTwo = basePrice * valueTwo;
  productPrice[1].innerText = totalPricePlusTwo;

  const basePriceOne = 1219;
  const totalPriceOne = basePriceOne * itemRead[0].value;

  const subTotalPlus = totalPricePlusTwo + totalPriceOne;

  const newTax = Math.round((subTotalPlus * 2) / 100);
  const finalTxt = newTax;

  subTotal.innerText = subTotalPlus;

  taxCount.innerText = finalTxt;

  totalFinal.innerText = subTotalPlus + finalTxt;
}

// Minus Function Handler
function itemMinusFun() {
  valueOne--;
  if (itemRead[0].value <= 1) {
    alert("You can not put value under 0");
  } else {
    itemRead[0].value = valueOne;
    const basePrice = 1219;
    const totalPriceMinusOne = basePrice * valueOne;
    productPrice[0].innerText = totalPriceMinusOne;

    const basePriceTwo = 59;
    const totalPriceOne = basePriceTwo * itemRead[1].value;

    const subTotalPlus = totalPriceMinusOne + totalPriceOne;

    const newTax = Math.round((subTotalPlus * 2) / 100);
    const finalTxt = newTax;

    subTotal.innerText = subTotalPlus;

    taxCount.innerText = finalTxt;

    totalFinal.innerText = subTotalPlus + finalTxt;
  }
}

function itemMinusFunTwo() {
  valueTwo--;
  if (itemRead[1].value <= 1) {
    alert("You can not put value under 0");
  } else {
    itemRead[1].value = valueTwo;
    const basePrice = 59;
    const totalPriceMinusTwo = basePrice * valueTwo;
    productPrice[1].innerText = totalPriceMinusTwo;

    const basePriceOne = 1219;
    const totalPriceOne = basePriceOne * itemRead[0].value;

    const subTotalPlus = totalPriceMinusTwo + totalPriceOne;

    const newTax = Math.round((subTotalPlus * 2) / 100);
    const finalTxt = newTax;

    subTotal.innerText = subTotalPlus;

    taxCount.innerText = finalTxt;

    totalFinal.innerText = subTotalPlus + finalTxt;
  }
}

itemPlus[0].addEventListener("click", itemPlusFun);
itemPlus[1].addEventListener("click", itemPlusFunTwo);

itemMinus[0].addEventListener("click", itemMinusFun);
itemMinus[1].addEventListener("click", itemMinusFunTwo);
