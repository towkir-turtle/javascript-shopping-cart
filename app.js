function updateProductNumber(product, price, isIncreasing) {
  const productInput = document.getElementById(product + "-number");
  let productNumber = parseInt(productInput.value);
  if (isIncreasing) {
    productNumber = productNumber + 1;
  } else if (productNumber > 0) {
    productNumber = productNumber - 1;
  }
  productInput.value = productNumber;

  // update phone amount:
  const productTotal = document.getElementById(product + "-total");
  productTotal.innerText = productNumber * price;

  // update total:
  calculateTotal();
}

document.getElementById("phone-plus").addEventListener("click", function () {
  updateProductNumber("phone", 1219, true);
});

document.getElementById("phone-minus").addEventListener("click", function () {
  updateProductNumber("phone", 1219, false);
});

document.getElementById("case-plus").addEventListener("click", function () {
  updateProductNumber("case", 59, true);
});

document.getElementById("case-minus").addEventListener("click", function () {
  updateProductNumber("case", 59, false);
});

function getInputValue(product) {
  const productInput = document.getElementById(product + "-number");
  const productNumber = parseInt(productInput.value);
  return productNumber;
}

function calculateTotal() {
  const phoneTotal = getInputValue("phone") * 1219;
  const caseTotal = getInputValue("case") * 59;
  const subTotal = phoneTotal + caseTotal;
  const tax = subTotal / 10;
  const total = subTotal + tax;

  document.getElementById("sub-total").innerText = subTotal;
  document.getElementById("tax").innerText = tax;
  document.getElementById("total").innerText = total;
}
