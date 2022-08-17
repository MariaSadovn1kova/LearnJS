// https://www.codewars.com/kata/554b4ac871d6813a03000035

let str = prompt("Введите числа через пробел: ")
let arrStr = str.split(" ");

let min = +arrStr[0];
let max = +arrStr[0];

for(let i = 0; i < arrStr.length; i++){
    if (arrStr[i] < min) min = arrStr[i];
    if (arrStr[i] > max) max = arrStr[i];
}

console.log(`Минимальное значение массива: ${min}`)
console.log(`Максимальное значение массива: ${max}`)