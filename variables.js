// Переменные 

function variables() {

   //Можно через множество объявлений
   let user = 'John';
   let age = 25;
   let message = 'Hello';
   console.log(user, age, message)

   //Можно через одно объявление и запятые
   let user_1 = 'Вася',
      age_1 = 20,
      message_1 = 'Привет';
   console.log(user_1, age_1, message_1)

   //Можно без объявления 
   user_2 = 'Кто-то'
   age_2 = 2000
   message_2 = 'Оно хочет есть'
   console.log(user_2, age_2, message_2)

   //Раньше объявляли через var
   var old_message = 'Дедовский привет';
   console.log(old_message)

   //Объявление константы, которую нельзя переопределить
   const birthday = '23.06.2003'
   console.log(birthday)

   //Обычно константы используются для обозначения сложныых значений
   //Например, цвет в 16-ричной системе
   //Принято называть в верхнем регистре
   const COLOR_ORANGE = "#FF7F00";

   let color = COLOR_ORANGE;
   console.log(color)

   //Простенькие задачки
   //1
   let admin, name;
   name = 'Джон'
   admin = name
   //alert(admin)

   //2
   let ourPlanet //Переменная для названия нашей планеты
   let activeUserName //Переменная для обозначения текущего пользователя 


  }
  variables();