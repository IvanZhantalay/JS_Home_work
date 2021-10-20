
        Задание:
        Создайте два объекта, используя конструктор и литерал. Оба объекта должны содержать свойства firstName и lastName
        с произвольными значениями. Создайте функцию print, которая будет принимать в качестве параметра объект и выводить свойства
        lastName и firstName полученного объекта на экран.

        let first = new Object(); 
        first.firstName = "Ivan";              
        first.lastName = "Zhantalay";

        let second = {
                firstName: "Ivan",
                lastName: "Zhantalay"
        }; 

        function print(){
                console.log(first.firstName);
                console.log(first.lastName);
                console.log(second.firstName);
                console.log(second.lastName);
        }

        print(first, second)