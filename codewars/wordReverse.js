let str = prompt("Введите строку: ")
// Разделяем строку по пробелам и делаем из нее массив
let strArray = str.split(" ")
let resultStr = ""

// Перебираем все слова в массиве
for (let i = 0; i < strArray.length; i++){
    let word = strArray[i]
    word = String(word)
    // Если слово длиннее 5 символов, то его переворачиваем 
    if (word.length >= 5 ){
        resultStr += word.split("").reverse().join("")
    } else {
        resultStr += word
    }
    resultStr += " "
}
console.log(resultStr)