function typeTransformation(){
    
    // Строковое преобразование
    let value = 123;
    console.log(typeof value); // number

    value = String(value);
    console.log(typeof value); // string
    
    // Численное преобразование происходит при математических операциях
    console.log("15"/"5"); // Делим две строки, а получается число 3

    // Явное численное преобразование 
    let str = "843";
    console.log(typeof str); // string
    let num = Number(str);
    console.log(typeof num); // number

    // Преобразование из строки работает не всегда 
    let strangeStr = Number("Хахаха а я вот не число");
    console.log(strangeStr); // NaN - преобразовать не вышло

    // Правила численного преобразования 
    let num1 = Number(undefined); // NaN
    let num2 = Number(null); // 0
    let num3 = Number(true); // 1
    let num4 = Number(false); // 0
    let num5 = Number("123d"); // NaN - ошибка преобразования на символе d
    console.log(num1);
    console.log(num2);
    console.log(num3);
    console.log(num4);
    console.log(num5);

    // Логическое преобразование 
    // Интуитивно пустые значение становятся false, остальные - true
    console.log(Boolean(1)); // true
    console.log(Boolean(0)); // false
    console.log(Boolean("Здравствуйте!")); // true
    console.log(Boolean("")); // false - пустая строка
    console.log(Boolean(null)); // false
    console.log(Boolean(undefined)); // false
    console.log(Boolean(NaN)); // false
}
typeTransformation();