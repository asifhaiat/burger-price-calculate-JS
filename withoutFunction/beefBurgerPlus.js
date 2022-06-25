document.getElementById("beefBurger-plus").addEventListener("click", function () {
  const beefBurgerInput = document.getElementById("beefBurger-number");
  let beeBurgerNumber = beefBurgerInput.value;
  beeBurgerNumber++;
  beefBurgerInput.value = beeBurgerNumber;
  document.getElementById("beefBurger-price").innerText = beeBurgerNumber * 7;

  const cheeseBurgerTotal = parseInt(document.getElementById("cheeseBurger-number").value) * 5;
  const beefBurgerTotal = parseInt(document.getElementById("beefBurger-number").value) * 7;

  const subTotal = cheeseBurgerTotal + beefBurgerTotal;
  document.getElementById("sub-total").innerText = subTotal.toFixed(2);

  const tax = subTotal * 0.5;
  document.getElementById("tax-amount").innerText = tax.toFixed(2);

  const totalPrice = subTotal + tax;
  if (subTotal != tax) {
    document.getElementById("total-price").innerText = Math.floor(totalPrice).toFixed(2);
    // console.log("happy foodie", + totalPrice);
  } else {
    document.getElementById("total-price").innerText = totalPrice.toFixed(2);
  }
});
