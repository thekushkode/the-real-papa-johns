
// let prices = document.querySelector('.price').value;

// console.log(prices);

let total = 0;
$('.price').each(function(){
    total += parseFloat($(this).text()).toFixed(2);  // Or this.innerHTML, this.innerText
});

console.log(total);