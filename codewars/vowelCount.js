// https://www.codewars.com/kata/54ff3102c1bad923760001f3
// Посчитать количество гласных во введенной строке (aeiou)

// Просим пользователя ввести строку
let str = prompt("Введите строку: ")
// Перемнная, в которую будет записываться информация о количестве гласных
let sum = 0;
// Перебираем все символы во введенной строке
for(let char of str){
    // Вызываем функцию, которая проверяет букву. Если гласная, то счетчик суммы увеличивается на один
    (isVowel(char)) ? sum += 1 : sum
}
// Выводим сумму в консоль
console.log(sum)

// Функция, на вход принимает строку
function isVowel(x){
    // В этой строке все гласные
    let vowelStr = "aeiou"
    let result = false;
    // Перебираем строку гласных и сопостовляем с проверяемой строкой
    for (let char of vowelStr){
        // Если символ совпадает с каким-либо символом в строке гласных, то возвращаем true
        if(x == char) result = true;
    }
    return result;
}