document.getElementById("beefBurger-minus").addEventListener("click", function () {
  const beefBurgerInput = document.getElementById("beefBurger-number");
  let beefBurgerNumber = beefBurgerInput.value;
  if (beefBurgerNumber > 0) {
    beefBurgerNumber--;
  }
  beefBurgerInput.value = beefBurgerNumber;
  if (beefBurgerNumber > 0) {
    document.getElementById("beefBurger-price").innerText = beefBurgerNumber * 7;
  } else {
    alert("Please add one more burger");
  }

  const cheeseBurgerTotal = parseInt(document.getElementById("cheeseBurger-number").value) * 5;
  const beefBurgerTotal = parseInt(document.getElementById("beefBurger-number").value) * 7;

  const subTotal = cheeseBurgerTotal + beefBurgerTotal;
  document.getElementById("sub-total").innerText = subTotal.toFixed(2);

  const tax = subTotal * 0.5;
  document.getElementById("tax-amount").innerText = tax.toFixed(2);

  const totalPrice = subTotal + tax;
  if (subTotal != tax) {
    document.getElementById("total-price").innerText = Math.floor(totalPrice).toFixed(2);
  } else {
    document.getElementById("total-price").innerText = totalPrice.toFixed(2);
  }
});
