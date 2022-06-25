/* handle cheese Burger plus button */
document.getElementById('cheeseBurger-plus').addEventListener('click', function (){
    updateBurgerNumber('cheeseBurger', 5, true);
})

/* handle beef Burger plus button */
document.getElementById('beefBurger-plus').addEventListener('click', function() {
    updateBurgerNumber('beefBurger', 7, true);
})

/* handle cheese burger minus button */
document.getElementById('cheeseBurger-minus').addEventListener('click', function () {
    updateBurgerNumber('cheeseBurger', 5, false)
})

/* handle beef burger minus button */
document.getElementById('beefBurger-minus').addEventListener('click', function() {
    updateBurgerNumber('beefBurger', 7, false)
})

/* handle updateBurgerNumber with function */
function updateBurgerNumber(burger, price, isIncreasing){
    const burgerInputField = (document.getElementById(burger + "-number"));

    let burgerInputFieldNumber = parseInt(burgerInputField.value);

    if(isIncreasing){
        burgerInputFieldNumber++;
    }
    else if (burgerInputFieldNumber > 0){
        burgerInputField--;
    }

    burgerInputField.value = burgerInputFieldNumber;

    if(burgerInputFieldNumber > 0){
        document.getElementById(burger + '-price').innerText = burgerInputFieldNumber * price;
    }
    else{
        alert('Please add more burger');
    }

    calculateBurgerTotal();
}

/* handle total burger calculation */
function calculateBurgerTotal(){
    const cheeseBurgerTotal = getInputValue('cheeseBurger', 5);
    const beefBurgerTotal = getInputValue('beefBurger', 7);

    const subTotal = cheeseBurgerTotal + beefBurgerTotal;
    document.getElementById('sub-total').innerText = subTotal.toFixed(2);

    const tax = subTotal * 0.5;
    document.getElementById('tax-amount').innerText = tax.toFixed(2);

    const totalPrice = subTotal + tax;
    if(subTotal != tax) /* (when we select one burger tax value is float that's why we compare with integer value); (not compare their total and tax amount) */{
        document.getElementById('total-price').innerText = Math.floor(totalPrice).toFixed(2);
    }
    else{
        document.getElementById('total-price').innerText = totalPrice.toFixed(2);
    }
}

/* handle get input value */
function getInputValue(burger, price){
    let burgerInputFieldNumber;
    if(document.getElementById(burger + '-number') != null){
        burgerInputFieldNumber = parseInt(document.getElementById(burger + '-number').value);
    }
    else{
        burgerInputFieldNumber = 0;
    }
    const burgerTotal = burgerInputFieldNumber * price;
    return burgerTotal;
}

/* remove one burger using event delegate*/
document.getElementById('cheeseBurger-remove').addEventListener('click', function(event) {
    document.getElementById('cheeseBurger-number').value = 0;
    calculateBurgerTotal();

    /* console.log(event.target);
    console.log(event.target.parentNode);
    console.log(event.target.parentNode.parentNode); */
    
    event.target.parentNode.parentNode.removeChild(document.getElementById('box-item1'));
})
document.getElementById('beefBurger-remove').addEventListener('click', function(event) {
    document.getElementById('beefBurger-number').value = 0;
    calculateBurgerTotal();

    /* console.log(event.target);
    console.log(event.target.parentNode);
    console.log(event.target.parentNode.parentNode); */
    
    event.target.parentNode.parentNode.removeChild(document.getElementById('box-item2'));
})