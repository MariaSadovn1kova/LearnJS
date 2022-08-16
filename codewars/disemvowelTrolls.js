// https://www.codewars.com/kata/52fba66badcd10859f00097e
// Нужно удалить все глассные из комментариев троллей

// Просим пользователя ввести строку
let str = prompt("Введите строку: ");
// Новая строку, в которой не будет гласных
let newStr = "";
// Перебираем посимвольно введенную строку, если буква гласная - она не записывается в новую строку
for(let char of str){
    (!isVowel(char)) ? newStr += char : newStr
}
// Выводим в консоль
console.log(newStr)

// Функция из задачки vowelCount
function isVowel(x){
    let vowelStr = "aeiou"
    let result = false;
    for (let char of vowelStr){
        if(x == char) result = true;
    }
    return result;
}