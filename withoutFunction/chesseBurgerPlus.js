document.getElementById("cheeseBurger-plus").addEventListener("click", function () {
  // console.log('clicked');
  const cheeseBurgerInput = document.getElementById("cheeseBurger-number");
  // console.log("burger input");
  let cheeseBurgerNumber = cheeseBurgerInput.value;
  // console.log('burger number increased');
  cheeseBurgerNumber++;
  // console.log('updated burger number');
  cheeseBurgerInput.value = cheeseBurgerNumber; /* set value into number in input field */
  document.getElementById("cheeseBurger-price").innerText = cheeseBurgerNumber * 5;
  // console.log('set updated number');

  const cheeseBurgerTotal = parseInt(document.getElementById("cheeseBurger-number").value) * 5;
  const beefBurgerTotal = parseInt(document.getElementById("beefBurger-number").value) * 7;

  const subTotal = cheeseBurgerTotal + beefBurgerTotal;
  document.getElementById("sub-total").innerText = subTotal.toFixed(2);

  const tax = subTotal * 0.3;
  document.getElementById("tax-amount").innerText = tax.toFixed(2);

  const totalPrice = subTotal + tax;
  if(subTotal != tax){
    document.getElementById("total-price").innerText = Math.floor(totalPrice).toFixed(2);
  }
  else{
    document.getElementById("total-price").innerText = totalPrice.toFixed(2);
  }
});
