// Task 5
//
//         Задание:
//         Найдите первый положительный элемент массива и выведите его на экран.

let values = [-1, -5, -6, -3, -10, -5, 3, 4, -1, -8, 1, -10, 3];

var result;

    for (var i = 0; i < values.length; i++) {
        if (values[i] > 0) {
            result =values[i];
            break;
        }
    }
    console.log(result);
