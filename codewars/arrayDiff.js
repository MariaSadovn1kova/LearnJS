// https://www.codewars.com/kata/523f5d21c841566fde000009
// Нужно удалить все элементы второго массива из первого 


let str = prompt("Введите первый массив: ");
let str2 = prompt("Введите второй массив: ");

let arr = [];
let arr2 = [];

for(let char of str){
    arr.push(+char)
}

for(let char of str2){
    arr2.push(+char)
}

console.log(subtraction(arr))

// Функция, вычитает все элементы второго массива из первого 
function subtraction(a){
    for(let i = 0; i < a.length; i++){
        // Если элемент находится во втором массиве, то с помощью splice удаляем его из первого
        if (arrayCheck(a[i])){ 
            a.splice(i, 1)
            i--;
        };
    }
    return a;
}

function arrayCheck(x){
    result = false;
    for(let i = 0; i < arr2.length; i++){
        if(arr2[i] == x) result = true; 
    }
    return result;
}