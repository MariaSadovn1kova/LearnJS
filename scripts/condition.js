// Условные операторы

function condition(){

    let year = 2077;
    let condition = (year == 2015) // Преобразуется в true или false

    if (condition){
        console.log("Все правильно! ")
    } else {
        console.log("Не угадал, балбес!")
    }

    // Конструкция else if
    if (year < 2015){
        console.log("Слишком рано!")
    } else if (year > 2015){
        console.log("Слишком поздно!")
    } else {
        console.log("Все правильно!")
    }

    // Условный оператор "?"
    let age = 21;
    let accessAllowed;
    if (age > 18){
        accessAllowed = true;
    } else {
        accessAllowed = false;
    }
    console.log(accessAllowed)

    // Предыдущую конструкцию можно заменить на 
    accessAllowed = (age > 18) ? true : false;
    // Можно без скобок, но с ними код проще читается

    // Несколько операторов "?"
    let message = (age < 3) ? "Здравствуй, малыш!" :
        (age < 18) ? "Привет, молодой!" :
        (age < 100) ? "Здравствуйте!" :
        "Какой необычный возраст!";
    console.log(message)

    // Нестандартное использование оператора "?"
    let company = "Apple";
    (company == "Apple") ? console.log("У вас айфон") : console.log("У вас не айфон");

}
condition()