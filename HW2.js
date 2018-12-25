//1
let a = 1, b = 1, c, d;
c = ++a; console.log(c); // 2
d = b++; console.log(d); // 1
c = (2+ ++a); console.log(c); // 5
d = (2+ b++); console.log(d); // 4
console.log(a); // 3
console.log(b); // 3
/* Если инкремент или декремент стоит перед переменной, то сначала происходит
операция сложения, потом присваивания. Если наоборот, то наоборот)
 */
//2
a = 2;
x = 1 + (a *= 2);
// х будет равен 5. Можете в этом убедиться:
console.log(x +' = 1 + (a *= 2)');

//3

a = parseInt(prompt('введите значение a'));
b = parseInt(prompt('введите значение b'));
if (a >= 0 && b >= 0){
    (a > b) ? console.log(a - b +' разница') : console.log(b - a +' разница');
}
if (a < 0 && b < 0){
    console.log(a * b + ' произведение');
}
if((a < 0 && b >= 0)|| (a >= 0 && b < 0)){
    console.log(a + b + ' сумма');
}
//4
a = parseInt(prompt('введите чисто от 0 до 15'));
switch (0 <= a && a<= 15) {
    case true:
        while(a <= 15){console.log(a++)}break;
    case false:
        alert('некорректный ввод!!!!');

}
//5

function plus(a, b) {
    return a + b;
}
function minus(a, b){
    return a - b;
}
function multiply(a, b){
    return a * b;
}
function devide(a, b) {
    return a / b;
}
//6
function mathOperation(a, b, operation){
    switch (operation) {
        case 'plus':
            return plus(a, b);
        case 'minus':
            return minus(a, b);
        case 'multiply':
            return multiply (a, b);
        case 'devide' :
            return devide(a, b);
    }
}

console.log(mathOperation(4, 5, 'multiply'));
console.log(mathOperation(4, 5, 'plus'));
console.log(mathOperation(4, 5, 'minus'));
console.log(mathOperation(4, 5, 'devide'));
//7
console.log(null == 0);
/*Значения null и undefined равны == друг другу и не равны чему бы то ни было ещё. Это жёсткое правило буквально прописано в спецификации языка.
При преобразовании в число null становится 0, а undefined становится NaN.*/
//8
function power(val, pow) {
    let result = val;
    while(pow > 1){
        result *= val;
        pow--;
        power(val, pow);
    }
    return result;
}
console.log(power(2, 3));