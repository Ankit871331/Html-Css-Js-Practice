const number = document.querySelector(".number");
const plusButton = document.querySelector(".plus");
const minusButton = document.querySelector(".minus");
const resetButton = document.querySelector(".reset");



plusButton.addEventListener('click', function(){

    number.innerHTML = parseInt(number.innerHTML) +1;
});

minusButton.addEventListener('click', function(){

    number.innerHTML = parseInt(number.innerHTML) -1;
});


resetButton.addEventListener('click', function(){
    number.innerHTML = 0;
});