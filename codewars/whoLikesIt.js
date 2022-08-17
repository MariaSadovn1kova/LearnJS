// https://www.codewars.com/kata/5266876b8f4bf2da9b000362

let str = prompt("Введите пользователей через пробел: ")
// Если строка пустая, то выводим, что запись никому не понравилась 
if(!str) {
    console.log("No  one likes it!")
} else {
    // В противном случае смотрим количество лайкнувших и выбираем соответствующее сообщение
    let arrStr = str.split(" ")
    switch( arrStr.length ){
        case(1) :
            console.log(`${arrStr[0]} likes this`);
            break;
        case(2) :
            console.log(`${arrStr[0]} and ${arrStr[1]} likes this`)
            break;
        case(3) :   
            console.log(`${arrStr[0]}, ${arrStr[1]} and ${arrStr[2]} likes this`)
            break;
        default :
            console.log(`${arrStr[0]}, ${arrStr[1]} and ${arrStr.length - 2} others like it`)
            break;
    }
}
