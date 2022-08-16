function cycle(){

    let i = 0;
    while(i < 3) {
        console.log(i);
        i++;
    }

    i = 3;
    while(i){
        console.log(i);
        i--;
    }

    i = 3;
    // Если тело цикла состоит из одной строки, можно не использовать скобочки
    while(i) console.log(i--);

    // В конструкции do...while сначала выполнится тело цикла, а потом проходит проверка условия
    // Используется, если тело цикла должно выполнится хотя бы раз
    let j = 0;
    do{
        console.log(j);
        j++;
    } while (j < 3)

    // for - начало, условие, шаг
    for (let i = 0; i < 3; i++){
        console.log('Цикл for, шаг: ' + i);
    }
    // Переменная i существует только внутри цикла

    // Прерывание цикла - break
    let sum = 0;
    while (true){
        let value = +prompt("Введите число: ")
        if (!value) break; // При выполнении условия цикл останавливается
        sum += value;
    }
    console.log("Сумма: " + sum);

    // Переход к следующей итерации - continue
    for (let i = 0; i < 10; i++){
        if(i % 2 == 0) continue; // Если true, пропускает оставшуюся часть тела цикла
        console.log("Continue: " + i)
    }
    
    // Нельзя использовать break/continue справа от оператора „?“
    
}
cycle()