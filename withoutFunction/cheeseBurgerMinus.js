document.getElementById("cheeseBurger-minus").addEventListener("click", function () {
  const cheeseBurgerInput = document.getElementById("cheeseBurger-number");
  let cheeseBurgerNumber = cheeseBurgerInput.value;
  if (cheeseBurgerNumber > 0) {
    cheeseBurgerNumber--;
  }
  cheeseBurgerInput.value = cheeseBurgerNumber;
  if (cheeseBurgerNumber > 0) {
    document.getElementById("cheeseBurger-price").innerText = cheeseBurgerNumber * 5;
  } else {
    alert("Please add one more burger");
  }

  const cheeseBurgerTotal = parseInt(document.getElementById("cheeseBurger-number").value) * 5;
  const beefBurgerTotal = parseInt(document.getElementById("beefBurger-number").value) * 7;

  const subTotal = cheeseBurgerTotal + beefBurgerTotal;
  document.getElementById("sub-total").innerText = subTotal.toFixed(2);

  const tax = subTotal * 0.3;
  document.getElementById("tax-amount").innerText = tax.toFixed(2);

  const totalPrice = subTotal + tax;
  if (subTotal != tax) {
    document.getElementById("total-price").innerText = Math.floor(totalPrice).toFixed(2);
  } else {
    document.getElementById("total-price").innerText = totalPrice.toFixed(2);
  }
});
