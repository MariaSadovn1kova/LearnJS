// Примитивные типы данных и как они работают

function dataTypes(){

    // Не будет ошибкой
    // JS динамически типизированный язык
    let message = "hello";
    message = 123456;
    console.log(message)

    // Числовой тип number - целочисленные значения и числа сплавающей точкой
    let n = 123;
    n = 12.345;
    console.log(n)

    // Infinity - бесконечность, больше любого числа
    // -Infinity - минус бесконечность, меньше любого числа
    // NaN - Not-a-Nubmer 

    console.log(1 / 0) // Infinity
    console.log('А я не число' / 1) // NaN
    console.log (NaN + 1) // NaN
    
    // BigInt дает возможность работать с большими целыми числами
    // Символ "n" в конце означает, что это BigInt
    // Не поддерживается некоторыми браузерами
    const bigInt = 1234567890123456789012345678901234567890n;
    console.log (bigInt)

    // Строка должна быть заключена в кавычки
    // Существуют три вида кавычек 

    // Между двойными и одинарными нет разницы
    let str1 = "Это привет из двойных кавычек"
    let str2 = 'Это привет из одинарных кавычек'
    console.log(str1)
    console.log(str2)

    // У обратных кавычек расширенный функционал
    let nameLady = "Мисс Обратная Кавычка"
    console.log(`Привет, ${nameLady}!`)
    console.log(`Ответ на главный вопрос жизни, вселенной и всего такого: ${22 + 20}`) // 42

    // Булевый тип используется для хранения значений Да/Нет
    let nameFieldChecked = true; // да, поле отмечено
    let ageFieldChecked = false; // нет, поле не отмечено 
    console.log(nameFieldChecked) // true
    console.log(ageFieldChecked) // false

    let isGreater = 2 < 90
    console.log(isGreater) // true
    isGreater = 2 > 90
    console.log(isGreater) // false 

    // null - ссылка на несуществующий объект в других языках
    // null в JS - значение неизвестно 
    let age = null
    console.log(age)

    // undefined - значение не присвоено 
    let userName
    console.log(userName) // undefined 
    // Для пустых переменных лучше использовать null 
    // undefined нужна для проверок - назначили ли перменную

    // Оператор typeof возвращает тип переменной 
    console.log(typeof undefined) // "undefined"
    console.log(typeof 0) // "number"
    console.log(typeof 10n) // "bigint"
    console.log(typeof true) // "boolean"
    console.log(typeof "foo") // "string"
    console.log(typeof Symbol("id")) // "symbol"
    console.log(typeof Math) // "object"  
    console.log(typeof null) // "object"  
    console.log(typeof alert) // "function"  

    //Задачи
    //1
    let name = "Ilya"
    console.log(`hello ${1}`) // hello 1
    console.log(`hello ${"name"}`) // hello name
    console.log(`hello ${name}`) // hello Ilya

} 
dataTypes();