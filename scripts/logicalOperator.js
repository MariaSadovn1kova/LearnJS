function logicalOperator(){

    console.log( true || true ) // true
    console.log( true || false ) // true
    console.log( false || true ) // true
    console.log( false || false ) // false

    if (1 || 0){ // Работает как true || false
        console.log( 'Сработало!' )
    }

    // Оператор || используется в if для проверки условий
    let hour = 9;
    if (hour < 10 || hour > 18){
        console.log("Офис закрыт!")
    }

    // || находит первое истинное значение
    // Возвращает первое истинное значение
    // Или последнее, если все значения ложные
    console.log( 1 || 0 ) // 1
    console.log( true || 'Я не пустая строка') // true
    console.log( null || 1 ) // 1
    console.log( null || 0 || 1 ) // 1
    console.log( undefined || null || 0 ) // 0, так как все значения ложные - возвращает последнее

    // Поэтому в js можно использовать || следующим способом
    let currentUser = null;
    let defaultUser = "John";
    let name = currentUser || defaultUser || "unnamed";
    console.log(name) // Выведет John, так как это первое истинное значение 

    // Сокращенное вычисление 
    let x;
    true || ( x = 1 );
    console.log ( x ) // Выведет undefined, так как в условии значение первого выражение истинно, значит второе не выполнилось

    false || ( x = 1 )
    console.log( x ) // А теперь выведет 1, так как значение первого выражения ложное

    // && (И)
    console.log( true && true ) // true
    console.log( false && true ) // false
    console.log( true && false ) // false
    console.log( false && false ) // false

    // Пример с if
    let workHour = 12;
    let workMinute = 30;
    if ( workHour == 12 && workMinute == 30 ){
        console.log('Пора работать!')
    }

    if ( 1 && 0 ){
        console.log('А я вот не сработаю, потому выражение ложное :с')
    }

    // && находит первое ложное значение 
    // Если все операнды были истинными, возвращает последнее значение
    console.log( 1 && 0 ) // 0 
    console.log( 1 && 5 ) // 5
    console.log( null && 5 ) // null
    console.log( 0 && "А я не пустая строка!") // 0
    console.log( 1 && 2 && null & 3 ) // null 
    console.log( 1 && 2 && 3 ) // 3, все выражение истинные, поэтому возвращает последнее значение

    // Приоритет у && выше, чем у ||
    // Логические операторы иногда могут заменять if
    let n = 1;
    ( n > 0 ) && console.log('Число больше нуля!')
    // Аналог с if конструкцией
    let m = 1;
    if (m > 0){
        console.log('Число больше нуля!')
    }

    // ! НЕ
    console.log(!false) // true
    console.log(!1) // false

    // !! Двойное "НЕ" используют для преобразования выражения к логическому типу
    console.log(!!'Эта строка точно не пустая') // true
    console.log(!! null) // false
    console.log(null || 2 && 3 || 4) // 3, так как у && приоритет выше

    let age = 16;
    if (age >= 14 && age <= 90){
        console.log('Ого, вам меньше 90 лет')
    }
}
logicalOperator();