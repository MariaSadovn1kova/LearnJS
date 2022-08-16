// https://www.codewars.com/kata/54da5a58ea159efa38000836
// Вывести цифры, которые встречаются в массиве нечетное количество раз


let str = prompt("Введите строку: ");
let resultStr = "";
let arr = [];

// Записываем данные из строки в массив
for(let char of str){
    arr.push(char)
}

// Перебираем элементы массива
for(let i = 0; i < arr.length; i++){
    let num = arr[i];
    let numSum = 0;
    // Проверяем, сколько раз число встречается в массиве
    for(let j = 0; j < arr.length; j++){
        if (arr[j] == num) numSum += 1;
    }
    // Если встречается нечетное количество раз и его еще нет в итоговом массиве, то добавляем его туда
    if(numSum % 2 != 0 && !resultCheck(num)) resultStr += num;
}
console.log(resultStr)

// Функция, проверяет, находится ли элемент в массиве
function resultCheck(x){
    let result = false;
    for(let char of resultStr){
        if (char == x) result = true;
    }
    return result;
}