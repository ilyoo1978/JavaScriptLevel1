const cart = [
    {'name': 'молоко', 'price': 100},
    {'name': 'хлеб', 'price': 120},
    {'name':'презервативы', 'price': 89}
];
function countBasketPrice() {
    let total = 0;
    for(item of cart){
        total +=item.price;
    }
    return total;
}
console.log(countBasketPrice());