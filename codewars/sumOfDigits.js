// https://www.codewars.com/kata/541c8630095125aba6000c00
// Складывать цифры в числе до тех пор, пока сумма не станет однозначной

let str = prompt("Введите число: ");

// Выполняется, пока число содержит более одного символа
while (str.length > 1){
    str = String(sumNumbers(str));
}
console.log(sumNumbers(str))

// Функция, складывает цифры в числе
function sumNumbers(x){
    let sum = 0;
    for (let char of x){
        let num = +char;
        sum += num;
    }
    return sum;
}