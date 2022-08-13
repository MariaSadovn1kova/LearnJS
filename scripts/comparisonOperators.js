function comparisonOperators(){

    // Результат сравнения имеет логический тип
    console.log( 2 > 1 ) // true
    console.log( 2 < 1 ) // false
    console.log( 2 != 1 ) // true

    // Результат сравнения можно присвоить переменной 
    let result = 5 > 4;
    console.log(result)

    // Строки сравниваются в алфавитном порядке
    console.log("А" < "Я") // true
    console.log("Кошак" > "Кошка") // false
    console.log("Сонный" > "Сон") // true
    console.log("A" < "B") // true
    console.log("D" == "d") // false
    console.log("D" == "D") // true

    // Сравнение разных типов
    console.log( "2" > 1 ) // true, строка 2 конвертируется в число 2 
    console.log( "01" == 1) // true, строка 01 конвертируется в число 1

    // Логические сравнения
    console.log( true == 1 ) // true
    console.log( false == 0) // true

    let a = 0;
    console.log( Boolean(a)) // false
    let b = "0"
    console.log( Boolean(b)) // true, так как строка не пустая
    console.log( a == b ) // true, так как строка b стала числом 0

    // Строгое сравнение
    // Использование обычного сравнения == не может отличить, например, 0 от false
    console.log( 0 == false ) // true
    console.log( '' == false ) // true

    console.log( 0 === false) // false, так как сравниваются разные типы
    // Оператор строгого неравенства = !==

    console.log( null == undefined ) // true, по правилу языка
    console.log( null === undefined ) // false, несовпадение типов

    console.log( null > 0 ) // false
    console.log( null == 0 ) // false 
    console.log( null >= 0 ) // true

    // undefined несравнимо 
    console.log ( undefined > 0 ) // false
    console.log ( undefined < 0 ) // false
    console.log ( undefined == 0 ) // false

    // Задания 
    console.log ( 5 > 4 ) // true
    console.log ( "ананас" > "яблоко" ) // false
    console.log ( "2" > "12" ) // true, посимвольное сравнение строк
    console.log ( undefined == null ) // true
    console.log ( undefined === null ) // false
    console.log ( null == "\n0\n" ) // false
    console.log ( null === +"\n0\n" ) // false
    
}
comparisonOperators();
