
// let prices = document.querySelector('.price').value;

// console.log(prices);

let total = 0;
$('.price').each(function(){
    total += $(this).text();  // Or this.innerHTML, this.innerText
});

console.log(total);